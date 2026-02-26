import TripCard from "@/components/cards/trip-card";

export default async function ExplorePage() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/activity`);

  const data = await res.json();
  const activity = data?.data;

  console.log("Data: ", data);
  return (
    <div>
      {/*{activity?.map((item) => (
        <TripCard trip={item} key={item.id} />
      ))}*/}
    </div>
  );
}
