import { describe, it, expect } from 'vitest';
import { createSession } from '../../src/engine/session';
import type { Dataset } from '../../src/engine/types';

const ds: Dataset = {
  traits: [
    { id: 'leaf', question: 'Leaf?', options: [
      { id: 'simple', label: 'Simple', sketchId: 'x' },
      { id: 'compound', label: 'Compound', sketchId: 'x' }] },
    { id: 'margin', question: 'Margin?', options: [
      { id: 'lobed', label: 'Lobed', sketchId: 'x' },
      { id: 'serrate', label: 'Serrate', sketchId: 'x' }] },
  ],
  sketches: { x: '<svg/>' },
  species: [
    { commonName: 'Roble', scientificName: 'Quercus', traits: { leaf: ['simple'], margin: ['lobed'] }, distinctiveNotes: '' },
    { commonName: 'Fresno', scientificName: 'Fraxinus', traits: { leaf: ['compound'], margin: ['serrate'] }, distinctiveNotes: '' },
  ],
};

describe('session', () => {
  it('starts with all candidates and a current question', () => {
    const s = createSession(ds);
    expect(s.candidates()).toHaveLength(2);
    expect(s.currentQuestion()).not.toBeNull();
  });
  it('answering narrows candidates', () => {
    const s = createSession(ds);
    s.answer('leaf', 'simple');
    expect(s.candidates().map(c => c.commonName)).toEqual(['Roble']);
  });
  it('skip (don\'t know) keeps candidates, still advances past the trait', () => {
    const s = createSession(ds);
    const first = s.currentQuestion()!.id;
    s.skip();
    expect(s.candidates()).toHaveLength(2);
    expect(s.currentQuestion()?.id).not.toBe(first);
  });
  it('back undoes the last answer', () => {
    const s = createSession(ds);
    s.answer('leaf', 'simple');
    s.back();
    expect(s.candidates()).toHaveLength(2);
  });
  it('reset clears everything', () => {
    const s = createSession(ds);
    s.answer('leaf', 'simple');
    s.reset();
    expect(s.candidates()).toHaveLength(2);
  });
});
