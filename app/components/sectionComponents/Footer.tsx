"use client";

import Link from "next/link";
import { motion } from "framer-motion";

// Variants for sequential animations with delay
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

const Footer = () => {
  return (
    <footer className="mt-12 flex justify-center py-[3rem] md:mt-0 bg-lightOrange font-geist">
      <div className="my_fixed_width">
        <motion.div
          className="flex items-center justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Animated Logo */}
          <motion.h3
            className="text-base font-bold font-grotesk"
            custom={0}
            variants={itemVariants}
          >
            Eversub
          </motion.h3>

          {/* Animated Social Icons */}
          <motion.div
            className="flex justify-between items-center gap-3"
            custom={0.2}
            variants={itemVariants}
          >
            <a
              href="https://www.x.com/useeversub"
              target="_blank"
              className="bg-myRed bg-opacity-10 w-8 h-8 hover:bg-orange-500 hover:text-white rounded-full text-myRed flex justify-center items-center text-sm"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-myRed bg-opacity-10 w-8 h-8 hover:bg-orange-500 hover:text-white rounded-full text-myRed flex justify-center items-center text-sm"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              target="_blank"
              className="bg-myRed bg-opacity-10 w-8 h-8 hover:bg-orange-500 hover:text-white rounded-full text-myRed flex justify-center items-center text-sm"
            >
              <i className="fab fa-facebook"></i>
            </a>
          </motion.div>
        </motion.div>

        {/* Animated Description */}
        <motion.p
          className="text-[0.9rem] py-6 md:w-[59%]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.4}
          variants={itemVariants}
        >
          Eversub is a cutting-edge platform designed to simplify and streamline
          subscription payments for individuals and businesses.
        </motion.p>

        {/* Animated Link Sections */}
        <div className="grid gap-3 grid-cols-2 mt-4">
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.6}
            variants={itemVariants}
          >
            <p className="font-semibold text-[1.05rem]">Company</p>
            <Link className="text-[0.9rem]" href="/about">
              About Us
            </Link>
            <Link className="text-[0.9rem]" href="/faq">
              FAQs
            </Link>
            <Link className="text-[0.9rem]" href="/contact">
              Contact Us
            </Link>
          </motion.div>
          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.8}
            variants={itemVariants}
          >
            <p className="font-semibold text-[1.05rem]">Legal</p>
            <Link className="text-[0.9rem]" href="/privacy">
              Privacy Policy
            </Link>
            <Link className="text-[0.9rem]" href="/terms">
              Terms and Conditions
            </Link>
          </motion.div>
        </div>

        {/* Animated Copyright */}
        <motion.p
          className="text-center text-[0.91rem] mt-[4rem]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
          variants={itemVariants}
        >
          &copy; Copyright 2024,
          <br /> All Right Reserved
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
