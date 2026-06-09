export type TraitId = string;
export type OptionId = string;
export type SketchId = string;

export interface TraitOption { id: OptionId; label: string; sketchId: SketchId; }
export interface Trait { id: TraitId; question: string; options: TraitOption[]; }

export interface Species {
  commonName: string;
  scientificName: string;
  /** trait id -> set of admissible option ids (variable traits => >1) */
  traits: Record<TraitId, OptionId[]>;
  distinctiveNotes: string;
}

export interface Sketch { id: SketchId; svg: string; }

export interface Dataset {
  traits: Trait[];
  sketches: Record<SketchId, string>;
  species: Species[];
}

/** A user's answer to a trait. value === null means "don't know / skip". */
export interface Answer { traitId: TraitId; value: OptionId | null; }
