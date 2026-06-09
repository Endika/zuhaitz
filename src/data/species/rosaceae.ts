import type { Species } from '../../engine/types';

// Rosaceae & cultivated/wild fruit trees of Spain (24 species). Every species fills
// all 8 trait keys. Pomes (Malus, Pyrus, Cydonia, Mespilus, Eriobotrya, Crataegus,
// Sorbus, Photinia, Amelanchier) → fruit ['pome']; stone fruits (Prunus) → ['drupe'].
// Almendro (Prunus dulcis) is in seed.ts and is NOT repeated here.
export const rosaceaeSpecies: Species[] = [
  {
    commonName: 'Manzano',
    scientificName: 'Malus domestica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja ovada finamente dentada y algo pubescente por el envés; pomo comestible (la manzana). Flores blanco-rosadas en primavera.',
  },
  {
    commonName: 'Peral común',
    scientificName: 'Pyrus communis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['conical', 'rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja ovada brillante de borde finamente dentado y pecíolo largo; copa más erguida que el manzano. Pomo piriforme (la pera).',
  },
  {
    commonName: 'Piruétano / Peral silvestre',
    scientificName: 'Pyrus bourgaeana',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['rounded', 'ovate'],
    },
    distinctiveNotes: 'Peral silvestre ibérico de dehesa, espinoso, con hoja casi redondeada de largo pecíolo. Corteza muy agrietada en placas; perillas pequeñas y ásperas.',
  },
  {
    commonName: 'Membrillero',
    scientificName: 'Cydonia oblonga',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja entera y muy tomentosa (afieltrada) por el envés; flor grande blanco-rosada solitaria. Pomo aromático amarillo y velloso (el membrillo).',
  },
  {
    commonName: 'Níspero europeo',
    scientificName: 'Mespilus germanica',
    traits: {
      leaf: ['simple'], margin: ['entire', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['spreading', 'rounded'], leafShape: ['lanceolate', 'ovate'],
    },
    distinctiveNotes: 'Hoja alargada y mate, casi sentada; fruto pardo con el cáliz abierto coronando el ápice, comestible solo tras ablandarse (asarado).',
  },
  {
    commonName: 'Níspero del Japón',
    scientificName: 'Eriobotrya japonica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Perennifolio de hoja grande, coriácea y rugosa con nervios marcados y envés tomentoso. Florece en otoño-invierno; nísperos anaranjados en primavera.',
  },
  {
    commonName: 'Cerezo',
    scientificName: 'Prunus avium',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'flaking'],
      habit: ['rounded', 'conical'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Corteza lisa rojiza con lenticelas horizontales que se desprende en bandas. Hoja colgante con dos glándulas rojas en el pecíolo; cerezas dulces.',
  },
  {
    commonName: 'Guindo',
    scientificName: 'Prunus cerasus',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Más pequeño y arbustivo que el cerezo, con hoja menor, firme y brillante. Fruto (la guinda) de sabor ácido; suele dar chupones desde la base.',
  },
  {
    commonName: 'Melocotonero',
    scientificName: 'Prunus persica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja muy estrecha y larga, lanceolada y de borde aserrado, plegada en V. Flores rosas tempranas pegadas a la rama; fruto aterciopelado (el melocotón).',
  },
  {
    commonName: 'Albaricoquero',
    scientificName: 'Prunus armeniaca',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'heart'],
    },
    distinctiveNotes: 'Hoja ancha, casi redondeada o acorazonada, con pecíolo rojizo. Floración blanca muy temprana; fruto anaranjado y aterciopelado (el albaricoque).',
  },
  {
    commonName: 'Ciruelo',
    scientificName: 'Prunus domestica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja elíptica algo arrugada y mate, con envés pubescente; ramas a veces algo espinosas. Fruto carnoso con pruina cerosa (la ciruela).',
  },
  {
    commonName: 'Ciruelo rojo / Pissardii',
    scientificName: 'Prunus cerasifera',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Ornamental urbano inconfundible por su follaje rojo-púrpura toda la temporada (cv. Pissardii). Floración rosada muy temprana; pequeñas ciruelas rojizas.',
  },
  {
    commonName: 'Endrino',
    scientificName: 'Prunus spinosa',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'thorny'],
      habit: ['spreading', 'rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Arbusto espinoso muy ramificado de setos; flores blancas que abren antes que la hoja. Drupa azul-negruzca con pruina (la endrina, base del pacharán).',
  },
  {
    commonName: 'Cerezo aliso / Cerezo de racimo',
    scientificName: 'Prunus padus',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Flores blancas en largos racimos colgantes (no en ramillete como otros Prunus), muy aromáticas. Drupas negras pequeñas y amargas; propio de riberas frescas.',
  },
  {
    commonName: 'Laurel cerezo',
    scientificName: 'Prunus laurocerasus',
    traits: {
      leaf: ['simple'], margin: ['entire', 'serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Seto perennifolio de hoja grande, gruesa y muy lustrosa, que huele a almendra amarga al estrujarse. Flores blancas erectas en espiga; drupas negras.',
  },
  {
    commonName: 'Loro / Laurel de Portugal',
    scientificName: 'Prunus lusitanica',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'conical'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Perennifolio de hoja coriácea brillante con el pecíolo rojizo característico. Racimos de flores blancas que sobresalen del follaje; drupas rojas a negras.',
  },
  {
    commonName: 'Espino albar / Majuelo',
    scientificName: 'Crataegus monogyna',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['thorny', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Arbusto o arbolillo espinoso de hoja profundamente lobulada. Flores blancas perfumadas en mayo; pomos rojos (majuelas) con una sola semilla.',
  },
  {
    commonName: 'Espino navarro',
    scientificName: 'Crataegus laevigata',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['thorny'],
      habit: ['rounded'], leafShape: ['palmate', 'ovate'],
    },
    distinctiveNotes: 'Similar al majuelo pero con lóbulos menos profundos y poco marcados; flores con 2-3 estilos y pomo con 2-3 semillas. Más propio de bosques umbríos.',
  },
  {
    commonName: 'Mostajo',
    scientificName: 'Sorbus aria',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja simple ovada de borde doblemente aserrado, intensamente blanco-tomentosa por el envés (destella plateada con el viento). Pomos rojo-anaranjados.',
  },
  {
    commonName: 'Serbal de cazadores',
    scientificName: 'Sorbus aucuparia',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded', 'conical'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja pinnada con 9-15 folíolos lanceolados aserrados. Corimbos de pequeños pomos rojo-coral muy llamativos en otoño, apreciados por las aves.',
  },
  {
    commonName: 'Serbal común',
    scientificName: 'Sorbus domestica',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja pinnada parecida a la del serbal de cazadores pero corteza muy agrietada en placas escamosas. Pomos grandes piriformes pardos (las serbas), comestibles ya pasados.',
  },
  {
    commonName: 'Mostajo de monte / Serbal torminal',
    scientificName: 'Sorbus torminalis',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['flaking', 'fissured'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Hoja simple con lóbulos agudos divergentes, recordando a un arce pero alterna. Corteza que se descama en plaquitas; pomos pardos moteados.',
  },
  {
    commonName: 'Fotinia',
    scientificName: 'Photinia × fraseri',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Seto ornamental perennifolio inconfundible por el brote nuevo rojo intenso (Red Robin) que contrasta con la hoja adulta verde brillante. Corimbos de flores blancas.',
  },
  {
    commonName: 'Guillomo',
    scientificName: 'Amelanchier ovalis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'rounded'],
    },
    distinctiveNotes: 'Arbusto de roquedos con hoja pequeña, casi redonda y blanco-tomentosa de joven. Flores blancas de pétalos estrechos; pequeños pomos negro-azulados comestibles.',
  },
];
