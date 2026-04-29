import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pura Vida Huts | Artisanal Tiny Houses & Huts",
  description: "Experience the Bucovina tradition with our modern, high-quality tiny houses and huts. Crafted for eco-luxury living.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${inter.variable} ${playfair.variable} font-sans min-h-full flex flex-col antialiased bg-brand-cream text-brand-charcoal`}
      >
        {children}
      </body>
    </html>
  );
}
