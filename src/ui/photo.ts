import type { PhotoMeta, Species } from '../engine/types';
import { photos } from '../data/photos.generated';
import { el } from './dom';
import { loc } from '../i18n';

/** Stable filename-safe key for a species, derived from its scientific name. */
export function photoSlug(scientificName: string): string {
  return scientificName
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/** Look up a species' photo metadata; undefined means "no photo, fall back to sketches". */
export function photoFor(
  scientificName: string,
  table: Record<string, PhotoMeta> = photos,
): PhotoMeta | undefined {
  return table[photoSlug(scientificName)];
}

/**
 * Render the photo figure for a species, or null when there is no bundled photo.
 * Attribution is mandatory: it is always rendered with the image.
 */
export function renderPhoto(species: Species): HTMLElement | null {
  const meta = photoFor(species.scientificName);
  if (!meta) return null;
  const src = `${import.meta.env.BASE_URL}photos/${meta.file}`;
  return el('figure', { class: 'card__photo' }, [
    el('img', {
      src,
      alt: loc(species.commonName),
      loading: 'lazy',
      decoding: 'async',
    }),
    el('figcaption', { class: 'card__attrib' }, [
      el('a', {
        href: meta.sourceUrl,
        target: '_blank',
        rel: 'noopener noreferrer',
        text: `${meta.author} · ${meta.license}`,
      }),
    ]),
  ]);
}
