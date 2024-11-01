import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, message } = await request.json();

        const telegramBotToken = process.env.NEXT_PUBLIC_TELEGRAM_TOKEN;
        const telegramChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

        const telegramMessage = `
        New Message :)        
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `;

      const telegramUrl = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramChatId}&text=${encodeURIComponent(telegramMessage)}`;
      await fetch(telegramUrl, { method: "GET" });
    }
    catch (error) {
        console.error("Error sending message", error);
        
        return NextResponse.json(
          {
            error:
              "There was a problem while sending  your message. Please try again later.",
          },
          { status: 500 }
        );
   }
}