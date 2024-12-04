import { useState, FormEvent } from "react";

const useJoinWaitlist = () => {
  
    const [email, setEmail] = useState<string>("");
    const [response, setResponse] = useState<string>("");
    const [joinResponseMessage, setJoinResponseMessage] = useState<string>("");
    const [responseVariant, setResponseVariant] = useState<"default" | "destructive" | "success" | null | undefined>("default");
    const [errorMessage, setErrorMessage] = useState<string>("");
    const [successMessage, setSuccessMessage] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
  
    // Email validation
    const isValidEmail = (email: string): boolean =>
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  
    // Submit form handler
    const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
      e.preventDefault();
      setErrorMessage("");
      setSuccessMessage("");
      setLoading(true);
  
      if (!isValidEmail(email)) {
        setErrorMessage("Please enter a valid email address.");
        setLoading(false);
        return;
      }
  
      try {
        const response = await fetch("/api/sendEmail", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });
  
        const data = await response.json();
  
        if (!response.ok) {
          if (response.status === 409) {
            setResponse("Email already added")
            setJoinResponseMessage(data.error);
            setResponseVariant("destructive")
          } else {
            setResponse("Oh no!")
            setJoinResponseMessage("An error occurred. Please try again later.");
            setResponseVariant("destructive")
          }
          return;
        }
        setResponse("congrats!")
        setJoinResponseMessage("You've been successfully added to the waitlist!");
        setResponseVariant("success")

        setEmail("");
      } catch (error) {
        console.log("Fetch error:", error);
        setResponse("Oh no!")
        setJoinResponseMessage("Something went wrong. Please try again later.");
        setResponseVariant("destructive")

      } finally {
        setLoading(false);
      }
    };
  return {
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
  };
}

export { useJoinWaitlist }