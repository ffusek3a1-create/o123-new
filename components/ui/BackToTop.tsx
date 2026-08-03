"use client";

import { useEffect, useState } from "react";

type BackToTopTheme = "sand" | "burgundy";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [theme, setTheme] = useState<BackToTopTheme>("sand");

  useEffect(() => {
    let animationFrameId: number | null = null;

    function updateBackToTop() {
      setIsVisible(window.scrollY > 700);

      const viewportCenter = window.innerHeight / 2;

      const sections = Array.from(
        document.querySelectorAll<HTMLElement>("[data-back-to-top-theme]"),
      );

      const activeSection = sections.find((section) => {
        const rect = section.getBoundingClientRect();

        return rect.top <= viewportCenter && rect.bottom >= viewportCenter;
      });

      const activeTheme = activeSection?.dataset.backToTopTheme;

      if (activeTheme === "sand" || activeTheme === "burgundy") {
        setTheme(activeTheme);
      }

      animationFrameId = null;
    }

    function handleScroll() {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(updateBackToTop);
    }

    updateBackToTop();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const colorClassName =
    theme === "burgundy"
      ? "text-[var(--color-burgundy)]"
      : "text-[var(--color-sand)]";

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={[
        "group fixed right-[calc(var(--page-gutter)-32px)] top-1/2 z-40",
        "hidden -translate-y-1/2 min-[1440px]:flex",
        "cursor-pointer",
        "flex-col items-center gap-2",
        "type-text type-caption uppercase",
        "transition-[color,opacity,transform] duration-300 ease-out",
        colorClassName,
        isVisible
          ? "pointer-events-auto translate-x-0 opacity-100"
          : "pointer-events-none translate-x-2 opacity-0",
        "group-hover:-translate-x-1",
      ].join(" ")}
    >
      <span
        aria-hidden="true"
        className={[
          "inline-flex",
          "transition-transform duration-300 ease-out",
          "group-hover:-translate-y-1.5",
          "motion-reduce:transform-none",
          "motion-reduce:transition-none",
        ].join(" ")}
      >
        ↑
      </span>

      <span
        aria-hidden="true"
        className={[
          "whitespace-nowrap",
          "[writing-mode:vertical-rl]",
          "opacity-70",
          "transition-opacity duration-300",
          "group-hover:opacity-100",
        ].join(" ")}
      >
        TO TOP
      </span>
    </button>
  );
}
