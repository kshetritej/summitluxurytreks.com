import TrekDetailPage from "@/components/trek-detail/TrekDetailPage";
import { notFound } from "next/navigation";

export default async function Page({ params }: { params: { slug: string } }) {
  const { slug } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity/slug/${slug}`,
    { cache: "no-store" },
  );

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();

  const trip = data?.data;

  return <TrekDetailPage trip={trip} />;
}
