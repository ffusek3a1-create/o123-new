import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";
import { notFound } from "next/navigation";
import Script from "next/script";

import AnalyticsAttributionCapture from "@/components/analytics/AnalyticsAttributionCapture";
import CookieConsent from "@/components/analytics/CookieConsent";
import Navbar from "@/components/layout/Navbar";
import { ModalProvider } from "@/components/modals/ModalProvider";
import ModalRoot from "@/components/modals/ModalRoot";
import { getDictionary } from "@/i18n/getDictionary";
import { isLocale } from "@/i18n/config";

import "../globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://o123.pl"),

  title: "o123",

  description:
    "Projektujemy wydarzenia i doświadczenia, które mają znaczenie także po ich zakończeniu.",

  applicationName: "o123",

  openGraph: {
    type: "website",
    siteName: "o123",
    title: "o123",
    description:
      "Projektujemy wydarzenia i doświadczenia, które mają znaczenie także po ich zakończeniu.",
    url: "https://o123.pl",
  },

  twitter: {
    card: "summary_large_image",
    title: "o123",
    description:
      "Projektujemy wydarzenia i doświadczenia, które mają znaczenie także po ich zakończeniu.",
  },
};

type LocaleLayoutProps = Readonly<{
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
}>;

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  const dictionary = await getDictionary(locale);
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html
      lang={locale}
      className={`${jost.variable} ${cormorantGaramond.variable}`}
    >
      <body>
        {gaId && (
          <>
            <Script
              id="google-consent-default"
              strategy="beforeInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                  dataLayer.push(arguments);
                }

                var analyticsConsent = "denied";

                try {
                  var storedConsent = localStorage.getItem(
                    "o123-cookie-consent-v1"
                  );

                  if (storedConsent) {
                    var parsedConsent = JSON.parse(storedConsent);

                    if (
                      parsedConsent.version === 1 &&
                      parsedConsent.analytics === true
                    ) {
                      analyticsConsent = "granted";
                    }
                  }
                } catch (error) {
                  analyticsConsent = "denied";
                }

                gtag("consent", "default", {
                  ad_storage: "denied",
                  ad_user_data: "denied",
                  ad_personalization: "denied",
                  analytics_storage: analyticsConsent
                });
              `}
            </Script>

            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />

            <Script
              id="google-analytics"
              strategy="afterInteractive"
            >
              {`
                window.dataLayer = window.dataLayer || [];

                function gtag() {
                  dataLayer.push(arguments);
                }

                gtag("js", new Date());
                gtag("config", "${gaId}");
              `}
            </Script>
          </>
        )}

        <AnalyticsAttributionCapture />

        <ModalProvider>
          <Navbar
            menuDescriptions={
              dictionary.navigation.menuDescriptions
            }
          />

          {children}

          <ModalRoot />
        </ModalProvider>

        <CookieConsent locale={locale} />
      </body>
    </html>
  );
}