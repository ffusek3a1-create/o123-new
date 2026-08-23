import Image from "next/image";

import ButtonLink from "@/components/ui/ButtonLink";
import type { Locale } from "@/i18n/config";

import { seriesLabels } from "../lib/seriesLabels";
import type { JournalArticle } from "../types";

type ArticleCardProps = {
  article: JournalArticle;
  locale: Locale;
};

export default function ArticleCard({
  article,
  locale,
}: ArticleCardProps) {
  return (
    <article className="flex h-full flex-col">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.imageAlt}
          fill
          sizes="
            (max-width: 833px) calc(100vw - 32px),
            (max-width: 1439px) calc(50vw - 48px),
            33vw
          "
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col pt-6">
        <div className="space-y-1">
          <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
            {article.code}
          </p>

          <p className="type-caption uppercase tracking-[0.08em] opacity-60">
            {seriesLabels[article.series]}
          </p>

          <time
            dateTime={article.published}
            className="type-caption uppercase opacity-40"
          >
            {article.published}
          </time>
        </div>

        <h2 className="mt-6 type-heading type-heading-lg">
          {article.title}
        </h2>

        <p className="mt-4 type-text type-body">
          {article.description}
        </p>

        <div className="mt-auto flex items-end justify-between gap-6 pt-8">
          <p className="type-caption uppercase">{article.readingTime}</p>

          <ButtonLink href={`/${locale}/journal/${article.slug}`}>
            Read article
          </ButtonLink>
        </div>
      </div>
    </article>
  );
}