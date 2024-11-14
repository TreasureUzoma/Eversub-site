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
        
        {/* Privacy Policy Link */}
        <Link href="/privacy">
          <span
            className={`${
              page === "privacy"
                ? "bg-myBlack text-white px-3"
                : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "privacy" ? "1.05rem" : "0.9rem"}
              width={page === "privacy" ? "1.05rem" : "0.9rem"}
              color="white"
            />
            <span>Privacy Policy</span>
          </span>
        </Link>

        {/* Terms & Conditions Link */}
        <Link href="/terms">
          <span
            className={`${
              page === "terms"
                ? "bg-myBlack text-white px-3"
                : "ml-2 text-[0.8rem]"
            } inline-flex py-2 rounded-lg space-x-4`}
          >
            <Icons
              type="link"
              height={page === "terms" ? "1.05rem" : "0.9rem"}
              width={page === "terms" ? "1.05rem" : "0.9rem"}
              color="white"
            />
            <span>Terms & Condition</span>
          </span>
        </Link>
      </div>
    </motion.section>
  );
}

export default QuickLinks;
