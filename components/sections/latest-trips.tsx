import SectionTemplate from "../templates/section-template";
import MyLink from "../atoms/my-link";
import TripCard from "../cards/trip-card";

const LatestTrips = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/activity?page=1&limit=8`, { method: "GET" });
    const resJSON = await res.json();
    const trips = resJSON.data;

    return (
        <SectionTemplate
            badgeText={<p>Latest Trips</p>}
            title={<p>Recently Curated Himalayan Journeys</p>}
            text={
                <p>
                    Explore our newest collection of thoughtfully crafted <MyLink href="/" text="adventures." /> From
                    classic Himalayan trails to lesser-known cultural routes, each journey
                    balances exploration, comfort, and exclusivity for the current
                    season and travel conditions.
                </p>
            }
            buttonLink="/"
            buttonText="Explore All Latest Trips"
            className="bg-secondary"
        >
            {
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 py-4">
                    {trips?.map((tour: any) => (
                        <TripCard tour={tour} key={tour.id} />
                    ))}
                </div>
            }
        </SectionTemplate>
    );
};

export default LatestTrips;
