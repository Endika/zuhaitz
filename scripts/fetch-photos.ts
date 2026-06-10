/**
 * Dev-only pipeline: resolve each species' canonical Wikimedia photo, keep only
 * reusable (CC/PD) licenses, downscale to small webp, and write:
 *   - public/photos/<slug>.webp
 *   - src/data/photos.generated.ts  (slug -> PhotoMeta)
 *
 * Run: npm run photos            (set PHOTOS_LIMIT=3 to process only the first 3 species)
 *      npm run photos -- --force (re-download even if a webp already exists)
 * Network + Wikimedia APIs required; not run in CI.
 */
import { mkdir, writeFile, readdir } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import sharp from 'sharp';
import { dataset } from '../src/data/dataset';
import { photoSlug } from '../src/ui/photo';
import type { PhotoMeta } from '../src/engine/types';

const UA = 'zuhaitz/1.0 (https://github.com/Endika/zuhaitz; endika2@gmail.com)';
const FORCE = process.argv.includes('--force');
const LIMIT = Number(process.env.PHOTOS_LIMIT) || Infinity;
const ROOT = path.resolve(fileURLToPath(new URL('..', import.meta.url)));
const OUT_DIR = path.join(ROOT, 'public', 'photos');
const MANIFEST = path.join(ROOT, 'src', 'data', 'photos.generated.ts');

const REUSABLE = /^(cc0|public domain|cc by(-sa)?\b)/i;

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

async function sparqlImageFile(scientificName: string): Promise<string | null> {
  const q = `SELECT ?img WHERE { ?t wdt:P225 "${scientificName.replace(/"/g, '')}" . ?t wdt:P18 ?img . } LIMIT 1`;
  const url = `https://query.wikidata.org/sparql?format=json&query=${encodeURIComponent(q)}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA, Accept: 'application/sparql-results+json' } });
  if (!res.ok) return null;
  const j = (await res.json()) as { results: { bindings: Array<{ img?: { value: string } }> } };
  const imgUrl = j.results.bindings[0]?.img?.value;
  if (!imgUrl) return null;
  return decodeURIComponent(imgUrl.split('/').pop() ?? '');
}

interface CommonsInfo { url: string; author: string; license: string; descUrl: string; }

async function commonsInfo(fileName: string): Promise<CommonsInfo | null> {
  const title = 'File:' + fileName;
  const url =
    'https://commons.wikimedia.org/w/api.php?action=query&format=json&prop=imageinfo' +
    '&iiprop=url|extmetadata&titles=' + encodeURIComponent(title);
  const res = await fetch(url, { headers: { 'User-Agent': UA } });
  if (!res.ok) return null;
  const j = (await res.json()) as {
    query: { pages: Record<string, { imageinfo?: Array<{ url: string; descriptionurl: string; extmetadata: Record<string, { value: string }> }> }> };
  };
  const page = Object.values(j.query.pages)[0];
  const info = page?.imageinfo?.[0];
  if (!info) return null;
  const md = info.extmetadata ?? {};
  const license = (md.LicenseShortName?.value ?? '').trim();
  const author = (md.Artist?.value ?? '').replace(/<[^>]+>/g, '').trim() || 'Wikimedia Commons';
  return { url: info.url, author, license, descUrl: info.descriptionurl };
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true });
  const existing = new Set((existsSync(OUT_DIR) ? await readdir(OUT_DIR) : []).map((f) => f.replace(/\.webp$/, '')));

  const manifest: Record<string, PhotoMeta> = {};
  const discarded: string[] = [];
  let downloaded = 0;

  const targets = dataset.species.slice(0, LIMIT);
  for (const sp of targets) {
    const slug = photoSlug(sp.scientificName);
    const file = `${slug}.webp`;

    try {
      const imgFile = await sparqlImageFile(sp.scientificName);
      await sleep(200);
      if (!imgFile) { discarded.push(`${sp.scientificName}: no P18`); continue; }

      const info = await commonsInfo(imgFile);
      await sleep(200);
      if (!info) { discarded.push(`${sp.scientificName}: no commons info`); continue; }
      if (!REUSABLE.test(info.license)) { discarded.push(`${sp.scientificName}: license "${info.license}"`); continue; }

      if (FORCE || !existing.has(slug)) {
        const bin = await fetch(info.url, { headers: { 'User-Agent': UA } });
        if (!bin.ok) { discarded.push(`${sp.scientificName}: download ${bin.status}`); continue; }
        const buf = Buffer.from(await bin.arrayBuffer());
        const webp = await sharp(buf).resize({ width: 512, withoutEnlargement: true }).webp({ quality: 72 }).toBuffer();
        await writeFile(path.join(OUT_DIR, file), webp);
        console.log(`ok  ${sp.scientificName.padEnd(28)} ${(webp.length / 1024).toFixed(0)}KB  ${info.license}`);
        await sleep(200);
      } else {
        console.log(`skip ${sp.scientificName.padEnd(28)} (exists)  ${info.license}`);
      }

      manifest[slug] = { file, author: info.author, license: info.license, sourceUrl: info.descUrl };
      downloaded++;
    } catch (err) {
      discarded.push(`${sp.scientificName}: ERR ${(err as Error).message}`);
    }
  }

  const sorted = Object.keys(manifest).sort().reduce<Record<string, PhotoMeta>>((a, k) => ((a[k] = manifest[k]!), a), {});
  const body =
    '// GENERATED by scripts/fetch-photos.ts — do not edit by hand.\n' +
    "import type { PhotoMeta } from '../engine/types';\n\n" +
    'export const photos: Record<string, PhotoMeta> = ' +
    JSON.stringify(sorted, null, 2) +
    ';\n';
  await writeFile(MANIFEST, body);

  console.log(`\nCoverage: ${downloaded}/${targets.length} photos (of ${dataset.species.length} total species)`);
  if (discarded.length) console.log('Discarded:\n  ' + discarded.join('\n  '));
}

main().catch((e) => { console.error(e); process.exit(1); });
