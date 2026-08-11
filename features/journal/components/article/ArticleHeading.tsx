import type { ReactNode } from "react";

type ArticleHeadingProps = {
  children: ReactNode;
  id?: string;
};

export default function ArticleHeading({
  children,
  id,
}: ArticleHeadingProps) {
  return (
    <h2
      id={id}
      className="
        type-heading
        type-heading-lg
        mt-12
        mb-6
        max-w-[760px]
      "
    >
      {children}
    </h2>
  );
}