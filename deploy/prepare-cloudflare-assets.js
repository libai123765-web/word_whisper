const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const dist = path.join(root, 'dist');

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removeDir(targetPath) {
  fs.rmSync(targetPath, { recursive: true, force: true });
}

function copyFile(src, dest) {
  ensureDir(path.dirname(dest));
  fs.copyFileSync(src, dest);
}

function copyDir(src, dest) {
  ensureDir(dest);
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else if (entry.isFile()) {
      copyFile(srcPath, destPath);
    }
  }
}

removeDir(dist);
ensureDir(dist);

copyFile(path.join(root, 'index.html'), path.join(dist, 'index.html'));
copyFile(path.join(root, 'styles.css'), path.join(dist, 'styles.css'));
copyFile(path.join(root, 'app.js'), path.join(dist, 'app.js'));
copyDir(path.join(root, 'js'), path.join(dist, 'js'));
copyDir(path.join(root, 'assets'), path.join(dist, 'assets'));

console.log('Prepared Cloudflare assets in dist/');
