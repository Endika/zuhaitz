import type { Trait, Species, TraitId } from './types';

function largestBucket(trait: Trait, candidates: Species[]): number {
  // bucket size per option = candidates admitting that option; also count "unknown".
  let max = 0;
  for (const opt of trait.options) {
    const n = candidates.filter(s => s.traits[trait.id]?.includes(opt.id)).length;
    if (n > max) max = n;
  }
  const unknown = candidates.filter(s => !s.traits[trait.id]).length;
  return Math.max(max, unknown);
}

export function nextTrait(
  traits: Trait[], candidates: Species[], answered: TraitId[],
): Trait | null {
  let best: Trait | null = null;
  let bestMax = candidates.length; // a discriminating trait must beat "no split"
  for (const trait of traits) {
    if (answered.includes(trait.id)) continue;
    const max = largestBucket(trait, candidates);
    if (max < bestMax) { bestMax = max; best = trait; }
  }
  return best;
}
