import { describe, it, expect } from 'vitest';
import { loc, t } from '../../src/i18n';

describe('loc()', () => {
  it('passes a bare string through unchanged for any locale', () => {
    expect(loc('Encina', 'es')).toBe('Encina');
    expect(loc('Encina', 'en')).toBe('Encina');
  });

  it('looks up the localized value by locale', () => {
    const v = { es: 'Bellota', en: 'Acorn' };
    expect(loc(v, 'es')).toBe('Bellota');
    expect(loc(v, 'en')).toBe('Acorn');
  });
});

describe('t()', () => {
  it('returns the Spanish UI string', () => {
    expect(t('home.start', 'es')).toBe('Empezar');
  });

  it('returns the English UI string', () => {
    expect(t('home.start', 'en')).toBe('Start');
  });
});
