import { siteConfig } from "@/constants";
import ContactForm from "./contact-form";
import { Metadata } from "next";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: { q?: string };
}): Promise<Metadata> {
  const hasQuery = await searchParams;

  return {
    title: `Book Your Trek - ${siteConfig.name}`,
    description: "Plan your adventure with us",
    alternates: {
      canonical: process.env.NEXT_PUBLIC_FRONTEND_BASE_URL + "/booking",
    },
    robots: hasQuery
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

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
