import type { Species } from '../../engine/types';

// ~15 common Spanish trees (native + urban/ornamental). Every trait key is filled.
// Variable (multi-value) traits are used where the species genuinely varies.
export const seedSpecies: Species[] = [
  {
    commonName: 'Plátano de sombra',
    scientificName: 'Platanus × hispanica',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['flaking'],
    },
    distinctiveNotes: 'Corteza que se desprende en placas dejando manchas claras; bolas colgantes en invierno. Hoja palmeada parecida a la del arce.',
  },
  {
    commonName: 'Encina',
    scientificName: 'Quercus ilex',
    traits: {
      // Hoja muy variable: borde liso en árboles adultos, espinoso/dentado en rebrotes.
      leaf: ['simple'], margin: ['entire', 'serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['acorn'], bark: ['fissured'],
    },
    distinctiveNotes: 'Perennifolia de hoja coriácea, verde oscura por arriba y blanquecina por debajo; borde liso o con dientes espinosos. Produce bellotas.',
  },
  {
    commonName: 'Alcornoque',
    scientificName: 'Quercus suber',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['acorn'], bark: ['flaking'],
    },
    distinctiveNotes: 'Inconfundible por su gruesa corteza de corcho que se extrae en planchas dejando el tronco rojizo. Bellotas y hoja perenne dentada.',
  },
  {
    commonName: 'Pino piñonero',
    scientificName: 'Pinus pinea',
    traits: {
      leaf: ['needle'], margin: ['entire'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
    },
    distinctiveNotes: 'Copa en forma de sombrilla aparasolada muy característica. Piñas redondeadas con piñones comestibles; acículas largas en pares.',
  },
  {
    commonName: 'Naranjo amargo',
    scientificName: 'Citrus × aurantium',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
    },
    distinctiveNotes: 'Árbol urbano de calles del sur; hoja brillante con pecíolo alado, flores muy aromáticas (azahar) y naranjas amargas que persisten en invierno.',
  },
  {
    commonName: 'Olivo',
    scientificName: 'Olea europaea',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
    },
    distinctiveNotes: 'Hojas estrechas opuestas, verde grisáceo por arriba y plateadas por debajo. Tronco retorcido y agrietado; fruto la aceituna.',
  },
  {
    commonName: 'Jacarandá',
    scientificName: 'Jacaranda mimosifolia',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['smooth'],
    },
    distinctiveNotes: 'Hoja doblemente compuesta muy fina, tipo helecho. Espectacular floración azul-violeta en primavera; cápsulas leñosas redondeadas.',
  },
  {
    commonName: 'Almez',
    scientificName: 'Celtis australis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
    },
    distinctiveNotes: 'Corteza lisa gris como la del haya; hoja asimétrica, áspera y muy puntiaguda. Pequeñas drupas oscuras (almezas) en otoño.',
  },
  {
    commonName: 'Fresno',
    scientificName: 'Fraxinus angustifolia',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
    },
    distinctiveNotes: 'Hoja compuesta opuesta con folíolos lanceolados dentados. Frutos en sámara alada agrupados en racimos; yemas pardas.',
  },
  {
    commonName: 'Álamo blanco',
    scientificName: 'Populus alba',
    traits: {
      // Hojas variables: las jóvenes lobuladas (tipo arce), las adultas dentadas.
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['smooth'],
    },
    distinctiveNotes: 'Envés de la hoja cubierto de pelos blancos algodonosos; corteza clara con rombos oscuros. Tiembla con el viento mostrando el blanco.',
  },
  {
    commonName: 'Sauce llorón',
    scientificName: 'Salix babylonica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['fissured'],
    },
    distinctiveNotes: 'Ramas largas y colgantes hasta el suelo, típicas junto al agua. Hoja muy estrecha y alargada, finamente dentada.',
  },
  {
    commonName: 'Magnolio',
    scientificName: 'Magnolia grandiflora',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['none-visible'], bark: ['smooth'],
    },
    distinctiveNotes: 'Hoja grande, gruesa y brillante, con el envés ferrugíneo. Flores blancas enormes y muy fragantes en verano; fruto en cono carnoso.',
  },
  {
    commonName: 'Tilo',
    scientificName: 'Tilia platyphyllos',
    traits: {
      // Corteza lisa y gris de joven, agrietándose con la edad.
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['none-visible'], bark: ['smooth', 'fissured'],
    },
    distinctiveNotes: 'Hoja acorazonada y asimétrica en la base, finamente dentada. Flores melíferas muy aromáticas colgando de una bráctea alargada.',
  },
  {
    commonName: 'Ciprés común',
    scientificName: 'Cupressus sempervirens',
    traits: {
      leaf: ['needle'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
    },
    distinctiveNotes: 'Porte columnar muy estrecho y vertical, típico de cementerios. Hojas en escama apretadas; gálbulas (piñas) leñosas redondeadas.',
  },
  {
    commonName: 'Robinia / Falsa acacia',
    scientificName: 'Robinia pseudoacacia',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['thorny'],
    },
    distinctiveNotes: 'Hoja compuesta con folíolos ovales de borde liso; pares de espinas en las ramas. Flores blancas colgantes muy olorosas y vainas planas.',
  },
  {
    commonName: 'Almendro',
    scientificName: 'Prunus dulcis',
    traits: {
      // Corteza lisa de joven que se vuelve oscura y resquebrajada con la edad.
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'fissured'],
    },
    distinctiveNotes: 'Florece muy temprano (enero-febrero) en blanco-rosado antes de las hojas. Hoja estrecha y dentada; fruto seco con cáscara aterciopelada.',
  },
];
