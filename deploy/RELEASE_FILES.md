# Release Files

Upload these files and folders to the server:

- `index.html`
- `app.js`
- `styles.css`
- `server.js`
- `package.json`
- `package-lock.json`
- `ecosystem.config.js`
- `assets/`
- `js/`
- `deploy/nginx-word-whisper.conf`
- `deploy/smoke-check.js`
- `deploy/create-release.ps1`

Optional docs:

- `README.md`
- `deploy/ALIYUN_STEP_BY_STEP.md`

Recommended before upload:

```powershell
cmd /c npm run check
cmd /c npm run release
```
