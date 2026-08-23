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

const en = {
  navigation: {
    scheduleCall: "Schedule a call",
    requestQuote: "Request a quote",

    menuDescriptions: {
      services: "What we create",
      about: "Why o123 exists",
      journal: "Stories & insights",
      contact: "Start a conversation",
    },
  },

  hero: {
    heading: {
      firstLine: "Looking for something",
      secondLine: "more than just",
      thirdLine: "an event?",
    },

    paragraph: {
      intro:
        "We design events that continue to matter long after they are over.",

      emphasis:
        "From incentive travel and corporate events to private celebrations and projects created entirely around individual needs.",

      outro:
        "We start with people and purpose, not a ready-made plan. Everything else is built around what genuinely matters to the participants.",
    },
  },

  introduction: {
    label: "WELCOME TO O123",

    heading: {
      firstLine: "From the very first question",
      secondLine: "to a unique",

      animated: ["project.", "event.", "experience."],
    },

    paragraph: {
      intro:
        "Every project starts with a conversation.",

      emphasisOne:
        "There is no single formula for a good event because the starting point is different every time.",

      middle:
        "We shape the format, pace and character around the people, the occasion and the purpose. First, we want to understand",

      emphasisTwo:
        "what participants should take away from the experience,",

      outro:
        "and only then do we build everything that leads to it.",
    },
  },

  services: {
    philosophy: {
      heading: {
        firstLine: "How we design",
        secondLine: "experiences",
      },

      principles: [
        {
          number: "01",
          category: "Experience Design",
          title: "Purpose & Intent",
          description: [
            {
              text: "Before choosing a destination, activities or the direction of an event, we first want to understand ",
            },
            {
              text: "why it exists.",
              emphasized: true,
            },
            {
              text: " Great experiences don't begin with ideas. ",
            },
            {
              text: "They begin with the answer to that question.",
              emphasized: true,
            },
          ],
        },
        {
          number: "02",
          category: "Storytelling",
          title: "Rhythm & Emotion",
          description: [
            {
              text: "We care about how smoothly the whole event flows, from the first contact with participants through to the very end.",
            },
          ],
        },
        {
          number: "03",
          category: "People",
          title: "People First",
          description: [
            {
              text: "The same destination can inspire one group and leave another untouched. Before proposing any concept, we want to ",
            },
            {
              text: "understand the people",
              emphasized: true,
            },
            {
              text: " we're creating the experience for.",
            },
          ],
        },
        {
          number: "04",
          category: "Surprise",
          title: "Lasting Memories",
          description: [
            {
              text: "The strongest memories are created when something unexpected happens. That's why we intentionally design moments that surprise people and stay with them long after the event is over.",
            },
          ],
        },
        {
          number: "05",
          category: "Peace of Mind",
          title: "We've Got It Covered",
          description: [
            {
              text: "Hundreds of decisions are made behind the scenes. Our job is to take care of every one of them so you can focus entirely on the experience itself.",
            },
          ],
        },
        {
          number: "06",
          category: "Transparency",
          title: "Clear Principles",
          description: [
            {
              text: "We believe trust begins with transparency. That's why we're open about the scope of our collaboration, budgets and responsibilities from day one.",
            },
          ],
        },
      ],
    },

    categories: {
      heading: {
        firstLine: "What experiences",
        secondLine: "do we create?",
      },

      description:
        "Every project starts with a conversation and a clear understanding of its purpose. Whether we're organising a corporate event, a private celebration or an expedition to the other side of the world, every experience is designed around people, emotions and place.",

      items: [
        {
          id: "business",
          title: "BUSINESS",
          description:
            "We design conferences, launches, galas and partner events around a specific business objective. First we establish what the event needs to achieve, and only then do we define its format, location and flow.",
        },
        {
          id: "incentive",
          title: "INCENTIVE",
          description:
            "We create incentive trips for teams, clients and executive groups — from short getaways to more extensive multi-day programmes. Each one is built around the particular group, purpose and destination rather than a ready-made formula.",
        },
        {
          id: "private",
          title: "PRIVATE",
          description:
            "We organise private events — birthdays, anniversaries, engagements and family celebrations. Rather than starting with a ready-made scenario, we first establish what kind of occasion it should be and what genuinely matters to the people who will be part of it.",
        },
        {
          id: "expeditions",
          title: "EXPEDITIONS",
          description:
            "We design journeys and expeditions that go beyond the standard tourist itinerary — from safaris and off-road routes to less obvious destinations and places. Every programme is built from scratch around what participants want to experience and how they want to travel.",
        },
        {
          id: "team",
          title: "TEAM",
          description:
            "We create trips, activities and gatherings that give teams time together outside their usual working environment. We don't start with a catalogue of attractions — we choose the format around the people, the dynamics of the team and the reason for getting together.",
        },
        {
          id: "bespoke",
          title: "BESPOKE",
          description:
            "Not every idea fits neatly into an existing category. If a project calls for an unusual format, location or approach, we build it from the ground up and shape the entire process around the specific situation.",
        },
      ],
    },
  },

  bridgeInterlude: {
    accessibility: {
      heading: "Moments that matter. Experiences that stay with you.",

      cityImageAlt: "View of Wrocław",

      bridgeImageAlt: "Bridge illustration symbolising o123's roots in Wrocław",
    },
  },

  journal: {
    introductionHeading: {
      firstLine: "Experiences",
      secondLine: "beyond borders",
    },

    aboutLabel: "Discover o123",

    identity: {
      brand: "(O123) Brand",
      headquarters: "(WRO) Headquarters",
      reach: "(PL/EU) Reach",
    },

    article: {
      title: "Why do we remember emotions rather than events?",

      date: "Aug 16, 2026",

      alt: "Article about why we remember emotions rather than events",
    },

    readMoreLabel: "Read more",

    closingStatement: "Every story begins with a conversation",

    accessibility: {
      articleNavigation: "Article navigation",

      nextArticle: "Next article",

      previousArticle: "Previous article",
    },
  },

  contact: {
    availability: "Open for projects",

    establishment: "Est. Wrocław // Q3 2026",

    heading: {
      firstLine: "Let's start with",
      secondLine: "a conversation.",
    },

    description:
      "You don't need to come to us with a finished scenario. An idea, an occasion or a goal you'd like to talk about is enough. That's where we start.",

    actions: {
      startProject: "Start a project",

      letsChat: "Let's chat",
    },

    accessibility: {
      sectionLabel: "Contact",

      socialMedia: "Social media",
    },

    details: {
      contactLabel: "Contact",

      addressFirstLine: "Borowska 182,",

      addressSecondLine: "50-557 Wrocław",

      phone: "(+48) 533 615 713",

      emailPromptFirstLine: "Tired of contact forms? Send us",

      emailPromptSecondLine: "an email",

      email: "hello@o123.pl",

      mediaLabel: "Media",
    },

    footer: {
      copyright: "© Copyright 2026",

      brand: "O123",

      terms: "Terms",

      privacyPolicy: "Privacy Policy",

      author: "Made by: @Pepiqity",
    },
  },

  homePage: {
    metadata: {
      title: "o123 | Events, incentive travel & unique experiences",
      description:
        "We design corporate events, incentive travel, private celebrations and bespoke expeditions around people, emotion and purpose.",
    },
  },

  journalPage: {
    metadata: {
      title: "Journal | o123",
      description:
        "Ideas, psychology and experience design. Exploring how to create moments that stay with people long after an event is over.",
    },
  },

  contactPage: {
    metadata: {
      title: "Contact | o123",
      description:
        "Let's talk about your project. Contact o123 by email, WhatsApp or Teams, or schedule a call.",
    },

    hero: {
      label: "Contact",
      heading: "Ready to create something unforgettable?",
      description:
        "You don't need a finished scenario or a detailed brief. An idea, a need or a goal you'd like to talk about is enough. That's where we can start.",
    },

    details: {
      email: {
        label: "E-mail",
        description: "We usually reply within 24 hours.",
      },

      whatsapp: {
        label: "WhatsApp",
        description: "A quick way to get in touch about your project.",
      },

      teams: {
        label: "Teams",
        description: "We can also meet online.",
      },

      schedule: {
        label: "Schedule a call",
        value: "Choose a convenient time",
        description: "A short conversation about your idea.",
      },

      location: {
        label: "Wrocław / Poland",
        value: "We work globally.",
      },
    },

    actions: {
      label: "How can we help?",

      heading: {
        firstLine: "Choose the best",
        secondLine: "way to get in touch.",
      },

      quote: {
        title: "Request a quote",
        description:
          "Have a specific project, deadline or budget? Send us a few essential details.",
        cta: "Send an enquiry",
      },

      schedule: {
        title: "Schedule a call",
        description:
          "Prefer to start with a conversation? Choose a convenient time and let's talk.",
        cta: "Schedule a call",
      },

      chat: {
        title: "Let's chat",
        description:
          "Need to get in touch quickly? Message us via WhatsApp, Teams or email.",
        cta: "Start a conversation",
      },
    },

    closing: {
      firstLine: "Every project starts",
      secondLine: "with a conversation — not",
      thirdLine: "a ready-made scenario.",
    },
  },
} as const satisfies DeepWiden<typeof pl>;

export default en;