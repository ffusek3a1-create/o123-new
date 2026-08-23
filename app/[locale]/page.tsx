import type { Metadata } from "next";

import GuideLines from "@/components/ui/GuideLines";
import BridgeInterlude from "@/features/home/BridgeInterlude";
import Contact from "@/features/home/Contact";
import Hero from "@/features/home/Hero";
import Introduction from "@/features/home/Introduction";
import Journal from "@/features/home/Journal";
import Services from "@/features/home/services/Services";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import BackToTop from "@/components/ui/BackToTop";

type HomePageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: HomePageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = dictionary.homePage.metadata.title;
  const description = dictionary.homePage.metadata.description;

  return {
    title,
    description,

    alternates: {
      canonical: `/${locale}`,
      languages: {
        pl: "/pl",
        en: "/en",
        de: "/de",
        cs: "/cs",
        "x-default": "/pl",
      },
    },

    openGraph: {
      type: "website",
      siteName: "o123",
      title,
      description,
      url: `/${locale}`,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function HomePage({ params }: HomePageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "o123",
    url: "https://o123.pl",
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />

      <Hero
        heading={dictionary.hero.heading}
        paragraph={dictionary.hero.paragraph}
      />

      <Introduction content={dictionary.introduction} />

      <Services
        philosophy={dictionary.services.philosophy}
        categories={dictionary.services.categories}
      />

      <BridgeInterlude
        accessibility={dictionary.bridgeInterlude.accessibility}
      />

      <div className="relative overflow-hidden bg-[#1C2A25] text-[var(--color-sand)]">
        <GuideLines
          className="border-[var(--color-sand)]/35"
          leftTopCaption="05/05"
          leftBottomCaption="o123 || Journal"
          rightCaption="Stories worth remembering"
        />

        <Journal
          content={dictionary.journal}
          locale={locale}
        />

        <div
          aria-hidden="true"
          className="mx-[var(--page-gutter)] hidden border-t border-[var(--color-sand)]/40 min-[1440px]:block"
        />

        <Contact content={dictionary.contact} locale={locale} />
      </div>

      <BackToTop />
    </main>
  );
}