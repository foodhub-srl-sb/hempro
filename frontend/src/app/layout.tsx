import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HEMPRO Hub | Innovazione Canapa Alimentare",
  description: "Hemp Production, Characterization, and Valorisation of Innovative Products. La rete d'eccellenza per l'innovazione della filiera canapicola pugliese guidata dal CNR-ISPA.",
  keywords: ["canapa", "hemp", "CNR", "ISPA", "Puglia", "novel food", "microgreens", "agricoltura"],
  authors: [{ name: "CNR-ISPA" }],
  icons: {
    icon: '/favicon.png',
    apple: '/apple-icon.png',
  },
  openGraph: {
    title: "HEMPRO Hub | Innovazione Canapa Alimentare",
    description: "La rete d'eccellenza per l'innovazione della filiera canapicola pugliese",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fbf9f4]`}
      >
        <Navbar />
        <main className="pt-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
