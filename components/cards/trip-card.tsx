import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

export type TripCardProps = {
  id: string;
  title: string;
  duration: string;
  currency?: string;
  price: number;
  activityType: string;
  images: string[];
  link?: string;
  canonicalPath?: string;
  urlHistory: [];
};

export default function TripCard({ tour }: Readonly<{ tour: TripCardProps }>) {
  return (
    <Link
      href={tour.canonicalPath ?? `/activities/${tour.id}`}
      className={`relative md:h-132 bg-black/70 min-w-77.5
        flex flex-col  justify-end uppercase max-w-xs
        gap-8`}
    >
      <div className="h-full object-cover overflow-hidden">
        {tour.images[0] && (
          <Image
            width={1280}
            height={720}
            src={tour.images[0]}
            alt={tour.title}
            className="object-cover h-full w-full -z-10 hover:scale-105 transition-all duration-150"
          />
        )}
        <div className="absolute inset-0 z-0 top-0 h-[70vh] bg-linear-to-t from-black/50 to-black/0 " />
        <Badge className="absolute top-1 right-1 z-0 rounded-none text-shadow-2xs">
          {tour.duration}
        </Badge>
        <div className="p-2 flex flex-col  z-999 bottom-0 absolute text-white">
          <h4 className="font-bold text-lg">{tour.title}</h4>
          <p className="italic normal-case mb-4">
            from <span className="font-bold">USD {tour.price}</span> per person
          </p>
          <Button className="w-fit text-black" variant={"outline"}>
            Explore Trip
          </Button>
        </div>
      </div>
    </Link>
  );
}
