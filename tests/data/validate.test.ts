import { describe, it, expect } from 'vitest';
import { validateDataset } from '../../src/data/validate';
import type { Dataset } from '../../src/engine/types';

const base: Dataset = {
  traits: [{ id: 'leaf', question: 'Leaf?', options: [
    { id: 'simple', label: 'Simple', sketchId: 'leaf-simple' }] }],
  sketches: { 'leaf-simple': '<svg/>' },
  species: [{ commonName: 'Roble', scientificName: 'Quercus', traits: { leaf: ['simple'] }, distinctiveNotes: 'x' }],
};

describe('validateDataset', () => {
  it('passes a well-formed dataset', () => {
    expect(validateDataset(base).errors).toEqual([]);
  });
  it('flags an option referencing a missing sketch', () => {
    const bad = { ...base, sketches: {} };
    expect(validateDataset(bad).errors.join()).toMatch(/sketch.*leaf-simple/i);
  });
  it('flags a species referencing an unknown trait', () => {
    const bad = { ...base, species: [{ ...base.species[0]!, traits: { bark: ['rough'] } }] };
    expect(validateDataset(bad).errors.join()).toMatch(/trait.*bark/i);
  });
  it('flags a species value not in the trait options', () => {
    const bad = { ...base, species: [{ ...base.species[0]!, traits: { leaf: ['compound'] } }] };
    expect(validateDataset(bad).errors.join()).toMatch(/value.*compound/i);
  });
  it('warns on two indistinguishable species (identical answer-set)', () => {
    const dup = { ...base, species: [base.species[0]!, { ...base.species[0]!, commonName: 'Roble2' }] };
    expect(validateDataset(dup).warnings.join()).toMatch(/indistinguishable/i);
  });
});
