import TripCard, { TripCardProps } from "@/components/cards/trip-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { LucideSearch } from "lucide-react";

export const dynamic = "force-dynamic";

export default async function ExplorePage({
  searchParams,
}: {
  searchParams: Promise<{ search?: string }>;
}) {
  const { search = "" } = await searchParams;

  const url = new URL(`${process.env.NEXT_PUBLIC_API_BASE_URL}/activity`);
  url.searchParams.set("page", "1");
  url.searchParams.set("limit", "10");
  if (search) url.searchParams.set("search", search);

  const res = await fetch(url.toString(), { cache: "no-store" });
  const resJSON = await res.json();
  const trips: TripCardProps[] = resJSON.data ?? [];

  return (
    <div className="flex flex-col gap-4 items-start justify-center p-4 container mask-auto mx-auto">
      <h1 className="font-bold text-2xl my-4">Explore Trips</h1>

      <form method="GET" className="relative flex gap-1 items-center max-w-6xl">
        <Input
          name="search"
          placeholder="Search Packages"
          className="p-4 rounded-full"
          defaultValue={search}
        />
        <Button type="submit" className="rounded-full">
          <LucideSearch />
          Search
        </Button>
      </form>

      {trips.length > 0 ? (
        <div className="flex gap-4 flex-wrap">
          {trips.map((trip: TripCardProps) => (
            <TripCard tour={trip} key={trip.id} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center w-full py-16 gap-2 text-center">
          <LucideSearch className="w-10 h-10 text-muted-foreground" />
          <p className="text-lg font-medium">No trips found</p>
          {search && (
            <p className="text-muted-foreground">
              No results for <span className="font-semibold">{search}</span>.
              Try a different keyword.
            </p>
          )}
        </div>
      )}
    </div>
  );
}
