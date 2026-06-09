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
