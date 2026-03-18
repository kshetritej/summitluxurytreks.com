import Image from "next/image";
import { Lightbox } from "../lightbox";
import { Button } from "../ui/button";
import { LucideImages } from "lucide-react";

export default function TrekHero({
  images,
  imageAlts,
}: {
  images: string[];
  imageAlts: string[];
}) {
  const mainImage = images[0];
  const otherImages = images.slice(1, 3);

  return (
    <div className="overflow-hidden">
      <div className="relative min-h-150">
        {images && images.length > 0 && (
          <Lightbox images={images} imageAlts={imageAlts}>
            <div className="grid md:grid-cols-3 gap-5 container mx-auto max-h-150 0verflow-hidden rounded-xl">
              <div className="overflow-hidden col-span-2 rounded-xl object-center object-cover">
                <Image
                  data-lightbox-index={0}
                  src={mainImage}
                  alt={imageAlts[0] || ""}
                  height={1280}
                  width={1920}
                  className="w-full  h-full object-center rounded-xl object-cover overflow-hidden cursor-pointer"
                />
              </div>
              <div className="col-span-1 hidden md:flex flex-col overflow-hidden max-h-150 rounded-xl">
                {otherImages.map((imageUrl: string, index: number) => (
                  <div
                    key={imageUrl}
                    className="overflow-hidden object-center object-cover min-h-75 max-h-75 rounded-xl"
                  >
                    <Image
                      data-lightbox-index={index + 1}
                      alt={imageAlts[index + 1] || ""}
                      src={imageUrl}
                      height={1280}
                      width={1920}
                      className="w-full h-full object-cover object-center rounded-xl cursor-pointer"
                    />
                  </div>
                ))}
              </div>
              <div className="absolute right-4 bottom-8 flex gap-2">
                <Button>
                  <LucideImages />
                  {images.length} Photos
                </Button>
              </div>
            </div>
          </Lightbox>
        )}
      </div>
    </div>
  );
}
