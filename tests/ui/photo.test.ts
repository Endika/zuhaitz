import { describe, it, expect } from 'vitest';
import { photoSlug, photoFor } from '../../src/ui/photo';
import type { PhotoMeta } from '../../src/engine/types';

describe('photoSlug()', () => {
  it('lowercases and hyphenates a binomial', () => {
    expect(photoSlug('Pinus sylvestris')).toBe('pinus-sylvestris');
  });

  it('collapses non-alphanumerics and trims edges', () => {
    expect(photoSlug('Pinus nigra subsp. salzmannii')).toBe('pinus-nigra-subsp-salzmannii');
  });
});

describe('photoFor()', () => {
  const table: Record<string, PhotoMeta> = {
    'pinus-sylvestris': {
      file: 'pinus-sylvestris.webp',
      author: 'Jane Doe',
      license: 'CC BY-SA 3.0',
      sourceUrl: 'https://commons.wikimedia.org/wiki/File:Pinus.jpg',
    },
  };

  it('returns the meta for a known species', () => {
    expect(photoFor('Pinus sylvestris', table)?.file).toBe('pinus-sylvestris.webp');
  });

  it('returns undefined for an unknown species (fallback signal)', () => {
    expect(photoFor('Quercus ilex', table)).toBeUndefined();
  });
});
