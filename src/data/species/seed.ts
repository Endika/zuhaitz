import type { Species } from '../../engine/types';

// 16 common Spanish trees (native + urban/ornamental). Every species fills all 8
// trait keys (leaf, margin, arrangement, persistence, fruit, bark, habit, leafShape).
// Conifers/palms set broadleaf-only traits (margin, leafShape) to 'n-a' — see traits.ts.
// Variable (multi-value) traits are used where the species genuinely varies.
export const seedSpecies: Species[] = [
  {
    commonName: { es: 'Plátano de sombra', en: 'London plane' },
    scientificName: 'Platanus × hispanica',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['flaking'],
      habit: ['rounded', 'spreading'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Corteza que se desprende en placas dejando manchas claras; bolas colgantes en invierno. Hoja palmeada parecida a la del arce.', en: 'Bark flakes off in patches, leaving pale mottled blotches; dangling seed balls persist through winter. Maple-like palmate leaf.' },
  },
  {
    commonName: { es: 'Encina', en: 'Holm oak' },
    scientificName: 'Quercus ilex',
    traits: {
      // Hoja muy variable: borde liso en árboles adultos, espinoso/dentado en rebrotes.
      leaf: ['simple'], margin: ['entire', 'serrate', 'spiny'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['acorn'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Perennifolia de hoja coriácea, verde oscura por arriba y blanquecina por debajo; borde liso o con dientes espinosos. Produce bellotas.', en: 'Evergreen with leathery leaves, dark green above and whitish below; margin entire or with spiny teeth. Bears acorns.' },
  },
  {
    commonName: { es: 'Alcornoque', en: 'Cork oak' },
    scientificName: 'Quercus suber',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'spiny'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['acorn'], bark: ['corky'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Inconfundible por su gruesa corteza de corcho que se extrae en planchas dejando el tronco rojizo. Bellotas y hoja perenne dentada.', en: 'Unmistakable for its thick cork bark, harvested in slabs that leave the trunk reddish. Acorns and toothed evergreen leaves.' },
  },
  {
    commonName: { es: 'Pino piñonero', en: 'Stone pine' },
    scientificName: 'Pinus pinea',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Copa en forma de sombrilla aparasolada muy característica. Piñas redondeadas con piñones comestibles; acículas largas en pares.', en: 'Very distinctive umbrella-shaped, parasol-like crown. Rounded cones with edible pine nuts; long needles in pairs.' },
  },
  {
    commonName: { es: 'Naranjo amargo', en: 'Bitter orange' },
    scientificName: 'Citrus × aurantium',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['smooth', 'thorny'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Árbol urbano de calles del sur; hoja brillante con pecíolo alado, flores muy aromáticas (azahar) y naranjas amargas que persisten en invierno.', en: 'Urban street tree of the south; glossy leaf with a winged petiole, intensely fragrant blossom (azahar), and bitter oranges that persist through winter.' },
  },
  {
    commonName: { es: 'Olivo', en: 'Olive' },
    scientificName: 'Olea europaea',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hojas estrechas opuestas, verde grisáceo por arriba y plateadas por debajo. Tronco retorcido y agrietado; fruto la aceituna.', en: 'Narrow opposite leaves, grey-green above and silvery below. Gnarled, fissured trunk; the fruit is the olive.' },
  },
  {
    commonName: { es: 'Jacarandá', en: 'Jacaranda' },
    scientificName: 'Jacaranda mimosifolia',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja doblemente compuesta muy fina, tipo helecho. Espectacular floración azul-violeta en primavera; cápsulas leñosas redondeadas.', en: 'Very fine, fern-like twice-compound leaves. Spectacular blue-violet bloom in spring; rounded woody capsules.' },
  },
  {
    commonName: { es: 'Almez', en: 'European nettle tree' },
    scientificName: 'Celtis australis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Corteza lisa gris como la del haya; hoja asimétrica, áspera y muy puntiaguda. Pequeñas drupas oscuras (almezas) en otoño.', en: 'Smooth grey bark like a beech; asymmetric, rough, sharply pointed leaf. Small dark drupes (hackberries) in autumn.' },
  },
  {
    commonName: { es: 'Fresno', en: 'Narrow-leaved ash' },
    scientificName: 'Fraxinus angustifolia',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja compuesta opuesta con folíolos lanceolados dentados. Frutos en sámara alada agrupados en racimos; yemas pardas.', en: 'Opposite compound leaf with toothed lance-shaped leaflets. Winged samara fruits in clustered bunches; brown buds.' },
  },
  {
    commonName: { es: 'Álamo blanco', en: 'White poplar' },
    scientificName: 'Populus alba',
    traits: {
      // Hojas variables: las jóvenes lobuladas (tipo arce), las adultas dentadas.
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['smooth'],
      habit: ['columnar', 'rounded'], leafShape: ['palmate', 'ovate'],
    },
    distinctiveNotes: { es: 'Envés de la hoja cubierto de pelos blancos algodonosos; corteza clara con rombos oscuros. Tiembla con el viento mostrando el blanco.', en: 'Leaf underside covered in cottony white hairs; pale bark with dark diamond markings. Flutters in the wind, flashing white.' },
  },
  {
    commonName: { es: 'Sauce llorón', en: 'Weeping willow' },
    scientificName: 'Salix babylonica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['fissured'],
      habit: ['weeping'], leafShape: ['linear', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Ramas largas y colgantes hasta el suelo, típicas junto al agua. Hoja muy estrecha y alargada, finamente dentada.', en: 'Long branches trailing to the ground, typical by water. Very narrow, elongated, finely toothed leaf.' },
  },
  {
    commonName: { es: 'Magnolio', en: 'Southern magnolia' },
    scientificName: 'Magnolia grandiflora',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['none-visible'], bark: ['smooth'],
      habit: ['conical', 'rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja grande, gruesa y brillante, con el envés ferrugíneo. Flores blancas enormes y muy fragantes en verano; fruto en cono carnoso.', en: 'Large, thick, glossy leaf with a rusty-brown underside. Huge, intensely fragrant white flowers in summer; fleshy cone-like fruit.' },
  },
  {
    commonName: { es: 'Tilo', en: 'Large-leaved lime' },
    scientificName: 'Tilia platyphyllos',
    traits: {
      // Corteza lisa y gris de joven, agrietándose con la edad.
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['smooth', 'fissured'],
      habit: ['rounded'], leafShape: ['heart'],
    },
    distinctiveNotes: { es: 'Hoja acorazonada y asimétrica en la base, finamente dentada. Flores melíferas muy aromáticas colgando de una bráctea alargada.', en: 'Heart-shaped leaf, asymmetric at the base and finely toothed. Fragrant nectar-rich flowers hanging from an elongated bract.' },
  },
  {
    commonName: { es: 'Ciprés común', en: 'Mediterranean cypress' },
    scientificName: 'Cupressus sempervirens',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Porte columnar muy estrecho y vertical, típico de cementerios. Hojas en escama apretadas; gálbulas (piñas) leñosas redondeadas.', en: 'Very narrow, upright columnar habit, typical of cemeteries. Tightly packed scale-like leaves; rounded woody cones (galbuli).' },
  },
  {
    commonName: { es: 'Robinia / Falsa acacia', en: 'Black locust' },
    scientificName: 'Robinia pseudoacacia',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['thorny'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja compuesta con folíolos ovales de borde liso; pares de espinas en las ramas. Flores blancas colgantes muy olorosas y vainas planas.', en: 'Compound leaf with smooth-edged oval leaflets; paired spines on the branches. Fragrant hanging white flowers and flat pods.' },
  },
  {
    commonName: { es: 'Almendro', en: 'Almond' },
    scientificName: 'Prunus dulcis',
    traits: {
      // Corteza lisa de joven que se vuelve oscura y resquebrajada con la edad.
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Florece muy temprano (enero-febrero) en blanco-rosado antes de las hojas. Hoja estrecha y dentada; fruto seco con cáscara aterciopelada.', en: 'Blooms very early (January-February) in white-pink before the leaves appear. Narrow toothed leaf; dry fruit with a velvety husk.' },
  },
];
