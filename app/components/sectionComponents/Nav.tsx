"use client"

import { useState } from "react";
import Link from "next/link";

const Nav = ( {page=""}) => {
   const [navOpen, setNavOpen] = useState(false);

   const handleNav = () => {
    setNavOpen(prev => !prev);
   }

  return (
    <>
      <nav className="flex items-center justify-between fixed top-0 left-0 right-0 z-40 py-5 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
        <div className="flex justify-center w-full">
          <div className="flex items-center justify-between my_fixed_width">
            <h3 className="text-base font-bold font-grotesk">Eversub</h3>
            <button onClick={handleNav} className="md:hidden">
              {navOpen ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
            <div className="flex items-center justify-between space-x-12 hidden md:inline-block">
              <Link
                href="/"
                className={`hidden md:inline font-semibold text-[0.8rem] decoration-myRed ${
                  page == "home" ? "underline" : ""
                }`}
              >
                Home
              </Link>
              <Link
                href="/about"
                className={`hidden md:inline font-semibold text-[0.8rem] decoration-myRed ${
                  page == "about" ? "underline" : ""
                }`}
              >
                About
              </Link>
              <Link
                href="/privacy"
                className={`hidden md:inline font-semibold text-[0.8rem] decoration-myRed ${
                  page == "privacy" ? "underline" : ""
                }`}
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className={`hidden md:inline font-semibold text-[0.8rem] decoration-myRed ${
                  page == "terms" ? "underline" : ""
                }`}
              >
                Terms
              </Link>
              <Link
                href="/faq"
                className={`hidden md:inline font-semibold text-[0.8rem] decoration-myRed ${
                  page == "faq" ? "underline" : ""
                }`}
              >
                FAQ
              </Link>
              <Link
                href="/contact"
                className={`hidden md:inline font-semibold text-[0.8rem] decoration-myRed ${
                  page == "contact" ? "underline" : ""
                }`}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation */}

      {navOpen && (
        <div className="md:hidden fixed bottom-0 left-0 right-0 top-[4rem] z-49 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md px-8" onClick={handleNav}>
          <div className="float-right bg-[#332941] rounded-3xl py-3 px-6 text-center grid grid-cols-2 gap-2">
            {/* Direct to my portfolio till web app is ready! */}
            <a
              href="https://treasuresureuzoma.netlify.app/"
              className="rounded-3xl block border border-[2px] border-myRed bg-myRed text-sm font-semibold py-2 px-6 text-white my-2"
            >
             Sign Up
            </a>
            <Link
              href="/"
              className={`rounded-3xl block border border-[2px] border-white text-sm font-semibold py-2 px-6 text-white my-2`}
            >
              Home
            </Link>
            <Link
              href="/faq"
              className={`rounded-3xl block border border-[2px] border-white text-sm font-semibold py-2 px-6 text-white my-2`}
            >
              FAQ
            </Link>
            <Link
              href="/about"
              className={`rounded-3xl block border border-[2px] border-white text-sm font-semibold py-2 px-6 text-white my-2`}
            >
              About
            </Link>
            <Link
              href="/privacy"
              className={`rounded-3xl block border border-[2px] border-white text-sm font-semibold py-2 px-6 text-white my-2`}
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className={`rounded-3xl block border border-[2px] border-white text-sm font-semibold py-2 px-6 text-white my-2`}
            >
              Terms
            </Link>
            <Link
              href="/contact"
              className={`rounded-3xl block border border-[2px] border-white text-sm font-semibold py-2 px-6 text-white my-2`}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
