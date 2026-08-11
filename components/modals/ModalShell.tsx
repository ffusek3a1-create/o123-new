"use client";

import {
  useEffect,
  useRef,
  type ReactNode,
} from "react";
import { createPortal } from "react-dom";

type ModalShellProps = {
  isOpen: boolean;
  onClose: () => void;
  titleId: string;
  children: ReactNode;
  className?: string;
};

const focusableElementsSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  '[tabindex]:not([tabindex="-1"])',
].join(",");

export default function ModalShell({
  isOpen,
  onClose,
  titleId,
  children,
  className = "",
}: ModalShellProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocusedElement =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const dialog = dialogRef.current;

      if (!dialog) {
        return;
      }

      const focusableElements = Array.from(
        dialog.querySelectorAll<HTMLElement>(
          focusableElementsSelector,
        ),
      );

      if (focusableElements.length === 0) {
        event.preventDefault();
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement =
        focusableElements[focusableElements.length - 1];

      if (
        event.shiftKey &&
        document.activeElement === firstElement
      ) {
        event.preventDefault();
        lastElement.focus();
      }

      if (
        !event.shiftKey &&
        document.activeElement === lastElement
      ) {
        event.preventDefault();
        firstElement.focus();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;

      window.removeEventListener(
        "keydown",
        handleKeyDown,
      );

      previouslyFocusedElement?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div
      className="
        fixed
        inset-0
        z-[100]
        flex
        items-stretch
        bg-black/50
      "
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className={[
          "relative",
          "ml-auto",
          "h-full",
          "w-full",
          "overflow-y-auto",
          "bg-[var(--color-burgundy)]",
          "text-[var(--color-sand)]",
          "min-[834px]:max-w-[720px]",
          "min-[1440px]:max-w-[880px]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <button
          ref={closeButtonRef}
          type="button"
          aria-label="Close dialog"
          onClick={onClose}
          className="
            absolute
            right-[var(--page-gutter)]
            top-8
            z-10
            type-button
            text-[var(--color-sand)]
            transition-opacity
            duration-300
            hover:opacity-60
            focus-visible:outline
            focus-visible:outline-2
            focus-visible:outline-offset-4
            focus-visible:outline-current
          "
        >
          <span aria-hidden="true">×</span>
        </button>

        {children}
      </div>
    </div>,
    document.body,
  );
}