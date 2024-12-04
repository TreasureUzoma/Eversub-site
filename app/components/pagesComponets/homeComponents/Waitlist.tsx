"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useJoinWaitlist } from "@/hooks/use-joinWaitlist";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";

const Waitlist: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });
  const { toast } = useToast();

  const {
    handleSubmit,
    email,
    setEmail,
    errorMessage,
    successMessage,
    loading,
    setResponse,
    setResponseVariant,
    setJoinResponseMessage,
    responseVariant,
    joinResponseMessage,
    response,
  } = useJoinWaitlist();

  // Toast Effect with proper cleanup
  useEffect(() => {
    if (response) {
      toast({
        variant: responseVariant as "default" | "destructive" | "success" | null | undefined,
        title: response,
        description: joinResponseMessage,
      });
  
      // Reset values
      setResponseVariant("default");
      setJoinResponseMessage("");
      setResponse("");
    }
  
    return () => {
      // Clean up any side-effects
      setResponseVariant("default");
      setJoinResponseMessage("");
      setResponse("");
    };
  }, [response, toast]);

  return (
    <div className="h-[45rem] w-full dark:bg-black bg-white dark:bg-dot-white/[0.2] bg-dot-black/[0.2] z-30 relative flex items-center justify-center">
      {/* Radial gradient for the container */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <Toaster />
      <div ref={ref} className="my_fixed_width lg:max-w-[750px] -mt-4 text-center">
        {/* Heading */}
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={headingVariants}
          className="text-[1.9rem] z-40 font-semibold sm:text-[2.5rem]"
        >
          Join our waitlist!
        </motion.h2>

        {/* Description */}
        <motion.p
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={descriptionVariants}
          className="text-[0.95rem] z-40 font-medium my-2 mb-[2rem]"
        >
          Signup for our waitlist, be among the first to use Eversub minimum viable product.
        </motion.p>

        {/* Form */}
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
            className={`py-2 px-8 rounded-2xl z-40 font-semibold text-white text-[0.88rem] bg-myRed hover:bg-opacity-50 ${
              loading ? "bg-opacity-50" : ""
            } `}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={buttonVariants}
          >
            {loading ? "Joining..." : "Join Now"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default Waitlist;

// Animation Variants
const headingVariants = {
  hidden: { opacity: 0, y: -50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1] },
  },
};

const descriptionVariants = {
  hidden: { opacity: 0, y: -30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.2 },
  },
};

const inputVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.4 },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.83, 0, 0.17, 1], delay: 0.6 },
  },
};
