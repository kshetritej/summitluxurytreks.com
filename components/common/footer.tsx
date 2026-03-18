import Link from "next/link";
import {
  associated1,
  associated2,
  associated3,
  associated4,
  associated6,
} from "@/lib/imageutil";
import { siteConfig } from "@/constants";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-background text-foreground border-t border-border mt-42">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-8">
            {/* Our Address */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-2">
                Our Address
              </p>
              <h3 className="text-lg font-bold mb-4">{siteConfig.name}</h3>

              <div className="space-y-2 text-sm text-muted-foreground">
                <p>
                  {siteConfig.address.street}, {siteConfig.address.city}
                </p>
                <p>{siteConfig.address.district} District</p>
                <p>
                  {siteConfig.address.city}, {siteConfig.address.postalCode}
                </p>
                <p>{siteConfig.address.country}</p>
              </div>

              <p className="text-sm font-semibold text-muted-foreground mt-6 mb-2">
                Contact Number
              </p>
              <p className="font-semibold">{siteConfig.phoneNumber}</p>

              <p className="text-sm font-semibold text-muted-foreground mt-4 mb-2">
                Email Address
              </p>
              <p className="font-semibold">{siteConfig.email}</p>
            </div>
            {/* Company */}
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-4">
                Company
              </p>
              <ul className="space-y-3 text-sm text-muted-foreground">
                <li>
                  <Link
                    href="/about"
                    className="hover:text-foreground transition"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="hover:text-foreground transition"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/legal-documents"
                    className="hover:text-foreground transition"
                  >
                    Legal Documents
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-sm font-semibold text-muted-foreground mb-4">
                Associated With
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  associated1,
                  associated2,
                  associated3,
                  associated4,
                  associated6,
                ].map((image, i) => (
                  <div
                    key={i}
                    className="rounded-lg p-3 border border-border bg-muted/30 hover:bg-muted transition aspect-square"
                  >
                    <Image
                      src={image}
                      height={50}
                      width={50}
                      alt={`Associated ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border space-y-8">
          {/* Copyright */}
          <div className="pt-6 text-sm text-muted-foreground border-t border-border">
            <p>© 2026 {siteConfig.name}.</p>
            <p>
              All rights reserved ·{" "}
              <Link href="#" className="hover:text-foreground underline">
                Privacy Policy
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
