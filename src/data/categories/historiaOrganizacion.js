// C.B.I. Lección N°1 - Historia y Organización (Bomberos Voluntarios de Lanús)

export const historiaOrganizacionCategory = {
  id: "historia-organizacion",
  name: "Historia y Organización",
  shortDesc: "Fundación de BVL en 1913, Tomás Liberti, Armando Mamberti, Destacamentos 1 y 2, H.C.D., Cuerpo Activo y Regional 1.",
  icon: "Landmark",
  color: "amber",
  badgeBg: "bg-amber-500/10 border-amber-500/30 text-amber-400",
  hoverBg: "hover:border-amber-500/50 hover:bg-amber-950/20",
  bannerGradient: "from-amber-600/30 to-yellow-600/10",
  difficulties: ["básico", "intermedio", "avanzado"],
  questions: [
    // BÁSICO
    {
      id: "hist-b-1",
      difficulty: "básico",
      question: "¿En qué fecha exacta fue fundada la Sociedad de Bomberos Voluntarios de Lanús (B.V.L.)?",
      options: [
        "2 de Junio de 1884",
        "20 de Septiembre de 1913",
        "29 de Octubre de 1965",
        "17 de Septiembre de 1961"
      ],
      correctAnswer: 1,
      explanation: "La institución fue fundada el 20 de septiembre de 1913 tras un gran incendio ocurrido en la localidad de Villa Sarmiento (Lanús), constituyéndose como asociación civil sin fines de lucro y de bien público.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-b-2",
      difficulty: "básico",
      question: "¿Qué número de identificación numérica provincial (I.N.O.B.V.) le corresponde a Bomberos Voluntarios de Lanús?",
      options: [
        "Cuartel 4",
        "Cuartel 8",
        "Cuartel 12",
        "Cuartel 22"
      ],
      correctAnswer: 2,
      explanation: "Bomberos Voluntarios de Lanús cuenta con la identificación numérica de los organismos de Bomberos Voluntarios (I.N.O.B.V.) número 12 de la Provincia de Buenos Aires, de allí la denominación histórica Cuartel 12.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-b-3",
      difficulty: "básico",
      question: "¿Cuándo se conmemora el 'Día del Bombero Voluntario' en la República Argentina y en honor a qué acontecimiento?",
      options: [
        "2 de Junio, en honor a la creación del primer cuerpo de bomberos voluntarios en La Boca en 1884 por Tomás Liberti",
        "20 de Septiembre, por la fundación del Cuartel 12 de Lanús",
        "25 de Mayo, por la Revolución de Mayo",
        "29 de Octubre, por la creación de la Superintendencia Federal"
      ],
      correctAnswer: 0,
      explanation: "El 2 de Junio de 1884 se fundó la Sociedad Italiana de Bomberos Voluntarios de La Boca por iniciativa del inmigrante Tomás Liberti, fecha que se conmemora en todo el país como el Día del Bombero Voluntario.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-b-4",
      difficulty: "básico",
      question: "¿Con qué nombre original nació la institución en 1913 antes de mudarse a su actual sede central?",
      options: [
        "Sociedad de Bomberos Voluntarios de Villa Sarmiento",
        "Cuerpo de Bomberos Municipales de Lanús",
        "Asociación de Bomberos de Valentín Alsina",
        "Cuartel de Vigilantes de Lanús Este"
      ],
      correctAnswer: 0,
      explanation: "Los vecinos organizados crearon originalmente la 'Sociedad de Bomberos Voluntarios de Villa Sarmiento'. Al mudarse a su sede de Raúl Alfonsín N° 1039 (ex Rodríguez), comenzó a llamarse Bomberos Voluntarios de Lanús (INOBV 12).",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-b-5",
      difficulty: "básico",
      question: "¿Cuál es la finalidad legal y operativa de la Asociación Bomberos Voluntarios de Lanús según el Art. 3° de la Ley 10.917?",
      options: [
        "Cobro de tasas municipales de alumbrado y barrido",
        "Prevención y extinción de incendios y la intervención operativa para salvaguardar vidas y bienes agredidos por siniestros",
        "Inspección vehicular y otorgamiento de licencias de conducir",
        "Seguridad y vigilancia policial en la vía pública"
      ],
      correctAnswer: 1,
      explanation: "El Art. 3° de la Ley 10.917 establece que su finalidad es la prevención y extinción de incendios y la intervención operativa para salvaguardar vidas y bienes ante siniestros de origen natural, accidental o intencional.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },

    // INTERMEDIO
    {
      id: "hist-i-1",
      difficulty: "intermedio",
      question: "¿Quién es el ÚNICO caído en acto de servicio en la historia de Bomberos Voluntarios de Lanús, recordado cada 29 de Octubre?",
      options: [
        "Tomás Liberti",
        "Armando Mamberti (en ese momento Jefe de Cuerpo, fallecido el 29 de Octubre de 1965)",
        "José Gaspar González",
        "Fernando Soncini"
      ],
      correctAnswer: 1,
      explanation: "El 29 de Octubre de 1965 se conmemora el fallecimiento del Sr. Armando Mamberti, quien en ese momento era el Jefe de Cuerpo, siendo el único bombero caído en acto de servicio de la institución.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-i-2",
      difficulty: "intermedio",
      question: "¿En qué fecha se creó el DESTACAMENTO N°1 de BVL y dónde está ubicado?",
      options: [
        "Creado el 17 de Septiembre de 1961, ubicado en Matanza N° 2757 (Villa Mauricio)",
        "Creado el 23 de Abril de 1987, ubicado en Bueras N° 4355 (Villa Urquiza)",
        "Creado el 20 de Septiembre de 1913, ubicado en Raúl Alfonsín N° 1039",
        "Creado el 2 de Junio de 1984, ubicado en Gerli"
      ],
      correctAnswer: 0,
      explanation: "El Destacamento N°1 fue creado el 17 de Septiembre de 1961 y se encuentra en la calle Matanza N° 2757, Villa Mauricio (Tel: 4246-3220).",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-i-3",
      difficulty: "intermedio",
      question: "¿En qué fecha se creó el DESTACAMENTO N°2 de BVL y en qué dirección presta servicio?",
      options: [
        "Creado el 20 de Septiembre de 1913 en Villa Sarmiento",
        "Creado el 17 de Septiembre de 1961 en Matanza N° 2757",
        "Creado el 23 de Abril de 1987 en Bueras N° 4355 (Villa Urquiza)",
        "Creado el 29 de Octubre de 1965 en Lanús Oeste"
      ],
      correctAnswer: 2,
      explanation: "El Destacamento N°2 fue creado el 23 de Abril de 1987 (con colocación de su piedra fundamental el 30 de noviembre de 1980) y funciona en Bueras N° 4355, Villa Urquiza (Tel: 4246-6107).",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-i-4",
      difficulty: "intermedio",
      question: "¿Cuáles son los dos grandes grupos en los que se compone orgánicamente la institución de BVL?",
      options: [
        "La Honorable Comisión Directiva (H.C.D.) y el Cuerpo Activo (C.A.)",
        "La Dotación 1 y la Dotación 2",
        "El Personal Retirado y los Aspirantes a Ingreso",
        "La Escuadra de Reserva y la Brigada K9"
      ],
      correctAnswer: 0,
      explanation: "La institución se compone orgánicamente de dos grandes grupos: La Honorable Comisión Directiva (área dirigencial y administrativa) y el Cuerpo Activo (área operativa y de intervención).",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-i-5",
      difficulty: "intermedio",
      question: "¿A qué REGIONAL OPERATIVA y a qué FEDERACIÓN pertenece la Sociedad de Bomberos Voluntarios de Lanús?",
      options: [
        "Regional Operativa N°1 y Federación Bonaerense",
        "Regional Operativa N°4 y Federación Metropolitana",
        "Regional 12 y Federación Sur",
        "Regional Conurbano y Federación 2 de Junio"
      ],
      correctAnswer: 0,
      explanation: "BVL pertenece a la Regional Operativa N°1, federada a la FEDERACIÓN BONAERENSE, la cual a su vez integra el Consejo Nacional de Bomberos de la República Argentina.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },

    // AVANZADO
    {
      id: "hist-a-1",
      difficulty: "avanzado",
      question: "¿Qué cuerpos de Bomberos Voluntarios integran la Regional Operativa N°1 junto a Lanús?",
      options: [
        "Avellaneda, Dominico-Wilde, Sarandí, Dock Sud, Echenagucia-Gerli-Piñeyro y Lanús Oeste",
        "Lomas de Zamora, Almirante Brown, Esteban Echeverría y Quilmes",
        "La Plata, Ensenada, Berisso, Magdalena y Berazategui",
        "San Isidro, Vicente López, San Fernando y Tigre"
      ],
      correctAnswer: 0,
      explanation: "La Regional Operativa N°1 está compuesta por: B.V. Avellaneda, B.V. Dominico-Wilde, B.V. Sarandí, B.V. Dock Sud, B.V. Echenagucia-Gerli-Piñeyro, B.V. Lanús Oeste y B.V. Lanús.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-a-2",
      difficulty: "avanzado",
      question: "¿Quién fue el primer presidente organizador (provisorio) en 1913 y quién preside la institución en la actualidad desde 2020?",
      options: [
        "Organizador: Señor José Gaspar González / Presidente actual: Señor Mario Bálsamo",
        "Organizador: Fernando Soncini / Presidente actual: Rafael Baladrón",
        "Organizador: Armando Mamberti / Presidente actual: Leandro Muñoz",
        "Organizador: Vicente Gattoni / Presidente actual: Rubén Vairetta"
      ],
      correctAnswer: 0,
      explanation: "El Señor José Gaspar González fue el presidente organizador provisorio en 1913. En la actualidad, desde el año 2020, la presidencia está a cargo del Señor Mario Bálsamo.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-a-3",
      difficulty: "avanzado",
      question: "En la Roma de la Edad Antigua, ¿qué emperador creó la primera milicia organizada de bomberos dividida en distritos y áreas de protección?",
      options: [
        "Emperador Augusto",
        "Emperador Nerón",
        "Julio César",
        "Emperador Trajano"
      ],
      correctAnswer: 0,
      explanation: "En la Edad Antigua en Roma, tras un gran incendio, el emperador Augusto creó una milicia organizada para la lucha contra incendios y la dividió en diferentes distritos y áreas de protección urbana.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    },
    {
      id: "hist-a-4",
      difficulty: "avanzado",
      question: "¿Cómo se compone numéricamente la Honorable Comisión Directiva (H.C.D.) de BVL?",
      options: [
        "1 Presidente, 1 Vice, 1 Secretario, 1 Prosecretario, 1 Tesorero, 1 Protesorero, 8 Vocales titulares, 6 Vocales suplentes, 3 Revisores de cuentas titulares y 2 Revisores suplentes",
        "1 Comandante General, 2 Comandantes y 10 Suboficiales",
        "5 miembros elegidos anualmente por sorteo entre los vecinos",
        "1 Presidente y 4 Vocales designados por Defensa Civil"
      ],
      correctAnswer: 0,
      explanation: "La H.C.D. está compuesta por: 1 Presidente, 1 Vicepresidente, 1 Secretario, 1 Pro-secretario, 1 Tesorero, 1 Pro-tesorero, 8 Vocales titulares, 6 Vocales suplentes, 3 Revisores de cuentas titulares y 2 Revisores de cuentas suplentes.",
      reference: "C.B.I. Lección N°1 - Organización e Historia (BVL)"
    }
  ]
};
