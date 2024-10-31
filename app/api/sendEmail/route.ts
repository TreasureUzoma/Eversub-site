import { NextResponse } from 'next/server';
import { db } from '@/libs/firebase';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

// Email validation function
const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Check if email is provided and valid from backend too!
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "A valid email is required" }, { status: 400 });
    }

    // Check if the email already exists in the waitlist
    const emailQuery = query(collection(db, "waitlist"), where("email", "==", email));
    const existingEmails = await getDocs(emailQuery);
    
    if (!existingEmails.empty) {
      return NextResponse.json({ error: "Email is already on the waitlist" }, { status: 400 });
    }

    // Add the email to the waitlist
    await addDoc(collection(db, "waitlist"), { email, timestamp: new Date() });

    return NextResponse.json({
      message: "Email added to waitlist successfully!",
    });
  } catch (error) {
    // Log the error for debugging
    console.error("Error adding email to waitlist:", error);
    
    return NextResponse.json(
      { error: "Error adding email to waitlist" },
      { status: 500 }
    );
  }
}
