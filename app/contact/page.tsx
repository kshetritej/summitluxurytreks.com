import ContactForm from "@/components/contact-form";
import { siteConfig } from "@/constants";
import Link from "next/link";

export const metadata = {
  title: `Contact Us | ${siteConfig.name}`,
  description:
    "Have questions about our treks? Get in touch with us and we'll be happy to help.",
};

export default function ContactPage() {
  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our treks? Get in touch with us and we&apos;ll
            be happy to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>
          <ContactForm />
        </div>
      </section>

      {/* Direct Contact Info Section */}
      <section className="py-16 px-4 border-t border-border bg-secondary/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Other Ways to Reach Us</h2>

          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Email</h3>
              <a
                href="mailto:info@summitluxurytreks.com"
                className="hover:underline"
              >
                info@summitluxurytreks.com
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Phone</h3>
              <Link
                href={`tel:${siteConfig.phoneNumber}`}
                className="hover:underline"
              >
                {siteConfig.phoneNumber}
              </Link>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Location</h3>
              <p>{siteConfig.address.city}, Nepal</p>
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Response Times</h2>
          <div className="space-y-3 text-muted-foreground">
            <p>
              We typically respond to inquiries within 24 hours during business
              days.
            </p>
            <p>
              For urgent matters, please call us directly at{" "}
              {siteConfig.phoneNumber}.
            </p>
            <p>Our team is available {siteConfig.openHours}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
