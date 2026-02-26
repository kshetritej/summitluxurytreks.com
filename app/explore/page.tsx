import TripCard, { TripCardProps } from "@/components/cards/trip-card";

export default async function ExplorePage() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity?page=1&limit=8`,
    { method: "GET" },
  );
  const resJSON = await res.json();
  const trips = resJSON.data;

  return (
    <div className="flex flex-col gap-4 items-center justify-center">
      <h1 className="font-bold text-2xl my-4">Explore Trips</h1>
      {
        <div className="flex gap-4">
          {trips.map((trip: TripCardProps) => {
            return <TripCard tour={trip} key={trip.id} />;
          })}
        </div>
      }
    </div>
  );
}
