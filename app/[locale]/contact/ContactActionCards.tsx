"use client";

import { useModal } from "@/components/modals/ModalProvider";

type ContactActionCardsContent = {
  label: string;

  heading: {
    firstLine: string;
    secondLine: string;
  };

  quote: {
    title: string;
    description: string;
    cta: string;
  };

  schedule: {
    title: string;
    description: string;
    cta: string;
  };

  chat: {
    title: string;
    description: string;
    cta: string;
  };
};

type ContactActionCardsProps = {
  content: ContactActionCardsContent;
};

const cardClassName = `
  group
  flex
  min-h-[280px]
  flex-col
  justify-between
  overflow-hidden
  bg-[var(--color-sand)]
  p-6
  text-left
  text-[var(--color-burgundy)]
  transition-transform
  duration-500
  ease-out
  hover:-translate-y-1
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-4
  focus-visible:outline-[var(--color-sand)]
  motion-reduce:transform-none
  motion-reduce:transition-none
  min-[834px]:min-h-[300px]
  min-[1440px]:min-h-[320px]
  min-[1440px]:p-8
`;

const topArrowClassName = `
  type-caption
  opacity-60
  transition-transform
  duration-500
  ease-out
  group-hover:-translate-y-1
  group-hover:translate-x-1
  motion-reduce:transform-none
  motion-reduce:transition-none
`;

const ctaArrowClassName = `
  inline-flex
  transition-transform
  duration-500
  ease-out
  group-hover:translate-x-2
  motion-reduce:transform-none
  motion-reduce:transition-none
`;

const ctaLabelClassName = `
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
  after:duration-500
  after:ease-out
  group-hover:after:scale-x-100
  motion-reduce:after:transition-none
`;

export default function ContactActionCards({
  content,
}: ContactActionCardsProps) {
  const { openModal } = useModal();

  return (
    <div
      className="
        mt-12
        grid
        grid-cols-1
        gap-4
        min-[834px]:grid-cols-2
        min-[1440px]:mt-16
        min-[1440px]:grid-cols-3
      "
    >
      <button
        type="button"
        onClick={() => openModal("quote")}
        className={cardClassName}
      >
        <div className="flex w-full items-start justify-between">
          <p className="type-caption uppercase opacity-60">
            01
          </p>

          <span
            aria-hidden="true"
            className={topArrowClassName}
          >
            ↗
          </span>
        </div>

        <div>
          <h3 className="type-heading type-heading-lg">
            {content.quote.title}
          </h3>

          <div
            aria-hidden="true"
            className="
              mt-6
              h-px
              w-8
              bg-current
              opacity-40
              transition-[width]
              duration-500
              ease-out
              group-hover:w-14
              motion-reduce:transition-none
            "
          />

          <p className="mt-6 max-w-[320px] type-text type-body opacity-70">
            {content.quote.description}
          </p>

          <p className="mt-8 inline-flex items-center gap-3 type-button uppercase">
            <span
              aria-hidden="true"
              className={ctaArrowClassName}
            >
              →
            </span>

            <span className={ctaLabelClassName}>
              {content.quote.cta}
            </span>
          </p>
        </div>
      </button>

      <button
        type="button"
        onClick={() => openModal("schedule")}
        className={cardClassName}
      >
        <div className="flex w-full items-start justify-between">
          <p className="type-caption uppercase opacity-60">
            02
          </p>

          <span
            aria-hidden="true"
            className={topArrowClassName}
          >
            ↗
          </span>
        </div>

        <div>
          <h3 className="type-heading type-heading-lg">
            {content.schedule.title}
          </h3>

          <div
            aria-hidden="true"
            className="
              mt-6
              h-px
              w-8
              bg-current
              opacity-40
              transition-[width]
              duration-500
              ease-out
              group-hover:w-14
              motion-reduce:transition-none
            "
          />

          <p className="mt-6 max-w-[320px] type-text type-body opacity-70">
            {content.schedule.description}
          </p>

          <p className="mt-8 inline-flex items-center gap-3 type-button uppercase">
            <span
              aria-hidden="true"
              className={ctaArrowClassName}
            >
              →
            </span>

            <span className={ctaLabelClassName}>
              {content.schedule.cta}
            </span>
          </p>
        </div>
      </button>

      <button
        type="button"
        onClick={() => openModal("quick-contact")}
        className={`
          ${cardClassName}
          min-[834px]:col-span-2
          min-[1440px]:col-span-1
        `}
      >
        <div className="flex w-full items-start justify-between">
          <p className="type-caption uppercase opacity-60">
            03
          </p>

          <span
            aria-hidden="true"
            className={topArrowClassName}
          >
            ↗
          </span>
        </div>

        <div>
          <h3 className="type-heading type-heading-lg">
            {content.chat.title}
          </h3>

          <div
            aria-hidden="true"
            className="
              mt-6
              h-px
              w-8
              bg-current
              opacity-40
              transition-[width]
              duration-500
              ease-out
              group-hover:w-14
              motion-reduce:transition-none
            "
          />

          <p className="mt-6 max-w-[320px] type-text type-body opacity-70">
            {content.chat.description}
          </p>

          <p className="mt-8 inline-flex items-center gap-3 type-button uppercase">
            <span
              aria-hidden="true"
              className={ctaArrowClassName}
            >
              →
            </span>

            <span className={ctaLabelClassName}>
              {content.chat.cta}
            </span>
          </p>
        </div>
      </button>
    </div>
  );
}