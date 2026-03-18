export const dynamic = "force-dynamic";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { outfit } from "@/lib/font";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/constants";
import CTACard from "@/components/cards/cta-card";

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: "Created by Growfore Solution",
  openGraph: {
    siteName: siteConfig.name,
  },
  robots: {
    follow: false,
    index: false,
  },
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
        <CTACard />
        <Footer />
      </body>
    </html>
  );
}
