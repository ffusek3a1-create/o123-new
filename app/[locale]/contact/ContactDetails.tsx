"use client";

import { useModal } from "@/components/modals/ModalProvider";

type ContactDetailsContent = {
  email: {
    label: string;
    description: string;
  };

  whatsapp: {
    label: string;
    description: string;
  };

  teams: {
    label: string;
    description: string;
  };

  schedule: {
    label: string;
    value: string;
    description: string;
  };

  location: {
    label: string;
    value: string;
  };
};

type ContactDetailsProps = {
  content: ContactDetailsContent;
};

type ContactLabelProps = {
  children: React.ReactNode;
  interactive?: boolean;
};

const interactiveRowClassName = `
  group
  block
  w-full
  text-left
  transition-opacity
  duration-300
  ease-out
  hover:opacity-75
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-[var(--color-sand)]
  motion-reduce:transition-none
`;

function ContactLabel({
  children,
  interactive = false,
}: ContactLabelProps) {
  return (
    <div className="flex items-center gap-3">
      {interactive && (
        <span
          aria-hidden="true"
          className="
            type-caption
            opacity-60
            transition-transform
            duration-300
            ease-out
            group-hover:-translate-y-0.5
            group-hover:translate-x-0.5
            motion-reduce:transform-none
            motion-reduce:transition-none
          "
        >
          ↗
        </span>
      )}

      <p className="type-caption uppercase opacity-60">
        {children}
      </p>
    </div>
  );
}

export default function ContactDetails({
  content,
}: ContactDetailsProps) {
  const { openModal } = useModal();

  return (
    <div
      className="
        min-[1440px]:border-l
        min-[1440px]:border-[var(--color-sand)]/20
        min-[1440px]:pl-16
      "
    >
      <div
        className="
          border-y
          border-[var(--color-sand)]/20
          py-7
          min-[834px]:py-8
          min-[1440px]:border-t-0
          min-[1440px]:pt-0
        "
      >
        <a
          href="mailto:hello@o123.pl"
          className={interactiveRowClassName}
        >
          <ContactLabel interactive>
            {content.email.label}
          </ContactLabel>

          <p className="mt-4 type-text type-lead">
            hello@o123.pl
          </p>

          <p className="mt-2 type-text type-body opacity-60">
            {content.email.description}
          </p>
        </a>
      </div>

      <div
        className="
          border-b
          border-[var(--color-sand)]/20
          py-7
          min-[834px]:py-8
        "
      >
        <a
          href="https://wa.me/48533615713"
          target="_blank"
          rel="noreferrer"
          className={interactiveRowClassName}
        >
          <ContactLabel interactive>
            {content.whatsapp.label}
          </ContactLabel>

          <p className="mt-4 type-text type-lead">
            +48 533 615 713
          </p>

          <p className="mt-2 type-text type-body opacity-60">
            {content.whatsapp.description}
          </p>
        </a>
      </div>

      <div
        className="
          border-b
          border-[var(--color-sand)]/20
          py-7
          min-[834px]:py-8
        "
      >
        <button
          type="button"
          onClick={() => openModal("quick-contact")}
          className={interactiveRowClassName}
        >
          <ContactLabel interactive>
            {content.teams.label}
          </ContactLabel>

          <p className="mt-4 type-text type-lead">
            Microsoft Teams
          </p>

          <p className="mt-2 type-text type-body opacity-60">
            {content.teams.description}
          </p>
        </button>
      </div>

      <div
        className="
          border-b
          border-[var(--color-sand)]/20
          py-7
          min-[834px]:py-8
        "
      >
        <button
          type="button"
          onClick={() => openModal("schedule")}
          className={interactiveRowClassName}
        >
          <ContactLabel interactive>
            {content.schedule.label}
          </ContactLabel>

          <p className="mt-4 type-text type-lead">
            {content.schedule.value}
          </p>

          <p className="mt-2 type-text type-body opacity-60">
            {content.schedule.description}
          </p>
        </button>
      </div>

      <div className="pt-7 min-[834px]:pt-8">
        <ContactLabel>
          {content.location.label}
        </ContactLabel>

        <p className="mt-4 type-text type-lead">
          {content.location.value}
        </p>
      </div>
    </div>
  );
}