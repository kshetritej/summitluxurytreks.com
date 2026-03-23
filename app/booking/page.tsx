import ContactForm from "./contact-form";
import { siteConfig } from "@/constants";

export const dynamic = "force-static";
export const revalidate = 3600;

export const metadata = {
  title: `Plan Your Adventure - ${siteConfig.name}`,
  description: "Plan your adventure",
  alternates: {
    canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/booking",
  },
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
};

export default async function BookingPage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/activity`, {
    cache: "force-cache",
  });

  const json = await res.json();

  const packages = json.data;

  const sortedPackages = packages.toSorted(
    (a: { title: string }, b: { title: string }) =>
      a.title.toLowerCase().localeCompare(b.title.toLowerCase()),
  );

  return <ContactForm packages={sortedPackages} />;
}
