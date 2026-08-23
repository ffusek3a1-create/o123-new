import type { MetadataRoute } from "next";

import { getJournalArticles } from "@/features/journal/data/articles";
import {
  locales,
  type Locale,
} from "@/i18n/config";

const baseUrl = "https://www.o123.pl";

const staticRoutes = [
  "",
  "/about",
  "/contact",
  "/journal",
  "/privacy",
  "/terms",
] as const;

function createLanguageAlternates(route: string) {
  return Object.fromEntries(
    locales.map((locale) => [
      locale,
      `${baseUrl}/${locale}${route}`,
    ]),
  );
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap =
    locales.flatMap((locale) =>
      staticRoutes.map((route) => ({
        url: `${baseUrl}/${locale}${route}`,
        alternates: {
          languages: {
            ...createLanguageAlternates(route),
            "x-default": `${baseUrl}/pl${route}`,
          },
        },
      })),
    );

  const articleEntries: MetadataRoute.Sitemap =
    locales.flatMap((locale) => {
      const articles = getJournalArticles(locale);

      return articles.map((article) => {
        const languageAlternates = Object.fromEntries(
          locales.flatMap((alternateLocale) => {
            const alternateArticle = getJournalArticles(
              alternateLocale as Locale,
            ).find(
              (candidate) =>
                candidate.code === article.code,
            );

            if (!alternateArticle) {
              return [];
            }

            return [
              [
                alternateLocale,
                `${baseUrl}/${alternateLocale}/journal/${alternateArticle.slug}`,
              ],
            ];
          }),
        );

        const polishArticle = getJournalArticles("pl").find(
          (candidate) => candidate.code === article.code,
        );

        return {
          url: `${baseUrl}/${locale}/journal/${article.slug}`,
          alternates: {
            languages: {
              ...languageAlternates,
              ...(polishArticle && {
                "x-default": `${baseUrl}/pl/journal/${polishArticle.slug}`,
              }),
            },
          },
        };
      });
    });

  return [
    ...staticEntries,
    ...articleEntries,
  ];
}