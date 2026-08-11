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
        "Navrhujeme zážitky, které mají význam ještě dlouho poté, co skončí.",

      emphasis:
        "Od incentivních cest a firemních akcí po soukromé oslavy a expedice šité na míru.",

      outro:
        "Každý příběh začínáme pochopením lidí a účelu, nikoli předem připraveným scénářem. Právě proto si účastníci nepamatují pouze místa, která navštívili, ale především emoce, které prožili.",
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
        "Každý náš projekt začíná správnými otázkami a pozorným nasloucháním.",

      emphasisOne:
        "Nevěříme na univerzální řešení, protože každý zážitek má svůj vlastní kontext.",

      middle:
        "Druh, tempo a atmosféru akce přizpůsobujeme tomu, kdo jste, jak se mají lidé cítit a čeho chcete dosáhnout. Nejprve chceme pochopit,",

      emphasisTwo: "jaké emoce má tento okamžik vyvolat,",

      outro: "a vše ostatní přirozeně vyplyne z tohoto rozhovoru.",
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
              text: "Začínají jasným cílem.",
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
              text: "Dobrý zážitek má začátek, napětí a závěr. Proto navrhujeme akce jako příběhy s rytmem, který účastníky přirozeně vede od prvního okamžiku až k poslednímu.",
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
            "Vytváříme firemní akce, které pomáhají budovat vztahy, posilovat důvěru a sdělovat to, co nelze předat prezentací. Konference, produktové premiéry, galavečery i setkání s partnery navrhujeme kolem lidí a cíle dané akce, takže zanechávají silný dojem ještě dlouho po skončení.",
        },
        {
          id: "incentive",
          title: "INCENTIVE",
          description:
            "Navrhujeme incentivní cesty a motivační programy, které se stávají skutečným nástrojem pro posilování angažovanosti a loajality týmů. Od komorních pobytů pro vedení až po vícedenní expedice vytváříme zážitky přizpůsobené lidem, místu a cíli celé cesty.",
        },
        {
          id: "private",
          title: "SOUKROMÉ",
          description:
            "Nejdůležitější okamžiky si zaslouží výjimečný rámec. Organizujeme soukromé události, jako jsou zásnuby, výročí, narozeniny nebo rodinné oslavy, pečujeme o každý detail a vytváříme atmosféru, na kterou budou hosté vzpomínat celé roky.",
        },
        {
          id: "expeditions",
          title: "EXPEDICE",
          description:
            "Ne každá cesta vede do hotelu nebo konferenčního sálu. Organizujeme expedice šité na míru — od safari a terénních dobrodružství až po výjimečné cesty na místa, která v běžných katalozích cestovních kanceláří jen tak nenajdete. Nejde o destinaci, ale o samotný zážitek.",
        },
        {
          id: "team",
          title: "TÝM",
          description:
            "Silný tým vzniká prostřednictvím společných zážitků. Navrhujeme teambuildingové akce, outdoorové aktivity, workshopy i cesty, které podporují spolupráci, posilují vztahy a umožňují lidem podívat se na sebe z úplně nové perspektivy.",
        },
        {
          id: "bespoke",
          title: "NA MÍRU",
          description:
            "Ne každý nápad se vejde do předem připravené kategorie. Pokud plánujete akci, která vyžaduje nestandardní přístup, vytvoříme řešení od samého začátku. Propojujeme kreativitu s přesnou organizací bez ohledu na rozsah nebo místo realizace.",
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
      firstLine: "Jste připraveni vytvořit",
      secondLine: "něco nezapomenutelného?",
    },

    description:
      "Každý příběh je jiný, a proto nikdy nezačínáme hotovým scénářem. Začínáme rozhovorem o tom, co mají lidé prožít a co si mají zapamatovat. Vše ostatní navrhujeme kolem lidí, místa a emocí.",

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
      email: "o123@event.pl",

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