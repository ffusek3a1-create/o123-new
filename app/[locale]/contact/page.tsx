import type { Metadata } from "next";
import Image from "next/image";

import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import type { Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

import ContactActionCards from "./ContactActionCards";
import ContactDetails from "./ContactDetails";
import ContactOrbit from "./ContactOrbit";

type ContactPageProps = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({
  params,
}: ContactPageProps): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);

  const title = dictionary.contactPage.metadata.title;
  const description = dictionary.contactPage.metadata.description;

  return {
    title,
    description,

    alternates: {
      canonical: `/${locale}/contact`,
      languages: {
        pl: "/pl/contact",
        en: "/en/contact",
        de: "/de/contact",
        cs: "/cs/contact",
        "x-default": "/pl/contact",
      },
    },

    openGraph: {
      type: "website",
      siteName: "o123",
      title,
      description,
      url: `/${locale}/contact`,
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ContactPage({
  params,
}: ContactPageProps) {
  const { locale } = await params;
  const dictionary = await getDictionary(locale);
  const content = dictionary.contactPage;

  return (
    <main className="min-h-screen bg-[var(--color-burgundy)] text-[var(--color-sand)]">
      <section>
        <Container className="py-12 min-[834px]:py-16 min-[1440px]:py-[72px]">
          <div
            className="
              grid
              gap-14
              min-[834px]:gap-16
              min-[1440px]:grid-cols-2
              min-[1440px]:gap-24
            "
          >
            <div>
              <p className="type-caption uppercase opacity-60">
                {content.hero.label}
              </p>

              <h1 className="mt-8 max-w-[760px] type-display">
                {content.hero.heading}
              </h1>

              <div
                aria-hidden="true"
                className="
                  mt-8
                  h-px
                  w-10
                  bg-[var(--color-sand)]/70
                  min-[834px]:mt-10
                "
              />

              <p className="mt-6 max-w-[620px] type-text type-body min-[834px]:mt-8">
                {content.hero.description}
              </p>
            </div>

            <ContactDetails content={content.details} />
          </div>
        </Container>
      </section>

      <section className="border-t border-[var(--color-sand)]/20">
        <Container className="py-[72px]">
          <p className="type-caption uppercase opacity-60">
            {content.actions.label}
          </p>

          <h2 className="mt-4 max-w-[760px] type-heading type-heading-xl">
            {content.actions.heading.firstLine}
            <br />
            {content.actions.heading.secondLine}
          </h2>

          <ContactActionCards content={content.actions} />
        </Container>
      </section>

      <section className="border-t border-[var(--color-sand)]/20">
        <Container className="py-12 min-[834px]:py-16 min-[1440px]:py-[72px]">
          <div
            className="
              grid
              gap-8
              min-[834px]:grid-cols-[minmax(0,1fr)_220px]
              min-[834px]:items-stretch
              min-[834px]:gap-10
              min-[1440px]:grid-cols-[minmax(0,1fr)_320px]
              min-[1440px]:gap-16
            "
          >
            <div
              className="
                relative
                min-h-[300px]
                overflow-hidden
                min-[834px]:min-h-[380px]
                min-[1440px]:min-h-[420px]
              "
            >
              <Image
                src="/images/bridge.png"
                alt=""
                fill
                sizes="
                  (max-width: 833px) calc(100vw - 32px),
                  (max-width: 1439px) calc(100vw - 316px),
                  1080px
                "
                className="object-cover"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-black/45"
              />

              <div
                className="
                  relative
                  z-10
                  flex
                  min-h-[300px]
                  items-end
                  p-6
                  min-[834px]:min-h-[380px]
                  min-[834px]:p-8
                  min-[1440px]:min-h-[420px]
                  min-[1440px]:p-12
                "
              >
                <h2
                  className="
                    max-w-[720px]
                    type-heading
                    type-heading-lg
                  "
                >
                  {content.closing.firstLine}
                  <br className="hidden min-[834px]:block" />
                  {content.closing.secondLine}
                  <br className="hidden min-[834px]:block" />
                  {content.closing.thirdLine}
                </h2>
              </div>
            </div>

            <ContactOrbit />
          </div>
        </Container>
      </section>

      <Footer locale={locale} />
    </main>
  );
}