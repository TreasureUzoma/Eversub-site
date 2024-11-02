"use client"
import { useState, FormEvent } from "react";

const Waitlist: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  // Email validation
  const isValidEmail = (email: string): boolean => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // Submit form handler
const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
  e.preventDefault();
  setErrorMessage("");
  setSuccessMessage("");
  setLoading(true);

  if (!isValidEmail(email)) {
    setErrorMessage("Please enter a valid email address.");
    setLoading(false);
    return;
  }

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    });

    // Check the response status to handle errors appropriately
    const data = await response.json();

    if (!response.ok) {
      if (response.status === 409) {
        setErrorMessage(data.error); // Specific message for existing email
      } else {
        setErrorMessage("An error occurred. Please try again later.");
      }
      return;
    }

    setSuccessMessage("Successfully added to the waitlist!");
    setEmail("");
  } catch (error) {
    console.log("Fetch error:", error);
    setErrorMessage("An error occurred. Please try again later.");
  } finally {
    setLoading(false);
  }
};

  return (
    <main className="flex justify-center text-center md:items-center md:min-h-[55vh] lg:min-h-[80vh]">
      <div className="my_fixed_width lg:max-w-[750px]">
        <h2 className="text-[1.5rem] font-semibold">Join our waitlist!</h2>
        <p className="text-[0.95rem] my-2 mb-[2rem]">
          Signup for our waitlist, be among the first to signup when Eversub
          minimum viable product is available.
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl p-3 text-[0.8rem] outline-none border focus:border-myRed w-full max-w-[330px] md:max-w-[500px]"
            />
            {errorMessage && (
              <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
            )}
            {successMessage && (
              <p className="text-green-500 text-sm mt-1">{successMessage}</p>
            )}
          </div>
          <button
            type="submit"
            disabled={loading}
            className={`py-2 px-8 rounded-2xl font-semibold text-white text-[0.8rem] ${
              loading ? "bg-orange-700" : "bg-myRed hover:bg-orange-700"
            } transition-colors`}
          >
            {loading ? "Joining..." : "Join Now"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default Waitlist;
