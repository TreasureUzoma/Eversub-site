import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { NextResponse } from 'next/server'; // Import NextResponse

// Firebase configuration object
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    databaseURL: process.env.NEXT_PUBLIC_DATABASE_URL,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID,
    measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Define the POST handler
export async function POST(req: Request) {
    console.log("Request method: POST");
    
    const body = await req.json(); // Parse the JSON body
    const { email } = body;

    // Check if email is provided
    if (!email) {
        return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Replace '.' in email with ',' for Firebase storage
    const emailRef = ref(db, `waitlist/emails/${email.replace(/\./g, ",")}`);

    try {
        // Save the email to Firebase
        await set(emailRef, { email });
        return NextResponse.json({ message: "Email added to the waitlist!" }, { status: 200 });
    } catch (error) {
        console.error("Error adding email:", error);
        return NextResponse.json({ error: "Failed to add email" }, { status: 500 });
    }
}
