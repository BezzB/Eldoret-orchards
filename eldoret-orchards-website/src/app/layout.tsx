import type { Metadata } from "next";
import { Open_Sans, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Eldoret Orchards and Nursery Investment Ltd",
  description: "Top-quality fruit seedlings including citrus, apple, avocado, and papaya. Expert farming guidance and demo farm in Kipkenyo, Eldoret, Kenya.",
  keywords: "fruit seedlings, Eldoret, pixie tangerine, apple seedlings, Hass avocado, farm Kenya, citrus seedlings, papaya seedlings",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${lato.variable} font-sans antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
