import { ImageResponse } from "next/og";

import {
  isLocale,
  type Locale,
} from "@/i18n/config";

export const alt =
  "o123 — memorable events and experiences";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

const claims: Record<Locale, string> = {
  pl: "Projektujemy wydarzenia, które zostają z Tobą.",
  en: "We design experiences that stay with you.",
  de: "Wir gestalten Erlebnisse, die in Erinnerung bleiben.",
  cs: "Navrhujeme zážitky, které zůstávají v paměti.",
};

type OpenGraphImageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export default async function OpenGraphImage({
  params,
}: OpenGraphImageProps) {
  const { locale } = await params;

  const resolvedLocale: Locale = isLocale(locale)
    ? locale
    : "pl";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#3a0f17",
          color: "#f7f5f2",
          padding: "72px 84px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
          }}
        >
          <span>o123</span>

          <span
            style={{
              opacity: 0.6,
            }}
          >
            Wrocław
          </span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 900,
          }}
        >
          <div
            style={{
              fontSize: 116,
              lineHeight: 0.9,
              letterSpacing: "-0.06em",
              fontWeight: 500,
            }}
          >
            o123
          </div>

          <div
            style={{
              marginTop: 40,
              maxWidth: 820,
              fontSize: 42,
              lineHeight: 1.18,
              letterSpacing: "-0.025em",
            }}
          >
            {claims[resolvedLocale]}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(247,245,242,0.3)",
            paddingTop: 24,
            fontSize: 18,
            letterSpacing: "0.05em",
          }}
        >
          <span>Events / Experiences / Moments</span>

          <span>o123.pl</span>
        </div>
      </div>
    ),
    {
      ...size,
    },
  );
}