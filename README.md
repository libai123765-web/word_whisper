# Word Whisper Web

This project now supports two deployment paths:

- local / traditional Node server
- GitHub + Cloudflare without a traditional cloud server

## Local Run

```powershell
cd C:\Users\Mhy19\Desktop\网页版\prototype
cmd /c npm start
```

Open:

```text
http://localhost:3000
```

## Local Checks

```powershell
cmd /c npm run check
node --check src\cloudflare\worker.js
node --check src\cloudflare\room-do.js
```

## Cloudflare Deployment

Main files:

- `wrangler.jsonc`
- `src/cloudflare/worker.js`
- `src/cloudflare/room-do.js`
- `.github/workflows/deploy-cloudflare.yml`
- `deploy/CLOUDFLARE_GITHUB_STEP_BY_STEP.md`

Recommended flow:

1. Put this project in a GitHub repository
2. Add `CLOUDFLARE_API_TOKEN` and `CLOUDFLARE_ACCOUNT_ID` as GitHub repository secrets
3. Push to `main`
4. Let GitHub Actions deploy to Cloudflare

Detailed guide:

- [deploy/CLOUDFLARE_GITHUB_STEP_BY_STEP.md](C:/Users/Mhy19/Desktop/网页版/prototype/deploy/CLOUDFLARE_GITHUB_STEP_BY_STEP.md)

## Notes

- Single-player mode works as a normal static website.
- Dual-player mode is designed to work through Cloudflare Worker WebSocket handling.
- The old `server.js` path is still kept for local development and fallback verification.
