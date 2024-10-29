import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Eversub - Waitlist",
  description: "Pay bills, Efforteslly",
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
