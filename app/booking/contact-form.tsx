"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z from "zod";

import {
  LucideMail,
  LucideMapPin,
  LucidePhone,
  LucideSend,
  LucideCheckCircle2,
  LucideClock,
  LucideCompass,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { buildInquiryEmail } from "./email-template";
import { siteConfig } from "@/constants";

const contactFormSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  destination: z.string().min(1, "Please select a destination"),
  groupSize: z.string().min(1, "Please select a group size"),
  startDate: z.string("Please choose your desired date for the activity."),
  experienceLevel: z.string().optional(),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;
type TPackageDetails = { id: string; slug: string; title: string };

const ContactForm = ({ packages }: { packages: TPackageDetails[] }) => (
  <Suspense fallback={<div>Loading...</div>}>
    <Form_Component packages={packages} />
  </Suspense>
);

export default ContactForm;

export function Form_Component({ packages }: { packages: TPackageDetails[] }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const searchParams = useSearchParams();
  const destinationParam = searchParams?.get("q") ?? "";

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      fullName: "",
      destination: destinationParam || "",
      groupSize: "",
      startDate: "",
      experienceLevel: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  useEffect(() => {
    if (destinationParam) form.setValue("destination", destinationParam);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [destinationParam]);

  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/email/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: data.email,
          to: siteConfig.sendEmailto,
          subject: `New Booking Inquiry from ${data.fullName} — ${data.destination}`,
          text: [
            `Name:              ${data.fullName}`,
            `Email:             ${data.email}`,
            `Phone:             ${data.phone || "Not provided"}`,
            `Destination:       ${data.destination}`,
            `Start Date:        ${data.startDate}`,
            `Group Size:        ${data.groupSize}`,
            `Experience Level:  ${data.experienceLevel || "Not specified"}`,
            ``,
            `Message:`,
            data.message,
          ].join("\n"),
          html: buildInquiryEmail(data),
        }),
        cache: "no-store",
      });
      setSubmitSuccess(true);
      form.reset();
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="bg-white min-h-screen">
      <section className="bg-primary py-14 px-24">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
            Book Your Trek
          </h1>
          <p className="text-muted text-base max-w-lg">
            Have questions about our treks? Fill in the form and we&apos;ll be
            happy to help plan your perfect adventure.
          </p>
        </div>
      </section>

      {/* ── Body ── */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        {/* ── Form — takes 2 cols ── */}
        <div className="lg:col-span-2">
          <h2 className="text-2xl font-bold  mb-1">Send us a Message</h2>
          <p className="text-sm mb-8">
            Tell us about your dream trek and we&apos;ll get back to you within
            24 hours.
          </p>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Full Name *
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Your full name"
                          className="border-gray-300 focus-visible:ring-primary rounded-md h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Email *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="your@email.com"
                          className="border-gray-300 focus-visible:ring-primary rounded-md h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Phone + Start Date */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Phone
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          placeholder="+977 9800000000"
                          className="border-gray-300 focus-visible:ring-primary rounded-md h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startDate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Start Date *
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="date"
                          min={today}
                          id="datePicker"
                          className="border-gray-300 focus-visible:ring-primary rounded-md h-11"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Destination */}
              <FormField
                control={form.control}
                name="destination"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold text-sm">
                      Destination *
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full border-gray-300 focus:ring-primary rounded-md h-11">
                          <SelectValue placeholder="Select a destination" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {packages.map((pkg: TPackageDetails) => (
                          <SelectItem key={pkg.slug} value={pkg.slug}>
                            {pkg.title.split(":")[0]}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Group size + Experience */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <FormField
                  control={form.control}
                  name="groupSize"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Group Size *
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:ring-primary rounded-md h-11 w-full">
                            <SelectValue placeholder="Select group size" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="1">Solo (1 person)</SelectItem>
                          <SelectItem value="2">Couple (2 people)</SelectItem>
                          <SelectItem value="3-5">Small group (3–5)</SelectItem>
                          <SelectItem value="6-10">
                            Medium group (6–10)
                          </SelectItem>
                          <SelectItem value="10+">Large group (10+)</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="experienceLevel"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-gray-700 font-semibold text-sm">
                        Experience Level
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="border-gray-300 focus:ring-primary rounded-md h-11 w-full">
                            <SelectValue placeholder="Select level" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner</SelectItem>
                          <SelectItem value="intermediate">
                            Intermediate
                          </SelectItem>
                          <SelectItem value="advanced">Advanced</SelectItem>
                          <SelectItem value="expert">Expert</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Message */}
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold text-sm">
                      Message *
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us more about your inquiry..."
                        rows={5}
                        className="resize-none border-gray-300 focus-visible:ring-primary rounded-md"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 h-11 rounded-md gap-2 transition-colors"
              >
                <LucideSend className="w-4 h-4" />
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>

              {submitSuccess && (
                <div className="flex items-center gap-3 rounded-md bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800 font-medium">
                  <LucideCheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  Message sent! We'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </Form>
        </div>

        {/* ── Sidebar — 1 col ── */}
        <div className="space-y-10">
          {/* Other ways to reach */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6">
              Other Ways to Reach Us
            </h3>
            <div className="space-y-5">
              {[
                { icon: LucideMail, label: "Email", value: siteConfig.email },
                {
                  icon: LucidePhone,
                  label: "Phone",
                  value: siteConfig.phoneNumber,
                },
                {
                  icon: LucideMapPin,
                  label: "Location",
                  value: siteConfig.fullAddress,
                },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label}>
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-[#c97d10]" />
                    <p className="text-sm font-bold text-gray-900">{label}</p>
                  </div>
                  <p className="text-sm text-gray-500 pl-6">{value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100" />

          {/* Response times */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <LucideClock className="w-4 h-4 text-[#c97d10]" />
              <h3 className="text-xl font-bold text-gray-900">
                Response Times
              </h3>
            </div>
            <div className="space-y-3 text-sm text-gray-500 leading-relaxed">
              <p>
                We typically respond to inquiries within 24 hours during
                business days.
              </p>
              <p>
                For urgent matters, please call us directly at{" "}
                {siteConfig.phoneNumber}.
              </p>
              <p>
                Our team is available Sunday to Friday, 9:00 AM – 5:00 PM Nepal
                Standard Time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
