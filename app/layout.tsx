import type { Metadata } from "next";
import { Playfair_Display, Courier_Prime, Caveat, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
  display: "swap",
});

const courierPrime = Courier_Prime({
  variable: "--font-courier",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rao Jatin | Web & Software Developer | Portfolio",
  description:
    "Rao Jatin — Freelance Web & Software Developer. Building high-performance websites and applications. 10+ projects, 20+ satisfied clients. Based in Rewari, India.",
  keywords: ["Rao Jatin", "Web Developer", "Software Developer", "Freelance", "Next.js", "React", "Portfolio"],
  authors: [{ name: "Rao Jatin", url: "https://www.raojatin.in" }],
  openGraph: {
    title: "Rao Jatin | Web & Software Developer",
    description: "Freelance developer building premium web applications that turn visitors into customers.",
    url: "https://www.raojatin.in",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rao Jatin | Web & Software Developer",
    description: "Freelance developer building premium web applications.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${courierPrime.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" style={{ fontFamily: "var(--font-playfair), serif" }}>
        {children}
      </body>
    </html>
  );
}
