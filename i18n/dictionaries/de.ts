import type pl from "./pl";

type DeepWiden<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends boolean
      ? boolean
      : T extends readonly (infer Item)[]
        ? readonly DeepWiden<Item>[]
        : T extends object
          ? {
              readonly [Key in keyof T]: DeepWiden<T[Key]>;
            }
          : T;

const de = {
  navigation: {
    scheduleCall: "Schedule a call",
    requestQuote: "Request a quote",

    menuDescriptions: {
      services: "Was wir gestalten",
      about: "Warum es o123 gibt",
      journal: "Geschichten & Ideen",
      contact: "Ein Gespräch beginnen",
    },
  },

  hero: {
    heading: {
      firstLine: "Du suchst nach mehr",
      secondLine: "als nur einem",
      thirdLine: "Event?",
    },

    paragraph: {
      intro:
        "Wir gestalten Events, die auch nach ihrem Ende noch Bedeutung haben.",

      emphasis:
        "Von Incentive-Reisen und Business-Events bis hin zu privaten Feiern und Projekten, die individuell von Grund auf entwickelt werden.",

      outro:
        "Wir beginnen mit den Menschen und dem Ziel, nicht mit einem fertigen Plan. Alles Weitere entsteht rund um das, was für die Teilnehmenden wirklich relevant ist.",
    },
  },

  introduction: {
    label: "WILLKOMMEN BEI O123",

    heading: {
      firstLine: "Von der ersten Frage",
      secondLine: "zu einem einzigartigen",

      animated: ["Projekt.", "Event.", "Erlebnis."],
    },

    paragraph: {
      intro:
        "Jedes Projekt beginnt mit einem Gespräch.",

      emphasisOne:
        "Es gibt kein Patentrezept für ein gutes Event, denn die Ausgangssituation ist jedes Mal eine andere.",

      middle:
        "Format, Tempo und Charakter stimmen wir auf die Menschen, den Anlass und das Ziel ab. Zuerst möchten wir verstehen,",

      emphasisTwo:
        "was die Teilnehmenden aus diesem Erlebnis mitnehmen sollen,",

      outro:
        "und erst danach entwickeln wir alles, was dorthin führt.",
    },
  },

  services: {
    philosophy: {
      heading: {
        firstLine: "Wie wir",
        secondLine: "Erlebnisse gestalten",
      },

      principles: [
        {
          number: "01",
          category: "Erlebnisdesign",
          title: "Ziel & Intention",
          description: [
            {
              text: "Bevor wir einen Ort, Aktivitäten oder die Richtung eines Events auswählen, möchten wir verstehen, ",
            },
            {
              text: "warum es entsteht.",
              emphasized: true,
            },
            {
              text: " Gute Erlebnisse beginnen nicht mit Ideen. ",
            },
            {
              text: "Sie beginnen mit der Antwort auf diese Frage.",
              emphasized: true,
            },
          ],
        },
        {
          number: "02",
          category: "Narration",
          title: "Rhythmus & Emotionen",
          description: [
            {
              text: "Uns ist wichtig, dass das gesamte Event stimmig und fließend abläuft — vom ersten Kontakt mit den Teilnehmenden bis zum Abschluss.",
            },
          ],
        },
        {
          number: "03",
          category: "Menschen",
          title: "Der Mensch im Mittelpunkt",
          description: [
            {
              text: "Derselbe Ort kann eine Gruppe begeistern und eine andere unberührt lassen. Bevor wir ein Konzept vorschlagen, möchten wir ",
            },
            {
              text: "die Menschen verstehen,",
              emphasized: true,
            },
            {
              text: " für die wir das Erlebnis gestalten.",
            },
          ],
        },
        {
          number: "04",
          category: "Überraschung",
          title: "Bleibende Erinnerungen",
          description: [
            {
              text: "Die stärksten Erinnerungen entstehen, wenn etwas Unerwartetes geschieht. Deshalb gestalten wir bewusst Momente, die überraschen und den Teilnehmenden noch lange im Gedächtnis bleiben.",
            },
          ],
        },
        {
          number: "05",
          category: "Sicherheit",
          title: "Wir kümmern uns darum",
          description: [
            {
              text: "Hinter den Kulissen werden Hunderte von Entscheidungen getroffen. Unsere Aufgabe ist es, uns um jede einzelne zu kümmern, damit ihr euch ganz auf das Erlebnis konzentrieren könnt.",
            },
          ],
        },
        {
          number: "06",
          category: "Transparenz",
          title: "Klare Grundsätze",
          description: [
            {
              text: "Wir sind überzeugt, dass Vertrauen mit klaren Regeln beginnt. Deshalb sprechen wir von Anfang an offen über den Umfang der Zusammenarbeit, Kosten und Verantwortlichkeiten.",
            },
          ],
        },
      ],
    },

    categories: {
      heading: {
        firstLine: "Welche Erlebnisse",
        secondLine: "gestalten wir?",
      },

      description:
        "Jedes Projekt beginnt mit einem Gespräch und einem klaren Verständnis des Ziels. Ob wir ein Firmenevent, eine private Feier oder eine Expedition ans andere Ende der Welt organisieren – jedes Erlebnis wird auf die Menschen, die Emotionen und den Ort abgestimmt.",

      items: [
        {
          id: "business",
          title: "BUSINESS",
          description:
            "Wir gestalten Konferenzen, Produktpremieren, Galas und Partnertreffen mit einem konkreten geschäftlichen Ziel. Zuerst klären wir, was das Event erreichen soll. Erst danach legen wir Format, Ort und Ablauf fest.",
        },
        {
          id: "incentive",
          title: "INCENTIVE",
          description:
            "Wir entwickeln Incentive-Reisen für Teams, Kunden und Führungskräfte — von kurzen Auszeiten bis hin zu umfangreicheren mehrtägigen Programmen. Jede Reise wird auf die jeweilige Gruppe, das Ziel und den Ort abgestimmt, statt einem fertigen Schema zu folgen.",
        },
        {
          id: "private",
          title: "PRIVATE EVENTS",
          description:
            "Wir organisieren private Events — Geburtstage, Jubiläen, Verlobungen und Familienfeiern. Statt mit einem fertigen Konzept zu beginnen, klären wir zuerst, welchen Charakter der Anlass haben soll und was den Menschen, die dabei sein werden, wirklich wichtig ist.",
        },
        {
          id: "expeditions",
          title: "EXPEDITIONEN",
          description:
            "Wir gestalten Reisen und Expeditionen abseits klassischer touristischer Routen — von Safaris und Offroad-Touren bis hin zu weniger offensichtlichen Reisezielen und Orten. Das Programm entsteht von Grund auf danach, was die Teilnehmenden erleben und wie sie reisen möchten.",
        },
        {
          id: "team",
          title: "TEAM",
          description:
            "Wir gestalten Reisen, Aktivitäten und Treffen, bei denen Teams gemeinsam Zeit außerhalb ihres gewohnten Arbeitsumfelds verbringen können. Wir beginnen nicht mit einem Katalog von Aktivitäten, sondern wählen das Format passend zu den Menschen, der Dynamik im Team und dem eigentlichen Grund für das Treffen.",
        },
        {
          id: "bespoke",
          title: "INDIVIDUELL",
          description:
            "Nicht jede Idee passt in eine bestehende Kategorie. Wenn ein Projekt ein ungewöhnliches Format, einen besonderen Ort oder eine andere Art der Umsetzung erfordert, entwickeln wir es von Grund auf und stimmen den gesamten Prozess auf die konkrete Situation ab.",
        },
      ],
    },
  },

  bridgeInterlude: {
    accessibility: {
      heading: "Momente, die zählen. Erlebnisse, die in Erinnerung bleiben.",
      cityImageAlt: "Blick auf Wrocław",
      bridgeImageAlt:
        "Illustration einer Brücke als Symbol für die Wurzeln von o123 in Wrocław",
    },
  },

  journal: {
    introductionHeading: {
      firstLine: "Erlebnisse",
      secondLine: "über Grenzen hinweg",
    },

    aboutLabel: "o123 kennenlernen",

    identity: {
      brand: "(O123) Marke",
      headquarters: "(WRO) Hauptsitz",
      reach: "(PL/EU) Reichweite",
    },

    article: {
      title: "Warum erinnern wir uns an Emotionen und nicht an Ereignisse?",
      date: "16. Aug. 2026",
      alt: "Artikel darüber, warum wir uns an Emotionen und nicht an Ereignisse erinnern",
    },

    readMoreLabel: "Mehr lesen",

    closingStatement: "Jede Geschichte beginnt mit einem Gespräch",

    accessibility: {
      articleNavigation: "Artikelnavigation",
      nextArticle: "Nächster Artikel",
      previousArticle: "Vorheriger Artikel",
    },
  },

  contact: {
    availability: "Open for projects",
    establishment: "Est. Wrocław // Q3 2026",

    heading: {
      firstLine: "Beginnen wir mit",
      secondLine: "einem Gespräch.",
    },

    description:
      "Du musst nicht mit einem fertigen Konzept zu uns kommen. Eine Idee, ein Anlass oder ein Ziel, über das du sprechen möchtest, reicht aus. Genau dort beginnen wir.",

    actions: {
      startProject: "Start a project",
      letsChat: "Let's chat",
    },

    accessibility: {
      sectionLabel: "Kontakt",
      socialMedia: "Soziale Medien",
    },

    details: {
      contactLabel: "Kontakt",
      addressFirstLine: "Borowska 182,",
      addressSecondLine: "50-557 Wrocław",
      phone: "(+48) 533 615 713",

      emailPromptFirstLine: "Keine Lust auf Formulare?",
      emailPromptSecondLine: "Schreib uns eine E-Mail",
      email: "hello@o123.pl",

      mediaLabel: "Social Media",
    },

    footer: {
      copyright: "© Urheberrecht 2026",
      brand: "O123",
      terms: "Allgemeine Geschäftsbedingungen",
      privacyPolicy: "Datenschutzerklärung",
      author: "Made by: @Pepiqity",
    },
  },

  homePage: {
    metadata: {
      title: "o123 | Events, Incentive-Reisen & besondere Erlebnisse",
      description:
        "Wir gestalten Business-Events, Incentive-Reisen, private Feiern und maßgeschneiderte Expeditionen rund um Menschen, Emotionen und Ziele.",
    },
  },

  journalPage: {
    metadata: {
      title: "Journal | o123",
      description:
        "Ideen, Psychologie und Erlebnisdesign. Darüber, wie Momente entstehen, die Menschen noch lange nach einem Event in Erinnerung bleiben.",
    },
  },

  contactPage: {
    metadata: {
      title: "Kontakt | o123",
      description:
        "Lass uns über dein Projekt sprechen. Kontaktiere o123 per E-Mail, WhatsApp oder Teams oder vereinbare einen Gesprächstermin.",
    },

    hero: {
      label: "Kontakt",
      heading: "Bereit, etwas Unvergessliches zu schaffen?",
      description:
        "Du brauchst weder ein fertiges Konzept noch ein detailliertes Briefing. Eine Idee, ein Bedürfnis oder ein Ziel, über das du sprechen möchtest, reicht aus. Genau dort können wir anfangen.",
    },

    details: {
      email: {
        label: "E-Mail",
        description: "Wir antworten normalerweise innerhalb von 24 Stunden.",
      },

      whatsapp: {
        label: "WhatsApp",
        description: "Der schnelle Weg, um über dein Projekt zu sprechen.",
      },

      teams: {
        label: "Teams",
        description: "Wir können uns auch online treffen.",
      },

      schedule: {
        label: "Schedule a call",
        value: "Wähle einen passenden Termin",
        description: "Ein kurzes Gespräch über deine Idee.",
      },

      location: {
        label: "Wrocław / Polen",
        value: "Wir arbeiten weltweit.",
      },
    },

    actions: {
      label: "Wie können wir helfen?",

      heading: {
        firstLine: "Wähle den besten",
        secondLine: "Weg, uns zu kontaktieren.",
      },

      quote: {
        title: "Request a quote",
        description:
          "Du hast ein konkretes Projekt, einen Termin oder ein Budget? Schick uns die wichtigsten Informationen.",
        cta: "Anfrage senden",
      },

      schedule: {
        title: "Schedule a call",
        description:
          "Du möchtest lieber mit einem Gespräch beginnen? Wähle einen passenden Termin und lass uns sprechen.",
        cta: "Gespräch vereinbaren",
      },

      chat: {
        title: "Let's chat",
        description:
          "Du möchtest uns schnell erreichen? Schreib uns per WhatsApp, Teams oder E-Mail.",
        cta: "Gespräch beginnen",
      },
    },

    closing: {
      firstLine: "Jedes Projekt beginnt",
      secondLine: "mit einem Gespräch — nicht mit",
      thirdLine: "einem fertigen Konzept.",
    },
  },
} as const satisfies DeepWiden<typeof pl>;

export default de;