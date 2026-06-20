import { WordWhisperRoom } from './room-do.js';

function json(data, init = {}) {
  return new Response(JSON.stringify(data), {
    ...init,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      ...(init.headers || {}),
    },
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === '/healthz') {
      return json({ ok: true, service: 'word-whisper-cloudflare' });
    }

    if (url.pathname === '/ws') {
      const roomCode = String(url.searchParams.get('room') || 'WORD-WHISPER');
      const id = env.WORD_WHISPER_ROOM.idFromName(roomCode);
      const stub = env.WORD_WHISPER_ROOM.get(id);
      return stub.fetch(request);
    }

    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }

    return new Response('Not found', { status: 404 });
  },
};

export { WordWhisperRoom };
