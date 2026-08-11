"use client";

import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { useReveal } from "@/lib/motion/useReveal";

type ImageRevealProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  "children"
> & {
  children: ReactNode;
  delay?: number;
  once?: boolean;
};

type ImageRevealStyle = CSSProperties & {
  "--image-reveal-delay"?: string;
};

export function ImageReveal({
  children,
  className,
  delay = 0,
  once = true,
  style,
  ...props
}: ImageRevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ once });

  const imageRevealStyle: ImageRevealStyle = {
    ...style,
    "--image-reveal-delay": `${Math.max(0, delay)}ms`,
  };

  return (
    <div
      {...props}
      ref={ref}
      className={["image-reveal", className].filter(Boolean).join(" ")}
      data-image-reveal-visible={isVisible ? "true" : "false"}
      style={imageRevealStyle}
    >
      <div className="image-reveal__content">{children}</div>
    </div>
  );
}