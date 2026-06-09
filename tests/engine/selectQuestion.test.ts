import { describe, it, expect } from 'vitest';
import { nextTrait } from '../../src/engine/selectQuestion';
import type { Species, Trait } from '../../src/engine/types';

const traits: Trait[] = [
  { id: 'leaf', question: '?', options: [
    { id: 'simple', label: '', sketchId: 's' }, { id: 'compound', label: '', sketchId: 's' }] },
  { id: 'margin', question: '?', options: [
    { id: 'entire', label: '', sketchId: 's' }, { id: 'lobed', label: '', sketchId: 's' },
    { id: 'serrate', label: '', sketchId: 's' }] },
];
const sp = (n: string, t: Record<string, string[]>): Species =>
  ({ commonName: n, scientificName: n, traits: t, distinctiveNotes: '' });

describe('nextTrait', () => {
  it('picks the trait that splits candidates most evenly', () => {
    // leaf: 2 simple / 1 compound (max bucket 2). margin: 1/1/1 (max bucket 1) → margin wins
    const cands = [sp('a', { leaf: ['simple'], margin: ['entire'] }),
      sp('b', { leaf: ['simple'], margin: ['lobed'] }),
      sp('c', { leaf: ['compound'], margin: ['serrate'] })];
    expect(nextTrait(traits, cands, [])?.id).toBe('margin');
  });
  it('skips already-answered traits', () => {
    const cands = [sp('a', { leaf: ['simple'], margin: ['entire'] }),
      sp('b', { leaf: ['compound'], margin: ['lobed'] })];
    expect(nextTrait(traits, cands, ['margin'])?.id).toBe('leaf');
  });
  it('returns null when no trait can discriminate', () => {
    const cands = [sp('a', { leaf: ['simple'] }), sp('b', { leaf: ['simple'] })];
    expect(nextTrait(traits, cands, [])).toBeNull();
  });
});
