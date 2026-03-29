"use client";

import { siteConfig } from "@/constants";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function FloatingWhatsAppIcon() {
  return (
    <div className="absolute bottom-2! left-4!">
      <FloatingWhatsApp
        phoneNumber={siteConfig.whatsAppNumber}
        avatar="/summit-luxury-logo-white.png"
        accountName="Summit Luxury Treks"
      />
    </div>
  );
}
