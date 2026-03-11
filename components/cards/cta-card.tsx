import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CTACard() {
  return (
    <section className="w-full  text-white  overflow-hidden container mx-auto mt-4 md:mt-12 px-2">
      <div className="rounded-xl bg-primary  p-4  sm:p-8 md:p-12 flex flex-col md:flex-row w-full gap-8 md:gap-12 items-start md:items-center justify-between">
        {/* Left Content */}
        <div className="space-y-6 flex-1">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
              Summit
            </h2>
            <p className="text-base md:text-lg  max-w-md leading-relaxed">
              Connect with the mountains, culture, and adventure. Our trekking
              and travel experiences are designed to get you on the trail
              quickly and effortlessly—from planning and permits to guides and
              logistics. Whether you&apos;re chasing Himalayan summits or
              exploring hidden valleys, we make your journey seamless, safe, and
              unforgettable.
            </p>
          </div>
          <Link href={"/contact"}>
            <Button
              type="button"
              variant={"secondary"}
              className="h-12 text-black font-semibold   px-8 flex-shrink-0"
            >
              Contact Now
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
