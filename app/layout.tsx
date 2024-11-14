import type { Metadata } from "next";
import "./globals.css";
import { title } from "process";
import { url } from "inspector";


export const metadata: Metadata = {
  title: "Eversub - Waitlist",
  description: "Pay bills, Efforteslly, Track Subscriptions with ease",
  robots: "index, follow",
  keywords:
    "Eversub, eversub, Buy data, Buy cheap  data, Buy data site, VTU, Best VTU, Buy data in Nigeria, Pay Bills",
  openGraph: {
    title: "Eversub - Join Our Waitlist",
    description:
      "Signup for Eversub Waitlist, be amng the first to use our MVP",
    images: [
      { url: "https://eversub.vercel.app/images/preview.png", alt: "Eversub" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
