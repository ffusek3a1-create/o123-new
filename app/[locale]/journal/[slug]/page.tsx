import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import ArticleHero from "@/features/journal/components/article/ArticleHero";
import { getJournalContent } from "@/features/journal/content";
import {
  getJournalArticleByCode,
  getJournalArticleBySlug,
  getJournalArticles,
} from "@/features/journal/data/articles";
import type { Locale } from "@/i18n/config";

type ArticlePageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

const articleUi = {
  pl: {
    inThisArticle: "W tym artykule",
    articleSections: "Sekcje artykułu",
    previousArticle: "Poprzedni artykuł",
    nextArticle: "Następny artykuł",
    backToJournal: "Wróć do Journal",
  },
  en: {
    inThisArticle: "In this article",
    articleSections: "Article sections",
    previousArticle: "Previous article",
    nextArticle: "Next article",
    backToJournal: "Back to Journal",
  },
  de: {
    inThisArticle: "In diesem Artikel",
    articleSections: "Abschnitte des Artikels",
    previousArticle: "Vorheriger Artikel",
    nextArticle: "Nächster Artikel",
    backToJournal: "Zurück zum Journal",
  },
  cs: {
    inThisArticle: "V tomto článku",
    articleSections: "Sekce článku",
    previousArticle: "Předchozí článek",
    nextArticle: "Další článek",
    backToJournal: "Zpět do Journalu",
  },
} as const satisfies Record<
  Locale,
  {
    inThisArticle: string;
    articleSections: string;
    previousArticle: string;
    nextArticle: string;
    backToJournal: string;
  }
>;

