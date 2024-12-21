"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <div className="h-[40rem] flex items-center justify-center w-full">
      <CardStack items={CARDS} />
    </div>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-lightOrange text-dark px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Emmanuel O.",
    designation: "Eversub User",
    content: (
      <p>
        I've been using Eversub for my bill payments and subscription management, and it's been a game-changer!{" "}
        <Highlight>Easy to use, fast transactions, and great customer support</Highlight>. Highly recommended!
      </p>
    ),
  },
  {
    id: 1,
    name: "Nneoma U.",
    designation: "Eversub User",
    content: (
      <p>
        Eversub has simplified my subscription management and bill payments.{" "}
        <Highlight>The automated reminders and notifications have saved me from late fees</Highlight>. Great job, Eversub!
      </p>
    ),
  },
  {
    id: 2,
    name: "Oluwatobi A.",
    designation: "Eversub User",
    content: (
      <p>
        I was skeptical about using a new bill payment app, but Eversub has exceeded my expectations.{" "}
        <Highlight>The user interface is intuitive, and the transaction process is seamless</Highlight>. I'm hooked!
      </p>
    ),
  },
  {
    id: 3,
    name: "Chinonso I.",
    designation: "Eversub User",
    content: (
      <p>
        Eversub's customer support team is top-notch! They helped me resolve an issue with my subscription management, and I was back up and running in no time.{" "}
        <Highlight>Great service, great app!</Highlight>
      </p>
    ),
  },
  {
    id: 4,
    name: "Adebayo A.",
    designation: "Eversub User",
    content: (
      <p>
        I've tried several bill payment apps, but Eversub is the most reliable and efficient.{" "}
        <Highlight>The automated payment scheduling has saved me so much time and hassle</Highlight>. Thanks, Eversub!
      </p>
    ),
  },
];
