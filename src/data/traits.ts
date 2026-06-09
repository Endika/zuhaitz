import type { Trait } from '../engine/types';

// ─────────────────────────────────────────────────────────────────────────────
// TRAIT VOCABULARY
//
// This is the authoritative discrimination key for the whole dataset
// (~150–200 Spanish trees, native + urban/ornamental). Every species declares,
// per trait, the SET of option ids it can present (>1 when the species genuinely
// varies). Existing seed ids/options are kept stable; new ones are additive.
//
// ── DESIGN DECISION: broadleaf-only traits and the "n-a" (no aplica) sentinel ──
//
// Some traits only make sense for broadleaves: `margin`, `leafShape`. A needle/
// scale conifer or a palm has no leaf margin in the usual sense. The question is
// how those species answer such traits so the engine's set-intersection stays
// correct. Two options were considered:
//
//   (a) Give EVERY species a value for EVERY trait, adding an explicit `n-a`
//       ("no aplica") option to the broadleaf-only traits.
//   (b) Let a species OMIT a trait key it doesn't have.
//
// We MUST use (a). Reason — see `src/engine/filter.ts`:
//
//       const admissible = species.traits[answer.traitId];
//       if (!admissible) return false;   // species says nothing about trait
//
// A species that OMITS a trait key returns FALSE for ANY concrete answer to that
// trait. So under option (b), the moment a user answers a broadleaf-only question
// (e.g. margin = "serrate"), every conifer/palm that omitted `margin` would be
// WRONGLY eliminated. Option (a) avoids this: conifers/palms set
// `margin: ['n-a']` / `leafShape: ['n-a']`, so they only ever match the explicit
// "no aplica" answer and are never silently dropped.
//
// UI / engine consequences (verified):
//  - The identify view renders one clickable button per option, so `n-a` shows up
//    as a normal, illustrated choice ("No aplica (conífera/palmera)") when the
//    question is asked. A user looking at a cypress can legitimately pick it.
//  - `src/engine/selectQuestion.ts` only asks a trait when it actually splits the
//    remaining candidates (`largestBucket < candidates.length`). So if every
//    surviving candidate shares the same margin/leafShape value (including all
//    being `n-a`), the engine simply won't ask it — the sentinel never produces a
//    pointless question.
//
// AUTHORING RULE for the parallel group files (keep consistent):
//  - leaf = needle | scale  → margin: ['n-a'] AND leafShape: ['n-a'].
//  - habit = palm           → margin: ['n-a'] AND leafShape: ['n-a']
//    (palm fronds are huge compound structures; treat as not-applicable here).
//  - Every species MUST provide all 8 trait keys, each with ≥1 value.
// ─────────────────────────────────────────────────────────────────────────────

