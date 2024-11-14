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
    <header>
      <div className="h-[47rem] w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] mt-[-5rem] relative flex items-center justify-center">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="text-center my_fixed_width">
          <motion.h1
            className="text-4xl sm:text-6xl md:text-7xl font-bold relative z-20 py-8"
            initial="hidden"
            animate="visible"
            custom={0}
            variants={containerVariants}
          >
            Pay bills,{" "}
            <mark className="text-myRed bg-myRed px-2 rounded-2xl bg-opacity-10 inline-block dark:text-white">
              <TypeAnimation
                sequence={[
                  "effortlessly",
                  1700,
                  "seamlessly",
                  1700,
                  "quickly",
                  1700,
                  "securely",
                  1700,
                  "with ease",
                  1700,
                ]}
                speed={5}
                repeat={Infinity}
              />
            </mark>
          </motion.h1>
          <motion.p
            className="text-[0.92rem] leading-[1.41rem] font-medium mb-7 sm:text-base dark:text-white"
            initial="hidden"
            animate="visible"
            custom={0.2} // Delay for sequential animation
            variants={containerVariants}
          >
            Experience the benefits of effortless bill payments with Eversub.
            Save time, reduce stress, and gain financial clarity.
            <span className="hidden md:inline">
              &nbsp;Our platform streamlines your expenses, allowing you to
              focus on what matters most.
            </span>
          </motion.p>
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
