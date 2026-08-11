"use client";

import { useState, type FormEvent } from "react";

import ModalShell from "./ModalShell";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormErrors = {
  email?: string;
  guests?: string;
};

type SubmitStatus =
  | "idle"
  | "submitting"
  | "success"
  | "error";

const projectTypes = [
  "Corporate experience",
  "Incentive journey",
  "Private event",
  "Team experience",
  "Bespoke project",
  "Not sure yet",
];

const budgetRanges = [
  "< €5k",
  "€5k–15k",
  "€15k–30k",
  "€30k–60k",
  "€60k+",
  "Not sure yet",
];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const sectionClassName = `
  grid
  gap-5
  border-b
  border-[var(--color-sand)]/20
  py-8
  min-[834px]:grid-cols-[72px_minmax(0,1fr)]
  min-[834px]:gap-8
  min-[834px]:py-12
`;

export default function QuoteModal({
  isOpen,
  onClose,
}: QuoteModalProps) {
  const [selectedProjectType, setSelectedProjectType] =
    useState<string | null>(null);

  const [selectedBudget, setSelectedBudget] =
    useState<string | null>(null);

  const [timeframe, setTimeframe] = useState("");
  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>("idle");

  const [submitError, setSubmitError] = useState("");

  function validateForm() {
    const nextErrors: FormErrors = {};
    const trimmedEmail = email.trim();
    const trimmedGuests = guests.trim();

    if (!trimmedEmail) {
      nextErrors.email = "Please enter your email address.";
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (trimmedGuests) {
      const guestsNumber = Number(trimmedGuests);

      if (
        !Number.isInteger(guestsNumber) ||
        guestsNumber <= 0
      ) {
        nextErrors.guests =
          "Please enter a whole number greater than 0.";
      }
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    if (submitStatus === "submitting") {
      return;
    }

    const isValid = validateForm();

    if (!isValid) {
      return;
    }

    setSubmitStatus("submitting");
    setSubmitError("");

    try {
      const response = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectType: selectedProjectType,
          budget: selectedBudget,
          timeframe: timeframe.trim(),
          guests: guests.trim(),
          message: message.trim(),
          email: email.trim(),
        }),
      });

      const result = (await response.json()) as {
        success?: boolean;
        error?: string;
      };

      if (!response.ok || !result.success) {
        throw new Error(
          result.error || "Unable to send your request.",
        );
      }

      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");

      setSubmitError(
        error instanceof Error
          ? error.message
          : "Unable to send your request.",
      );
    }
  }

  if (submitStatus === "success") {
    return (
      <ModalShell
        isOpen={isOpen}
        onClose={onClose}
        titleId="quote-modal-title"
      >
        <div
          className="
            flex
            min-h-full
            flex-col
            justify-between
            px-[var(--page-gutter)]
            pb-12
            pt-24
            min-[834px]:pb-20
            min-[834px]:pt-28
            min-[1440px]:pb-24
          "
        >
          <div
            role="status"
            aria-live="polite"
          >
            <p className="type-caption uppercase opacity-60">
              Request received
            </p>

            <h2
              id="quote-modal-title"
              className="
                mt-4
                max-w-[680px]
                type-heading
                type-heading-lg
              "
            >
              Thank you.
            </h2>

            <p
              className="
                mt-5
                max-w-[620px]
                type-text
                type-lead
              "
            >
              We&apos;ve got the first pieces of the story.
              We&apos;ll get back to you shortly.
            </p>
          </div>

          <div
            className="
              mt-16
              border-t
              border-[var(--color-sand)]/20
              pt-6
              min-[834px]:mt-20
              min-[834px]:pt-8
            "
          >
            <button
              type="button"
              onClick={onClose}
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
                Close
              </span>
            </button>
          </div>
        </div>
      </ModalShell>
    );
  }

  return (
    <ModalShell
      isOpen={isOpen}
      onClose={onClose}
      titleId="quote-modal-title"
    >
      <div
        className="
          px-[var(--page-gutter)]
          pb-12
          pt-24
          min-[834px]:pb-20
          min-[834px]:pt-28
          min-[1440px]:pb-24
        "
      >
        <header>
          <p className="type-caption uppercase opacity-60">
            Start a project
          </p>

          <h2
            id="quote-modal-title"
            className="
              mt-4
              max-w-[680px]
              type-heading
              type-heading-lg
            "
          >
            Request a quote
          </h2>

          <p
            className="
              mt-5
              max-w-[620px]
              type-text
              type-lead
            "
          >
            Tell us what you&apos;re thinking. A few details are enough to
            start.
          </p>
        </header>

        <form
          noValidate
          onSubmit={handleSubmit}
          className="
            mt-10
            border-t
            border-[var(--color-sand)]/20
            min-[834px]:mt-12
          "
        >
          <fieldset className={sectionClassName}>
            <legend className="sr-only">
              What are you planning?
            </legend>

            <span
              aria-hidden="true"
              className="type-caption opacity-40"
            >
              01
            </span>

            <div>
              <p className="type-caption uppercase opacity-60">
                What are you planning?
              </p>

              <div
                className="
                  mt-5
                  grid
                  grid-cols-1
                  gap-3
                  min-[834px]:grid-cols-2
                  min-[834px]:mt-6
                  min-[1440px]:grid-cols-3
                "
              >
                {projectTypes.map((projectType) => {
                  const isSelected =
                    selectedProjectType === projectType;

                  return (
                    <button
                      key={projectType}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() =>
                        setSelectedProjectType(projectType)
                      }
                      className={[
                        "min-h-14",
                        "border",
                        "px-4",
                        "py-3",
                        "text-left",
                        "type-text",
                        "type-body",
                        "transition-[background-color,color,border-color]",
                        "duration-300",
                        isSelected
                          ? [
                              "border-[var(--color-sand)]",
                              "bg-[var(--color-sand)]",
                              "text-[var(--color-burgundy)]",
                            ].join(" ")
                          : [
                              "border-[var(--color-sand)]/30",
                              "hover:border-[var(--color-sand)]",
                              "hover:bg-[var(--color-sand)]",
                              "hover:text-[var(--color-burgundy)]",
                            ].join(" "),
                      ].join(" ")}
                    >
                      {projectType}
                    </button>
                  );
                })}
              </div>
            </div>
          </fieldset>

          <fieldset className={sectionClassName}>
            <legend className="sr-only">
              Estimated budget
            </legend>

            <span
              aria-hidden="true"
              className="type-caption opacity-40"
            >
              02
            </span>

            <div>
              <p className="type-caption uppercase opacity-60">
                Estimated budget
              </p>

              <div
                className="
                  mt-5
                  grid
                  grid-cols-2
                  gap-3
                  min-[834px]:mt-6
                  min-[1440px]:grid-cols-3
                "
              >
                {budgetRanges.map((budgetRange) => {
                  const isSelected =
                    selectedBudget === budgetRange;

                  return (
                    <button
                      key={budgetRange}
                      type="button"
                      aria-pressed={isSelected}
                      onClick={() =>
                        setSelectedBudget(budgetRange)
                      }
                      className={[
                        "min-h-14",
                        "border",
                        "px-4",
                        "py-3",
                        "text-left",
                        "type-text",
                        "type-body",
                        "transition-[background-color,color,border-color]",
                        "duration-300",
                        isSelected
                          ? [
                              "border-[var(--color-sand)]",
                              "bg-[var(--color-sand)]",
                              "text-[var(--color-burgundy)]",
                            ].join(" ")
                          : [
                              "border-[var(--color-sand)]/30",
                              "hover:border-[var(--color-sand)]",
                              "hover:bg-[var(--color-sand)]",
                              "hover:text-[var(--color-burgundy)]",
                            ].join(" "),
                      ].join(" ")}
                    >
                      {budgetRange}
                    </button>
                  );
                })}
              </div>
            </div>
          </fieldset>

          <div className={sectionClassName}>
            <span
              aria-hidden="true"
              className="type-caption opacity-40"
            >
              03
            </span>

            <label>
              <span className="type-caption uppercase opacity-60">
                When?
              </span>

              <input
                type="text"
                name="timeframe"
                value={timeframe}
                onChange={(event) =>
                  setTimeframe(event.target.value)
                }
                placeholder="Date or approximate timeframe"
                className="
                  mt-4
                  w-full
                  border-b
                  border-[var(--color-sand)]/30
                  bg-transparent
                  pb-3
                  type-text
                  type-body
                  text-[var(--color-sand)]
                  outline-none
                  placeholder:text-[var(--color-sand)]/35
                  focus:border-[var(--color-sand)]
                  min-[834px]:mt-5
                "
              />
            </label>
          </div>

          <div className={sectionClassName}>
            <span
              aria-hidden="true"
              className="type-caption opacity-40"
            >
              04
            </span>

            <label>
              <span className="type-caption uppercase opacity-60">
                Number of guests
              </span>

              <input
                type="text"
                inputMode="numeric"
                name="guests"
                value={guests}
                aria-invalid={Boolean(errors.guests)}
                aria-describedby={
                  errors.guests
                    ? "quote-guests-error"
                    : undefined
                }
                onChange={(event) => {
                  setGuests(event.target.value);

                  if (errors.guests) {
                    setErrors((currentErrors) => ({
                      ...currentErrors,
                      guests: undefined,
                    }));
                  }
                }}
                placeholder="Approximate is fine"
                className={[
                  "mt-4",
                  "w-full",
                  "border-b",
                  "bg-transparent",
                  "pb-3",
                  "type-text",
                  "type-body",
                  "text-[var(--color-sand)]",
                  "outline-none",
                  "placeholder:text-[var(--color-sand)]/35",
                  "min-[834px]:mt-5",
                  errors.guests
                    ? "border-[var(--color-sand)]"
                    : "border-[var(--color-sand)]/30 focus:border-[var(--color-sand)]",
                ].join(" ")}
              />

              {errors.guests && (
                <p
                  id="quote-guests-error"
                  role="alert"
                  className="mt-3 type-text type-small"
                >
                  {errors.guests}
                </p>
              )}
            </label>
          </div>

          <div className={sectionClassName}>
            <span
              aria-hidden="true"
              className="type-caption opacity-40"
            >
              05
            </span>

            <label>
              <span className="type-caption uppercase opacity-60">
                Tell us a little about it
              </span>

              <textarea
                name="message"
                rows={4}
                value={message}
                onChange={(event) =>
                  setMessage(event.target.value)
                }
                placeholder="The idea, location, atmosphere or anything else we should know."
                className="
                  mt-4
                  w-full
                  resize-none
                  border-b
                  border-[var(--color-sand)]/30
                  bg-transparent
                  pb-3
                  type-text
                  type-body
                  text-[var(--color-sand)]
                  outline-none
                  placeholder:text-[var(--color-sand)]/35
                  focus:border-[var(--color-sand)]
                  min-[834px]:mt-5
                "
              />
            </label>
          </div>

          <div className={sectionClassName}>
            <span
              aria-hidden="true"
              className="type-caption opacity-40"
            >
              06
            </span>

            <label>
              <span className="type-caption uppercase opacity-60">
                Your email
              </span>

              <input
                type="email"
                name="email"
                autoComplete="email"
                value={email}
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email
                    ? "quote-email-error"
                    : undefined
                }
                onChange={(event) => {
                  setEmail(event.target.value);

                  if (errors.email) {
                    setErrors((currentErrors) => ({
                      ...currentErrors,
                      email: undefined,
                    }));
                  }
                }}
                placeholder="you@company.com"
                className={[
                  "mt-4",
                  "w-full",
                  "border-b",
                  "bg-transparent",
                  "pb-3",
                  "type-text",
                  "type-body",
                  "text-[var(--color-sand)]",
                  "outline-none",
                  "placeholder:text-[var(--color-sand)]/35",
                  "min-[834px]:mt-5",
                  errors.email
                    ? "border-[var(--color-sand)]"
                    : "border-[var(--color-sand)]/30 focus:border-[var(--color-sand)]",
                ].join(" ")}
              />

              {errors.email && (
                <p
                  id="quote-email-error"
                  role="alert"
                  className="mt-3 type-text type-small"
                >
                  {errors.email}
                </p>
              )}
            </label>
          </div>

          <div className="pt-8 min-[834px]:pt-12">
            {submitStatus === "error" && (
              <p
                role="alert"
                className="mb-6 type-text type-small"
              >
                {submitError}
              </p>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={submitStatus === "submitting"}
                aria-busy={submitStatus === "submitting"}
                className="
                  group
                  inline-flex
                  items-center
                  gap-3
                  type-button
                  text-[var(--color-sand)]
                  disabled:cursor-default
                  disabled:opacity-50
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
                  {submitStatus === "submitting"
                    ? "Sending..."
                    : "Send request"}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </ModalShell>
  );
}