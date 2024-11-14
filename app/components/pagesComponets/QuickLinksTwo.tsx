"use client"

import Link from "next/link";
import Icons from "../Icons/Icons";
import { motion } from "framer-motion";

const QuickLinks = ({ page = "" }) => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.83, 0, 0.17, 1] }}
    >
      <h4 className="text-[1rem] my-5 font-semibold">Quick Links</h4>
      <div className="border-l-2 border-myBlack flex flex-col pl-4 py-4 mb-9 text-[0.9rem] space-y-2">
        
        {/* aboutus*/}
        <Link href="/about">
          <span
            className={`${
              page === "about"
                ? "bg-myBlack text-white px-3"
                : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "about" ? "1.05rem" : "0.9rem"}
              width={page === "about" ? "1.05rem" : "0.9rem"}
              color="white"
            />
            <span>About Us</span>
          </span>
        </Link>

        {/* faq */}
        <Link href="/faq">
          <span
            className={`${
              page === "faq"
                ? "bg-myBlack text-white px-3"
                : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "faq" ? "1.05rem" : "0.9rem"}
              width={page === "faq" ? "1.05rem" : "0.9rem"}
              color="white"
            />
            <span>Frequently Asked Questions</span>
          </span>
        </Link>
      </div>
    </motion.section>
  );
}

export default QuickLinks;
