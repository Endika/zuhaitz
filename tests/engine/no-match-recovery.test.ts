import { describe, it, expect } from 'vitest';
import { createSession } from '../../src/engine/session';
import type { Dataset } from '../../src/engine/types';

// Reproduces the no-match "Atrás" bug: answering an option that no remaining
// species holds drops candidates to 0. The result screen's "Atrás" must undo
// that answer so the key has candidates again — otherwise the identify route
// (which treats 0 candidates as "converged") bounces straight back to the
// no-match screen and the button appears dead.
const ds: Dataset = {
  traits: [
    { id: 't1', question: '?', options: [
      { id: 'x', label: 'x', sketchId: 's' },
      { id: 'y', label: 'y', sketchId: 's' }] },
    { id: 't2', question: '?', options: [
      { id: 'p', label: 'p', sketchId: 's' },
      { id: 'q', label: 'q', sketchId: 's' },
      { id: 'r', label: 'r', sketchId: 's' }] },
  ],
  sketches: { s: '<svg/>' },
  species: [
    { commonName: 'A', scientificName: 'A', traits: { t1: ['x'], t2: ['p'] }, distinctiveNotes: '' },
    { commonName: 'B', scientificName: 'B', traits: { t1: ['x'], t2: ['p'] }, distinctiveNotes: '' },
    { commonName: 'C', scientificName: 'C', traits: { t1: ['x'], t2: ['q'] }, distinctiveNotes: '' },
    { commonName: 'D', scientificName: 'D', traits: { t1: ['x'], t2: ['q'] }, distinctiveNotes: '' },
    { commonName: 'E', scientificName: 'E', traits: { t1: ['y'], t2: ['p'] }, distinctiveNotes: '' },
  ],
};

describe('no-match recovery', () => {
  it('reaches 0 candidates when answering an option no candidate holds', () => {
    const s = createSession(ds);
    s.answer('t1', 'x'); // -> A,B,C,D (4 candidates, t2 still discriminating)
    s.answer('t2', 'r'); // no remaining species has t2=r -> 0
    expect(s.candidates()).toHaveLength(0);
    expect(s.converged()).toBe(true); // a no-match counts as converged
  });

  it('back() from a no-match restores candidates and a question (no bounce)', () => {
    const s = createSession(ds);
    s.answer('t1', 'x');
    s.answer('t2', 'r');
    s.back(); // undo the eliminating answer
    expect(s.candidates()).toHaveLength(4);
    expect(s.currentQuestion()).not.toBeNull();
    expect(s.converged()).toBe(false); // identify will render a question, not redirect
  });
});
