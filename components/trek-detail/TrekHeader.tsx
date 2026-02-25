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

      <div className="mt-2 flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full bg-primary/5 px-3 py-1 text-xs font-semibold text-primary/70">
          <span className="inline-block h-2 w-2 rounded-full bg-primary" />
          {days}
        </span>

        {/* <div className="flex items-center gap-2 text-xs text-slate-600">
          <span className="text-amber-500">★</span>
          <span className="font-semibold text-slate-800">{rating.toFixed(1)}</span>
          <span className="text-slate-400">/</span>
          <span>{reviewCount} reviews</span>
        </div> */}
      </div>
    </div>
  );
}
