"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

import type { Locale } from "@/i18n/config";

const CONSENT_STORAGE_KEY = "o123-cookie-consent-v1";
const CONSENT_VERSION = 1;
const CONSENT_CHANGE_EVENT = "o123-consent-change";

type CookieConsentProps = {
  locale: Locale;
};

type StoredConsent = {
  version: number;
  analytics: boolean;
  updatedAt: string;
};

type ConsentContent = {
  manage: string;
  message: string;
  privacy: string;
  accept: string;
  reject: string;
  settings: string;
  save: string;
  necessaryTitle: string;
  necessaryDescription: string;
  analyticsTitle: string;
  analyticsDescription: string;
  alwaysActive: string;
};

const contentByLocale: Record<Locale, ConsentContent> = {
  pl: {
    manage: "Cookies",
    message:
      "Korzystamy z analityki, aby lepiej rozumieć sposób korzystania z o123.pl.",
    privacy: "Polityka prywatności",
    accept: "Akceptuj",
    reject: "Tylko niezbędne",
    settings: "Ustawienia",
    save: "Zapisz wybór",
    necessaryTitle: "Niezbędne",
    necessaryDescription:
      "Technologie wymagane do prawidłowego działania strony i zapamiętania Twojego wyboru.",
    analyticsTitle: "Analityka",
    analyticsDescription:
      "Pomaga nam zrozumieć, w jaki sposób odwiedzający korzystają z serwisu.",
    alwaysActive: "Zawsze aktywne",
  },

  en: {
    manage: "Cookies",
    message:
      "We use analytics to better understand how visitors use o123.pl.",
    privacy: "Privacy Policy",
    accept: "Accept",
    reject: "Essential only",
    settings: "Settings",
    save: "Save choice",
    necessaryTitle: "Essential",
    necessaryDescription:
      "Technologies required for the website to work correctly and to remember your choice.",
    analyticsTitle: "Analytics",
    analyticsDescription:
      "Helps us understand how visitors use the website.",
    alwaysActive: "Always active",
  },

  de: {
    manage: "Cookies",
    message:
      "Wir verwenden Analysen, um besser zu verstehen, wie o123.pl genutzt wird.",
    privacy: "Datenschutzerklärung",
    accept: "Akzeptieren",
    reject: "Nur notwendige",
    settings: "Einstellungen",
    save: "Auswahl speichern",
    necessaryTitle: "Notwendig",
    necessaryDescription:
      "Technologien, die für die korrekte Funktion der Website und zum Speichern Ihrer Auswahl erforderlich sind.",
    analyticsTitle: "Analyse",
    analyticsDescription:
      "Hilft uns zu verstehen, wie Besucher die Website nutzen.",
    alwaysActive: "Immer aktiv",
  },

  cs: {
    manage: "Cookies",
    message:
      "Používáme analytiku, abychom lépe porozuměli tomu, jak návštěvníci používají o123.pl.",
    privacy: "Zásady ochrany osobních údajů",
    accept: "Povolit",
    reject: "Pouze nezbytné",
    settings: "Nastavení",
    save: "Uložit volbu",
    necessaryTitle: "Nezbytné",
    necessaryDescription:
      "Technologie potřebné pro správné fungování webu a zapamatování vaší volby.",
    analyticsTitle: "Analytika",
    analyticsDescription:
      "Pomáhá nám pochopit, jak návštěvníci web používají.",
    alwaysActive: "Vždy aktivní",
  },
};

function parseStoredConsent(
  storedValue: string | null,
): StoredConsent | null {
  if (!storedValue) {
    return null;
  }

  try {
    const parsedValue = JSON.parse(storedValue) as StoredConsent;

    if (
      parsedValue.version !== CONSENT_VERSION ||
      typeof parsedValue.analytics !== "boolean" ||
      typeof parsedValue.updatedAt !== "string"
    ) {
      return null;
    }

    return parsedValue;
  } catch {
    return null;
  }
}

function getConsentSnapshot(): string | null {
  return window.localStorage.getItem(CONSENT_STORAGE_KEY);
}

function getServerConsentSnapshot(): null {
  return null;
}

function subscribeToConsentChanges(
  onStoreChange: () => void,
): () => void {
  function handleStorage(event: StorageEvent) {
    if (event.key === CONSENT_STORAGE_KEY) {
      onStoreChange();
    }
  }

  function handleConsentChange() {
    onStoreChange();
  }

  window.addEventListener("storage", handleStorage);
  window.addEventListener(
    CONSENT_CHANGE_EVENT,
    handleConsentChange,
  );

  return () => {
    window.removeEventListener("storage", handleStorage);
    window.removeEventListener(
      CONSENT_CHANGE_EVENT,
      handleConsentChange,
    );
  };
}

