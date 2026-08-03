import type { HTMLAttributes, ReactNode } from "react";

type HeadingVariant =
  | "display"
  | "heading-xl"
  | "heading-lg"
  | "heading-serif";

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps = {
  as?: HeadingElement;
  variant?: HeadingVariant;
  children: ReactNode;
  className?: string;
} & Omit<
  HTMLAttributes<HTMLHeadingElement>,
  "children" | "className"
>;

const variantClasses: Record<HeadingVariant, string> = {
  display: "type-display",
  "heading-xl": "type-heading-xl",
  "heading-lg": "type-heading-lg",
  "heading-serif": "type-heading-serif",
};

export function Heading({
  as: Component = "h2",
  variant = "heading-xl",
  children,
  className,
  ...props
}: HeadingProps) {
  const classes = [
    "type-heading",
    variantClasses[variant],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Component className={classes} {...props}>
      {children}
    </Component>
  );
}