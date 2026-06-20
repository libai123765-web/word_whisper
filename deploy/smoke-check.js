const http = require('http');
const net = require('net');
const path = require('path');
const fs = require('fs');
const crypto = require('crypto');
const { spawnSync, spawn } = require('child_process');

const ROOT = path.resolve(__dirname, '..');
const PORT = 32123;
const HOST = '127.0.0.1';

const REQUIRED_PATHS = [
  'index.html',
  'app.js',
  'styles.css',
  'server.js',
  'js/game-engine.js',
  'js/study-notes.js',
  'js/word-bank.js',
  'assets/bgm.mp3',
  'deploy/nginx-word-whisper.conf',
  'deploy/ALIYUN_STEP_BY_STEP.md',
];

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

function checkFilesExist() {
  for (const rel of REQUIRED_PATHS) {
    const full = path.join(ROOT, rel);
    assert(fs.existsSync(full), `Missing required file: ${rel}`);
  }
}

function checkSyntax() {
  const files = [
    'server.js',
    'app.js',
    'js/game-engine.js',
    'js/study-notes.js',
    'js/word-bank.js',
  ];
  for (const rel of files) {
    const result = spawnSync(process.execPath, ['--check', rel], {
      cwd: ROOT,
      encoding: 'utf8',
    });
    assert(result.status === 0, `Syntax check failed for ${rel}\n${result.stderr || result.stdout}`);
  }
}

function httpGet(targetPath) {
  return new Promise((resolve, reject) => {
    const req = http.get({ host: HOST, port: PORT, path: targetPath }, (res) => {
      const chunks = [];
      res.on('data', (chunk) => chunks.push(chunk));
      res.on('end', () => {
        resolve({
          statusCode: res.statusCode,
          headers: res.headers,
          body: Buffer.concat(chunks),
        });
      });
    });
    req.on('error', reject);
  });
}

function checkWebSocketUpgrade() {
  return new Promise((resolve, reject) => {
    const key = crypto.randomBytes(16).toString('base64');
    const socket = net.connect(PORT, HOST, () => {
      socket.write(
        [
          'GET /ws HTTP/1.1',
          `Host: ${HOST}:${PORT}`,
          'Upgrade: websocket',
          'Connection: Upgrade',
          `Sec-WebSocket-Key: ${key}`,
          'Sec-WebSocket-Version: 13',
          '',
          '',
        ].join('\r\n'),
      );
    });

    socket.setTimeout(5000, () => {
      socket.destroy();
      reject(new Error('WebSocket upgrade timed out'));
    });

    socket.on('data', (chunk) => {
      const text = chunk.toString('utf8');
      socket.end();
      if (!text.includes('101 Switching Protocols')) {
        reject(new Error(`Unexpected WebSocket handshake response\n${text}`));
        return;
      }
      resolve();
    });

    socket.on('error', reject);
  });
}

async function waitForServer(timeoutMs = 8000) {
  const startedAt = Date.now();
  while (Date.now() - startedAt < timeoutMs) {
    try {
      const res = await httpGet('/healthz');
      if (res.statusCode === 200) return;
    } catch (err) {}
    await new Promise((resolve) => setTimeout(resolve, 200));
  }
  throw new Error('Server did not become ready in time');
}

async function runHttpChecks() {
  const indexRes = await httpGet('/');
  assert(indexRes.statusCode === 200, 'GET / should return 200');
  assert(String(indexRes.headers['content-type'] || '').includes('text/html'), 'GET / should return HTML');

  const appRes = await httpGet('/app.js');
  assert(appRes.statusCode === 200, 'GET /app.js should return 200');
  assert(String(appRes.headers['content-type'] || '').includes('application/javascript'), 'GET /app.js should return JS');

  const audioRes = await httpGet('/assets/bgm.mp3');
  assert(audioRes.statusCode === 200, 'GET /assets/bgm.mp3 should return 200');
  assert(String(audioRes.headers['content-type'] || '').includes('audio/mpeg'), 'GET /assets/bgm.mp3 should return audio/mpeg');

  const healthRes = await httpGet('/healthz');
  assert(healthRes.statusCode === 200, 'GET /healthz should return 200');
}

async function main() {
  checkFilesExist();
  checkSyntax();

  const child = spawn(process.execPath, ['server.js'], {
    cwd: ROOT,
    env: { ...process.env, PORT: String(PORT) },
    stdio: ['ignore', 'pipe', 'pipe'],
  });

  let stdout = '';
  let stderr = '';
  child.stdout.on('data', (chunk) => {
    stdout += chunk.toString('utf8');
  });
  child.stderr.on('data', (chunk) => {
    stderr += chunk.toString('utf8');
  });

  try {
    await waitForServer();
    await runHttpChecks();
    await checkWebSocketUpgrade();
    console.log('Smoke check passed: HTTP, static assets, health endpoint, and WebSocket upgrade are all working.');
  } finally {
    child.kill();
  }

  if (child.exitCode && child.exitCode !== 0) {
    throw new Error(`Server exited unexpectedly\nSTDOUT:\n${stdout}\nSTDERR:\n${stderr}`);
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});
