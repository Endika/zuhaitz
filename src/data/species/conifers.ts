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
    commonName: { es: 'Pino silvestre', en: 'Scots pine' },
    scientificName: 'Pinus sylvestris',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Corteza superior anaranjada que se desprende en placas finas; acículas cortas en pares, algo azuladas y retorcidas. Pino de montaña del centro y norte.', en: 'Orange upper bark that peels off in thin plates; short needles in pairs, somewhat bluish and twisted. A mountain pine of central and northern Spain.' },
  },
  {
    commonName: { es: 'Pino laricio / Pino negral', en: 'Black pine' },
    scientificName: 'Pinus nigra',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Corteza gris-plateada agrietada en placas; acículas largas, rígidas y oscuras en pares. Copa cónica más densa y regular que la del pino silvestre.', en: 'Silvery-grey bark cracked into plates; long, stiff, dark needles in pairs. Conical crown denser and more regular than that of the Scots pine.' },
  },
  {
    commonName: { es: 'Pino carrasco', en: 'Aleppo pine' },
    scientificName: 'Pinus halepensis',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['rounded', 'spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Pino mediterráneo de zonas secas y litorales; acículas finas, flexibles y de color verde claro. Piñas pedunculadas que persisten años cerradas en el árbol.', en: 'A Mediterranean pine of dry and coastal areas; thin, flexible, light-green needles. Stalked cones that stay closed on the tree for years.' },
  },
  {
    commonName: { es: 'Pino rodeno / Pino marítimo', en: 'Maritime pine' },
    scientificName: 'Pinus pinaster',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Acículas muy largas, gruesas y rígidas en pares, las más grandes de los pinos ibéricos. Corteza pardo-rojiza muy gruesa y agrietada; piñas grandes y puntiagudas. Se resinaba.', en: 'Very long, thick, stiff needles in pairs, the largest of the Iberian pines. Very thick, cracked reddish-brown bark; large, pointed cones. Formerly tapped for resin.' },
  },
  {
    commonName: { es: 'Pino negro', en: 'Mountain pine' },
    scientificName: 'Pinus uncinata',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Pino de alta montaña pirenaica, forma el límite del bosque. Acículas cortas y oscuras en pares; piñas asimétricas con escamas terminadas en gancho (de ahí "uncinata").', en: 'A high-mountain pine of the Pyrenees, forming the tree line. Short, dark needles in pairs; asymmetric cones with hook-tipped scales (hence "uncinata").' },
  },
  {
    commonName: { es: 'Pino canario', en: 'Canary Island pine' },
    scientificName: 'Pinus canariensis',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Endémico de Canarias; acículas muy largas y flexibles, colgantes, agrupadas de tres en tres. Rebrota tras el fuego desde el tronco; piñas grandes alargadas.', en: 'Endemic to the Canary Islands; very long, flexible, drooping needles in bundles of three. Resprouts from the trunk after fire; large, elongated cones.' },
  },
  {
    commonName: { es: 'Pino insigne / Pino de Monterrey', en: 'Monterey pine' },
    scientificName: 'Pinus radiata',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Pino de crecimiento muy rápido plantado masivamente en el norte (País Vasco, Cantabria). Acículas de tres en tres, verde intenso; piñas asimétricas asentadas en grupos sobre las ramas.', en: 'A very fast-growing pine planted extensively in the north (Basque Country, Cantabria). Needles in threes, deep green; asymmetric cones clustered tight against the branches.' },
  },
  {
    commonName: { es: 'Pino cembro / Pino suizo', en: 'Swiss stone pine' },
    scientificName: 'Pinus cembra',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['columnar', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Pino alpino de copa densa y estrecha; acículas de cinco en cinco, finas y suaves. Piñas que no se abren y semillas grandes comestibles dispersadas por aves.', en: 'An Alpine pine with a dense, narrow crown; needles in fives, fine and soft. Cones that do not open, with large edible seeds dispersed by birds.' },
  },
  {
    commonName: { es: 'Abeto blanco', en: 'Silver fir' },
    scientificName: 'Abies alba',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['smooth'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Acículas planas y blandas insertadas individualmente, con dos bandas blancas por el envés y ápice no punzante. Conos erguidos que se desarman en el árbol; corteza lisa grisácea.', en: 'Flat, soft needles inserted singly, with two white bands underneath and a non-prickly tip. Upright cones that break apart on the tree; smooth greyish bark.' },
  },
  {
    commonName: { es: 'Pinsapo', en: 'Spanish fir' },
    scientificName: 'Abies pinsapo',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['smooth', 'fissured'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Abeto endémico de las sierras de Cádiz y Málaga. Acículas cortas, rígidas y punzantes dispuestas radialmente alrededor de la ramita (aspecto de cepillo). Conos erguidos.', en: 'A fir endemic to the mountains of Cádiz and Málaga. Short, stiff, prickly needles arranged radially around the twig (a bottle-brush look). Upright cones.' },
  },
  {
    commonName: { es: 'Picea / Abeto rojo', en: 'Norway spruce' },
    scientificName: 'Picea abies',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'El típico árbol de Navidad; acículas cortas, rígidas y de sección cuadrada que pinchan. Conos colgantes que caen enteros al suelo; ramas algo péndulas. Corteza pardo-rojiza escamosa.', en: 'The classic Christmas tree; short, stiff, square-sectioned needles that prick. Hanging cones that fall to the ground whole; somewhat drooping branches. Scaly reddish-brown bark.' },
  },
  {
    commonName: { es: 'Cedro del Atlas', en: 'Atlas cedar' },
    scientificName: 'Cedrus atlantica',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Cedro de acículas cortas y azuladas en rosetas sobre braquiblastos. Ramas ascendentes y copa que con la edad se aplana en pisos. Conos erguidos en forma de barril que se desarman.', en: 'A cedar with short, bluish needles in rosettes on short shoots. Ascending branches and a crown that flattens into tiers with age. Upright barrel-shaped cones that break apart.' },
  },
  {
    commonName: { es: 'Cedro del Himalaya', en: 'Deodar cedar' },
    scientificName: 'Cedrus deodara',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'weeping'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Cedro ornamental de guía y extremos de las ramas claramente colgantes (porte llorón). Acículas más largas que las del cedro del Atlas, verde claro, en rosetas. Conos erguidos.', en: 'An ornamental cedar with a clearly drooping leader and branch tips (weeping habit). Needles longer than those of the Atlas cedar, light green, in rosettes. Upright cones.' },
  },
  {
    commonName: { es: 'Cedro del Líbano', en: 'Cedar of Lebanon' },
    scientificName: 'Cedrus libani',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Cedro de copa muy aplanada y horizontal en grandes plataformas, con ramas masivas. Acículas verde oscuro en rosetas; conos erguidos en forma de tonel. Símbolo del Líbano.', en: 'A cedar with a very flat, horizontal crown in large platforms, with massive branches. Dark-green needles in rosettes; upright barrel-shaped cones. The emblem of Lebanon.' },
  },
  {
    commonName: { es: 'Ciprés de Arizona', en: 'Arizona cypress' },
    scientificName: 'Cupressus arizonica',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Ciprés de follaje gris-azulado y aspecto glauco, muy usado en setos. Corteza rojiza que se exfolia en tiras; gálbulas leñosas espinosas. Copa cónica, no estrecha como el ciprés común.', en: 'A cypress with grey-blue, glaucous foliage, widely used in hedges. Reddish bark that peels off in strips; spiny woody cones. Conical crown, not narrow like the common cypress.' },
  },
  {
    commonName: { es: 'Ciprés de Lambert / de Monterrey', en: 'Monterey cypress' },
    scientificName: 'Cupressus macrocarpa',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['spreading', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Ciprés de follaje verde brillante con olor a limón al frotar; copa que se ensancha y aplana con la edad. Gálbulas grandes (macrocarpa). Frecuente en jardines del litoral.', en: 'A cypress with bright-green foliage that smells of lemon when rubbed; crown that broadens and flattens with age. Large cones (macrocarpa). Common in coastal gardens.' },
  },
  {
    commonName: { es: 'Ciprés de Leyland', en: 'Leyland cypress' },
    scientificName: 'x Cupressocyparis leylandii',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['columnar', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Híbrido estéril de crecimiento explosivo, el seto de privacidad más plantado. Follaje verde oscuro en ramillas algo aplanadas; apenas produce conos por ser híbrido.', en: 'A sterile hybrid of explosive growth, the most widely planted privacy hedge. Dark-green foliage on somewhat flattened sprays; it barely produces cones because it is a hybrid.' },
  },
  {
    commonName: { es: 'Enebro común', en: 'Common juniper' },
    scientificName: 'Juniperus communis',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['conical', 'spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Arbusto o arbolillo con hojas en acícula pinchuda dispuestas de tres en tres, con una sola banda blanca por el haz. Gálbulas carnosas azul-negruzcas (la "baya" de la ginebra).', en: 'A shrub or small tree with prickly needle-like leaves in threes, each with a single white band on the upper surface. Fleshy blue-black cones (the "berry" used in gin).' },
  },
  {
    commonName: { es: 'Enebro de la miera', en: 'Prickly juniper' },
    scientificName: 'Juniperus oxycedrus',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['conical', 'rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Como el enebro común pero con acículas con dos bandas blancas por el haz y gálbulas carnosas pardo-rojizas al madurar. De su madera se extrae el aceite de miera.', en: 'Like the common juniper but with needles bearing two white bands on the upper surface and fleshy reddish-brown cones when ripe. Its wood yields cade oil (aceite de miera).' },
  },
  {
    commonName: { es: 'Sabina albar', en: 'Spanish juniper' },
    scientificName: 'Juniperus thurifera',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['fissured'],
      habit: ['rounded', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Sabina arbórea de los páramos fríos del interior; forma bosques abiertos muy dispersos. Hojas adultas en escama, follaje glauco aromático; gálbulas carnosas azul-violáceas. Corteza pardusca fibrosa.', en: 'A tree juniper of the cold inland plateaus; it forms very open, scattered woodlands. Adult leaves scale-like, foliage glaucous and aromatic; fleshy blue-violet cones. Brownish, fibrous bark.' },
  },
  {
    commonName: { es: 'Sabina negral', en: 'Phoenicean juniper' },
    scientificName: 'Juniperus phoenicea',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Sabina de litorales, roquedos y dunas; ramillas cilíndricas con hojas en escama apretadas verde oscuro. Gálbulas carnosas rojizas, más grandes que las del enebro. Corteza grisácea que se exfolia.', en: 'A juniper of coasts, rocky outcrops and dunes; cylindrical twigs with tightly packed dark-green scale leaves. Fleshy reddish cones, larger than those of the common juniper. Greyish bark that peels.' },
  },
  {
    commonName: { es: 'Sabina rastrera', en: 'Savin juniper' },
    scientificName: 'Juniperus sabina',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Arbusto rastrero de alta montaña, tendido sobre el suelo y rara vez erguido. Follaje en escama de olor fuerte y desagradable al frotar; planta tóxica. Gálbulas péndulas azul-negruzcas.', en: 'A creeping high-mountain shrub, lying flat on the ground and rarely upright. Scale-like foliage with a strong, unpleasant smell when rubbed; a toxic plant. Pendulous blue-black cones.' },
  },
  {
    commonName: { es: 'Tejo', en: 'European yew' },
    scientificName: 'Taxus baccata',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['berry'], bark: ['flaking'],
      habit: ['rounded', 'spreading'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Acículas planas, blandas y verde muy oscuro dispuestas en dos filas. No tiene piñas: el arilo rojo carnoso y abierto en un extremo es el único rasgo carnoso. Toda la planta es muy venenosa salvo el arilo.', en: 'Flat, soft, very dark-green needles arranged in two rows. It has no cones: the fleshy red aril, open at one end, is the only fleshy feature. The whole plant is highly poisonous except the aril.' },
  },
  {
    commonName: { es: 'Tuya occidental', en: 'Eastern white cedar' },
    scientificName: 'Thuja occidentalis',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'flaking'],
      habit: ['conical', 'columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Conífera ornamental de setos; ramillas muy aplanadas en abanico con hojas en escama que huelen a manzana al frotar. Pequeños conos leñosos alargados, no esféricos. Follaje que pardea en invierno.', en: 'An ornamental hedge conifer; very flat, fan-like sprays with scale leaves that smell of apple when rubbed. Small, elongated woody cones, not spherical. Foliage that turns brownish in winter.' },
  },
  {
    commonName: { es: 'Tuya oriental', en: 'Chinese arborvitae' },
    scientificName: 'Platycladus orientalis',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['rounded', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Arbustiva de jardín con ramillas en escama dispuestas en planos verticales (como abanicos puestos de canto). Conos carnosos azulados de joven con escamas ganchudas que luego se secan y abren.', en: 'A shrubby garden plant with scale-leaved sprays held in vertical planes (like fans set on edge). Cones fleshy and bluish when young, with hooked scales, later drying and opening.' },
  },
  {
    commonName: { es: 'Araucaria / Pehuén', en: 'Monkey puzzle' },
    scientificName: 'Araucaria araucana',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Inconfundible: ramas en verticilos con hojas anchas, triangulares, coriáceas y muy punzantes que recubren toda la rama ("rompecabezas del mono"). Conos grandes esféricos con semillas comestibles (piñones).', en: 'Unmistakable: whorled branches with broad, triangular, leathery and very sharp leaves covering the entire branch (the "monkey puzzle"). Large spherical cones with edible seeds (pine nuts).' },
  },
  {
    commonName: { es: 'Pino de Norfolk', en: 'Norfolk Island pine' },
    scientificName: 'Araucaria heterophylla',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking', 'smooth'],
      habit: ['conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Araucaria ornamental de litorales cálidos, con porte muy regular y simétrico en pisos horizontales perfectos. Hojas blandas, cortas, curvadas y aciculares (no punzantes como la araucaria chilena).', en: 'An ornamental araucaria of warm coasts, with a very regular, symmetrical habit in perfect horizontal tiers. Soft, short, curved, needle-like leaves (not sharp like the monkey puzzle).' },
  },
  {
    commonName: { es: 'Secuoya roja / Secuoya costera', en: 'Coast redwood' },
    scientificName: 'Sequoia sempervirens',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['alternate'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'corky'],
      habit: ['columnar', 'conical'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Árbol gigantesco de tronco recto y corteza pardo-rojiza muy gruesa, fibrosa y esponjosa (resistente al fuego). Hojas planas dispuestas en dos filas, como las del tejo; conos pequeños.', en: 'A gigantic tree with a straight trunk and very thick, fibrous, spongy reddish-brown bark (fire-resistant). Flat leaves arranged in two rows, like those of the yew; small cones.' },
  },
  {
    commonName: { es: 'Secuoya gigante', en: 'Giant sequoia' },
    scientificName: 'Sequoiadendron giganteum',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured', 'corky'],
      habit: ['conical', 'columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'El árbol más voluminoso del mundo; tronco enorme con corteza rojiza muy gruesa, blanda y esponjosa al puño. Hojas pequeñas en escama abrazadas a la ramita (no planas como la secuoya costera). Conos ovoides.', en: 'The most voluminous tree in the world; an enormous trunk with very thick reddish bark, soft and spongy to the fist. Small scale leaves clasping the twig (not flat like the coast redwood). Egg-shaped cones.' },
  },
  {
    commonName: { es: 'Ginkgo / Árbol de los cuarenta escudos', en: 'Ginkgo / Maidenhair tree' },
    scientificName: 'Ginkgo biloba',
    traits: {
      leaf: ['simple'], margin: ['wavy', 'entire'], arrangement: ['alternate'],
      persistence: ['deciduous'], fruit: ['drupe'], bark: ['fissured'],
      habit: ['conical', 'columnar'], leafShape: ['rounded'],
    },
    distinctiveNotes: { es: 'Gimnosperma única: hoja en forma de abanico, a menudo dividida en dos lóbulos, con nervios paralelos que se bifurcan. Caduca, vira a amarillo dorado intenso en otoño. Los pies femeninos dan falsos frutos carnosos malolientes.', en: 'A unique gymnosperm: fan-shaped leaf, often divided into two lobes, with parallel forking veins. Deciduous, turning a deep golden yellow in autumn. Female trees bear foul-smelling fleshy false fruits.' },
  },
  {
    commonName: { es: 'Criptomeria / Cedro japonés', en: 'Japanese cedar' },
    scientificName: 'Cryptomeria japonica',
    traits: {
      leaf: ['needle'], margin: ['n-a'], arrangement: ['whorled'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['flaking'],
      habit: ['conical', 'columnar'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Conífera ornamental de hojas aciculares cortas, curvadas y dispuestas en espiral alrededor de la ramita (aspecto blando y plumoso). Corteza rojiza fibrosa que se desprende en tiras; conos esféricos espinosos.', en: 'An ornamental conifer with short, curved, needle-like leaves spiralling around the twig (a soft, feathery look). Reddish fibrous bark that peels off in strips; spherical spiny cones.' },
  },
  {
    commonName: { es: 'Araar / Ciprés de Cartagena', en: 'Arar tree / Sandarac' },
    scientificName: 'Tetraclinis articulata',
    traits: {
      leaf: ['scale'], margin: ['n-a'], arrangement: ['opposite'],
      persistence: ['evergreen'], fruit: ['cone'], bark: ['fissured'],
      habit: ['conical', 'rounded'], leafShape: ['n-a'],
    },
    distinctiveNotes: { es: 'Única conífera africana presente en Europa de forma natural, solo en la sierra de Cartagena. Ramillas articuladas de sección cuadrada con hojas en escama; gálbulas leñosas de cuatro escamas que se abren en cruz.', en: 'The only African conifer found naturally in Europe, only in the Cartagena range. Jointed twigs of square section with scale leaves; woody four-scaled cones that open crosswise.' },
  },
];
