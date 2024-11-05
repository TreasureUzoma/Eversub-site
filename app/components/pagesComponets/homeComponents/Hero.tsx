"use client"

import Link from "next/link";
import { useState, useEffect } from "react";

const Hero = () => {
  const words = ["effortlessly", "seamlessly", "quickly", "securely", "with ease"];
  const typingSpeed = 100; // Typing speed per character
  const delayBetweenWords = 1500; // Pause before typing the next word

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < words[wordIndex].length) {
      const typingTimeout = setTimeout(() => {
        setText((prev) => prev + words[wordIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, typingSpeed);

      return () => clearTimeout(typingTimeout);
    } else {
      // Word complete, reset after a delay to start typing the next word
      const wordDelayTimeout = setTimeout(() => {
        setCharIndex(0);
        setText("");
        setWordIndex((prev) => (prev + 1) % words.length); // Loop through words
      }, delayBetweenWords);

      return () => clearTimeout(wordDelayTimeout);
    }
  }, [charIndex, wordIndex]);

  return (
    <header className="my-[4rem] flex items-center min-h-[45vh] w-full md:min-h-[65vh] md:max-h-[600px] lg:min-h-[90vh] my-[3.6rem]">
      <div className="md:px-[3.7rem] flex items-center justify-center md:w-full md:text-center">
        <div className="my_fixed_width lg:w-[800px]">
          <h1 className="text-[1.95rem] font-semibold">
            Pay bills,{" "}
            <mark className="text-myRed bg-myRed px-2 rounded-2xl bg-opacity-10 inline-block">
              {text}
            </mark>
          </h1>
          <p className="text-[0.95rem] my-2 mb-7">
            Experience the benefits of effortless bill payments with Eversub.
            Save time, reduce stress, and gain financial clarity.
            <span className="hidden md:inline">
              Our platform streamlines your expenses, allowing you to focus on
              what matters most.
            </span>
          </p>
          <Link
            className="bg-myRed rounded-2xl py-2 px-6 text-white font-semibold text-center text-[0.77rem]"
            href="/about"
          >
            Learn more!
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Hero;
