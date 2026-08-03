import Image from "next/image";

import ButtonLink from "@/components/ui/ButtonLink";
import { Heading } from "@/components/ui/Heading";

const rotatingPhrases = [
  "Team building?",
  "Mediterranean silence?",
  "Private dinner?",
  "Brand experience?",
  "Incentive travel?",
];

const phraseSlides = [...rotatingPhrases, rotatingPhrases[0]];

const captionTypography = `
  font-[var(--font-caption-family)]
  text-[length:var(--font-caption-size)]
  font-[var(--font-caption-weight)]
  leading-[var(--font-caption-line-height)]
  tracking-[var(--font-caption-letter-spacing)]
  text-[var(--color-sand)]
  opacity-[var(--font-caption-opacity)]
`;

type HeroHeadingContent = {
  firstLine: string;
  secondLine: string;
  thirdLine: string;
};

type HeroParagraphContent = {
  intro: string;
  emphasis: string;
  outro: string;
};

type HeroProps = {
  heading: HeroHeadingContent;
  paragraph: HeroParagraphContent;
};

function HeroHeading({ heading }: { heading: HeroHeadingContent }) {
  return (
    <div>
      <Heading as="h1" variant="display" className="text-[var(--color-sand)]">
        <span className="block">{heading.firstLine}</span>
        <span className="block">{heading.secondLine}</span>
        <span className="block">{heading.thirdLine}</span>
      </Heading>

      <div
        className="
          relative
          mt-1
          h-[1.18em]
          w-full
          overflow-hidden
          [font-family:var(--font-serif)]
          text-[length:var(--font-display-size)]
          font-[var(--font-display-weight)]
          leading-[var(--font-display-line-height)]
          tracking-[var(--font-display-letter-spacing)]
          text-[#ff8f7d]
        "
        aria-live="off"
      >
        <div className="hero-phrase-track will-change-transform">
          {phraseSlides.map((phrase, index) => (
            <div
              key={`${phrase}-${index}`}
              className="
                flex
                h-[1.18em]
                items-center
                whitespace-nowrap
              "
              aria-hidden={index === phraseSlides.length - 1}
            >
              {phrase}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HeroParagraph({ paragraph }: { paragraph: HeroParagraphContent }) {
  return (
    <p
      className="
        max-w-[330px]
        md:max-w-[clamp(520px,30vw,580px)]
        font-[var(--font-sans)]
        text-[clamp(16px,0.8vw,18px)]
        font-normal
        leading-[1.45]
        text-[var(--color-sand)]
      "
    >
      {paragraph.intro}
      <br />
      <strong className="font-semibold">{paragraph.emphasis}</strong>{" "}
      {paragraph.outro}
    </p>
  );
}

export default function Hero({ heading, paragraph }: HeroProps) {
  return (
    <section
      data-back-to-top-theme="sand"
      className="
        relative
        min-h-[calc(100svh-7rem)]
        overflow-x-hidden
        bg-[var(--color-burgundy)]
      "
    >
      <Image
        src="/images/hero-background.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="z-0
          object-cover
          object-center
          object-[center_28%]
          min-[1440px]:object-center
          brightness-[0.82]
          contrast-[0.92]"
        aria-hidden="true"
      />

      <div
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          inset-0
          z-[1]
          bg-[linear-gradient(to_bottom,#3A0F17_0%,rgba(58,15,23,0)_100%)]
        "
      />

      {/* Mobile and tablet captions */}
      <div
        className={`
          hero-mobile-tablet-captions
          absolute
          left-[var(--page-gutter)]
          right-[var(--page-gutter)]
          top-4
          z-20
          flex
          items-center
          justify-between
          md:top-6
          ${captionTypography}
        `}
      >
        <p className="whitespace-nowrap">o123 || High-stakes experiences</p>

        <p className="whitespace-nowrap">01/05</p>
      </div>

      {/* Desktop left caption rail */}
      <div
        className={`
          hero-desktop-decoration
          absolute
          inset-y-0
          left-0
          z-20
          w-[var(--page-gutter)]
          ${captionTypography}
        `}
      >
        <p
          className="
            absolute
            left-1/2
            top-[72px]
            -translate-x-1/2
            rotate-180
            whitespace-nowrap
            [writing-mode:vertical-rl]
          "
        >
          01/05
        </p>

        <p
          className="
            absolute
            bottom-[72px]
            left-1/2
            -translate-x-1/2
            rotate-180
            whitespace-nowrap
            [writing-mode:vertical-rl]
          "
        >
          o123 || High-stakes experiences
        </p>
      </div>

      {/* Desktop right caption rail */}
      <div
        className={`
          hero-desktop-decoration
          absolute
          inset-y-0
          right-0
          z-20
          w-[var(--page-gutter)]
          ${captionTypography}
        `}
      >
        <p
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            whitespace-nowrap
            [writing-mode:vertical-rl]
          "
        >
          52°36&apos;N 17°02&apos;E || Beyond horizons
        </p>
      </div>

      {/* Desktop guide lines */}
      <div
        aria-hidden="true"
        className="
          hero-desktop-decoration
          pointer-events-none
          absolute
          inset-y-0
          left-[var(--page-gutter)]
          z-20
          border-l
          border-[var(--color-sand)]/35
        "
      />

      <div
        aria-hidden="true"
        className="
          hero-desktop-decoration
          pointer-events-none
          absolute
          inset-y-0
          right-[var(--page-gutter)]
          z-20
          border-r
          border-[var(--color-sand)]/35
        "
      />

      {/* Mobile content */}
      <div
        className="
          relative
          z-10
          flex
          min-h-[calc(100svh-7rem)]
          flex-col
          justify-end
          px-[var(--page-gutter)]
          pb-[72px]
          pt-24
          md:hidden
        "
      >
        <div>
          <HeroHeading heading={heading} />

          <div className="mt-12">
            <HeroParagraph paragraph={paragraph} />

            <div className="mt-8">
              <ButtonLink href="#contact" className="text-[var(--color-sand)]">
                Get in touch
              </ButtonLink>
            </div>
          </div>
        </div>
      </div>

      {/* Tablet content */}
      <div
        className="
          hero-tablet-content
          relative
          z-10
          hidden
          min-h-[calc(100svh-7rem)]
          flex-col
          justify-end
          px-[var(--page-gutter)]
          pb-[72px]
          pt-24
          md:flex
        "
      >
        <HeroHeading heading={heading} />

        <div className="mt-12">
          <HeroParagraph paragraph={paragraph} />

          <div className="mt-8">
            <ButtonLink href="#contact" className="text-[var(--color-sand)]">
              Get in touch
            </ButtonLink>
          </div>
        </div>
      </div>

      {/* Desktop content */}
      <div
        className="
          hero-desktop-content
          relative
          z-10
          min-h-[calc(100svh-7rem)]
          flex-col
          px-[calc(var(--page-gutter)+48px)]
          pb-[72px]
          pt-[348px]
        "
      >
        <div className="hero-desktop-heading">
          <HeroHeading heading={heading} />
        </div>

        <div
          className="
            mt-auto
            flex
            items-center
            justify-between
            gap-16
            pt-[80px]
          "
        >
          <ButtonLink href="#contact" className="text-[var(--color-sand)]">
            Get in touch
          </ButtonLink>

          <HeroParagraph paragraph={paragraph} />
        </div>
      </div>

      <style>{`
        .hero-desktop-decoration,
        .hero-desktop-content {
          display: none;
        }

        .hero-phrase-track {
          animation: hero-phrase-carousel 15s
            cubic-bezier(0.76, 0, 0.24, 1) infinite;
        }

        @keyframes hero-phrase-carousel {
          0%,
          16% {
            transform: translateY(0);
          }

          20%,
          36% {
            transform: translateY(-1.18em);
          }

          40%,
          56% {
            transform: translateY(-2.36em);
          }

          60%,
          76% {
            transform: translateY(-3.54em);
          }

          80%,
          96% {
            transform: translateY(-4.72em);
          }

          100% {
            transform: translateY(-5.9em);
          }
        }

        @media (min-width: 1440px) {
          .hero-mobile-tablet-captions {
            display: none;
          }

          .hero-tablet-content {
            display: none;
          }

          .hero-desktop-decoration {
            display: block;
          }

          .hero-desktop-content {
            display: flex;
          }
        }

        @media (min-width: 2560px) {
          .hero-desktop-heading {
            position: absolute;
            top: 50%;
            left: calc(var(--page-gutter) + 48px);
            transform: translateY(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hero-phrase-track {
            animation: none;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}
