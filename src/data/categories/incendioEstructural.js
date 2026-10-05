// C.B.I. - Incendio Estructural (Bomberos Voluntarios de Lanús)

export const incendioEstructuralCategory = {
  id: "incendio-estructural",
  name: "Incendio Estructural",
  shortDesc: "Etapas del incendio, plano neutro, rollover, flashover, backdraft, técnicas de ataque (directo, indirecto, mixto, 3D) y ventilación (VPP, VPN e hidráulica).",
  icon: "Flame",
  color: "red",
  badgeBg: "bg-red-500/10 border-red-500/30 text-red-400",
  hoverBg: "hover:border-red-500/50 hover:bg-red-950/20",
  bannerGradient: "from-red-600/30 to-amber-600/10",
  difficulties: ["básico", "intermedio", "avanzado"],
  questions: [
    // BÁSICO
    {
      id: "fe-b-1",
      difficulty: "básico",
      question: "¿Cuáles son los 4 componentes del 'Tetraedro del Fuego'?",
      options: [
        "Combustible, Comburente (Oxígeno), Calor y Reacción Química en Cadena",
        "Madera, Gasolina, Chispas y Aire",
        "Calor, Humo, Gas y Llama",
        "Temperatura, Viento, Material inflamable y Presión"
      ],
      correctAnswer: 0,
      explanation: "El tetraedro del fuego explica la combustión con llama y se compone de: Combustible (agente reductor), Comburente (oxígeno), Calor (energía de activación) y Reacción Química en Cadena.",
      reference: "C.B.I. - Incendio Estructural (BVL) / NFPA 1001"
    },
    {
      id: "fe-b-2",
      difficulty: "básico",
      question: "Un fuego en una freidora industrial con aceites vegetales y grasas de cocina corresponde a la clase:",
      options: [
        "Clase B",
        "Clase A",
        "Clase K (o F)",
        "Clase C"
      ],
      correctAnswer: 2,
      explanation: "La Clase K (o F en normativa europea) corresponde a fuegos de aceites y grasas de origen vegetal o animal en aparatos de cocina comerciales, que requieren agentes de acetato de potasio para saponificación.",
      reference: "Norma NFPA 10"
    },
    {
      id: "fe-b-3",
      difficulty: "básico",
      question: "Al enfriar un fuego arrojando agua, ¿cuál de los lados del tetraedro del fuego estamos eliminando?",
      options: [
        "El Comburente",
        "El Calor (Energía de activación)",
        "El Combustible",
        "La Reacción en cadena"
      ],
      correctAnswer: 1,
      explanation: "El agua actúa principalmente absorbiendo calor gracias a su alto calor específico y calor latente de vaporización, reduciendo la temperatura por debajo del punto de ignición del combustible.",
      reference: "Fundamentos de Combustión y Control de Incendios"
    },
    {
      id: "fe-b-4",
      difficulty: "básico",
      question: "Los fuegos Clase C en la clasificación americana (IRAM / NFPA) involucran:",
      options: [
        "Metales combustibles como Magnesio o Titanio",
        "Líquidos inflamables como Nafta o Gasoil",
        "Equipos e instalaciones eléctricas energizadas",
        "Materiales sólidos comunes como madera, papel y tela"
      ],
      correctAnswer: 2,
      explanation: "Los fuegos Clase C son aquellos que involucran equipos, maquinarias o instalaciones eléctricas bajo tensión. Si se desenergiza la instalación, pasa a considerarse según el material base (generalmente A o B).",
      reference: "Normas IRAM 3517 / NFPA 10"
    },
    {
      id: "ie-b-1",
      difficulty: "básico",
      question: "¿Cómo define el C.B.I. de BVL al 'Incendio Estructural'?",
      options: [
        "Un fuego fuera de control que se produce dentro de una construcción (siendo el tipo de intervención al que más acude B.V.L.)",
        "Cualquier incendio de pastizales sobre terraplenes de ferrocarril",
        "Fuego confinado en la cabina de un camión cisterna",
        "Un principio de incendio en un transformador de media tensión"
      ],
      correctAnswer: 0,
      explanation: "Incendio Estructural: 'Es un fuego fuera de control que se produce dentro de una construcción. IMPORTANTE: Es el tipo de intervención al que más acude B.V.L.'.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-b-2",
      difficulty: "básico",
      question: "¿Cuáles son las 4 etapas del incendio estructural según el programa de instrucción de BVL?",
      options: [
        "1. Incipiente, 2. Crecimiento, 3. Libre combustión (desarrollada o generalizada), 4. Latente (decaimiento)",
        "1. Ignición, 2. Propagación, 3. Extinción, 4. Escombramiento",
        "1. Chorro pleno, 2. Chorro niebla, 3. Chorro protección, 4. Corte",
        "1. Ataque ofensivo, 2. Ataque defensivo, 3. Ventilación, 4. Control"
      ],
      correctAnswer: 0,
      explanation: "Las etapas establecidas en la lección son: 1. INCIPIENTE, 2. CRECIMIENTO, 3. LIBRE COMBUSTIÓN (DESARROLLADA O GENERALIZADA), 4. LATENTE (DECAIMIENTO).",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-b-3",
      difficulty: "básico",
      question: "En la fase INCIPIENTE de un incendio estructural, ¿qué ocurre con el oxígeno y la probabilidad de supervivencia de víctimas?",
      options: [
        "El oxígeno contenido en el aire no ha sido reducido en forma significante y aún hay probabilidad de supervivencia de víctimas",
        "El oxígeno es 0% y no hay ninguna posibilidad de vida",
        "La temperatura ambiente de todo el recinto alcanza de inmediato los 800°C",
        "Se produce un backdraft espontáneo de forma inevitable"
      ],
      correctAnswer: 0,
      explanation: "En la fase incipiente el oxígeno no ha sido reducido en forma significante, el calor de la llama puede ser de 538°C pero la temperatura ambiente del recinto aumenta muy poco, y aún hay probabilidad de supervivencia de víctimas.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-b-4",
      difficulty: "básico",
      question: "¿Qué es el 'PLANO NEUTRO' dentro de un recinto afectado por un incendio?",
      options: [
        "Una línea imaginaria que divide la zona de sobrepresión (capa superior caliente con gases y deficiencia de O2) de la zona de depresión (capa inferior con aire más limpio, visibilidad y menor temperatura)",
        "El plano del piso donde se apoya el pitonero",
        "La línea de corte de la manivela de la lanza",
        "El perímetro exterior acordonado por la policía"
      ],
      correctAnswer: 0,
      explanation: "El plano neutro es la línea imaginaria que divide la zona de sobrepresión (capa superior: productos de combustión, alta temperatura y deficiencia de O2) de la zona de depresión (capa inferior: visibilidad, aire limpio y menor temperatura).",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },

    // INTERMEDIO
    {
      id: "ie-i-1",
      difficulty: "intermedio",
      question: "¿Qué fenómeno se denomina 'ROLLOVER' o 'FLAMEOVER' en el desarrollo de un incendio?",
      options: [
        "La inflamación de la capa de gases producto de la combustión acumulados bajo el techo, haciendo que las llamas corran por el techo como paso previo al flashover",
        "La explosión por flujo reverso provocada por abrir una puerta",
        "El rebose violento de un líquido inflamable en ebullición",
        "La asfixia de las llamas por falta absoluta de oxígeno"
      ],
      correctAnswer: 0,
      explanation: "Rollover o Flameover es el fenómeno en el que la capa de gases acumulados bajo el techo se inflama de manera que las llamas corren por el techo, considerándose el paso previo inmediato a un flashover.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-i-2",
      difficulty: "intermedio",
      question: "En la etapa LATENTE (decaimiento), ¿por qué existe un severo peligro de BACKDRAFT?",
      options: [
        "Porque no hay llamas visibles pero sí temperaturas por encima de 538°C con el local lleno de humo denso y gases inflamables a presión por falta de oxígeno",
        "Porque el agua de la línea genera un cortocircuito eléctrico masivo",
        "Porque la estructura de hormigón pierde su resistencia al congelarse",
        "Porque la presión barométrica exterior succiona las mangueras"
      ],
      correctAnswer: 0,
      explanation: "En la fase latente el fuego disminuye por falta de comburente (las llamas pueden cesar), quedando brasas y el recinto lleno de humo denso y gases combustibles a presión por encima de 538°C: ¡peligro inminente de Backdraft ante cualquier ingreso de aire!",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-i-3",
      difficulty: "intermedio",
      question: "¿Cuáles son las ventajas operativas del 'CHORRO SÓLIDO O PLENO' en incendios estructurales?",
      options: [
        "Buen alcance y penetración, alcanza áreas lejanas y tiene poco arrastre de aire, por lo que no altera directamente la ventilación del incendio",
        "Absorbe más calorías que cualquier otro patrón y crea un escudo protector",
        "Convierte toda el agua en niebla de 90 grados al salir de la boquilla",
        "Permite ventilar el recinto en forma hidráulica"
      ],
      correctAnswer: 0,
      explanation: "El chorro sólido produce un chorro compacto con poco rocío, brinda excelente alcance y penetración hacia áreas lejanas o inaccesibles, y tiene poco arrastre de corrientes de aire (no afecta la ventilación).",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-i-4",
      difficulty: "intermedio",
      question: "¿Para qué se utiliza el 'CHORRO DE PROTECCIÓN' en una lanza y qué limitación tiene?",
      options: [
        "Protege al bombero y ayudantes del calor radiante para acercarse a la base; NO es un patrón de ataque y no tiene alcance",
        "Es el patrón principal para apagar fuegos en techos altos",
        "Solo puede usarse desde el exterior a través de ventanas cerradas",
        "Sirve para cortar chapas y puertas de madera"
      ],
      correctAnswer: 0,
      explanation: "El chorro de protección crea una gran pantalla de agua que protege al personal del calor radiante intenso, permitiendo avanzar o retirarse con seguridad. ¡NO es un patrón de ataque, no tiene alcance y proporciona amplia ventilación!",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-i-5",
      difficulty: "intermedio",
      question: "¿En qué consiste el 'ATAQUE DIRECTO / OFENSIVO'?",
      options: [
        "Aplicación de chorro pleno a la base del fuego en el interior yendo al corazón del incendio, solo mientras se vea fuego y sin arrojar agua al humo",
        "Arrojar niebla constante al techo desde la puerta de calle",
        "Inundar la estructura con espuma química desde la autobomba",
        "Esperar que el fuego se autoliquide en la etapa latente"
      ],
      correctAnswer: 0,
      explanation: "Ataque Directo/Ofensivo: Aplica chorro pleno a la base del fuego ('corazón') atacando desde el interior. No debe aplicarse agua durante demasiado tiempo seguido, ni arrojar agua al humo. Desventaja: mayor exposición térmica del bombero.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-i-6",
      difficulty: "intermedio",
      question: "¿En qué consiste el 'ATAQUE MIXTO / COMBINADO'?",
      options: [
        "Combina ataque al techo con técnica generadora de vapor y ataque directo sobre los materiales que arden en el suelo, moviendo la boquilla en patrones T, Z u O",
        "Atacar simultáneamente con agua y polvo químico seco desde la misma lanza",
        "Atacar con dos dotaciones una desde el frente y otra desde el contrafrente a la vez",
        "Mezclar agua con arena mediante una lanza especial"
      ],
      correctAnswer: 0,
      explanation: "Ataque Mixto/Combinado: Utiliza un ataque a la altura del techo generador de vapor combinado con un ataque directo a los combustibles del suelo, moviendo la boquilla en patrones en forma de T, Z u O.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-i-7",
      difficulty: "intermedio",
      question: "Respecto a la técnica de agua 3D (3DWF), ¿cuál es la advertencia fundamental que enseña el C.B.I.?",
      options: [
        "NO es una técnica de extinción de incendios; solo es una técnica de control y enfriamiento de la capa de gases calientes mediante pulsaciones cortas en cono",
        "Es una técnica pensada para apagar incendios forestales a larga distancia",
        "Es un método para purgar el aire de las mangueras de 63,5 mm",
        "Se utiliza únicamente para alimentar camiones cisterna"
      ],
      correctAnswer: 0,
      explanation: "El C.B.I. aclara enfáticamente: 'La técnica 3DWF NO ES UNA TÉCNICA DE EXTINCIÓN DE INCENDIOS, solo es una técnica de control de la capa de gases calientes. Si es mal utilizada puede propagar el fuego o lesionar al personal'.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },

    // AVANZADO
    {
      id: "ie-a-1",
      difficulty: "avanzado",
      question: "¿Cuáles son las 6 REGLAS GENERALES DE ATAQUE en incendios estructurales enseñadas en el C.B.I.?",
      options: [
        "1. Atacar sobre su propio plano; 2. Aproximarse lo más posible; 3. Combatir desde el lado impelido y comenzar por lo más alto; 4. Proteger vías de escape y escaleras; 5. Proteger marcos de puertas y ventanas; 6. No dirigir agua a objetos no alcanzados, vidrios, metales ni humo",
        "1. Romper vidrios; 2. Echar agua continuo; 3. No ventilar; 4. Avanzar de pie; 5. Dejar puertas abiertas; 6. Usar chorro pleno al techo",
        "1. Esperar apoyo; 2. Desconectar mangueras; 3. Cortar el agua; 4. Evacuar la cuadra; 5. Apagar la bomba; 6. No ingresar",
        "1. Atacar desde el exterior; 2. Usar monitor fijo; 3. Trabajar sin ERA; 4. Tirar agua al humo; 5. Bajar la presión a 1 bar; 6. Abrir ventanas"
      ],
      correctAnswer: 0,
      explanation: "Reglas Generales de Ataque: 1. Atacar al fuego sobre su propio plano. 2. Aproximarse a él lo más que sea posible. 3. Combatirlo desde el lado hacia el cual son impelidas las llamas y comenzar la extinción por lo más alto. 4. Proteger vías de escape y escaleras. 5. Proteger marcos de puertas y ventanas. 6. No dirigir chorro sobre objetos no alcanzados, vidrios, metales ni humo.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-a-2",
      difficulty: "avanzado",
      question: "¿Cuándo está CONTRAINDICADO el Ataque Indirecto / Defensivo con chorro de niebla generador de vapor?",
      options: [
        "Cuando hay víctimas atrapadas o cuando no puede contenerse la propagación del fuego hacia zonas no implicadas",
        "Cuando el fuego se encuentra en un departamento de un solo piso",
        "Cuando la dotación utiliza equipo de respiración autónoma",
        "Cuando se cuenta con abastecimiento continuo de hidrante"
      ],
      correctAnswer: 0,
      explanation: "El ataque indirecto genera vapor súbito que desplaza el oxígeno: por esa razón 'NO es el más indicado cuando hay víctimas atrapadas o cuando no puede contenerse la propagación del fuego hacia zonas no implicadas'.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-a-3",
      difficulty: "avanzado",
      question: "En ventilación táctica de incendios, ¿cómo opera la VENTILACIÓN POR PRESIÓN POSITIVA (VPP)?",
      options: [
        "Inyecta aire fresco desde el exterior hacia el interior creando una ligera sobrepresión que empuja humo y gases hacia una abertura de salida previamente coordinada",
        "Succiona el humo del interior hacia afuera mediante aspas neumáticas",
        "Enfría el aire exterior con hielo seco antes de meterlo a la vivienda",
        "Cierra todas las ventanas para extinguir el fuego por falta de oxígeno"
      ],
      correctAnswer: 0,
      explanation: "VPP: Inyecta aire fresco desde el exterior creando sobrepresión en el recinto, forzando la salida planificada de humos y calor por una abertura de escape. Es el sistema más rápido y seguro en edificios de varias plantas.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "ie-a-4",
      difficulty: "avanzado",
      question: "¿Cómo se ejecuta la VENTILACIÓN FORZADA HIDRÁULICA una vez controlado el incendio?",
      options: [
        "Utilizando la línea de ataque con patrón cono/niebla desde el interior del recinto hacia una abertura exterior (puerta o ventana) para arrastrar humos y calor",
        "Inundando la habitación con 5000 litros de agua",
        "Lanzando un chorro sólido al centro del cielorraso",
        "Aspirando el humo a través del mangote de succión de la autobomba"
      ],
      correctAnswer: 0,
      explanation: "Ventilación Hidráulica: Se pone en marcha una vez controlado el incendio; utiliza la línea de agua en patrón niebla/cono desde el interior apuntando hacia una abertura exterior para arrastrar mecánicamente los humos y gases.",
      reference: "C.B.I. - Incendio Estructural (BVL)"
    },
    {
      id: "fe-a-1",
      difficulty: "avanzado",
      question: "¿Qué condiciones deben converger para que ocurra un fenómeno de 'Boilover' en un tanque de almacenamiento de hidrocarburos?",
      options: [
        "Tanque de gas licuado de petróleo (GLP) expuesto al fuego con válvula atascada",
        "Petróleo crudo con componentes de amplio rango de destilación, onda de calor residual que desciende y colchón de agua decantada en el fondo",
        "Cualquier combustible refinado liviano como nafta de aviación sin presencia de agua",
        "Un derrame de combustible líquido en suelo saturado de arena caliente"
      ],
      correctAnswer: 1,
      explanation: "El Boilover requiere: 1) Crudo con variedad de densidades, 2) Incendio de superficie abierta que genera una onda de calor hacia el fondo, 3) Colchón de agua en el fondo del tanque que, al alcanzar más de 100°C, se vaporiza violentamente aumentando su volumen 1700 veces y expulsando el petróleo en llamas.",
      reference: "Manual HazMat y Combustibles Líquidos - NFPA 30"
    }
  ]
};
