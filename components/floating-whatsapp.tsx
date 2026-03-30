"use client";

import { siteConfig } from "@/constants";
import { FloatingWhatsApp } from "react-floating-whatsapp";

export default function FloatingWhatsAppIcon() {
  return (
    <div className="absolute bottom-2! left-4!">
      <FloatingWhatsApp
        phoneNumber={siteConfig.whatsAppNumber}
        avatar="/favicon.ico"
        accountName="Summit Luxury Treks"
        buttonStyle={{
          left: "2rem",
          right: "auto",
        }}
        chatboxStyle={{
          left: "2rem",
          right: "auto",
        }}
      />
    </div>
  );
}
