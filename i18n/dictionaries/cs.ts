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

const cs = {
  navigation: {
    scheduleCall: "Schedule a call",
    requestQuote: "Request a quote",

    menuDescriptions: {
      services: "Co vytváříme",
      about: "Proč existuje o123",
      journal: "Příběhy a myšlenky",
      contact: "Začněme rozhovor",
    },
  },

  hero: {
    heading: {
      firstLine: "Toužíte po něčem",
      secondLine: "víc než jen",
      thirdLine: "běžné akci?",
    },

    paragraph: {
      intro:
        "Navrhujeme akce, které zůstávají důležité i poté, co skončí.",

      emphasis:
        "Od incentivních cest a firemních akcí po soukromé oslavy a projekty vytvářené zcela na míru.",

      outro:
        "Začínáme u lidí a cíle, ne u hotového plánu. Všechno ostatní stavíme kolem toho, co je pro účastníky skutečně důležité.",
    },
  },

  introduction: {
    label: "VÍTEJTE V O123",

    heading: {
      firstLine: "Od první otázky",
      secondLine: "k jedinečnému",

      animated: ["projektu.", "eventu.", "zážitku."],
    },

    paragraph: {
      intro:
        "Každý projekt začínáme rozhovorem.",

      emphasisOne:
        "Neexistuje jeden recept na dobrou akci, protože výchozí situace je pokaždé jiná.",

      middle:
        "Formát, tempo a charakter přizpůsobujeme lidem, příležitosti a cíli. Nejprve chceme pochopit,",

      emphasisTwo:
        "co si mají účastníci z celé zkušenosti odnést,",

      outro:
        "a teprve potom skládáme vše, co k tomu má vést.",
    },
  },

  services: {
    philosophy: {
      heading: {
        firstLine: "Jak navrhujeme",
        secondLine: "zážitky",
      },

      principles: [
        {
          number: "01",
          category: "Design zážitků",
          title: "Cíl & záměr",
          description: [
            {
              text: "Než vybereme místo, aktivity nebo směr celé akce, chceme nejprve pochopit, ",
            },
            {
              text: "proč vzniká.",
              emphasized: true,
            },
            {
              text: " Dobré zážitky nezačínají nápady. ",
            },
            {
              text: "Začínají odpovědí na tuto otázku.",
              emphasized: true,
            },
          ],
        },
        {
          number: "02",
          category: "Vyprávění",
          title: "Rytmus & emoce",
          description: [
            {
              text: "Záleží nám na tom, aby celá akce působila plynule a přirozeně — od prvního kontaktu s účastníky až po její závěr.",
            },
          ],
        },
        {
          number: "03",
          category: "Lidé",
          title: "Začínáme u lidí",
          description: [
            {
              text: "Stejné místo může jednu skupinu nadchnout a druhou nechat zcela chladnou. Než navrhneme konkrétní směr, chceme ",
            },
            {
              text: "pochopit lidi,",
              emphasized: true,
            },
            {
              text: " pro které daný zážitek vytváříme.",
            },
          ],
        },
        {
          number: "04",
          category: "Překvapení",
          title: "Trvalá stopa",
          description: [
            {
              text: "Nejsilnější vzpomínky vznikají ve chvíli, kdy se stane něco nečekaného. Proto vědomě navrhujeme momenty, které překvapí a zůstanou s účastníky ještě dlouho po skončení akce.",
            },
          ],
        },
        {
          number: "05",
          category: "Klid",
          title: "O vše se postaráme",
          description: [
            {
              text: "V zákulisí se odehrávají stovky rozhodnutí. Naším úkolem je postarat se o každé z nich, abyste se mohli plně soustředit na samotný zážitek.",
            },
          ],
        },
        {
          number: "06",
          category: "Transparentnost",
          title: "Jasná pravidla",
          description: [
            {
              text: "Věříme, že důvěra začíná jasnými pravidly. Proto od samého začátku otevřeně mluvíme o rozsahu spolupráce, nákladech a odpovědnosti.",
            },
          ],
        },
      ],
    },

    categories: {
      heading: {
        firstLine: "Jaké zážitky",
        secondLine: "vytváříme?",
      },

      description:
        "Každý projekt začíná rozhovorem a pochopením jeho cíle. Ať už organizujeme firemní akci, soukromou oslavu nebo expedici na druhý konec světa, každý zážitek navrhujeme s ohledem na lidi, emoce a místo.",

      items: [
        {
          id: "business",
          title: "BUSINESS",
          description:
            "Navrhujeme konference, produktové premiéry, galavečery a setkání s partnery s konkrétním obchodním cílem. Nejprve si ujasníme, čeho má akce dosáhnout, a teprve potom volíme její formát, místo a průběh.",
        },
        {
          id: "incentive",
          title: "INCENTIVE",
          description:
            "Vytváříme incentivní cesty pro týmy, klienty i vedení — od krátkých pobytů až po rozsáhlejší vícedenní programy. Každou cestu stavíme kolem konkrétní skupiny, cíle a místa místo toho, abychom vycházeli z hotového schématu.",
        },
        {
          id: "private",
          title: "SOUKROMÉ",
          description:
            "Organizujeme soukromé akce — narozeniny, výročí, zásnuby i rodinné oslavy. Místo hotového scénáře nejprve řešíme, jaký charakter má setkání mít a co je skutečně důležité pro lidi, kteří budou jeho součástí.",
        },
        {
          id: "expeditions",
          title: "EXPEDICE",
          description:
            "Navrhujeme cesty a expedice mimo běžné turistické trasy — od safari a terénních výprav po méně obvyklé destinace a místa. Program vzniká od základu podle toho, co chtějí účastníci zažít a jakým způsobem chtějí cestovat.",
        },
        {
          id: "team",
          title: "TÝM",
          description:
            "Vytváříme výjezdy, aktivity a setkání, při kterých mohou týmy trávit společný čas mimo běžné pracovní prostředí. Nezačínáme katalogem atrakcí — formát volíme podle lidí, dynamiky týmu a toho, proč se vlastně setkáváte.",
        },
        {
          id: "bespoke",
          title: "NA MÍRU",
          description:
            "Ne každý nápad zapadá do existující kategorie. Pokud projekt vyžaduje neobvyklý formát, místo nebo způsob realizace, vytvoříme ho od základu a celý proces přizpůsobíme konkrétní situaci.",
        },
      ],
    },
  },

  bridgeInterlude: {
    accessibility: {
      heading:
        "Okamžiky, na kterých záleží. Zážitky, které zůstávají v paměti.",
      cityImageAlt: "Pohled na Vratislav",
      bridgeImageAlt:
        "Ilustrace mostu symbolizující vratislavské kořeny značky o123",
    },
  },

  journal: {
    introductionHeading: {
      firstLine: "Zážitky",
      secondLine: "bez hranic",
    },

    aboutLabel: "Poznejte o123",

    identity: {
      brand: "(O123) Značka",
      headquarters: "(WRO) Sídlo",
      reach: "(PL/EU) Působnost",
    },

    article: {
      title: "Proč si pamatujeme emoce, a ne samotné události?",
      date: "16. srpna 2026",
      alt: "Článek o tom, proč si pamatujeme emoce, a ne samotné události",
    },

    readMoreLabel: "Číst více",

    closingStatement: "Každý příběh začíná rozhovorem",

    accessibility: {
      articleNavigation: "Navigace mezi články",
      nextArticle: "Další článek",
      previousArticle: "Předchozí článek",
    },
  },

  contact: {
    availability: "Open for projects",
    establishment: "Est. Wrocław // Q3 2026",

    heading: {
      firstLine: "Začněme",
      secondLine: "rozhovorem.",
    },

    description:
      "Nemusíte k nám přijít s hotovým scénářem. Stačí nápad, příležitost nebo cíl, o kterém chcete mluvit. Právě od toho začínáme.",

    actions: {
      startProject: "Start a project",
      letsChat: "Let's chat",
    },

    accessibility: {
      sectionLabel: "Kontakt",
      socialMedia: "Sociální sítě",
    },

    details: {
      contactLabel: "Kontakt",
      addressFirstLine: "Borowska 182,",
      addressSecondLine: "50-557 Wrocław",
      phone: "(+48) 533 615 713",

      emailPromptFirstLine: "Nebaví vás formuláře?",
      emailPromptSecondLine: "Napište nám e-mail",
      email: "hello@o123.pl",

      mediaLabel: "Sociální sítě",
    },

    footer: {
      copyright: "© Autorská práva 2026",
      brand: "O123",
      terms: "Obchodní podmínky",
      privacyPolicy: "Zásady ochrany soukromí",
      author: "Made by: @Pepiqity",
    },
  },

  homePage: {
    metadata: {
      title: "o123 | Eventy, incentivní cesty a jedinečné zážitky",
      description:
        "Navrhujeme firemní akce, incentivní cesty, soukromé oslavy a expedice na míru kolem lidí, emocí a jasného cíle.",
    },
  },

  journalPage: {
    metadata: {
      title: "Journal | o123",
      description:
        "Myšlenky, psychologie a design zážitků. O tom, jak vytvářet momenty, které v lidech zůstávají ještě dlouho po skončení akce.",
    },
  },

  contactPage: {
    metadata: {
      title: "Kontakt | o123",
      description:
        "Promluvme si o vašem projektu. Kontaktujte o123 e-mailem, přes WhatsApp nebo Teams, případně si domluvte hovor.",
    },

    hero: {
      label: "Kontakt",
      heading: "Jste připraveni vytvořit něco nezapomenutelného?",
      description:
        "Nemusíte mít hotový scénář ani podrobný brief. Stačí nápad, potřeba nebo cíl, o kterém chcete mluvit. Právě tam můžeme začít.",
    },

    details: {
      email: {
        label: "E-mail",
        description: "Obvykle odpovídáme do 24 hodin.",
      },

      whatsapp: {
        label: "WhatsApp",
        description: "Rychlý způsob, jak se spojit ohledně projektu.",
      },

      teams: {
        label: "Teams",
        description: "Můžeme se setkat také online.",
      },

      schedule: {
        label: "Schedule a call",
        value: "Vyberte si vhodný termín",
        description: "Krátký rozhovor o vašem nápadu.",
      },

      location: {
        label: "Wrocław / Polsko",
        value: "Působíme po celém světě.",
      },
    },

    actions: {
      label: "Jak vám můžeme pomoci?",

      heading: {
        firstLine: "Vyberte nejlepší",
        secondLine: "způsob, jak se spojit.",
      },

      quote: {
        title: "Request a quote",
        description:
          "Máte konkrétní projekt, termín nebo rozpočet? Pošlete nám několik základních informací.",
        cta: "Odeslat poptávku",
      },

      schedule: {
        title: "Schedule a call",
        description:
          "Chcete začít rozhovorem? Vyberte si vhodný termín a promluvme si.",
        cta: "Domluvit hovor",
      },

      chat: {
        title: "Let's chat",
        description:
          "Potřebujete rychlý kontakt? Napište nám přes WhatsApp, Teams nebo e-mail.",
        cta: "Začít rozhovor",
      },
    },

    closing: {
      firstLine: "Každý projekt začínáme",
      secondLine: "rozhovorem — ne hotovým",
      thirdLine: "scénářem.",
    },
  },
} as const satisfies DeepWiden<typeof pl>;

export default cs;