import TripCard from "../cards/trip-card";

export default async function FeaturedSections() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured?includeActivity=true`,
  );

  const data = await res.json();

  const featured = data?.data;
  console.log("Featured: ", featured);

  return (
    <div className="relative flex flex-col gap-4  justify-center container mx-auto mt-12 p-2">
      {/*@ts-expect-error error */}
      {featured.featuredTags.map((tag, index) => {
        return <div>hello</div>;
      })}
    </div>
  );
}
