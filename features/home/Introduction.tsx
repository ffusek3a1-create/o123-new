"use client";

import Image from "next/image";

import { useModal } from "@/components/modals/ModalProvider";
import { ImageReveal } from "@/features/home/services/components/motion/ImageReveal";
import { Reveal } from "@/components/motion/Reveal";
import AnimatedWord from "@/components/ui/AnimatedWord";
import GuideLines from "@/components/ui/GuideLines";

const captionTypography = `
  font-[var(--font-caption-family)]
  text-[length:var(--font-caption-size)]
  font-[var(--font-caption-weight)]
  leading-[var(--font-caption-line-height)]
  tracking-[var(--font-caption-letter-spacing)]
  text-[var(--color-burgundy)]
  opacity-[var(--font-caption-opacity)]
`;

type IntroductionContent = {
  label: string;

  heading: {
    firstLine: string;
    secondLine: string;
    animated: readonly string[];
  };

  paragraph: {
    intro: string;
    emphasisOne: string;
    middle: string;
    emphasisTwo: string;
    outro: string;
  };
};

type IntroductionProps = {
  content: IntroductionContent;
};

export default function Introduction({ content }: IntroductionProps) {
  const { openModal } = useModal();

  return (
    <section
      id="about"
      data-back-to-top-theme="burgundy"
      className="
        relative
        min-h-[872px]
        overflow-hidden
        bg-[var(--color-sand)]
        text-[var(--color-burgundy)]
      "
    >
      {/* Mobile / tablet top captions */}
      <div
        className={`
          relative
          z-20
          flex
          items-center
          justify-between
          px-[var(--page-gutter)]
          pt-[24px]
          min-[834px]:pt-[32px]
          min-[1440px]:hidden
          ${captionTypography}
        `}
      >
        <p>o123 || Introduction</p>
        <p>02/05</p>
      </div>

      {/* Desktop left caption rail */}
      <div
        className={`
          introduction-desktop-decoration
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
          02/05
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
          o123 || Introduction
        </p>
      </div>

      {/* Desktop right caption rail */}
      <div
        className={`
          introduction-desktop-decoration
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
      <GuideLines className="introduction-desktop-decoration" />

      {/* Shared heading */}
      <div
        className="
          relative
          z-10
          px-[var(--page-gutter)]
          pt-[56px]
          min-[834px]:pt-[72px]
          min-[1440px]:absolute
          min-[1440px]:left-[calc(var(--page-gutter)+48px)]
          min-[1440px]:top-[72px]
          min-[1440px]:px-0
          min-[1440px]:pt-0
        "
      >
        <div className="flex flex-col gap-8">
          <Reveal direction="none" duration="fast" delay={40}>
            <p className="type-small uppercase">{content.label}</p>
          </Reveal>

          <Reveal distance="small">
            <h2
              className="
                type-heading
                type-heading-xl
                h-[4lh]
                w-full
                min-[834px]:h-[2lh]
                min-[1440px]:h-auto
              "
            >
              {content.heading.firstLine}
              <br />
              {content.heading.secondLine}{" "}
              <span className="block min-[834px]:inline">
                <AnimatedWord
                  className="text-[#6C9A8B]"
                  words={[...content.heading.animated]}
                />
              </span>
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Mobile / tablet layout */}
      <div
        className="
          relative
          z-10
          px-[var(--page-gutter)]
          pb-[72px]
          pt-[32px]
          min-[834px]:pt-[40px]
          min-[1440px]:hidden
        "
      >
        <div className="flex flex-col gap-8">
          {/* Image */}
          <ImageReveal className="h-[276px] w-full">
            <div className="image-frame h-[276px] w-full">
              <Image
                src="/images/introduction-image.jpg"
                alt=""
                fill
                className="object-cover object-center"
                sizes="
                  (max-width: 833px) calc(100vw - 32px),
                  (max-width: 1439px) calc(100vw - 64px),
                  304px
                "
              />
            </div>
          </ImageReveal>

          {/* Paragraph */}
          <Reveal distance="small" delay={240}>
            <p className="type-text type-body w-full">
              {content.paragraph.intro}{" "}
              <strong>{content.paragraph.emphasisOne}</strong>{" "}
              {content.paragraph.middle}{" "}
              <strong>{content.paragraph.emphasisTwo}</strong>{" "}
              {content.paragraph.outro}
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal distance="small" delay={300}>
            <button
              type="button"
              onClick={() =>
                openModal("schedule", {
                  ctaLocation: "introduction",
                })
              }
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-sm
                type-button
                uppercase
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--color-sand)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-transparent
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
                  [transition-duration:var(--motion-duration-fast)]
                  ease-out
                  group-hover:translate-x-1
                  motion-reduce:transition-none
                  motion-reduce:transform-none
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
                  after:[transition-duration:var(--motion-duration-fast)]
                  after:ease-out
                  group-hover:after:scale-x-100
                  motion-reduce:after:transition-none
                "
              >
                Schedule a call
              </span>
            </button>
          </Reveal>
        </div>
      </div>

      {/* Desktop layout */}
      <div
        className="
          relative
          z-10
          hidden
          min-h-[872px]
          min-[1440px]:grid
          min-[1440px]:[grid-template-areas:'content']
        "
      >
        {/* Center image */}
        <ImageReveal
          className="
            [grid-area:content]
            mt-[312px]
            h-[276px]
            w-[var(--introduction-image-width)]
            justify-self-center
          "
        >
          <div className="image-frame h-[276px] w-full">
            <Image
              src="/images/introduction-image.jpg"
              alt=""
              fill
              className="object-cover object-center"
              sizes="304px"
            />
          </div>
        </ImageReveal>

        {/* Right content */}
        <div
          className="
            [grid-area:content]
            mt-[620px]
            mr-[calc(var(--page-gutter)+48px)]
            flex
            w-[560px]
            flex-col
            gap-8
            self-start
            justify-self-end
          "
        >
          <Reveal distance="small" delay={240}>
            <p className="type-text type-body">
              {content.paragraph.intro}{" "}
              <strong>{content.paragraph.emphasisOne}</strong>{" "}
              {content.paragraph.middle}{" "}
              <strong>{content.paragraph.emphasisTwo}</strong>{" "}
              {content.paragraph.outro}
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal distance="small" delay={300}>
            <button
              type="button"
              onClick={() =>
                openModal("schedule", {
                  ctaLocation: "introduction",
                })
              }
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-sm
                type-button
                uppercase
                focus-visible:outline-none
                focus-visible:ring-2
                focus-visible:ring-[var(--color-sand)]
                focus-visible:ring-offset-2
                focus-visible:ring-offset-transparent
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
                  [transition-duration:var(--motion-duration-fast)]
                  ease-out
                  group-hover:translate-x-1
                  motion-reduce:transition-none
                  motion-reduce:transform-none
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
                  after:[transition-duration:var(--motion-duration-fast)]
                  after:ease-out
                  group-hover:after:scale-x-100
                  motion-reduce:after:transition-none
                "
              >
                Schedule a call
              </span>
            </button>
          </Reveal>
        </div>
      </div>

      <style>{`
        .introduction-desktop-decoration {
          display: none;
        }

        @media (min-width: 1440px) {
          .introduction-desktop-decoration {
            display: block;
          }
        }
      `}</style>
    </section>
  );
}