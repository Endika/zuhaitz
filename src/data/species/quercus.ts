import type { Species } from '../../engine/types';

// Oaks, Fagaceae and relatives (Quercus, Castanea, Fagus, Corylus) found in Spain,
// native and cultivated. Every species fills all 8 trait keys. Excludes seed
// duplicates: Quercus ilex (encina) and Quercus suber (alcornoque).
export const quercusSpecies: Species[] = [
  {
    commonName: 'Roble común / Carballo',
    scientificName: 'Quercus robur',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja lobulada con base auriculada (dos lóbulos en oreja) y pecíolo muy corto; bellotas sobre un pedúnculo largo y colgante.',
  },
  {
    commonName: 'Roble albar',
    scientificName: 'Quercus petraea',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Muy parecido al roble común pero con pecíolo largo y base de la hoja en cuña, sin orejas; bellotas casi sin pedúnculo, sentadas en la rama.',
  },
  {
    commonName: 'Roble melojo / Rebollo',
    scientificName: 'Quercus pyrenaica',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja profundamente lobulada y aterciopelada por ambas caras; marcescente (las hojas secas persisten en invierno). Forma rebollares con muchos rebrotes.',
  },
  {
    commonName: 'Quejigo',
    scientificName: 'Quercus faginea',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja pequeña, dura, con dientes o lóbulos poco marcados y envés grisáceo; marcescente. Intermedio entre roble y encina, en suelos calizos.',
  },
  {
    commonName: 'Quejigo andaluz / Roble de los alcornocales',
    scientificName: 'Quercus canariensis',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja grande con muchos pares de nervios y dientes regulares, envés con pelos pardos; marcescente. Propio de bosques húmedos del sur (no de Canarias).',
  },
  {
    commonName: 'Roble pubescente',
    scientificName: 'Quercus pubescens',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja lobulada cubierta de pelos suaves por el envés y ramillas tomentosas; marcescente. Árbol pequeño y tortuoso de zonas calizas y secas.',
  },
  {
    commonName: 'Coscoja',
    scientificName: 'Quercus coccifera',
    traits: {
      leaf: ['simple'], margin: ['spiny'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['acorn'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Arbusto o arbolillo perenne de hoja pequeña, dura y muy espinosa, similar al acebo; cúpula de la bellota con escamas punzantes y reflejas.',
  },
  {
    commonName: 'Roble americano / Roble rojo',
    scientificName: 'Quercus rubra',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['smooth', 'fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja grande con lóbulos terminados en punta fina (mucrón) y senos poco profundos; espectacular color rojo en otoño. Muy plantado como ornamental.',
  },
  {
    commonName: 'Roble escarlata',
    scientificName: 'Quercus coccinea',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja con senos muy profundos y lóbulos puntiagudos brillantes; otoño rojo escarlata intenso. Ornamental, parecido al roble rojo pero más recortado.',
  },
  {
    commonName: 'Roble de los pantanos',
    scientificName: 'Quercus palustris',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['smooth'],
      habit: ['conical'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Copa cónica con ramas inferiores colgantes; hoja muy recortada de lóbulos finos y puntiagudos. Ornamental de alineaciones, tolera suelos húmedos.',
  },
  {
    commonName: 'Roble de Turquía / Roble turco',
    scientificName: 'Quercus cerris',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja áspera con lóbulos triangulares; la cúpula de la bellota está erizada de escamas largas y finas como filamentos. Yemas rodeadas de estípulas persistentes.',
  },
  {
    commonName: 'Roble lusitano / Marojo',
    scientificName: 'Quercus lusitanica',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['smooth'],
      habit: ['spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Mata baja y rastrera de hoja pequeña, coriácea y dentada; marcescente. Propia de jarales y brezales del cuadrante suroccidental ibérico.',
  },
  {
    commonName: 'Roble enano / Tocio',
    scientificName: 'Quercus humilis',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Roble de pequeño porte, hoja lobulada y pubescente; marcescente. Forma masas arbustivas en laderas calizas mediterráneas; muy próximo a Q. pubescens.',
  },
  {
    commonName: 'Roble de Hungría',
    scientificName: 'Quercus frainetto',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured', 'flaking'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja muy grande con numerosos lóbulos profundos y regulares, agrupada en penachos al final de las ramillas. Ornamental de gran porte.',
  },
  {
    commonName: 'Roble siempreverde / Encina de Virginia',
    scientificName: 'Quercus virginiana',
    traits: {
      leaf: ['simple'], margin: ['entire', 'spiny'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Roble perenne americano de copa muy ancha y extendida; hoja coriácea, generalmente de borde liso pero a veces con algún diente. Ornamental en el sur.',
  },
  {
    commonName: 'Roble del Líbano',
    scientificName: 'Quercus libani',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja estrecha y lanceolada con dientes terminados en arista fina, parecida a la del castaño pero más pequeña; cúpula de bellota con escamas reflejas.',
  },
  {
    commonName: 'Castaño',
    scientificName: 'Castanea sativa',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja grande, alargada y con dientes grandes terminados en punta; corteza con surcos espirales en árboles viejos. Castañas dentro de erizos espinosos.',
  },
  {
    commonName: 'Haya',
    scientificName: 'Fagus sylvatica',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Corteza lisa y gris muy característica; hoja ovalada de borde ondulado con pelos en el margen y los nervios. Hayucos en cúpulas con cuatro valvas espinosas.',
  },
  {
    commonName: 'Haya roja / Haya purpúrea',
    scientificName: 'Fagus sylvatica f. purpurea',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['smooth'],
      habit: ['rounded', 'columnar'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Variedad ornamental del haya con hojas de color rojo púrpura durante toda la primavera y el verano; corteza lisa idéntica a la del haya común.',
  },
  {
    commonName: 'Avellano de Bizancio / Avellano arbóreo',
    scientificName: 'Corylus colurna',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['flaking'],
      habit: ['conical'], leafShape: ['rounded', 'heart'],
    },
    distinctiveNotes: 'A diferencia del avellano común, es un árbol de un solo tronco con copa cónica regular y corteza corchosa que se desprende. Usado en alineaciones urbanas.',
  },
];
