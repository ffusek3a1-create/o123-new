"use client";

import { useCallback, useRef, useState, type RefCallback } from "react";

import { observe } from "@/lib/motion/observer";

type UseRevealOptions = {
  once?: boolean;
};

type UseRevealResult<T extends HTMLElement> = {
  ref: RefCallback<T>;
  isVisible: boolean;
};

export function useReveal<T extends HTMLElement = HTMLDivElement>({
  once = true,
}: UseRevealOptions = {}): UseRevealResult<T> {
  const [isVisible, setIsVisible] = useState(false);

  const cleanupRef = useRef<(() => void) | null>(null);
  const hasRevealedRef = useRef(false);

  const ref = useCallback<RefCallback<T>>(
    (element) => {
      cleanupRef.current?.();
      cleanupRef.current = null;

      if (!element) {
        return;
      }

      element.dataset.revealReady = "true";

      if (once && hasRevealedRef.current) {
        setIsVisible(true);
        return;
      }

      cleanupRef.current = observe(element, (entry) => {
        if (entry.isIntersecting) {
          hasRevealedRef.current = true;
          setIsVisible(true);

          if (once) {
            cleanupRef.current?.();
            cleanupRef.current = null;
          }

          return;
        }

        if (!once) {
          setIsVisible(false);
        }
      });
    },
    [once],
  );

  return {
    ref,
    isVisible,
  };
}