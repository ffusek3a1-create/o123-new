import type { Metadata } from "next";

import Container from "@/components/ui/Container";
import JournalBento from "@/features/journal/components/JournalBento";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

type JournalPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: JournalPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = dictionary.journalPage.metadata.title;
  const description = dictionary.journalPage.metadata.description;

  return {
    title,
    description,

    alternates: {
      canonical: `/${locale}/journal`,
      languages: {
        pl: "/pl/journal",
        en: "/en/journal",
        de: "/de/journal",
        cs: "/cs/journal",
        "x-default": "/pl/journal",
      },
    },

    openGraph: {
      type: "website",
      siteName: "o123",
      title,
      description,
      url: `/${locale}/journal`,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function JournalPage({
  params,
}: JournalPageProps) {
  const { locale } = await params;

  return (
    <main className="min-h-screen bg-[#1C2A25] text-[var(--color-sand)]">
      <section>
        <Container className="py-[72px]">
          <h1 className="type-heading type-heading-xl">
            Journal
          </h1>

          <div className="mt-[72px]">
            <JournalBento locale={locale} />
          </div>
        </Container>
      </section>
    </main>
  );
}