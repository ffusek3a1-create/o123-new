import type { HTMLAttributes, ReactNode } from "react";

type TextVariant =
  | "lead-lg"
  | "lead"
  | "body"
  | "small"
  | "caption";

type TextElement =
  | "p"
  | "span"
  | "div"
  | "strong"
  | "em";

type TextProps = {
  as?: TextElement;
  variant?: TextVariant;
  children: ReactNode;
  className?: string;
} & Omit<
  HTMLAttributes<HTMLElement>,
  "children" | "className"
>;

const variantClasses: Record<TextVariant, string> = {
  "lead-lg": "type-lead-lg",
  lead: "type-lead",
  body: "type-body",
  small: "type-small",
  caption: "type-caption",
};

export function Text({
  as: Component = "p",
  variant = "body",
  children,
  className,
  ...props
}: TextProps) {
  const classes = [
    "type-text",
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