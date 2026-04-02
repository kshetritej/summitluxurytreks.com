import Link from "next/link";
import { siteConfig } from "@/constants";

export default function BookingCard({ trip }: { trip: any }) {
  const price = trip?.price;

  return (
    <div className="rounded-xl border p-5 shadow-sm min-h-80">
      <div className="font-bold">{trip?.title}</div>
      <div className="text-sm ">Starting from</div>

      <div className="mt-1 flex items-end gap-2">
        <div className="text-2xl font-semibold text-slate-900">
          ${price?.toLocaleString()}
        </div>
        <div>/person</div>
      </div>

      <div className="mt-4 space-y-3">
        <Link
          aria-label={`Send booking request for this package -- ${trip.title}`}
          href={`/booking?q=${trip.slug}`}
          className="flex items-center justify-center w-full! mt-2 rounded-lg bg-primary/90 px-4 py-2.5 text-sm font-semibold text-white! no-underline hover:underline"
        >
          Send Booking Request for This Trek
        </Link>
      </div>

      <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
        <div className="text-sm font-semibold text-slate-800">
          Need help with booking?
        </div>
        <div className="mt-1 text-sm text-slate-600">
          Our travel experts are available 24/7 to help you customize your
          journey.
        </div>
        <Link
          aria-label={`Contact this number -- ${siteConfig.whatsAppLink} on Whatsapp`}
          href={siteConfig.whatsAppLink}
          target="_blank"
          className="w-full! flex justify-center items-center mt-4 rounded-lg border border-primary/20 bg-white px-4 py-2 text-sm font-semibold text-black  hover:bg-green-400 transition-colors delay-150 ease-linear"
        >
          <span>Contact Expert on Whatsapp →</span>
        </Link>
      </div>
    </div>
  );
}
