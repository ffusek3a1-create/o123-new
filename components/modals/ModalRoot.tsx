"use client";

import QuoteModal from "./QuoteModal";
import QuickContactModal from "./QuickContactModal";
import ScheduleModal from "./ScheduleModal";
import { useModal } from "./ModalProvider";

export default function ModalRoot() {
  const {
    activeModal,
    closeModal,
  } = useModal();

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL;

  const whatsappUrl =
    process.env.NEXT_PUBLIC_WHATSAPP_URL;

  const teamsUrl =
    process.env.NEXT_PUBLIC_TEAMS_URL;

  const contactEmail =
    process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  if (!activeModal) {
    return null;
  }

  if (activeModal === "quote") {
    return (
      <QuoteModal
        isOpen
        onClose={closeModal}
      />
    );
  }

  if (activeModal === "schedule") {
    return (
      <ScheduleModal
        isOpen
        onClose={closeModal}
        calendlyUrl={calendlyUrl}
      />
    );
  }

  if (activeModal === "quick-contact") {
    return (
      <QuickContactModal
        isOpen
        onClose={closeModal}
        whatsappUrl={whatsappUrl}
        teamsUrl={teamsUrl}
        email={contactEmail}
      />
    );
  }

  return null;
}