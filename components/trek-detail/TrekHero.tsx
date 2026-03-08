import Image from "next/image";
import { Lightbox } from "../lightbox";
import { Button } from "../ui/button";
import { LucideImages } from "lucide-react";

export default function TrekHero({ images }: { images: string[] }) {
  const mainImage = images[0];
  const otherImages = images.slice(1);

  return (
    <div className="overflow-hidden">
      <div className="relative aspect-video">
        {images && images.length > 0 && (
          <Lightbox images={images}>
            <div className="grid md:grid-cols-3 gap-2 container mx-auto">
              <div className="rounded-sm overflow-hidden col-span-2">
                <Image
                  src={mainImage}
                  alt={"lalg"}
                  height={1280}
                  width={1920}
                  className="w-full object-cover rounded-3xl"
                />
              </div>
              <div className="col-span-1 hidden md:grid gap-2">
                {otherImages.map((imageUrl: string) => (
                  <div key={imageUrl} className="rounded-sm overflow-hidden">
                    <Image
                      alt={`Header Imag ${imageUrl}`}
                      src={imageUrl}
                      height={1280}
                      width={1920}
                      className="w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Lightbox>
        )}

        <div className="absolute left-4 top-8 flex gap-2">
          <Button>
            <LucideImages />
            {images.length} Photos
          </Button>
        </div>
      </div>
    </div>
  );
}
