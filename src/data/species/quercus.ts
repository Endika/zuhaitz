import type { Species } from '../../engine/types';

// Oaks, Fagaceae and relatives (Quercus, Castanea, Fagus, Corylus) found in Spain,
// native and cultivated. Every species fills all 8 trait keys. Excludes seed
// duplicates: Quercus ilex (encina) and Quercus suber (alcornoque).
export const quercusSpecies: Species[] = [
  {
    commonName: { es: 'Roble común / Carballo', en: 'English oak / Pedunculate oak' },
    scientificName: 'Quercus robur',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja lobulada con base auriculada (dos lóbulos en oreja) y pecíolo muy corto; bellotas sobre un pedúnculo largo y colgante.', en: 'Lobed leaf with an auricled base (two ear-like lobes) and a very short petiole; acorns borne on a long, pendulous stalk.' },
  },
  {
    commonName: { es: 'Roble albar', en: 'Sessile oak' },
    scientificName: 'Quercus petraea',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Muy parecido al roble común pero con pecíolo largo y base de la hoja en cuña, sin orejas; bellotas casi sin pedúnculo, sentadas en la rama.', en: 'Very similar to the English oak but with a long petiole and a wedge-shaped leaf base without ears; acorns almost stalkless, sitting directly on the twig.' },
  },
  {
    commonName: { es: 'Roble melojo / Rebollo', en: 'Pyrenean oak' },
    scientificName: 'Quercus pyrenaica',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja profundamente lobulada y aterciopelada por ambas caras; marcescente (las hojas secas persisten en invierno). Forma rebollares con muchos rebrotes.', en: 'Deeply lobed leaf, velvety on both faces; marcescent (dead leaves persist through winter). Forms stands with many root suckers.' },
  },
  {
    commonName: { es: 'Quejigo', en: 'Portuguese oak' },
    scientificName: 'Quercus faginea',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja pequeña, dura, con dientes o lóbulos poco marcados y envés grisáceo; marcescente. Intermedio entre roble y encina, en suelos calizos.', en: 'Small, tough leaf with faint teeth or lobes and a greyish underside; marcescent. Intermediate between oak and holm oak, on limestone soils.' },
  },
  {
    commonName: { es: 'Quejigo andaluz / Roble de los alcornocales', en: 'Algerian oak / Mirbeck\'s oak' },
    scientificName: 'Quercus canariensis',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja grande con muchos pares de nervios y dientes regulares, envés con pelos pardos; marcescente. Propio de bosques húmedos del sur (no de Canarias).', en: 'Large leaf with many vein pairs and regular teeth, the underside bearing brownish hairs; marcescent. Native to humid forests of the south (not the Canary Islands).' },
  },
  {
    commonName: { es: 'Roble pubescente', en: 'Downy oak / Pubescent oak' },
    scientificName: 'Quercus pubescens',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja lobulada cubierta de pelos suaves por el envés y ramillas tomentosas; marcescente. Árbol pequeño y tortuoso de zonas calizas y secas.', en: 'Lobed leaf covered in soft hairs on the underside, with downy twigs; marcescent. A small, gnarled tree of dry, limestone areas.' },
  },
  {
    commonName: { es: 'Coscoja', en: 'Kermes oak' },
    scientificName: 'Quercus coccifera',
    traits: {
      leaf: ['simple'], margin: ['spiny'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['acorn'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Arbusto o arbolillo perenne de hoja pequeña, dura y muy espinosa, similar al acebo; cúpula de la bellota con escamas punzantes y reflejas.', en: 'Evergreen shrub or small tree with a small, tough, very spiny leaf resembling holly; acorn cup with sharp, recurved scales.' },
  },
  {
    commonName: { es: 'Roble americano / Roble rojo', en: 'Northern red oak' },
    scientificName: 'Quercus rubra',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['smooth', 'fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja grande con lóbulos terminados en punta fina (mucrón) y senos poco profundos; espectacular color rojo en otoño. Muy plantado como ornamental.', en: 'Large leaf with lobes ending in a fine point (mucro) and shallow sinuses; spectacular red autumn colour. Widely planted as an ornamental.' },
  },
  {
    commonName: { es: 'Roble escarlata', en: 'Scarlet oak' },
    scientificName: 'Quercus coccinea',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja con senos muy profundos y lóbulos puntiagudos brillantes; otoño rojo escarlata intenso. Ornamental, parecido al roble rojo pero más recortado.', en: 'Leaf with very deep sinuses and glossy pointed lobes; intense scarlet-red in autumn. Ornamental, similar to the red oak but more deeply cut.' },
  },
  {
    commonName: { es: 'Roble de los pantanos', en: 'Pin oak' },
    scientificName: 'Quercus palustris',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['smooth'],
      habit: ['conical'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Copa cónica con ramas inferiores colgantes; hoja muy recortada de lóbulos finos y puntiagudos. Ornamental de alineaciones, tolera suelos húmedos.', en: 'Conical crown with drooping lower branches; deeply cut leaf with slender, pointed lobes. A street-planting ornamental that tolerates wet soils.' },
  },
  {
    commonName: { es: 'Roble de Turquía / Roble turco', en: 'Turkey oak' },
    scientificName: 'Quercus cerris',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja áspera con lóbulos triangulares; la cúpula de la bellota está erizada de escamas largas y finas como filamentos. Yemas rodeadas de estípulas persistentes.', en: 'Rough leaf with triangular lobes; the acorn cup bristles with long, fine, filament-like scales. Buds surrounded by persistent stipules.' },
  },
  {
    commonName: { es: 'Roble lusitano / Marojo', en: 'Gall oak / Lusitanian dwarf oak' },
    scientificName: 'Quercus lusitanica',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['smooth'],
      habit: ['spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Mata baja y rastrera de hoja pequeña, coriácea y dentada; marcescente. Propia de jarales y brezales del cuadrante suroccidental ibérico.', en: 'Low, creeping shrub with a small, leathery, toothed leaf; marcescent. Native to the cistus scrub and heathland of the south-western Iberian quadrant.' },
  },
  {
    commonName: { es: 'Roble enano / Tocio', en: 'Dwarf oak' },
    scientificName: 'Quercus humilis',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous', 'evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Roble de pequeño porte, hoja lobulada y pubescente; marcescente. Forma masas arbustivas en laderas calizas mediterráneas; muy próximo a Q. pubescens.', en: 'Small-statured oak with a lobed, downy leaf; marcescent. Forms shrubby thickets on Mediterranean limestone slopes; very close to Q. pubescens.' },
  },
  {
    commonName: { es: 'Roble de Hungría', en: 'Hungarian oak' },
    scientificName: 'Quercus frainetto',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured', 'flaking'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja muy grande con numerosos lóbulos profundos y regulares, agrupada en penachos al final de las ramillas. Ornamental de gran porte.', en: 'Very large leaf with numerous deep, regular lobes, clustered in tufts at the tips of the twigs. A large-statured ornamental.' },
  },
  {
    commonName: { es: 'Roble siempreverde / Encina de Virginia', en: 'Southern live oak' },
    scientificName: 'Quercus virginiana',
    traits: {
      leaf: ['simple'], margin: ['entire', 'spiny'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Roble perenne americano de copa muy ancha y extendida; hoja coriácea, generalmente de borde liso pero a veces con algún diente. Ornamental en el sur.', en: 'Evergreen American oak with a very broad, spreading crown; leathery leaf, usually with a smooth edge but occasionally bearing a few teeth. Ornamental in the south.' },
  },
  {
    commonName: { es: 'Roble del Líbano', en: 'Lebanon oak' },
    scientificName: 'Quercus libani',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja estrecha y lanceolada con dientes terminados en arista fina, parecida a la del castaño pero más pequeña; cúpula de bellota con escamas reflejas.', en: 'Narrow, lanceolate leaf with teeth ending in a fine bristle, like a chestnut leaf but smaller; acorn cup with recurved scales.' },
  },
  {
    commonName: { es: 'Castaño', en: 'Sweet chestnut' },
    scientificName: 'Castanea sativa',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja grande, alargada y con dientes grandes terminados en punta; corteza con surcos espirales en árboles viejos. Castañas dentro de erizos espinosos.', en: 'Large, elongated leaf with big pointed teeth; bark with spiral furrows in old trees. Chestnuts enclosed in spiny burrs.' },
  },
  {
    commonName: { es: 'Haya', en: 'European beech' },
    scientificName: 'Fagus sylvatica',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Corteza lisa y gris muy característica; hoja ovalada de borde ondulado con pelos en el margen y los nervios. Hayucos en cúpulas con cuatro valvas espinosas.', en: 'Very distinctive smooth, grey bark; oval leaf with a wavy edge and hairs along the margin and veins. Beechnuts in cups with four spiny valves.' },
  },
  {
    commonName: { es: 'Haya roja / Haya purpúrea', en: 'Copper beech / Purple beech' },
    scientificName: 'Fagus sylvatica f. purpurea',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['smooth'],
      habit: ['rounded', 'columnar'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Variedad ornamental del haya con hojas de color rojo púrpura durante toda la primavera y el verano; corteza lisa idéntica a la del haya común.', en: 'Ornamental form of the beech with purplish-red leaves throughout spring and summer; smooth bark identical to that of the common beech.' },
  },
  {
    commonName: { es: 'Avellano de Bizancio / Avellano arbóreo', en: 'Turkish hazel' },
    scientificName: 'Corylus colurna',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['flaking'],
      habit: ['conical'], leafShape: ['rounded', 'heart'],
    },
    distinctiveNotes: { es: 'A diferencia del avellano común, es un árbol de un solo tronco con copa cónica regular y corteza corchosa que se desprende. Usado en alineaciones urbanas.', en: 'Unlike the common hazel, it is a single-trunked tree with a regular conical crown and corky bark that flakes off. Used in urban street plantings.' },
  },
];
