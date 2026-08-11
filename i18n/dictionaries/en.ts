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
        "We design experiences that continue to matter long after they end.",

      emphasis:
        "From incentive travel and corporate events to private celebrations and bespoke expeditions.",

      outro:
        "Every story begins with understanding people and purpose rather than following a predefined scenario. That's why participants remember not where they were, but how they felt.",
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
        "Every project begins with thoughtful questions and careful listening.",

      emphasisOne:
        "We don't believe in one-size-fits-all solutions because every experience has its own context.",

      middle:
        "The pace, atmosphere and direction of every event are shaped around who you are, how you want people to feel and what you want to achieve. We first want to understand",

      emphasisTwo: "what emotions this moment should create,",

      outro: "and everything else naturally follows from that conversation.",
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
              text: "They begin with purpose.",
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
              text: "Every memorable experience has a beginning, rising tension and a meaningful finale. That's why we design events like stories, creating a rhythm that naturally guides participants from the very first moment to the last.",
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
            "We create business events that build relationships, strengthen trust and communicate what no presentation ever could. From conferences and product launches to galas and partner meetings, every event is designed around its people and purpose, leaving a lasting impression long after it ends.",
        },
        {
          id: "incentive",
          title: "INCENTIVE",
          description:
            "We design incentive trips and motivational journeys that become practical tools for strengthening engagement and team loyalty. From intimate executive retreats to multi-day expeditions, each experience is shaped around the people, the destination and the purpose of the journey.",
        },
        {
          id: "private",
          title: "PRIVATE",
          description:
            "Life's most important moments deserve an exceptional setting. We organise private events such as engagements, anniversaries, birthdays and family celebrations, taking care of every detail and creating an atmosphere guests will remember for years.",
        },
        {
          id: "expeditions",
          title: "EXPEDITIONS",
          description:
            "Not every journey leads to a hotel or conference room. We create bespoke expeditions, from safaris and off-road adventures to extraordinary journeys through places rarely found in traditional travel catalogues. The destination matters less than the experience itself.",
        },
        {
          id: "team",
          title: "TEAM",
          description:
            "Strong teams are built through shared experiences. We design team-building events, outdoor activities, workshops and trips that improve collaboration, strengthen relationships and allow people to see one another from an entirely new perspective.",
        },
        {
          id: "bespoke",
          title: "BESPOKE",
          description:
            "Some ideas simply don't fit into predefined categories. When an event calls for a truly individual approach, we create the solution from the ground up, combining creativity with precise execution regardless of scale or location.",
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
      firstLine: "Ready to create",
      secondLine: "something unforgettable?",
    },

    description:
      "Every story is different, which is why we never start with ready-made scenarios. We begin with a conversation about what you want people to experience and remember. Everything else is designed around people, place and emotion.",

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

      email: "o123@event.pl",

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