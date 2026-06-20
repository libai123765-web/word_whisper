# Alibaba Cloud Step By Step

## 1. Connect

```bash
ssh root@your_server_ip
```

## 2. Install Node.js / Nginx / unzip

```bash
apt update
apt install -y curl nginx unzip
curl -fsSL https://deb.nodesource.com/setup_20.x | bash -
apt install -y nodejs
node -v
npm -v
```

## 3. Upload Project

Put your project on the server.

If you generated `word-whisper-release.zip` locally:

```bash
mkdir -p /var/www/word-whisper
cd /var/www/word-whisper
unzip -o /root/word-whisper-release.zip
```

If you upload files directly instead of zip, place the project files inside `/var/www/word-whisper`.

## 4. Smoke Check Before Start

```bash
cd /var/www/word-whisper
npm run check
```

## 5. Start Service

```bash
cd /var/www/word-whisper
npm start
```

If it works, stop it with `Ctrl + C`.

## 6. Run with PM2

```bash
npm install -g pm2
cd /var/www/word-whisper
pm2 start ecosystem.config.js
pm2 save
pm2 startup
pm2 list
```

## 7. Configure Nginx

```bash
cp deploy/nginx-word-whisper.conf /etc/nginx/sites-available/word-whisper
sed -i 's/your-domain.com/example.com/g' /etc/nginx/sites-available/word-whisper
ln -sf /etc/nginx/sites-available/word-whisper /etc/nginx/sites-enabled/word-whisper
nginx -t
systemctl reload nginx
```

## 8. Open Firewall / Security Group

Open:

- `80`
- `443`

Do not expose `3000` publicly when Nginx is enabled.

## 9. HTTPS

```bash
apt install -y certbot python3-certbot-nginx
certbot --nginx -d your-domain.com
```

## 10. Final Verification

```bash
curl http://127.0.0.1:3000/healthz
curl -I http://your-domain.com
pm2 status
nginx -t
```

If HTTPS is enabled, also check:

```bash
curl -I https://your-domain.com
```

## 11. Update Later

```bash
cd /var/www/word-whisper
npm run check
pm2 restart word-whisper
nginx -t
systemctl reload nginx
```
