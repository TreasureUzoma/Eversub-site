"use client";

import { useFadeOut } from "@/hooks/use-fadeOut"
import Link from "next/link";
import Image from "next/image";

const Hero = () => {

  const { fade, currentSentence } = useFadeOut();
  return (
    <>
      <section className="bg-myRed min-h-[43rem] py-4 pt-[5rem] flex_center">
        <div className="my_fixed_width font-geist">
          <div className="grid md:grid-cols-2">
            <div className="flex flex-col gap-6">
              <h1
                className={`font-[700] text-3xl md:text-5xl transition-opacity duration-500 inline-block tracking-[-1px] ${
                  fade ? "opacity-100" : "opacity-0"
                }`}
              >
                {currentSentence}
              </h1>
              <p>
                Experience the benefits of effortless bill payments with Eversub. Save
                time, reduce stress and gain financial clarity.
              </p>
              <div
                className="my-2 w-full flex-col flex md:w-[91%]"
              >
                <a
                  href="https://eversubapp.vercel.app"
                  className="p-2 text-center md:text-left md:px-4 bg-dark hover:bg-opacity-20 font-semibold rounded-md text-white"
                >
                  Sign up now
                </a>
              </div>
              <figure className="w-full flex items-center justify-center md:hidden">
              <Image
                alt="Eversub Mockup"
                width={1000}
                height={1000}
                src="/images/mockups/heromockup.png"
              />
            </figure>
              <p className="text-[0.75rem] font-semibold leading-[0.75rem]">
                <small>
                  Eversub is a financial technology project, not a bank. Banking
                  services are provided by CBN and NIBSS-licensed third-party
                  financial institutions.
                </small>
                <br />
                <br />
                <small>
                  Learn how we collect and use your information by visiting our{" "}
                  <Link href="/privacy">Privacy Policy &gt;</Link>
                </small>
              </p>
            </div>
            {/* Image Section */}
            <figure className="hidden w-full md:flex items-center justify-center md:justify-end">
              <Image
                alt="Eversub Mockup"
                width={1000}
                height={1000}
                src="/images/mockups/heromockup.png"
              />
            </figure>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero