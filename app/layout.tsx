import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Tree Service AI — Never Miss a Lead Again",
  description:
    "AI-powered lead capture, SMS automation, voice AI, and job management for tree service contractors. Respond in seconds, book more jobs, grow your business.",
  keywords: [
    "tree service",
    "AI",
    "lead capture",
    "SMS automation",
    "voice AI",
    "tree care",
    "contractor software",
  ],
  openGraph: {
    title: "Tree Service AI — Never Miss a Lead Again",
    description:
      "AI-powered management for tree service contractors. Capture every lead, respond instantly, book more jobs.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
