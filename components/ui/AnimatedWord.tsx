"use client";

import { useEffect, useState } from "react";

type AnimatedWordProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  nextWordDelay?: number;
  className?: string;
};

export default function AnimatedWord({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseDuration = 1000,
  nextWordDelay = 250,
  className = "",
}: AnimatedWordProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [visibleText, setVisibleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateMotionPreference = () => {
      setReduceMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  useEffect(() => {
    if (words.length === 0 || reduceMotion) {
      return;
    }

    const currentWord = words[wordIndex];

    if (isPaused) {
      let deleteTimer: number | undefined;

      const pauseTimer = window.setTimeout(() => {
        setShowCursor(true);

        deleteTimer = window.setTimeout(() => {
          setIsDeleting(true);
          setIsPaused(false);
        }, 220);
      }, pauseDuration);

      return () => {
        window.clearTimeout(pauseTimer);

        if (deleteTimer !== undefined) {
          window.clearTimeout(deleteTimer);
        }
      };
    }

    if (!isDeleting && visibleText === currentWord) {
      const pauseStartTimer = window.setTimeout(() => {
        setShowCursor(false);
        setIsPaused(true);
      }, 0);

      return () => {
        window.clearTimeout(pauseStartTimer);
      };
    }

    if (isDeleting && visibleText === "") {
      const nextWordTimer = window.setTimeout(() => {
        setIsDeleting(false);
        setWordIndex((currentIndex) => {
          return (currentIndex + 1) % words.length;
        });
      }, nextWordDelay);

      return () => {
        window.clearTimeout(nextWordTimer);
      };
    }

    const nextText = isDeleting
      ? currentWord.slice(0, visibleText.length - 1)
      : currentWord.slice(0, visibleText.length + 1);

    const animationTimer = window.setTimeout(
      () => {
        setVisibleText(nextText);
      },
      isDeleting ? deletingSpeed : typingSpeed,
    );

    return () => {
      window.clearTimeout(animationTimer);
    };
  }, [
    deletingSpeed,
    isDeleting,
    isPaused,
    nextWordDelay,
    pauseDuration,
    reduceMotion,
    typingSpeed,
    visibleText,
    wordIndex,
    words,
  ]);

  if (words.length === 0) {
    return null;
  }

  const displayedText = reduceMotion ? words[0] : visibleText;
  const isAnimating = !reduceMotion && showCursor;

  return (
    <span
      className={[
        "inline-flex",
        "items-baseline",
        "whitespace-nowrap",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      aria-label={words[0]}
    >
      <span aria-hidden="true">{displayedText}</span>

      <span
        aria-hidden="true"
        className={[
          "ml-[0.08em]",
          "inline-block",
          "h-[0.85em]",
          "w-[1.5px]",
          "rounded-full",
          "opacity-80",
          "bg-current",
          "align-baseline",
          "transition-opacity",
          "duration-200",
          isAnimating ? "opacity-100" : "opacity-0",
        ].join(" ")}
      />
    </span>
  );
}