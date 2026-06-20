export class WordWhisperRoom {
  constructor(state) {
    this.state = state;
    this.sessions = new Map();
  }

  async fetch(request) {
    const url = new URL(request.url);
    if (url.pathname !== '/ws') {
      return new Response('Not found', { status: 404 });
    }

    if (request.headers.get('Upgrade') !== 'websocket') {
      return new Response('Expected websocket', { status: 426 });
    }

    const pair = new WebSocketPair();
    const [client, server] = Object.values(pair);
    server.accept();

    const role = url.searchParams.get('role') === 'p2' ? 'p2' : 'p1';
    const roomCode = String(url.searchParams.get('room') || 'WORD-WHISPER');
    const sessionId = crypto.randomUUID();
    const assignedRole = this.assignRole(role, sessionId);

    this.sessions.set(sessionId, {
      id: sessionId,
      socket: server,
      roomCode,
      role: assignedRole,
    });

    server.addEventListener('message', (event) => {
      this.onMessage(sessionId, event.data);
    });

    const closeSession = () => {
      this.removeSession(sessionId);
    };
    server.addEventListener('close', closeSession);
    server.addEventListener('error', closeSession);

    this.send(server, {
      type: 'roomJoined',
      roomCode,
      role: assignedRole,
      players: this.sessions.size,
    });
    this.broadcast(roomCode, {
      type: 'peerJoined',
      roomCode,
      role: assignedRole,
      players: this.sessions.size,
    }, sessionId);

    return new Response(null, { status: 101, webSocket: client });
  }

  assignRole(preferredRole, sessionId) {
    const used = new Set(
      [...this.sessions.values()]
        .filter((session) => session.id !== sessionId)
        .map((session) => session.role),
    );
    if (!preferredRole || used.has(preferredRole)) {
      return used.has('p1') ? 'p2' : 'p1';
    }
    return preferredRole;
  }

  onMessage(sessionId, raw) {
    const session = this.sessions.get(sessionId);
    if (!session) return;

    let message = null;
    try {
      message = typeof raw === 'string' ? JSON.parse(raw) : JSON.parse(new TextDecoder().decode(raw));
    } catch (err) {
      return;
    }

    if (!message || typeof message !== 'object') return;

    if (message.type === 'joinRoom') {
      const roomCode = String(message.roomCode || session.roomCode || 'WORD-WHISPER');
      session.roomCode = roomCode;
      if (message.role === 'p1' || message.role === 'p2') {
        session.role = this.assignRole(message.role, session.id);
      }
      this.send(session.socket, {
        type: 'roomJoined',
        roomCode: session.roomCode,
        role: session.role,
        players: this.countRoomPlayers(session.roomCode),
      });
      return;
    }

    if (!session.roomCode) return;
    if (['battleStart', 'dualHit', 'resetBattle'].includes(message.type)) {
      this.broadcast(session.roomCode, {
        ...message,
        roomCode: session.roomCode,
      }, sessionId);
    }
  }

  countRoomPlayers(roomCode) {
    return [...this.sessions.values()].filter((session) => session.roomCode === roomCode).length;
  }

  broadcast(roomCode, payload, exceptId = null) {
    for (const session of this.sessions.values()) {
      if (session.roomCode !== roomCode) continue;
      if (exceptId && session.id === exceptId) continue;
      this.send(session.socket, payload);
    }
  }

  send(socket, payload) {
    try {
      socket.send(JSON.stringify(payload));
    } catch (err) {}
  }

  removeSession(sessionId) {
    const session = this.sessions.get(sessionId);
    if (!session) return;
    this.sessions.delete(sessionId);
    if (session.roomCode) {
      this.broadcast(session.roomCode, {
        type: 'peerLeft',
        roomCode: session.roomCode,
        role: session.role,
        players: this.countRoomPlayers(session.roomCode),
      }, sessionId);
    }
  }
}
