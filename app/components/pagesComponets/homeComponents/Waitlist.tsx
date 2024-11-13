"use client";
import { useState, FormEvent, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { motion, useInView } from "framer-motion";

const Waitlist: React.FC = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  const [email, setEmail] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  // Email validation
  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (response.status === 409) {
          toast({
            title: "Email already added",
            variant: "destructive",
            description: data.error,
          });
        } else {
          toast({
            title: "Oh no!",
            description: "An error occurred. Please try again later.",
            variant: "destructive",
          });
        }
        return;
      }

      toast({
        title: "Success",
        description: "Successfully added to the waitlist!",
        variant: "success",
      });
      setEmail("");
    } catch (error) {
      console.log("Fetch error:", error);
      toast({
        title: "Oh no!",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="flex justify-center text-center items-center min-h-[55vh] md:min-h-[65vh] lg:min-h-[80vh]">
      <Toaster />
      <div ref={ref} className="my_fixed_width lg:max-w-[750px]">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingContainerVariants}
          className="text-[1.5rem] font-semibold"
        >
          Join our waitlist!
          <motion.span
         
        >
          <motion.p
            variants={wordVariants}
            className="text-[0.9rem] font-medium my-2 mb-[2rem]"
          >
            Signup for our waitlist, be among the first to signup when Eversub
            minimum viable product is available.
          </motion.p>
        </motion.span>
        </motion.h2>
        

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

export const headingContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 2,
    },
  },
};

export const wordVariants = {
  hidden: {
    y: 0,
    opacity: 10,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.83, 0.1, 0.17, 1],
    },
  },
};
