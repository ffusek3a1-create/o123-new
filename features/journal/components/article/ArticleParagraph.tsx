import type { ReactNode } from "react";

type ArticleParagraphProps = {
  children: ReactNode;
  className?: string;
};

export default function ArticleParagraph({
  children,
  className = "",
}: ArticleParagraphProps) {
  return (
    <p
      className={[
        "type-text",
        "type-body",
        "max-w-[720px]",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      {children}
    </p>
  );
}