export const traits: Trait[] = [
  {
    id: 'leaf',
    question: '¿Cómo es la hoja?',
    options: [
      { id: 'simple', label: 'Simple (una sola lámina)', sketchId: 'leaf-simple' },
      { id: 'compound', label: 'Compuesta (varios folíolos)', sketchId: 'leaf-compound' },
      { id: 'needle', label: 'Acícula (aguja de conífera)', sketchId: 'leaf-needle' },
      { id: 'scale', label: 'Escama (ciprés, tuya)', sketchId: 'leaf-scale' },
    ],
  },
  {
    id: 'margin',
    // Broadleaf-only. Conifers/palms answer 'n-a'. See design note above.
    question: '¿Cómo es el borde de la hoja?',
    options: [
      { id: 'entire', label: 'Liso (entero)', sketchId: 'margin-entire' },
      { id: 'serrate', label: 'Dentado / serrado', sketchId: 'margin-serrate' },
      { id: 'lobed', label: 'Lobulado', sketchId: 'margin-lobed' },
      { id: 'wavy', label: 'Ondulado', sketchId: 'margin-wavy' },
      { id: 'spiny', label: 'Espinoso (con pinchos)', sketchId: 'margin-spiny' },
      { id: 'n-a', label: 'No aplica (conífera/palmera)', sketchId: 'na' },
    ],
  },
  {
    id: 'arrangement',
    question: '¿Cómo se disponen las hojas en la rama?',
    options: [
      { id: 'alternate', label: 'Alternas', sketchId: 'arrangement-alternate' },
      { id: 'opposite', label: 'Opuestas', sketchId: 'arrangement-opposite' },
      { id: 'whorled', label: 'Verticiladas', sketchId: 'arrangement-whorled' },
    ],
  },
  {
    id: 'persistence',
    question: '¿Mantiene las hojas en invierno?',
    options: [
      { id: 'deciduous', label: 'Caduca (las pierde en invierno)', sketchId: 'persistence-deciduous' },
      { id: 'evergreen', label: 'Perenne (siempre verde)', sketchId: 'persistence-evergreen' },
    ],
  },
  {
    id: 'fruit',
    question: '¿Qué tipo de fruto produce?',
    options: [
      { id: 'acorn', label: 'Bellota', sketchId: 'fruit-acorn' },
      { id: 'samara', label: 'Sámara (alada)', sketchId: 'fruit-samara' },
      { id: 'pome', label: 'Pomo (tipo manzana)', sketchId: 'fruit-pome' },
      { id: 'drupe', label: 'Drupa (carnosa con hueso)', sketchId: 'fruit-drupe' },
      { id: 'berry', label: 'Baya (carnosa con semillas)', sketchId: 'fruit-berry' },
      { id: 'legume', label: 'Legumbre (vaina)', sketchId: 'fruit-legume' },
      { id: 'cone', label: 'Piña / cono', sketchId: 'fruit-cone' },
      { id: 'capsule', label: 'Cápsula (seca que se abre)', sketchId: 'fruit-capsule' },
      { id: 'nut', label: 'Nuez / fruto seco con cáscara', sketchId: 'fruit-nut' },
      { id: 'fig', label: 'Higo (siconio)', sketchId: 'fruit-fig' },
      { id: 'none-visible', label: 'Sin fruto visible llamativo', sketchId: 'fruit-none' },
    ],
  },
  {
    id: 'bark',
    question: '¿Cómo es la corteza del tronco?',
    options: [
      { id: 'smooth', label: 'Lisa', sketchId: 'bark-smooth' },
      { id: 'fissured', label: 'Agrietada / surcada', sketchId: 'bark-fissured' },
      { id: 'flaking', label: 'Se desprende en placas', sketchId: 'bark-flaking' },
      { id: 'thorny', label: 'Con espinas o aguijones', sketchId: 'bark-thorny' },
      { id: 'papery', label: 'Como papel (se pela en láminas)', sketchId: 'bark-papery' },
      { id: 'corky', label: 'Gruesa y corchosa', sketchId: 'bark-corky' },
    ],
  },
  {
    id: 'habit',
    question: '¿Qué forma tiene la copa o el árbol?',
    options: [
      { id: 'columnar', label: 'Columnar (estrecho y vertical)', sketchId: 'habit-columnar' },
      { id: 'rounded', label: 'Redondeada', sketchId: 'habit-rounded' },
      { id: 'weeping', label: 'Llorona (ramas colgantes)', sketchId: 'habit-weeping' },
      { id: 'spreading', label: 'Extendida (más ancha que alta)', sketchId: 'habit-spreading' },
      { id: 'conical', label: 'Cónica (de pirámide)', sketchId: 'habit-conical' },
      { id: 'palm', label: 'Palmera (penacho de hojas arriba)', sketchId: 'habit-palm' },
    ],
  },
  {
    id: 'leafShape',
    // Broadleaf-only detail. Conifers/palms answer 'n-a'. See design note above.
    question: '¿Qué forma tiene la lámina de la hoja?',
    options: [
      { id: 'ovate', label: 'Aovada (como un huevo)', sketchId: 'shape-ovate' },
      { id: 'lanceolate', label: 'Lanceolada (estrecha y larga)', sketchId: 'shape-lanceolate' },
      { id: 'palmate', label: 'Palmeada (tipo mano)', sketchId: 'shape-palmate' },
      { id: 'heart', label: 'Acorazonada', sketchId: 'shape-heart' },
      { id: 'linear', label: 'Linear (muy estrecha)', sketchId: 'shape-linear' },
      { id: 'rounded', label: 'Redondeada', sketchId: 'shape-rounded' },
      { id: 'n-a', label: 'No aplica (conífera/palmera)', sketchId: 'na' },
    ],
  },
];
