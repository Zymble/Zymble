// Serves the static build (.vercel/output/static) like Vercel does: /path/ -> /path/index.html,
// unknown paths -> 404.html. `astro preview` is not supported by the Vercel adapter.
// Usage: node scripts/serve-static.mjs [port]
import { createReadStream, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve('.vercel/output/static');
const port = Number(process.argv[2] ?? process.env.PORT ?? 4321);
const types = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.webmanifest': 'application/manifest+json',
  '.xml': 'application/xml',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.ico': 'image/x-icon',
  '.woff2': 'font/woff2',
  '.mp4': 'video/mp4',
  '.vtt': 'text/vtt',
};

function file(path) {
  try {
    const s = statSync(path);
    if (s.isFile()) return path;
    if (s.isDirectory()) return file(join(path, 'index.html'));
  } catch {
    /* not found */
  }
  return null;
}

createServer((req, res) => {
  const { pathname } = new URL(req.url ?? '/', 'http://localhost');
  const safe = normalize(decodeURIComponent(pathname)).replace(/^(\.\.[/\\])+/, '');
  if (!safe.endsWith('/') && !extname(safe) && file(join(root, safe))) {
    res.writeHead(308, { Location: `${pathname}/` }).end();
    return;
  }
  const found = file(join(root, safe));
  const path = found ?? join(root, '404.html');
  res.writeHead(found ? 200 : 404, {
    'Content-Type': types[extname(path)] ?? 'application/octet-stream',
    'Cache-Control': path.includes('/_astro/') ? 'public, max-age=31536000, immutable' : 'no-cache',
  });
  createReadStream(path).pipe(res);
}).listen(port, '0.0.0.0', () => console.log(`Serving ${root} on http://localhost:${port}`));
