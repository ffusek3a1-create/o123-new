"use client";

import {
  useEffect,
  useRef,
  useState,
} from "react";

import { trackEvent } from "@/lib/analytics";

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

type CalendlyMessageData = {
  event?: string;
};

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

const calendlyScriptUrl =
  "https://assets.calendly.com/assets/external/widget.js";

const calendlyOrigin = "https://calendly.com";

export default function ScheduleModal({
  isOpen,
  onClose,
  calendlyUrl,
}: ScheduleModalProps) {
  const { openModal } = useModal();

  const [calendlyStatus, setCalendlyStatus] =
    useState<CalendlyStatus>("loading");

  const hasTrackedBookingRef = useRef(false);

  useEffect(() => {
    if (!isOpen) {
      hasTrackedBookingRef.current = false;
      return;
    }

    function handleCalendlyMessage(event: MessageEvent) {
      if (event.origin !== calendlyOrigin) {
        return;
      }

      const data = event.data as CalendlyMessageData | undefined;

      if (
        !data ||
        data.event !== "calendly.event_scheduled"
      ) {
        return;
      }

      if (hasTrackedBookingRef.current) {
        return;
      }

      hasTrackedBookingRef.current = true;

      trackEvent("schedule_call_booked", {
        booking_provider: "calendly",
      });
    }

    window.addEventListener(
      "message",
      handleCalendlyMessage,
    );

    return () => {
      window.removeEventListener(
        "message",
        handleCalendlyMessage,
      );
    };
  }, [isOpen]);

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

    const containerElement = container;
    const resolvedCalendlyUrl = calendlyUrl;

    let observer: MutationObserver | null = null;
    let loadTimeout: number | null = null;

    function clearLoadTimeout() {
      if (loadTimeout !== null) {
        window.clearTimeout(loadTimeout);
        loadTimeout = null;
      }
    }

    function markAsReadyWhenIframeExists() {
      const iframe =
        containerElement.querySelector("iframe");

      if (!iframe) {
        return false;
      }

      observer?.disconnect();
      observer = null;

      clearLoadTimeout();

      setCalendlyStatus("ready");

      return true;
    }

    function initializeCalendly() {
      const calendly = window.Calendly;

      if (!calendly) {
        setCalendlyStatus("error");
        return;
      }

      containerElement.innerHTML = "";

      observer = new MutationObserver(() => {
        markAsReadyWhenIframeExists();
      });

      observer.observe(containerElement, {
        childList: true,
        subtree: true,
      });

      try {
        calendly.initInlineWidget({
          url: resolvedCalendlyUrl,
          parentElement: containerElement,
        });

        markAsReadyWhenIframeExists();

        loadTimeout = window.setTimeout(() => {
          const iframe =
            containerElement.querySelector("iframe");

          if (iframe) {
            return;
          }

          observer?.disconnect();
          observer = null;

          setCalendlyStatus("error");
        }, 10000);
      } catch {
        observer?.disconnect();
        observer = null;

        clearLoadTimeout();

        setCalendlyStatus("error");
      }
    }

    function handleScriptError() {
      setCalendlyStatus("error");
    }

    const existingScript =
      document.querySelector<HTMLScriptElement>(
        `script[src="${calendlyScriptUrl}"]`,
      );

    let script: HTMLScriptElement;

    if (existingScript) {
      script = existingScript;

      if (window.Calendly) {
        initializeCalendly();
      } else {
        script.addEventListener(
          "load",
          initializeCalendly,
          { once: true },
        );

        script.addEventListener(
          "error",
          handleScriptError,
          { once: true },
        );
      }
    } else {
      script = document.createElement("script");

      script.src = calendlyScriptUrl;
      script.async = true;

      script.addEventListener(
        "load",
        initializeCalendly,
        { once: true },
      );

      script.addEventListener(
        "error",
        handleScriptError,
        { once: true },
      );

      document.body.appendChild(script);
    }

    return () => {
      observer?.disconnect();

      clearLoadTimeout();

      script.removeEventListener(
        "load",
        initializeCalendly,
      );

      script.removeEventListener(
        "error",
        handleScriptError,
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
                      You can still open Calendly directly or
                      contact us here.
                    </p>

                    <a
                      href={calendlyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        group
                        mt-6
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
                        Open Calendly
                      </span>
                    </a>
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