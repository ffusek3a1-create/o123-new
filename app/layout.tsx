import type { Metadata } from "next";
import { Cormorant_Garamond, Jost } from "next/font/google";

import "./globals.css";

const jost = Jost({
  subsets: ["latin"],
  variable: "--font-jost",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "O123",
  description: "O123 — niezapomniane wydarzenia i wyjątkowe doświadczenia.",
};

type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>;

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="pl"
      className={`${jost.variable} ${cormorantGaramond.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}