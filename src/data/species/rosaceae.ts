import type { Species } from '../../engine/types';

// Rosaceae & cultivated/wild fruit trees of Spain (24 species). Every species fills
// all 8 trait keys. Pomes (Malus, Pyrus, Cydonia, Mespilus, Eriobotrya, Crataegus,
// Sorbus, Photinia, Amelanchier) → fruit ['pome']; stone fruits (Prunus) → ['drupe'].
// Almendro (Prunus dulcis) is in seed.ts and is NOT repeated here.
export const rosaceaeSpecies: Species[] = [
  {
    commonName: { es: 'Manzano', en: 'Apple tree' },
    scientificName: 'Malus domestica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja ovada finamente dentada y algo pubescente por el envés; pomo comestible (la manzana). Flores blanco-rosadas en primavera.', en: 'Ovate, finely toothed leaf, slightly downy beneath; edible pome (the apple). Pinkish-white flowers in spring.' },
  },
  {
    commonName: { es: 'Peral común', en: 'Pear tree' },
    scientificName: 'Pyrus communis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['conical', 'rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja ovada brillante de borde finamente dentado y pecíolo largo; copa más erguida que el manzano. Pomo piriforme (la pera).', en: 'Glossy ovate leaf with a finely toothed margin and a long petiole; more upright crown than the apple. Pear-shaped pome (the pear).' },
  },
  {
    commonName: { es: 'Piruétano / Peral silvestre', en: 'Iberian wild pear' },
    scientificName: 'Pyrus bourgaeana',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['rounded', 'ovate'],
    },
    distinctiveNotes: { es: 'Peral silvestre ibérico de dehesa, espinoso, con hoja casi redondeada de largo pecíolo. Corteza muy agrietada en placas; perillas pequeñas y ásperas.', en: 'Iberian wild pear of the dehesa, thorny, with an almost rounded, long-petioled leaf. Bark deeply cracked into plates; small, rough little pears.' },
  },
  {
    commonName: { es: 'Membrillero', en: 'Quince' },
    scientificName: 'Cydonia oblonga',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja entera y muy tomentosa (afieltrada) por el envés; flor grande blanco-rosada solitaria. Pomo aromático amarillo y velloso (el membrillo).', en: 'Entire leaf, densely felted (tomentose) beneath; large solitary pinkish-white flower. Aromatic, downy yellow pome (the quince).' },
  },
  {
    commonName: { es: 'Níspero europeo', en: 'Medlar' },
    scientificName: 'Mespilus germanica',
    traits: {
      leaf: ['simple'], margin: ['entire', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['spreading', 'rounded'], leafShape: ['lanceolate', 'ovate'],
    },
    distinctiveNotes: { es: 'Hoja alargada y mate, casi sentada; fruto pardo con el cáliz abierto coronando el ápice, comestible solo tras ablandarse (asarado).', en: 'Elongated, matt, almost stalkless leaf; brown fruit crowned by an open calyx at the apex, edible only after it softens (bletting).' },
  },
  {
    commonName: { es: 'Níspero del Japón', en: 'Loquat' },
    scientificName: 'Eriobotrya japonica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Perennifolio de hoja grande, coriácea y rugosa con nervios marcados y envés tomentoso. Florece en otoño-invierno; nísperos anaranjados en primavera.', en: 'Evergreen with large, leathery, wrinkled leaves with prominent veins and a felted underside. Flowers in autumn-winter; orange loquats in spring.' },
  },
  {
    commonName: { es: 'Cerezo', en: 'Wild cherry' },
    scientificName: 'Prunus avium',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'flaking'],
      habit: ['rounded', 'conical'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Corteza lisa rojiza con lenticelas horizontales que se desprende en bandas. Hoja colgante con dos glándulas rojas en el pecíolo; cerezas dulces.', en: 'Smooth reddish bark with horizontal lenticels that peels off in bands. Drooping leaf with two red glands on the petiole; sweet cherries.' },
  },
  {
    commonName: { es: 'Guindo', en: 'Sour cherry' },
    scientificName: 'Prunus cerasus',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Más pequeño y arbustivo que el cerezo, con hoja menor, firme y brillante. Fruto (la guinda) de sabor ácido; suele dar chupones desde la base.', en: 'Smaller and shrubbier than the wild cherry, with a smaller, firm, glossy leaf. Sour-tasting fruit (the morello cherry); often produces suckers from the base.' },
  },
  {
    commonName: { es: 'Melocotonero', en: 'Peach' },
    scientificName: 'Prunus persica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja muy estrecha y larga, lanceolada y de borde aserrado, plegada en V. Flores rosas tempranas pegadas a la rama; fruto aterciopelado (el melocotón).', en: 'Very narrow, long, lanceolate leaf with a serrate margin, folded in a V. Early pink flowers pressed against the branch; velvety fruit (the peach).' },
  },
  {
    commonName: { es: 'Albaricoquero', en: 'Apricot' },
    scientificName: 'Prunus armeniaca',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'heart'],
    },
    distinctiveNotes: { es: 'Hoja ancha, casi redondeada o acorazonada, con pecíolo rojizo. Floración blanca muy temprana; fruto anaranjado y aterciopelado (el albaricoque).', en: 'Broad, almost rounded or heart-shaped leaf with a reddish petiole. Very early white blossom; orange, velvety fruit (the apricot).' },
  },
  {
    commonName: { es: 'Ciruelo', en: 'Plum' },
    scientificName: 'Prunus domestica',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja elíptica algo arrugada y mate, con envés pubescente; ramas a veces algo espinosas. Fruto carnoso con pruina cerosa (la ciruela).', en: 'Elliptic, somewhat wrinkled, matt leaf with a downy underside; branches sometimes slightly thorny. Fleshy fruit with a waxy bloom (the plum).' },
  },
  {
    commonName: { es: 'Ciruelo rojo / Pissardii', en: 'Cherry plum' },
    scientificName: 'Prunus cerasifera',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Ornamental urbano inconfundible por su follaje rojo-púrpura toda la temporada (cv. Pissardii). Floración rosada muy temprana; pequeñas ciruelas rojizas.', en: 'Urban ornamental, unmistakable for its red-purple foliage all season long (cv. Pissardii). Very early pink blossom; small reddish plums.' },
  },
  {
    commonName: { es: 'Endrino', en: 'Blackthorn / Sloe' },
    scientificName: 'Prunus spinosa',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'thorny'],
      habit: ['spreading', 'rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Arbusto espinoso muy ramificado de setos; flores blancas que abren antes que la hoja. Drupa azul-negruzca con pruina (la endrina, base del pacharán).', en: 'Densely branched thorny hedgerow shrub; white flowers that open before the leaves. Bluish-black drupe with a waxy bloom (the sloe, base of pacharán liqueur).' },
  },
  {
    commonName: { es: 'Cerezo aliso / Cerezo de racimo', en: 'Bird cherry' },
    scientificName: 'Prunus padus',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Flores blancas en largos racimos colgantes (no en ramillete como otros Prunus), muy aromáticas. Drupas negras pequeñas y amargas; propio de riberas frescas.', en: 'White flowers in long hanging racemes (not in clusters like other Prunus), strongly fragrant. Small, bitter black drupes; typical of cool riverbanks.' },
  },
  {
    commonName: { es: 'Laurel cerezo', en: 'Cherry laurel' },
    scientificName: 'Prunus laurocerasus',
    traits: {
      leaf: ['simple'], margin: ['entire', 'serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Seto perennifolio de hoja grande, gruesa y muy lustrosa, que huele a almendra amarga al estrujarse. Flores blancas erectas en espiga; drupas negras.', en: 'Evergreen hedge with large, thick, very glossy leaves that smell of bitter almond when crushed. Erect white flowers in spikes; black drupes.' },
  },
  {
    commonName: { es: 'Loro / Laurel de Portugal', en: 'Portugal laurel' },
    scientificName: 'Prunus lusitanica',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'conical'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Perennifolio de hoja coriácea brillante con el pecíolo rojizo característico. Racimos de flores blancas que sobresalen del follaje; drupas rojas a negras.', en: 'Evergreen with glossy leathery leaves and a characteristic reddish petiole. Racemes of white flowers standing out above the foliage; red to black drupes.' },
  },
  {
    commonName: { es: 'Espino albar / Majuelo', en: 'Common hawthorn' },
    scientificName: 'Crataegus monogyna',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['thorny', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Arbusto o arbolillo espinoso de hoja profundamente lobulada. Flores blancas perfumadas en mayo; pomos rojos (majuelas) con una sola semilla.', en: 'Thorny shrub or small tree with deeply lobed leaves. Fragrant white flowers in May; red pomes (haws) with a single seed.' },
  },
  {
    commonName: { es: 'Espino navarro', en: 'Midland hawthorn' },
    scientificName: 'Crataegus laevigata',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['thorny'],
      habit: ['rounded'], leafShape: ['palmate', 'ovate'],
    },
    distinctiveNotes: { es: 'Similar al majuelo pero con lóbulos menos profundos y poco marcados; flores con 2-3 estilos y pomo con 2-3 semillas. Más propio de bosques umbríos.', en: 'Similar to common hawthorn but with shallower, faintly marked lobes; flowers with 2-3 styles and pomes with 2-3 seeds. More typical of shady woodland.' },
  },
  {
    commonName: { es: 'Mostajo', en: 'Whitebeam' },
    scientificName: 'Sorbus aria',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja simple ovada de borde doblemente aserrado, intensamente blanco-tomentosa por el envés (destella plateada con el viento). Pomos rojo-anaranjados.', en: 'Simple ovate leaf with a doubly serrate margin, densely white-felted beneath (flashing silver in the wind). Red-orange pomes.' },
  },
  {
    commonName: { es: 'Serbal de cazadores', en: 'Rowan' },
    scientificName: 'Sorbus aucuparia',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded', 'conical'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja pinnada con 9-15 folíolos lanceolados aserrados. Corimbos de pequeños pomos rojo-coral muy llamativos en otoño, apreciados por las aves.', en: 'Pinnate leaf with 9-15 serrate lanceolate leaflets. Corymbs of small coral-red pomes, very showy in autumn and prized by birds.' },
  },
  {
    commonName: { es: 'Serbal común', en: 'Service tree' },
    scientificName: 'Sorbus domestica',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja pinnada parecida a la del serbal de cazadores pero corteza muy agrietada en placas escamosas. Pomos grandes piriformes pardos (las serbas), comestibles ya pasados.', en: 'Pinnate leaf like the rowan but with bark deeply cracked into scaly plates. Large pear-shaped brown pomes (sorb apples), edible once over-ripe.' },
  },
  {
    commonName: { es: 'Mostajo de monte / Serbal torminal', en: 'Wild service tree' },
    scientificName: 'Sorbus torminalis',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['flaking', 'fissured'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Hoja simple con lóbulos agudos divergentes, recordando a un arce pero alterna. Corteza que se descama en plaquitas; pomos pardos moteados.', en: 'Simple leaf with sharp, spreading lobes, recalling a maple but alternate. Bark flaking off in small plates; speckled brown pomes.' },
  },
  {
    commonName: { es: 'Fotinia', en: 'Red robin / Fraser photinia' },
    scientificName: 'Photinia × fraseri',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Seto ornamental perennifolio inconfundible por el brote nuevo rojo intenso (Red Robin) que contrasta con la hoja adulta verde brillante. Corimbos de flores blancas.', en: 'Evergreen ornamental hedge, unmistakable for its bright red new growth (Red Robin) contrasting with the glossy green mature leaves. Corymbs of white flowers.' },
  },
  {
    commonName: { es: 'Guillomo', en: 'Snowy mespilus' },
    scientificName: 'Amelanchier ovalis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['pome'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'rounded'],
    },
    distinctiveNotes: { es: 'Arbusto de roquedos con hoja pequeña, casi redonda y blanco-tomentosa de joven. Flores blancas de pétalos estrechos; pequeños pomos negro-azulados comestibles.', en: 'Rock-dwelling shrub with a small, almost round leaf, white-felted when young. White flowers with narrow petals; small edible bluish-black pomes.' },
  },
];