function persistConsent(analytics: boolean) {
  const consent: StoredConsent = {
    version: CONSENT_VERSION,
    analytics,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(
    CONSENT_STORAGE_KEY,
    JSON.stringify(consent),
  );

  window.dispatchEvent(new Event(CONSENT_CHANGE_EVENT));
}

function updateGoogleConsent(analytics: boolean) {
  const googleWindow = window as typeof window & {
    gtag?: (...args: unknown[]) => void;
  };

  if (typeof googleWindow.gtag !== "function") {
    return;
  }

  googleWindow.gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}

const secondaryTextClassName = "type-caption uppercase";

export default function CookieConsent({
  locale,
}: CookieConsentProps) {
  const content = contentByLocale[locale];

  const storedConsentValue = useSyncExternalStore(
    subscribeToConsentChanges,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );

  const storedConsent = parseStoredConsent(storedConsentValue);

  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(false);

  function saveConsent(analytics: boolean) {
    updateGoogleConsent(analytics);
    persistConsent(analytics);

    setAnalyticsEnabled(analytics);
    setIsSettingsOpen(false);
  }

  function openSettings() {
    setAnalyticsEnabled(storedConsent?.analytics ?? false);
    setIsSettingsOpen(true);
  }

  const shouldShowConsentPanel =
    storedConsent === null || isSettingsOpen;

  if (!shouldShowConsentPanel) {
    return (
      <button
        type="button"
        onClick={openSettings}
        className="
          fixed
          bottom-4
          left-4
          z-[70]
          border
          border-[var(--color-sand)]/20
          bg-[var(--color-burgundy)]/80
          px-2.5
          py-1.5
          text-[var(--color-sand)]
          opacity-55
          backdrop-blur-md
          transition-[opacity,border-color,background-color]
          duration-300
          hover:border-[var(--color-sand)]/40
          hover:bg-[var(--color-burgundy)]/95
          hover:opacity-100
          focus-visible:outline
          focus-visible:outline-1
          focus-visible:outline-offset-4
          focus-visible:outline-[var(--color-sand)]
          motion-reduce:transition-none
        "
      >
        <span className={secondaryTextClassName}>
          {content.manage}
        </span>
      </button>
    );
  }

  return (
    <section
      role="region"
      aria-label={content.manage}
      className="
        fixed
        bottom-4
        left-4
        right-4
        z-[70]
        min-[834px]:left-auto
        min-[834px]:right-6
        min-[834px]:w-[360px]
        min-[1440px]:right-8
      "
    >
      <div
        className="
          border
          border-[var(--color-sand)]/20
          bg-[var(--color-burgundy)]/90
          text-[var(--color-sand)]
          shadow-[0_14px_40px_rgba(0,0,0,0.18)]
          backdrop-blur-xl
        "
      >
        <div className="p-4">
          {!isSettingsOpen ? (
            <>
              <p className="max-w-[34ch] type-text type-body opacity-80">
                {content.message}
              </p>

              <div
                className="
                  mt-4
                  flex
                  flex-wrap
                  items-center
                  gap-x-3
                  gap-y-2
                "
              >
                <button
                  type="button"
                  onClick={() => saveConsent(true)}
                  className="
                    border
                    border-[var(--color-sand)]/70
                    bg-[var(--color-sand)]
                    px-3
                    py-2
                    text-[var(--color-burgundy)]
                    transition-opacity
                    duration-300
                    hover:opacity-80
                    focus-visible:outline
                    focus-visible:outline-1
                    focus-visible:outline-offset-3
                    focus-visible:outline-[var(--color-sand)]
                    motion-reduce:transition-none
                  "
                >
                  <span className={secondaryTextClassName}>
                    {content.accept}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent(false)}
                  className="
                    border
                    border-[var(--color-sand)]/25
                    px-3
                    py-2
                    opacity-80
                    transition-[opacity,border-color]
                    duration-300
                    hover:border-[var(--color-sand)]/45
                    hover:opacity-100
                    focus-visible:outline
                    focus-visible:outline-1
                    focus-visible:outline-offset-3
                    focus-visible:outline-[var(--color-sand)]
                    motion-reduce:transition-none
                  "
                >
                  <span className={secondaryTextClassName}>
                    {content.reject}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => setIsSettingsOpen(true)}
                  className="
                    px-0
                    py-2
                    opacity-50
                    transition-opacity
                    duration-300
                    hover:opacity-90
                    focus-visible:outline
                    focus-visible:outline-1
                    focus-visible:outline-offset-3
                    focus-visible:outline-[var(--color-sand)]
                    motion-reduce:transition-none
                  "
                >
                  <span className={secondaryTextClassName}>
                    {content.settings}
                  </span>
                </button>
              </div>

              <Link
                href={`/${locale}/privacy`}
                className="
                  mt-3
                  inline-block
                  opacity-50
                  transition-opacity
                  duration-300
                  hover:opacity-80
                  focus-visible:outline
                  focus-visible:outline-1
                  focus-visible:outline-offset-3
                  focus-visible:outline-[var(--color-sand)]
                  motion-reduce:transition-none
                "
              >
                <span className={secondaryTextClassName}>
                  {content.privacy}
                </span>
              </Link>
            </>
          ) : (
            <>
              <div
                className="
                  border-b
                  border-[var(--color-sand)]/15
                  pb-4
                "
              >
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p className="type-caption uppercase opacity-80">
                      {content.necessaryTitle}
                    </p>

                    <p className="mt-1.5 max-w-[30ch] type-text type-body opacity-55">
                      {content.necessaryDescription}
                    </p>
                  </div>

                  <span
                    className="
                      shrink-0
                      pt-0.5
                      type-caption
                      uppercase
                      opacity-40
                    "
                  >
                    {content.alwaysActive}
                  </span>
                </div>
              </div>

              <div className="pt-4">
                <div
                  className="
                    flex
                    items-start
                    justify-between
                    gap-4
                  "
                >
                  <div>
                    <p className="type-caption uppercase opacity-80">
                      {content.analyticsTitle}
                    </p>

                    <p className="mt-1.5 max-w-[30ch] type-text type-body opacity-55">
                      {content.analyticsDescription}
                    </p>
                  </div>

                  <button
                    type="button"
                    role="switch"
                    aria-checked={analyticsEnabled}
                    onClick={() =>
                      setAnalyticsEnabled(
                        (currentValue) => !currentValue,
                      )
                    }
                    className={[
                      "relative mt-0.5 h-5 w-9 shrink-0 rounded-full border",
                      "transition-[background-color,border-color]",
                      "duration-300",
                      "focus-visible:outline",
                      "focus-visible:outline-1",
                      "focus-visible:outline-offset-3",
                      "focus-visible:outline-[var(--color-sand)]",
                      "motion-reduce:transition-none",
                      analyticsEnabled
                        ? "border-[var(--color-sand)] bg-[var(--color-sand)]"
                        : "border-[var(--color-sand)]/30 bg-transparent",
                    ].join(" ")}
                  >
                    <span
                      aria-hidden="true"
                      className={[
                        "absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full",
                        "transition-[left,background-color]",
                        "duration-300",
                        "motion-reduce:transition-none",
                        analyticsEnabled
                          ? "left-[19px] bg-[var(--color-burgundy)]"
                          : "left-[3px] bg-[var(--color-sand)]",
                      ].join(" ")}
                    />
                  </button>
                </div>
              </div>

              <div
                className="
                  mt-5
                  flex
                  flex-wrap
                  items-center
                  gap-x-3
                  gap-y-2
                "
              >
                <button
                  type="button"
                  onClick={() => saveConsent(analyticsEnabled)}
                  className="
                    border
                    border-[var(--color-sand)]/70
                    bg-[var(--color-sand)]
                    px-3
                    py-2
                    text-[var(--color-burgundy)]
                    transition-opacity
                    duration-300
                    hover:opacity-80
                    focus-visible:outline
                    focus-visible:outline-1
                    focus-visible:outline-offset-3
                    focus-visible:outline-[var(--color-sand)]
                    motion-reduce:transition-none
                  "
                >
                  <span className={secondaryTextClassName}>
                    {content.save}
                  </span>
                </button>

                <button
                  type="button"
                  onClick={() => saveConsent(false)}
                  className="
                    border
                    border-[var(--color-sand)]/25
                    px-3
                    py-2
                    opacity-75
                    transition-[opacity,border-color]
                    duration-300
                    hover:border-[var(--color-sand)]/45
                    hover:opacity-100
                    focus-visible:outline
                    focus-visible:outline-1
                    focus-visible:outline-offset-3
                    focus-visible:outline-[var(--color-sand)]
                    motion-reduce:transition-none
                  "
                >
                  <span className={secondaryTextClassName}>
                    {content.reject}
                  </span>
                </button>
              </div>

              <Link
                href={`/${locale}/privacy`}
                className="
                  mt-3
                  inline-block
                  opacity-50
                  transition-opacity
                  duration-300
                  hover:opacity-80
                  focus-visible:outline
                  focus-visible:outline-1
                  focus-visible:outline-offset-3
                  focus-visible:outline-[var(--color-sand)]
                  motion-reduce:transition-none
                "
              >
                <span className={secondaryTextClassName}>
                  {content.privacy}
                </span>
              </Link>
            </>
          )}
        </div>
      </div>
    </section>
  );
}