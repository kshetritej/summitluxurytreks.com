import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { outfit } from "@/lib/font";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Summit Luxury Treks",
  description: "Created by Growfore Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.className} sans-serif antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
