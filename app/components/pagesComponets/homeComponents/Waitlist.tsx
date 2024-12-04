"use client";
import { useState, FormEvent, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
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
    <>
      <div className="h-[45rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] z-30 relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div ref={ref} className="my_fixed_width lg:max-w-[750px] text-center">
          {/* Heading with Animation */}
          <motion.h2
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={headingVariants}
            className="text-[1.9rem] z-40 font-semibold sm:text-[2.3rem]"
          >
            Join our waitlist!
          </motion.h2>

          {/* Animated Description */}
          <motion.p
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={descriptionVariants}
            className="text-[0.95rem] z-40 font-medium my-2 mb-[2rem]"
          >
            Signup for our waitlist, be among the first to use Eversub minimum
            viable product.
          </motion.p>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <motion.div
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={inputVariants}
            >
              <input
                type="email"
                name="Email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="rounded-xl z-40 p-3 text-[0.8rem] outline-none border focus:border-myRed w-full max-w-[330px] md:max-w-[500px]"
              />
              {errorMessage && (
                <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
              )}
              {successMessage && (
                <p className="text-green-500 text-sm mt-1">{successMessage}</p>
              )}
            </motion.div>

            <motion.button
              type="submit"
              disabled={loading}
              className={`py-3 px-8 rounded-2xl z-40 font-semibold text-white text-[0.88rem] ${
                loading ? "bg-orange-700" : "bg-myRed hover:bg-opacity-50"
              } transition-colors`}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={buttonVariants}
            >
              {loading ? "Joining..." : "Join Now"}
            </motion.button>
          </form>
        </div>
      </div>

    </>
  );
};

export default Waitlist;

// Animation Variants
export const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1],
    },
  },
};

export const descriptionVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1],
      delay: 0.2,
    },
  },
};

export const inputVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1],
      delay: 0.4,
    },
  },
};

export const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.83, 0, 0.17, 1],
      delay: 0.6,
    },
  },
};
