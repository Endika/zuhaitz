import { describe, it, expect } from 'vitest';
import { candidatesFor } from '../../src/engine/filter';
import type { Species } from '../../src/engine/types';

const oak: Species = { commonName: 'Roble', scientificName: 'Quercus robur',
  traits: { margin: ['lobed'], leaf: ['simple'] }, distinctiveNotes: '' };
const privet: Species = { commonName: 'Aligustre', scientificName: 'Ligustrum',
  traits: { margin: ['entire', 'wavy'], leaf: ['simple'] }, distinctiveNotes: '' };
const ash: Species = { commonName: 'Fresno', scientificName: 'Fraxinus',
  traits: { margin: ['serrate'], leaf: ['compound'] }, distinctiveNotes: '' };
const all = [oak, privet, ash];

describe('candidatesFor', () => {
  it('keeps species whose value-set contains the answer', () => {
    const r = candidatesFor(all, [{ traitId: 'leaf', value: 'simple' }]);
    expect(r.map(s => s.commonName).sort()).toEqual(['Aligustre', 'Roble']);
  });
  it('matches variable traits (value-set intersection)', () => {
    const r = candidatesFor(all, [{ traitId: 'margin', value: 'wavy' }]);
    expect(r.map(s => s.commonName)).toEqual(['Aligustre']);
  });
  it('"don\'t know" (null) discards nothing', () => {
    const r = candidatesFor(all, [{ traitId: 'margin', value: null }]);
    expect(r).toHaveLength(3);
  });
  it('applies multiple answers cumulatively', () => {
    const r = candidatesFor(all, [
      { traitId: 'leaf', value: 'simple' }, { traitId: 'margin', value: 'lobed' }]);
    expect(r.map(s => s.commonName)).toEqual(['Roble']);
  });
});
