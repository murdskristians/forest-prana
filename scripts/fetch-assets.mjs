// Downloads the site's images from the original Canva site into public/media.
// Runs automatically before `npm run dev` / `npm run build`; already-downloaded files are skipped.
import { readFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASE = 'https://forestprana.my.canva.site/_assets/media/';
const outDir = join(root, 'public', 'media');
mkdirSync(outDir, { recursive: true });

const src = readFileSync(join(root, 'src', 'data', 'products.ts'), 'utf8');
const files = [...new Set([...src.matchAll(/m\('([\w.]+)'\)/g)].map((x) => x[1]))];

let ok = 0, skipped = 0, failed = 0;
for (const f of files) {
  const dest = join(outDir, f);
  if (existsSync(dest)) { skipped++; continue; }
  try {
    const res = await fetch(BASE + f);
    if (!res.ok) throw new Error(res.status);
    writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
    ok++;
  } catch (e) {
    failed++;
    console.warn(`  ! ${f}: ${e.message}`);
  }
}
console.log(`[fetch-assets] ${ok} downloaded, ${skipped} cached, ${failed} failed (${files.length} total)`);
