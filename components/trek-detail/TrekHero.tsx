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
      <div className="relative aspect-video">
        {images && images.length > 0 && (
          <Lightbox images={images} imageAlts={imageAlts}>
            <div className="grid md:grid-cols-3 gap-2 container mx-auto max-h-200 rounded-3xl overflow-hidden">
              <div className="rounded-3xl overflow-hidden col-span-2">
                <Image
                  src={mainImage}
                  alt={imageAlts[0] || ""}
                  height={1280}
                  width={1920}
                  className="w-full object-cover rounded-3xl h-full object-center"
                />
              </div>
              <div className="col-span-1 hidden md:grid overflow-hidden max-h-200">
                {otherImages.map((imageUrl: string, index: number) => (
                  <div
                    key={imageUrl}
                    className="rounded-3xl overflow-hidden object-center object-cover max-h-100"
                  >
                    <Image
                      alt={imageAlts[index + 1] || ""}
                      src={imageUrl}
                      height={1280}
                      width={1920}
                      className="w-full h-full object-cover object-center"
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
