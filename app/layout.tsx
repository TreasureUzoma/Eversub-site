import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/sectionComponents/Footer";
import Nav from "./components/sectionComponents/Nav";

export const metadata: Metadata = {
  title: "Eversub - Join Our Waitlist",
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
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Onest:wght@300;400;500;600;700&amp;display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@100;200;300;400;500;600;700;800;900&amp;display=swap"
        />
        <meta name="theme-color" content="#fc4100" />
      </head>
      <body>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
