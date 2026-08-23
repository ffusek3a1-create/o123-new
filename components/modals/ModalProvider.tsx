"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

import {
  trackEvent,
  type CtaLocation,
} from "@/lib/analytics";

export type ModalType =
  | "quote"
  | "schedule"
  | "quick-contact"
  | null;

type OpenModalOptions = {
  ctaLocation?: CtaLocation;
};

type ModalContextValue = {
  activeModal: ModalType;
  openModal: (
    modal: Exclude<ModalType, null>,
    options?: OpenModalOptions,
  ) => void;
  closeModal: () => void;
};

const ModalContext = createContext<ModalContextValue | null>(null);

type ModalProviderProps = {
  children: ReactNode;
};

export function ModalProvider({
  children,
}: ModalProviderProps) {
  const [activeModal, setActiveModal] =
    useState<ModalType>(null);

  function openModal(
    modal: Exclude<ModalType, null>,
    options?: OpenModalOptions,
  ) {
    const eventParams = options?.ctaLocation
      ? {
          cta_location: options.ctaLocation,
        }
      : undefined;

    if (modal === "schedule") {
      trackEvent("schedule_call_click", eventParams);
    }

    if (modal === "quote") {
      trackEvent("request_quote_click", eventParams);
    }

    if (modal === "quick-contact") {
      trackEvent("quick_contact_click", eventParams);
    }

    setActiveModal(modal);
  }

  function closeModal() {
    setActiveModal(null);
  }

  return (
    <ModalContext.Provider
      value={{
        activeModal,
        openModal,
        closeModal,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error(
      "useModal must be used within ModalProvider",
    );
  }

  return context;
}