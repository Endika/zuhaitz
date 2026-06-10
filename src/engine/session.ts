import type { Dataset, Answer, Species, Trait } from './types';
import { candidatesFor } from './filter';
import { nextTrait } from './selectQuestion';

export function createSession(ds: Dataset) {
  let answers: Answer[] = [];
  const answeredIds = () => answers.map(a => a.traitId);
  const candidates = (): Species[] => candidatesFor(ds.species, answers);
  const currentQuestion = (): Trait | null =>
    nextTrait(ds.traits, candidates(), answeredIds());

  return {
    candidates,
    currentQuestion,
    // The key has converged when there is no further discriminating question or
    // few enough candidates to show. NOTE: 0 candidates (a no-match) also counts
    // as converged — callers must undo an answer to recover, not just re-enter.
    converged: (): boolean => currentQuestion() === null || candidates().length <= 3,
    answers: () => [...answers],
    answer(traitId: string, value: string) { answers.push({ traitId, value }); },
    skip() {
      const q = currentQuestion();
      if (q) answers.push({ traitId: q.id, value: null });
    },
    back() { answers.pop(); },
    reset() { answers = []; },
  };
}
