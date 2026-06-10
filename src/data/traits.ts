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
    question: { es: '¿Cómo es la hoja?', en: 'What is the leaf like?' },
    options: [
      { id: 'simple', label: { es: 'Simple (una sola lámina)', en: 'Simple (single blade)' }, sketchId: 'leaf-simple' },
      { id: 'compound', label: { es: 'Compuesta (varios folíolos)', en: 'Compound (several leaflets)' }, sketchId: 'leaf-compound' },
      { id: 'needle', label: { es: 'Acícula (aguja de conífera)', en: 'Needle (conifer needle)' }, sketchId: 'leaf-needle' },
      { id: 'scale', label: { es: 'Escama (ciprés, tuya)', en: 'Scale (cypress, thuja)' }, sketchId: 'leaf-scale' },
    ],
  },
  {
    id: 'margin',
    // Broadleaf-only. Conifers/palms answer 'n-a'. See design note above.
    question: { es: '¿Cómo es el borde de la hoja?', en: 'What is the leaf margin like?' },
    options: [
      { id: 'entire', label: { es: 'Liso (entero)', en: 'Entire (smooth)' }, sketchId: 'margin-entire' },
      { id: 'serrate', label: { es: 'Dentado / serrado', en: 'Toothed / serrate' }, sketchId: 'margin-serrate' },
      { id: 'lobed', label: { es: 'Lobulado', en: 'Lobed' }, sketchId: 'margin-lobed' },
      { id: 'wavy', label: { es: 'Ondulado', en: 'Wavy' }, sketchId: 'margin-wavy' },
      { id: 'spiny', label: { es: 'Espinoso (con pinchos)', en: 'Spiny (with prickles)' }, sketchId: 'margin-spiny' },
      { id: 'n-a', label: { es: 'No aplica (conífera/palmera)', en: 'N/A (conifer/palm)' }, sketchId: 'na' },
    ],
  },
  {
    id: 'arrangement',
    question: { es: '¿Cómo se disponen las hojas en la rama?', en: 'How are the leaves arranged on the twig?' },
    options: [
      { id: 'alternate', label: { es: 'Alternas', en: 'Alternate' }, sketchId: 'arrangement-alternate' },
      { id: 'opposite', label: { es: 'Opuestas', en: 'Opposite' }, sketchId: 'arrangement-opposite' },
      { id: 'whorled', label: { es: 'Verticiladas', en: 'Whorled' }, sketchId: 'arrangement-whorled' },
    ],
  },
  {
    id: 'persistence',
    question: { es: '¿Mantiene las hojas en invierno?', en: 'Does it keep its leaves in winter?' },
    options: [
      { id: 'deciduous', label: { es: 'Caduca (las pierde en invierno)', en: 'Deciduous (sheds in winter)' }, sketchId: 'persistence-deciduous' },
      { id: 'evergreen', label: { es: 'Perenne (siempre verde)', en: 'Evergreen (always green)' }, sketchId: 'persistence-evergreen' },
    ],
  },
  {
    id: 'fruit',
    question: { es: '¿Qué tipo de fruto produce?', en: 'What kind of fruit does it bear?' },
    options: [
      { id: 'acorn', label: { es: 'Bellota', en: 'Acorn' }, sketchId: 'fruit-acorn' },
      { id: 'samara', label: { es: 'Sámara (alada)', en: 'Samara (winged)' }, sketchId: 'fruit-samara' },
      { id: 'pome', label: { es: 'Pomo (tipo manzana)', en: 'Pome (apple-like)' }, sketchId: 'fruit-pome' },
      { id: 'drupe', label: { es: 'Drupa (carnosa con hueso)', en: 'Drupe (fleshy with a stone)' }, sketchId: 'fruit-drupe' },
      { id: 'berry', label: { es: 'Baya (carnosa con semillas)', en: 'Berry (fleshy with seeds)' }, sketchId: 'fruit-berry' },
      { id: 'legume', label: { es: 'Legumbre (vaina)', en: 'Legume (pod)' }, sketchId: 'fruit-legume' },
      { id: 'cone', label: { es: 'Piña / cono', en: 'Cone' }, sketchId: 'fruit-cone' },
      { id: 'capsule', label: { es: 'Cápsula (seca que se abre)', en: 'Capsule (dry, splitting open)' }, sketchId: 'fruit-capsule' },
      { id: 'nut', label: { es: 'Nuez / fruto seco con cáscara', en: 'Nut (shelled)' }, sketchId: 'fruit-nut' },
      { id: 'fig', label: { es: 'Higo (siconio)', en: 'Fig (syconium)' }, sketchId: 'fruit-fig' },
      { id: 'none-visible', label: { es: 'Sin fruto visible llamativo', en: 'No conspicuous fruit visible' }, sketchId: 'fruit-none' },
    ],
  },
  {
    id: 'bark',
    question: { es: '¿Cómo es la corteza del tronco?', en: 'What is the trunk bark like?' },
    options: [
      { id: 'smooth', label: { es: 'Lisa', en: 'Smooth' }, sketchId: 'bark-smooth' },
      { id: 'fissured', label: { es: 'Agrietada / surcada', en: 'Fissured / furrowed' }, sketchId: 'bark-fissured' },
      { id: 'flaking', label: { es: 'Se desprende en placas', en: 'Flaking in plates' }, sketchId: 'bark-flaking' },
      { id: 'thorny', label: { es: 'Con espinas o aguijones', en: 'Thorny (with spines or prickles)' }, sketchId: 'bark-thorny' },
      { id: 'papery', label: { es: 'Como papel (se pela en láminas)', en: 'Papery (peels in thin sheets)' }, sketchId: 'bark-papery' },
      { id: 'corky', label: { es: 'Gruesa y corchosa', en: 'Thick and corky' }, sketchId: 'bark-corky' },
    ],
  },
  {
    id: 'habit',
    question: { es: '¿Qué forma tiene la copa o el árbol?', en: 'What is the shape of the crown or tree?' },
    options: [
      { id: 'columnar', label: { es: 'Columnar (estrecho y vertical)', en: 'Columnar (narrow and upright)' }, sketchId: 'habit-columnar' },
      { id: 'rounded', label: { es: 'Redondeada', en: 'Rounded' }, sketchId: 'habit-rounded' },
      { id: 'weeping', label: { es: 'Llorona (ramas colgantes)', en: 'Weeping (drooping branches)' }, sketchId: 'habit-weeping' },
      { id: 'spreading', label: { es: 'Extendida (más ancha que alta)', en: 'Spreading (wider than tall)' }, sketchId: 'habit-spreading' },
      { id: 'conical', label: { es: 'Cónica (de pirámide)', en: 'Conical (pyramidal)' }, sketchId: 'habit-conical' },
      { id: 'palm', label: { es: 'Palmera (penacho de hojas arriba)', en: 'Palm (tuft of leaves on top)' }, sketchId: 'habit-palm' },
    ],
  },
  {
    id: 'leafShape',
    // Broadleaf-only detail. Conifers/palms answer 'n-a'. See design note above.
    question: { es: '¿Qué forma tiene la lámina de la hoja?', en: 'What is the shape of the leaf blade?' },
    options: [
      { id: 'ovate', label: { es: 'Aovada (como un huevo)', en: 'Ovate (egg-shaped)' }, sketchId: 'shape-ovate' },
      { id: 'lanceolate', label: { es: 'Lanceolada (estrecha y larga)', en: 'Lanceolate (narrow and long)' }, sketchId: 'shape-lanceolate' },
      { id: 'palmate', label: { es: 'Palmeada (tipo mano)', en: 'Palmate (hand-shaped)' }, sketchId: 'shape-palmate' },
      { id: 'heart', label: { es: 'Acorazonada', en: 'Heart-shaped' }, sketchId: 'shape-heart' },
      { id: 'linear', label: { es: 'Linear (muy estrecha)', en: 'Linear (very narrow)' }, sketchId: 'shape-linear' },
      { id: 'rounded', label: { es: 'Redondeada', en: 'Rounded' }, sketchId: 'shape-rounded' },
      { id: 'n-a', label: { es: 'No aplica (conífera/palmera)', en: 'N/A (conifer/palm)' }, sketchId: 'na' },
    ],
  },
];
