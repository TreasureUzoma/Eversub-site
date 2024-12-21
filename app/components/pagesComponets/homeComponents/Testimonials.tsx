"use client";
import { CardStack } from "@/components/ui/card-stack";
import { cn } from "@/lib/utils";

export function CardStackDemo() {
  return (
    <section className="flex_center py-[6rem]">
      <div className="my_fixed_width items-center gap-[4.5rem] md:gap-0 grid md:grid-cols-2 md:my-5">
        {/* Left Side Content */}
        <div className="flex flex-col gap-4">
          <h2 className="tracking-[-1px] text-2xl font-semibold md:text-4xl">
            Don&apos;t only take our words, hear from our users!
          </h2>
          <p>
            Eversub has transformed how people handle bill payments and
            subscriptions. See what our users have to say about their
            experience with Eversub.
          </p>
        </div>

        {/* Right Side Content */}
        <div className="flex items-center justify-center">
          <CardStack items={CARDS} />
        </div>
      </div>
    </section>
  );
}

// Small utility to highlight the content of a specific section of testimonial content
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
        I&apos;ve been using Eversub for my bill payments and subscription
        management, and it&apos;s been a game-changer!{" "}
        <Highlight>Easy to use, fast transactions, and great customer support</Highlight>
        . Highly recommended!
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
        <Highlight>The automated reminders and notifications have saved me from late fees</Highlight>
        . Great job, Eversub!
      </p>
    ),
  },
  {
    id: 2,
    name: "Oluwatobi A.",
    designation: "Eversub User",
    content: (
      <p>
        I was skeptical about using a new bill payment app, but Eversub has
        exceeded my expectations.{" "}
        <Highlight>The user interface is intuitive, and the transaction process is seamless</Highlight>
        . I&apos;m hooked!
      </p>
    ),
  },
  {
    id: 3,
    name: "Chinonso I.",
    designation: "Eversub User",
    content: (
      <p>
        Eversub&apos;s customer support team is top-notch! They helped me
        resolve an issue with my subscription management, and I was back up and
        running in no time.{" "}
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
        I&apos;ve tried several bill payment apps, but Eversub is the most
        reliable and efficient.{" "}
        <Highlight>The automated payment scheduling has saved me so much time and hassle</Highlight>
        . Thanks, Eversub!
      </p>
    ),
  },
];
