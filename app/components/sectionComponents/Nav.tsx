"use client"

import { useState } from "react";
import Link from "next/link";


const Nav = ( {page=""}) => {
   const [navOpen, setNavOpen] = useState(false);

   const handleNav = () => {
    setNavOpen(prev => !prev);
   }

  return (
    <nav className="flex items-center justify-between fixed top-0 left-0 right-0 z-40 py-5 bg-myWhite">
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
          <Link
            href="/home"
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
        </div>
      </div>
    </nav>
  );
};

export default Nav;
