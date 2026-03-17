import SectionTemplate from "../templates/section-template";
import TripCard, { TripCardProps } from "../cards/trip-card";
import { notFound } from "next/navigation";

const LatestTrips = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/activity?page=1&limit=8`,
    { method: "GET" },
  );

  if (!res.ok) {
    return notFound();
  }

  const contentType = res.headers.get("content-type");

  if (!contentType || !contentType.includes("application/json")) {
    console.error("Expected JSON, got:", contentType);

    const text = await res.text();
    console.error(text);

    notFound();
  }

  const resJSON = await res.json();
  const trips = resJSON.data;

  return (
    <SectionTemplate
      title={<p>Recently Curated Himalayan Journeys</p>}
      text={
        <p>
          From classic Himalayan trails to lesser-known cultural routes, each
          journey balances exploration, comfort, and exclusivity for the current
          season and travel conditions.
        </p>
      }
    >
      {
        <div
          id="latest-trips-scroll"
          className="flex py-4 overflow-x-scroll overflow-y-hidden gap-4 scrollbar-hide"
        >
          {trips.map((trip: TripCardProps) => {
            return <TripCard tour={trip} key={trip.id} />;
          })}
          {/*{Array.from({ length: 12 }).map((_, index) => (
            <TripCard tour={trips[0]} key={index} />
          ))}*/}
        </div>
      }
    </SectionTemplate>
  );
};

export default LatestTrips;
