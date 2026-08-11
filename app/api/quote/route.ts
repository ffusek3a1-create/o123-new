import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

type QuoteRequestBody = {
  projectType: string | null;
  budget: string | null;
  timeframe: string;
  guests: string;
  message: string;
  email: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalizeOptionalValue(value: string | null | undefined) {
  const normalizedValue = value?.trim();

  return normalizedValue || "Not provided";
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as QuoteRequestBody;

    const email = body.email?.trim() ?? "";
    const guests = body.guests?.trim() ?? "";

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

    const from = process.env.QUOTE_FROM_EMAIL;
    const to = process.env.QUOTE_RECIPIENT_EMAIL;

    if (!process.env.RESEND_API_KEY || !from || !to) {
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

    const projectType = normalizeOptionalValue(
      body.projectType,
    );

    const budget = normalizeOptionalValue(body.budget);
    const timeframe = normalizeOptionalValue(body.timeframe);
    const guestCount = normalizeOptionalValue(body.guests);
    const message = normalizeOptionalValue(body.message);

    const { data, error } = await resend.emails.send({
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
        id: data?.id,
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