"use client";
import { useState, FormEvent } from "react";
import Nav from "../components/sectionComponents/Nav";
import HeroTwo from "../components/pagesComponets/HeroTwo";
import Footer from "../components/sectionComponents/Footer";

import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const isValidName = (name: string): boolean =>
    /^[\w\s.,!?'"-]{2,1000}$/.test(name);
  const isValidEmail = (email: string): boolean =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidMessage = (message: string): boolean =>
    message.trim().length > 0;

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");
    setSuccessMessage("");

    // Validation checks
    if (
      !isValidName(name) ||
      !isValidEmail(email) ||
      !isValidMessage(message)
    ) {
      setErrorMessage("Please fill in all fields.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/sendMessage", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle error response
        toast({
          title: "Something went wrong",
          variant: "destructive",
          description:
            data.error || "An error occurred. Please try again later.",
        });
      } else {
        // Handle success response
        toast({
          title: "Success!",
          variant: "success",
          description: data.message,
        });
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log("Fetch error:", error);
      toast({
        title: "Something went wrong",
        variant: "destructive",
        description: "An error occurred. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Nav page="contact" />
      <div>
        <HeroTwo pageName="Contact Us!" bgColor="bg-yellow-100" />
        <div className="flex justify-center mt-[3rem]">
          <div className="p-2 my_fixed_width">
            <h3 className="text-base font-semibold">
              Here to give you all the support you need.
            </h3>
            <div className="my-6 flex justify-center place-items-center w-full gap-8 md:gap-6 flex-col md:grid md:grid-cols-2">
              <form
                onSubmit={handleSubmit}
                className="bg-myRed bg-opacity-10 p-5 py-7 rounded-2xl flex flex-col gap-y-4 w-full"
              >
                <div>
                  <label
                    htmlFor="name"
                    className="text-[0.9rem] font-semibold mb-2"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Full Name"
                    className="block w-full p-2 text-[0.85rem] rounded-lg outline-none border focus:border-myRed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="text-[0.9rem] font-semibold mb-2"
                  >
                    Your Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.com"
                    className="block w-full p-2 text-[0.85rem] rounded-lg outline-none border focus:border-myRed"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="text-[0.9rem] font-semibold mb-2"
                  >
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Message"
                    className="block w-full p-2 text-[0.85rem] rounded-lg outline-none h-[10rem] border focus:border-myRed resize-none"
                  ></textarea>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
                )}
                {successMessage && (
                  <p className="text-green-500 text-sm mt-1">
                    {successMessage}
                  </p>
                )}
                <div>
                  <button className="bg-myRed text-white font-semibold text-[0.9rem] block rounded-xl w-full py-2 mt-3">
                    {loading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
              <div className="bg-[#a62b00] p-5 rounded-2xl text-white flex flex-col gap-y-4 w-full py-7">
                <div>
                  <h2 className="font-semibold text-[1.2rem]">Get In Touch</h2>
                  <p className="text-[0.9rem] mt-1">
                    We want to hear from you. Let&apos;s know how we can help
                  </p>
                </div>
                <div>
                  <h2 className="font-semibold text-[1.1rem]">Email Us</h2>
                  <p className="text-[0.9rem] mt-1">
                    Say hello to us at{" "}
                    <a
                      className="font-semibold"
                      href="mailto:eversub.hello@gmail.com"
                    >
                      eversubsupport@gmail.com
                    </a>{" "}
                    for inquiries and questions
                  </p>
                </div>
                <div>
                  <p className="text-[0.9rem] mt-1">
                    Email us at{" "}
                    <a
                      className="font-semibold"
                      href="mailto:eversub.hello@gmail.com"
                    >
                      eversubsupport@gmail.com
                    </a>{" "}
                    for help or support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
