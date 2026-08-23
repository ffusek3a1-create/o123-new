import { Resend } from "resend";

type QuoteRequestBody = {
  projectType: string | null;
  budget: string | null;
  timeframe: string;
  guests: string;
  message: string;
  email: string;
  phone: string;
  companyWebsite?: string;
};

const MAX_REQUEST_LENGTH = 20_000;

const MAX_FIELD_LENGTHS = {
  projectType: 120,
  budget: 120,
  timeframe: 120,
  guests: 12,
  message: 5_000,
  email: 254,
  phone: 30,
  companyWebsite: 500,
} as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+()\d\s.-]{6,30}$/;

function normalizeOptionalValue(value: string | null | undefined) {
  const normalizedValue = value?.trim();

  return normalizedValue || "Not provided";
}

function isNullableString(value: unknown): value is string | null {
  return typeof value === "string" || value === null;
}

function isQuoteRequestBody(value: unknown): value is QuoteRequestBody {
  if (
    typeof value !== "object" ||
    value === null ||
    Array.isArray(value)
  ) {
    return false;
  }

  const body = value as Record<string, unknown>;

  return (
    isNullableString(body.projectType) &&
    isNullableString(body.budget) &&
    typeof body.timeframe === "string" &&
    typeof body.guests === "string" &&
    typeof body.message === "string" &&
    typeof body.email === "string" &&
    typeof body.phone === "string" &&
    (body.companyWebsite === undefined ||
      typeof body.companyWebsite === "string")
  );
}

function exceedsFieldLimits(body: QuoteRequestBody) {
  return (
    (body.projectType?.length ?? 0) > MAX_FIELD_LENGTHS.projectType ||
    (body.budget?.length ?? 0) > MAX_FIELD_LENGTHS.budget ||
    body.timeframe.length > MAX_FIELD_LENGTHS.timeframe ||
    body.guests.length > MAX_FIELD_LENGTHS.guests ||
    body.message.length > MAX_FIELD_LENGTHS.message ||
    body.email.length > MAX_FIELD_LENGTHS.email ||
    body.phone.length > MAX_FIELD_LENGTHS.phone ||
    (body.companyWebsite?.length ?? 0) >
      MAX_FIELD_LENGTHS.companyWebsite
  );
}

export async function POST(request: Request) {
  try {
    const contentLength = Number(
      request.headers.get("content-length") ?? "0",
    );

    if (
      Number.isFinite(contentLength) &&
      contentLength > MAX_REQUEST_LENGTH
    ) {
      return Response.json(
        {
          error: "Request is too large.",
        },
        {
          status: 413,
        },
      );
    }

    const rawBody = await request.text();

    if (rawBody.length > MAX_REQUEST_LENGTH) {
      return Response.json(
        {
          error: "Request is too large.",
        },
        {
          status: 413,
        },
      );
    }

    let parsedBody: unknown;

    try {
      parsedBody = JSON.parse(rawBody);
    } catch {
      return Response.json(
        {
          error: "Invalid request.",
        },
        {
          status: 400,
        },
      );
    }

    if (!isQuoteRequestBody(parsedBody)) {
      return Response.json(
        {
          error: "Invalid request.",
        },
        {
          status: 400,
        },
      );
    }

    const body = parsedBody;

    if (exceedsFieldLimits(body)) {
      return Response.json(
        {
          error: "One or more fields are too long.",
        },
        {
          status: 400,
        },
      );
    }

    const email = body.email.trim();
    const guests = body.guests.trim();
    const phone = body.phone.trim();
    const companyWebsite = body.companyWebsite?.trim() ?? "";

    if (companyWebsite) {
      return Response.json(
        {
          success: true,
        },
        {
          status: 200,
        },
      );
    }

    if (!email || !emailPattern.test(email)) {
      return Response.json(
        {
          error: "Please enter a valid email address.",
        },
        {
          status: 400,
        },
      );
    }

    if (guests) {
      const guestsNumber = Number(guests);

      if (
        !Number.isInteger(guestsNumber) ||
        guestsNumber <= 0
      ) {
        return Response.json(
          {
            error: "Invalid number of guests.",
          },
          {
            status: 400,
          },
        );
      }
    }

    if (phone && !phonePattern.test(phone)) {
      return Response.json(
        {
          error: "Please enter a valid phone number.",
        },
        {
          status: 400,
        },
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const from = process.env.QUOTE_FROM_EMAIL;
    const to = process.env.QUOTE_RECIPIENT_EMAIL;

    if (!resendApiKey || !from || !to) {
      console.error("Quote email configuration is incomplete.");

      return Response.json(
        {
          error: "Email service is not configured.",
        },
        {
          status: 500,
        },
      );
    }

    const resend = new Resend(resendApiKey);

    const projectType = normalizeOptionalValue(body.projectType);
    const budget = normalizeOptionalValue(body.budget);
    const timeframe = normalizeOptionalValue(body.timeframe);
    const guestCount = normalizeOptionalValue(body.guests);
    const message = normalizeOptionalValue(body.message);
    const contactPhone = normalizeOptionalValue(phone);

    const { error } = await resend.emails.send({
      from,
      to: [to],
      replyTo: email,
      subject: `New quote request — ${projectType}`,
      text: [
        "NEW QUOTE REQUEST",
        "",
        `Project type: ${projectType}`,
        `Budget: ${budget}`,
        `Timeframe: ${timeframe}`,
        `Guests: ${guestCount}`,
        "",
        "MESSAGE",
        message,
        "",
        `Contact email: ${email}`,
        `Phone: ${contactPhone}`,
      ].join("\n"),
    });

    if (error) {
      console.error("Resend error:", error);

      return Response.json(
        {
          error: "Unable to send the request.",
        },
        {
          status: 500,
        },
      );
    }

    return Response.json(
      {
        success: true,
      },
      {
        status: 200,
      },
    );
  } catch (error) {
    console.error("Quote request error:", error);

    return Response.json(
      {
        error: "Something went wrong.",
      },
      {
        status: 500,
      },
    );
  }
}