export const dynamic = "force-static";
import TrekHeader from "./TrekHeader";
import TrekHero from "./TrekHero";
import BookingCard from "./BookingCard";
import { Gauge, Users, MapPin, LucideClock } from "lucide-react";
import { StatCard } from "../cards/stat-card";
import { AdditionalInfoRenderer } from "../molecules/additional-info-renderer";
import { FAQRenderer } from "../molecules/faq-renderer";
import { Accordion } from "../ui/accordion";
import { decodeHtmlEntities } from "@/lib/htmlDecoder";
import FullItinerary from "./FullItinerary";

export default function TrekDetailPage({ trip }: { trip: any }) {
  const d = trip;
  return (
    <main
      className="
      p-2
           col-span-2 min-w-0
           prose prose-base max-w-none w-full
           leading-relaxed

           prose-headings:font-bold prose-headings:text-gray-900 prose-headings:leading-tight prose-headings:mt-8 prose-headings:mb-3
           prose-h1:text-3xl prose-h1:tracking-wider
           prose-h2:text-2xl prose-h2:tracking-wider
           prose-h3:text-xl prose-h3:tracking-wider
           prose-h4:text-lg prose-h4:tracking-wider
           prose-p:text-lg

           prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mt-0 prose-p:mb-4 prose-p:tracking-wider

           prose-a:text-primary prose-a:no-underline prose-a:font-medium
           hover:prose-a:underline

           prose-strong:text-gray-900 prose-strong:font-semibold

           prose-ul:list-none prose-ul:pl-0 prose-ul:my-3
           prose-ol:my-3
           prose-li:relative prose-li:pl-7 prose-li:mb-2 prose-li:text-gray-700
           prose-li:before:absolute prose-li:before:left-0 prose-li:before:top-[0.35em]
           prose-li:before:block prose-li:before:w-4 prose-li:before:h-4
           prose-li:before:bg-primary
           prose-li:text-lg prose-li:tracking-wider
           prose-li:before:[mask-image:url('/icons/bullet.svg')]
           prose-li:before:[mask-size:contain]
           prose-li:before:[mask-repeat:no-repeat]

           prose-blockquote:border-l-4 prose-blockquote:border-primary/60
           prose-blockquote:pl-5 prose-blockquote:italic prose-blockquote:text-gray-500
           prose-blockquote:my-6

           prose-img:rounded-xl prose-img:my-6 prose-img:shadow-sm

           prose-code:bg-gray-100 prose-code:text-sm prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
           prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-xl prose-pre:p-4
         "
    >
      <div className="container mx-auto">
        <TrekHero images={d.images} />
        <TrekHeader title={d.title} days={d.duration} />
      </div>
      <div className="grid md:grid-cols-7 container mx-auto p-2 max-w-7xl gap-8">
        <div className="col-span-5">
          {/* <Breadcrumbs items={d.breadcrumbs} /> */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard
              icon={<LucideClock className="h-5 w-5 text-primary" />}
              label="Duration"
              value={d.duration}
            />
            <StatCard
              icon={<Gauge className="h-5 w-5 text-primary" />}
              label="Difficulty"
              value={d.difficultyLevel}
            />
            <StatCard
              icon={<Users className="h-5 w-5 text-primary" />}
              label="Group Size"
              value={d.guestCapacity}
            />
            <StatCard
              icon={<MapPin className="h-5 w-5 text-primary" />}
              label="Start/End"
              value={d.meetingPoint + " / " + d.dropOffPoint}
            />
          </div>
          <div className="md:hidden">
            <BookingCard trip={trip} />
          </div>
          <div className="mt-8">
            <div
              dangerouslySetInnerHTML={{
                __html: decodeHtmlEntities(d.shortDescription),
              }}
            />
            <div
              dangerouslySetInnerHTML={{
                __html: decodeHtmlEntities(d.highlights[0]),
              }}
            />
            <FullItinerary days={d.itinerary} />
            {d.inclusions && (
              <div
                className="rounded-xl border  border-green-200  bg-green-200/20 p-2
                prose-li:before:mask-[url('/icons/include.svg')]
                prose-li:before:bg-green-600
                "
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(d.inclusions[0]),
                }}
              />
            )}
            {d.exclusions && (
              <div
                className="rounded-xl border my-4 e border-rose-200 bg-rose-200/20  px-4 p-4 prose-li:before:mask-[url('/icons/exclude.svg')]"
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(d.exclusions[0]),
                }}
              />
            )}

            {d.additionalInfo && <h2 className="font-bold mt-4">Trip Info</h2>}
            {d.additionalInfo &&
              d.additionalInfo.map((item: any, index: number) => {
                return (
                  <div key={index} className="overflow-wrap-anywhere">
                    <AdditionalInfoRenderer item={item} />
                  </div>
                );
              })}

            {d.faqs && <h2 className="font-bold mt-4"></h2>}
            <Accordion type="single" collapsible className="w-full">
              {d.faqs &&
                d.faqs.map((item: any, index: number) => {
                  return (
                    <FAQRenderer
                      index={String(index)}
                      key={index + item}
                      item={item}
                    />
                  );
                })}
            </Accordion>
          </div>
        </div>
        <div className="col-span-2 hidden md:block">
          <div className="col-span-2 sticky top-42">
            <BookingCard trip={trip} />
          </div>
        </div>
      </div>
    </main>
  );
}
