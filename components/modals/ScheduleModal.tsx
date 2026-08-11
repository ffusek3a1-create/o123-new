"use client";

import {
  useEffect,
  useState,
} from "react";

import ModalShell from "./ModalShell";
import { useModal } from "./ModalProvider";

type ScheduleModalProps = {
  isOpen: boolean;
  onClose: () => void;
  calendlyUrl?: string;
};

type CalendlyStatus =
  | "loading"
  | "ready"
  | "error";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: {
        url: string;
        parentElement: HTMLElement;
      }) => void;
    };
  }
}

export default function ScheduleModal({
  isOpen,
  onClose,
  calendlyUrl,
}: ScheduleModalProps) {
  const { openModal } = useModal();

  const [calendlyStatus, setCalendlyStatus] =
    useState<CalendlyStatus>("loading");

  useEffect(() => {
    if (!isOpen || !calendlyUrl) {
      return;
    }

    const container = document.getElementById(
      "calendly-inline-embed",
    );

    if (!container) {
      return;
    }

    setCalendlyStatus("loading");

    function initializeCalendly() {
      if (!window.Calendly) {
        setCalendlyStatus("error");
        return;
      }

      container.innerHTML = "";

      try {
        window.Calendly.initInlineWidget({
          url: calendlyUrl,
          parentElement: container,
        });

        setCalendlyStatus("ready");
      } catch {
        setCalendlyStatus("error");
      }
    }

    const existingScript =
      document.querySelector<HTMLScriptElement>(
        'script[src="https://assets.calendly.com/assets/external/widget.js"]',
      );

    if (existingScript) {
      if (window.Calendly) {
        initializeCalendly();
      } else {
        existingScript.addEventListener(
          "load",
          initializeCalendly,
          { once: true },
        );

        existingScript.addEventListener(
          "error",
          () => {
            setCalendlyStatus("error");
          },
          { once: true },
        );
      }

      return;
    }

    const script = document.createElement("script");

    script.src =
      "https://assets.calendly.com/assets/external/widget.js";

    script.async = true;

    script.addEventListener(
      "load",
      initializeCalendly,
      { once: true },
    );

    script.addEventListener(
      "error",
      () => {
        setCalendlyStatus("error");
      },
      { once: true },
    );

    document.body.appendChild(script);

    return () => {
      script.removeEventListener(
        "load",
        initializeCalendly,
      );
    };
  }, [isOpen, calendlyUrl]);

  function handleQuickContact() {
    onClose();

    window.setTimeout(() => {
      openModal("quick-contact");
    }, 0);
  }

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      titleId="schedule-modal-title"
    >
      <div
        className="
          px-[var(--page-gutter)]
          pb-12
          pt-24
          min-[834px]:pb-16
          min-[834px]:pt-28
          min-[1440px]:pb-20
        "
      >
        <header>
          <p className="type-caption uppercase opacity-60">
            Let&apos;s talk
          </p>

          <h2
            id="schedule-modal-title"
            className="
              mt-4
              max-w-[680px]
              type-heading
              type-heading-lg
            "
          >
            Schedule a call
          </h2>

          <p
            className="
              mt-5
              max-w-[620px]
              type-text
              type-lead
            "
          >
            Choose a time that works for you.
          </p>
        </header>

        <div className="relative mt-10 min-[834px]:mt-12">
          {!calendlyUrl && (
            <div
              className="
                flex
                min-h-[360px]
                items-center
                justify-center
                border-t
                border-[var(--color-sand)]/20
                text-center
              "
            >
              <p className="max-w-[420px] type-text type-body opacity-60">
                Booking is currently unavailable.
              </p>
            </div>
          )}

          {calendlyUrl && (
            <>
              {calendlyStatus === "loading" && (
                <div
                  className="
                    absolute
                    inset-0
                    z-10
                    flex
                    items-center
                    justify-center
                    bg-[var(--color-burgundy)]
                  "
                >
                  <p className="type-caption uppercase opacity-60">
                    Loading availability…
                  </p>
                </div>
              )}

              {calendlyStatus === "error" ? (
                <div
                  className="
                    flex
                    min-h-[360px]
                    items-center
                    justify-center
                    border-t
                    border-[var(--color-sand)]/20
                    text-center
                  "
                >
                  <div className="max-w-[420px]">
                    <p className="type-text type-body">
                      We couldn&apos;t load the calendar.
                    </p>

                    <p className="mt-3 type-text type-body opacity-60">
                      You can still contact us directly.
                    </p>
                  </div>
                </div>
              ) : (
                <div
                  id="calendly-inline-embed"
                  className="
                    h-[720px]
                    w-full
                    overflow-hidden
                    min-[834px]:h-[760px]
                    min-[1440px]:h-[800px]
                  "
                />
              )}
            </>
          )}
        </div>

        <div
          className="
            mt-8
            flex
            flex-wrap
            items-center
            justify-between
            gap-4
            border-t
            border-[var(--color-sand)]/20
            pt-6
          "
        >
          <p className="type-text type-body opacity-60">
            Can&apos;t find a suitable time?
          </p>

          <button
            type="button"
            onClick={handleQuickContact}
            className="
              group
              inline-flex
              items-center
              gap-3
              type-button
              text-[var(--color-sand)]
            "
          >
            <span
              aria-hidden="true"
              className="
                transition-transform
                duration-300
                ease-out
                group-hover:translate-x-1
                motion-reduce:transform-none
                motion-reduce:transition-none
              "
            >
              →
            </span>

            <span
              className="
                relative
                after:absolute
                after:bottom-0
                after:left-0
                after:h-px
                after:w-full
                after:origin-left
                after:scale-x-0
                after:bg-current
                after:transition-transform
                after:duration-300
                after:ease-out
                group-hover:after:scale-x-100
                motion-reduce:after:transition-none
              "
            >
              Let&apos;s chat
            </span>
          </button>
        </div>
      </div>
    </ModalShell>
  );
}