import type { ReactNode } from "react";

type ArticleLeadProps = {
  children: ReactNode;
};

export default function ArticleLead({
  children,
}: ArticleLeadProps) {
  return (
    <p
      className="
        type-text
        type-lead
        max-w-[760px]
        text-[var(--color-sand)]
      "
    >
      {children}
    </p>
  );
}