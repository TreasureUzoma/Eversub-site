"use client";

import { useState } from "react";
import { usePathname } from "next/navigation"; // For App Router
import Link from "next/link";
import Icons from "../Icons/Icons";

const Nav = () => {
  const [navOpen, setNavOpen] = useState(false);
  const pathname = usePathname(); // Get the current route path

  const handleNav = () => {
    setNavOpen((prev) => !prev);
  };

  const links = [
    { href: "/about", label: "About" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="flex items-center justify-between fixed top-0 left-0 right-0 z-50 py-5 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md">
        <div className="flex justify-center w-full">
          <div className="flex items-center justify-between my_fixed_width">
            <Link
              href="/"
              className="text-[1.16rem] font-grotesk font-bold hover:text-black"
            >
              Eversub.
            </Link>
            <button onClick={handleNav} className="md:hidden">
              {navOpen ? (
                <i className="fa fa-times -ml-5"></i>
              ) : (
                <Icons type="menu" width="22px" height="22px" />
              )}
            </button>
            <div className="flex items-center justify-between space-x-7 hidden lg:space-x-10 md:inline-block">
              {links.map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className={`hidden md:inline font-semibold text-[0.8rem] decoration-myRed hover:underline ${
                    pathname === href ? "underline" : ""
                  }`}
                >
                  {label}
                </Link>
              ))}
              <a
                href="https://eversubapp.vercel.app"
                className="hover:underline rounded-md ml-2 border border-[2px] border-dark bg-dark text-sm font-semibold py-1 px-5 text-white text-[0.8rem]"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {navOpen && (
        <div
          className="md:hidden fixed bottom-0 left-0 right-0 top-[4.24rem] z-40 bg-transparent bg-opacity-60 backdrop-filter backdrop-blur-md px-8"
          onClick={handleNav}
        >
          <div
            className="float-right bg-[#332941] rounded-3xl py-3 px-6 text-center grid grid-cols-2 gap-2 w-full sm:grid-cols-3"
          >
            <a
              href="https://eversubapp.vercel.app"
              className="rounded-3xl block border border-[2px] border-myRed bg-myRed text-sm font-semibold py-2 px-6 text-white my-2 w-full"
            >
              Sign Up
            </a>
            <Link
              href="/"
              className={`rounded-3xl block border border-[2px] ${
                pathname === "/" ? "border-myRed" : "border-white"
              } text-sm font-semibold py-2 px-6 text-white my-2`}
            >
              Home
            </Link>
            {links.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`rounded-3xl block border border-[2px] ${
                  pathname === href ? "border-myRed" : "border-white"
                } text-sm font-semibold py-2 px-6 text-white my-2`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
