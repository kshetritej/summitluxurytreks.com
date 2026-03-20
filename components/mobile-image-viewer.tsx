"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "./ui/button";
import { Lightbox } from "./lightbox";

export default function MobileImageViewer({
  images,
  keywords,
}: {
  images: string[];
  keywords: string[];
}) {
  const [imageIndex, setImageIndex] = useState(0);
  return (
    <div className="relative overflow-hidden object-cover">
      {/*{images.map((image, index) => {*/}
      <Lightbox imageAlts={keywords} images={images}>
        <figure>
          <Image
            src={images[imageIndex]}
            alt={keywords[imageIndex] || " "}
            title={keywords[imageIndex]}
            height={1280}
            width={1920}
            className="w-full h-full object-cover object-center"
          />
        </figure>
      </Lightbox>
      <div className=" flex justify-between gap-4 -mt-16 px-4 opacity-90">
        <Button
          variant={"ghost"}
          className="absolute top-42 left-4 size-12 p-2 border rounded-full border-white text-white"
          disabled={imageIndex == 0}
          onClick={() => setImageIndex(imageIndex - 1)}
        >
          <ChevronLeft className="size-6" />
        </Button>
        <Button
          variant={"ghost"}
          className="absolute top-42 right-4  size-12 p-2 border rounded-full border-white text-white"
          disabled={imageIndex == images.length - 1}
          onClick={() => setImageIndex(imageIndex + 1)}
        >
          <ChevronRight className="size-6" />
        </Button>
      </div>
      {/*})}*/}
    </div>
  );
}
