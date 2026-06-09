import type { Species } from '../../engine/types';

// Mediterranean natives & small trees of Spain. Every species fills all 8 trait
// keys (leaf, margin, arrangement, persistence, fruit, bark, habit, leafShape).
// Needle/scale-leaved species set broadleaf-only traits (margin, leafShape) to 'n-a'.
// No seed duplicates: the wild acebuche (Olea europaea var. sylvestris) is kept
// distinct from the cultivated olivo, and only non-bitter Citrus are added.
export const mediterraneanSpecies: Species[] = [
  {
    commonName: 'Algarrobo',
    scientificName: 'Ceratonia siliqua',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['legume'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['rounded'],
    },
    distinctiveNotes: 'Folíolos coriáceos redondeados y brillantes; vainas pardas colgantes (algarrobas) muy características que persisten en el árbol.',
  },
  {
    commonName: 'Acebuche',
    scientificName: 'Olea europaea var. sylvestris',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Olivo silvestre más achaparrado y espinoso que el cultivado; hojas opuestas más pequeñas, plateadas por el envés, y acebuchinas diminutas.',
  },
  {
    commonName: 'Lentisco',
    scientificName: 'Pistacia lentiscus',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja paripinnada con raquis alado y olor resinoso al estrujarla. Drupas que pasan de rojas a negras; mata densa siempre verde.',
  },
  {
    commonName: 'Cornicabra / Terebinto',
    scientificName: 'Pistacia terebinthus',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Hoja imparipinnada (con folíolo terminal) que cae en otoño tomando tonos rojizos; agallas curvadas en forma de cuerno y olor a trementina.',
  },
  {
    commonName: 'Madroño',
    scientificName: 'Arbutus unedo',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['lanceolate', 'ovate'],
    },
    distinctiveNotes: 'Frutos rojos rugosos comestibles tipo fresa; corteza rojiza que se desprende en tiras. Flores blancas en campanilla y frutos del año anterior a la vez.',
  },
  {
    commonName: 'Labiérnago',
    scientificName: 'Phillyrea latifolia',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hojas opuestas coriáceas con borde finamente aserrado, parecidas a las del acebuche pero opuestas y más anchas; pequeñas drupas azul-negruzcas.',
  },
  {
    commonName: 'Labiérnago de hoja estrecha',
    scientificName: 'Phillyrea angustifolia',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate', 'linear'],
    },
    distinctiveNotes: 'Arbusto de hojas opuestas estrechas y de borde liso; muy resistente a la sequía. Drupas pequeñas azuladas y porte denso achaparrado.',
  },
  {
    commonName: 'Mirto / Arrayán',
    scientificName: 'Myrtus communis',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Hojas opuestas muy aromáticas al frotarlas, con puntos translúcidos a contraluz. Flores blancas olorosas y bayas azul-negruzcas (murtones).',
  },
  {
    commonName: 'Laurel',
    scientificName: 'Laurus nobilis',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['smooth'],
      habit: ['conical', 'rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja coriácea muy aromática (uso culinario) de borde ondulado. Bayas negras brillantes; porte denso piramidal y rebrote desde la base.',
  },
  {
    commonName: 'Aladierno',
    scientificName: 'Rhamnus alaternus',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hojas alternas coriáceas y brillantes con dientecillos en el borde; ramillas rojizas. Pequeñas drupas que viran de rojo a negro.',
  },
  {
    commonName: 'Espino negro',
    scientificName: 'Rhamnus lycioides',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['linear', 'lanceolate'],
    },
    distinctiveNotes: 'Arbusto muy ramoso con ramillas espinosas y hojas estrechas pequeñas; drupas negruzcas. Forma matas intrincadas en matorrales secos.',
  },
  {
    commonName: 'Durillo',
    scientificName: 'Viburnum tinus',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hojas opuestas oscuras y brillantes; florece en invierno en corimbos blanco-rosados. Drupas de un azul metálico muy llamativo.',
  },
  {
    commonName: 'Brezo arbóreo',
    scientificName: 'Erica arborea',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Hojas aciculares diminutas en verticilos; multitud de florecillas blancas acampanadas en primavera. Cepa leñosa (raíz) muy apreciada para pipas.',
  },
  {
    commonName: 'Higuera',
    scientificName: 'Ficus carica',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['fig'], bark: ['smooth'],
      habit: ['spreading', 'rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Hoja grande palmeada y áspera; al cortar cualquier parte exuda látex blanco. Frutos carnosos (higos y brevas) y corteza lisa gris clara.',
  },
  {
    commonName: 'Morera blanca',
    scientificName: 'Morus alba',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['berry'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['heart', 'palmate'],
    },
    distinctiveNotes: 'Hoja brillante a veces lobulada, alimento del gusano de seda; moras blanco-rosadas dulces y poco manchantes. Brotación tardía.',
  },
  {
    commonName: 'Morera negra',
    scientificName: 'Morus nigra',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['berry'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['heart'],
    },
    distinctiveNotes: 'Hoja acorazonada áspera al tacto; moras oscuras casi negras, muy jugosas y manchantes. Porte más bajo y tortuoso que la morera blanca.',
  },
  {
    commonName: 'Granado',
    scientificName: 'Punica granatum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['berry'], bark: ['smooth', 'thorny'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hojas estrechas y brillantes, rojizas al brotar; flores rojo intenso. Fruto coriáceo coronado (la granada) con granos jugosos; ramillas espinosas.',
  },
  {
    commonName: 'Azufaifo',
    scientificName: 'Ziziphus jujuba',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured', 'thorny'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Ramas en zigzag con espinas pareadas; hoja con tres nervios marcados desde la base. Frutos (azufaifas) pardo-rojizos como pequeños dátiles.',
  },
  {
    commonName: 'Limonero',
    scientificName: 'Citrus limon',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['smooth', 'thorny'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Hojas aromáticas al estrujarlas y ramas con espinas; brotes y flores teñidos de morado. Fruto ácido amarillo (limón) presente casi todo el año.',
  },
  {
    commonName: 'Naranjo dulce',
    scientificName: 'Citrus sinensis',
    traits: {
      leaf: ['simple'], margin: ['entire', 'wavy'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja brillante con pecíolo estrechamente alado; flores blancas de azahar muy fragantes. Naranjas dulces; copa redondeada densa de huerta.',
  },
  {
    commonName: 'Cotino / Árbol de las pelucas',
    scientificName: 'Cotinus coggygria',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['rounded', 'ovate'],
    },
    distinctiveNotes: 'Hojas redondeadas que enrojecen espectacularmente en otoño. Inflorescencias plumosas que parecen humo o pelucas; savia resinosa.',
  },
  {
    commonName: 'Zumaque',
    scientificName: 'Rhus coriaria',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja compuesta con raquis algo alado y folíolos dentados, vellosos. Frutos rojizos pubescentes en racimos densos, ricos en taninos (curtido).',
  },
  {
    commonName: 'Retama de olor',
    scientificName: 'Spartium junceum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['linear', 'lanceolate'],
    },
    distinctiveNotes: 'Tallos verdes juncoformes casi sin hojas que realizan la fotosíntesis. Flores amarillas grandes muy olorosas; vainas negras al madurar.',
  },
  {
    commonName: 'Anagiris / Hediondo',
    scientificName: 'Anagyris foetida',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Hoja trifoliada que despide olor fétido al frotarla. Florece en invierno con flores amarillas; vainas colgantes con semillas tóxicas.',
  },
];
