import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "DipEZ — Curated Dip + Chip Duos",
  description:
    "Premium dips paired with flavor-matched chips. Snacking made easy. Join the waitlist.",
  openGraph: {
    title: "DipEZ — Curated Dip + Chip Duos",
    description:
      "Premium dips paired with flavor-matched chips. Snacking made easy.",
    url: "https://eatdipez.com",
    siteName: "DipEZ",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${dmSans.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
