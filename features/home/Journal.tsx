"use client";

import { useState } from "react";
import Image from "next/image";

import { Reveal } from "@/components/motion/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import { getJournalArticles } from "@/features/journal/data/articles";
import type { Locale } from "@/i18n/config";
import { trackEvent } from "@/lib/analytics";

const captionClassName =
  "type-caption text-[var(--color-sand)] opacity-[var(--font-caption-opacity)]";

const borderClassName = "border-[var(--color-sand)]/40";

type JournalContent = {
  introductionHeading: {
    firstLine: string;
    secondLine: string;
  };

  aboutLabel: string;

  identity: {
    brand: string;
    headquarters: string;
    reach: string;
  };

  article: {
    title: string;
    date: string;
    alt: string;
  };

  readMoreLabel: string;
  closingStatement: string;

  accessibility: {
    articleNavigation: string;
    nextArticle: string;
    previousArticle: string;
  };
};

type JournalProps = {
  content: JournalContent;
  locale: Locale;
};

type TransitionDirection = "next" | "previous";

export default function Journal({
  content,
  locale,
}: JournalProps) {
  const articles = getJournalArticles(locale);

  const [activeArticleIndex, setActiveArticleIndex] = useState(0);
  const [transitionDirection, setTransitionDirection] =
    useState<TransitionDirection>("next");

  if (articles.length === 0) {
    return null;
  }

  const currentArticle = articles[activeArticleIndex];

  const currentArticleNumber = String(activeArticleIndex + 1).padStart(
    2,
    "0",
  );

  const totalArticlesNumber = String(articles.length).padStart(2, "0");

  function showNextArticle() {
    setTransitionDirection("next");

    setActiveArticleIndex((currentIndex) =>
      currentIndex === articles.length - 1 ? 0 : currentIndex + 1,
    );
  }

  function showPreviousArticle() {
    setTransitionDirection("previous");

    setActiveArticleIndex((currentIndex) =>
      currentIndex === 0 ? articles.length - 1 : currentIndex - 1,
    );
  }

  const directionClassName =
    transitionDirection === "next"
      ? "journal-carousel-enter--next"
      : "journal-carousel-enter--previous";

  return (
    <section
      id="journal"
      aria-label="Journal"
      data-back-to-top-theme="sand"
      className="relative"
    >
      {/* Mobile / tablet top captions */}
      <div
        className={`relative z-20 flex items-center justify-between px-4 pt-6 min-[834px]:px-8 min-[834px]:pt-8 min-[1440px]:hidden ${captionClassName}`}
      >
        <p>o123 || Journal</p>
        <p>05/05</p>
      </div>

      {/* Shared responsive layout */}
      <div
        className="
          relative
          z-10
          min-[834px]:mt-20
          min-[1440px]:mt-0
          min-[1440px]:px-[var(--page-gutter)]
        "
      >
        {/* Section heading */}
        <header
          className={`
            border-b
            px-4
            pb-12
            pt-12
            min-[834px]:flex
            min-[834px]:min-h-[152px]
            min-[834px]:items-center
            min-[834px]:px-8
            min-[834px]:py-0
            min-[1440px]:min-h-[216px]
            min-[1440px]:px-12
            ${borderClassName}
          `}
        >
          <Reveal distance="small" delay={60}>
            <h2 className="type-heading type-heading-xl">Journal</h2>
          </Reveal>
        </header>

        {/* Main content grid */}
        <div
          className={`
            block
            min-[834px]:grid
            min-[834px]:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]
            min-[834px]:grid-rows-2
            min-[834px]:border-b
            min-[1440px]:min-h-[468px]
            min-[1440px]:grid-cols-3
            min-[1440px]:grid-rows-1
            ${borderClassName}
          `}
        >
          {/* Introduction panel */}
          <div
            className={`
              flex
              flex-col
              border-b
              px-4
              pb-4
              pt-4

              min-[834px]:min-h-[250px]
              min-[834px]:justify-between
              min-[834px]:border-r
              min-[834px]:p-8

              min-[1440px]:min-h-0
              min-[1440px]:border-b-0
              min-[1440px]:p-4

              ${borderClassName}
            `}
          >
            <Reveal distance="small" delay={80}>
              <h3 className="type-heading type-heading-lg">
                {content.introductionHeading.firstLine}
                <br />
                {content.introductionHeading.secondLine}
              </h3>
            </Reveal>

            {/* Mobile CTA */}
            <Reveal
              distance="small"
              delay={160}
              className="min-[834px]:hidden"
            >
              <ButtonLink
                href="#contact"
                className="mt-8 self-start text-[var(--color-sand)]"
              >
                Get in touch
              </ButtonLink>
            </Reveal>

            {/* Tablet / desktop CTA */}
            <ButtonLink
              href="#about"
              className="hidden text-[var(--color-sand)] min-[834px]:inline-flex"
            >
              {content.aboutLabel}
            </ButtonLink>
          </div>

          {/* Brand identity panel */}
          <div
            className={`
              hidden

              min-[834px]:flex
              min-[834px]:min-h-[250px]
              min-[834px]:flex-col
              min-[834px]:justify-between
              min-[834px]:border-r
              min-[834px]:p-8

              min-[1440px]:min-h-0
              min-[1440px]:justify-start
              min-[1440px]:p-4

              ${borderClassName}
            `}
          >
            <Reveal distance="small" delay={140}>
              <p className="type-text type-lead-lg uppercase">
                {content.identity.brand}
                <br />
                {content.identity.headquarters}
                <br />
                {content.identity.reach}
              </p>
            </Reveal>

            <ButtonLink
              href="#contact"
              className="text-[var(--color-sand)] min-[1440px]:hidden"
            >
              Get in touch
            </ButtonLink>
          </div>

          {/* Featured article */}
          <article
            className="
              min-w-0

              min-[834px]:col-start-2
              min-[834px]:row-span-2
              min-[834px]:row-start-1
              min-[834px]:flex
              min-[834px]:flex-col

              min-[1440px]:col-start-3
              min-[1440px]:row-span-1
              min-[1440px]:row-start-1
            "
          >
            <div
              className={`
                border-b
                px-4
                pb-4
                pt-4

                min-[834px]:flex
                min-[834px]:min-h-0
                min-[834px]:flex-1
                min-[834px]:flex-col
                min-[834px]:p-4

                min-[1440px]:grid
                min-[1440px]:grid-cols-[minmax(0,0.9fr)_minmax(0,1fr)]
                min-[1440px]:gap-4

                ${borderClassName}
              `}
            >
              {/* Animated image */}
              <div
                className="
                  relative
                  aspect-[185/71]
                  w-full
                  overflow-hidden

                  min-[834px]:aspect-[4/3]

                  min-[1440px]:aspect-auto
                  min-[1440px]:min-h-0
                "
              >
                <div
                  key={`image-${currentArticle.code}`}
                  className={`journal-carousel-image absolute inset-0 ${directionClassName}`}
                >
                  <Image
                    src={currentArticle.image}
                    alt={currentArticle.imageAlt}
                    fill
                    sizes="
                      (max-width: 833px) calc(100vw - 32px),
                      (max-width: 1439px) 33vw,
                      (max-width: 1727px) 190px,
                      230px
                    "
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Animated article content */}
              <div
                key={`content-${currentArticle.code}`}
                className={`
                  journal-carousel-content
                  ${directionClassName}
                  flex
                  min-w-0
                  flex-col
                  min-[834px]:flex-1
                `}
              >
                <div className="journal-carousel-title">
                  <h3 className="mt-2 type-text type-lead min-[834px]:mt-3 min-[1440px]:mt-0 min-[1440px]:type-lead-lg">
                    {currentArticle.title}
                  </h3>
                </div>

                <div className="journal-carousel-date">
                  <time
                    dateTime={currentArticle.published}
                    className={`mt-2 block uppercase min-[834px]:mt-3 min-[1440px]:mt-4 ${captionClassName}`}
                  >
                    {currentArticle.published}
                  </time>
                </div>

                <div
                  className="
                    journal-carousel-cta
                    mt-8
                    min-[834px]:mt-auto
                    min-[834px]:pt-8
                    min-[1440px]:pt-0
                  "
                >
                  <div
                    onClick={() =>
                      trackEvent("journal_read_more", {
                        article_code: currentArticle.code,
                        article_slug: currentArticle.slug,
                        article_title: currentArticle.title,
                      })
                    }
                  >
                    <ButtonLink
                      href={`/${locale}/journal/${currentArticle.slug}`}
                      className="text-[var(--color-sand)]"
                    >
                      {content.readMoreLabel}
                    </ButtonLink>
                  </div>
                </div>
              </div>
            </div>

            {/* Article navigation */}
            <div
              className={`
                flex
                min-h-[74px]
                items-center
                justify-between
                border-b
                px-4

                min-[834px]:border-b-0

                min-[1440px]:min-h-[96px]

                ${borderClassName}
              `}
            >
              <p
                key={`counter-${currentArticle.code}`}
                className="journal-carousel-counter type-text type-lead"
                aria-live="polite"
              >
                {currentArticleNumber}/{totalArticlesNumber}
              </p>

              <div
                aria-label={content.accessibility.articleNavigation}
                className="flex items-center gap-6"
              >
                <button
                  type="button"
                  aria-label={content.accessibility.nextArticle}
                  onClick={showNextArticle}
                  className="
                    type-button
                    transition-[transform,opacity]
                    duration-300
                    ease-out
                    hover:translate-x-1
                    hover:opacity-70
                    active:translate-x-0.5
                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  →
                </button>

                <button
                  type="button"
                  aria-label={content.accessibility.previousArticle}
                  onClick={showPreviousArticle}
                  className="
                    type-button
                    transition-[transform,opacity]
                    duration-300
                    ease-out
                    hover:-translate-x-1
                    hover:opacity-70
                    active:-translate-x-0.5
                    motion-reduce:transform-none
                    motion-reduce:transition-none
                  "
                >
                  ←
                </button>
              </div>
            </div>
          </article>
        </div>

        {/* Closing statement */}
        <div
          className={`
            flex
            min-h-[184px]
            items-center
            justify-center
            px-4
            text-center

            min-[834px]:min-h-[160px]
            min-[834px]:border-b
            min-[834px]:px-8

            min-[1440px]:min-h-[200px]
            min-[1440px]:border-b-0

            ${borderClassName}
          `}
        >
          <Reveal distance="small" delay={80}>
            <p className="type-text type-body max-w-[700px]">
              {content.closingStatement}
            </p>
          </Reveal>
        </div>
      </div>

      <style>{`
        .journal-carousel-image {
          animation:
            journal-carousel-image-in
            720ms
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
          will-change: opacity, transform;
        }

        .journal-carousel-content {
          --journal-carousel-offset: 12px;
        }

        .journal-carousel-content.journal-carousel-enter--previous {
          --journal-carousel-offset: -12px;
        }

        .journal-carousel-title,
        .journal-carousel-date,
        .journal-carousel-cta {
          opacity: 0;
          transform: translateX(var(--journal-carousel-offset));
          animation:
            journal-carousel-copy-in
            560ms
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
          will-change: opacity, transform;
        }

        .journal-carousel-title {
          animation-delay: 70ms;
        }

        .journal-carousel-date {
          animation-delay: 130ms;
        }

        .journal-carousel-cta {
          animation-delay: 190ms;
        }

        .journal-carousel-counter {
          animation:
            journal-carousel-counter-in
            420ms
            cubic-bezier(0.22, 1, 0.36, 1)
            both;
        }

        @keyframes journal-carousel-image-in {
          from {
            opacity: 0;
            transform: scale(1.025);
          }

          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes journal-carousel-copy-in {
          from {
            opacity: 0;
            transform: translateX(var(--journal-carousel-offset));
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes journal-carousel-counter-in {
          from {
            opacity: 0;
            transform: translateY(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .journal-carousel-image,
          .journal-carousel-title,
          .journal-carousel-date,
          .journal-carousel-cta,
          .journal-carousel-counter {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}