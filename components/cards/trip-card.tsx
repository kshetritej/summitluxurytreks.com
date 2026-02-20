"use client";

import { LucideClock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import DifficultyBadge from "../atoms/difficulty-badge";
import { getFullImageUrl } from "@/lib/getFullUrl";

export type Tour = {
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

export default function TripCard({ tour }: Readonly<{ tour: Tour }>) {
  return (
    <Link
      href={tour.canonicalPath ?? `/activities/${tour.id}`}
      className="relative p-0 cursor-pointer flex flex-col gap-2 shadow-sm border"
    >
      <div className="absolute top-2 z-99 right-2">
        <DifficultyBadge difficulty={"extreme"} />
      </div>
      <div className="overflow-hidden relative h-72 object-cover">
        {tour.images[0] && (
          <Image
            width={720}
            height={420}
            src={getFullImageUrl(tour.images[0])}
            alt={tour.title}
            className="object-cover"
          />
        )}
      </div>
      <div className="p-2 flex flex-col gap-4">
        <div className="h-10">
          <p>{"Annapurna Region"}</p>
          <div className="flex justify-between">
            <h4 className="font-bold text-lg">{tour.title}</h4>
            <div className="flex items-center gap-1">
              <LucideClock /> {tour.duration}
            </div>
          </div>
        </div>
        <div className="mt-2 flex">
          <p>
            <span className="text-primary text-xl font-bold">
              USD {tour.price}
            </span>
            /person
          </p>
        </div>
      </div>
    </Link>
  );
}
