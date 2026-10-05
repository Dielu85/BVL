// C.B.I. Lección N°6 - Comunicaciones & Planillas de Datos (Bomberos Voluntarios de Lanús)

export const comunicacionesCategory = {
  id: "comunicaciones",
  name: "Comunicaciones y Planillas",
  shortDesc: "Código Q en BVL, Panoramas 1 a 4, modulación de salidas y regresos, uso de radiofrecuencia (25-30 cm, 45°), actas de entrega y agua.",
  icon: "Radio",
  color: "purple",
  badgeBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
  hoverBg: "hover:border-purple-500/50 hover:bg-purple-950/20",
  bannerGradient: "from-purple-600/30 to-violet-600/10",
  difficulties: ["básico", "intermedio", "avanzado"],
  questions: [
    // BÁSICO
    {
      id: "com-b-1",
      difficulty: "básico",
      question: "¿Cuáles son los componentes esenciales del proceso de comunicación?",
      options: [
        "Emisor, Receptor, Mensaje, Canal, Código, Ruido y Feedback",
        "Handy, Batería, Antena y Microondas",
        "Cuartelero, Chofer, Pitorrero y Central",
        "Frecuencia directa, Frecuencia repetidora y Subtono"
      ],
      correctAnswer: 0,
      explanation: "El proceso de comunicación transmite información (mensaje) entre un ente (emisor) y otro (receptor), a través de un canal, empleando un código, enfrentando ruidos y completándose mediante el feedback o retroalimentación.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-b-2",
      difficulty: "básico",
      question: "En el Código 'Q' habitualmente utilizado en BVL, ¿qué significa modular 'QTH'?",
      options: [
        "Mensaje o comunicado urgente",
        "Estar atento o en escucha",
        "Domicilio, lugar o dirección de la intervención",
        "Esperar un momento en frecuencia"
      ],
      correctAnswer: 2,
      explanation: "QTH en la jerga de comunicaciones de BVL refiere al 'Domicilio – Lugar o dirección' hacia donde se desplaza o donde se encuentra operando la dotación.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-b-3",
      difficulty: "básico",
      question: "En las transmisiones de radio de BVL, ¿qué indica la respuesta 'QSL'?",
      options: [
        "Mensaje interpretado o comprendido",
        "Fuego fuera de control",
        "Unidad con desperfecto mecánico",
        "Orden de evacuación inmediata"
      ],
      correctAnswer: 0,
      explanation: "QSL significa 'Interpretado o comprendido', confirmando al emisor que el mensaje transmitido fue recibido y entendido con total claridad.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-b-4",
      difficulty: "básico",
      question: "Según el Código Numérico de modulación en BVL, ¿cómo se denominan el número '0' y el número '1'?",
      options: [
        "0 – CERO DE NADA / 1 – PRIMERO",
        "0 – NEGATIVO / 1 – ALFA",
        "0 – NULO / 1 – UNIDAD UNO",
        "0 – BASE / 1 – PRINCIPAL"
      ],
      correctAnswer: 0,
      explanation: "El código numérico oficial de BVL designa: 0 – CERO DE NADA, 1 – PRIMERO, 2 – SEGUNDO, 3 – TERCERO, 4 – CUARTO, 5 – QUINTO, etc.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-b-5",
      difficulty: "básico",
      question: "En el Código Fonético Internacional empleado por bomberos, ¿cómo se transmiten las siglas B.V.L.?",
      options: [
        "Bravo, Victor, Lima",
        "Buenos Aires, Victoria, Lanús",
        "Beta, Volga, Luna",
        "Barco, Viento, Lápiz"
      ],
      correctAnswer: 0,
      explanation: "En el alfabeto fonético internacional ICAO/OTAN: B = Bravo, V = Victor, L = Lima.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-b-6",
      difficulty: "básico",
      question: "¿Por qué es de vital importancia una correcta comunicación en todas las intervenciones de BVL?",
      options: [
        "Para informar a los medios periodísticos y redes sociales",
        "Para la coordinación de un trabajo más eficiente, rápido y seguro",
        "Para registrar el kilometraje diario de los móviles",
        "Para evitar tener que redactar planillas de datos"
      ],
      correctAnswer: 1,
      explanation: "Comunicarse adecuadamente en todas las intervenciones es indispensable 'PARA LA COORDINACIÓN DE UN TRABAJO MÁS EFICIENTE, RÁPIDO Y SEGURO'.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },

    // INTERMEDIO
    {
      id: "com-i-1",
      difficulty: "intermedio",
      question: "Al utilizar el micrófono de la radiofrecuencia (VHF/UHF), ¿a qué distancia de la boca y en qué ángulo debe colocarse?",
      options: [
        "Pegado a los labios directamente a 90 grados",
        "Entre 25 y 30 cm de la boca y preferentemente a 45° con tono elevado pero sin gritar",
        "A más de un metro de distancia",
        "A 5 cm de la boca manteniendo el volumen en el mínimo"
      ],
      correctAnswer: 1,
      explanation: "Reglas de radiofrecuencia: el micrófono debe estar entre 25 y 30 cm de la boca, si es posible a 45° de inclinación, manteniendo un tono elevado sin gritar, y jamás dejar el micrófono sobre el asiento para evitar que quede accionado.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-i-2",
      difficulty: "intermedio",
      question: "En BVL, ¿qué es un 'PANORAMA' y en qué tipo de intervenciones se utiliza con numeración?",
      options: [
        "Un informe escrito que se elabora al día siguiente en la central",
        "Una modulación que se utiliza ÚNICAMENTE PARA INCENDIOS y se da en primera instancia sin bajar de la unidad cuando se arriba al siniestro",
        "Una foto satelital que envía Defensa Civil a los móviles",
        "Un informe del estado meteorológico antes de salir"
      ],
      correctAnswer: 1,
      explanation: "Los PANORAMAS numerados (1 al 4) se utilizan ÚNICAMENTE PARA INCENDIOS. Se dan en primera instancia sin bajar de la unidad en el momento en que se arriba al siniestro.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-i-3",
      difficulty: "intermedio",
      question: "Al llegar a un incendio, si la dotación observa humo saliendo de la estructura pero aún no ve llamas, ¿qué panorama transmite?",
      options: [
        "PANORAMA 1",
        "PANORAMA 2 (SE VISUALIZA HUMO)",
        "PANORAMA 3 (SE VISUALIZA FUEGO Y HUMO)",
        "PANORAMA 4"
      ],
      correctAnswer: 1,
      explanation: "Clasificación de Panoramas en BVL: Panorama 1 = No se visualiza anormalidad; Panorama 2 = Se visualiza humo; Panorama 3 = Se visualiza fuego y humo; Panorama 4 = Se visualiza fuego, humo y víctimas en demanda de auxilio.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-i-4",
      difficulty: "intermedio",
      question: "Si al arribar al lugar de un incendio la dotación observa fuego, humo y personas pidiendo auxilio desde las ventanas, ¿qué panorama debe modular?",
      options: [
        "PANORAMA 1",
        "PANORAMA 2",
        "PANORAMA 3",
        "PANORAMA 4 (SE VISUALIZA FUEGO, HUMO Y VÍCTIMAS EN DEMANDA DE AUXILIO)"
      ],
      correctAnswer: 3,
      explanation: "El PANORAMA 4 es el máximo nivel inicial: 'SE VISUALIZA FUEGO, HUMO Y VÍCTIMAS EN DEMANDA DE AUXILIO', alertando de inmediato a la central sobre la presencia de personas en riesgo inminente.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-i-5",
      difficulty: "intermedio",
      question: "¿Qué significan los códigos QRV y QAP en las comunicaciones de BVL?",
      options: [
        "QRV: Atento o en escucha / QAP: Mantenerse atento en frecuencia",
        "QRV: Unidad averiada / QAP: Incendio dominado",
        "QRV: Solicitud de SAME / QAP: Corte de energía",
        "QRV: Regreso a base / QAP: Frecuencia libre"
      ],
      correctAnswer: 0,
      explanation: "En BVL: QRV significa 'Atento o en escucha'. QAP significa 'Mantenerse atento en frecuencia'.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-i-6",
      difficulty: "intermedio",
      question: "¿Cómo se modula el desplazamiento de una unidad desde el cuartel según el protocolo de BVL?",
      options: [
        "'Se les comunica a los HT de central Lanús que con esta hora se desplaza móvil XXX, chofer XXX, a cargo XXX por XXX'",
        "'Saliendo móvil al lugar a toda velocidad'",
        "'Móvil en camino sin novedad'",
        "'Atento central, salimos al código rojo'"
      ],
      correctAnswer: 0,
      explanation: "La modulación formal de desplazamiento establece: 'Se les comunica a los HT de central Lanús que con esta hora se desplaza móvil [número], chofer [nombre], a cargo [nombre], por [motivo del siniestro]'.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },

    // AVANZADO
    {
      id: "com-a-1",
      difficulty: "avanzado",
      question: "¿Qué aspectos deben informarse al realizar la AMPLIACIÓN DE PANORAMA tras inspeccionar la escena?",
      options: [
        "Edificación, medidas, sobre qué se gesta el siniestro, material utilizado (suficiente o no), maniobras en desarrollo, control de la situación (dominado/circunscripto), víctimas y presencia de personal específico (SAME, DC, Metrogas)",
        "Únicamente los datos del dueño de la casa y el modelo de autobomba",
        "El tiempo de respuesta del móvil y el gasto de nafta del generador",
        "La cantidad de mangueras cargadas en el carretel de la unidad"
      ],
      correctAnswer: 0,
      explanation: "La ampliación de panorama detalla: tipo de edificación, medidas del ambiente, sobre qué se gesta, si el material es suficiente, maniobras en desarrollo, estado de control (dominado/circunscripto), víctimas y personal de apoyo presente (SAME, DC, empresas de servicios).",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-a-2",
      difficulty: "avanzado",
      question: "En una intervención que NO es un incendio (ej. rescate o auxilio), ¿cómo se transmite el panorama?",
      options: [
        "De forma normal sin previa numeración, indicando siempre de lo general a lo particular lo que acontece, si el personal/material es suficiente y solicitando los medios pertinentes",
        "Obligatoriamente asignando un número del 1 al 4 como en los incendios",
        "Esperando a regresar a la guardia para enviar un correo electrónico",
        "No se realiza ninguna modulación radial"
      ],
      correctAnswer: 0,
      explanation: "En siniestros que no son incendios se modula de forma normal sin previa numeración, indicando de lo general a lo particular lo que acontece en la escena, evaluando si el material y personal es suficiente y solicitando los recursos necesarios.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-a-3",
      difficulty: "avanzado",
      question: "En el 'Acta de Responsabilidad por Aprovisionamiento de Agua', ¿cuál es la limitación sanitaria expresa que suscribe el solicitante?",
      options: [
        "El agua suministrada se acepta para el exclusivo uso sanitario, debido a que por el material empleado en dichas tareas puede no poseer la potabilidad necesaria para su ingestión",
        "El agua está certificada para consumo alimenticio humano",
        "El agua solo puede ser utilizada para el lavado de vehículos particulares",
        "BVL se responsabiliza civilmente por el sabor o color del agua en el tanque"
      ],
      correctAnswer: 0,
      explanation: "El acta legal deja constancia de que el solicitante 'se hace responsable de aceptar dicho aprovisionamiento de agua para el exclusivo uso sanitario, debido a que por razones determinadas en el uso del material empleado en dichas tareas, el agua suministrada puede no poseer el grado de potabilidad necesaria para su ingestión'.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    },
    {
      id: "com-a-4",
      difficulty: "avanzado",
      question: "¿Por qué es imprescindible que el bombero sepa confeccionar fidedignamente una Planilla de Datos o Acta de Entrega?",
      options: [
        "Para que la institución desarrolle en su más alto nivel no solo su capacidad operativa sino también la legal, evitando inconvenientes jurídicos futuros y elaborando informes a autoridades",
        "Para cobrar honorarios por los servicios prestados",
        "Para justificar horas de descanso en el cuartel",
        "Para reemplazar a la policía en peritajes penales"
      ],
      correctAnswer: 0,
      explanation: "La toma fidedigna de datos es vital para respaldar la intervención, suministrar información a autoridades judiciales/policiales y proteger institucional y legalmente a la Sociedad de Bomberos Voluntarios de Lanús.",
      reference: "C.B.I. Lección N°6 - Comunicaciones & Planillas (BVL)"
    }
  ]
};
