"use client";

import Link from "next/link";
import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";

// Variants for sequential animation with corrected easing
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" }, // Changed to valid ease function
  }),
};

const Hero = () => {
  return (
    <header className="my-[4rem] flex items-center min-h-[45vh] w-full md:min-h-[65vh] md:max-h-[600px] lg:min-h-[90vh] my-[3.6rem]">
      <div className="md:px-[3.7rem] flex items-center justify-center md:w-full md:text-center">
        <div className="my_fixed_width lg:w-[800px]">
          {/* Animated Heading */}
          <motion.h1
            className="text-[1.95rem] font-semibold"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={containerVariants}
          >
            Pay bills,{" "}
            <mark className="text-myRed bg-myRed px-2 rounded-2xl bg-opacity-10 inline-block">
              <TypeAnimation
                sequence={[
                  "effortlessly", 1700,
                  "seamlessly", 1700,
                  "quickly", 1700,
                  "securely", 1700,
                  "with ease", 1700,
                ]}
                speed={5}
                repeat={Infinity}
              />
            </mark>
          </motion.h1>

          {/* Animated Description */}
          <motion.p
            className="text-[0.9rem] font-medium my-2 mb-7"
            initial="hidden"
            animate="visible"
            custom={0.2} // Delay for sequential animation
            variants={containerVariants}
          >
            Experience the benefits of effortless bill payments with Eversub.
            Save time, reduce stress, and gain financial clarity.
            <span className="hidden md:inline">
              &nbsp;Our platform streamlines your expenses, allowing you to focus on
              what matters most.
            </span>
          </motion.p>

          {/* Animated Button */}
          <motion.div
            initial="hidden"
            animate="visible"
            custom={0.4} // Delay for sequential animation
            variants={containerVariants}
          >
            <Link
              className="bg-myRed rounded-2xl py-2 px-6 text-white font-semibold text-center text-[0.77rem]"
              href="/about"
            >
              Learn more!
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
