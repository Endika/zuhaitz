import { describe, it, expect } from 'vitest';
import { validateDataset } from '../../src/data/validate';
import type { Dataset } from '../../src/engine/types';

const base: Dataset = {
  traits: [{ id: 'leaf', question: 'Leaf?', options: [
    { id: 'simple', label: 'Simple', sketchId: 'leaf-simple' }] }],
  sketches: { 'leaf-simple': '<svg/>' },
  species: [{ commonName: 'Roble', scientificName: 'Quercus', traits: { leaf: ['simple'] }, distinctiveNotes: 'x' }],
};

// Dataset shaped to exercise the conifer/palm invariant and required-key rules:
// it has the three leaf-bearing traits plus the broadleaf-only margin/leafShape.
const naBase: Dataset = {
  traits: [
    { id: 'leaf', question: 'Leaf?', options: [
      { id: 'simple', label: 'Simple', sketchId: 'na' },
      { id: 'needle', label: 'Needle', sketchId: 'na' }] },
    { id: 'habit', question: 'Habit?', options: [
      { id: 'rounded', label: 'Rounded', sketchId: 'na' },
      { id: 'palm', label: 'Palm', sketchId: 'na' }] },
    { id: 'margin', question: 'Margin?', options: [
      { id: 'entire', label: 'Entire', sketchId: 'na' },
      { id: 'n-a', label: 'N/A', sketchId: 'na' }] },
    { id: 'leafShape', question: 'Shape?', options: [
      { id: 'palmate', label: 'Palmate', sketchId: 'na' },
      { id: 'n-a', label: 'N/A', sketchId: 'na' }] },
  ],
  sketches: { na: '<svg/>' },
  species: [{ commonName: 'Pino', scientificName: 'Pinus', traits: {
    leaf: ['needle'], habit: ['rounded'], margin: ['n-a'], leafShape: ['n-a'],
  }, distinctiveNotes: 'x' }],
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

  it('accepts a needle/palm species that uses n-a for margin and leafShape', () => {
    expect(validateDataset(naBase).errors).toEqual([]);
  });

  it('flags a palm whose leafShape is not n-a (conifer/palm invariant)', () => {
    const bad = { ...naBase, species: [{ ...naBase.species[0]!, traits: {
      leaf: ['simple'], habit: ['palm'], margin: ['n-a'], leafShape: ['palmate'],
    } }] };
    expect(validateDataset(bad).errors.join()).toMatch(/needle\/scale\/palm must use margin/i);
  });

  it('flags a needle species whose margin is not n-a (conifer/palm invariant)', () => {
    const bad = { ...naBase, species: [{ ...naBase.species[0]!, traits: {
      leaf: ['needle'], habit: ['rounded'], margin: ['entire'], leafShape: ['n-a'],
    } }] };
    expect(validateDataset(bad).errors.join()).toMatch(/needle\/scale\/palm must use margin/i);
  });

  it('flags a species missing a required trait key', () => {
    const bad = { ...naBase, species: [{ ...naBase.species[0]!, traits: {
      leaf: ['needle'], habit: ['rounded'], margin: ['n-a'], // leafShape omitted
    } }] };
    expect(validateDataset(bad).errors.join()).toMatch(/missing required trait leafShape/i);
  });
});
