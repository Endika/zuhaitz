import type { Species } from '../../engine/types';

// Riparian & temperate broadleaves: trees of riverbanks, wet soils and cool
// northern forests. Every species fills all 8 trait keys. Scale-leaved Tamarix
// sets broadleaf-only traits (margin, leafShape) to 'n-a'.
// Avoids seed duplicates: Populus alba, Salix babylonica, Fraxinus angustifolia,
// Celtis australis, Platanus × hispanica.
export const riparianSpecies: Species[] = [
  {
    commonName: 'Chopo negro',
    scientificName: 'Populus nigra',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['columnar'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja romboidal-triangular finamente dentada; corteza muy resquebrajada. La variedad piramidal (chopo lombardo) tiene porte alto y estrecho de ribera.',
  },
  {
    commonName: 'Álamo temblón',
    scientificName: 'Populus tremula',
    traits: {
      leaf: ['simple'], margin: ['wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['rounded'],
    },
    distinctiveNotes: 'Hoja casi circular de borde ondulado y pecíolo aplanado que la hace temblar con la mínima brisa. Corteza lisa verdosa-grisácea; sube a la alta montaña.',
  },
  {
    commonName: 'Chopo canadiense',
    scientificName: 'Populus × canadensis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['heart'],
    },
    distinctiveNotes: 'Híbrido de cultivo muy frecuente en choperas y riberas; hoja triangular-acorazonada algo mayor que la del chopo negro, con glándulas en la base del limbo.',
  },
  {
    commonName: 'Chopo de Simón',
    scientificName: 'Populus simonii',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth', 'fissured'],
      habit: ['columnar'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Chopo ornamental de origen asiático; hoja romboidal-obovada con la mayor anchura por encima de la mitad y brotación muy temprana. Ramillas finas rojizas.',
  },
  {
    commonName: 'Sauce blanco',
    scientificName: 'Salix alba',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja estrecha y lanceolada cubierta de pelos sedosos blanquecinos que dan a la copa un tono plateado al viento. Árbol de ribera de buen porte.',
  },
  {
    commonName: 'Sauce ceniciento',
    scientificName: 'Salix atrocinerea',
    traits: {
      leaf: ['simple'], margin: ['wavy', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Sauce arbustivo de envés con pelos rojizos-ferrugíneos; la madera bajo la corteza muestra costillas salientes. Muy común en arroyos y bordes húmedos.',
  },
  {
    commonName: 'Sauce frágil',
    scientificName: 'Salix fragilis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Ramillas que se desprenden por la base con un chasquido limpio, de ahí su nombre. Hoja lampiña y verde brillante, más ancha que la del sauce blanco.',
  },
  {
    commonName: 'Sauce cabruno',
    scientificName: 'Salix caprea',
    traits: {
      leaf: ['simple'], margin: ['wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja ancha, ovalada y rugosa, distinta de la del resto de sauces; amentos algodonosos muy vistosos antes de las hojas. Tolera suelos menos húmedos.',
  },
  {
    commonName: 'Sauce púrpura',
    scientificName: 'Salix purpurea',
    traits: {
      leaf: ['simple'], margin: ['entire', 'serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Mimbrera de ramillas finas, flexibles y a menudo purpúreas; hojas casi opuestas, raras en el género. Se cultiva para cestería junto al agua.',
  },
  {
    commonName: 'Sauce de hoja estrecha',
    scientificName: 'Salix eleagnos',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['linear'],
    },
    distinctiveNotes: 'Hoja muy estrecha, casi lineal, con borde revoluto y envés blanco-tomentoso. Forma matorrales en gravas y ramblas de montaña.',
  },
  {
    commonName: 'Aliso',
    scientificName: 'Alnus glutinosa',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical'], leafShape: ['rounded', 'ovate'],
    },
    distinctiveNotes: 'Hoja redondeada con el ápice escotado (no apuntado) y algo pegajosa al brotar. Frutos en pequeñas piñas leñosas que persisten todo el invierno; vive con los pies en el agua.',
  },
  {
    commonName: 'Abedul',
    scientificName: 'Betula pendula',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['papery'],
      habit: ['weeping'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Corteza blanca que se exfolia en láminas con bandas negras; ramillas colgantes finas. Hoja triangular-romboidal doblemente aserrada.',
  },
  {
    commonName: 'Abedul pubescente',
    scientificName: 'Betula pubescens',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['papery'],
      habit: ['conical'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Como el abedul común pero con ramillas pubescentes (no colgantes ni verrugosas) y hoja más ovalada. Prefiere suelos turbosos y encharcados del norte.',
  },
  {
    commonName: 'Abedul blanco',
    scientificName: 'Betula alba',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['papery'],
      habit: ['rounded'], leafShape: ['ovate', 'heart'],
    },
    distinctiveNotes: 'Abedul de montaña húmeda con corteza blanca papirácea y hoja de base más acorazonada. Forma bosquetes claros (abedulares) en el noroeste peninsular.',
  },
  {
    commonName: 'Olmo común',
    scientificName: 'Ulmus minor',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja con la base claramente asimétrica y tacto áspero, doblemente aserrada. Sámaras redondeadas con la semilla descentrada; muy diezmado por la grafiosis.',
  },
  {
    commonName: 'Olmo de montaña',
    scientificName: 'Ulmus glabra',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['smooth', 'fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja grande, muy áspera y a menudo con tres puntas en el ápice, base muy desigual. Propio de barrancos y bosques frescos de montaña; corteza lisa de joven.',
  },
  {
    commonName: 'Olmo de Siberia',
    scientificName: 'Ulmus pumila',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Olmo introducido resistente a la grafiosis; hoja pequeña, casi simétrica y de aserrado simple, más estrecha que la del olmo común. Plantado en caminos y setos.',
  },
  {
    commonName: 'Fresno de hoja ancha',
    scientificName: 'Fraxinus excelsior',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate', 'ovate'],
    },
    distinctiveNotes: 'Fresno norteño con yemas de color negro intenso muy llamativas en invierno y folíolos más anchos que el fresno meridional. Sámaras colgantes en racimos densos.',
  },
  {
    commonName: 'Fresno de flor',
    scientificName: 'Fraxinus ornus',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Único fresno con flores blancas vistosas y perfumadas en panículas (de ahí "fresno florido"); corteza lisa grisácea. De su savia se obtiene el maná.',
  },
  {
    commonName: 'Carpe',
    scientificName: 'Carpinus betulus',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Tronco liso gris con relieve fibroso y acanalado, como musculado. Hoja doblemente aserrada con nervios muy marcados; frutos con bráctea trilobulada alada.',
  },
  {
    commonName: 'Avellano',
    scientificName: 'Corylus avellana',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['rounded', 'heart'],
    },
    distinctiveNotes: 'Arbusto o arbolillo de varios troncos; hoja casi circular, blanda y de ápice brusco. Amentos colgantes amarillos a fin de invierno; el fruto es la avellana.',
  },
  {
    commonName: 'Taray',
    scientificName: 'Tamarix gallica',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Hojas diminutas en escama sobre ramillas finísimas que dan aspecto plumoso. Espigas de florecillas rosadas; tolera sales y vive en ramblas, saladares y costas.',
  },
  {
    commonName: 'Taray africano',
    scientificName: 'Tamarix africana',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth', 'fissured'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Taray de mayor porte y corteza pardo-purpúrea casi negra; racimos florales más gruesos y tempranos que el taray común. Frecuente en cauces del sur y litoral.',
  },
  {
    commonName: 'Adelfa',
    scientificName: 'Nerium oleander',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Arbusto perenne de hojas coriáceas en verticilos de tres; flores rosadas o blancas en verano. Coloniza ramblas secas del sur; toda la planta es muy tóxica.',
  },
  {
    commonName: 'Saúco',
    scientificName: 'Sambucus nigra',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['berry'], bark: ['corky'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Hoja compuesta opuesta de olor desagradable al estrujarla; ramas con médula blanca y esponjosa. Grandes corimbos de flores blancas y bayas negras colgantes.',
  },
  {
    commonName: 'Nogal',
    scientificName: 'Juglans regia',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja compuesta aromática con folíolos enteros que huelen fuerte al frotarlos. Fruto carnoso verde que encierra la nuez; copa amplia y corteza gris agrietada.',
  },
  {
    commonName: 'Arce campestre',
    scientificName: 'Acer campestre',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured', 'corky'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Arce pequeño de hoja palmeada con lóbulos redondeados y romos; ramillas a veces con crestas corchosas. Sámaras dobles con las alas casi en línea recta (horizontales).',
  },
];
