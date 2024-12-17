"use client";

import { useFadeOut } from "@/hooks/use-fadeOut"
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/hooks/use-toast";
import { useJoinWaitlist } from "@/hooks/use-joinWaitlist";

const Hero = () => {
  const { toast } = useToast();
  const {
    handleSubmit,
    email,
    setEmail,
    errorMessage,
    successMessage,
    loading,
    setResponse,
    setResponseVariant,
    setJoinResponseMessage,
    responseVariant,
    joinResponseMessage,
    response,
  } = useJoinWaitlist();

  // Toast Effect with proper cleanup
  useEffect(() => {
    if (response) {
      toast({
        variant: responseVariant as
          | "default"
          | "destructive"
          | "success"
          | null
          | undefined,
        title: response,
        description: joinResponseMessage,
      });

      // Reset values
      setResponseVariant("default");
      setJoinResponseMessage("");
      setResponse("");
    }

    return () => {
      // Clean up any side-effects
      setResponseVariant("default");
      setJoinResponseMessage("");
      setResponse("");
    };
  }, [response, toast]);

  const { fade, currentSentence } = useFadeOut();
  return (
    <>
      <Toaster />
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
              <form
                onSubmit={handleSubmit}
                className="w-full flex-col flex gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="p-2 px-3 border placeholder:text-[#1d0700] text-base rounded-md font-semibold focus:outline-dark"
                />
                {errorMessage && (
                  <p className="text-dark text-sm mt-1">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-green-500 text-sm mt-1">
                    {successMessage}
                  </p>
                )}
                <button
                  disabled={loading}
                  type="submit"
                  className="bg-dark hover:bg-opacity-20 p-2 font-semibold rounded-md text-white"
                >
                  {loading ? "Joining..." : "Join waitlist!"}
                </button>
              </form>

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
            <figure className="w-full flex items-center justify-center md:justify-end">
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