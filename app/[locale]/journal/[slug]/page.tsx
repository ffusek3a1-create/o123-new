import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import ArticleHero from "@/features/journal/components/article/ArticleHero";
import { journalContent } from "@/features/journal/content";
import { journalArticles } from "@/features/journal/data/articles";
import type { Locale } from "@/i18n/config";

type ArticlePageProps = {
  params: Promise<{
    locale: Locale;
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;

  const article = journalArticles.find(
    (article) => article.slug === slug,
  );

  if (!article) {
    return {};
  }

  return {
    title: `${article.title} | o123 Journal`,
    description: article.description,
  };
}

const firstArticleSections = [
  {
    id: "co-zostaje-w-pamieci",
    label: "Co naprawdę zostaje w pamięci?",
  },
  {
    id: "pamiec-nie-zapisuje-rownomiernie",
    label: "Pamięć nie zapisuje wydarzeń równomiernie",
  },
  {
    id: "peak-end-rule",
    label: "Peak-End Rule",
  },
  {
    id: "emocje-jako-mechanizm-pamieci",
    label: "Emocje jako mechanizm pamięci",
  },
  {
    id: "nie-trzeba-spektakularnych-momentow",
    label: "Nie trzeba spektakularnych momentów",
  },
  {
    id: "projektuj-to-co-ma-zostac",
    label: "Projektuj to, co ma zostać",
  },
];

const fyreFestivalSections = [
  {
    id: "katastrofa-zaczela-sie-wczesniej",
    label: "Katastrofa zaczęła się długo przed Bahamami",
  },
  {
    id: "marketing-stworzyl-produkt",
    label: "Marketing stworzył produkt, którego jeszcze nie było",
  },
  {
    id: "moment-w-ktorym-nalezalo-powiedziec-stop",
    label: "Moment, w którym należało powiedzieć „stop”",
  },
  {
    id: "problemem-nie-byl-brak-pieniedzy",
    label: "Problemem nie był brak pieniędzy",
  },
  {
    id: "komunikacja-zaczyna-zastepowac-operacje",
    label: "Gdy komunikacja zaczyna zastępować operacje",
  },
  {
    id: "obietnica-jest-czescia-produktu",
    label: "Obietnica jest częścią produktu",
  },
];

const tomorrowlandSections = [
  {
    id: "moment-w-ktorym-znika-centrum-wydarzenia",
    label: "Moment, w którym znika centrum wydarzenia",
  },
  {
    id: "pierwsza-decyzja-nie-obiecywac-niemozliwego",
    label: "Pierwsza decyzja: nie obiecywać niemożliwego",
  },
  {
    id: "zamiast-jednego-planu-dwa-scenariusze",
    label: "Zamiast jednego planu — dwa scenariusze",
  },
  {
    id: "bezpieczenstwo-przed-spektaklem",
    label: "Bezpieczeństwo przed spektaklem",
  },
  {
    id: "mniej-niz-48-godzin",
    label: "Mniej niż 48 godzin",
  },
  {
    id: "marka-ktora-nie-udaje-ze-nic-sie-nie-stalo",
    label: "Marka, która nie udaje, że nic się nie stało",
  },
  {
    id: "prawdziwa-odpornosc-eventu",
    label: "Prawdziwa odporność eventu",
  },
];

export default async function ArticlePage({
  params,
}: ArticlePageProps) {
  const { locale, slug } = await params;

  const articleIndex = journalArticles.findIndex(
    (article) => article.slug === slug,
  );

  if (articleIndex === -1) {
    notFound();
  }

  const article = journalArticles[articleIndex];

  const content =
    journalContent[
      article.slug as keyof typeof journalContent
    ];

  if (!content) {
    notFound();
  }

  const previousArticle =
    articleIndex > 0
      ? journalArticles[articleIndex - 1]
      : undefined;

  const nextArticle =
    articleIndex < journalArticles.length - 1
      ? journalArticles[articleIndex + 1]
      : undefined;

  const sections =
    article.slug === "dlaczego-pamietamy-emocje"
      ? firstArticleSections
      : article.slug === "fyre-festival-nie-upadl-przez-brak-pieniedzy"
        ? fyreFestivalSections
        : article.slug === "tomorrowland-po-pozarze-main-stage"
          ? tomorrowlandSections
          : [];

  return (
    <main className="min-h-screen bg-[#1C2A25] text-[var(--color-sand)]">
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
            totalArticles={journalArticles.length}
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
                In this article
              </p>

              <nav
                aria-label="Article sections"
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
                    In this article
                  </p>

                  <nav
                    aria-label="Article sections"
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
            aria-label="Article navigation"
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
                    ← Previous article
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
                    Next article →
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
                ← Back to Journal
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
                      ← Previous article
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
                      Next article →
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
                  ← Back to Journal
                </Link>
              </div>
            </div>

            {/* Desktop */}
            <div
              className="
                hidden
                min-[1440px]:grid
                min-[1440px]:grid-cols-[1fr_auto_1fr]
                min-[1440px]:items-end
                min-[1440px]:gap-12
              "
            >
              <div>
                {previousArticle && (
                  <Link
                    href={`/${locale}/journal/${previousArticle.slug}`}
                    className="group block"
                  >
                    <p className="type-caption uppercase opacity-60">
                      ← Previous article
                    </p>

                    <p className="mt-4 max-w-[420px] type-text type-lead transition-opacity duration-300 group-hover:opacity-60">
                      {previousArticle.title}
                    </p>
                  </Link>
                )}
              </div>

              <Link
                href={`/${locale}/journal`}
                className="type-button whitespace-nowrap"
              >
                ← Back to Journal
              </Link>

              <div className="text-right">
                {nextArticle && (
                  <Link
                    href={`/${locale}/journal/${nextArticle.slug}`}
                    className="group ml-auto block"
                  >
                    <p className="type-caption uppercase opacity-60">
                      Next article →
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