import { NextResponse } from "next/server";

// restrict to my domain
const ALLOWED_ORIGIN = "https://eversub.vercel.app";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  // Restrict requests to the allowed origin
  if (origin !== ALLOWED_ORIGIN) {
    return NextResponse.json(
      { error: "Access denied." },
      { status: 403 }
    );
  }

  try {
    const { name, email, message } = await request.json();

    // Improved validation checks with refined regex
    const nameRegex = /^[\w\s.,!?'"-]{2,1000}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /^[\w\s.,!?'"-]{2,1000}$/;

    if (
      !nameRegex.test(name) ||
      !emailRegex.test(email) ||
      !messageRegex.test(message)
    ) {
      return NextResponse.json(
        { error: "Invalid input data." },
        { status: 400 }
      );
    }

    // Telegram message and sending logic
    const telegramBotToken = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
    const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    const telegramMessage = `
      New Message :)\nName: ${name}\nEmail: ${email}\nMessage: ${message}
    `;

    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(
      telegramMessage
    )}`;

    const telegramResponse = await fetch(telegramUrl, { method: "GET" });

    if (!telegramResponse.ok) {
      throw new Error("Failed to send message to Telegram.");
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in POST handler:", error);
    return NextResponse.json(
      { error: "There was a problem while sending your message." },
      { status: 500 }
    );
  }
}
