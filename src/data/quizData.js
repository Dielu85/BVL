// Banco de preguntas y materias para Cuartel 12 - Bomberos Voluntarios de Lanús (BVL 12)
// Fuentes de referencia: Academia Nacional de Bomberos (ANB), Normas NFPA y Manuales de Operaciones

import { historiaOrganizacionCategory } from './categories/historiaOrganizacion.js';
import { ordenInternoCategory } from './categories/ordenInterno.js';
import { comunicacionesCategory } from './categories/comunicaciones.js';
import { incendioEstructuralCategory } from './categories/incendioEstructural.js';

export const INITIAL_CATEGORIES = [
  {
    id: "materiales",
    name: "Materiales",
    shortDesc: "Mangas, acoples Storz y Whitworth, lanzas, columna hidráulica, hidrantes, escaleras y herramientas de zapa.",
    icon: "Wrench",
    color: "orange",
    badgeBg: "bg-orange-500/10 border-orange-500/30 text-orange-400",
    hoverBg: "hover:border-orange-500/50 hover:bg-orange-950/20",
    bannerGradient: "from-orange-600/30 to-amber-600/10",
    difficulties: ["básico", "intermedio", "avanzado"],
    questions: [
      // BÁSICO
      {
        id: "mat-b-1",
        difficulty: "básico",
        question: "En la confección de una manga de incendio, ¿cómo se denominan los hilos que corren a lo largo del tejido tubular y los que se encuentran en forma de espiral?",
        options: [
          "Urdimbre los longitudinales y Trama los espiralados",
          "Trama los longitudinales y Urdimbre los espiralados",
          "Hilada y Costura perimetral",
          "Revestimiento primario y trenza exterior"
        ],
        correctAnswer: 0,
        explanation: "Según la Lección N°4 de Materiales Básicos del C.B.I., las mangas están confeccionadas por hilos que corren a lo largo llamados 'urdimbre' y los que se encuentran en forma de espiral denominados 'trama', recubiertos por fibra acorde al fabricante.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-b-2",
        difficulty: "básico",
        question: "Según los criterios del C.B.I., ¿cuál es el diámetro límite que diferencia las líneas de ATAQUE de las líneas de ALIMENTACIÓN?",
        options: [
          "Ataque hasta 38 mm; Alimentación a partir de 114 mm",
          "Ataque como máximo hasta 63,5 mm; Alimentación como mínimo de 63,5 mm",
          "Ataque exclusivamente en 25 mm; Alimentación en 51 mm",
          "Ambas líneas deben tener exactamente el mismo diámetro de 50,8 mm"
        ],
        correctAnswer: 1,
        explanation: "Las líneas de ATAQUE se definen con diámetros de como máximo hasta 63,5 mm (2 ½\"). Las líneas de ALIMENTACIÓN se consideran a partir de un diámetro como mínimo de 63,5 mm.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-b-3",
        difficulty: "básico",
        question: "¿Cuál de las siguientes acciones es una recomendación oficial para prevenir daños y alargar la vida útil de las mangas?",
        options: [
          "Secarlas directamente al sol sobre el asfalto caliente",
          "Guardarlas enrolladas sin lavar luego de una intervención",
          "Evitar pisarlas con las botas y evitar que vehículos pasen por encima de ellas",
          "Arrastrar siempre las uniones metálicas para alinear la línea"
        ],
        correctAnswer: 2,
        explanation: "Para alargar su vida útil se debe: evitar pisarlas con las botas (para no cortar fibras con fragmentos adheridos), evitar el paso de vehículos por encima, no exponerlas directamente al fuego o químicos, lavarlas apropiadamente luego de cada uso y evitar golpear las uniones.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-b-4",
        difficulty: "básico",
        question: "¿Qué características de material y acople diferencian a las uniones WHITWORTH de las uniones STORZ?",
        options: [
          "Whitworth son de bronce a rosca (interna hembra en anilla giratoria y macho externa); Storz son de duraluminio con proyecciones frontales para acople rápido",
          "Whitworth son plásticas sin rosca; Storz son de fundición con rosca hembra doble",
          "Ambas son de acero inoxidable con trabas de bayoneta idénticas",
          "Storz solo se ajusta mediante rosca interna y Whitworth no posee partes metálicas"
        ],
        correctAnswer: 0,
        explanation: "Las uniones Whitworth son de bronce con dos tipos de rosca: interna (hembra) en anilla giratoria y externa (macho). Las uniones Storz son de duraluminio y poseen proyecciones en su cara frontal permitiendo un acople rápido.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-b-5",
        difficulty: "básico",
        question: "Respecto al uso de REDUCCIONES en una línea de incendio, ¿cuál es la norma operativa estricta que enseña el C.B.I.?",
        options: [
          "Pueden utilizarse indistintamente para aumentar o disminuir el diámetro",
          "Solo se permite utilizarlas en líneas de succión desde hidrantes",
          "Permiten conectar tres mangas simultáneamente sin perder caudal",
          "Permite reducir de una medida mayor hacia una menor; NUNCA a la inversa, no existe la amplificación"
        ],
        correctAnswer: 3,
        explanation: "El manual de Materiales Básicos de Lanús enfatiza: 'Nos permite la reducción de diámetro en una línea, de una medida mayor hacia una medida menor. NUNCA a la inversa, no existe la amplificación'.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-b-6",
        difficulty: "básico",
        question: "Dentro de los materiales de zapa para tareas manuales, de efracción y remoción, ¿cuál de los siguientes grupos pertenece a esta categoría?",
        options: [
          "Columna hidráulica, mangote y válvula de pie",
          "Pico, palas, hachas, masa de voleo, barreta, ariete, bichero y tijera corta pernos",
          "Lanzas troncocónicas, AWG y Nepiro",
          "Acoples Storz DIN y NEN exclusivamente"
        ],
        correctAnswer: 1,
        explanation: "Los materiales de zapa son los utilizados en tareas manuales, de efracción y remoción: Pico, Palas (corazón y ancha), Hachas (bombero y leñador), Masa de voleo, Halligan, Barretas, Ariete, Bichero, Tijera corta pernos y Ganchos de descombro.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },

      // INTERMEDIO
      {
        id: "mat-i-1",
        difficulty: "intermedio",
        question: "¿Qué diferencia funcional y de roscas existe entre un GEMELO DIVERGENTE y un GEMELO CONVERGENTE?",
        options: [
          "El divergente une dos líneas en una; el convergente divide una línea en dos",
          "El divergente divide una línea en dos (1 entrada hembra y 2 salidas macho); el convergente une dos líneas en una (2 entradas hembra y 1 salida macho)",
          "El divergente solo se utiliza en hidrantes y el convergente en lanzas de espuma",
          "Ambos poseen 3 salidas macho con acople Storz sin válvulas de corte"
        ],
        correctAnswer: 1,
        explanation: "Gemelo Divergente: permite dividir una línea en dos (forma de 'Y'), posee 1 rosca hembra como entrada y 2 roscas macho como salientes. Gemelo Convergente: permite unir dos líneas en una, con 2 roscas hembra de entrada y 1 macho de salida.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-i-2",
        difficulty: "intermedio",
        question: "¿Qué función cumple el COLECTOR y qué tipo de conexiones posee?",
        options: [
          "Permite unir cuatro líneas en una con roscas Whitworth de bronce",
          "Permite dividir una línea en 2 salidas con rosca hembra cónica",
          "Permite dividir una línea en 3, sus entradas y salidas son Storz y poseen válvulas de corte",
          "Permite aspirar agua de piletas sin necesidad de usar válvula de pie"
        ],
        correctAnswer: 2,
        explanation: "El Colector permite dividir una línea en 3. Su entrada y salidas son Storz y poseen válvulas de corte individuales.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-i-3",
        difficulty: "intermedio",
        question: "En una LANZA CON CAUDAL REGULABLE DE CORTE Y REGULADOR DE PATRÓN, ¿a qué mecanismo está sujeta la manivela de corte?",
        options: [
          "A una válvula esférica que permite el corte de agua",
          "A un pistón hidráulico accionado por la presión de línea",
          "A un platillo deflector de apertura rápida",
          "A un engranaje helicoidal que modifica las revoluciones de la tobera"
        ],
        correctAnswer: 0,
        explanation: "La boquilla combinada posee una manivela sujeta a una válvula esférica que permite el corte de agua, además de un regulador de caudal (válvula que modifica el diámetro interior) y un regulador de tipo de chorro en su punta.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-i-4",
        difficulty: "intermedio",
        question: "En la LANZA AWG, ¿qué patrón de chorro se produce según la posición de su palanca selectora?",
        options: [
          "Hacia adelante cerrada, al centro chorro pleno y hacia atrás niebla",
          "Hacia atrás cerrada, hacia adelante chorro hueco y al centro pleno",
          "En su posición central cerrada, hacia adelante chorro pleno y hacia atrás chorro hueco",
          "Solo permite chorro plano sin posibilidad de cierre desde la palanca"
        ],
        correctAnswer: 2,
        explanation: "La lanza AWG posee una palanca que: en su posición central se halla cerrada, hacia adelante provocará chorro pleno y hacia atrás chorro hueco.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-i-5",
        difficulty: "intermedio",
        question: "¿Qué características de accionamiento identifican a la LANZA NEPIRO?",
        options: [
          "Palanca esférica superior que conmuta únicamente entre cerrado y lluvia",
          "Forma de pistola con un gatillo que al accionarlo comienza desde la apertura con niebla hasta llegar a chorro pleno",
          "Boquilla fija de 63,5 mm sin regulación que solo entrega chorro compacto",
          "Lanza rotatoria accionada por turbina para líneas de espuma"
        ],
        correctAnswer: 1,
        explanation: "La lanza Nepiro tiene formato de pistola con un gatillo, el cual al accionarlo comenzará desde la apertura con un patrón de niebla hasta llegar a un chorro pleno.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-i-6",
        difficulty: "intermedio",
        question: "¿Qué tres partes operativas integran la herramienta multifunción HALLIGAN?",
        options: [
          "Pico, cuña y pata de cabra",
          "Masa de voleo, cortapernos y gancho",
          "Hacha de bombero, cincel y barreta",
          "Ariete de impacto, perno y lima"
        ],
        correctAnswer: 0,
        explanation: "El Halligan es una herramienta de bomberos multifunción que cuenta con pico, cuña y pata de cabra.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-i-7",
        difficulty: "intermedio",
        question: "¿Para qué sirve la cuña que se encuentra en un extremo de la LLAVE DE UNIÓN?",
        options: [
          "Para trabar los peldaños de la escalera extensible",
          "Para ajustar la manivela de corte de la lanza AWG",
          "Para cortar pernos de candados oxidados",
          "Para la apertura de hidrantes en la vía pública"
        ],
        correctAnswer: 3,
        explanation: "Las llaves de unión combinadas poseen en un extremo una cuña, generalmente utilizada para la apertura de hidrantes en la vía pública.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },

      // AVANZADO
      {
        id: "mat-a-1",
        difficulty: "avanzado",
        question: "¿Cuáles son las 5 partes que componen la COLUMNA HIDRÁULICA PORTÁTIL utilizada para hidrantes?",
        options: [
          "Cuerpo de aluminio, manómetro de glicerina, tobera, purga y acople rápido",
          "1. Llave interior, 2. Cabeza o Gemelo, 3. Caja superior, 4. Pierna o tubo, 5. Caja inferior",
          "Vástago central, plato deflector, tubo de succión, filtro de sedimentos y canasto",
          "Canilla expulsora, tornillo sinfín, brida Storz, pierna de fundición y válvula esférica"
        ],
        correctAnswer: 1,
        explanation: "La columna hidráulica portátil se divide en 5 partes: 1. Llave interior (manivela, varilla y platillo), 2. Cabeza o Gemelo, 3. Caja superior, 4. Pierna o tubo, y 5. Caja inferior.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-a-2",
        difficulty: "avanzado",
        question: "En la Columna Hidráulica Portátil, ¿qué material conforma la 'Pierna o tubo' y cómo se une a ambas cajas?",
        options: [
          "Conducto de cobre de 63,5 mm, unido a ambas cajas mediante soldaduras de estaño",
          "Conducto de PVC rígido de 51 mm, roscado a presión",
          "Tubo de acero al carbono de 114 mm, unido por bridas abulonadas",
          "Caño de bronce macizo de 38 mm con acoples rápidos Storz"
        ],
        correctAnswer: 0,
        explanation: "La Pierna o tubo es un conducto de cobre de 63,5 mm y se halla unido a ambas cajas (superior e inferior) mediante soldaduras de estaño.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-a-3",
        difficulty: "avanzado",
        question: "Respecto a los hidrantes de vía pública según su caudal, ¿en cuáles NO se utiliza la columna hidráulica portátil?",
        options: [
          "En los hidrantes de piso de 63,5 mm con tapa de 20 x 20 cm",
          "En los hidrantes con cierre 'a bolita' de gutapercha",
          "En las Tomas para autobombas de 114,3 mm cubiertas con tapa de 40 x 60 cm",
          "En los hidrantes que poseen llave esclusa exterior"
        ],
        correctAnswer: 2,
        explanation: "En las 'Tomas para autobombas' de 114,3 mm (tapa de 40 x 60 cm) NO se utiliza la columna hidráulica. Sí se utiliza en los hidrantes de piso de 63,5 mm (tapa de 20 x 20 cm).",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-a-4",
        difficulty: "avanzado",
        question: "¿Cómo opera el mecanismo de estanqueidad y apertura en un HIDRANTE SIN LLAVE O 'A BOLITA'?",
        options: [
          "Un disco de teflón se desplaza lateralmente mediante una palanca exterior",
          "Una bola de gutapercha sella el agua por su presión; al ser empujada al interior del caño por el platillo de la columna, permite la salida del agua",
          "Una válvula de retención se destraba tirando de una cadena hacia arriba",
          "La bola de goma se disuelve en contacto con el agua y se repone luego del servicio"
        ],
        correctAnswer: 1,
        explanation: "En el hidrante sin llave o 'a bolita', una bola de gutapercha sella el agua contra la brida empujada por la propia presión de red. Al descender el platillo de la llave interior de la columna hidráulica, empuja la bola al interior del caño liberando el caudal.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-a-5",
        difficulty: "avanzado",
        question: "¿Qué características poseen el CONDUCTO de succión y la VÁLVULA DE PIE que se conecta en su extremo?",
        options: [
          "El conducto es un tubo semirrígido de 3 metros con uniones; la válvula de pie oficia de colador de residuos y posee válvula de retención para evitar el retorno del agua",
          "El conducto mide 15 metros y es de lino puro; la válvula de pie es una reducción para mangas de 38 mm",
          "El conducto es rígido de 6 metros; la válvula de pie solo funciona como gemelo convergente",
          "El conducto es flexible plano de 10 metros; la válvula de pie regula la presión a 7 bar"
        ],
        correctAnswer: 0,
        explanation: "El conducto es un tubo semirrígido con uniones en sus extremos y un largo de 3 metros. La válvula de pie cumple la función de colador para evitar ingreso de residuos a la bomba y cuenta con válvula de retención para evitar el retorno del agua.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-a-6",
        difficulty: "avanzado",
        question: "¿Qué particularidades constructivas y operativas distinguen a las mangas de 'HYPALON' y a las 'DEVANADERAS'?",
        options: [
          "Hypalon son mangas de lino sin secado; devanaderas tienen diámetros superiores a 114 mm",
          "Hypalon no soportan temperatura; devanaderas trabajan a baja presión y alto caudal",
          "Ambas son mangas de fibra de vidrio para rescate en altura",
          "Hypalon poseen un baño externo que brinda resistencia a brasas y químicos; devanaderas son rígidas en carretel, de 25 a 32 mm y transportan bajo caudal a alta presión"
        ],
        correctAnswer: 3,
        explanation: "Dentro de las mangas de PVC, las de HYPALON poseen un baño externo resistente a brasas y químicos. Las DEVANADERAS son mangueras rígidas en carretel de bajo diámetro (25 a 32 mm) que transportan bajo caudal a alta presión.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      },
      {
        id: "mat-a-7",
        difficulty: "avanzado",
        question: "En las ESCALERAS de bomberos de aluminio o fibra de vidrio, ¿cuáles son los 2 tipos y qué partes forman la escalera extensible?",
        options: [
          "Tijera y Caracol; formadas por pasamanos, bisagra y ganchos de amarre",
          "Mecánica e Hidráulica; formadas por barquilla, cremallera y motor de giro",
          "Asalto y Extendibles; la extendible se compone de parte fija, parte móvil, polea con cuerda, traba de seguridad, peldaños, larguero y zapatas",
          "De techo y De pozo; formadas por eslingas, estacas y travesaños"
        ],
        correctAnswer: 2,
        explanation: "Existen 2 tipos de escaleras: Asalto y Extendibles. Las partes de una escalera extensible son: parte móvil, parte fija, polea con cuerda, traba de seguridad, peldaños, larguero y zapatas.",
        reference: "C.B.I. Lección N°4 - Materiales Básicos (BVL)"
      }
    ]
  },
  incendioEstructuralCategory,
  historiaOrganizacionCategory,
  ordenInternoCategory,

  {
    id: "hazmat",
    name: "Materiales Peligrosos (HazMat / PRIMAP)",
    shortDesc: "Guía GRE, placas ONU, diamante NFPA 704, zonas de aislamiento y descontaminación.",
    icon: "ShieldAlert",
    color: "amber",
    badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
    hoverBg: "hover:border-amber-500/50 hover:bg-amber-950/20",
    bannerGradient: "from-amber-600/30 to-yellow-600/10",
    difficulties: ["básico", "intermedio", "avanzado"],
    questions: [
      // BÁSICO
      {
        id: "hz-b-1",
        difficulty: "básico",
        question: "En el diamante de peligro NFPA 704, ¿qué riesgo representa el cuadrante de color AZUL?",
        options: [
          "Riesgo de Inflamabilidad",
          "Riesgo a la Salud",
          "Riesgo de Inestabilidad / Reactividad",
          "Riesgos Especiales (Reactivo con agua, oxidante, etc.)"
        ],
        correctAnswer: 1,
        explanation: "El código de colores NFPA 704 es: Azul = Salud, Rojo = Inflamabilidad, Amarillo = Reactividad / Inestabilidad, Blanco = Riesgo Especial.",
        reference: "Norma NFPA 704"
      },
      {
        id: "hz-b-2",
        difficulty: "básico",
        question: "¿Desde qué posición relativa al viento debe aproximarse la dotación de bomberos a un incidente con Materiales Peligrosos?",
        options: [
          "A favor del viento (viento de cola hacia el incidente) y desde terreno bajo",
          "A favor del viento (a favor de la dirección en que viaja la nube) siempre",
          "Viento en contra (a barlovento / viento a favor de la espalda del bombero) y desde terreno alto",
          "Es indiferente mientras se use el equipo de protección estructural"
        ],
        correctAnswer: 2,
        explanation: "Siempre se debe aproximar a favor del viento en la espalda (a barlovento o upwind), pendiente arriba (uphill) y aguas arriba (upstream), para evitar que vapores densos o derrames alcancen la autobomba.",
        reference: "Guía PRIMAP / GRE 2024"
      },
      {
        id: "hz-b-3",
        difficulty: "básico",
        question: "En la Guía de Respuesta a Emergencias (GRE / Libro Naranja), las páginas con borde de color AMARILLO ordenan los productos por:",
        options: [
          "Nombre alfabético de la sustancia",
          "Número de identificación de 4 dígitos de las Naciones Unidas (Número ONU / UN)",
          "Número de guía de emergencia recomendada",
          "Distancias de aislamiento inicial y acción protectora"
        ],
        correctAnswer: 1,
        explanation: "Páginas Amarillas: orden por Número ONU de 4 dígitos. Páginas Azules: orden alfabético por Nombre del Producto. Páginas Naranjas: Guías de respuesta. Páginas Verdes: Distancias de aislamiento.",
        reference: "Guía de Respuesta a Emergencias (GRE)"
      },

      // INTERMEDIO
      {
        id: "hz-i-1",
        difficulty: "intermedio",
        question: "Si al buscar una sustancia en las páginas amarillas o azules de la GRE el nombre aparece RESALTADO EN VERDE, significa que:",
        options: [
          "El producto es biodegradable y seguro para el medio ambiente",
          "Es un material con riesgo de Toxicidad por Inhalación (RTI/TIH) o que reacciona con agua generando gas tóxico, y debe consultarse la sección verde",
          "El fuego puede extinguirse únicamente con espumógeno de alta expansión",
          "Es un explosivo militar clase 1.1"
        ],
        correctAnswer: 1,
        explanation: "Los materiales resaltados en verde en la GRE son sustancias tóxicas por inhalación o reactivas al agua, lo que obliga a ir inmediatamente a la Tabla 1 (Páginas Verdes) para determinar las distancias de aislamiento inicial tanto de día como de noche.",
        reference: "Instrucciones de Uso de la Guía GRE"
      },
      {
        id: "hz-i-2",
        difficulty: "intermedio",
        question: "¿Cómo se denominan las 3 zonas operativas de control en un incidente HazMat desde el foco hacia el exterior?",
        options: [
          "Zona Roja, Zona Amarilla y Zona Verde",
          "Zona Caliente (de exclusión), Zona Tibia (de reducción de contaminación) y Zona Fría (de apoyo)",
          "Zona Primaria, Zona Secundaria y Zona Terciaria",
          "Perímetro Interior, Perímetro Intermedio y Perímetro Exterior"
        ],
        correctAnswer: 1,
        explanation: "La Zona Caliente es donde está el derrame/escape (máximo peligro). La Zona Tibia contiene el corredor de descontaminación (CRD). La Zona Fría es la base de operaciones, puesto de comando y área médica no contaminada.",
        reference: "NFPA 472 / 1072 Competencias HazMat"
      },

      // AVANZADO
      {
        id: "hz-a-1",
        difficulty: "avanzado",
        question: "En un panel de seguridad rectangular naranja europeo/Mercosur, la fila superior muestra 'X338' y la inferior '1050'. ¿Qué significa la letra 'X' delante del número de riesgo?",
        options: [
          "Que el material es un explosivo secundario",
          "Que está absolutamente prohibido el uso de agua como agente de extinción o control",
          "Que se trata de un residuo patogénico peligroso",
          "Que el producto está transportado a temperatura criogénica"
        ],
        correctAnswer: 1,
        explanation: "La letra 'X' precediendo al número de identificación de peligro (código Kemler) indica que la sustancia reacciona peligrosamente con el agua. El agua NO debe ser aplicada sobre el producto.",
        reference: "Acuerdo Mercosur sobre Transporte Terrestre de Mercancías Peligrosas"
      },
      {
        id: "hz-a-2",
        difficulty: "avanzado",
        question: "¿Cuál es la principal diferencia entre un traje de protección química Nivel A y un traje Nivel B?",
        options: [
          "El Nivel A no requiere el uso de equipo de respiración autónoma (ERA)",
          "El Nivel A es un traje encapsulado hermético a vapores y gases (vapor-protective) con el ERA adentro; el Nivel B protege contra salpicaduras de líquidos con ERA exterior o interior pero no es estanco a vapores",
          "El Nivel B resiste fuego directo mientras que el Nivel A es inflamable",
          "El Nivel A solo puede usarse en ambientes con más del 25% de oxígeno"
        ],
        correctAnswer: 1,
        explanation: "El Nivel A ofrece el máximo nivel de protección respiratoria, dérmica y ocular frente a vapores, gases y partículas mediante un traje encapsulado hermético (NFPA 1991). El Nivel B mantiene el máximo nivel respiratorio (con ERA) pero con menor hermetismo dérmico ante vapores (NFPA 1992).",
        reference: "Norma NFPA 1991 y 1992"
      }
    ]
  },

  {
    id: "socorrismo",
    name: "Socorrismo y Primeros Auxilios",
    shortDesc: "Evaluación primaria XABCDE, RCP de alta calidad, uso de DEA y control de hemorragias.",
    icon: "HeartPulse",
    color: "emerald",
    badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
    hoverBg: "hover:border-emerald-500/50 hover:bg-emerald-950/20",
    bannerGradient: "from-emerald-600/30 to-teal-600/10",
    difficulties: ["básico", "intermedio", "avanzado"],
    questions: [
      // BÁSICO
      {
        id: "sc-b-1",
        difficulty: "básico",
        question: "¿Cuál es la relación de compresiones y ventilaciones en RCP para un adulto según las guías internacionales vigentes (AHA / ERC)?",
        options: [
          "15 compresiones y 2 ventilaciones",
          "30 compresiones y 2 ventilaciones",
          "50 compresiones y 5 ventilaciones",
          "10 compresiones continuas con ventilación a demanda"
        ],
        correctAnswer: 1,
        explanation: "La relación estándar para adultos en paro cardiorrespiratorio con 1 o 2 reanimadores es de 30 compresiones torácicas seguidas de 2 insuflaciones, a una frecuencia de 100 a 120 por minuto.",
        reference: "Guías AHA para Soporte Vital Básico (BLS)"
      },
      {
        id: "sc-b-2",
        difficulty: "básico",
        question: "¿Qué profundidad deben alcanzar las compresiones torácicas en un adulto para considerarse de alta calidad?",
        options: [
          "Entre 2 y 3 centímetros",
          "Al menos 5 cm pero sin exceder los 6 cm",
          "Aproximadamente 8 a 10 cm con todo el peso corporal",
          "Solo 1 cm para evitar fracturas de costillas"
        ],
        correctAnswer: 1,
        explanation: "Las compresiones en adultos deben tener una profundidad de entre 5 y 6 cm (aproximadamente 2 pulgadas) permitiendo la reexpansión torácica completa tras cada compresión.",
        reference: "AHA BLS Guidelines"
      },
      {
        id: "sc-b-3",
        difficulty: "básico",
        question: "Al colocar los parches de un Desfibrilador Externo Automático (DEA) en un paciente adulto, la posición correcta es:",
        options: [
          "Ambos parches juntos sobre el centro del esternón",
          "Uno debajo de la clavícula derecha (infraclavicular derecho) y el otro en la zona anterolateral izquierda por debajo de la tetilla",
          "Uno en la espalda baja y otro sobre el ombligo",
          "Ambos parches en los hombros derecho e izquierdo"
        ],
        correctAnswer: 1,
        explanation: "La posición anterolateral estándar para el DEA en adultos coloca una almohadilla en la parte superior derecha del pecho debajo de la clavícula y la otra a la izquierda por debajo del pezón en la línea axilar anterior.",
        reference: "Algoritmo de Desfibrilación Externa Temprana"
      },

      // INTERMEDIO
      {
        id: "sc-i-1",
        difficulty: "intermedio",
        question: "En el protocolo de trauma XABCDE, ¿qué representa la letra 'X' inicial y por qué se atiende antes que la vía aérea (A)?",
        options: [
          "Representa Rayos X inmediatos en ambulancia",
          "Hemorragia Exanguinante masiva; una persona puede desangrarse en 1 a 3 minutos si no se controla de inmediato",
          "Extricación rápida de la víctima del vehículo",
          "Examen de reflejos pupilares"
        ],
        correctAnswer: 1,
        explanation: "La 'X' (eXsanguinating hemorrhage) prioriza el control inmediato de hemorragias catastróficas arteriales mediante torniquetes o empaquetamiento, ya que el choque hipovolémico letal ocurre en segundos antes de resolver la vía aérea.",
        reference: "PHTLS 9na/10ma Edición / Stop The Bleed"
      },
      {
        id: "sc-i-2",
        difficulty: "intermedio",
        question: "Ante una hemorragia severa pulsátil en un miembro superior donde la compresión directa falla, ¿cuál es la conducta adecuada con el torniquete comercial?",
        options: [
          "Colocarlo en el cuello para bloquear la arteria carótida",
          "Colocarlo 5 a 7 cm proximal a la herida (sin aplicarlo sobre una articulación), ajustarlo hasta que cese el sangrado y anotar la hora exacta de colocación",
          "Aflojar el torniquete cada 10 minutos para que el miembro reciba sangre",
          "Aplicarlo con poca fuerza para no generar dolor al paciente"
        ],
        correctAnswer: 1,
        explanation: "El torniquete debe ajustarse hasta que el sangrado arterial y el pulso distal desaparezcan por completo. NUNCA debe aflojarse periódicamente (eso reinicia la hemorragia y libera toxinas acumuladas). Se registra siempre la hora de aplicación.",
        reference: "Consenso TCCC y Cartilla de Trauma Bomberil"
      },

      // AVANZADO
      {
        id: "sc-a-1",
        difficulty: "avanzado",
        question: "¿Cuáles son los dos únicos ritmos cardíacos que el DEA reconoce como DESFIBRILABLES?",
        options: [
          "Asistolia y Disociación Electromecánica (DEM/AESP)",
          "Fibrilación Ventricular (FV) y Taquicardia Ventricular sin pulso (TVSP)",
          "Bradicardia sinusal y Bloqueo AV de tercer grado",
          "Fibrilación Auricular y Taquicardia Sinusal simple"
        ],
        correctAnswer: 1,
        explanation: "El DEA solo descarga ante Fibrilación Ventricular (FV) y Taquicardia Ventricular sin pulso (TVSP). En asistolia (línea plana) o actividad eléctrica sin pulso (AESP), la desfibrilación no tiene indicación y debe continuarse con RCP de calidad.",
        reference: "AHA Soporte Vital Cardiovascular Avanzado (ACLS)"
      },
      {
        id: "sc-a-2",
        difficulty: "avanzado",
        question: "En un paciente con quemaduras térmicas extensas, según la 'Regla de los Nueve' de Wallace en un adulto, si presenta quemado el tórax anterior completo y todo el miembro superior derecho, ¿qué porcentaje de superficie corporal quemada tiene?",
        options: [
          "9%",
          "18%",
          "27%",
          "36%"
        ],
        correctAnswer: 2,
        explanation: "En la Regla de los 9: Tórax y abdomen anterior = 18% (tórax 9% + abdomen 9%). Miembro superior completo = 9%. Total = 18% + 9% = 27% de Superficie Corporal Total (SCQ).",
        reference: "Manejo del Paciente Quemado en Trauma - Cartilla de Socorrismo"
      }
    ]
  },

  {
    id: "rescate-vehicular",
    name: "Rescate Vehicular y Extricación",
    shortDesc: "Seguridad vial, estabilización, corte de energía, airbags y herramientas hidráulicas.",
    icon: "Car",
    color: "blue",
    badgeBg: "bg-blue-500/10 border-blue-500/30 text-blue-400",
    hoverBg: "hover:border-blue-500/50 hover:bg-blue-950/20",
    bannerGradient: "from-blue-600/30 to-indigo-600/10",
    difficulties: ["básico", "intermedio", "avanzado"],
    questions: [
      // BÁSICO
      {
        id: "rv-b-1",
        difficulty: "básico",
        question: "¿Cómo debe posicionarse la unidad de bomberos (autobomba) al llegar a un accidente de tránsito en vía pública o avenida?",
        options: [
          "Apegada a la trompa del auto siniestrado para ahorrar distancia con las mangueras",
          "En ángulo de 45° bloqueando uno o dos carriles para actuar como barrera de protección física y desvío de tránsito",
          "Sobre la vereda opuesta con las balizas apagadas para no encandilar",
          "Detrás de los vehículos particulares que frenan a mirar el accidente"
        ],
        correctAnswer: 1,
        explanation: "La técnica de bloqueo angular (a 45°) con las ruedas giradas en dirección contraria a la zona de trabajo convierte la pesada autobomba en un escudo protector ante posibles choques por alcance de otros conductores.",
        reference: "Manual de Rescate Vehicular y Seguridad Vial - BVL"
      },
      {
        id: "rv-b-2",
        difficulty: "básico",
        question: "¿Cuál es la primera acción de control físico que se debe realizar sobre el vehículo antes de que los bomberos comiencen a trabajar sobre la chapa?",
        options: [
          "Cortar de inmediato los 4 neumáticos",
          "Estabilizar el vehículo mediante cuñas, calzos o puntales para eliminar cualquier movimiento",
          "Romper todos los cristales para ventilar el habitáculo",
          "Remolcarlo hacia la banquina con el malacate"
        ],
        correctAnswer: 1,
        explanation: "Un vehículo inestable es un riesgo mortal tanto para la víctima (movimientos bruscos empeoran lesiones espinales) como para el rescatista. La estabilización primaria en 4 o 5 puntos es el primer paso operativo.",
        reference: "Técnicas de Extricación y Estabilización Vehicular"
      },
      {
        id: "rv-b-3",
        difficulty: "básico",
        question: "Al desconectar la batería convencional de 12V de un vehículo involucrado en choque, ¿qué borne debe desconectarse primero?",
        options: [
          "El borne Positivo (+, rojo)",
          "El borne Negativo (-, masa o tierra)",
          "Ambos cables deben cortarse al mismo tiempo con la cizalla hidráulica",
          "No se debe desconectar la batería nunca para mantener las balizas encendidas"
        ],
        correctAnswer: 1,
        explanation: "Siempre se desconecta primero el borne negativo (-). Si la herramienta metálica toca la carrocería mientras se afloja el borne negativo, no se produce chispa ni cortocircuito porque la chapa ya tiene carga negativa de masa.",
        reference: "Protocolo de Neutralización Eléctrica Vehicular"
      },

      // INTERMEDIO
      {
        id: "rv-i-1",
        difficulty: "intermedio",
        question: "En la anatomía de un automóvil sedán de 4 puertas, ¿cuál es el pilar o parante 'B'?",
        options: [
          "El parante delantero que sostiene el parabrisas",
          "El parante central ubicado entre las puertas delantera y trasera que soporta la traba de la puerta o bisagra",
          "El parante trasero junto a la luneta",
          "La viga del paragolpes delantero"
        ],
        correctAnswer: 1,
        explanation: "La nomenclatura estructural vehicular designa: Pilar A = parabrisas delantero; Pilar B = parante central entre puertas; Pilar C = parante trasero (y Pilar D en vehículos familiares largos o SUVs).",
        reference: "Anatomía Vehicular y Puntos de Corte"
      },
      {
        id: "rv-i-2",
        difficulty: "intermedio",
        question: "Al intervenir en un automóvil con airbags que NO se han desplegado durante el impacto, la regla de seguridad de distancias 13-25-50 (o 5-10-20 pulgadas) aconseja mantenerse alejado de:",
        options: [
          "13 cm de las ruedas, 25 cm del capó, 50 cm del escape",
          "13 cm del airbag lateral/cortina, 25 cm del airbag del conductor en el volante, 50 cm del airbag frontal del acompañante",
          "13 metros del vehículo completo",
          "Solo aplica para vehículos a gas natural comprimido"
        ],
        correctAnswer: 1,
        explanation: "Esta regla previene lesiones graves si un inflador pirotécnico se activa tardíamente: mantener 13 cm de bolsas laterales, 25 cm del volante (conductor) y 50 cm del torpedo frontal del pasajero.",
        reference: "Guía de Seguridad ante Dispositivos Suplementarios de Retención (SRS)"
      },

      // AVANZADO
      {
        id: "rv-a-1",
        difficulty: "avanzado",
        question: "Al trabajar en vehículos eléctricos o híbridos modernos (EV / HEV), ¿de qué color distintivo está revestido el cableado de ALTA TENSIÓN que NUNCA debe cortarse ni perforarse?",
        options: [
          "Color Azul brillante",
          "Color Amarillo reflectivo",
          "Color Naranja brillante",
          "Color Verde esmeralda"
        ],
        correctAnswer: 2,
        explanation: "En la industria automotriz global (normas SAE/ISO), todo el cableado y componentes de alta tensión (de 300V a más de 800V de corriente continua) están codificados con forro de color NARANJA brillante.",
        reference: "Guías de Respuesta a Emergencias de Vehículos Eléctricos e Híbridos"
      },
      {
        id: "rv-a-2",
        difficulty: "avanzado",
        question: "¿Por qué en pilares fabricados con acero al boro o aceros de ultra alta resistencia (UHSS) las cizallas hidráulicas convencionales pueden fallar o quebrar sus cuchillas?",
        options: [
          "Porque el acero absorbe el líquido hidráulico del equipo",
          "Porque estos aceros superan los 1200 a 1500 MPa de resistencia a la tracción; si no se corta en la zona blanda o con cuchillas diseñadas específicamente, la fuerza de corte puede torcer los pernos o astillar el filo",
          "Porque el acero emite radiación electromagnética que bloquea los motores a explosión",
          "Porque el acero funde las mangueras hidráulicas por fricción térmica instantánea"
        ],
        correctAnswer: 1,
        explanation: "Los aceros conformados en caliente con boro empleados en pilares B de autos modernos tienen una dureza extrema. Los rescatistas deben conocer la ubicación precisa de refuerzos y optar por técnicas de alivio, corte en zonas óptimas o separación con expansor.",
        reference: "Nuevas Tecnologías Vehiculares y Herramientas Hidráulicas de Corte"
      }
    ]
  },

  {
    id: "era-epp",
    name: "EPP y Equipos de Respiración (ERA)",
    shortDesc: "Equipos autónomos, máscara, presión positiva, consumo de aire y regla de los tercios.",
    icon: "Wind",
    color: "cyan",
    badgeBg: "bg-cyan-500/10 border-cyan-500/30 text-cyan-400",
    hoverBg: "hover:border-cyan-500/50 hover:bg-cyan-950/20",
    bannerGradient: "from-cyan-600/30 to-blue-600/10",
    difficulties: ["básico", "intermedio"],
    questions: [
      // BÁSICO
      {
        id: "era-b-1",
        difficulty: "básico",
        question: "¿Qué tipo de aire contiene el tubo o cilindro de un Equipo de Respiración Autónoma (ERA) de bomberos?",
        options: [
          "Oxígeno puro al 100% bajo presión",
          "Aire atmosférico seco, filtrado y comprimido (aprox. 21% O2, 78% N2)",
          "Una mezcla de helio y nitrógeno sin oxígeno para no avivar el fuego",
          "Dióxido de carbono líquido"
        ],
        correctAnswer: 1,
        explanation: "Los tubos de ERA se cargan exclusivamente con aire respirable comprimido de grado médico/humano (Grado D). NUNCA con oxígeno puro al 100%, ya que el oxígeno puro a alta presión con grasas o en presencia de chispas provocaría una explosión catastrófica.",
        reference: "Norma NFPA 1981 / CGA G-7.1 Grado D"
      },
      {
        id: "era-b-2",
        difficulty: "básico",
        question: "¿Por qué las máscaras de ERA modernas funcionan con sistema de 'PRESIÓN POSITIVA' en su interior?",
        options: [
          "Para que el bombero no tenga que hacer ningún esfuerzo para exhalar",
          "Para que, ante cualquier rotura o leve desajuste del sello en la cara, el aire limpio escape hacia afuera impidiendo que los gases tóxicos penetren en la máscara",
          "Para inflar los pulmones del bombero automáticamente si se desmaya",
          "Para calentar el rostro en inviernos fríos"
        ],
        correctAnswer: 1,
        explanation: "La presión positiva mantiene dentro de la máscara una presión ligeramente superior a la presión atmosférica exterior. Si el sello se mueve, el aire limpio fuga hacia afuera, evitando la entrada de monóxido de carbono, cianuro u otros venenos.",
        reference: "Fundamentos de Protección Respiratoria Bomberil"
      },
      {
        id: "era-b-3",
        difficulty: "básico",
        question: "La 'monjita' o esclavina ignífuga de bombero cumple la función primordial de:",
        options: [
          "Secar la transpiración del cuello como toalla",
          "Proteger el cuello, orejas y laterales del rostro no cubiertos por la máscara facial y el casco del calor radiante y las brasas",
          "Aislar el ruido ensordecedor de las sirenas",
          "Identificar visualmente la jerarquía del bombero"
        ],
        correctAnswer: 1,
        explanation: "Confeccionada con fibras de aramida/Nomex, la monjita protege las zonas expuestas entre el visor de la máscara, el casco y el cuello de la chaqueta estructural ante la radiación térmica extrema.",
        reference: "Norma NFPA 1971 para Equipamiento de Protección Estructural"
      },

      // INTERMEDIO
      {
        id: "era-i-1",
        difficulty: "intermedio",
        question: "En la gestión del aire con el ERA durante un ataque interior, ¿en qué consiste la 'Regla de los Tercios'?",
        options: [
          "1/3 del aire para el bombero, 1/3 para la víctima y 1/3 para el cuartelero",
          "1/3 del cilindro para ingresar y alcanzar el foco, 1/3 para trabajar, y 1/3 de reserva para salir y enfrentar imprevistos",
          "Consumir 1/3 en la primera hora, 1/3 en la segunda y 1/3 en la tercera",
          "Dejar siempre 1/3 del tubo vacío antes de llenarlo en el compresor"
        ],
        correctAnswer: 1,
        explanation: "La regla de los tercios garantiza que la dotación inicie la retirada antes de agotar el suministro: un tercio para el avance, un tercio para tareas de control, y el tercio final es la reserva de escape de emergencia.",
        reference: "NFPA 1404 / Gestión del Aire en Equipos de Respiración"
      },
      {
        id: "era-i-2",
        difficulty: "intermedio",
        question: "¿Qué dispositivo de seguridad del ERA emite una señal sonora y lumínica de alta potencia si el bombero queda inmóvil durante más de 30 segundos?",
        options: [
          "La válvula reductora de presión",
          "El dispositivo PASS (Personal Alert Safety System) o Hombre Muerto",
          "El manómetro de baja presión",
          "El acople rápido Foster del arnés"
        ],
        correctAnswer: 1,
        explanation: "El sistema PASS (Sistema de Seguridad de Alerta Personal) detecta la falta de movimiento corporal. Si el bombero cae inconsciente o atrapado, tras una pre-alarma de aviso, entra en alarma total para guiar al equipo RIT (Equipo de Intervención Rápida).",
        reference: "Norma NFPA 1982 Dispositivos PASS"
      }
    ]
  },

  comunicacionesCategory,

  {
    id: "hidraulica-bombas",
    name: "Hidráulica y Operación de Bombas",
    shortDesc: "Presión en lanzas, pérdidas por fricción, golpe de ariete y abastecimiento.",
    icon: "Droplets",
    color: "sky",
    badgeBg: "bg-sky-500/10 border-sky-500/30 text-sky-400",
    hoverBg: "hover:border-sky-500/50 hover:bg-sky-950/20",
    bannerGradient: "from-sky-600/30 to-blue-600/10",
    difficulties: ["intermedio", "avanzado"],
    questions: [
      // INTERMEDIO
      {
        id: "hid-i-1",
        difficulty: "intermedio",
        question: "¿Qué es el 'Golpe de Ariete' y cuál es la forma correcta de evitarlo?",
        options: [
          "Es un impacto de la manguera contra el suelo; se evita usando botas de seguridad",
          "Es un pico violento de presión que ocurre al cerrar bruscamente un pitón o válvula de paso; se previene cerrando y abriendo siempre los controles en forma lenta y progresiva",
          "Es la falta de agua en la cisterna de la autobomba",
          "Es la rotura de una manguera por exceso de calor exterior"
        ],
        correctAnswer: 1,
        explanation: "Al detener bruscamente una masa de agua en movimiento dentro de una línea presurizada, la energía cinética se transforma en una onda de choque de presión destructiva (golpe de ariete) que puede reventar mangueras o dañar la bomba.",
        reference: "Hidráulica Básica para Maquinistas y Pitorreros - BVL"
      },
      {
        id: "hid-i-2",
        difficulty: "intermedio",
        question: "¿Cuál es la presión de trabajo típica recomendada en la entrada de un pitón o lanza de niebla combinada convencional para lograr un buen patrón de descarga?",
        options: [
          "1 bar (14.5 psi)",
          "Aproximadamente 7 bar (100 psi) o 5 bar (75 psi en pitones de baja presión)",
          "25 bar (360 psi)",
          "50 bar (720 psi)"
        ],
        correctAnswer: 1,
        explanation: "La mayoría de las boquillas y lanzas regulables de niebla/chorro pleno estándar están calibradas para operar a 7 bar (100 psi) de presión en boquilla, o a 5 bar en modelos modernos de baja presión.",
        reference: "NFPA 1964 Pitones y Lanzas de Chorro"
      },

      // AVANZADO
      {
        id: "hid-a-1",
        difficulty: "avanzado",
        question: "Si duplicamos el caudal (litros por minuto) que circula por una misma línea de manguera de 38 mm de diámetro, ¿en qué proporción se incrementa la pérdida de presión por fricción?",
        options: [
          "Se duplica (se multiplica por 2)",
          "Se cuadruplica aproximadamente (aumenta con el cuadrado del caudal: 2² = 4)",
          "Permanece constante",
          "Se reduce a la mitad"
        ],
        correctAnswer: 1,
        explanation: "De acuerdo con las leyes hidráulicas del flujo en conductos cerrados, la pérdida de carga por fricción aumenta aproximadamente con el cuadrado del caudal (Q²). Si duplicas el caudal, la fricción se multiplica por 4.",
        reference: "Principios de Hidráulica Bomberil Avanzada"
      },
      {
        id: "hid-a-2",
        difficulty: "avanzado",
        question: "Cuando un autobomba aspira agua desde una fuente abierta (laguna o piscina) a través de un mangote rígido, ¿cuál es el límite físico teórico máximo de altura de succión al nivel del mar?",
        options: [
          "Aproximadamente 10.33 metros (presión atmosférica de 1 atm), aunque en la práctica operativa de bomberos rara vez supera los 6 a 7 metros útiles",
          "Exactamente 50 metros gracias a los cebadores de vacío de paletas rotativas",
          "2 metros como máximo en cualquier condición",
          "No hay límite mientras el mangote sea de acero inoxidable"
        ],
        correctAnswer: 0,
        explanation: "La bomba no 'tira' del agua hacia arriba; genera vacío en el mangote para que la presión atmosférica exterior empuje el agua. La presión barométrica estándar al nivel del mar (1013 hPa) sostiene una columna de 10.33 metros de agua. En bomberos, el límite práctico operativo oscila entre 6 y 7 metros.",
        reference: "Operación de Bombas y Aspiración desde Fuente Abierta"
      }
    ]
  }
];

// Dificultades con sus configuraciones visuales y descripciones
export const DIFFICULTY_CONFIG = {
  "básico": {
    label: "Básico / Aspirante",
    color: "text-emerald-400",
    bg: "bg-emerald-500/10 border-emerald-500/30",
    badge: "bg-emerald-500 text-slate-950 font-bold",
    desc: "Fundamentos teóricos, definiciones esenciales y primeros pasos operativos."
  },
  "intermedio": {
    label: "Intermedio / Bombero",
    color: "text-amber-400",
    bg: "bg-amber-500/10 border-amber-500/30",
    badge: "bg-amber-500 text-slate-950 font-bold",
    desc: "Procedimientos de intervención, seguridad táctica y toma de decisiones en escena."
  },
  "avanzado": {
    label: "Avanzado / Suboficial",
    color: "text-rose-400",
    bg: "bg-rose-500/10 border-rose-500/30",
    badge: "bg-rose-500 text-white font-bold",
    desc: "Cálculos técnicos, comando operativo, fenómenos complejos y normativa aplicada."
  },
  "único": {
    label: "Nivel General Único",
    color: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/30",
    badge: "bg-blue-500 text-slate-950 font-bold",
    desc: "Contenido unificado obligatorio para todos los integrantes del cuerpo activo."
  }
};
