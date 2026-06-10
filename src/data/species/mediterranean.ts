import type { Species } from '../../engine/types';

// Mediterranean natives & small trees of Spain. Every species fills all 8 trait
// keys (leaf, margin, arrangement, persistence, fruit, bark, habit, leafShape).
// Needle/scale-leaved species set broadleaf-only traits (margin, leafShape) to 'n-a'.
// No seed duplicates: the wild acebuche (Olea europaea var. sylvestris) is kept
// distinct from the cultivated olivo, and only non-bitter Citrus are added.
export const mediterraneanSpecies: Species[] = [
  {
    commonName: { es: 'Algarrobo', en: 'Carob tree' },
    scientificName: 'Ceratonia siliqua',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['legume'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['rounded'],
    },
    distinctiveNotes: { es: 'Folíolos coriáceos redondeados y brillantes; vainas pardas colgantes (algarrobas) muy características que persisten en el árbol.', en: 'Leathery, rounded, glossy leaflets; very distinctive hanging brown pods (carobs) that persist on the tree.' },
  },
  {
    commonName: { es: 'Acebuche', en: 'Wild olive' },
    scientificName: 'Olea europaea var. sylvestris',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Olivo silvestre más achaparrado y espinoso que el cultivado; hojas opuestas más pequeñas, plateadas por el envés, y acebuchinas diminutas.', en: 'Wild olive, more stunted and spiny than the cultivated one; smaller opposite leaves, silvery underneath, and tiny olives.' },
  },
  {
    commonName: { es: 'Lentisco', en: 'Mastic tree' },
    scientificName: 'Pistacia lentiscus',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja paripinnada con raquis alado y olor resinoso al estrujarla. Drupas que pasan de rojas a negras; mata densa siempre verde.', en: 'Even-pinnate leaf with a winged rachis and a resinous smell when crushed. Drupes turning from red to black; dense evergreen shrub.' },
  },
  {
    commonName: { es: 'Cornicabra / Terebinto', en: 'Terebinth' },
    scientificName: 'Pistacia terebinthus',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja imparipinnada (con folíolo terminal) que cae en otoño tomando tonos rojizos; agallas curvadas en forma de cuerno y olor a trementina.', en: 'Odd-pinnate leaf (with a terminal leaflet) that falls in autumn turning reddish; curved horn-shaped galls and a turpentine smell.' },
  },
  {
    commonName: { es: 'Madroño', en: 'Strawberry tree' },
    scientificName: 'Arbutus unedo',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['lanceolate', 'ovate'],
    },
    distinctiveNotes: { es: 'Frutos rojos rugosos comestibles tipo fresa; corteza rojiza que se desprende en tiras. Flores blancas en campanilla y frutos del año anterior a la vez.', en: 'Edible, warty red strawberry-like fruits; reddish bark that peels off in strips. Bell-shaped white flowers and the previous year\'s fruits at the same time.' },
  },
  {
    commonName: { es: 'Labiérnago', en: 'Mock privet' },
    scientificName: 'Phillyrea latifolia',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hojas opuestas coriáceas con borde finamente aserrado, parecidas a las del acebuche pero opuestas y más anchas; pequeñas drupas azul-negruzcas.', en: 'Leathery opposite leaves with a finely serrated margin, similar to the wild olive but opposite and broader; small bluish-black drupes.' },
  },
  {
    commonName: { es: 'Labiérnago de hoja estrecha', en: 'Narrow-leaved mock privet' },
    scientificName: 'Phillyrea angustifolia',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate', 'linear'],
    },
    distinctiveNotes: { es: 'Arbusto de hojas opuestas estrechas y de borde liso; muy resistente a la sequía. Drupas pequeñas azuladas y porte denso achaparrado.', en: 'Shrub with narrow, smooth-margined opposite leaves; very drought-tolerant. Small bluish drupes and a dense, stunted habit.' },
  },
  {
    commonName: { es: 'Mirto / Arrayán', en: 'Myrtle' },
    scientificName: 'Myrtus communis',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Hojas opuestas muy aromáticas al frotarlas, con puntos translúcidos a contraluz. Flores blancas olorosas y bayas azul-negruzcas (murtones).', en: 'Opposite leaves that are very aromatic when rubbed, with translucent dots when held to the light. Fragrant white flowers and bluish-black berries.' },
  },
  {
    commonName: { es: 'Laurel', en: 'Bay laurel' },
    scientificName: 'Laurus nobilis',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['smooth'],
      habit: ['conical', 'rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja coriácea muy aromática (uso culinario) de borde ondulado. Bayas negras brillantes; porte denso piramidal y rebrote desde la base.', en: 'Leathery, very aromatic leaf (culinary use) with a wavy margin. Glossy black berries; dense pyramidal habit that suckers from the base.' },
  },
  {
    commonName: { es: 'Aladierno', en: 'Italian buckthorn' },
    scientificName: 'Rhamnus alaternus',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hojas alternas coriáceas y brillantes con dientecillos en el borde; ramillas rojizas. Pequeñas drupas que viran de rojo a negro.', en: 'Leathery, glossy alternate leaves with tiny teeth along the margin; reddish twigs. Small drupes turning from red to black.' },
  },
  {
    commonName: { es: 'Espino negro', en: 'Black hawthorn buckthorn' },
    scientificName: 'Rhamnus lycioides',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['linear', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Arbusto muy ramoso con ramillas espinosas y hojas estrechas pequeñas; drupas negruzcas. Forma matas intrincadas en matorrales secos.', en: 'Densely branched shrub with spiny twigs and small narrow leaves; blackish drupes. Forms intricate thickets in dry scrubland.' },
  },
  {
    commonName: { es: 'Durillo', en: 'Laurustinus' },
    scientificName: 'Viburnum tinus',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hojas opuestas oscuras y brillantes; florece en invierno en corimbos blanco-rosados. Drupas de un azul metálico muy llamativo.', en: 'Dark, glossy opposite leaves; flowers in winter in pinkish-white corymbs. Drupes of a striking metallic blue.' },
  },
  {
    commonName: { es: 'Brezo arbóreo', en: 'Tree heath' },
    scientificName: 'Erica arborea',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Hojas aciculares diminutas en verticilos; multitud de florecillas blancas acampanadas en primavera. Cepa leñosa (raíz) muy apreciada para pipas.', en: 'Tiny needle-like leaves in whorls; masses of small bell-shaped white flowers in spring. Woody rootstock (burl) prized for making pipes.' },
  },
  {
    commonName: { es: 'Higuera', en: 'Common fig' },
    scientificName: 'Ficus carica',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['fig'], bark: ['smooth'],
      habit: ['spreading', 'rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Hoja grande palmeada y áspera; al cortar cualquier parte exuda látex blanco. Frutos carnosos (higos y brevas) y corteza lisa gris clara.', en: 'Large, rough, palmate leaf; any cut part exudes white latex. Fleshy fruits (figs and early-crop figs) and smooth, light-grey bark.' },
  },
  {
    commonName: { es: 'Morera blanca', en: 'White mulberry' },
    scientificName: 'Morus alba',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['berry'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['heart', 'palmate'],
    },
    distinctiveNotes: { es: 'Hoja brillante a veces lobulada, alimento del gusano de seda; moras blanco-rosadas dulces y poco manchantes. Brotación tardía.', en: 'Glossy, sometimes lobed leaf, food of the silkworm; sweet pinkish-white mulberries that hardly stain. Leafs out late.' },
  },
  {
    commonName: { es: 'Morera negra', en: 'Black mulberry' },
    scientificName: 'Morus nigra',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['berry'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['heart'],
    },
    distinctiveNotes: { es: 'Hoja acorazonada áspera al tacto; moras oscuras casi negras, muy jugosas y manchantes. Porte más bajo y tortuoso que la morera blanca.', en: 'Heart-shaped leaf rough to the touch; dark, almost black mulberries, very juicy and staining. Lower and more gnarled in habit than the white mulberry.' },
  },
  {
    commonName: { es: 'Granado', en: 'Pomegranate' },
    scientificName: 'Punica granatum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['berry'], bark: ['smooth', 'thorny'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hojas estrechas y brillantes, rojizas al brotar; flores rojo intenso. Fruto coriáceo coronado (la granada) con granos jugosos; ramillas espinosas.', en: 'Narrow, glossy leaves, reddish when sprouting; intense red flowers. Leathery crowned fruit (the pomegranate) with juicy seeds; spiny twigs.' },
  },
  {
    commonName: { es: 'Azufaifo', en: 'Jujube' },
    scientificName: 'Ziziphus jujuba',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured', 'thorny'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Ramas en zigzag con espinas pareadas; hoja con tres nervios marcados desde la base. Frutos (azufaifas) pardo-rojizos como pequeños dátiles.', en: 'Zigzag branches with paired spines; leaf with three prominent veins from the base. Reddish-brown fruits (jujubes) like small dates.' },
  },
  {
    commonName: { es: 'Limonero', en: 'Lemon' },
    scientificName: 'Citrus limon',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['smooth', 'thorny'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Hojas aromáticas al estrujarlas y ramas con espinas; brotes y flores teñidos de morado. Fruto ácido amarillo (limón) presente casi todo el año.', en: 'Leaves aromatic when crushed and branches with spines; shoots and flowers tinged with purple. Acidic yellow fruit (lemon) present almost year-round.' },
  },
  {
    commonName: { es: 'Naranjo dulce', en: 'Sweet orange' },
    scientificName: 'Citrus sinensis',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja brillante con pecíolo estrechamente alado; flores blancas de azahar muy fragantes. Naranjas dulces; copa redondeada densa de huerta.', en: 'Glossy leaf with a narrowly winged petiole; very fragrant white orange-blossom flowers. Sweet oranges; dense, rounded orchard crown.' },
  },
  {
    commonName: { es: 'Cotino / Árbol de las pelucas', en: 'Smoke tree' },
    scientificName: 'Cotinus coggygria',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['rounded', 'ovate'],
    },
    distinctiveNotes: { es: 'Hojas redondeadas que enrojecen espectacularmente en otoño. Inflorescencias plumosas que parecen humo o pelucas; savia resinosa.', en: 'Rounded leaves that turn spectacularly red in autumn. Feathery inflorescences resembling smoke or wigs; resinous sap.' },
  },
  {
    commonName: { es: 'Zumaque', en: 'Sumac' },
    scientificName: 'Rhus coriaria',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja compuesta con raquis algo alado y folíolos dentados, vellosos. Frutos rojizos pubescentes en racimos densos, ricos en taninos (curtido).', en: 'Compound leaf with a somewhat winged rachis and toothed, hairy leaflets. Reddish downy fruits in dense clusters, rich in tannins (used for tanning).' },
  },
  {
    commonName: { es: 'Retama de olor', en: 'Spanish broom' },
    scientificName: 'Spartium junceum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['linear', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Tallos verdes juncoformes casi sin hojas que realizan la fotosíntesis. Flores amarillas grandes muy olorosas; vainas negras al madurar.', en: 'Green rush-like stems with almost no leaves that carry out photosynthesis. Large, very fragrant yellow flowers; black pods when ripe.' },
  },
  {
    commonName: { es: 'Anagiris / Hediondo', en: 'Stinking bean trefoil' },
    scientificName: 'Anagyris foetida',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja trifoliada que despide olor fétido al frotarla. Florece en invierno con flores amarillas; vainas colgantes con semillas tóxicas.', en: 'Trifoliate leaf that gives off a foul smell when rubbed. Flowers in winter with yellow flowers; hanging pods with toxic seeds.' },
  },
];
