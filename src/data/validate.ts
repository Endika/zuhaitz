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
