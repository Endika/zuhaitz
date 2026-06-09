import type { Species } from '../../engine/types';

// Urban / street / park ornamentals planted in Spanish cities. Every species fills
// all 8 trait keys. Palms set margin to 'n-a' and habit to 'palm'. Conifer/Ginkgo are
// handled elsewhere. Seed duplicates avoided: Platanus, Jacaranda, Magnolia,
// Tilia platyphyllos, Robinia, Citrus, Salix, Populus alba.
export const urbanSpecies: Species[] = [
  {
    commonName: 'Castaño de Indias',
    scientificName: 'Aesculus hippocastanum',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Hoja palmaticompuesta con 5–7 folíolos grandes; flores blancas en panículas erectas tipo vela. Cápsulas espinosas con castañas no comestibles.',
  },
  {
    commonName: 'Tilo de hoja pequeña',
    scientificName: 'Tilia cordata',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['smooth', 'fissured'],
      habit: ['rounded'], leafShape: ['heart'],
    },
    distinctiveNotes: 'Hoja acorazonada más pequeña que la del tilo común, con mechones de pelos rojizos en el envés. Flores melíferas colgando de una bráctea alargada.',
  },
  {
    commonName: 'Catalpa',
    scientificName: 'Catalpa bignonioides',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['whorled'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['heart'],
    },
    distinctiveNotes: 'Hojas enormes acorazonadas en verticilos de tres; flores blancas moteadas. Frutos en largas vainas colgantes parecidas a judías (no son legumbres verdaderas).',
  },
  {
    commonName: 'Liquidámbar',
    scientificName: 'Liquidambar styraciflua',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['corky'],
      habit: ['conical'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Hoja palmeada como una estrella de 5 puntas con espectacular color rojo-púrpura en otoño. Frutos en bolas espinosas colgantes; ramillas a menudo con crestas corchosas.',
  },
  {
    commonName: 'Tulipero de Virginia',
    scientificName: 'Liriodendron tulipifera',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['conical', 'columnar'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Hoja inconfundible con el ápice recortado, como cortada en plano. Flores verde-anaranjadas en forma de tulipán; frutos en conos secos de sámaras.',
  },
  {
    commonName: 'Árbol de Júpiter',
    scientificName: 'Lagerstroemia indica',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite', 'alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth', 'flaking'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Corteza lisa que se exfolia dejando el tronco moteado y satinado. Floración estival muy prolongada en panículas rosas, rojas o malvas con pétalos arrugados.',
  },
  {
    commonName: 'Sófora',
    scientificName: 'Styphnolobium japonicum',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja compuesta parecida a la robinia pero sin espinas y con ramillas verdes. Flores cremosas en grandes panículas a final de verano; vainas arrosariadas entre las semillas.',
  },
  {
    commonName: 'Jabonero de China',
    scientificName: 'Koelreuteria paniculata',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Floración amarilla en grandes panículas a comienzos de verano. Frutos muy llamativos en cápsulas infladas como farolillos de papel que pasan de verde a pardo.',
  },
  {
    commonName: 'Braquiquito',
    scientificName: 'Brachychiton populneus',
    traits: {
      leaf: ['simple'], margin: ['entire', 'lobed'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['conical', 'rounded'], leafShape: ['ovate', 'palmate'],
    },
    distinctiveNotes: 'Hoja brillante variable, unas enteras y otras lobuladas, que tiembla como la del chopo. Tronco algo abombado; frutos en cápsulas leñosas en forma de barca con pelos urticantes dentro.',
  },
  {
    commonName: 'Roble sedoso',
    scientificName: 'Grevillea robusta',
    traits: {
      leaf: ['compound'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['conical', 'columnar'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja muy dividida tipo helecho, verde oscura por arriba y plateada y sedosa por debajo. Flores anaranjadas en racimos curvados tipo cepillo.',
  },
  {
    commonName: 'Melia / Cinamomo',
    scientificName: 'Melia azedarach',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: 'Hoja doblemente compuesta y grande; flores lilas perfumadas. Drupas amarillas del tamaño de un guisante que persisten todo el invierno (tóxicas).',
  },
  {
    commonName: 'Paulonia',
    scientificName: 'Paulownia tomentosa',
    traits: {
      leaf: ['simple'], margin: ['entire', 'lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['heart'],
    },
    distinctiveNotes: 'Hojas enormes, acorazonadas y aterciopeladas, opuestas. Flores violetas en forma de campana antes que las hojas; cápsulas leñosas ovoides agrupadas.',
  },
  {
    commonName: 'Ailanto / Árbol del cielo',
    scientificName: 'Ailanthus altissima',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja muy larga pinnada con dientes glandulares en la base de los folíolos y fuerte olor desagradable al estrujarla. Invasor; sámaras retorcidas en grandes racimos rojizos.',
  },
  {
    commonName: 'Arce negundo',
    scientificName: 'Acer negundo',
    traits: {
      leaf: ['compound'], margin: ['serrate', 'lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Único arce de hoja compuesta (3–7 folíolos), por lo que recuerda a un fresno. Ramillas verde glauco; sámaras en pares formando un ángulo cerrado.',
  },
  {
    commonName: 'Arce blanco / Sicómoro',
    scientificName: 'Acer pseudoplatanus',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Hoja palmeada con 5 lóbulos de borde irregularmente dentado y envés algo glauco. Sámaras en par formando un ángulo recto; corteza que se desprende en placas con la edad.',
  },
  {
    commonName: 'Arce real',
    scientificName: 'Acer platanoides',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Hoja palmeada con lóbulos acabados en puntas finas y borde casi liso; al cortar el pecíolo brota látex blanco. Sámaras muy abiertas, casi en línea recta.',
  },
  {
    commonName: 'Arce plateado',
    scientificName: 'Acer saccharinum',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['flaking'],
      habit: ['rounded', 'spreading'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Hoja palmeada profundamente recortada con el envés plateado que reluce con el viento. Sámaras de las más grandes entre los arces; corteza que se exfolia en tiras.',
  },
  {
    commonName: 'Arce de Montpellier',
    scientificName: 'Acer monspessulanum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Arce pequeño y mediterráneo de hoja menuda con solo 3 lóbulos redondeados y borde liso, coriácea. Sámaras pequeñas casi paralelas; aguanta bien la sequía.',
  },
  {
    commonName: 'Árbol del amor',
    scientificName: 'Cercis siliquastrum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['rounded', 'heart'],
    },
    distinctiveNotes: 'Hoja redondeada acorazonada inconfundible. Flores rosa-malva que brotan directamente del tronco y las ramas (caulifloria) antes que las hojas; vainas planas colgantes.',
  },
  {
    commonName: 'Acacia de Constantinopla',
    scientificName: 'Albizia julibrissin',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth'],
      habit: ['spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hoja doblemente compuesta muy fina que se pliega de noche. Copa muy aparasolada; flores como plumeros o borlas rosadas en verano; vainas planas papiráceas.',
  },
  {
    commonName: 'Aligustre del Japón',
    scientificName: 'Ligustrum lucidum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hoja perenne brillante y coriácea, opuesta. Grandes panículas de florecillas blancas en verano, seguidas de abundantes drupas azul-negruzcas que tiñen el suelo.',
  },
  {
    commonName: 'Eucalipto blanco',
    scientificName: 'Eucalyptus globulus',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate', 'opposite'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['flaking'],
      habit: ['columnar'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hojas juveniles redondeadas y glaucas, opuestas y abrazadoras; las adultas largas, falcadas y colgantes, muy aromáticas. Corteza que se desprende en tiras dejando el tronco liso.',
  },
  {
    commonName: 'Eucalipto rojo',
    scientificName: 'Eucalyptus camaldulensis',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['flaking', 'smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Hojas adultas estrechas y colgantes verde grisáceo; copa amplia. Corteza moteada que se exfolia en placas dejando tonos blancos, grises y rojizos; cápsulas pequeñas con tapa cónica.',
  },
  {
    commonName: 'Higuera de Moreton Bay',
    scientificName: 'Ficus macrophylla',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['fig'], bark: ['smooth'],
      habit: ['spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Árbol monumental de copa enorme con raíces tabulares (contrafuertes) en la base del tronco. Hojas grandes, gruesas y brillantes con envés ferrugíneo; pequeños higos no comestibles.',
  },
  {
    commonName: 'Ficus de caucho',
    scientificName: 'Ficus elastica',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['fig'], bark: ['smooth'],
      habit: ['spreading', 'rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: 'Hojas grandes, ovales, muy gruesas y lustrosas, con la yema terminal envuelta en una estípula rojiza. Exuda látex blanco; emite raíces aéreas en clima cálido.',
  },
  {
    commonName: 'Falsa pimienta / Pimentero',
    scientificName: 'Schinus molle',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['weeping', 'rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: 'Ramas finas y colgantes con hoja compuesta aromática tipo helecho. Racimos de pequeñas drupas rosadas (pimienta rosa) muy llamativas en otoño-invierno.',
  },
  {
    commonName: 'Parkinsonia',
    scientificName: 'Parkinsonia aculeata',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth', 'thorny'],
      habit: ['spreading', 'weeping'], leafShape: ['linear'],
    },
    distinctiveNotes: 'Ramas y tronco verdes que fotosintetizan, con espinas; folíolos diminutos sobre raquis largos y colgantes parecidos a cintas. Flores amarillas y vainas estranguladas entre las semillas.',
  },
  {
    commonName: 'Palmera canaria',
    scientificName: 'Phoenix canariensis',
    traits: {
      leaf: ['compound'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['palm'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Palmera robusta de tronco grueso con cicatrices romboidales y enorme corona de hojas pinnadas (plumosas), las inferiores transformadas en espinas. Dátiles pequeños no comestibles.',
  },
  {
    commonName: 'Palmera datilera',
    scientificName: 'Phoenix dactylifera',
    traits: {
      leaf: ['compound'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured', 'flaking'],
      habit: ['palm'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Tronco más esbelto que la canaria y a menudo con hijuelos en la base; corona menos densa, de hojas glaucas pinnadas. Produce los dátiles comestibles.',
  },
  {
    commonName: 'Washingtonia',
    scientificName: 'Washingtonia robusta',
    traits: {
      leaf: ['simple'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['palm'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Palmera muy alta y delgada con hojas en abanico (palmeadas) y pecíolos de borde espinoso. Conserva una falda de hojas secas colgantes; pequeños frutos negruzcos.',
  },
  {
    commonName: 'Palmito',
    scientificName: 'Chamaerops humilis',
    traits: {
      leaf: ['simple'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured', 'flaking'],
      habit: ['palm'], leafShape: ['palmate'],
    },
    distinctiveNotes: 'Única palmera autóctona europea; pequeña y a menudo multicaule en mata. Hojas en abanico rígidas con pecíolos muy espinosos; frutos pardos no comestibles.',
  },
];
