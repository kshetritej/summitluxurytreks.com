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
        {/*<Script id="ga" strategy="afterInteractive">
          {`
            <script async src="https://www.googletagmanager.com/gtag/js?id=G-LQCKZ8VWQN"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'G-LQCKZ8VWQN');
            </script>`}
        </Script>*/}
        <Script id="gtm" strategy="afterInteractive">
          {`<!-- Google Tag Manager -->
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-KNHGLHMM');
            <!-- End Google Tag Manager -->`}
        </Script>
      </head>
      <body className={`${outfit.className} sans-serif antialiased`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KNHGLHMM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
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
