import { LucideStar } from "lucide-react";

export default function TrekHeader({
  title,
  days,
  rating,
  reviewCount,
}: {
  title: string;
  days: string;
  rating?: number;
  reviewCount?: number;
}) {
  return (
    <div className="mb-4">
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="mt-2 flex flex-wrap items-center gap-2" id="intro">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary/70">
          {/*<span className="inline-block h-2 w-2 rounded-full bg-primary" />*/}
          <LucideStar className="size-3" />
          Recommended by 99% of the Travellers
        </span>
      </div>
    </div>
  );
}