const articleSections = {
  pl: {
    "dlaczego-pamietamy-emocje": [
      { id: "co-zostaje-w-pamieci", label: "Co naprawdę zostaje w pamięci?" },
      { id: "pamiec-nie-zapisuje-rownomiernie", label: "Pamięć nie zapisuje wydarzeń równomiernie" },
      { id: "peak-end-rule", label: "Peak-End Rule" },
      { id: "emocje-jako-mechanizm-pamieci", label: "Emocje jako mechanizm pamięci" },
      { id: "nie-trzeba-spektakularnych-momentow", label: "Nie trzeba spektakularnych momentów" },
      { id: "projektuj-to-co-ma-zostac", label: "Projektuj to, co ma zostać" },
    ],
    "fyre-festival-nie-upadl-przez-brak-pieniedzy": [
      { id: "katastrofa-zaczela-sie-wczesniej", label: "Katastrofa zaczęła się długo przed Bahamami" },
      { id: "marketing-stworzyl-produkt", label: "Marketing stworzył produkt, którego jeszcze nie było" },
      { id: "moment-w-ktorym-nalezalo-powiedziec-stop", label: "Moment, w którym należało powiedzieć „stop”" },
      { id: "problemem-nie-byl-brak-pieniedzy", label: "Problemem nie był brak pieniędzy" },
      { id: "komunikacja-zaczyna-zastepowac-operacje", label: "Gdy komunikacja zaczyna zastępować operacje" },
      { id: "obietnica-jest-czescia-produktu", label: "Obietnica jest częścią produktu" },
    ],
    "tomorrowland-po-pozarze-main-stage": [
      { id: "moment-w-ktorym-znika-centrum-wydarzenia", label: "Moment, w którym znika centrum wydarzenia" },
      { id: "pierwsza-decyzja-nie-obiecywac-niemozliwego", label: "Pierwsza decyzja: nie obiecywać niemożliwego" },
      { id: "zamiast-jednego-planu-dwa-scenariusze", label: "Zamiast jednego planu — dwa scenariusze" },
      { id: "bezpieczenstwo-przed-spektaklem", label: "Bezpieczeństwo przed spektaklem" },
      { id: "mniej-niz-48-godzin", label: "Mniej niż 48 godzin" },
      { id: "marka-ktora-nie-udaje-ze-nic-sie-nie-stalo", label: "Marka, która nie udaje, że nic się nie stało" },
      { id: "prawdziwa-odpornosc-eventu", label: "Prawdziwa odporność eventu" },
    ],
  },
  en: {
    "dlaczego-pamietamy-emocje": [
      { id: "co-zostaje-w-pamieci", label: "What actually stays in our memory?" },
      { id: "pamiec-nie-zapisuje-rownomiernie", label: "Memory does not record events evenly" },
      { id: "peak-end-rule", label: "Peak-End Rule" },
      { id: "emocje-jako-mechanizm-pamieci", label: "Emotion as a mechanism of memory" },
      { id: "nie-trzeba-spektakularnych-momentow", label: "Moments do not need to be spectacular" },
      { id: "projektuj-to-co-ma-zostac", label: "Design what should remain" },
    ],
    "fyre-festival-nie-upadl-przez-brak-pieniedzy": [
      { id: "katastrofa-zaczela-sie-wczesniej", label: "The disaster began long before the Bahamas" },
      { id: "marketing-stworzyl-produkt", label: "Marketing created a product that did not yet exist" },
      { id: "moment-w-ktorym-nalezalo-powiedziec-stop", label: "The moment when someone should have said “stop”" },
      { id: "problemem-nie-byl-brak-pieniedzy", label: "The problem was not a lack of money" },
      { id: "komunikacja-zaczyna-zastepowac-operacje", label: "When communication starts replacing operations" },
      { id: "obietnica-jest-czescia-produktu", label: "The promise is part of the product" },
    ],
    "tomorrowland-po-pozarze-main-stage": [
      { id: "moment-w-ktorym-znika-centrum-wydarzenia", label: "The moment the centre of the event disappears" },
      { id: "pierwsza-decyzja-nie-obiecywac-niemozliwego", label: "First decision: do not promise the impossible" },
      { id: "zamiast-jednego-planu-dwa-scenariusze", label: "Two scenarios instead of one plan" },
      { id: "bezpieczenstwo-przed-spektaklem", label: "Safety before spectacle" },
      { id: "mniej-niz-48-godzin", label: "Less than 48 hours" },
      { id: "marka-ktora-nie-udaje-ze-nic-sie-nie-stalo", label: "A brand that does not pretend nothing happened" },
      { id: "prawdziwa-odpornosc-eventu", label: "What event resilience really means" },
    ],
  },
  de: {
    "dlaczego-pamietamy-emocje": [
      { id: "co-zostaje-w-pamieci", label: "Was bleibt wirklich im Gedächtnis?" },
      { id: "pamiec-nie-zapisuje-rownomiernie", label: "Das Gedächtnis speichert Ereignisse nicht gleichmäßig" },
      { id: "peak-end-rule", label: "Peak-End Rule" },
      { id: "emocje-jako-mechanizm-pamieci", label: "Emotionen als Mechanismus der Erinnerung" },
      { id: "nie-trzeba-spektakularnych-momentow", label: "Momente müssen nicht spektakulär sein" },
      { id: "projektuj-to-co-ma-zostac", label: "Gestalte das, was bleiben soll" },
    ],
    "fyre-festival-nie-upadl-przez-brak-pieniedzy": [
      { id: "katastrofa-zaczela-sie-wczesniej", label: "Die Katastrophe begann lange vor den Bahamas" },
      { id: "marketing-stworzyl-produkt", label: "Marketing schuf ein Produkt, das noch gar nicht existierte" },
      { id: "moment-w-ktorym-nalezalo-powiedziec-stop", label: "Der Moment, in dem jemand „Stopp“ hätte sagen müssen" },
      { id: "problemem-nie-byl-brak-pieniedzy", label: "Das Problem war nicht fehlendes Geld" },
      { id: "komunikacja-zaczyna-zastepowac-operacje", label: "Wenn Kommunikation operative Arbeit ersetzt" },
      { id: "obietnica-jest-czescia-produktu", label: "Das Versprechen ist Teil des Produkts" },
    ],
    "tomorrowland-po-pozarze-main-stage": [
      { id: "moment-w-ktorym-znika-centrum-wydarzenia", label: "Der Moment, in dem das Zentrum des Events verschwindet" },
      { id: "pierwsza-decyzja-nie-obiecywac-niemozliwego", label: "Erste Entscheidung: nichts Unmögliches versprechen" },
      { id: "zamiast-jednego-planu-dwa-scenariusze", label: "Zwei Szenarien statt eines Plans" },
      { id: "bezpieczenstwo-przed-spektaklem", label: "Sicherheit vor Spektakel" },
      { id: "mniej-niz-48-godzin", label: "Weniger als 48 Stunden" },
      { id: "marka-ktora-nie-udaje-ze-nic-sie-nie-stalo", label: "Eine Marke, die nicht so tut, als wäre nichts passiert" },
      { id: "prawdziwa-odpornosc-eventu", label: "Was echte Event-Resilienz bedeutet" },
    ],
  },
  cs: {
    "dlaczego-pamietamy-emocje": [
      { id: "co-zostaje-w-pamieci", label: "Co nám skutečně zůstává v paměti?" },
      { id: "pamiec-nie-zapisuje-rownomiernie", label: "Paměť nezaznamenává události rovnoměrně" },
      { id: "peak-end-rule", label: "Peak-End Rule" },
      { id: "emocje-jako-mechanizm-pamieci", label: "Emoce jako mechanismus paměti" },
      { id: "nie-trzeba-spektakularnych-momentow", label: "Momenty nemusí být spektakulární" },
      { id: "projektuj-to-co-ma-zostac", label: "Navrhujte to, co má zůstat" },
    ],
    "fyre-festival-nie-upadl-przez-brak-pieniedzy": [
      { id: "katastrofa-zaczela-sie-wczesniej", label: "Katastrofa začala dávno před Bahamami" },
      { id: "marketing-stworzyl-produkt", label: "Marketing vytvořil produkt, který ještě neexistoval" },
      { id: "moment-w-ktorym-nalezalo-powiedziec-stop", label: "Okamžik, kdy měl někdo říct „stop”" },
      { id: "problemem-nie-byl-brak-pieniedzy", label: "Problémem nebyl nedostatek peněz" },
      { id: "komunikacja-zaczyna-zastepowac-operacje", label: "Když komunikace začíná nahrazovat provoz" },
      { id: "obietnica-jest-czescia-produktu", label: "Slib je součástí produktu" },
    ],
    "tomorrowland-po-pozarze-main-stage": [
      { id: "moment-w-ktorym-znika-centrum-wydarzenia", label: "Okamžik, kdy zmizí centrum události" },
      { id: "pierwsza-decyzja-nie-obiecywac-niemozliwego", label: "První rozhodnutí: neslibovat nemožné" },
      { id: "zamiast-jednego-planu-dwa-scenariusze", label: "Dva scénáře místo jednoho plánu" },
      { id: "bezpieczenstwo-przed-spektaklem", label: "Bezpečnost před spektáklem" },
      { id: "mniej-niz-48-godzin", label: "Méně než 48 hodin" },
      { id: "marka-ktora-nie-udaje-ze-nic-sie-nie-stalo", label: "Značka, která nepředstírá, že se nic nestalo" },
      { id: "prawdziwa-odpornosc-eventu", label: "Co skutečně znamená odolnost eventu" },
    ],
  },
} as const;

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getJournalArticleBySlug(locale, slug);

  if (!article) {
    return {};
  }

  const plArticle = getJournalArticleByCode("pl", article.code);
  const enArticle = getJournalArticleByCode("en", article.code);
  const deArticle = getJournalArticleByCode("de", article.code);
  const csArticle = getJournalArticleByCode("cs", article.code);

  const title = `${article.title} | o123 Journal`;
  const description = article.description;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}/journal/${article.slug}`,
      languages: {
        ...(plArticle && {
          pl: `/pl/journal/${plArticle.slug}`,
          "x-default": `/pl/journal/${plArticle.slug}`,
        }),
        ...(enArticle && {
          en: `/en/journal/${enArticle.slug}`,
        }),
        ...(deArticle && {
          de: `/de/journal/${deArticle.slug}`,
        }),
        ...(csArticle && {
          cs: `/cs/journal/${csArticle.slug}`,
        }),
      },
    },
    openGraph: {
      type: "article",
      siteName: "o123",
      title,
      description,
      url: `/${locale}/journal/${article.slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { locale, slug } = await params;
  const articles = getJournalArticles(locale);
  const ui = articleUi[locale];

  const article = getJournalArticleBySlug(locale, slug);

  if (!article) {
    notFound();
  }

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "o123",
        item: `https://o123.pl/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Journal",
        item: `https://o123.pl/${locale}/journal`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://o123.pl/${locale}/journal/${article.slug}`,
      },
    ],
  };

  const articleIndex = articles.findIndex(
    (item) => item.code === article.code,
  );

  const contentKeyByCode: Record<string, string> = {
    LOG_001: "dlaczego-pamietamy-emocje",
    REPORT_002: "fyre-festival-nie-upadl-przez-brak-pieniedzy",
    REPORT_003: "tomorrowland-po-pozarze-main-stage",
  };

  const contentKey = contentKeyByCode[article.code];
  const content = contentKey
    ? getJournalContent(locale, contentKey)
    : undefined;

  if (!content) {
    notFound();
  }

  const previousArticle =
    articleIndex > 0
      ? articles[articleIndex - 1]
      : undefined;

  const nextArticle =
    articleIndex < articles.length - 1
      ? articles[articleIndex + 1]
      : undefined;

  const sectionKeyByCode: Record<string, string> = {
    LOG_001: "dlaczego-pamietamy-emocje",
    REPORT_002: "fyre-festival-nie-upadl-przez-brak-pieniedzy",
    REPORT_003: "tomorrowland-po-pozarze-main-stage",
  };

  const sectionKey = sectionKeyByCode[article.code];
  const sectionsForLocale = articleSections[locale];
  const sections = sectionKey
    ? sectionsForLocale[
        sectionKey as keyof typeof sectionsForLocale
      ] ?? []
    : [];

  return (
    <main className="min-h-screen bg-[#1C2A25] text-[var(--color-sand)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Container>
        <article
          className="
            pb-[72px]
            pt-[72px]
            min-[834px]:pb-[96px]
            min-[834px]:pt-[72px]
            min-[1440px]:pb-[160px]
            min-[1440px]:pt-[72px]
          "
        >
          <ArticleHero
            article={article}
            articleNumber={articleIndex + 1}
            totalArticles={articles.length}
          />

          {/* =====================================================
              MOBILE / TABLET — TABLE OF CONTENTS
          ====================================================== */}
          {sections.length > 0 && (
            <aside
              className="
                mt-16
                border-t
                border-[var(--color-sand)]/20
                pt-6
                min-[834px]:mt-20
                min-[1440px]:hidden
              "
            >
              <p className="type-caption uppercase opacity-60">
                {ui.inThisArticle}
              </p>

              <nav
                aria-label={ui.articleSections}
                className="mt-8"
              >
                <ol
                  className="
                    grid
                    gap-y-5
                    min-[834px]:grid-cols-2
                    min-[834px]:gap-x-8
                    min-[834px]:gap-y-6
                  "
                >
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <Link
                        href={`#${section.id}`}
                        className="group flex items-start gap-4"
                      >
                        <span className="shrink-0 type-caption opacity-40">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <span className="type-text type-body transition-opacity duration-300 group-hover:opacity-60">
                          {section.label}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ol>
              </nav>
            </aside>
          )}

          {/* =====================================================
              ARTICLE BODY
          ====================================================== */}
          <div
            className="
              mt-16
              min-[834px]:mt-20
              min-[1440px]:grid
              min-[1440px]:grid-cols-[minmax(0,2fr)_320px]
              min-[1440px]:gap-16
            "
          >
            <div className="min-w-0">
              {content}
            </div>

            {/* Desktop sticky table of contents */}
            {sections.length > 0 && (
              <aside className="hidden min-[1440px]:block">
                <div className="sticky top-12 border-t border-[var(--color-sand)]/20 pt-6">
                  <p className="type-caption uppercase opacity-60">
                    {ui.inThisArticle}
                  </p>

                  <nav
                    aria-label={ui.articleSections}
                    className="mt-8"
                  >
                    <ol className="space-y-5">
                      {sections.map((section, index) => (
                        <li key={section.id}>
                          <Link
                            href={`#${section.id}`}
                            className="group flex items-start gap-4"
                          >
                            <span className="shrink-0 type-caption opacity-40">
                              {String(index + 1).padStart(2, "0")}
                            </span>

                            <span className="type-text type-body transition-opacity duration-300 group-hover:opacity-60">
                              {section.label}
                            </span>
                          </Link>
                        </li>
                      ))}
                    </ol>
                  </nav>
                </div>
              </aside>
            )}
          </div>

          {/* =====================================================
              ARTICLE NAVIGATION
          ====================================================== */}
          <nav
            aria-label={ui.articleSections}
            className="
              mt-14
              border-t
              border-[var(--color-sand)]/20
              pt-4
              min-[834px]:mt-16
              min-[1440px]:mt-24
              min-[1440px]:pt-8
            "
          >
            {/* Mobile */}
            <div className="min-[834px]:hidden">
              {previousArticle && (
                <Link
                  href={`/${locale}/journal/${previousArticle.slug}`}
                  className="group block border-b border-[var(--color-sand)]/20 pb-8 pt-4"
                >
                  <p className="type-caption uppercase opacity-60">
                    ← {ui.previousArticle}
                  </p>

                  <p className="mt-4 type-text type-lead transition-opacity duration-300 group-hover:opacity-60">
                    {previousArticle.title}
                  </p>
                </Link>
              )}

              {nextArticle && (
                <Link
                  href={`/${locale}/journal/${nextArticle.slug}`}
                  className="
                    group
                    block
                    border-b
                    border-[var(--color-sand)]/20
                    pb-8
                    pt-4
                  "
                >
                  <p className="type-caption uppercase opacity-60">
                    {ui.nextArticle} →
                  </p>

                  <p className="mt-4 type-text type-lead transition-opacity duration-300 group-hover:opacity-60">
                    {nextArticle.title}
                  </p>
                </Link>
              )}

              <Link
                href={`/${locale}/journal`}
                className="mt-8 inline-block type-button"
              >
                ← {ui.backToJournal}
              </Link>
            </div>

            {/* Tablet */}
            <div
              className="
                hidden
                min-[834px]:grid
                min-[834px]:grid-cols-2
                min-[834px]:gap-8
                min-[1440px]:hidden
              "
            >
              <div>
                {previousArticle && (
                  <Link
                    href={`/${locale}/journal/${previousArticle.slug}`}
                    className="group block"
                  >
                    <p className="type-caption uppercase opacity-60">
                      ← {ui.previousArticle}
                    </p>

                    <p className="mt-4 type-text type-lead transition-opacity duration-300 group-hover:opacity-60">
                      {previousArticle.title}
                    </p>
                  </Link>
                )}
              </div>

              <div className="text-right">
                {nextArticle && (
                  <Link
                    href={`/${locale}/journal/${nextArticle.slug}`}
                    className="group block"
                  >
                    <p className="type-caption uppercase opacity-60">
                      {ui.nextArticle} →
                    </p>

                    <p className="mt-4 type-text type-lead transition-opacity duration-300 group-hover:opacity-60">
                      {nextArticle.title}
                    </p>
                  </Link>
                )}
              </div>

              <div className="col-span-2 mt-8 border-t border-[var(--color-sand)]/20 pt-8 text-center">
                <Link
                  href={`/${locale}/journal`}
                  className="type-button"
                >
                  ← {ui.backToJournal}
                </Link>
              </div>
            </div>

            {/* Desktop */}
            <div
              className="
                hidden
                min-[1440px]:grid
                min-[1440px]:grid-cols-2
                min-[1440px]:items-center
                min-[1440px]:gap-12
              "
            >
              <div className="flex items-center">
                {previousArticle ? (
                  <Link
                    href={`/${locale}/journal/${previousArticle.slug}`}
                    className="group block"
                  >
                    <p className="type-caption uppercase opacity-60">
                      ← {ui.previousArticle}
                    </p>

                    <p className="mt-4 max-w-[420px] type-text type-lead transition-opacity duration-300 group-hover:opacity-60">
                      {previousArticle.title}
                    </p>
                  </Link>
                ) : (
                  <Link
                    href={`/${locale}/journal`}
                    className="type-button whitespace-nowrap"
                  >
                    ← {ui.backToJournal}
                  </Link>
                )}
              </div>

              <div className="text-right">
                {nextArticle && (
                  <Link
                    href={`/${locale}/journal/${nextArticle.slug}`}
                    className="group ml-auto block"
                  >
                    <p className="type-caption uppercase opacity-60">
                      {ui.nextArticle} →
                    </p>

                    <p className="mt-4 ml-auto max-w-[420px] type-text type-lead transition-opacity duration-300 group-hover:opacity-60">
                      {nextArticle.title}
                    </p>
                  </Link>
                )}
              </div>
            </div>
          </nav>
        </article>
      </Container>
    </main>
  );
}