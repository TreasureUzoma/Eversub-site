import { NextResponse } from "next/server";
import dotenv from "dotenv";
dotenv.config();

// Define allowed origin
const ALLOWED_ORIGIN = "https://eversub.vercel.app";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  // Check for allowed origin
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

    // Fetch Telegram configuration
    const telegramBotToken = process.env.TELEGRAM_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;

    if (!telegramBotToken || !telegramChatId) {
      return NextResponse.json(
        { error: "Server configuration error." },
        { status: 500 }
      );
    }

    // Construct the Telegram message
    const telegramMessage = `New Message :)\nName: ${name}\nEmail: ${email}\nMessage: ${message}`;
    const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(telegramMessage)}`;

    const telegramResponse = await fetch(telegramUrl, { method: "GET" });

    if (!telegramResponse.ok) {
      const errorText = await telegramResponse.text();
      console.error("Telegram API error:", errorText);
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
