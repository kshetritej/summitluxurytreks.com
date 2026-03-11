import Link from "next/link";
import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { getFullImageUrl } from "@/lib/getFullUrl";

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
  slug: string;
  urlHistory: [];
  keywords: string[];
};

export default function TripCard({ tour }: Readonly<{ tour: TripCardProps }>) {
  return (
    <Link
      href={tour?.canonicalPath ?? `/${tour.slug}`}
      className={`min-h-132  min-w-72 sm:max-w-72 block uppercase gap-8 relative`}
    >
      <div className="h-full object-cover overflow-hidden">
        {tour.images[0] && (
          <Image
            width={1280}
            height={720}
            src={getFullImageUrl(tour.images[0])}
            alt={tour.keywords[0] || tour.title || ""}
            className="object-cover h-full -z-10 hover:scale-105 transition-all duration-150"
          />
        )}
      </div>
      <div className="absolute inset-0 z-0 top-0 min-h-132 bg-linear-to-t from-black/50 to-black/0 " />
      <Badge className="absolute top-1 right-1 z-0 rounded-none text-shadow-2xs">
        {tour.duration}
      </Badge>
      <div className="absolute bottom-4 p-2 flex flex-col  z-99 text-white">
        <h4 className="font-bold text-lg">{tour.title}</h4>
        <p className="italic normal-case mb-4">
          from <span className="font-bold">USD {tour.price}</span> per person
        </p>
        <Button className="w-fit text-black" variant={"outline"}>
          Explore Trip
        </Button>
      </div>
    </Link>
  );
}
