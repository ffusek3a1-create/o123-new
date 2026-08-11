import Image from "next/image";
import Link from "next/link";

import ButtonLink from "@/components/ui/ButtonLink";
import type { Locale } from "@/i18n/config";

import { journalArticles } from "../data/articles";
import { seriesLabels } from "../lib/seriesLabels";

type JournalBentoProps = {
  locale: Locale;
};

export default function JournalBento({
  locale,
}: JournalBentoProps) {
  const [articleOne, articleTwo, articleThree] = journalArticles;

  if (!articleOne || !articleTwo || !articleThree) {
    return null;
  }

  return (
    <>
      {/* =========================================================
          MOBILE — < 834px
      ========================================================= */}
      <div className="block min-[834px]:hidden">
        {/* 01 — First image card */}
        <article className="group relative aspect-[6/5] overflow-hidden">
          <Image
            src={articleOne.image}
            alt={articleOne.imageAlt}
            fill
            sizes="calc(100vw - (var(--page-gutter) * 2))"
            className="
              object-cover
              object-[center_58%]
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.025]
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
            priority
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/0
              to-[#1C2A25]
            "
          />

          <Link
            href={`/${locale}/journal/${articleOne.slug}`}
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              p-4
            "
          >
            <div>
              <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
                {seriesLabels[articleOne.series]} / {articleOne.code}
              </p>

              <time
                dateTime={articleOne.published}
                className="mt-2 block type-caption uppercase opacity-60"
              >
                {articleOne.published}
              </time>
            </div>

            <div className="mt-4 max-w-[280px]">
              <h3 className="type-heading type-heading-lg">
                {articleOne.title}
              </h3>
            </div>

            <span
              aria-hidden="true"
              className="
                mt-auto
                block
                type-button
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
          </Link>
        </article>

        {/* 02 — Intro */}
        <article className="mt-8">
          <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
            {seriesLabels[articleOne.series]} / {articleOne.code}
          </p>

          <time
            dateTime={articleOne.published}
            className="mt-2 block type-caption uppercase opacity-60"
          >
            {articleOne.published}
          </time>

          <h3 className="mt-4 type-heading type-heading-lg">
            {articleOne.title}
          </h3>

          <p className="mt-8 type-text type-body">
            {articleOne.description}{" "}
            <Link
              href={`/${locale}/journal/${articleOne.slug}`}
              className="
                group/more
                relative
                inline-block
                font-medium
                text-[var(--color-blush)]
              "
            >
              ...More

              <span
                aria-hidden="true"
                className="
                  absolute
                  bottom-[-4px]
                  left-0
                  h-[2px]
                  w-full
                  origin-left
                  bg-[var(--color-blush)]
                  transition-transform
                  duration-300
                  ease-out
                  group-hover/more:scale-x-75
                  motion-reduce:transition-none
                "
              />
            </Link>
          </p>

          {/* Article links */}
          <div className="mt-8">
            <Link
              href={`/${locale}/journal/${articleTwo.slug}`}
              className="
                group/link
                flex
                items-center
                justify-between
                gap-6
                border-t
                border-[var(--color-sand)]/35
                py-5
              "
            >
              <span
                className="
                  type-text
                  type-lead
                  transition-transform
                  duration-300
                  ease-out
                  group-hover/link:translate-x-1
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                {articleTwo.title}
              </span>

              <span
                aria-hidden="true"
                className="
                  shrink-0
                  type-button
                  transition-transform
                  duration-300
                  ease-out
                  group-hover/link:translate-x-1
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                →
              </span>
            </Link>

            <Link
              href={`/${locale}/journal/${articleThree.slug}`}
              className="
                group/link
                flex
                items-center
                justify-between
                gap-6
                border-y
                border-[var(--color-sand)]/35
                py-5
              "
            >
              <span
                className="
                  type-text
                  type-lead
                  transition-transform
                  duration-300
                  ease-out
                  group-hover/link:translate-x-1
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                {articleThree.title}
              </span>

              <span
                aria-hidden="true"
                className="
                  shrink-0
                  type-button
                  transition-transform
                  duration-300
                  ease-out
                  group-hover/link:translate-x-1
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              >
                →
              </span>
            </Link>
          </div>
        </article>

        {/* 03 — Categories */}
        <aside
          id="journal-categories-mobile"
          className="
            mt-8
            flex
            min-h-[280px]
            flex-col
            bg-[var(--color-burgundy)]
            p-4
          "
        >
          <div className="flex flex-wrap gap-3">
            {Object.values(seriesLabels).map((label) => (
              <span
                key={label}
                className="
                  bg-[var(--color-sand)]
                  px-4
                  py-2
                  type-caption
                  uppercase
                  text-[var(--color-burgundy)]
                "
              >
                {label}
              </span>
            ))}
          </div>

          <div className="mt-auto pt-12">
            <ButtonLink
              href="#journal-categories-mobile"
              className="text-[var(--color-sand)]"
            >
              View All Categories
            </ButtonLink>
          </div>
        </aside>

        {/* 04 — Article Two */}
        <article className="group relative mt-8 aspect-square overflow-hidden">
          <Image
            src={articleTwo.image}
            alt={articleTwo.imageAlt}
            fill
            sizes="calc(100vw - (var(--page-gutter) * 2))"
            className="
              object-cover
              object-[center_45%]
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.025]
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#1C2A25]
              to-transparent
            "
          />

          <Link
            href={`/${locale}/journal/${articleTwo.slug}`}
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              p-4
            "
          >
            <div>
              <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
                {seriesLabels[articleTwo.series]} / {articleTwo.code}
              </p>

              <time
                dateTime={articleTwo.published}
                className="mt-2 block type-caption uppercase opacity-60"
              >
                {articleTwo.published}
              </time>

              <h3 className="mt-4 max-w-[300px] type-heading type-heading-lg">
                {articleTwo.title}
              </h3>
            </div>
          </Link>
        </article>

        {/* 05 — Article Three */}
        <article className="group relative mt-8 aspect-square overflow-hidden">
          <Image
            src={articleThree.image}
            alt={articleThree.imageAlt}
            fill
            sizes="calc(100vw - (var(--page-gutter) * 2))"
            className="
              object-cover
              object-[center_52%]
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.025]
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#1C2A25]
              to-transparent
            "
          />

          <Link
            href={`/${locale}/journal/${articleThree.slug}`}
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-end
              p-4
            "
          >
            <h3 className="max-w-[300px] type-heading type-heading-lg">
              {articleThree.title}
            </h3>
          </Link>
        </article>
      </div>

      {/* =========================================================
          TABLET — 834px → 1023px
      ========================================================= */}
      <div className="hidden min-[834px]:block min-[1024px]:hidden">
        {/* TOP AREA */}
        <div
          className="
            grid
            grid-cols-[332px_minmax(0,1fr)]
            items-stretch
            gap-8
          "
        >
          {/* 01 — Left image card */}
          <article className="group relative min-h-0 overflow-hidden">
            <Image
              src={articleOne.image}
              alt={articleOne.imageAlt}
              fill
              sizes="332px"
              className="
                object-cover
                object-[center_58%]
                transition-transform
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                group-hover:scale-[1.025]
                motion-reduce:transform-none
                motion-reduce:transition-none
              "
              priority
            />

            <div
              aria-hidden="true"
              className="
                absolute
                inset-0
                bg-gradient-to-b
                from-black/0
                to-[#1C2A25]
              "
            />

            <Link
              href={`/${locale}/journal/${articleOne.slug}`}
              className="
                relative
                z-10
                flex
                h-full
                min-h-full
                flex-col
                p-8
              "
            >
              <div>
                <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
                  {seriesLabels[articleOne.series]} / {articleOne.code}
                </p>

                <time
                  dateTime={articleOne.published}
                  className="mt-2 block type-caption uppercase opacity-60"
                >
                  {articleOne.published}
                </time>
              </div>

              <div className="mt-auto">
                <h3 className="type-heading type-heading-lg">
                  {articleOne.title}
                </h3>

                <span
                  aria-hidden="true"
                  className="
                    mt-8
                    block
                    type-button
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
              </div>
            </Link>
          </article>

          {/* RIGHT COLUMN */}
          <div className="flex min-h-0 flex-col">
            {/* 02 — Intro */}
            <article>
              <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
                {seriesLabels[articleOne.series]} / {articleOne.code}
              </p>

              <time
                dateTime={articleOne.published}
                className="mt-2 block type-caption uppercase opacity-60"
              >
                {articleOne.published}
              </time>

              <h3 className="mt-4 type-heading type-heading-lg">
                {articleOne.title}
              </h3>

              <p className="mt-6 type-text type-body">
                {articleOne.description}{" "}
                <Link
                  href={`/${locale}/journal/${articleOne.slug}`}
                  className="
                    group/more
                    relative
                    inline-block
                    font-medium
                    text-[var(--color-blush)]
                  "
                >
                  ...More

                  <span
                    aria-hidden="true"
                    className="
                      absolute
                      bottom-[-4px]
                      left-0
                      h-[2px]
                      w-full
                      origin-left
                      bg-[var(--color-blush)]
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/more:scale-x-75
                      motion-reduce:transition-none
                    "
                  />
                </Link>
              </p>

              <div className="mt-8">
                <Link
                  href={`/${locale}/journal/${articleTwo.slug}`}
                  className="
                    group/link
                    flex
                    items-center
                    justify-between
                    gap-6
                    border-t
                    border-[var(--color-sand)]/35
                    py-5
                  "
                >
                  <span
                    className="
                      type-text
                      type-lead
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/link:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    {articleTwo.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      type-button
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/link:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    →
                  </span>
                </Link>

                <Link
                  href={`/${locale}/journal/${articleThree.slug}`}
                  className="
                    group/link
                    flex
                    items-center
                    justify-between
                    gap-6
                    border-y
                    border-[var(--color-sand)]/35
                    py-5
                  "
                >
                  <span
                    className="
                      type-text
                      type-lead
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/link:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    {articleThree.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      shrink-0
                      type-button
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/link:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>

            {/* 03 — Categories */}
            <aside
              id="journal-categories-tablet"
              className="
                mt-8
                flex
                flex-1
                flex-col
                bg-[var(--color-burgundy)]
                p-8
              "
            >
              <div className="flex flex-wrap gap-3">
                {Object.values(seriesLabels).map((label) => (
                  <span
                    key={label}
                    className="
                      bg-[var(--color-sand)]
                      px-4
                      py-2
                      type-caption
                      uppercase
                      text-[var(--color-burgundy)]
                    "
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <ButtonLink
                  href="#journal-categories-tablet"
                  className="text-[var(--color-sand)]"
                >
                  View All Categories
                </ButtonLink>
              </div>
            </aside>
          </div>
        </div>

        {/* 04 — Article Two / wide */}
        <article
          className="
            group
            relative
            mt-8
            aspect-[2/1]
            overflow-hidden
          "
        >
          <Image
            src={articleTwo.image}
            alt={articleTwo.imageAlt}
            fill
            sizes="calc(100vw - 64px)"
            className="
              object-cover
              object-[center_45%]
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.025]
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#1C2A25]
              to-transparent
            "
          />

          <Link
            href={`/${locale}/journal/${articleTwo.slug}`}
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              p-8
            "
          >
            <div>
              <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
                {seriesLabels[articleTwo.series]} / {articleTwo.code}
              </p>

              <time
                dateTime={articleTwo.published}
                className="mt-2 block type-caption uppercase opacity-60"
              >
                {articleTwo.published}
              </time>

              <h3 className="mt-4 max-w-[620px] type-heading type-heading-lg">
                {articleTwo.title}
              </h3>
            </div>
          </Link>
        </article>

        {/* 05 — Article Three / wide */}
        <article
          className="
            group
            relative
            mt-8
            aspect-[2/1]
            overflow-hidden
          "
        >
          <Image
            src={articleThree.image}
            alt={articleThree.imageAlt}
            fill
            sizes="calc(100vw - 64px)"
            className="
              object-cover
              object-[center_52%]
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.025]
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-[#1C2A25]
              to-transparent
            "
          />

          <Link
            href={`/${locale}/journal/${articleThree.slug}`}
            className="
              relative
              z-10
              flex
              h-full
              flex-col
              justify-end
              p-8
            "
          >
            <p className="type-caption uppercase opacity-60">
              {seriesLabels[articleThree.series]}
            </p>

            <h3 className="mt-4 max-w-[680px] type-heading type-heading-lg">
              {articleThree.title}
            </h3>
          </Link>
        </article>
      </div>

      {/* =========================================================
          DESKTOP — >= 1024px
      ========================================================= */}
      <div
        className="
          hidden
          min-[1024px]:grid
          min-[1024px]:grid-cols-[340px_minmax(0,1fr)]
          min-[1024px]:gap-8
        "
      >
        {/* 01 — Left / full height */}
        <article className="group relative min-h-0 overflow-hidden">
          <Image
            src={articleOne.image}
            alt={articleOne.imageAlt}
            fill
            sizes="340px"
            className="
              object-cover
              object-[center_58%]
              transition-transform
              duration-700
              ease-[cubic-bezier(0.22,1,0.36,1)]
              group-hover:scale-[1.025]
              motion-reduce:transform-none
              motion-reduce:transition-none
            "
            priority
          />

          <div
            aria-hidden="true"
            className="
              absolute
              inset-0
              bg-gradient-to-b
              from-black/0
              to-[#1C2A25]
            "
          />

          <Link
            href={`/${locale}/journal/${articleOne.slug}`}
            className="
              relative
              z-10
              flex
              h-full
              min-h-[624px]
              flex-col
              p-8
            "
          >
            <div>
              <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
                {seriesLabels[articleOne.series]} / {articleOne.code}
              </p>

              <time
                dateTime={articleOne.published}
                className="mt-2 block type-caption uppercase opacity-60"
              >
                {articleOne.published}
              </time>
            </div>

            <div className="mt-auto">
              <h3 className="type-heading type-heading-lg">
                {articleOne.title}
              </h3>

              <span
                aria-hidden="true"
                className="
                  mt-8
                  block
                  type-button
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
            </div>
          </Link>
        </article>

        {/* Right area */}
        <div
          className="
            grid
            min-h-[624px]
            grid-rows-[1.18fr_1fr]
            gap-8
          "
        >
          {/* TOP ROW */}
          <div
            className="
              grid
              min-h-0
              grid-cols-[minmax(0,1.95fr)_minmax(300px,0.95fr)]
              gap-8
            "
          >
            {/* 02 — Intro */}
            <article className="flex min-h-0 flex-col">
              <div>
                <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
                  {seriesLabels[articleOne.series]} / {articleOne.code}
                </p>

                <time
                  dateTime={articleOne.published}
                  className="mt-2 block type-caption uppercase opacity-60"
                >
                  {articleOne.published}
                </time>

                <h3 className="mt-4 max-w-[760px] type-heading type-heading-lg">
                  {articleOne.title}
                </h3>

                <p className="mt-6 max-w-[720px] type-text type-body">
                  {articleOne.description}{" "}
                  <Link
                    href={`/${locale}/journal/${articleOne.slug}`}
                    className="
                      group/more
                      relative
                      inline-block
                      font-medium
                      text-[var(--color-blush)]
                    "
                  >
                    ...More

                    <span
                      aria-hidden="true"
                      className="
                        absolute
                        bottom-[-4px]
                        left-0
                        h-[2px]
                        w-full
                        origin-left
                        bg-[var(--color-blush)]
                        transition-transform
                        duration-300
                        ease-out
                        group-hover/more:scale-x-75
                        motion-reduce:transition-none
                      "
                    />
                  </Link>
                </p>
              </div>

              <div className="mt-auto pt-12">
                <Link
                  href={`/${locale}/journal/${articleTwo.slug}`}
                  className="
                    group/link
                    flex
                    items-center
                    justify-between
                    gap-8
                    border-t
                    border-[var(--color-sand)]/35
                    py-5
                  "
                >
                  <span
                    className="
                      type-text
                      type-lead
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/link:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    {articleTwo.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      type-button
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/link:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    →
                  </span>
                </Link>

                <Link
                  href={`/${locale}/journal/${articleThree.slug}`}
                  className="
                    group/link
                    flex
                    items-center
                    justify-between
                    gap-8
                    border-y
                    border-[var(--color-sand)]/35
                    py-5
                  "
                >
                  <span
                    className="
                      type-text
                      type-lead
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/link:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    {articleThree.title}
                  </span>

                  <span
                    aria-hidden="true"
                    className="
                      type-button
                      transition-transform
                      duration-300
                      ease-out
                      group-hover/link:translate-x-1
                      motion-reduce:transform-none
                      motion-reduce:transition-none
                    "
                  >
                    →
                  </span>
                </Link>
              </div>
            </article>

            {/* 03 — Upper right image card */}
            <article className="group relative min-h-0 overflow-hidden">
              <Image
                src={articleTwo.image}
                alt={articleTwo.imageAlt}
                fill
                sizes="320px"
                className="
                  object-cover
                  object-[center_45%]
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.025]
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-black/0
                  to-[#1C2A25]
                "
              />

              <Link
                href={`/${locale}/journal/${articleTwo.slug}`}
                className="relative z-10 flex h-full flex-col p-8"
              >
                <div>
                  <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
                    {seriesLabels[articleTwo.series]} / {articleTwo.code}
                  </p>

                  <time
                    dateTime={articleTwo.published}
                    className="mt-2 block type-caption uppercase opacity-60"
                  >
                    {articleTwo.published}
                  </time>
                </div>

                <div className="mt-auto">
                  <h3 className="type-heading type-heading-lg">
                    {articleTwo.title}
                  </h3>

                  <span
                    aria-hidden="true"
                    className="
                      mt-8
                      block
                      type-button
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
                </div>
              </Link>
            </article>
          </div>

          {/* BOTTOM ROW */}
          <div
            className="
              grid
              min-h-0
              grid-cols-[minmax(0,1.45fr)_minmax(360px,1fr)]
              gap-8
            "
          >
            {/* 04 — Wide featured image */}
            <article className="group relative min-h-0 overflow-hidden">
              <Image
                src={articleThree.image}
                alt={articleThree.imageAlt}
                fill
                sizes="560px"
                className="
                  object-cover
                  object-[center_52%]
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.22,1,0.36,1)]
                  group-hover:scale-[1.025]
                  motion-reduce:transform-none
                  motion-reduce:transition-none
                "
              />

              <div
                aria-hidden="true"
                className="
                  absolute
                  inset-0
                  bg-gradient-to-b
                  from-[#1C2A25]
                  to-transparent
                "
              />

              <Link
                href={`/${locale}/journal/${articleThree.slug}`}
                className="
                  relative
                  z-10
                  flex
                  h-full
                  flex-col
                  justify-end
                  p-8
                "
              >
                <p className="type-caption uppercase opacity-60">
                  {seriesLabels[articleThree.series]}
                </p>

                <h3 className="mt-4 max-w-[680px] type-heading type-heading-lg">
                  {articleThree.title}
                </h3>
              </Link>
            </article>

            {/* 05 — Categories */}
            <aside
              id="journal-categories"
              className="
                flex
                min-h-0
                flex-col
                bg-[var(--color-burgundy)]
                p-8
              "
            >
              <div className="flex flex-wrap gap-3">
                {Object.values(seriesLabels).map((label) => (
                  <span
                    key={label}
                    className="
                      bg-[var(--color-sand)]
                      px-4
                      py-2
                      type-caption
                      uppercase
                      text-[var(--color-burgundy)]
                    "
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-auto pt-12">
                <ButtonLink
                  href="#journal-categories"
                  className="text-[var(--color-sand)]"
                >
                  View All Categories
                </ButtonLink>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}