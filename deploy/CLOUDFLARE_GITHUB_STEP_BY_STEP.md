# GitHub + Cloudflare Deployment

This project can be deployed without a traditional cloud server.

## What this setup does

- Static files are served from Cloudflare.
- Real-time dual-player traffic runs on Cloudflare Workers + Durable Objects.
- GitHub is the deployment source.

## 1. Create a GitHub repository

Create a new GitHub repository and upload the full `prototype` directory contents as the repository root.

Recommended branch:

- `main`

## 2. Create a Cloudflare API token

In Cloudflare dashboard, create an API token that can deploy Workers.

You will also need your:

- `Cloudflare Account ID`

## 3. Add GitHub repository secrets

In GitHub repository settings, add:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

## 4. First local preparation

Run locally before pushing:

```powershell
cd C:\Users\Mhy19\Desktop\网页版\prototype
cmd /c npm run check
```

## 5. Push to GitHub

After the files are in GitHub and secrets are configured, push to `main`.

The workflow file:

- `.github/workflows/deploy-cloudflare.yml`

will deploy automatically.

## 6. Set the Worker domain

After the first successful deploy, Cloudflare will provide a `workers.dev` domain.

You can use that domain directly, or bind a custom domain in Cloudflare dashboard.

## 7. Important notes

- This path does not require Tencent Cloud or Alibaba Cloud.
- Single-player mode works as a normal website.
- Dual-player mode works through Cloudflare WebSocket handling.
- If you use a custom domain, DNS must be managed in Cloudflare for the easiest setup.

## 8. Verify online

After deployment, open:

```text
https://your-worker-subdomain.workers.dev/healthz
```

You should see JSON showing the service is healthy.

Then open the site homepage and test:

- menu load
- single-player start
- dual-player room creation

## 9. If you want a custom domain

In Cloudflare dashboard:

1. Add your domain to Cloudflare
2. Change nameservers at your domain registrar
3. Bind the deployed Worker to your domain

## 10. Current limitation

I can prepare all project files locally, but I cannot log into your GitHub or Cloudflare account from here unless you explicitly provide account access and the environment allows that login step.
