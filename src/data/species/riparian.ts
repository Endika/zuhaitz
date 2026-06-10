import type { Species } from '../../engine/types';

// Riparian & temperate broadleaves: trees of riverbanks, wet soils and cool
// northern forests. Every species fills all 8 trait keys. Scale-leaved Tamarix
// sets broadleaf-only traits (margin, leafShape) to 'n-a'.
// Avoids seed duplicates: Populus alba, Salix babylonica, Fraxinus angustifolia,
// Celtis australis, Platanus × hispanica.
export const riparianSpecies: Species[] = [
  {
    commonName: { es: 'Chopo negro', en: 'Black poplar' },
    scientificName: 'Populus nigra',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['columnar'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja romboidal-triangular finamente dentada; corteza muy resquebrajada. La variedad piramidal (chopo lombardo) tiene porte alto y estrecho de ribera.', en: 'Rhomboid-triangular finely toothed leaf; heavily cracked bark. The pyramidal variety (Lombardy poplar) has a tall, narrow riverside habit.' },
  },
  {
    commonName: { es: 'Álamo temblón', en: 'Aspen' },
    scientificName: 'Populus tremula',
    traits: {
      leaf: ['simple'], margin: ['wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['rounded'],
    },
    distinctiveNotes: { es: 'Hoja casi circular de borde ondulado y pecíolo aplanado que la hace temblar con la mínima brisa. Corteza lisa verdosa-grisácea; sube a la alta montaña.', en: 'Almost circular leaf with a wavy margin and a flattened petiole that makes it tremble in the slightest breeze. Smooth greenish-grey bark; climbs to high mountains.' },
  },
  {
    commonName: { es: 'Chopo canadiense', en: 'Canadian poplar' },
    scientificName: 'Populus × canadensis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['heart'],
    },
    distinctiveNotes: { es: 'Híbrido de cultivo muy frecuente en choperas y riberas; hoja triangular-acorazonada algo mayor que la del chopo negro, con glándulas en la base del limbo.', en: 'Cultivated hybrid very common in poplar plantations and riverbanks; triangular-heart-shaped leaf somewhat larger than that of the black poplar, with glands at the base of the blade.' },
  },
  {
    commonName: { es: 'Chopo de Simón', en: "Simon's poplar" },
    scientificName: 'Populus simonii',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth', 'fissured'],
      habit: ['columnar'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Chopo ornamental de origen asiático; hoja romboidal-obovada con la mayor anchura por encima de la mitad y brotación muy temprana. Ramillas finas rojizas.', en: 'Ornamental poplar of Asian origin; rhomboid-obovate leaf at its widest above the middle, with very early leaf-out. Slender reddish twigs.' },
  },
  {
    commonName: { es: 'Sauce blanco', en: 'White willow' },
    scientificName: 'Salix alba',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja estrecha y lanceolada cubierta de pelos sedosos blanquecinos que dan a la copa un tono plateado al viento. Árbol de ribera de buen porte.', en: 'Narrow, lance-shaped leaf covered with silky whitish hairs that give the crown a silvery sheen in the wind. A well-sized riverside tree.' },
  },
  {
    commonName: { es: 'Sauce ceniciento', en: 'Grey willow' },
    scientificName: 'Salix atrocinerea',
    traits: {
      leaf: ['simple'], margin: ['wavy', 'serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Sauce arbustivo de envés con pelos rojizos-ferrugíneos; la madera bajo la corteza muestra costillas salientes. Muy común en arroyos y bordes húmedos.', en: 'Shrubby willow with rusty-reddish hairs on the underside; the wood beneath the bark shows raised ridges. Very common along streams and damp margins.' },
  },
  {
    commonName: { es: 'Sauce frágil', en: 'Crack willow' },
    scientificName: 'Salix fragilis',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Ramillas que se desprenden por la base con un chasquido limpio, de ahí su nombre. Hoja lampiña y verde brillante, más ancha que la del sauce blanco.', en: 'Twigs that snap off cleanly at the base with a sharp crack, hence its name. Hairless, glossy green leaf, broader than that of the white willow.' },
  },
  {
    commonName: { es: 'Sauce cabruno', en: 'Goat willow' },
    scientificName: 'Salix caprea',
    traits: {
      leaf: ['simple'], margin: ['wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja ancha, ovalada y rugosa, distinta de la del resto de sauces; amentos algodonosos muy vistosos antes de las hojas. Tolera suelos menos húmedos.', en: 'Broad, oval, rough leaf, unlike that of other willows; showy cottony catkins appearing before the leaves. Tolerates less moist soils.' },
  },
  {
    commonName: { es: 'Sauce púrpura', en: 'Purple willow' },
    scientificName: 'Salix purpurea',
    traits: {
      leaf: ['simple'], margin: ['entire', 'serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Mimbrera de ramillas finas, flexibles y a menudo purpúreas; hojas casi opuestas, raras en el género. Se cultiva para cestería junto al agua.', en: 'Osier with slender, flexible, often purplish twigs; leaves almost opposite, rare within the genus. Cultivated for basketry beside water.' },
  },
  {
    commonName: { es: 'Sauce de hoja estrecha', en: 'Olive willow' },
    scientificName: 'Salix eleagnos',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['linear'],
    },
    distinctiveNotes: { es: 'Hoja muy estrecha, casi lineal, con borde revoluto y envés blanco-tomentoso. Forma matorrales en gravas y ramblas de montaña.', en: 'Very narrow, almost linear leaf with a rolled-under margin and a white-felted underside. Forms thickets on gravels and mountain stream beds.' },
  },
  {
    commonName: { es: 'Aliso', en: 'Common alder' },
    scientificName: 'Alnus glutinosa',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'wavy'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical'], leafShape: ['rounded', 'ovate'],
    },
    distinctiveNotes: { es: 'Hoja redondeada con el ápice escotado (no apuntado) y algo pegajosa al brotar. Frutos en pequeñas piñas leñosas que persisten todo el invierno; vive con los pies en el agua.', en: 'Rounded leaf with a notched (not pointed) tip, slightly sticky when emerging. Fruits in small woody cones that persist all winter; grows with its feet in the water.' },
  },
  {
    commonName: { es: 'Abedul', en: 'Silver birch' },
    scientificName: 'Betula pendula',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['papery'],
      habit: ['weeping'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Corteza blanca que se exfolia en láminas con bandas negras; ramillas colgantes finas. Hoja triangular-romboidal doblemente aserrada.', en: 'White bark that peels off in sheets with black bands; slender, drooping twigs. Triangular-rhomboid, doubly toothed leaf.' },
  },
  {
    commonName: { es: 'Abedul pubescente', en: 'Downy birch' },
    scientificName: 'Betula pubescens',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['papery'],
      habit: ['conical'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Como el abedul común pero con ramillas pubescentes (no colgantes ni verrugosas) y hoja más ovalada. Prefiere suelos turbosos y encharcados del norte.', en: 'Like the common birch but with downy twigs (neither drooping nor warty) and a more oval leaf. Prefers peaty, waterlogged soils of the north.' },
  },
  {
    commonName: { es: 'Abedul blanco', en: 'White birch' },
    scientificName: 'Betula alba',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['papery'],
      habit: ['rounded'], leafShape: ['ovate', 'heart'],
    },
    distinctiveNotes: { es: 'Abedul de montaña húmeda con corteza blanca papirácea y hoja de base más acorazonada. Forma bosquetes claros (abedulares) en el noroeste peninsular.', en: 'Birch of moist mountains with papery white bark and a more heart-shaped leaf base. Forms open groves (birch woods) in the northwest of the Iberian Peninsula.' },
  },
  {
    commonName: { es: 'Olmo común', en: 'Field elm' },
    scientificName: 'Ulmus minor',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja con la base claramente asimétrica y tacto áspero, doblemente aserrada. Sámaras redondeadas con la semilla descentrada; muy diezmado por la grafiosis.', en: 'Leaf with a clearly asymmetric base and a rough feel, doubly toothed. Rounded samaras with an off-centre seed; heavily decimated by Dutch elm disease.' },
  },
  {
    commonName: { es: 'Olmo de montaña', en: 'Wych elm' },
    scientificName: 'Ulmus glabra',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['smooth', 'fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja grande, muy áspera y a menudo con tres puntas en el ápice, base muy desigual. Propio de barrancos y bosques frescos de montaña; corteza lisa de joven.', en: 'Large, very rough leaf often with three points at the tip and a very unequal base. Typical of ravines and cool mountain woods; smooth bark when young.' },
  },
  {
    commonName: { es: 'Olmo de Siberia', en: 'Siberian elm' },
    scientificName: 'Ulmus pumila',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Olmo introducido resistente a la grafiosis; hoja pequeña, casi simétrica y de aserrado simple, más estrecha que la del olmo común. Plantado en caminos y setos.', en: 'Introduced elm resistant to Dutch elm disease; small, almost symmetric leaf with simple teeth, narrower than that of the field elm. Planted along paths and hedges.' },
  },
  {
    commonName: { es: 'Fresno de hoja ancha', en: 'Common ash' },
    scientificName: 'Fraxinus excelsior',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['lanceolate', 'ovate'],
    },
    distinctiveNotes: { es: 'Fresno norteño con yemas de color negro intenso muy llamativas en invierno y folíolos más anchos que el fresno meridional. Sámaras colgantes en racimos densos.', en: 'Northern ash with strikingly jet-black buds that stand out in winter and broader leaflets than the southern ash. Pendulous samaras in dense clusters.' },
  },
  {
    commonName: { es: 'Fresno de flor', en: 'Manna ash' },
    scientificName: 'Fraxinus ornus',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Único fresno con flores blancas vistosas y perfumadas en panículas (de ahí "fresno florido"); corteza lisa grisácea. De su savia se obtiene el maná.', en: 'The only ash with showy, fragrant white flowers in panicles (hence "flowering ash"); smooth greyish bark. Manna is obtained from its sap.' },
  },
  {
    commonName: { es: 'Carpe', en: 'Hornbeam' },
    scientificName: 'Carpinus betulus',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Tronco liso gris con relieve fibroso y acanalado, como musculado. Hoja doblemente aserrada con nervios muy marcados; frutos con bráctea trilobulada alada.', en: 'Smooth grey trunk with a fibrous, fluted relief, as if muscled. Doubly toothed leaf with strongly marked veins; fruits with a winged, three-lobed bract.' },
  },
  {
    commonName: { es: 'Avellano', en: 'Hazel' },
    scientificName: 'Corylus avellana',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['rounded', 'heart'],
    },
    distinctiveNotes: { es: 'Arbusto o arbolillo de varios troncos; hoja casi circular, blanda y de ápice brusco. Amentos colgantes amarillos a fin de invierno; el fruto es la avellana.', en: 'Multi-stemmed shrub or small tree; almost circular, soft leaf with an abruptly pointed tip. Hanging yellow catkins in late winter; the fruit is the hazelnut.' },
  },
  {
    commonName: { es: 'Taray', en: 'French tamarisk' },
    scientificName: 'Tamarix gallica',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Hojas diminutas en escama sobre ramillas finísimas que dan aspecto plumoso. Espigas de florecillas rosadas; tolera sales y vive en ramblas, saladares y costas.', en: 'Tiny scale-like leaves on very fine twigs that give a feathery appearance. Spikes of small pink flowers; salt-tolerant, living in stream beds, salt marshes and coasts.' },
  },
  {
    commonName: { es: 'Taray africano', en: 'African tamarisk' },
    scientificName: 'Tamarix africana',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth', 'fissured'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Taray de mayor porte y corteza pardo-purpúrea casi negra; racimos florales más gruesos y tempranos que el taray común. Frecuente en cauces del sur y litoral.', en: 'Larger tamarisk with brownish-purple, almost black bark; flower clusters thicker and earlier than those of the common tamarisk. Frequent in southern watercourses and along the coast.' },
  },
  {
    commonName: { es: 'Adelfa', en: 'Oleander' },
    scientificName: 'Nerium oleander',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Arbusto perenne de hojas coriáceas en verticilos de tres; flores rosadas o blancas en verano. Coloniza ramblas secas del sur; toda la planta es muy tóxica.', en: 'Evergreen shrub with leathery leaves in whorls of three; pink or white flowers in summer. Colonizes dry stream beds of the south; the whole plant is highly toxic.' },
  },
  {
    commonName: { es: 'Saúco', en: 'Elder' },
    scientificName: 'Sambucus nigra',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['berry'], bark: ['corky'],
      habit: ['rounded'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja compuesta opuesta de olor desagradable al estrujarla; ramas con médula blanca y esponjosa. Grandes corimbos de flores blancas y bayas negras colgantes.', en: 'Opposite compound leaf with an unpleasant smell when crushed; branches with white, spongy pith. Large corymbs of white flowers and hanging black berries.' },
  },
  {
    commonName: { es: 'Nogal', en: 'Common walnut' },
    scientificName: 'Juglans regia',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja compuesta aromática con folíolos enteros que huelen fuerte al frotarlos. Fruto carnoso verde que encierra la nuez; copa amplia y corteza gris agrietada.', en: 'Aromatic compound leaf with entire leaflets that smell strongly when rubbed. Fleshy green fruit enclosing the walnut; broad crown and cracked grey bark.' },
  },
  {
    commonName: { es: 'Arce campestre', en: 'Field maple' },
    scientificName: 'Acer campestre',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured', 'corky'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Arce pequeño de hoja palmeada con lóbulos redondeados y romos; ramillas a veces con crestas corchosas. Sámaras dobles con las alas casi en línea recta (horizontales).', en: 'Small maple with a palmate leaf with rounded, blunt lobes; twigs sometimes with corky ridges. Paired samaras with the wings almost in a straight line (horizontal).' },
  },
];
