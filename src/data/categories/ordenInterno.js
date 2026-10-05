// C.B.I. Lección N°1 - Orden Interno y Orden Cerrado + Escalafón Ley 25054 (BVL)

export const ordenInternoCategory = {
  id: "orden-interno",
  name: "Orden Interno y Jerarquías",
  shortDesc: "Uniformes reglamentarios, escala jerárquica Ley 25054, voces de mando (preventiva y ejecutiva), movimientos a pie firme y orden cerrado.",
  icon: "Medal",
  color: "emerald",
  badgeBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
  hoverBg: "hover:border-emerald-500/50 hover:bg-emerald-950/20",
  bannerGradient: "from-emerald-600/30 to-teal-600/10",
  difficulties: ["básico", "intermedio", "avanzado"],
  questions: [
    // BÁSICO
    {
      id: "ord-b-1",
      difficulty: "básico",
      question: "¿Cuáles son los 4 tipos de uniformes y vestimenta reglamentaria que posee la institución de BVL?",
      options: [
        "Uniforme de Fajina, Uniforme de Gala, Equipo de Protección Personal (EPP) y Equipos Especiales",
        "Ropa de civil, Mameluco de taller, Capa de lluvia y Ropa de gimnasia",
        "Traje Nivel A, Nivel B, Nivel C y Nivel D",
        "Uniforme de verano, de invierno, de guardia nocturna y de franco"
      ],
      correctAnswer: 0,
      explanation: "BVL posee 4 tipos de vestimenta reglamentaria acorde a la tarea: 1. Uniforme de Fajina (uso diario), 2. Uniforme de Gala (servicios especiales), 3. Equipo de Protección Personal (intervenciones), 4. Equipos Especiales (brigadas específicas).",
      reference: "C.B.I. Lección N°1 - Orden Interno (BVL)"
    },
    {
      id: "ord-b-2",
      difficulty: "básico",
      question: "¿Qué prendas y colores componen el Uniforme de Fajina de uso diario en BVL?",
      options: [
        "Pantalón blanco, chomba roja y zapatillas de lona",
        "Pantalón anti-desgarro azul con línea roja, remera o chomba azul, buzo o campera azul, zapatos de seguridad negros y gorra azul",
        "Chaquetilla azul con corbata negra y zapatos de vestir de charol",
        "Buzo con capucha rojo y borcegos amarillos reflectivos"
      ],
      correctAnswer: 1,
      explanation: "El Uniforme de Fajina de uso diario está compuesto por: pantalón anti-desgarro azul con línea roja, remera o chomba azul, buzo o campera azul, zapatos de seguridad negros y gorra azul.",
      reference: "C.B.I. Lección N°1 - Orden Interno (BVL)"
    },
    {
      id: "ord-b-3",
      difficulty: "básico",
      question: "¿En qué ocasiones y servicios está destinado el uso del Uniforme de Gala en BVL?",
      options: [
        "Para tareas de limpieza en el cuartel y mantenimiento de autobombas",
        "Para servicios especiales como desfiles, fiestas institucionales, velorios y actos oficiales",
        "Para intervenir en rescate vehicular y materiales peligrosos",
        "Para los entrenamientos físicos de aspirantes"
      ],
      correctAnswer: 1,
      explanation: "El Uniforme de Gala está destinado exclusivamente para servicios especiales: desfiles, fiestas, aniversarios, velorios y actos protocolares. Consta de pantalón de vestir azul con línea roja, camisa blanca, corbata negra, chaquetilla azul, zapatos de vestir negros, gorra, guantes y atributos.",
      reference: "C.B.I. Lección N°1 - Orden Interno (BVL)"
    },
    {
      id: "ord-b-4",
      difficulty: "básico",
      question: "En el Sistema Nacional de Bomberos Voluntarios (Ley 25054), ¿cuáles son las jerarquías de los Suboficiales Subalternos en orden ascendente?",
      options: [
        "Cabo, Cabo Primero y Sargento",
        "Sargento Primero, Suboficial Principal y Suboficial Mayor",
        "Oficial Ayudante, Oficial Inspector y Oficial Principal",
        "Cadete, Bombero y Bombero Superior"
      ],
      correctAnswer: 0,
      explanation: "Según el Art. 5° de la Ley Nacional 25054, el escalafón de Suboficiales Subalternos se compone de: Cabo (1 chevrón), Cabo Primero (2 chevrones) y Sargento (3 chevrones).",
      reference: "Escalafón Jerárquico - Ley Nacional 25054"
    },
    {
      id: "ord-b-5",
      difficulty: "básico",
      question: "En el orden cerrado, las voces de mando constan de dos tiempos fundamentales: ¿Cuáles son?",
      options: [
        "Voz Preventiva (anuncia el movimiento próximo a realizarse) y Voz Ejecutiva (anuncia el momento exacto en que ha de realizarse)",
        "Voz de Alerta y Voz de Silencio",
        "Voz de Marcha y Voz de Freno",
        "Voz de Preparación y Voz de Finalización"
      ],
      correctAnswer: 0,
      explanation: "Las voces de mando constan de 2 tiempos: 1) VOZ PREVENTIVA: anuncia el movimiento próximo a realizarse (prepara al bombero); 2) VOZ EJECUTIVA: anuncia el momento exacto en que ha de ejecutarse el movimiento.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },
    {
      id: "ord-b-6",
      difficulty: "básico",
      question: "En la posición de FIRMES (Voz FIR-MES), ¿cómo deben posicionarse las manos, los pies y la mirada?",
      options: [
        "Manos en los bolsillos, pies en paralelo y mirada al suelo",
        "Manos al lateral tocando el pantalón con dedos juntos y pulgar recogido; pies en la misma línea con dedos apuntando ligeramente hacia afuera (ángulo menor al recto); mirada al frente con mentón ligeramente levantado",
        "Brazos cruzados en el pecho y pies abiertos al ancho de hombros",
        "Puños cerrados adelante y cabeza inclinada hacia la derecha"
      ],
      correctAnswer: 1,
      explanation: "En posición de FIRMES rige la inmovilidad absoluta: manos al lateral del cuerpo tocando el pantalón con dedos juntos y pulgar recogido, pies en la misma línea con dedos apuntando ligeramente hacia afuera formando un ángulo menor al recto, y mirada al frente con mentón ligeramente levantado.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },

    // INTERMEDIO
    {
      id: "ord-i-1",
      difficulty: "intermedio",
      question: "¿Cómo se diferencia la posición de DESCANSO (Voz DES-CANSO) respecto a la posición de firmes?",
      options: [
        "Posición de inmovilidad 'floja', manos al lateral tocando el pantalón con puños cerrados, pie izquierdo ligeramente por delante del derecho y piernas abiertas al ancho de caderas",
        "Se colocan las manos detrás de la nuca y se flexionan las rodillas",
        "Se cruzan los brazos en la espalda y los talones permanecen unidos",
        "Permite hablar libremente y salir de la fila sin autorización"
      ],
      correctAnswer: 0,
      explanation: "DESCANSO es una posición de inmovilidad 'floja': manos al lateral del cuerpo tocando el pantalón con puños cerrados, pies levemente desalineados con el pie izquierdo por delante del derecho, piernas abiertas al ancho de caderas y mirada al frente.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },
    {
      id: "ord-i-2",
      difficulty: "intermedio",
      question: "¿Cuáles son las dos ÓRDENES DE EXCEPCIÓN que se imparten en un solo tiempo?",
      options: [
        "ATENCIÓN (para adoptar posición de firmes) y CONTINUAR (para reanudar la actividad previa)",
        "ALTO y MAR",
        "FIRMES y DESCANSO",
        "SALUDO UNO y SALUDO DOS"
      ],
      correctAnswer: 0,
      explanation: "Las órdenes de excepción son aquellas cuyo término se imparte en un solo tiempo: ATENCIÓN (el personal adopta de inmediato la posición de FIRMES) y CONTINUAR (el personal reanuda la actividad que previamente desarrollaba).",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },
    {
      id: "ord-i-3",
      difficulty: "intermedio",
      question: "Al ordenarse ALINEARSE (Voz ALINEAR-SE), ¿hacia qué lado se toma por defecto la alineación y con qué voz de mando se desarma el movimiento?",
      options: [
        "Por la izquierda y se desarma con DES-CANSO",
        "Por la derecha (mirando la nariz de la persona primera en la fila) y se desarma con la voz VISTA AL FREN-TE",
        "Hacia el centro y se desarma con FIR-MES",
        "Hacia el abanderado y se desarma con ROMPAN - FILAS"
      ],
      correctAnswer: 1,
      explanation: "La alineación se efectúa desde firmes y, salvo orden contraria, se toma por la derecha girando la cabeza rápidamente hasta ver la nariz del primero en la fila. Se desarma con la voz VISTA AL FREN-TE.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },
    {
      id: "ord-i-4",
      difficulty: "intermedio",
      question: "¿Cuáles son las tres condiciones reglamentarias e indispensables para efectuar los SALUDOS en BVL?",
      options: [
        "Se imparten siempre desde el FIRMES, se efectúan siempre con la cabeza cubierta y se realizan con la mano derecha",
        "Se pueden hacer en descanso, con o sin gorra y con cualquier mano",
        "Solo se saluda al pasar frente a la bandera nacional con las dos manos",
        "Se realizan únicamente con la mano izquierda y sin cubrecabezas"
      ],
      correctAnswer: 0,
      explanation: "Los saludos: 1) Se imparten siempre desde la posición de FIRMES, 2) Se efectúan siempre con la cabeza cubierta (gorra, casco o birrete), 3) Se realizan con la mano derecha.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },
    {
      id: "ord-i-5",
      difficulty: "intermedio",
      question: "En la ejecución de SALUDO UNO, ¿cuál es el movimiento correcto del brazo derecho y la mano?",
      options: [
        "Se levanta lateralmente hasta tocar la oreja derecha",
        "Se levanta por delante a la línea media del pecho hasta que el dedo mayor toque el nacimiento de la visera del cubrecabezas, formando mano y antebrazo una línea recta con codo a la altura del hombro",
        "Se lleva directamente la mano al pecho a la altura del corazón",
        "Se apoya la palma extendida sobre la frente"
      ],
      correctAnswer: 1,
      explanation: "El brazo derecho se levanta por delante a la línea media del pecho continuando hasta que la punta del dedo mayor toque el cubrecabezas en el nacimiento de la visera. Mano y antebrazo forman línea recta con el codo a la altura del hombro, dedos unidos y mano inclinada ligeramente al frente.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },
    {
      id: "ord-i-6",
      difficulty: "intermedio",
      question: "¿Cómo se ejecuta el SALUDO DOS para desarmar el saludo?",
      options: [
        "Se lleva con rapidez y enérgicamente la mano derecha a la posición de firmes por el lado más corto del cuerpo (no por el pecho)",
        "Se baja la mano lentamente recorriendo el pecho hacia abajo",
        "Se aplaude con ambas manos y se gira a la izquierda",
        "Se deja caer el brazo en péndulo natural"
      ],
      correctAnswer: 0,
      explanation: "SALUDO DOS: Se llevará con rapidez y enérgicamente la mano derecha a la posición de firmes nuevamente, realizándose por el lado más corto del cuerpo (no por el frente del pecho).",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },

    // AVANZADO
    {
      id: "ord-a-1",
      difficulty: "avanzado",
      question: "Según el Escalafón Jerárquico Nacional (Ley 25054), ¿qué jerarquías integran los 'OFICIALES JEFES'?",
      options: [
        "Sub-Comandante, Comandante y Comandante Mayor",
        "Comandante General y Jefe de Cuerpo",
        "Oficial Principal, Oficial Inspector y Oficial Ayudante",
        "Suboficial Mayor y Suboficial Principal"
      ],
      correctAnswer: 0,
      explanation: "Los Oficiales Jefes son: Sub-Comandante (1 rombo dorado), Comandante (2 rombos dorados) y Comandante Mayor (3 rombos dorados con laureles). El Comandante General es Oficial Superior.",
      reference: "Escalafón Jerárquico - Ley Nacional 25054"
    },
    {
      id: "ord-a-2",
      difficulty: "avanzado",
      question: "¿Qué jerarquías componen el grupo de 'SUBOFICIALES SUPERIORES' de bomberos?",
      options: [
        "Sargento Primero, Suboficial Principal y Suboficial Mayor",
        "Cabo, Cabo Primero y Sargento",
        "Oficial Ayudante y Oficial Inspector",
        "Suboficial de Guardia y Cuartelero"
      ],
      correctAnswer: 0,
      explanation: "Los Suboficiales Superiores son: Sargento Primero, Suboficial Principal y Suboficial Mayor (máximo grado de suboficiales, distinguido con cuatro óvalos entrelazados).",
      reference: "Escalafón Jerárquico - Ley Nacional 25054"
    },
    {
      id: "ord-a-3",
      difficulty: "avanzado",
      question: "En el giro de MEDIA VUELTA (Voz MEDIA VUELTA - IZQUIER), ¿cuántos grados se gira y cómo trabajan los pies?",
      options: [
        "Gira 180° hacia la izquierda; el taco del pie izquierdo queda apoyado y hace de pívot, mientras que la punta hace la fuerza para el giro enérgico",
        "Gira 90° a la derecha sobre la punta de ambos pies",
        "Gira 180° hacia la derecha apoyando el talón derecho",
        "Gira 360° en dos tiempos desarmando las manos de firmes"
      ],
      correctAnswer: 0,
      explanation: "La Media Vuelta se efectúa siempre hacia la izquierda (180°): el taco del pie izquierdo queda apoyado y hace de pívot, mientras que la punta del pie izquierdo apoya y hace la fuerza de giro, volviendo a juntar los pies en firmes.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },
    {
      id: "ord-a-4",
      difficulty: "avanzado",
      question: "¿Cuáles son los 3 pasos obligatorios para ejecutar el CAMBIO DE MANDO en una formación de BVL?",
      options: [
        "1. El personal a cargo llama al responsable; 2. La persona se para en firmes frente a él y el a cargo le informa que la formación queda a sus órdenes; 3. El nuevo responsable se para frente a la formación y anuncia: 'CUERPO A MIS ÓRDENES'",
        "1. Toque de sirena; 2. Rompan filas; 3. Saludo al cuartelero",
        "1. Firma del libro de guardia; 2. Saludo dos; 3. Retirada de los suboficiales",
        "1. Alineación por la izquierda; 2. Formación en terna; 3. Ruptura de marcha"
      ],
      correctAnswer: 0,
      explanation: "El cambio de mando consta de 3 pasos: 1) El personal a cargo llama al nuevo responsable, 2) Se para en firmes y el a cargo le indica que la formación queda a sus órdenes, 3) El nuevo responsable se para frente a la tropa y anuncia: 'CUERPO A MIS ÓRDENES'.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    },
    {
      id: "ord-a-5",
      difficulty: "avanzado",
      question: "Durante el desplazamiento de la formación, ante la voz de mando FRENTE, ¿qué acción deben realizar los bomberos?",
      options: [
        "Continuar con el aire de la marcha sin avanzar ni brasear, levantando las rodillas en el lugar con manos en firmes (retomando el avance al ordenarse 'MAR')",
        "Frenar en seco y quedar inmediatamente en descanso",
        "Dar media vuelta y avanzar en sentido contrario",
        "Romper filas hacia los costados de la calle"
      ],
      correctAnswer: 0,
      explanation: "La orden FRENTE frena el desplazamiento sin perder el paso: se continúa con el aire de la marcha sin avanzar ni brasear, levantando rodillas en el lugar con manos en firmes. Para retomar la marcha se ordenará 'MAR'.",
      reference: "C.B.I. Lección N°1 - Orden Interno y Orden Cerrado (BVL)"
    }
  ]
};
