export type TraitId = string;
export type OptionId = string;
export type SketchId = string;

export type Locale = 'es' | 'en';
export type Localized = { es: string; en: string };
/** A user-facing string: either a bare string (Spanish-only legacy) or localized. */
export type I18nText = string | Localized;

export interface TraitOption { id: OptionId; label: I18nText; sketchId: SketchId; }
export interface Trait { id: TraitId; question: I18nText; options: TraitOption[]; }

export interface Species {
  commonName: I18nText;
  scientificName: string;
  /** trait id -> set of admissible option ids (variable traits => >1) */
  traits: Record<TraitId, OptionId[]>;
  distinctiveNotes: I18nText;
}

export interface Sketch { id: SketchId; svg: string; }

export interface Dataset {
  traits: Trait[];
  sketches: Record<SketchId, string>;
  species: Species[];
}

/** A user's answer to a trait. value === null means "don't know / skip". */
export interface Answer { traitId: TraitId; value: OptionId | null; }

/** One bundled species photo + its required CC attribution. Keyed by photoSlug(scientificName). */
export interface PhotoMeta {
  /** filename under public/photos/, e.g. "pinus-sylvestris.webp" */
  file: string;
  /** author/credit string as required by the license */
  author: string;
  /** short license name, e.g. "CC BY-SA 3.0" */
  license: string;
  /** Commons/Wikidata source page URL */
  sourceUrl: string;
}
