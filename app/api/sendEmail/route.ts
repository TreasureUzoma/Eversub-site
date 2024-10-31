// app/api/sendEmail/route.ts
import { NextResponse } from 'next/server';
import { db } from '@/libs/firebase';
import { collection, addDoc } from "firebase/firestore";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    await addDoc(collection(db, "waitlist"), { email, timestamp: new Date() });

    return NextResponse.json({
      message: "Email added to waitlist successfully!",
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Error adding email to waitlist" },
      { status: 500 }
    );
  }
}