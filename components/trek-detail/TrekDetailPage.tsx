import TrekHeader from "./TrekHeader";
import TrekHero from "./TrekHero";
import BookingCard from "./BookingCard";
import FullItinerary from "./FullItinerary";
import { Mountain, Gauge, Users, MapPin } from "lucide-react";
import { StatCard } from "../cards/stat-card";
import { AdditionalInfoRenderer } from "../molecules/additional-info-renderer";
import { FAQRenderer } from "../molecules/faq-renderer";
import { Accordion } from "../ui/accordion";
import { decodeHtmlEntities } from "@/lib/htmlDecoder";

export default function TrekDetailPage({ trip }: { trip: any }) {
  const d = trip;
  return (
    <main
      className="
      prose prose-lg max-w-none leading leading-relaxed
      prose-headings:text-gray-900 prose-headings:font-bold
      prose-h1:text-4xl 
      prose-h2:text-3xl   prose-h2:font-bold
      prose-h3:text-xl  
      prose-p:leading-relaxed prose-p:mb-4 prose-p:mt-0
      prose-a:text-primary prose-a:no-underline hover:prose-a:text-primary hover:prose-a:underline
      prose-strong:text-black prose-strong:font-bold
      prose-ul:my-2 prose-ol:my-2
      prose-li:text-gray-700 prose-li:mb-1
      prose-blockquote:border-l-4 prose-blockquote:border-green-500 prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
      prose-img:rounded-lg prose-img:my-6
      prose-code:bg-gray-100 prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm
      prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg prose-pre:p-4
      prose-ul:list-none
      prose-li:relative prose-li:pl-8
      prose-li:before:absolute
      prose-li:before:left-0
      prose-li:before:top-[0.45em]
      prose-li:before:w-4 prose-li:before:h-4
      prose-li:before:bg-primary
      prose-li:before:mask-[url('/point-finger.svg')]
      prose-li:before:rotate-90
      prose-li:before:mask-contain
      prose-li:before:mask-no-repeat
      prose  w-full
      wrap-break-words
      **:wrap-break-word
    "
    >
      <div className="grid grid-cols-7 container mx-auto p-4 max-w-7xl gap-4">
        <div className="px-4 pb-16 pt-6 col-span-5">
          {/* <Breadcrumbs items={d.breadcrumbs} /> */}
          <TrekHeader title={d.title} days={d.duration} />
          <TrekHero images={d.images} />
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            <StatCard
              icon={<Mountain className="h-5 w-5 text-sky-600" />}
              label="Max Altitude"
              value={"12,300"}
            />
            <StatCard
              icon={<Gauge className="h-5 w-5 text-sky-600" />}
              label="Difficulty"
              value={d.difficultyLevel}
            />
            <StatCard
              icon={<Users className="h-5 w-5 text-sky-600" />}
              label="Group Size"
              value={d.guestCapacity}
            />
            <StatCard
              icon={<MapPin className="h-5 w-5 text-sky-600" />}
              label="Start/End"
              value={d.meetingPoint + " / " + d.dropOffPoint}
            />
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
                className="rounded-xl border my-4  bg-white border-green-500 data-[state=open]:bg-blue-50/40 px-4 p-4"
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(d.inclusions[0]),
                }}
              />
            )}
            {d.exclusions && (
              <div
                className="rounded-xl border my-4 bg-white border-rose-500 data-[state=open]:bg-blue-50/40 px-4 p-4"
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(d.exclusions[0]),
                }}
              />
            )}

            {d.additionalInfo && (
              <h2 className="font-bold text-md mt-4">Trip Info</h2>
            )}
            {d.additionalInfo &&
              d.additionalInfo.map((item: any, index: number) => {
                return (
                  <div key={index} className="overflow-wrap-anywhere">
                    <AdditionalInfoRenderer item={item} />
                  </div>
                );
              })}

            <Accordion type="single" collapsible className="w-full">
              <p className="font-bold text-md mt-4">FAQs</p>
              {d.faqs &&
                d.faqs.map((item: any, index: number) => {
                  return (
                    <div key={index + item}>
                      <FAQRenderer
                        index={String(index)}
                        key={index + item}
                        item={item}
                      />
                    </div>
                  );
                })}
            </Accordion>
          </div>
        </div>
        <div className="col-span-2">
          <div className="col-span-2 sticky lg:top-32">
            <BookingCard />
          </div>
        </div>
      </div>
    </main>
  );
}
