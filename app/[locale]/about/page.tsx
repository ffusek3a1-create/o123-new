import type { Metadata } from "next";
import type { ReactNode } from "react";

import Container from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";

type AboutPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

const aboutContent = {
  pl: {
    metadata: {
      title: "O o123 | Projektujemy doświadczenia, które zostają",
      description:
        "Poznaj sposób myślenia o123 — skąd pochodzi marka, jak projektujemy doświadczenia i dlaczego zaczynamy od ludzi, emocji i celu.",
    },

    hero: {
      label: "About o123",
      index: "01/06",
      heading: (
        <>
          Najpierw ludzie.
          <br />
          Potem wszystko inne.
        </>
      ),
      description:
        "Miejsce, format i scenariusz są później. Najpierw trzeba wiedzieć, dla kogo to robimy, po co i z czym ludzie mają zostać po wszystkim.",
    },

    why: {
      label: "Why o123",
      index: "02/06",
      heading: "Skąd wzięła się nazwa o123?",
      paragraphs: [
        "Nazwa o123 ma bezpośredni związek z Wrocławiem. Litera „o” odnosi się do Odry, a „123” do mostów, z którymi kojarzone jest miasto. To prosty zapis miejsca, z którego marka się wywodzi.",
        "Wrocław pozostaje punktem odniesienia dla o123, ale projekty nie są ograniczone do jednego miasta ani jednego rodzaju wydarzeń. Zakres zawsze wynika z konkretnego zadania — od lokalnych realizacji po wyjazdy i wydarzenia organizowane za granicą.",
      ],
    },

    pointOfView: {
      label: "Our point of view",
      index: "03/06",
      heading: {
        firstLine: "Najpierw znaczenie.",
        secondLine: "Potem forma.",
      },
      items: [
        {
          number: "01",
          title: "Najpierw ludzie",
          description:
            "Zaczynamy od tego, dla kogo powstaje wydarzenie i jaki ma mieć sens. Format jest dopiero odpowiedzią na te pytania.",
        },
        {
          number: "02",
          title: "Emocje mają cel",
          description:
            "Nie dokładamy emocji dla efektu. Projektujemy je tak, żeby wspierały cel wydarzenia i to, co uczestnicy mają z niego wynieść.",
        },
        {
          number: "03",
          title: "Detale budują całość",
          description:
            "Rytm, kolejność momentów, przejścia i drobne decyzje wpływają na odbiór całego wydarzenia równie mocno jak jego najbardziej widoczne elementy.",
        },
      ],
    },

    independent: {
      label: "Independent by design",
      index: "04/06",
      heading: {
        firstLine: "Jeden punkt kontaktu.",
        secondLine: "Jedna odpowiedzialność.",
      },
      paragraphs: [
        "o123 prowadzę osobiście — od pierwszej rozmowy, przez kierunek kreatywny i koncepcję, po kluczowe decyzje w trakcie realizacji. Dzięki temu projekt nie przechodzi przez kolejne warstwy ludzi, a odpowiedzialność nie rozmywa się po drodze.",
        "Nie oznacza to pracy w pojedynkę. Każdy projekt wymaga innych kompetencji, dlatego do jego charakteru i skali dobieram odpowiednich partnerów, producentów i specjalistów.",
      ],
    },

    process: {
      label: "How we work",
      index: "05/06",
      heading: "Jak wygląda współpraca?",
      items: [
        {
          number: "01",
          title: "Rozmowa",
          description:
            "Zaczynam od zrozumienia celu, ludzi, budżetu i ograniczeń projektu. To ustawia kierunek dalszych decyzji.",
        },
        {
          number: "02",
          title: "Kierunek",
          description:
            "Na tej podstawie powstaje koncepcja, scenariusz i sposób realizacji dopasowany do konkretnej sytuacji.",
        },
        {
          number: "03",
          title: "Realizacja",
          description:
            "Dobieram właściwych partnerów i prowadzę projekt tak, żeby koncepcja działała równie dobrze w rzeczywistości.",
        },
      ],
    },

    closing: {
      label: "Let's create something worth remembering",
      index: "06/06",
      heading:
        "Każde dobre doświadczenie zaczyna się dużo wcześniej niż w momencie, gdy pojawia się pierwszy gość.",
      description:
        "Jeśli masz pomysł, potrzebę albo po prostu poczucie, że chcesz zrobić coś inaczej — od tego możemy zacząć.",
      cta: "Start a conversation",
    },
  },

  en: {
    metadata: {
      title: "About o123 | Experiences designed to stay with people",
      description:
        "Discover the thinking behind o123 — where the brand comes from, how we design experiences and why people, emotion and purpose always come first.",
    },

    hero: {
      label: "About o123",
      index: "01/06",
      heading: (
        <>
          People first.
          <br />
          Everything else follows.
        </>
      ),
      description:
        "The venue, format and programme come later. First, we need to know who it is for, why it matters and what people should carry with them afterwards.",
    },

    why: {
      label: "Why o123",
      index: "02/06",
      heading: "Where does the name o123 come from?",
      paragraphs: [
        "The name o123 is directly connected to Wrocław. The letter “o” refers to the Odra, while “123” refers to the bridges associated with the city. It is a simple reference to the place the brand comes from.",
        "Wrocław remains a point of reference for o123, but projects are not limited to one city or one type of event. The scope follows the brief — from local productions to trips and events delivered abroad.",
      ],
    },

    pointOfView: {
      label: "Our point of view",
      index: "03/06",
      heading: {
        firstLine: "Meaning first.",
        secondLine: "Form follows.",
      },
      items: [
        {
          number: "01",
          title: "People first",
          description:
            "We start with who the event is for and what it needs to achieve. The format comes later as an answer to those questions.",
        },
        {
          number: "02",
          title: "Emotion with purpose",
          description:
            "Emotion is not added for effect. It is designed to support the purpose of the event and what participants should take away from it.",
        },
        {
          number: "03",
          title: "Details shape the whole",
          description:
            "Rhythm, sequencing, transitions and small decisions can influence the experience just as much as its most visible elements.",
        },
      ],
    },

    independent: {
      label: "Independent by design",
      index: "04/06",
      heading: {
        firstLine: "One point of contact.",
        secondLine: "One responsibility.",
      },
      paragraphs: [
        "I personally lead o123 — from the first conversation and creative direction to the concept and key decisions throughout delivery. This keeps responsibility clear and avoids unnecessary layers between the idea and its execution.",
        "That does not mean working alone. Every project requires different expertise, so I bring in the right partners, producers and specialists for its specific scale and character.",
      ],
    },

    process: {
      label: "How we work",
      index: "05/06",
      heading: "How does the collaboration work?",
      items: [
        {
          number: "01",
          title: "Conversation",
          description:
            "I start by understanding the purpose, people, budget and constraints of the project. That sets the direction for everything that follows.",
        },
        {
          number: "02",
          title: "Direction",
          description:
            "From there, the concept, programme and delivery approach are shaped around the actual brief.",
        },
        {
          number: "03",
          title: "Delivery",
          description:
            "I bring in the right partners and lead the project so that the concept works just as well in reality as it does on paper.",
        },
      ],
    },

    closing: {
      label: "Let's create something worth remembering",
      index: "06/06",
      heading:
        "Every meaningful experience begins long before the first guest arrives.",
      description:
        "If you have an idea, a need or simply a feeling that you want to do something differently, that is enough to start the conversation.",
      cta: "Start a conversation",
    },
  },

  de: {
    metadata: {
      title: "Über o123 | Erlebnisse, die in Erinnerung bleiben",
      description:
        "Entdecken Sie die Idee hinter o123 — woher die Marke kommt, wie wir Erlebnisse gestalten und warum Menschen, Emotionen und Ziele immer am Anfang stehen.",
    },

    hero: {
      label: "About o123",
      index: "01/06",
      heading: (
        <>
          Zuerst die Menschen.
          <br />
          Alles andere kommt danach.
        </>
      ),
      description:
        "Ort, Format und Ablauf kommen später. Zuerst müssen wir wissen, für wen wir es machen, warum es zählt und was die Menschen danach mitnehmen sollen.",
    },

    why: {
      label: "Why o123",
      index: "02/06",
      heading: "Woher kommt der Name o123?",
      paragraphs: [
        "Der Name o123 ist direkt mit Wrocław verbunden. Das „o“ steht für die Odra, „123“ für die Brücken, mit denen die Stadt verbunden wird. Es ist ein einfacher Verweis auf den Ort, aus dem die Marke stammt.",
        "Wrocław bleibt ein Bezugspunkt für o123, aber die Projekte sind weder auf eine Stadt noch auf eine bestimmte Art von Veranstaltung beschränkt. Der Umfang richtet sich nach der Aufgabe — von lokalen Produktionen bis zu Reisen und Events im Ausland.",
      ],
    },

    pointOfView: {
      label: "Unsere Sichtweise",
      index: "03/06",
      heading: {
        firstLine: "Zuerst die Bedeutung.",
        secondLine: "Dann die Form.",
      },
      items: [
        {
          number: "01",
          title: "Menschen zuerst",
          description:
            "Am Anfang steht die Frage, für wen das Event entsteht und was es erreichen soll. Das Format ist erst die Antwort darauf.",
        },
        {
          number: "02",
          title: "Emotionen mit Zweck",
          description:
            "Emotionen sind kein Effekt um ihrer selbst willen. Sie sollen das Ziel der Veranstaltung und die gewünschte Wirkung unterstützen.",
        },
        {
          number: "03",
          title: "Details formen das Ganze",
          description:
            "Rhythmus, Reihenfolge, Übergänge und kleine Entscheidungen prägen das Erlebnis ebenso wie seine sichtbarsten Elemente.",
        },
      ],
    },

    independent: {
      label: "Independent by design",
      index: "04/06",
      heading: {
        firstLine: "Ein Ansprechpartner.",
        secondLine: "Eine Verantwortung.",
      },
      paragraphs: [
        "Ich führe o123 persönlich — vom ersten Gespräch über die kreative Richtung und Konzeption bis zu den wichtigsten Entscheidungen während der Umsetzung. So bleibt die Verantwortung klar und der Weg zwischen Idee und Realisierung kurz.",
        "Das bedeutet nicht, allein zu arbeiten. Jedes Projekt verlangt andere Kompetenzen. Deshalb stelle ich passend zu Umfang und Charakter die richtigen Partner, Produzenten und Spezialisten zusammen.",
      ],
    },

    process: {
      label: "So arbeiten wir",
      index: "05/06",
      heading: "Wie läuft die Zusammenarbeit ab?",
      items: [
        {
          number: "01",
          title: "Gespräch",
          description:
            "Am Anfang stehen Ziel, Menschen, Budget und Rahmenbedingungen des Projekts. Daraus ergibt sich die Richtung für alle weiteren Entscheidungen.",
        },
        {
          number: "02",
          title: "Richtung",
          description:
            "Darauf aufbauend entstehen Konzept, Ablauf und eine Umsetzung, die zur konkreten Aufgabe passt.",
        },
        {
          number: "03",
          title: "Umsetzung",
          description:
            "Ich stelle die passenden Partner zusammen und führe das Projekt so, dass die Idee auch in der Realität funktioniert.",
        },
      ],
    },

    closing: {
      label: "Lassen Sie uns etwas schaffen, das bleibt",
      index: "06/06",
      heading:
        "Jedes gute Erlebnis beginnt lange bevor der erste Gast eintrifft.",
      description:
        "Wenn Sie eine Idee, einen Bedarf oder einfach das Gefühl haben, etwas anders machen zu wollen, können wir genau dort anfangen.",
      cta: "Gespräch starten",
    },
  },

  cs: {
    metadata: {
      title: "O o123 | Zážitky, které v lidech zůstávají",
      description:
        "Poznejte myšlenku o123 — odkud značka pochází, jak navrhujeme zážitky a proč vždy začínáme u lidí, emocí a cíle.",
    },

    hero: {
      label: "About o123",
      index: "01/06",
      heading: (
        <>
          Nejdřív lidé.
          <br />
          Všechno ostatní potom.
        </>
      ),
      description:
        "Místo, formát a scénář přicházejí až potom. Nejdřív potřebujeme vědět, pro koho to děláme, proč na tom záleží a co si mají lidé odnést.",
    },

    why: {
      label: "Why o123",
      index: "02/06",
      heading: "Odkud se vzal název o123?",
      paragraphs: [
        "Název o123 přímo souvisí s Wrocławí. Písmeno „o“ odkazuje na Odru a „123“ na mosty, se kterými je město spojováno. Je to jednoduchý odkaz na místo, odkud značka pochází.",
        "Wrocław zůstává pro o123 výchozím bodem, projekty ale nejsou omezené na jedno město ani jeden typ události. Rozsah se vždy odvíjí od konkrétního zadání — od lokálních realizací po cesty a eventy v zahraničí.",
      ],
    },

    pointOfView: {
      label: "Náš pohled",
      index: "03/06",
      heading: {
        firstLine: "Nejdřív význam.",
        secondLine: "Potom forma.",
      },
      items: [
        {
          number: "01",
          title: "Nejdřív lidé",
          description:
            "Začínáme tím, pro koho event vzniká a čeho má dosáhnout. Formát přichází až jako odpověď na tyto otázky.",
        },
        {
          number: "02",
          title: "Emoce mají smysl",
          description:
            "Emoce nepřidáváme jen pro efekt. Pracujeme s nimi tak, aby podporovaly cíl události a její skutečný dopad.",
        },
        {
          number: "03",
          title: "Detaily tvoří celek",
          description:
            "Rytmus, pořadí momentů, přechody a drobná rozhodnutí ovlivňují zážitek stejně jako jeho nejviditelnější části.",
        },
      ],
    },

    independent: {
      label: "Independent by design",
      index: "04/06",
      heading: {
        firstLine: "Jeden kontaktní bod.",
        secondLine: "Jedna odpovědnost.",
      },
      paragraphs: [
        "o123 vedu osobně — od první konverzace přes kreativní směr a koncept až po klíčová rozhodnutí během realizace. Díky tomu zůstává odpovědnost jasná a cesta mezi nápadem a realizací krátká.",
        "To neznamená pracovat sám. Každý projekt vyžaduje jiné schopnosti, proto podle jeho charakteru a rozsahu vybírám správné partnery, producenty a specialisty.",
      ],
    },

    process: {
      label: "Jak pracujeme",
      index: "05/06",
      heading: "Jak spolupráce probíhá?",
      items: [
        {
          number: "01",
          title: "Rozhovor",
          description:
            "Začínám pochopením cíle, lidí, rozpočtu a omezení projektu. To určuje směr dalších rozhodnutí.",
        },
        {
          number: "02",
          title: "Směr",
          description:
            "Na tomto základě vzniká koncept, scénář a způsob realizace odpovídající konkrétnímu zadání.",
        },
        {
          number: "03",
          title: "Realizace",
          description:
            "Vybírám správné partnery a vedu projekt tak, aby koncept fungoval stejně dobře i ve skutečnosti.",
        },
      ],
    },

    closing: {
      label: "Vytvořme něco, co stojí za zapamatování",
      index: "06/06",
      heading:
        "Každý silný zážitek začíná dlouho před příchodem prvního hosta.",
      description:
        "Pokud máte nápad, potřebu nebo jen pocit, že chcete něco udělat jinak, můžeme začít právě tam.",
      cta: "Začít rozhovor",
    },
  },
} satisfies Record<
  Locale,
  {
    metadata: {
      title: string;
      description: string;
    };
    hero: {
      label: string;
      index: string;
      heading: ReactNode;
      description: string;
    };
    why: {
      label: string;
      index: string;
      heading: string;
      paragraphs: readonly [string, string];
    };
    pointOfView: {
      label: string;
      index: string;
      heading: {
        firstLine: string;
        secondLine: string;
      };
      items: readonly [
        {
          number: string;
          title: string;
          description: string;
        },
        {
          number: string;
          title: string;
          description: string;
        },
        {
          number: string;
          title: string;
          description: string;
        },
      ];
    };
    independent: {
      label: string;
      index: string;
      heading: {
        firstLine: string;
        secondLine: string;
      };
      paragraphs: readonly [string, string];
    };
    process: {
      label: string;
      index: string;
      heading: string;
      items: readonly [
        {
          number: string;
          title: string;
          description: string;
        },
        {
          number: string;
          title: string;
          description: string;
        },
        {
          number: string;
          title: string;
          description: string;
        },
      ];
    };
    closing: {
      label: string;
      index: string;
      heading: string;
      description: string;
      cta: string;
    };
  }
