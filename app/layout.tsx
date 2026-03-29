import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/common/navbar";
import Footer from "@/components/common/footer";
import { outfit } from "@/lib/font";
import { Analytics } from "@vercel/analytics/next";
import { siteConfig } from "@/constants";
import CTACard from "@/components/cards/cta-card";
import FloatingWhatsAppIcon from "@/components/floating-whatsapp";
import Script from "next/script";

export const metadata: Metadata = {
  title: `${siteConfig.name}`,
  description: "Created by Growfore Solution",
  openGraph: {
    siteName: siteConfig.name,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/*<Script id="tawk-init" strategy="afterInteractive">
          {`
                   var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
                   (function(){
                     var s1=document.createElement("script"),
                     s0=document.getElementsByTagName("script")[0];
                     s1.async=true;
                     s1.src='https://embed.tawk.to/69c90275e246401c3606c780/1jksj37sa';
                     s1.charset='UTF-8';
                     s1.setAttribute('crossorigin','*');
                     s0.parentNode.insertBefore(s1,s0);
                   })();
                 `}
        </Script>*/}
      </head>
      <body className={`${outfit.className} sans-serif antialiased`}>
        <Navbar />
        {children}
        <Analytics />
        <CTACard />
        <FloatingWhatsAppIcon />
        <Footer />
      </body>
    </html>
  );
}
