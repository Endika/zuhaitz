import type { Species } from '../../engine/types';

// Urban / street / park ornamentals planted in Spanish cities. Every species fills
// all 8 trait keys. Palms set margin to 'n-a' and habit to 'palm'. Conifer/Ginkgo are
// handled elsewhere. Seed duplicates avoided: Platanus, Jacaranda, Magnolia,
// Tilia platyphyllos, Robinia, Citrus, Salix, Populus alba.
export const urbanSpecies: Species[] = [
  {
    commonName: { es: 'Castaño de Indias', en: 'Horse chestnut' },
    scientificName: 'Aesculus hippocastanum',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Hoja palmaticompuesta con 5–7 folíolos grandes; flores blancas en panículas erectas tipo vela. Cápsulas espinosas con castañas no comestibles.', en: 'Palmately compound leaf with 5–7 large leaflets; white flowers in erect candle-like panicles. Spiny capsules holding inedible conkers.' },
  },
  {
    commonName: { es: 'Tilo de hoja pequeña', en: 'Small-leaved lime' },
    scientificName: 'Tilia cordata',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['nut'], bark: ['smooth', 'fissured'],
      habit: ['rounded'], leafShape: ['heart'],
    },
    distinctiveNotes: { es: 'Hoja acorazonada más pequeña que la del tilo común, con mechones de pelos rojizos en el envés. Flores melíferas colgando de una bráctea alargada.', en: 'Heart-shaped leaf smaller than the common lime, with tufts of rusty hairs in the vein axils beneath. Honey-scented flowers hanging from an elongated bract.' },
  },
  {
    commonName: { es: 'Catalpa', en: 'Southern catalpa' },
    scientificName: 'Catalpa bignonioides',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['whorled'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['heart'],
    },
    distinctiveNotes: { es: 'Hojas enormes acorazonadas en verticilos de tres; flores blancas moteadas. Frutos en largas vainas colgantes parecidas a judías (no son legumbres verdaderas).', en: 'Huge heart-shaped leaves in whorls of three; spotted white flowers. Fruit in long hanging bean-like pods (not true legumes).' },
  },
  {
    commonName: { es: 'Liquidámbar', en: 'Sweetgum' },
    scientificName: 'Liquidambar styraciflua',
    traits: {
      leaf: ['simple'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['corky'],
      habit: ['conical'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Hoja palmeada como una estrella de 5 puntas con espectacular color rojo-púrpura en otoño. Frutos en bolas espinosas colgantes; ramillas a menudo con crestas corchosas.', en: 'Palmate, five-pointed star-shaped leaf with spectacular red-purple autumn colour. Fruit in hanging spiky balls; twigs often bearing corky ridges.' },
  },
  {
    commonName: { es: 'Tulipero de Virginia', en: 'Tulip tree' },
    scientificName: 'Liriodendron tulipifera',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['conical', 'columnar'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Hoja inconfundible con el ápice recortado, como cortada en plano. Flores verde-anaranjadas en forma de tulipán; frutos en conos secos de sámaras.', en: 'Unmistakable leaf with a notched, flat-cut tip. Greenish-orange tulip-shaped flowers; fruit in dry cone-like clusters of samaras.' },
  },
  {
    commonName: { es: 'Árbol de Júpiter', en: 'Crape myrtle' },
    scientificName: 'Lagerstroemia indica',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite', 'alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth', 'flaking'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Corteza lisa que se exfolia dejando el tronco moteado y satinado. Floración estival muy prolongada en panículas rosas, rojas o malvas con pétalos arrugados.', en: 'Smooth bark that flakes off, leaving a mottled, satiny trunk. Very long summer flowering in pink, red or mauve panicles with crinkled petals.' },
  },
  {
    commonName: { es: 'Sófora', en: 'Japanese pagoda tree' },
    scientificName: 'Styphnolobium japonicum',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja compuesta parecida a la robinia pero sin espinas y con ramillas verdes. Flores cremosas en grandes panículas a final de verano; vainas arrosariadas entre las semillas.', en: 'Compound leaf resembling black locust but thornless and with green twigs. Creamy flowers in large panicles in late summer; pods constricted like a string of beads between the seeds.' },
  },
  {
    commonName: { es: 'Jabonero de China', en: 'Golden rain tree' },
    scientificName: 'Koelreuteria paniculata',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Floración amarilla en grandes panículas a comienzos de verano. Frutos muy llamativos en cápsulas infladas como farolillos de papel que pasan de verde a pardo.', en: 'Yellow flowering in large panicles in early summer. Very showy fruit in inflated capsules like paper lanterns that turn from green to brown.' },
  },
  {
    commonName: { es: 'Braquiquito', en: 'Kurrajong (bottle tree)' },
    scientificName: 'Brachychiton populneus',
    traits: {
      leaf: ['simple'], margin: ['entire', 'lobed'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['conical', 'rounded'], leafShape: ['ovate', 'palmate'],
    },
    distinctiveNotes: { es: 'Hoja brillante variable, unas enteras y otras lobuladas, que tiembla como la del chopo. Tronco algo abombado; frutos en cápsulas leñosas en forma de barca con pelos urticantes dentro.', en: 'Glossy, variable leaves, some entire and some lobed, trembling like a poplar. Somewhat swollen trunk; fruit in woody boat-shaped capsules lined with irritant hairs inside.' },
  },
  {
    commonName: { es: 'Roble sedoso', en: 'Silky oak' },
    scientificName: 'Grevillea robusta',
    traits: {
      leaf: ['compound'], margin: ['lobed'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['fissured'],
      habit: ['conical', 'columnar'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja muy dividida tipo helecho, verde oscura por arriba y plateada y sedosa por debajo. Flores anaranjadas en racimos curvados tipo cepillo.', en: 'Deeply divided fern-like leaf, dark green above and silvery and silky beneath. Orange flowers in curved one-sided brush-like clusters.' },
  },
  {
    commonName: { es: 'Melia / Cinamomo', en: 'Chinaberry' },
    scientificName: 'Melia azedarach',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate', 'lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja doblemente compuesta y grande; flores lilas perfumadas. Drupas amarillas del tamaño de un guisante que persisten todo el invierno (tóxicas).', en: 'Large, twice-compound leaf; fragrant lilac flowers. Pea-sized yellow drupes that persist all winter (toxic).' },
  },
  {
    commonName: { es: 'Paulonia', en: 'Empress tree' },
    scientificName: 'Paulownia tomentosa',
    traits: {
      leaf: ['simple'], margin: ['entire', 'lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['capsule'], bark: ['smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['heart'],
    },
    distinctiveNotes: { es: 'Hojas enormes, acorazonadas y aterciopeladas, opuestas. Flores violetas en forma de campana antes que las hojas; cápsulas leñosas ovoides agrupadas.', en: 'Huge, heart-shaped, velvety leaves, oppositely arranged. Violet bell-shaped flowers appearing before the leaves; clustered ovoid woody capsules.' },
  },
  {
    commonName: { es: 'Ailanto / Árbol del cielo', en: 'Tree of heaven' },
    scientificName: 'Ailanthus altissima',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja muy larga pinnada con dientes glandulares en la base de los folíolos y fuerte olor desagradable al estrujarla. Invasor; sámaras retorcidas en grandes racimos rojizos.', en: 'Very long pinnate leaf with glandular teeth at the base of the leaflets and a strong, unpleasant smell when crushed. Invasive; twisted samaras in large reddish clusters.' },
  },
  {
    commonName: { es: 'Arce negundo', en: 'Box elder' },
    scientificName: 'Acer negundo',
    traits: {
      leaf: ['compound'], margin: ['serrate', 'lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Único arce de hoja compuesta (3–7 folíolos), por lo que recuerda a un fresno. Ramillas verde glauco; sámaras en pares formando un ángulo cerrado.', en: 'The only maple with a compound leaf (3–7 leaflets), so it resembles an ash. Glaucous-green twigs; samaras in pairs forming a narrow angle.' },
  },
  {
    commonName: { es: 'Arce blanco / Sicómoro', en: 'Sycamore maple' },
    scientificName: 'Acer pseudoplatanus',
    traits: {
      leaf: ['simple'], margin: ['serrate', 'lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Hoja palmeada con 5 lóbulos de borde irregularmente dentado y envés algo glauco. Sámaras en par formando un ángulo recto; corteza que se desprende en placas con la edad.', en: 'Palmate leaf with 5 irregularly toothed lobes and a somewhat glaucous underside. Paired samaras forming a right angle; bark that flakes off in plates with age.' },
  },
  {
    commonName: { es: 'Arce real', en: 'Norway maple' },
    scientificName: 'Acer platanoides',
    traits: {
      leaf: ['simple'], margin: ['lobed'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Hoja palmeada con lóbulos acabados en puntas finas y borde casi liso; al cortar el pecíolo brota látex blanco. Sámaras muy abiertas, casi en línea recta.', en: 'Palmate leaf with lobes ending in slender points and an almost smooth margin; cutting the petiole releases white milky sap. Widely spread samaras, almost in a straight line.' },
  },
  {
    commonName: { es: 'Arce plateado', en: 'Silver maple' },
    scientificName: 'Acer saccharinum',
    traits: {
      leaf: ['simple'], margin: ['lobed', 'serrate'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['flaking'],
      habit: ['rounded', 'spreading'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Hoja palmeada profundamente recortada con el envés plateado que reluce con el viento. Sámaras de las más grandes entre los arces; corteza que se exfolia en tiras.', en: 'Deeply cut palmate leaf with a silvery underside that shimmers in the wind. Among the largest samaras of any maple; bark that flakes off in strips.' },
  },
  {
    commonName: { es: 'Arce de Montpellier', en: 'Montpellier maple' },
    scientificName: 'Acer monspessulanum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['deciduous'], fruit: ['samara'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['palmate'],
    },
    distinctiveNotes: { es: 'Arce pequeño y mediterráneo de hoja menuda con solo 3 lóbulos redondeados y borde liso, coriácea. Sámaras pequeñas casi paralelas; aguanta bien la sequía.', en: 'Small Mediterranean maple with a small, leathery leaf of only 3 rounded lobes and a smooth margin. Small, nearly parallel samaras; very drought-tolerant.' },
  },
  {
    commonName: { es: 'Árbol del amor', en: 'Judas tree' },
    scientificName: 'Cercis siliquastrum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth', 'fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['rounded', 'heart'],
    },
    distinctiveNotes: { es: 'Hoja redondeada acorazonada inconfundible. Flores rosa-malva que brotan directamente del tronco y las ramas (caulifloria) antes que las hojas; vainas planas colgantes.', en: 'Unmistakable rounded, heart-shaped leaf. Pink-mauve flowers that sprout directly from the trunk and branches (cauliflory) before the leaves; flat hanging pods.' },
  },
  {
    commonName: { es: 'Acacia de Constantinopla', en: 'Persian silk tree' },
    scientificName: 'Albizia julibrissin',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth'],
      habit: ['spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hoja doblemente compuesta muy fina que se pliega de noche. Copa muy aparasolada; flores como plumeros o borlas rosadas en verano; vainas planas papiráceas.', en: 'Very fine, twice-compound leaf that folds up at night. Strongly umbrella-shaped crown; pink powder-puff or tassel-like flowers in summer; flat papery pods.' },
  },
  {
    commonName: { es: 'Aligustre del Japón', en: 'Glossy privet' },
    scientificName: 'Ligustrum lucidum',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['smooth'],
      habit: ['rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hoja perenne brillante y coriácea, opuesta. Grandes panículas de florecillas blancas en verano, seguidas de abundantes drupas azul-negruzcas que tiñen el suelo.', en: 'Glossy, leathery evergreen leaf, oppositely arranged. Large panicles of tiny white flowers in summer, followed by abundant blue-black drupes that stain the ground.' },
  },
  {
    commonName: { es: 'Eucalipto blanco', en: 'Blue gum' },
    scientificName: 'Eucalyptus globulus',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate', 'opposite'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['flaking'],
      habit: ['columnar'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hojas juveniles redondeadas y glaucas, opuestas y abrazadoras; las adultas largas, falcadas y colgantes, muy aromáticas. Corteza que se desprende en tiras dejando el tronco liso.', en: 'Juvenile leaves rounded and glaucous, opposite and clasping the stem; adult leaves long, sickle-shaped and pendulous, strongly aromatic. Bark that peels off in strips, leaving the trunk smooth.' },
  },
  {
    commonName: { es: 'Eucalipto rojo', en: 'River red gum' },
    scientificName: 'Eucalyptus camaldulensis',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['capsule'], bark: ['flaking', 'smooth'],
      habit: ['rounded', 'spreading'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Hojas adultas estrechas y colgantes verde grisáceo; copa amplia. Corteza moteada que se exfolia en placas dejando tonos blancos, grises y rojizos; cápsulas pequeñas con tapa cónica.', en: 'Narrow, pendulous greyish-green adult leaves; broad crown. Mottled bark that flakes off in patches, leaving white, grey and reddish tones; small capsules with a conical cap.' },
  },
  {
    commonName: { es: 'Higuera de Moreton Bay', en: 'Moreton Bay fig' },
    scientificName: 'Ficus macrophylla',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['fig'], bark: ['smooth'],
      habit: ['spreading'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Árbol monumental de copa enorme con raíces tabulares (contrafuertes) en la base del tronco. Hojas grandes, gruesas y brillantes con envés ferrugíneo; pequeños higos no comestibles.', en: 'Monumental tree with an enormous crown and buttress roots at the base of the trunk. Large, thick, glossy leaves with a rusty underside; small inedible figs.' },
  },
  {
    commonName: { es: 'Ficus de caucho', en: 'Rubber plant' },
    scientificName: 'Ficus elastica',
    traits: {
      leaf: ['simple'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['fig'], bark: ['smooth'],
      habit: ['spreading', 'rounded'], leafShape: ['ovate'],
    },
    distinctiveNotes: { es: 'Hojas grandes, ovales, muy gruesas y lustrosas, con la yema terminal envuelta en una estípula rojiza. Exuda látex blanco; emite raíces aéreas en clima cálido.', en: 'Large, oval, very thick and glossy leaves, with the terminal bud wrapped in a reddish stipule. Exudes white latex; produces aerial roots in warm climates.' },
  },
  {
    commonName: { es: 'Falsa pimienta / Pimentero', en: 'Peruvian pepper tree' },
    scientificName: 'Schinus molle',
    traits: {
      leaf: ['compound'], margin: ['serrate'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['weeping', 'rounded'], leafShape: ['lanceolate'],
    },
    distinctiveNotes: { es: 'Ramas finas y colgantes con hoja compuesta aromática tipo helecho. Racimos de pequeñas drupas rosadas (pimienta rosa) muy llamativas en otoño-invierno.', en: 'Slender, weeping branches with an aromatic, fern-like compound leaf. Clusters of small pink drupes (pink peppercorns) that are very showy in autumn and winter.' },
  },
  {
    commonName: { es: 'Parkinsonia', en: 'Jerusalem thorn' },
    scientificName: 'Parkinsonia aculeata',
    traits: {
      leaf: ['compound'], margin: ['entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['legume'], bark: ['smooth', 'thorny'],
      habit: ['spreading', 'weeping'], leafShape: ['linear'],
    },
    distinctiveNotes: { es: 'Ramas y tronco verdes que fotosintetizan, con espinas; folíolos diminutos sobre raquis largos y colgantes parecidos a cintas. Flores amarillas y vainas estranguladas entre las semillas.', en: 'Green photosynthetic branches and trunk, with thorns; tiny leaflets on long, hanging ribbon-like rachides. Yellow flowers and pods constricted between the seeds.' },
  },
  {
    commonName: { es: 'Palmera canaria', en: 'Canary Island date palm' },
    scientificName: 'Phoenix canariensis',
    traits: {
      leaf: ['compound'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['palm'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Palmera robusta de tronco grueso con cicatrices romboidales y enorme corona de hojas pinnadas (plumosas), las inferiores transformadas en espinas. Dátiles pequeños no comestibles.', en: 'Robust palm with a thick trunk marked by diamond-shaped leaf scars and a huge crown of pinnate (feather) leaves, the lowermost modified into spines. Small inedible dates.' },
  },
  {
    commonName: { es: 'Palmera datilera', en: 'Date palm' },
    scientificName: 'Phoenix dactylifera',
    traits: {
      leaf: ['compound'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured', 'flaking'],
      habit: ['palm'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Tronco más esbelto que la canaria y a menudo con hijuelos en la base; corona menos densa, de hojas glaucas pinnadas. Produce los dátiles comestibles.', en: 'Slimmer trunk than the Canary Island palm and often with offshoots at the base; less dense crown of glaucous pinnate leaves. Produces the edible dates.' },
  },
  {
    commonName: { es: 'Washingtonia', en: 'Mexican fan palm' },
    scientificName: 'Washingtonia robusta',
    traits: {
      leaf: ['simple'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['palm'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Palmera muy alta y delgada con hojas en abanico (palmeadas) y pecíolos de borde espinoso. Conserva una falda de hojas secas colgantes; pequeños frutos negruzcos.', en: 'Very tall, slender palm with fan-shaped (palmate) leaves and spiny-edged petioles. Retains a skirt of hanging dead leaves; small blackish fruit.' },
  },
  {
    commonName: { es: 'Palmito', en: 'European fan palm' },
    scientificName: 'Chamaerops humilis',
    traits: {
      leaf: ['simple'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['drupe'], bark: ['fissured', 'flaking'],
      habit: ['palm'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Única palmera autóctona europea; pequeña y a menudo multicaule en mata. Hojas en abanico rígidas con pecíolos muy espinosos; frutos pardos no comestibles.', en: 'The only palm native to Europe; small and often multi-stemmed in a clump. Stiff fan-shaped leaves with very spiny petioles; brown inedible fruit.' },
  },
];
