import Image from "next/image";

import GuideLines from "@/components/ui/GuideLines";

const marqueeText =
  "o123 // MOMENTS THAT MATTER. EXPERIENCES THAT STAY WITH YOU.";

const captionClassName =
  "font-[var(--font-caption-family)] text-[length:var(--font-caption-size)] font-[var(--font-caption-weight)] leading-[var(--font-caption-line-height)] tracking-[var(--font-caption-letter-spacing)] text-[var(--color-burgundy)] opacity-[var(--font-caption-opacity)]";

type BridgeInterludeProps = {
  accessibility: {
    heading: string;
    cityImageAlt: string;
    bridgeImageAlt: string;
  };
};

function MarqueeLine({ reverse = false }: { reverse?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={`bridge-marquee-track flex w-max shrink-0 ${
        reverse
          ? "bridge-marquee-track--reverse"
          : "bridge-marquee-track--forward"
      }`}
    >
      <span className="shrink-0 whitespace-nowrap pr-[0.3em]">
        {marqueeText}
      </span>

      <span
        aria-hidden="true"
        className="shrink-0 whitespace-nowrap pr-[0.3em]"
      >
        {marqueeText}
      </span>
    </div>
  );
}

export default function BridgeInterlude({
  accessibility,
}: BridgeInterludeProps) {
  return (
    <section
      aria-labelledby="bridge-interlude-heading"
      data-back-to-top-theme="burgundy"
      className="relative isolate min-h-[640px] overflow-hidden bg-[var(--color-sand)] text-[var(--color-burgundy)] min-[834px]:min-h-[760px] min-[1440px]:min-h-[900px]"
    >
      <h2 id="bridge-interlude-heading" className="sr-only">
        {accessibility.heading}
      </h2>

      {/* Mobile / tablet captions */}
      <div
        className={`relative z-30 flex items-center justify-between px-[var(--page-gutter)] pt-6 min-[834px]:pt-8 min-[1440px]:hidden ${captionClassName}`}
      >
        <p>o123 || Brand</p>
        <p>04/05</p>
      </div>

      {/* Desktop guide lines */}
      <GuideLines className="hidden border-[var(--color-burgundy)]/35 min-[1440px]:block" />

      {/* Desktop left caption rail */}
      <div
        className={`pointer-events-none absolute inset-y-0 left-0 z-30 hidden w-[var(--page-gutter)] min-[1440px]:block ${captionClassName}`}
      >
        <p className="absolute left-1/2 top-[72px] -translate-x-1/2 rotate-180 whitespace-nowrap [writing-mode:vertical-rl]">
          04/05
        </p>

        <p className="absolute bottom-[72px] left-1/2 -translate-x-1/2 rotate-180 whitespace-nowrap [writing-mode:vertical-rl]">
          o123 || Brand
        </p>
      </div>

      {/* Desktop right caption rail */}
      <div
        className={`pointer-events-none absolute inset-y-0 right-0 z-30 hidden w-[var(--page-gutter)] min-[1440px]:block ${captionClassName}`}
      >
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap [writing-mode:vertical-rl]">
          52°36&apos;N 17°02&apos;E || Beyond horizons
        </p>
      </div>

      {/* Main content */}
      <div className="relative z-10 flex min-h-[580px] flex-col pt-12 min-[834px]:min-h-[688px] min-[834px]:pt-16 min-[1440px]:min-h-[900px] min-[1440px]:pt-[72px]">
        {/* Brand statement */}
        <div className="px-[var(--page-gutter)] min-[1440px]:px-[calc(var(--page-gutter)+48px)]">
          <p className="type-text type-body">
            Born in Wrocław. Designed for Europe.
          </p>
        </div>

        {/* Endless animation */}
        <div className="relative z-20 mt-[64px] overflow-hidden min-[834px]:mt-[72px]">
          <div className="font-[var(--font-body-family)] text-[clamp(56px,8.6vw,132px)] font-semibold uppercase leading-[0.84] tracking-[-0.035em]">
            <MarqueeLine />

            <div className="mt-[0.14em]">
              <MarqueeLine reverse />
            </div>
          </div>
        </div>

        {/* Mobile photo */}
        <div className="pointer-events-none absolute inset-x-[var(--page-gutter)] bottom-0 z-[2] h-[300px] overflow-hidden min-[834px]:hidden">
          <Image
            src="/images/bridge.png"
            alt={accessibility.cityImageAlt}
            fill
            sizes="calc(100vw - (2 * var(--page-gutter)))"
            className="object-cover object-center"
          />
        </div>

        {/* Tablet / desktop bridge SVG */}
        <div className="pointer-events-none absolute bottom-[-56px] left-1/2 z-[2] hidden aspect-[1800/625] w-[1180px] -translate-x-1/2 min-[834px]:block min-[1440px]:bottom-[-96px] min-[1440px]:w-[max(1800px,100vw)]">
          <Image
            src="/images/wro_bridge.svg"
            alt={accessibility.bridgeImageAlt}
            fill
            unoptimized
            sizes="(max-width: 1439px) 1180px, max(1800px, 100vw)"
            className="object-contain object-bottom"
          />
        </div>
      </div>

      <style>{`
        .bridge-marquee-track {
          will-change: transform;
        }

        .bridge-marquee-track--forward {
          animation: bridge-marquee-forward 28s linear infinite;
        }

        .bridge-marquee-track--reverse {
          animation: bridge-marquee-reverse 32s linear infinite;
        }

        @keyframes bridge-marquee-forward {
          from {
            transform: translate3d(0, 0, 0);
          }

          to {
            transform: translate3d(-50%, 0, 0);
          }
        }

        @keyframes bridge-marquee-reverse {
          from {
            transform: translate3d(-50%, 0, 0);
          }

          to {
            transform: translate3d(0, 0, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .bridge-marquee-track--forward,
          .bridge-marquee-track--reverse {
            animation: none;
            transform: translate3d(0, 0, 0);
          }
        }
      `}</style>
    </section>
  );
}
