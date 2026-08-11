"use client";

import {
  createContext,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type ModalType =
  | "quote"
  | "schedule"
  | "quick-contact"
  | null;

type ModalContextValue = {
  activeModal: ModalType;
  openModal: (modal: Exclude<ModalType, null>) => void;
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

  function openModal(modal: Exclude<ModalType, null>) {
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