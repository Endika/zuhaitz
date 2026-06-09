import type { Dataset } from '../engine/types';

export interface ValidationResult { errors: string[]; warnings: string[]; }

export function validateDataset(ds: Dataset): ValidationResult {
  const errors: string[] = [];
  const warnings: string[] = [];
  const traitById = new Map(ds.traits.map(t => [t.id, t]));

  for (const t of ds.traits)
    for (const o of t.options)
      if (!(o.sketchId in ds.sketches))
        errors.push(`trait ${t.id} option ${o.id} references missing sketch ${o.sketchId}`);

  const isNa = (v: string[] | undefined) => !!v && v.length === 1 && v[0] === 'n-a';

  for (const s of ds.species) {
    if (!s.commonName || !s.scientificName)
      errors.push(`species ${s.scientificName || s.commonName} missing a name`);
    for (const [tid, values] of Object.entries(s.traits)) {
      const trait = traitById.get(tid);
      if (!trait) { errors.push(`species ${s.scientificName} references unknown trait ${tid}`); continue; }
      const opts = new Set(trait.options.map(o => o.id));
      for (const v of values)
        if (!opts.has(v))
          errors.push(`species ${s.scientificName} trait ${tid} value ${v} not in options`);
    }

    // Every species MUST define every trait key; an omitted key silently
    // auto-eliminates the species in filter.ts (see traits.ts design note).
    for (const t of ds.traits)
      if (!(t.id in s.traits))
        errors.push(`species ${s.scientificName} is missing required trait ${t.id}`);

    // Conifer/palm invariant: leaf needle/scale or habit palm ⇒ margin and
    // leafShape must be exactly ['n-a'], else the species is wrongly eliminated
    // when a user honestly answers "no aplica".
    const leaf = s.traits.leaf ?? [];
    const habit = s.traits.habit ?? [];
    const needsNa = leaf.includes('needle') || leaf.includes('scale') || habit.includes('palm');
    if (needsNa && !(isNa(s.traits.margin) && isNa(s.traits.leafShape)))
      errors.push(`species ${s.scientificName}: needle/scale/palm must use margin ['n-a'] and leafShape ['n-a']`);
  }

  const seen = new Map<string, string>();
  for (const s of ds.species) {
    const key = ds.traits.map(t => (s.traits[t.id] ?? []).slice().sort().join('|')).join(';');
    const prev = seen.get(key);
    if (prev) warnings.push(`indistinguishable species: ${prev} and ${s.scientificName}`);
    else seen.set(key, s.scientificName);
  }
  return { errors, warnings };
}
