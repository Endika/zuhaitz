import type { Species } from '../../engine/types';

// Conifers & gymnosperms found in Spain (native + planted/ornamental). Each species
// fills all 8 trait keys. Needle/scale-leaved species set broadleaf-only traits
// (margin, leafShape) to 'n-a'. Ginkgo is treated as a broadleaf gymnosperm.
// Fingerprints are differentiated via bark + habit + fruit + persistence so no two
// species collapse to an identical 8-trait answer-set.
// Seed duplicates AVOIDED: Pinus pinea (pino piñonero) and Cupressus sempervirens
// (ciprés común) are already in seed.ts and are NOT repeated here.
export const coniferSpecies: Species[] = [
  {
    commonName: 'Pino silvestre',
    scientificName: 'Pinus sylvestris',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Corteza superior anaranjada que se desprende en placas finas; acículas cortas en pares, algo azuladas y retorcidas. Pino de montaña del centro y norte.',
  },
  {
    commonName: 'Pino laricio / Pino negral',
    scientificName: 'Pinus nigra',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Corteza gris-plateada agrietada en placas; acículas largas, rígidas y oscuras en pares. Copa cónica más densa y regular que la del pino silvestre.',
  },
  {
    commonName: 'Pino carrasco',
    scientificName: 'Pinus halepensis',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Pino mediterráneo de zonas secas y litorales; acículas finas, flexibles y de color verde claro. Piñas pedunculadas que persisten años cerradas en el árbol.',
  },
  {
    commonName: 'Pino rodeno / Pino marítimo',
    scientificName: 'Pinus pinaster',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Acículas muy largas, gruesas y rígidas en pares, las más grandes de los pinos ibéricos. Corteza pardo-rojiza muy gruesa y agrietada; piñas grandes y puntiagudas. Se resinaba.',
  },
  {
    commonName: 'Pino negro',
    scientificName: 'Pinus uncinata',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Pino de alta montaña pirenaica, forma el límite del bosque. Acículas cortas y oscuras en pares; piñas asimétricas con escamas terminadas en gancho (de ahí "uncinata").',
  },
  {
    commonName: 'Pino canario',
    scientificName: 'Pinus canariensis',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Endémico de Canarias; acículas muy largas y flexibles, colgantes, agrupadas de tres en tres. Rebrota tras el fuego desde el tronco; piñas grandes alargadas.',
  },
  {
    commonName: 'Pino insigne / Pino de Monterrey',
    scientificName: 'Pinus radiata',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Pino de crecimiento muy rápido plantado masivamente en el norte (País Vasco, Cantabria). Acículas de tres en tres, verde intenso; piñas asimétricas asentadas en grupos sobre las ramas.',
  },
  {
    commonName: 'Pino cembro / Pino suizo',
    scientificName: 'Pinus cembra',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['columnar', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Pino alpino de copa densa y estrecha; acículas de cinco en cinco, finas y suaves. Piñas que no se abren y semillas grandes comestibles dispersadas por aves.',
  },
  {
    commonName: 'Abeto blanco',
    scientificName: 'Abies alba',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['smooth'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Acículas planas y blandas insertadas individualmente, con dos bandas blancas por el envés y ápice no punzante. Conos erguidos que se desarman en el árbol; corteza lisa grisácea.',
  },
  {
    commonName: 'Pinsapo',
    scientificName: 'Abies pinsapo',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['smooth', 'fissured'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Abeto endémico de las sierras de Cádiz y Málaga. Acículas cortas, rígidas y punzantes dispuestas radialmente alrededor de la ramita (aspecto de cepillo). Conos erguidos.',
  },
  {
    commonName: 'Picea / Abeto rojo',
    scientificName: 'Picea abies',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'El típico árbol de Navidad; acículas cortas, rígidas y de sección cuadrada que pinchan. Conos colgantes que caen enteros al suelo; ramas algo péndulas. Corteza pardo-rojiza escamosa.',
  },
  {
    commonName: 'Cedro del Atlas',
    scientificName: 'Cedrus atlantica',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Cedro de acículas cortas y azuladas en rosetas sobre braquiblastos. Ramas ascendentes y copa que con la edad se aplana en pisos. Conos erguidos en forma de barril que se desarman.',
  },
  {
    commonName: 'Cedro del Himalaya',
    scientificName: 'Cedrus deodara',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'weeping'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Cedro ornamental de guía y extremos de las ramas claramente colgantes (porte llorón). Acículas más largas que las del cedro del Atlas, verde claro, en rosetas. Conos erguidos.',
  },
  {
    commonName: 'Cedro del Líbano',
    scientificName: 'Cedrus libani',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Cedro de copa muy aplanada y horizontal en grandes plataformas, con ramas masivas. Acículas verde oscuro en rosetas; conos erguidos en forma de tonel. Símbolo del Líbano.',
  },
  {
    commonName: 'Ciprés de Arizona',
    scientificName: 'Cupressus arizonica',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Ciprés de follaje gris-azulado y aspecto glauco, muy usado en setos. Corteza rojiza que se exfolia en tiras; gálbulas leñosas espinosas. Copa cónica, no estrecha como el ciprés común.',
  },
  {
    commonName: 'Ciprés de Lambert / de Monterrey',
    scientificName: 'Cupressus macrocarpa',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['spreading', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Ciprés de follaje verde brillante con olor a limón al frotar; copa que se ensancha y aplana con la edad. Gálbulas grandes (macrocarpa). Frecuente en jardines del litoral.',
  },
  {
    commonName: 'Ciprés de Leyland',
    scientificName: 'x Cupressocyparis leylandii',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['columnar', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Híbrido estéril de crecimiento explosivo, el seto de privacidad más plantado. Follaje verde oscuro en ramillas algo aplanadas; apenas produce conos por ser híbrido.',
  },
  {
    commonName: 'Enebro común',
    scientificName: 'Juniperus communis',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['conical', 'spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Arbusto o arbolillo con hojas en acícula pinchuda dispuestas de tres en tres, con una sola banda blanca por el haz. Gálbulas carnosas azul-negruzcas (la "baya" de la ginebra).',
  },
  {
    commonName: 'Enebro de la miera',
    scientificName: 'Juniperus oxycedrus',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['conical', 'rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Como el enebro común pero con acículas con dos bandas blancas por el haz y gálbulas carnosas pardo-rojizas al madurar. De su madera se extrae el aceite de miera.',
  },
  {
    commonName: 'Sabina albar',
    scientificName: 'Juniperus thurifera',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['fissured'],
      habit: ['rounded', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Sabina arbórea de los páramos fríos del interior; forma bosques abiertos muy dispersos. Hojas adultas en escama, follaje glauco aromático; gálbulas carnosas azul-violáceas. Corteza pardusca fibrosa.',
  },
  {
    commonName: 'Sabina negral',
    scientificName: 'Juniperus phoenicea',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Sabina de litorales, roquedos y dunas; ramillas cilíndricas con hojas en escama apretadas verde oscuro. Gálbulas carnosas rojizas, más grandes que las del enebro. Corteza grisácea que se exfolia.',
  },
  {
    commonName: 'Sabina rastrera',
    scientificName: 'Juniperus sabina',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Arbusto rastrero de alta montaña, tendido sobre el suelo y rara vez erguido. Follaje en escama de olor fuerte y desagradable al frotar; planta tóxica. Gálbulas péndulas azul-negruzcas.',
  },
  {
    commonName: 'Tejo',
    scientificName: 'Taxus baccata',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['rounded', 'spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Acículas planas, blandas y verde muy oscuro dispuestas en dos filas. No tiene piñas: el arilo rojo carnoso y abierto en un extremo es el único rasgo carnoso. Toda la planta es muy venenosa salvo el arilo.',
  },
  {
    commonName: 'Tuya occidental',
    scientificName: 'Thuja occidentalis',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['conical', 'columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Conífera ornamental de setos; ramillas muy aplanadas en abanico con hojas en escama que huelen a manzana al frotar. Pequeños conos leñosos alargados, no esféricos. Follaje que pardea en invierno.',
  },
  {
    commonName: 'Tuya oriental',
    scientificName: 'Platycladus orientalis',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['rounded', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Arbustiva de jardín con ramillas en escama dispuestas en planos verticales (como abanicos puestos de canto). Conos carnosos azulados de joven con escamas ganchudas que luego se secan y abren.',
  },
  {
    commonName: 'Araucaria / Pehuén',
    scientificName: 'Araucaria araucana',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Inconfundible: ramas en verticilos con hojas anchas, triangulares, coriáceas y muy punzantes que recubren toda la rama ("rompecabezas del mono"). Conos grandes esféricos con semillas comestibles (piñones).',
  },
  {
    commonName: 'Pino de Norfolk',
    scientificName: 'Araucaria heterophylla',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking', 'smooth'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Araucaria ornamental de litorales cálidos, con porte muy regular y simétrico en pisos horizontales perfectos. Hojas blandas, cortas, curvadas y aciculares (no punzantes como la araucaria chilena).',
  },
  {
    commonName: 'Secuoya roja / Secuoya costera',
    scientificName: 'Sequoia sempervirens',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'corky'],
      habit: ['columnar', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Árbol gigantesco de tronco recto y corteza pardo-rojiza muy gruesa, fibrosa y esponjosa (resistente al fuego). Hojas planas dispuestas en dos filas, como las del tejo; conos pequeños.',
  },
  {
    commonName: 'Secuoya gigante',
    scientificName: 'Sequoiadendron giganteum',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'corky'],
      habit: ['conical', 'columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'El árbol más voluminoso del mundo; tronco enorme con corteza rojiza muy gruesa, blanda y esponjosa al puño. Hojas pequeñas en escama abrazadas a la ramita (no planas como la secuoya costera). Conos ovoides.',
  },
  {
    commonName: 'Ginkgo / Árbol de los cuarenta escudos',
    scientificName: 'Ginkgo biloba',
    traits: {
      leaf: ['simple'], margin: ['wavy', 'entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['conical', 'columnar'], leafShape: ['rounded'],
    },
    distinctiveNotes: 'Gimnosperma única: hoja en forma de abanico, a menudo dividida en dos lóbulos, con nervios paralelos que se bifurcan. Caduca, vira a amarillo dorado intenso en otoño. Los pies femeninos dan falsos frutos carnosos malolientes.',
  },
  {
    commonName: 'Criptomeria / Cedro japonés',
    scientificName: 'Cryptomeria japonica',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['conical', 'columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Conífera ornamental de hojas aciculares cortas, curvadas y dispuestas en espiral alrededor de la ramita (aspecto blando y plumoso). Corteza rojiza fibrosa que se desprende en tiras; conos esféricos espinosos.',
  },
  {
    commonName: 'Araar / Ciprés de Cartagena',
    scientificName: 'Tetraclinis articulata',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: 'Única conífera africana presente en Europa de forma natural, solo en la sierra de Cartagena. Ramillas articuladas de sección cuadrada con hojas en escama; gálbulas leñosas de cuatro escamas que se abren en cruz.',
  },
];
