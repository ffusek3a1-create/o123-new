"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState, type FormEvent } from "react";

import { trackEvent } from "@/lib/analytics";
import { getAnalyticsAttribution } from "@/lib/analytics-attribution";

import ModalShell from "./ModalShell";

type QuoteModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormErrors = {
  email?: string;
  guests?: string;
  phone?: string;
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
const phonePattern = /^[+()\d\s.-]{6,30}$/;

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

const calendarWeekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function isSameDay(firstDate: Date | null, secondDate: Date | null) {
  if (!firstDate || !secondDate) {
    return false;
  }

  return (
    firstDate.getFullYear() === secondDate.getFullYear() &&
    firstDate.getMonth() === secondDate.getMonth() &&
    firstDate.getDate() === secondDate.getDate()
  );
}

function isDateBetween(
  date: Date,
  startDate: Date | null,
  endDate: Date | null,
) {
  if (!startDate || !endDate) {
    return false;
  }

  const current = startOfDay(date).getTime();
  const start = startOfDay(startDate).getTime();
  const end = startOfDay(endDate).getTime();

  return current > start && current < end;
}

function formatDisplayDate(date: Date) {
  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .replace(",", "")
    .toUpperCase();
}

function formatTimeframe(startDate: Date, endDate: Date | null) {
  if (!endDate || isSameDay(startDate, endDate)) {
    return formatDisplayDate(startDate);
  }

  return `${formatDisplayDate(startDate)} — ${formatDisplayDate(endDate)}`;
}

function getCalendarDays(month: Date) {
  const year = month.getFullYear();
  const monthIndex = month.getMonth();
  const firstDay = new Date(year, monthIndex, 1);

  // Convert Sunday-first (0–6) into Monday-first (0–6).
  const leadingDays = (firstDay.getDay() + 6) % 7;
  const calendarStart = new Date(year, monthIndex, 1 - leadingDays);

  return Array.from({ length: 42 }, (_, index) => {
    const date = new Date(
      calendarStart.getFullYear(),
      calendarStart.getMonth(),
      calendarStart.getDate() + index,
    );

    return {
      date,
      isCurrentMonth: date.getMonth() === monthIndex,
    };
  });
}

export default function QuoteModal({
  isOpen,
  onClose,
}: QuoteModalProps) {
  const params = useParams<{ locale?: string }>();
  const locale = params.locale ?? "pl";

  const [selectedProjectType, setSelectedProjectType] =
    useState<string | null>(null);

  const [selectedBudget, setSelectedBudget] =
    useState<string | null>(null);

  const [timeframe, setTimeframe] = useState("");
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false);
  const [isTimeframeUnknown, setIsTimeframeUnknown] = useState(false);
  const [calendarMonth, setCalendarMonth] = useState(
    () => new Date(new Date().getFullYear(), new Date().getMonth(), 1),
  );

  const [guests, setGuests] = useState("");
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyWebsite, setCompanyWebsite] = useState("");

  const [errors, setErrors] = useState<FormErrors>({});

  const [submitStatus, setSubmitStatus] =
    useState<SubmitStatus>("idle");

  const [submitError, setSubmitError] = useState("");

  function handleDateSelect(date: Date) {
    setIsTimeframeUnknown(false);

    if (!startDate || endDate) {
      setStartDate(date);
      setEndDate(null);
      setTimeframe(formatTimeframe(date, null));
      return;
    }

    const selectedTime = startOfDay(date).getTime();
    const startTime = startOfDay(startDate).getTime();

    if (selectedTime < startTime) {
      setStartDate(date);
      setEndDate(startDate);
      setTimeframe(formatTimeframe(date, startDate));
    } else {
      setEndDate(date);
      setTimeframe(formatTimeframe(startDate, date));
    }

    setIsDatePickerOpen(false);
  }

  function handleTimeframeUnknown() {
    setIsTimeframeUnknown((currentValue) => {
      const nextValue = !currentValue;

      if (nextValue) {
        setStartDate(null);
        setEndDate(null);
        setTimeframe("Not sure yet");
        setIsDatePickerOpen(false);
      } else {
        setTimeframe("");
      }

      return nextValue;
    });
  }

  function changeCalendarMonth(offset: number) {
    setCalendarMonth((currentMonth) => {
      return new Date(
        currentMonth.getFullYear(),
        currentMonth.getMonth() + offset,
        1,
      );
    });
  }

  function validateForm() {
    const nextErrors: FormErrors = {};
    const trimmedEmail = email.trim();
    const trimmedGuests = guests.trim();
    const trimmedPhone = phone.trim();

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

    if (trimmedPhone && !phonePattern.test(trimmedPhone)) {
      nextErrors.phone = "Please enter a valid phone number.";
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
          phone: phone.trim(),
          companyWebsite: companyWebsite.trim(),
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

      trackEvent("generate_lead", {
        ...getAnalyticsAttribution(),
        lead_source: "request_quote",
        project_type: selectedProjectType ?? "not_selected",
        budget_range: selectedBudget ?? "not_selected",
      });

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
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor="quote-company-website">
              Company website
            </label>
            <input
              id="quote-company-website"
              type="text"
              name="companyWebsite"
              tabIndex={-1}
              autoComplete="off"
              value={companyWebsite}
              onChange={(event) => setCompanyWebsite(event.target.value)}
            />
          </div>

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

            <div>
              <p className="type-caption uppercase opacity-60">
                When?
              </p>

              <div className="mt-5 min-[834px]:mt-6">
                <p className="type-caption uppercase opacity-60">
                  Date / timeframe
                </p>

                <button
                  type="button"
                  aria-expanded={isDatePickerOpen}
                  aria-controls="quote-date-picker"
                  onClick={() => {
                    if (isTimeframeUnknown) {
                      setIsTimeframeUnknown(false);
                      setTimeframe("");
                    }

                    setIsDatePickerOpen((currentValue) => !currentValue);
                  }}
                  className="
                    group
                    mt-3
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-6
                    border-b
                    border-[var(--color-sand)]/30
                    bg-transparent
                    pb-3
                    text-left
                    type-text
                    type-body
                    text-[var(--color-sand)]
                    transition-colors
                    duration-300
                    hover:border-[var(--color-sand)]
                    focus-visible:border-[var(--color-sand)]
                    focus-visible:outline-none
                  "
                >
                  <span
                    className={
                      timeframe
                        ? "text-[var(--color-sand)]"
                        : "text-[var(--color-sand)]/40"
                    }
                  >
                    {timeframe || "Select date"}
                  </span>

                  <span
                    aria-hidden="true"
                    className={[
                      "shrink-0",
                      "transition-transform",
                      "duration-300",
                      isDatePickerOpen ? "rotate-180" : "rotate-0",
                    ].join(" ")}
                  >
                    ↓
                  </span>
                </button>

                {isDatePickerOpen && (
                  <div
                    id="quote-date-picker"
                    className="
                      mt-5
                      border
                      border-[var(--color-sand)]/25
                      p-4
                      min-[834px]:mt-6
                      min-[834px]:p-5
                    "
                  >
                    <div className="flex items-center justify-between">
                      <button
                        type="button"
                        aria-label="Previous month"
                        onClick={() => changeCalendarMonth(-1)}
                        className="
                          type-button
                          transition-transform
                          duration-300
                          ease-out
                          hover:-translate-x-1
                          focus-visible:outline-none
                          motion-reduce:transform-none
                          motion-reduce:transition-none
                        "
                      >
                        ←
                      </button>

                      <p className="type-caption uppercase">
                        {new Intl.DateTimeFormat("en-GB", {
                          month: "long",
                          year: "numeric",
                        })
                          .format(calendarMonth)
                          .toUpperCase()}
                      </p>

                      <button
                        type="button"
                        aria-label="Next month"
                        onClick={() => changeCalendarMonth(1)}
                        className="
                          type-button
                          transition-transform
                          duration-300
                          ease-out
                          hover:translate-x-1
                          focus-visible:outline-none
                          motion-reduce:transform-none
                          motion-reduce:transition-none
                        "
                      >
                        →
                      </button>
                    </div>

                    <div className="mt-5 grid grid-cols-7 gap-px">
                      {calendarWeekdays.map((weekday) => (
                        <span
                          key={weekday}
                          className="
                            flex
                            h-8
                            items-center
                            justify-center
                            type-caption
                            opacity-40
                          "
                        >
                          {weekday}
                        </span>
                      ))}

                      {getCalendarDays(calendarMonth).map(
                        ({ date, isCurrentMonth }) => {
                          const isStart = isSameDay(date, startDate);
                          const isEnd = isSameDay(date, endDate);
                          const isInRange = isDateBetween(
                            date,
                            startDate,
                            endDate,
                          );
                          const isSelected = isStart || isEnd;

                          return (
                            <button
                              key={date.toISOString()}
                              type="button"
                              aria-label={new Intl.DateTimeFormat("en-GB", {
                                weekday: "long",
                                day: "numeric",
                                month: "long",
                                year: "numeric",
                              }).format(date)}
                              aria-pressed={isSelected}
                              onClick={() => handleDateSelect(date)}
                              className={[
                                "relative",
                                "flex",
                                "aspect-square",
                                "items-center",
                                "justify-center",
                                "border",
                                "border-transparent",
                                "type-text",
                                "type-small",
                                "transition-[background-color,color,border-color,opacity]",
                                "duration-200",
                                "focus-visible:border-[var(--color-sand)]",
                                "focus-visible:outline-none",
                                isCurrentMonth
                                  ? "opacity-100"
                                  : "opacity-25",
                                isInRange
                                  ? "bg-[var(--color-sand)]/10"
                                  : "",
                                isSelected
                                  ? "border-[var(--color-sand)] bg-[var(--color-sand)] text-[var(--color-burgundy)]"
                                  : "hover:border-[var(--color-sand)]/50",
                              ].join(" ")}
                            >
                              {date.getDate()}
                            </button>
                          );
                        },
                      )}
                    </div>

                    <p className="mt-4 type-caption opacity-50">
                      Select one date or choose a start and end date.
                    </p>
                  </div>
                )}

                <button
                  type="button"
                  aria-pressed={isTimeframeUnknown}
                  onClick={handleTimeframeUnknown}
                  className={[
                    "mt-5",
                    "type-caption",
                    "uppercase",
                    "transition-opacity",
                    "duration-300",
                    "focus-visible:outline-none",
                    isTimeframeUnknown
                      ? "opacity-100"
                      : "opacity-60 hover:opacity-100",
                  ].join(" ")}
                >
                  {isTimeframeUnknown ? "✓ " : ""}
                  Not sure yet
                </button>

                <input
                  type="hidden"
                  name="timeframe"
                  value={timeframe}
                />
              </div>
            </div>
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

            <div>
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

              <label className="mt-8 block min-[834px]:mt-10">
                <span className="type-caption uppercase opacity-60">
                  Phone (optional)
                </span>

                <input
                  type="tel"
                  inputMode="tel"
                  name="phone"
                  autoComplete="tel"
                  value={phone}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={
                    errors.phone
                      ? "quote-phone-error"
                      : undefined
                  }
                  onChange={(event) => {
                    setPhone(event.target.value);

                    if (errors.phone) {
                      setErrors((currentErrors) => ({
                        ...currentErrors,
                        phone: undefined,
                      }));
                    }
                  }}
                  placeholder="+48 500 000 000"
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
                    errors.phone
                      ? "border-[var(--color-sand)]"
                      : "border-[var(--color-sand)]/30 focus:border-[var(--color-sand)]",
                  ].join(" ")}
                />

                {errors.phone && (
                  <p
                    id="quote-phone-error"
                    role="alert"
                    className="mt-3 type-text type-small"
                  >
                    {errors.phone}
                  </p>
                )}
              </label>
            </div>
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

            <p className="mb-6 max-w-[620px] type-text type-small opacity-60">
              By sending this request, you acknowledge that your data will be
              processed to handle your enquiry in accordance with our{" "}
              <Link
                href={`/${locale}/privacy`}
                className="underline underline-offset-4 transition-opacity duration-300 hover:opacity-70 motion-reduce:transition-none"
              >
                Privacy Policy
              </Link>
              .
            </p>

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