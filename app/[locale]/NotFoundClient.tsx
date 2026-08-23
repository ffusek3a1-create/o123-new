"use client";

import { useLayoutEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import type { Locale } from "@/i18n/config";
import { isLocale } from "@/i18n/config";

type NotFoundContent = {
  eyebrow: string;
  heading: {
    firstLine: string;
    secondLine: string;
  };
  description: string;
  cta: string;
  bridgeLabel: string;
};

const contentByLocale: Record<Locale, NotFoundContent> = {
  pl: {
    eyebrow: "Error / 404",
    heading: {
      firstLine: "Tu urywa się",
      secondLine: "ścieżka.",
    },
    description:
      "Strona, której szukasz, nie istnieje albo zmieniła adres.",
    cta: "Wróć na stronę główną",
    bridgeLabel: "Przerwany most",
  },

  en: {
    eyebrow: "Error / 404",
    heading: {
      firstLine: "This path ends",
      secondLine: "here.",
    },
    description:
      "The page you are looking for does not exist or has moved somewhere else.",
    cta: "Back to home",
    bridgeLabel: "Broken bridge",
  },

  de: {
    eyebrow: "Error / 404",
    heading: {
      firstLine: "Hier endet",
      secondLine: "der Weg.",
    },
    description:
      "Die gesuchte Seite existiert nicht oder wurde an eine andere Adresse verschoben.",
    cta: "Zur Startseite",
    bridgeLabel: "Unterbrochene Brücke",
  },

  cs: {
    eyebrow: "Error / 404",
    heading: {
      firstLine: "Tady cesta",
      secondLine: "končí.",
    },
    description:
      "Stránka, kterou hledáte, neexistuje nebo byla přesunuta na jinou adresu.",
    cta: "Zpět na hlavní stránku",
    bridgeLabel: "Přerušený most",
  },
};

function getLocaleFromPathname(pathname: string): Locale {
  const firstSegment = pathname.split("/").filter(Boolean)[0];

  return firstSegment && isLocale(firstSegment)
    ? firstSegment
    : "pl";
}

export default function NotFoundClient() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);
  const content = contentByLocale[locale];

  useLayoutEffect(() => {
    document.documentElement.dataset.notFoundPage = "true";
    window.dispatchEvent(new Event("o123:not-found-change"));

    return () => {
      delete document.documentElement.dataset.notFoundPage;
      window.dispatchEvent(new Event("o123:not-found-change"));
    };
  }, []);

  return (
    <main className="min-h-[100svh] bg-[var(--color-burgundy)] text-[var(--color-sand)]">
      <section
        aria-labelledby="not-found-heading"
        className="
          flex
          min-h-[100svh]
          flex-col
          px-[var(--page-gutter)]
          pb-8
          pt-12
          min-[834px]:pb-10
          min-[834px]:pt-16
          min-[1440px]:pb-12
          min-[1440px]:pt-[72px]
        "
      >
        <div className="flex items-center justify-between gap-8">
          <p className="type-caption uppercase opacity-60">
            {content.eyebrow}
          </p>

          <p className="type-caption uppercase opacity-40">
            o123
          </p>
        </div>

        <div className="flex flex-1 flex-col justify-center py-10 min-[834px]:py-12 min-[1440px]:py-16">
          <div className="relative">
            <p
              aria-hidden="true"
              className="
                pointer-events-none
                select-none
                type-display
                leading-none
                opacity-[0.14]
              "
            >
              404
            </p>

            <h1
              id="not-found-heading"
              className="mt-8 max-w-[820px] type-heading type-heading-xl min-[834px]:mt-10 min-[1440px]:mt-12"
            >
              {content.heading.firstLine}
              <br />
              {content.heading.secondLine}
            </h1>

            <p className="mt-8 max-w-[560px] type-text type-body min-[834px]:mt-10">
              {content.description}
            </p>

            <div
              aria-hidden="true"
              className="not-found-bridge relative mt-10 w-full overflow-hidden min-[834px]:mt-12 min-[1440px]:mt-16"
            >
              <svg
                viewBox="0 0 1200 230"
                className="block h-auto w-full"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="square"
                  vectorEffect="non-scaling-stroke"
                >
                  {/* deck */}
                  <path
                    className="not-found-bridge__deck not-found-bridge__deck--left"
                    d="M0 88 H500"
                    strokeWidth="1.4"
                  />
                  <path
                    className="not-found-bridge__deck not-found-bridge__deck--right"
                    d="M700 88 H1200"
                    strokeWidth="1.4"
                  />

                  {/* outer structure */}
                  <path
                    className="not-found-bridge__structure not-found-bridge__structure--left"
                    d="M70 88 L190 28 L310 88 M190 28 V88 M310 88 L420 44 L500 88"
                    strokeWidth="1"
                    opacity="0.62"
                  />
                  <path
                    className="not-found-bridge__structure not-found-bridge__structure--right"
                    d="M700 88 L780 44 L890 88 M890 88 L1010 28 L1130 88 M1010 28 V88"
                    strokeWidth="1"
                    opacity="0.62"
                  />

                  {/* supports */}
                  <path
                    className="not-found-bridge__support"
                    d="M190 88 V194 M420 88 V164 M780 88 V164 M1010 88 V194"
                    strokeWidth="1"
                    opacity="0.42"
                  />

                  {/* missing centre span – appears, then falls away */}
                  <g className="not-found-bridge__falling-span">
                    <path d="M500 88 H700" strokeWidth="1.4" />
                    <path
                      d="M520 88 L600 48 L680 88 M600 48 V88"
                      strokeWidth="1"
                      opacity="0.62"
                    />
                  </g>
                </g>
              </svg>
            </div>

            <Link
              href={`/${locale}`}
              className="
                group
                mt-10
                inline-flex
                items-center
                gap-3
                type-button
                text-[var(--color-sand)]
                min-[834px]:mt-12
              "
            >
              <span
                aria-hidden="true"
                className="
                  relative
                  top-px
                  inline-flex
                  shrink-0
                  items-center
                  justify-center
                  leading-none
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:translate-x-1
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                →
              </span>

              <span
                className="
                  relative
                  after:absolute
                  after:bottom-0
                  after:left-0
                  after:h-px
                  after:w-full
                  after:origin-left
                  after:scale-x-0
                  after:bg-current
                  after:transition-transform
                  after:duration-300
                  after:ease-out
                  group-hover:after:scale-x-100
                  motion-reduce:after:transition-none
                "
              >
                {content.cta}
              </span>
            </Link>
          </div>
        </div>

        <div className="flex items-end justify-between gap-8 border-t border-[var(--color-sand)]/20 pt-5">
          <p className="max-w-[70%] truncate type-caption uppercase opacity-40">
            {pathname}
          </p>

          <p
            aria-hidden="true"
            className="type-caption uppercase opacity-40"
          >
            404
          </p>
        </div>
      </section>

      <style>{`
        .not-found-bridge {
          color: var(--color-sand);
        }

        .not-found-bridge__deck,
        .not-found-bridge__structure,
        .not-found-bridge__support {
          stroke-dasharray: 1400;
          stroke-dashoffset: 1400;
          animation: not-found-draw 1100ms cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .not-found-bridge__structure,
        .not-found-bridge__support {
          animation-delay: 180ms;
        }


        .not-found-bridge__falling-span {
          opacity: 0;
          transform-box: fill-box;
          transform-origin: center;
          animation: not-found-bridge-cycle 5600ms linear infinite;
        }

        @keyframes not-found-draw {
          to {
            stroke-dashoffset: 0;
          }
        }

        @keyframes not-found-bridge-cycle {
          0% {
            opacity: 0;
            transform: translateY(72px) rotate(10deg) scale(0.96);
          }

          10% {
            opacity: 0;
            transform: translateY(28px) rotate(5deg) scale(0.98);
          }

          18% {
            opacity: 1;
            transform: translateY(-6px) rotate(-1.5deg) scale(1.01);
          }

          24%,
          48% {
            opacity: 1;
            transform: translateY(0) rotate(0deg) scale(1);
          }

          52% {
            opacity: 1;
            transform: translateY(-3px) rotate(-0.8deg) scale(1);
          }

          56% {
            opacity: 1;
            transform: translateY(3px) rotate(1.6deg) scale(1);
          }

          60% {
            opacity: 1;
            transform: translateY(-2px) rotate(-2.4deg) scale(1);
          }

          64% {
            opacity: 1;
            transform: translateY(7px) rotate(4deg) scale(0.995);
          }

          72% {
            opacity: 1;
            transform: translateY(34px) rotate(8deg) scale(0.985);
          }

          82% {
            opacity: 0;
            transform: translateY(128px) rotate(16deg) scale(0.95);
          }

          100% {
            opacity: 0;
            transform: translateY(128px) rotate(16deg) scale(0.95);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .not-found-bridge__deck,
          .not-found-bridge__structure,
          .not-found-bridge__support {
            stroke-dashoffset: 0;
            animation: none;
          }

          .not-found-bridge__falling-span {
            opacity: 0;
            animation: none;
          }
        }
      `}</style>
    </main>
  );
}