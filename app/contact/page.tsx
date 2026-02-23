"use client";

import React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <main className="bg-background text-foreground">
      {/* Header */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions about our treks? Get in touch with us and we'll be
            happy to help.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 px-4 border-t border-border">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-8">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-800">
                Thank you for your message. We'll get back to you soon.
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your full name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+977 9841328947"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us more about your inquiry..."
                rows={6}
              />
            </div>

            <Button
              type="submit"
              variant={"default"}
              className="cursor-pointer"
            >
              Send Message
            </Button>
          </form>
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
              <a href="tel:+977984132894" className="hover:underline">
                +977 9841328947
              </a>
            </div>

            <div className="space-y-2">
              <h3 className="font-semibold text-lg">Location</h3>
              <p className="">Kathmandu, Nepal</p>
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
              For urgent matters, please call us directly at +977 9841328947.
            </p>
            <p>
              Our team is available Monday to Saturday, 9 AM to 6 PM Nepal
              Standard Time.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
