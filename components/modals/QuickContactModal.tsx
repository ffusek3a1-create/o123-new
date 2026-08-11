"use client";

import ModalShell from "./ModalShell";

type QuickContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
  whatsappUrl?: string;
  teamsUrl?: string;
  email?: string;
};

type ContactOptionProps = {
  number: string;
  title: string;
  description: string;
  label: string;
  href?: string;
};

function ContactOption({
  number,
  title,
  description,
  label,
  href,
}: ContactOptionProps) {
  return (
    <div
      className="
        grid
        gap-5
        border-b
        border-[var(--color-sand)]/20
        py-8
        min-[834px]:grid-cols-[72px_minmax(0,1fr)]
        min-[834px]:gap-8
        min-[834px]:py-10
      "
    >
      <span
        aria-hidden="true"
        className="type-caption opacity-40"
      >
        {number}
      </span>

      <div>
        <h3 className="type-heading type-heading-lg">
          {title}
        </h3>

        <p
          className="
            mt-4
            max-w-[520px]
            type-text
            type-body
            opacity-60
          "
        >
          {description}
        </p>

        {href ? (
          <a
            href={href}
            target={
              href.startsWith("mailto:")
                ? undefined
                : "_blank"
            }
            rel={
              href.startsWith("mailto:")
                ? undefined
                : "noreferrer"
            }
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
              {label}
            </span>
          </a>
        ) : (
          <p className="mt-6 type-caption uppercase opacity-40">
            Currently unavailable
          </p>
        )}
      </div>
    </div>
  );
}

export default function QuickContactModal({
  isOpen,
  onClose,
  whatsappUrl,
  teamsUrl,
  email,
}: QuickContactModalProps) {
  const emailUrl = email
    ? `mailto:${email}`
    : undefined;

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      titleId="quick-contact-modal-title"
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
            id="quick-contact-modal-title"
            className="
              mt-4
              max-w-[680px]
              type-heading
              type-heading-lg
            "
          >
            Let&apos;s chat
          </h2>

          <p
            className="
              mt-5
              max-w-[620px]
              type-text
              type-lead
            "
          >
            Choose the easiest way to reach us.
          </p>
        </header>

        <div
          className="
            mt-10
            border-t
            border-[var(--color-sand)]/20
            min-[834px]:mt-12
          "
        >
          <ContactOption
            number="01"
            title="WhatsApp"
            description="Quick message, fast response."
            label="Open WhatsApp"
            href={whatsappUrl}
          />

          <ContactOption
            number="02"
            title="Microsoft Teams"
            description="Start a conversation on Teams."
            label="Open Teams"
            href={teamsUrl}
          />

          <ContactOption
            number="03"
            title="E-mail"
            description="Prefer something more traditional?"
            label="Send an e-mail"
            href={emailUrl}
          />
        </div>
      </div>
    </ModalShell>
  );
}