>;

export async function generateMetadata({
  params,
}: AboutPageProps): Promise<Metadata> {
  const { locale } = await params;
  const content = aboutContent[locale];

  const title = content.metadata.title;
  const description = content.metadata.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/about`,
      languages: {
        pl: "/pl/about",
        en: "/en/about",
        de: "/de/about",
        cs: "/cs/about",
        "x-default": "/pl/about",
      },
    },
    openGraph: {
      type: "website",
      siteName: "o123",
      title,
      description,
      url: `/${locale}/about`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function AboutPage({ params }: AboutPageProps) {
  const { locale } = await params;
  const content = aboutContent[locale];

  return (
    <main>
      {/* HERO */}
      <section className="relative min-h-[100svh] overflow-hidden bg-[var(--color-burgundy)] text-[var(--color-sand)]">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/videos/about-hero.mp4" type="video/mp4" />
        </video>

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(90deg,rgba(58,15,23,0.84)_0%,rgba(58,15,23,0.54)_45%,rgba(28,42,37,0.28)_100%)]"
        />

        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.04)_38%,rgba(0,0,0,0.48)_100%)]"
        />

        <Container className="relative z-10">
          <div className="flex min-h-[100svh] flex-col pb-8 pt-[184px] min-[834px]:pb-12 min-[834px]:pt-[200px] min-[1440px]:pb-[72px] min-[1440px]:pt-[216px]">
            <div className="flex items-center justify-between">
              <p className="type-caption uppercase opacity-60">
                {content.hero.label}
              </p>

              <p className="type-caption uppercase opacity-60">
                {content.hero.index}
              </p>
            </div>

            <div className="mt-auto flex flex-col">
              <h1 className="max-w-[1050px] type-display">
                {content.hero.heading}
              </h1>

              <p className="mt-8 max-w-[560px] type-text type-body min-[834px]:mt-10 min-[1440px]:mt-12">
                {content.hero.description}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* WHY O123 */}
      <section className="bg-[var(--color-sand)] text-[var(--color-burgundy)]">
        <Container className="py-16 min-[834px]:py-20 min-[1440px]:py-24">
          <div className="flex items-center justify-between">
            <p className="type-caption uppercase opacity-60">
              {content.why.label}
            </p>

            <p className="type-caption uppercase opacity-60">
              {content.why.index}
            </p>
          </div>

          <div className="mt-12 min-[834px]:mt-16 min-[1440px]:mt-20">
            <h2 className="max-w-[620px] type-heading type-heading-xl">
              {content.why.heading}
            </h2>

            <p className="mt-8 max-w-[760px] type-text type-body min-[834px]:mt-10 min-[1440px]:mt-12">
              {content.why.paragraphs[0]} {content.why.paragraphs[1]}
            </p>
          </div>
        </Container>
      </section>

      {/* OUR POINT OF VIEW */}
      <section className="border-t border-[var(--color-burgundy)]/20 bg-[var(--color-sand)] text-[var(--color-burgundy)]">
        <Container className="py-16 min-[834px]:py-20 min-[1440px]:py-24">
          <div className="flex items-center justify-between">
            <p className="type-caption uppercase opacity-60">
              {content.pointOfView.label}
            </p>

            <p className="type-caption uppercase opacity-60">
              {content.pointOfView.index}
            </p>
          </div>

          <h2 className="mt-12 max-w-[900px] type-heading type-heading-xl min-[834px]:mt-16">
            {content.pointOfView.heading.firstLine}
            <br />
            {content.pointOfView.heading.secondLine}
          </h2>

          <div className="mt-16 border-t border-[var(--color-burgundy)]/20 min-[834px]:mt-20 min-[1440px]:grid min-[1440px]:grid-cols-3">
            {content.pointOfView.items.map((item, index) => (
              <article
                key={item.number}
                className={[
                  "border-b border-[var(--color-burgundy)]/20 py-10 min-[834px]:py-12 min-[1440px]:min-h-[360px] min-[1440px]:border-b-0 min-[1440px]:px-8 min-[1440px]:py-12",
                  index > 0
                    ? "min-[1440px]:border-l min-[1440px]:border-[var(--color-burgundy)]/20"
                    : "min-[1440px]:pl-0",
                  index === content.pointOfView.items.length - 1
                    ? "min-[1440px]:pr-0"
                    : "",
                ].join(" ")}
              >
                <p className="type-caption uppercase opacity-60">
                  {item.number}
                </p>

                <h3 className="mt-10 max-w-[360px] type-heading type-heading-lg">
                  {item.title}
                </h3>

                <p className="mt-8 max-w-[420px] type-text type-body">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* INDEPENDENT BY DESIGN */}
      <section className="bg-[#17382f] text-[var(--color-sand)]">
        <Container className="py-16 min-[834px]:py-20 min-[1440px]:py-24">
          <div className="flex items-center justify-between">
            <p className="type-caption uppercase opacity-60">
              {content.independent.label}
            </p>

            <p className="type-caption uppercase opacity-60">
              {content.independent.index}
            </p>
          </div>

          <div className="mt-16 min-[834px]:mt-20">
            <h2 className="max-w-[680px] type-heading type-heading-xl">
              {content.independent.heading.firstLine}
              <br />
              {content.independent.heading.secondLine}
            </h2>

            <div className="mt-8 max-w-[760px] min-[834px]:mt-10 min-[1440px]:mt-12">
              <p className="type-text type-body">
                {content.independent.paragraphs[0]}
              </p>

              <p className="mt-6 type-text type-body min-[834px]:mt-8">
                {content.independent.paragraphs[1]}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* HOW WE WORK */}
      <section className="bg-[var(--color-sand)] text-[var(--color-burgundy)]">
        <Container className="py-16 min-[834px]:py-20 min-[1440px]:py-24">
          <div className="flex items-center justify-between">
            <p className="type-caption uppercase opacity-60">
              {content.process.label}
            </p>

            <p className="type-caption uppercase opacity-60">
              {content.process.index}
            </p>
          </div>

          <h2 className="mt-12 max-w-[900px] type-heading type-heading-xl min-[834px]:mt-16">
            {content.process.heading}
          </h2>

          <div className="mt-16 border-t border-[var(--color-burgundy)]/20 min-[834px]:mt-20 min-[1440px]:grid min-[1440px]:grid-cols-3">
            {content.process.items.map((item, index) => (
              <article
                key={item.number}
                className={[
                  "border-b border-[var(--color-burgundy)]/20 py-10 min-[834px]:py-12 min-[1440px]:min-h-[320px] min-[1440px]:border-b-0 min-[1440px]:px-8 min-[1440px]:py-12",
                  index > 0
                    ? "min-[1440px]:border-l min-[1440px]:border-[var(--color-burgundy)]/20"
                    : "min-[1440px]:pl-0",
                  index === content.process.items.length - 1
                    ? "min-[1440px]:pr-0"
                    : "",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-6">
                  <p className="type-caption uppercase opacity-60">
                    {item.number}
                  </p>
                </div>

                <h3 className="mt-10 type-heading type-heading-lg">
                  {item.title}
                </h3>

                <p className="mt-8 max-w-[420px] type-text type-body">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* CLOSING CTA */}
      <section className="bg-[var(--color-burgundy)] text-[var(--color-sand)]">
        <Container className="flex min-h-[720px] flex-col py-16 min-[834px]:min-h-[760px] min-[834px]:py-20 min-[1440px]:min-h-[820px] min-[1440px]:pb-[72px] min-[1440px]:pt-24">
          <div className="flex items-center justify-between">
            <p className="type-caption uppercase opacity-60">
              {content.closing.label}
            </p>

            <p className="type-caption uppercase opacity-60">
              {content.closing.index}
            </p>
          </div>

          <div className="flex flex-1 items-center py-16 min-[834px]:py-20 min-[1440px]:py-24">
            <div>
              <h2 className="max-w-[1100px] type-heading type-heading-xl">
                {content.closing.heading}
              </h2>

              <p className="mt-8 max-w-[560px] type-text type-body min-[834px]:mt-10 min-[1440px]:mt-12">
                {content.closing.description}
              </p>
            </div>
          </div>

          <a
            href={`/${locale}/contact`}
            className="group inline-flex w-fit items-center gap-3 type-button text-[var(--color-sand)]"
          >
            <span
              aria-hidden="true"
              className="relative top-px inline-flex shrink-0 items-center justify-center leading-none transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none"
            >
              →
            </span>

            <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current after:transition-transform after:duration-300 after:ease-out group-hover:after:scale-x-100 motion-reduce:after:transition-none">
              {content.closing.cta}
            </span>
          </a>
        </Container>
      </section>
    </main>
  );
}