export type PrincipleTextSegment = {
  text: string;
  emphasized?: boolean;
};

export type ExperiencePrinciple = {
  number: string;
  category: string;
  title: string;
  description: PrincipleTextSegment[];
};

export const experiencePrinciples: ExperiencePrinciple[] = [
  {
    number: "01",
    category: "Projektowanie doświadczeń",
    title: "Cel & intencja",
    description: [
      {
        text: "Zanim wybierzemy miejsce, aktywności czy kierunek wydarzenia, chcemy zrozumieć, ",
      },
      {
        text: "po co ono powstaje.",
        emphasized: true,
      },
      {
        text: " Dobre doświadczenia nie zaczynają się od pomysłów. ",
      },
      {
        text: "Zaczynają się od celu.",
        emphasized: true,
      },
    ],
  },
  {
    number: "02",
    category: "Narracja",
    title: "Rytm & emocje",
    description: [
      {
        text: "Dobre doświadczenie ma początek, napięcie i finał. Dlatego projektujemy wydarzenia jak historię — z rytmem, który prowadzi uczestników od pierwszej do ostatniej chwili.",
      },
    ],
  },
  {
    number: "03",
    category: "Ludzie",
    title: "Zaczynamy od ludzi",
    description: [
      {
        text: "To samo miejsce może zachwycić jednych i nie zrobić wrażenia na innych. Zanim zaproponujemy kierunek, chcemy ",
      },
      {
        text: "zrozumieć ludzi,",
        emphasized: true,
      },
      {
        text: " dla których tworzymy dane doświadczenie.",
      },
    ],
  },
  {
    number: "04",
    category: "Zaskoczenie",
    title: "Trwały ślad",
    description: [
      {
        text: "Najsilniejsze wspomnienia rodzą się wtedy, gdy wydarza się coś nieoczywistego. Dlatego świadomie projektujemy momenty, które zaskakują i zostają z uczestnikami na długo.",
      },
    ],
  },
  {
    number: "05",
    category: "Spokój",
    title: "My czuwamy",
    description: [
      {
        text: "Za kulisami dzieją się setki decyzji. Naszym zadaniem jest dopilnować każdej z nich, abyś mógł skupić się wyłącznie na doświadczeniu.",
      },
    ],
  },
  {
    number: "06",
    category: "Transparentność",
    title: "Jasne zasady",
    description: [
      {
        text: "Wierzymy, że zaufanie zaczyna się od jasnych zasad. Dlatego od początku otwarcie rozmawiamy o zakresie współpracy, kosztach i odpowiedzialności.",
      },
    ],
  },
];

export const serviceCategoryMedia = {
  business: {
    number: "01",
    images: ["/images/services/lobby.png", "/images/services/wine&hand.png"],
  },

  incentive: {
    number: "02",
    images: ["/images/services/quads.png", "/images/services/sea1.png"],
  },

  private: {
    number: "03",
    images: ["/images/services/plenner.png", "/images/services/sailing.png"],
  },

  expeditions: {
    number: "04",
    images: [
      "/images/services/team_activities.png",
      "/images/services/beach_people.png",
    ],
  },

  team: {
    number: "05",
    images: ["/images/services/beach_soccer.png", "/images/services/team.png"],
  },

  bespoke: {
    number: "06",
    images: [
      "/images/services/aesthetic.png",
      "/images/services/night_concert.png",
    ],
  },
} as const;

export type ServiceCategoryId = keyof typeof serviceCategoryMedia;

export type ServiceCategory = {
  id: ServiceCategoryId;
  number: string;
  title: string;
  description: string;
  images: readonly string[];
};
