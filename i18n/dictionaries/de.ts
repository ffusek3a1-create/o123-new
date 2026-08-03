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
        "Wir gestalten Erlebnisse, die auch lange nach ihrem Ende von Bedeutung bleiben.",

      emphasis:
        "Von Incentive-Reisen und Business-Events bis hin zu privaten Feiern und maßgeschneiderten Expeditionen.",

      outro:
        "Jede Geschichte beginnt für uns mit dem Verständnis für Menschen und Ziele – nicht mit einem vorgefertigten Ablauf. Deshalb erinnern sich die Teilnehmenden nicht nur daran, wo sie waren, sondern vor allem daran, was sie empfunden haben.",
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
        "Jedes unserer Projekte beginnt mit den richtigen Fragen und aufmerksamem Zuhören.",

      emphasisOne:
        "Wir glauben nicht an universelle Lösungen, denn jedes Erlebnis hat seinen eigenen Kontext.",

      middle:
        "Art, Tempo und Atmosphäre eines Events richten wir danach aus, wer ihr seid, wie sich die Menschen fühlen sollen und was ihr erreichen möchtet. Zuerst wollen wir verstehen,",

      emphasisTwo: "welche Emotionen dieser Moment auslösen soll,",

      outro: "alles Weitere entsteht als Konsequenz aus diesem Gespräch.",
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
              text: "Sie beginnen mit einem klaren Ziel.",
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
              text: "Ein gutes Erlebnis hat einen Anfang, einen Spannungsbogen und ein Finale. Deshalb gestalten wir Events wie Geschichten – mit einem Rhythmus, der die Teilnehmenden vom ersten bis zum letzten Moment führt.",
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
            "Wir gestalten Business-Events, die Beziehungen aufbauen, Vertrauen stärken und vermitteln, was sich mit keiner Präsentation ausdrücken lässt. Konferenzen, Produktpremieren, Galas und Partnertreffen entwickeln wir rund um die Menschen und das Ziel der Veranstaltung. So hinterlassen sie noch lange nach ihrem Ende einen bleibenden Eindruck.",
        },
        {
          id: "incentive",
          title: "INCENTIVE",
          description:
            "Wir gestalten Incentive-Reisen und Motivationsreisen, die zu wirkungsvollen Instrumenten für mehr Engagement und Loyalität im Team werden. Von exklusiven Reisen für Führungskräfte bis hin zu mehrtägigen Expeditionen entwickeln wir Erlebnisse, die auf die Menschen, den Ort und das Ziel der Reise abgestimmt sind.",
        },
        {
          id: "private",
          title: "PRIVATE EVENTS",
          description:
            "Die wichtigsten Momente im Leben verdienen einen außergewöhnlichen Rahmen. Wir organisieren private Veranstaltungen wie Verlobungen, Jubiläen, Geburtstage und Familienfeiern, kümmern uns um jedes Detail und schaffen eine Atmosphäre, an die sich die Gäste noch viele Jahre erinnern werden.",
        },
        {
          id: "expeditions",
          title: "EXPEDITIONEN",
          description:
            "Nicht jede Reise führt in ein Hotel oder einen Konferenzraum. Wir organisieren maßgeschneiderte Expeditionen – von Safaris und Offroad-Abenteuern bis hin zu außergewöhnlichen Reisen an Orte, die in klassischen Reisekatalogen kaum zu finden sind. Entscheidend ist nicht das Ziel, sondern das Erlebnis.",
        },
        {
          id: "team",
          title: "TEAM",
          description:
            "Starke Teams entstehen durch gemeinsame Erlebnisse. Wir gestalten Teambuilding-Events, Outdoor-Aktivitäten, Workshops und Reisen, die die Zusammenarbeit fördern, Beziehungen stärken und neue Perspektiven aufeinander eröffnen.",
        },
        {
          id: "bespoke",
          title: "INDIVIDUELL",
          description:
            "Manche Ideen passen in keine vorgefertigte Kategorie. Wenn ein Event einen außergewöhnlichen Ansatz erfordert, entwickeln wir die passende Lösung von Grund auf. Dabei verbinden wir Kreativität mit präziser Organisation – unabhängig von Umfang und Veranstaltungsort.",
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
      firstLine: "Bereit, etwas",
      secondLine: "Unvergessliches zu schaffen?",
    },

    description:
      "Jede Geschichte ist anders. Deshalb beginnen wir nie mit fertigen Konzepten, sondern mit einem Gespräch darüber, was die Menschen erleben und in Erinnerung behalten sollen. Alles Weitere gestalten wir rund um die Menschen, den Ort und die Emotionen.",

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
      email: "o123@event.pl",

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
} as const satisfies DeepWiden<typeof pl>;

export default de;
