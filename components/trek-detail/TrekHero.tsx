"use client";
import { getFullImageUrl } from "@/lib/getFullUrl";
import { ImageIcon } from "lucide-react";

export default function TrekHero({ images }: { images: string[] }) {
  return (
    <div className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm">
      <div className="relative aspect-video w-full">
        <img
          src={getFullImageUrl(images[0])}
          alt="Everest Base Camp Trek"
          className="object-cover saturate-110 contrast-105 w-full h-full"
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-black/5 to-transparent" />

        <div className="absolute left-4 top-4 flex items-center gap-2">
          <button
            type="button"
            className="flex items-center justify-center rounded-lg bg-white/90 shadow-sm backdrop-blur hover:bg-white px-2 gap-2 cursor-pointer"
            aria-label="Open gallery"
          >
            <ImageIcon className="h-4 w-4 text-slate-700" />
            Photos ({images.length})
          </button>
        </div>

        <div className="absolute left-4 top-14 flex gap-2"></div>
      </div>
    </div>
  );
}
