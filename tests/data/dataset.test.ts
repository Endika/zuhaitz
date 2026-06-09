import { describe, it, expect } from 'vitest';
import { dataset } from '../../src/data/dataset';
import { validateDataset } from '../../src/data/validate';

describe('real dataset', () => {
  it('has no validation errors', () => {
    expect(validateDataset(dataset).errors).toEqual([]);
  });
  it('has no indistinguishable-species warnings', () => {
    expect(validateDataset(dataset).warnings).toEqual([]);
  });
});
