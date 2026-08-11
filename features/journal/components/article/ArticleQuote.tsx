import type { ReactNode } from "react";

type ArticleQuoteProps = {
  children: ReactNode;
};

export default function ArticleQuote({
  children,
}: ArticleQuoteProps) {
  return (
    <blockquote
      className="
        my-20
        max-w-[840px]
        border-l
        border-[var(--color-sand)]/25
        pl-8
      "
    >
      <p
        className="
          type-heading-serif
          text-[var(--color-sand)]
        "
      >
        {children}
      </p>
    </blockquote>
  );
}