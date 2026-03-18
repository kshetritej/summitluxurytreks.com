export const dynamic = "force-static";
import TrekDetailPage from "@/components/trek-detail/TrekDetailPage";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> => {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity/slug/${slug}`,
    {
      cache: "no-store",
      method: "GET",
      headers: { "User-Agent": "Mozilla/5.0" },
    },
  );

  if (!res.ok) {
    notFound();
  }

  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    console.error("Expected JSON, got:", contentType);

    const text = await res.text();
    console.error(text);

    notFound();
  }

  const data = await res.json();

  const trip = data?.data;

  return {
    title: trip?.seo?.metaTitle,
    description: trip?.seo?.metaDescription,
    openGraph: {
      title: trip?.seo?.metaTitle,
      description: trip?.seo?.metaDescription,
      url: `https://summitluxurytreks.com/${slug}`,
      images: [
        {
          url: trip?.seo?.featuredMedia,
          width: 1200,
          height: 630,
          alt: trip?.seo?.metaTitle,
        },
      ],
    },
    twitter: {
      title: trip?.seo?.metaTitle,
      description: trip?.seto?.metaDescription,
      images: [
        {
          url: trip?.seo?.featuredMedia,
          width: 1200,
          height: 630,
          alt: trip?.seo?.metaTitle,
        },
      ],
    },
  };
};

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity/slug/${slug}`,
    { cache: "no-store", headers: { "User-Agent": "Mozilla/5.0" } },
  );

  if (!res.ok) {
    notFound();
  }

  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    console.error("Expected JSON, got:", contentType);

    const text = await res.text();
    console.error(text);

    notFound();
  }

  const data = await res.json();

  const trip = data?.data;

  return <TrekDetailPage trip={trip} />;
}
