import { NextResponse } from "next/server";

// Define allowed origin
const ALLOWED_ORIGIN = "https://eversub.vercel.app";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  // Check if the request's origin is allowed
  if (origin !== ALLOWED_ORIGIN) {
    return NextResponse.json(
      { error: "Access denied." },
      { status: 403 }
    );
  }

  try {
    const { name, email, message } = await request.json();

    // Refined regex for validation
    const nameRegex = /^[\w\s.,!?'"-]{2,1000}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const messageRegex = /^[\w\s.,!?'"-]{2,1000}$/;

    // Validate input data
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

    // Access environment variables
    const telegramBotToken = process.env.TELEGRAM_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    // Ensure required environment variables are available
    if (!telegramBotToken || !telegramChatId) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Construct and send the message to Telegram
    const telegramMessage = `New Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(telegramMessage)}`;

    const telegramResponse = await fetch(telegramUrl, { method: "GET" });

    // Check if the Telegram API request was successful
    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("Telegram API error:", errorText);
      return NextResponse.json(
        { error: "Failed to send message to Telegram." },
        { status: 500 }
      );
    }

    // Respond with success if message was sent
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
