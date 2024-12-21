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
        Best Bill Payment app ever!,{" "}
        <Highlight>Easy to use and fast transactions</Highlight> I&#39;ve been
        using it since MVP launch and I haven&#39;t experienced any issues. Keep
        up your good work Eversub 🙏
      </p>
    ),
  },
  {
    id: 1,
    name: "Nneoma U.",
    designation: "Eversub User",
    content: (
      <p>
        Wow, this app is amazing!,{" "}
        <Highlight>Customer support is super responsive and helpful</Highlight> I had an issue with verifying my accounts
        and they <Highlight>Resolved it in munites</Highlight> Higly recommended.
      </p>
    ),
  },
  {
    id: 2,
    name: "Tyler Durden",
    designation: "Manager Project Mayhem",
    content: (
      <p>
        The first rule of
        <Highlight>Fight Club</Highlight> is that you do not talk about fight
        club. The second rule of
        <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
        club.
      </p>
    ),
  },
];
