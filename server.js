/* Word Whisper local/LAN server — static files + tiny WebSocket relay, no external deps. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const PORT = Number(process.env.PORT || 3000);
const ROOT = __dirname;
const rooms = new Map();
const clients = new Set();

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.mp3': 'audio/mpeg',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function safePath(urlPath) {
  try {
    const clean = decodeURIComponent((urlPath || '/').split('?')[0]).replace(/^\/+/, '') || 'index.html';
    const full = path.resolve(ROOT, clean);
    const relative = path.relative(ROOT, full);
    if (relative.startsWith('..') || path.isAbsolute(relative)) return null;
    return full;
  } catch (err) {
    return null;
  }
}

const server = http.createServer((req, res) => {
  if ((req.url || '').split('?')[0] === '/healthz') {
    res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
    res.end(JSON.stringify({ ok: true, service: 'word-whisper' }));
    return;
  }
  const file = safePath(req.url || '/');
  if (!file) {
    res.writeHead(403); res.end('Forbidden'); return;
  }
  fs.stat(file, (err, stat) => {
    let target = file;
    if (!err && stat.isDirectory()) target = path.join(file, 'index.html');
    fs.readFile(target, (readErr, data) => {
      if (readErr) {
        res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
        res.end('Not found');
        return;
      }
      res.writeHead(200, { 'Content-Type': MIME[path.extname(target)] || 'application/octet-stream' });
      res.end(data);
    });
  });
});

function wsAcceptKey(key) {
  return crypto.createHash('sha1')
    .update(key + '258EAFA5-E914-47DA-95CA-C5AB0DC85B11')
    .digest('base64');
}

function encodeFrame(text) {
  const payload = Buffer.from(text);
  const len = payload.length;
  if (len < 126) return Buffer.concat([Buffer.from([0x81, len]), payload]);
  if (len < 65536) {
    const head = Buffer.alloc(4);
    head[0] = 0x81; head[1] = 126; head.writeUInt16BE(len, 2);
    return Buffer.concat([head, payload]);
  }
  const head = Buffer.alloc(10);
  head[0] = 0x81; head[1] = 127; head.writeBigUInt64BE(BigInt(len), 2);
  return Buffer.concat([head, payload]);
}

function send(client, obj) {
  if (!client.socket.writable) return;
  try { client.socket.write(encodeFrame(JSON.stringify(obj))); } catch (err) {}
}

function broadcast(roomCode, obj, except = null) {
  const room = rooms.get(roomCode);
  if (!room) return;
  for (const client of room) {
    if (client !== except) send(client, obj);
  }
}

function parseFrames(buffer) {
  const messages = [];
  let offset = 0;
  while (offset + 2 <= buffer.length) {
    const frameStart = offset;
    const first = buffer[offset++];
    const second = buffer[offset++];
    const opcode = first & 0x0f;
    const masked = Boolean(second & 0x80);
    let len = second & 0x7f;
    if (len === 126) {
      if (offset + 2 > buffer.length) {
        offset = frameStart;
        break;
      }
      len = buffer.readUInt16BE(offset); offset += 2;
    } else if (len === 127) {
      if (offset + 8 > buffer.length) {
        offset = frameStart;
        break;
      }
      len = Number(buffer.readBigUInt64BE(offset)); offset += 8;
    }
    let mask = null;
    if (masked) {
      if (offset + 4 > buffer.length) {
        offset = frameStart;
        break;
      }
      mask = buffer.subarray(offset, offset + 4); offset += 4;
    }
    if (offset + len > buffer.length) {
      offset = frameStart;
      break;
    }
    const payload = Buffer.from(buffer.subarray(offset, offset + len)); offset += len;
    if (mask) {
      for (let i = 0; i < payload.length; i += 1) payload[i] ^= mask[i % 4];
    }
    if (opcode === 0x8) {
      return {
        messages,
        remaining: buffer.subarray(offset),
      };
    }
    if (opcode === 0x1) messages.push(payload.toString('utf8'));
  }
  return {
    messages,
    remaining: buffer.subarray(offset),
  };
}

function joinRoom(client, roomCode, role) {
  if (!roomCode) roomCode = 'WORD-WHISPER';
  leaveRoom(client);
  if (!rooms.has(roomCode)) rooms.set(roomCode, new Set());
  const room = rooms.get(roomCode);
  const used = new Set([...room].filter(c => c !== client).map(c => c.role));
  let assigned = role;
  if (!assigned || used.has(assigned)) assigned = used.has('p1') ? 'p2' : 'p1';
  client.roomCode = roomCode;
  client.role = assigned;
  room.add(client);
  send(client, { type: 'roomJoined', roomCode, role: assigned, players: room.size });
  broadcast(roomCode, { type: 'peerJoined', roomCode, role: assigned, players: room.size }, client);
}

function leaveRoom(client) {
  if (!client.roomCode) return;
  const room = rooms.get(client.roomCode);
  if (room) {
    room.delete(client);
    broadcast(client.roomCode, { type: 'peerLeft', roomCode: client.roomCode, role: client.role, players: room.size }, client);
    if (room.size === 0) rooms.delete(client.roomCode);
  }
  client.roomCode = null;
}

function onMessage(client, text) {
  let msg = null;
  try { msg = JSON.parse(text); } catch (err) { return; }
  if (!msg || typeof msg !== 'object') return;
  if (msg.type === 'joinRoom') {
    joinRoom(client, String(msg.roomCode || 'WORD-WHISPER'), msg.role === 'p2' ? 'p2' : 'p1');
    return;
  }
  if (!client.roomCode) return;
  if (['battleStart', 'dualHit', 'resetBattle'].includes(msg.type)) {
    broadcast(client.roomCode, { ...msg, roomCode: client.roomCode }, client);
  }
}

server.on('upgrade', (req, socket) => {
  if (!(req.url || '').startsWith('/ws')) {
    socket.destroy(); return;
  }
  const key = req.headers['sec-websocket-key'];
  if (!key) { socket.destroy(); return; }
  socket.write([
    'HTTP/1.1 101 Switching Protocols',
    'Upgrade: websocket',
    'Connection: Upgrade',
    `Sec-WebSocket-Accept: ${wsAcceptKey(key)}`,
    '',
    '',
  ].join('\r\n'));

  const client = { socket, id: crypto.randomUUID(), roomCode: null, role: null, buffer: Buffer.alloc(0) };
  clients.add(client);
  socket.on('data', (buffer) => {
    client.buffer = Buffer.concat([client.buffer, buffer]);
    const parsed = parseFrames(client.buffer);
    client.buffer = parsed.remaining || Buffer.alloc(0);
    (parsed.messages || []).forEach(text => onMessage(client, text));
  });
  socket.on('close', () => { leaveRoom(client); clients.delete(client); });
  socket.on('error', () => { leaveRoom(client); clients.delete(client); });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Word Whisper server running: http://localhost:${PORT}`);
  console.log('LAN: open http://<your IPv4>:3000 on another device in the same Wi-Fi.');
});
