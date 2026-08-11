"use client";

import type {
  CSSProperties,
  HTMLAttributes,
  ReactNode,
} from "react";

import { useReveal } from "@/lib/motion/useReveal";

type RevealDirection = "up" | "down" | "left" | "right" | "none";
type RevealDuration = "fast" | "normal" | "slow";
type RevealDistance = "small" | "medium" | "large";

type RevealProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  children: ReactNode;
  direction?: RevealDirection;
  duration?: RevealDuration;
  distance?: RevealDistance;
  delay?: number;
  once?: boolean;
};

type RevealStyle = CSSProperties & {
  "--reveal-delay"?: string;
  "--reveal-duration"?: string;
  "--reveal-distance"?: string;
};

const durationTokens: Record<RevealDuration, string> = {
  fast: "var(--motion-duration-fast)",
  normal: "var(--motion-duration-normal)",
  slow: "var(--motion-duration-slow)",
};

const distanceTokens: Record<RevealDistance, string> = {
  small: "var(--motion-distance-small)",
  medium: "var(--motion-distance-medium)",
  large: "var(--motion-distance-large)",
};

export function Reveal({
  children,
  className,
  direction = "up",
  duration = "normal",
  distance = "medium",
  delay = 0,
  once = true,
  style,
  ...props
}: RevealProps) {
  const { ref, isVisible } = useReveal<HTMLDivElement>({ once });

  const revealStyle: RevealStyle = {
    ...style,
    "--reveal-delay": `${Math.max(0, delay)}ms`,
    "--reveal-duration": durationTokens[duration],
    "--reveal-distance": distanceTokens[distance],
  };

  return (
    <div
      {...props}
      ref={ref}
      className={["reveal", className].filter(Boolean).join(" ")}
      data-reveal-direction={direction}
      data-reveal-visible={isVisible ? "true" : "false"}
      style={revealStyle}
    >
      {children}
    </div>
  );
}