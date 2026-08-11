import Image from "next/image";

import { seriesLabels } from "../../lib/seriesLabels";
import type { JournalArticle } from "../../types";

type ArticleHeroProps = {
  article: JournalArticle;
  articleNumber: number;
  totalArticles: number;
};

export default function ArticleHero({
  article,
  articleNumber,
  totalArticles,
}: ArticleHeroProps) {
  const formattedArticleNumber = String(articleNumber).padStart(2, "0");
  const formattedTotalArticles = String(totalArticles).padStart(2, "0");

  return (
    <header>
      {/* Metadata */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
          {seriesLabels[article.series]} / {article.code}
        </p>

        <span aria-hidden="true" className="type-caption opacity-40">
          ·
        </span>

        <time
          dateTime={article.published}
          className="type-caption uppercase opacity-60"
        >
          {article.published}
        </time>

        <span aria-hidden="true" className="type-caption opacity-40">
          ·
        </span>

        <p className="type-caption uppercase opacity-60">
          {article.readingTime}
        </p>
      </div>

      {/* Title */}
      <h1 className="mt-8 max-w-[1100px] type-heading type-heading-xl">
        {article.slug === "dlaczego-pamietamy-emocje" ? (
          <>
            <span className="hidden min-[834px]:inline">
              Dlaczego pamiętamy emocje,
              <br />
              a nie wydarzenia?
            </span>

            <span className="min-[834px]:hidden">
              {article.title}
            </span>
          </>
        ) : (
          article.title
        )}
      </h1>

      {/* Lead */}
      <p className="mt-8 max-w-[760px] type-text type-lead min-[834px]:mt-10">
        {article.description}
      </p>

      {/* =====================================================
          MOBILE — < 834px
      ====================================================== */}
      <div className="mt-12 min-[834px]:hidden">
        <div className="relative aspect-[16/9] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="calc(100vw - 32px)"
            className="object-cover"
          />
        </div>

        <aside className="mt-8 border-t border-[var(--color-sand)]/20 pt-6">
          <div className="grid grid-cols-2 gap-x-6 gap-y-8">
            <div>
              <p className="type-caption uppercase opacity-60">
                Article
              </p>

              <p className="mt-2 type-text type-body">
                {formattedArticleNumber} / {formattedTotalArticles}
              </p>
            </div>

            <div>
              <p className="type-caption uppercase opacity-60">
                Series
              </p>

              <p className="mt-2 type-text type-body">
                {seriesLabels[article.series]}
              </p>
            </div>

            <div>
              <p className="type-caption uppercase opacity-60">
                Reading time
              </p>

              <p className="mt-2 type-text type-body">
                {article.readingTime}
              </p>
            </div>

            <div>
              <p className="type-caption uppercase opacity-60">
                Published
              </p>

              <time
                dateTime={article.published}
                className="mt-2 block type-text type-body"
              >
                {article.published}
              </time>
            </div>
          </div>
        </aside>
      </div>

      {/* =====================================================
          TABLET — 834px → 1439px
      ====================================================== */}
      <div className="mt-14 hidden min-[834px]:block min-[1440px]:hidden">
        <div className="relative aspect-[12/5] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="calc(100vw - 64px)"
            className="object-cover"
          />
        </div>

        <aside className="mt-8 border-t border-[var(--color-sand)]/20 pt-6">
          <div className="grid grid-cols-4 gap-8">
            <div>
              <p className="type-caption uppercase opacity-60">
                Article
              </p>

              <p className="mt-2 type-text type-body">
                {formattedArticleNumber} / {formattedTotalArticles}
              </p>
            </div>

            <div>
              <p className="type-caption uppercase opacity-60">
                Series
              </p>

              <p className="mt-2 type-text type-body">
                {seriesLabels[article.series]}
              </p>
            </div>

            <div>
              <p className="type-caption uppercase opacity-60">
                Reading time
              </p>

              <p className="mt-2 type-text type-body">
                {article.readingTime}
              </p>
            </div>

            <div>
              <p className="type-caption uppercase opacity-60">
                Published
              </p>

              <time
                dateTime={article.published}
                className="mt-2 block type-text type-body"
              >
                {article.published}
              </time>
            </div>
          </div>
        </aside>
      </div>

      {/* =====================================================
          DESKTOP — >= 1440px
      ====================================================== */}
      <div className="mt-16 hidden grid-cols-[minmax(0,2fr)_320px] gap-16 min-[1440px]:grid">
        <div className="relative aspect-[12/5] w-full overflow-hidden">
          <Image
            src={article.image}
            alt={article.imageAlt}
            fill
            priority
            sizes="calc(100vw - (2 * var(--page-gutter)) - 384px)"
            className="object-cover"
          />
        </div>

        <aside className="flex flex-col justify-between">
          <div>
            <p className="type-caption uppercase opacity-60">
              Article
            </p>

            <p className="mt-2 type-text type-lead">
              {formattedArticleNumber} / {formattedTotalArticles}
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <p className="type-caption uppercase opacity-60">
                Series
              </p>

              <p className="mt-2 type-text type-body">
                {seriesLabels[article.series]}
              </p>
            </div>

            <div>
              <p className="type-caption uppercase opacity-60">
                Reading time
              </p>

              <p className="mt-2 type-text type-body">
                {article.readingTime}
              </p>
            </div>

            <div>
              <p className="type-caption uppercase opacity-60">
                Published
              </p>

              <time
                dateTime={article.published}
                className="mt-2 block type-text type-body"
              >
                {article.published}
              </time>
            </div>
          </div>
        </aside>
      </div>
    </header>
  );
}