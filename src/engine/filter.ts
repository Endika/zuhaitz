import type { Species, Answer } from './types';

function matches(species: Species, answer: Answer): boolean {
  if (answer.value === null) return true;            // "don't know" discards nothing
  const admissible = species.traits[answer.traitId];
  if (!admissible) return false;                     // species says nothing about trait
  return admissible.includes(answer.value);
}

export function candidatesFor(species: Species[], answers: Answer[]): Species[] {
  return species.filter(s => answers.every(a => matches(s, a)));
}
