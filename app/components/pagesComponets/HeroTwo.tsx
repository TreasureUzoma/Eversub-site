"use client"
import { motion } from "framer-motion";

const HeroTwo = ({ pageName = "", bgColor = "" }) => {
  return (
    <header
      className={`flex ${bgColor} items-center justify-center h-[21rem] md:h-screen md:max-h-[750px] lg:min-h-screen`}
    >
      <motion.h1
        className="text-[1.5rem] font-semibold max-w-[65%] text-center md:text-[2.2rem]"
        initial="hidden"
        animate="visible"
        variants={heroTextVariants}
      >
        {pageName}
      </motion.h1>
    </header>
  );
};

export default HeroTwo;

// Animation Variants
const heroTextVariants = {
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
