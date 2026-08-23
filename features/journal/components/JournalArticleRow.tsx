import Link from "next/link";

import { Reveal } from "@/components/motion/Reveal";
import ButtonLink from "@/components/ui/ButtonLink";
import type { Locale } from "@/i18n/config";

import { seriesLabels } from "../lib/seriesLabels";
import type { JournalArticle } from "../types";

type JournalArticleRowProps = {
  article: JournalArticle;
  locale: Locale;
};

export default function JournalArticleRow({
  article,
  locale,
}: JournalArticleRowProps) {
  return (
    <Reveal distance="small">
      <article className="group border-b border-[var(--color-sand)]/20 py-10 transition-colors duration-500 min-[834px]:py-12 min-[1440px]:py-16">
        <div className="grid gap-8 min-[834px]:grid-cols-[220px_minmax(0,1fr)_180px] min-[1440px]:grid-cols-[260px_minmax(0,1fr)_220px]">
          {/* Metadata */}
          <div className="flex flex-col">
            <p className="type-caption uppercase opacity-[var(--font-caption-opacity)]">
              {article.code}
            </p>

            <p className="mt-2 type-caption uppercase tracking-[0.08em] opacity-60">
              {seriesLabels[article.series]}
            </p>

            <time
              dateTime={article.published}
              className="mt-6 type-caption uppercase opacity-40"
            >
              {article.published}
            </time>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <Link href={`/${locale}/journal/${article.slug}`}>
              <h2
                className="
                  type-heading
                  type-heading-lg
                  max-w-[820px]
                  transition-all
                  duration-500
                  group-hover:translate-x-2
                  group-hover:opacity-80
                "
              >
                {article.title}
              </h2>
            </Link>

            <p className="mt-8 max-w-[680px] type-text type-body opacity-80">
              {article.description}
            </p>
          </div>

          {/* CTA */}
          <div className="flex flex-col justify-between min-[834px]:items-end">
            <p className="type-caption uppercase opacity-60">
              {article.readingTime}
            </p>

            <ButtonLink
              href={`/${locale}/journal/${article.slug}`}
              className="
                mt-8
                text-[var(--color-sand)]
                transition-transform
                duration-500
                group-hover:translate-x-2
              "
            >
              Read article
            </ButtonLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}