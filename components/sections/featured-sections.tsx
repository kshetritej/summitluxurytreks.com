import TripCard from "../cards/trip-card";

export default async function FeaturedSections() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/featured?includeActivity=true`,
  );

  const data = await res.json();

  const featured = data?.data;

  return (
    <div className="flex flex-col gap-4 p-4 items-center justify-center">
      {/*@ts-expect-error error */}
      {featured.featuredTags.map((tag, index) => {
        return (
          <div key={index} className="container mx-auto">
            {tag.activity && tag.activity.length > 0 && (
              <h2 className="text-lg uppercase font-bold text-foreground mb-6 leading-tight text-balance">
                {tag.name}
              </h2>
            )}
            {tag.activity && tag.activity.length > 0 && (
              <p className="text-md tracking-wider text-muted-foreground mb-4 leading-relaxed max-w-3xl">
                {tag.description}
              </p>
            )}
            <div>
              {tag.activity && tag.activity.length > 0 && (
                <div className="flex gap-4 flex-wrap w-full">
                  {tag.activity.map((activity: any) => (
                    <TripCard key={activity.id} tour={activity} />
                  ))}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
