import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

export default function ButtonLink({
  href,
  children,
  className = "",
}: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={[
        "group",
        "inline-flex",
        "items-center",
        "gap-3",
        "rounded-sm",
        "type-button",
        "uppercase",
        "focus-visible:outline-none",
        "focus-visible:ring-2",
        "focus-visible:ring-[var(--color-sand)]",
        "focus-visible:ring-offset-2",
        "focus-visible:ring-offset-transparent",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <span
        aria-hidden="true"
        className={[
          "relative",
          "top-px",
          "inline-flex",
          "shrink-0",
          "items-center",
          "justify-center",
          "leading-none",
          "transition-transform",
          "[transition-duration:var(--motion-duration-fast)]",
          "ease-out",
          "group-hover:translate-x-1",
          "motion-reduce:transition-none",
          "motion-reduce:transform-none",
        ].join(" ")}
      >
        →
      </span>

      <span
        className={[
          "relative",
          "after:absolute",
          "after:bottom-0",
          "after:left-0",
          "after:h-px",
          "after:w-full",
          "after:origin-left",
          "after:scale-x-0",
          "after:bg-current",
          "after:transition-transform",
          "after:[transition-duration:var(--motion-duration-fast)]",
          "after:ease-out",
          "group-hover:after:scale-x-100",
          "motion-reduce:after:transition-none",
        ].join(" ")}
      >
        {children}
      </span>
    </Link>
  );
}