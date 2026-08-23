type Gtag = (
  command: "event",
  eventName: string,
  eventParams?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }
}

export type CtaLocation =
  | "navbar"
  | "introduction"
  | "contact"
  | "contact_page";

export type AnalyticsEvent =
  | "generate_lead"
  | "schedule_call_click"
  | "schedule_call_booked"
  | "request_quote_click"
  | "quick_contact_click"
  | "whatsapp_click"
  | "teams_click"
  | "email_click"
  | "journal_read_more";

type AnalyticsEventParams = Record<
  string,
  string | number | boolean | undefined
>;

export function trackEvent(
  eventName: AnalyticsEvent,
  params?: AnalyticsEventParams,
) {
  if (typeof window === "undefined") {
    return;
  }

  if (typeof window.gtag !== "function") {
    return;
  }

  window.gtag("event", eventName, params);
}