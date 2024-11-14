import { NextResponse } from 'next/server';
import { db } from '@/libs/firebase';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

// Email validation function
const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

// Define your allowed origin
const ALLOWED_ORIGIN = "https://eversub.vercel.app";

export async function POST(request: Request) {
  const origin = request.headers.get("origin");

  // Check if the request comes from the allowed origin
  if (origin !== ALLOWED_ORIGIN) {
    return NextResponse.json(
      { error: "Access denied." },
      { status: 403 }
    );
  }

  try {
    const { email } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
    }

    // Check if the email is already in the waitlist
    const emailQuery = query(collection(db, "waitlist"), where("email", "==", email));
    const existingEmails = await getDocs(emailQuery);
    
    if (!existingEmails.empty) {
      return NextResponse.json({ error: "This email is already on our waitlist. Try a different one." }, { status: 409 });
    }

    // Add the email to the waitlist
    await addDoc(collection(db, "waitlist"), { email, timestamp: new Date() });

    return NextResponse.json({
      message: "Email added to waitlist successfully!",
    });
  } catch (error) {
    console.error("Error adding email to waitlist:", error);
    
    return NextResponse.json(
      {
        error: "There was a problem adding your email. Please try again later.",
      },
      { status: 500 }
    );
  }
}
