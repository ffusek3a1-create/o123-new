const ATTRIBUTION_STORAGE_KEY =
  "o123-analytics-attribution-v1";

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

export type AnalyticsAttribution = Partial<
  Record<UtmKey, string>
>;

function isBrowser() {
  return typeof window !== "undefined";
}

function readUtmParamsFromUrl(): AnalyticsAttribution {
  if (!isBrowser()) {
    return {};
  }

  const searchParams = new URLSearchParams(
    window.location.search,
  );

  const attribution: AnalyticsAttribution = {};

  for (const key of UTM_KEYS) {
    const value = searchParams.get(key)?.trim();

    if (value) {
      attribution[key] = value;
    }
  }

  return attribution;
}

function hasAttribution(
  attribution: AnalyticsAttribution,
) {
  return Object.keys(attribution).length > 0;
}

function readStoredAttribution(): AnalyticsAttribution {
  if (!isBrowser()) {
    return {};
  }

  try {
    const storedValue = window.sessionStorage.getItem(
      ATTRIBUTION_STORAGE_KEY,
    );

    if (!storedValue) {
      return {};
    }

    const parsedValue = JSON.parse(
      storedValue,
    ) as unknown;

    if (
      !parsedValue ||
      typeof parsedValue !== "object" ||
      Array.isArray(parsedValue)
    ) {
      return {};
    }

    const attribution: AnalyticsAttribution = {};

    for (const key of UTM_KEYS) {
      const value = (
        parsedValue as Record<string, unknown>
      )[key];

      if (
        typeof value === "string" &&
        value.trim()
      ) {
        attribution[key] = value.trim();
      }
    }

    return attribution;
  } catch {
    return {};
  }
}

function persistAttribution(
  attribution: AnalyticsAttribution,
) {
  if (!isBrowser()) {
    return;
  }

  try {
    window.sessionStorage.setItem(
      ATTRIBUTION_STORAGE_KEY,
      JSON.stringify(attribution),
    );
  } catch {
    // Attribution must never block the user experience.
  }
}

export function captureAnalyticsAttribution() {
  if (!isBrowser()) {
    return;
  }

  const storedAttribution =
    readStoredAttribution();

  if (hasAttribution(storedAttribution)) {
    return;
  }

  const urlAttribution =
    readUtmParamsFromUrl();

  if (!hasAttribution(urlAttribution)) {
    return;
  }

  persistAttribution(urlAttribution);
}

export function getAnalyticsAttribution():
  AnalyticsAttribution {
  if (!isBrowser()) {
    return {};
  }

  const storedAttribution =
    readStoredAttribution();

  if (hasAttribution(storedAttribution)) {
    return storedAttribution;
  }

  return readUtmParamsFromUrl();
}