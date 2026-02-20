import { ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "./SectionTitle";
import { decodeHtmlEntities } from "@/lib/htmlDecoder";

interface ItineraryDay {
  day: number;
  title: string;
  description: string;
}

export default function FullItinerary({ days }: { days: ItineraryDay[] }) {
  return (
    <section>
      <SectionTitle title="Detailed Itinerary" />
      <Accordion
        type="single"
        collapsible
        defaultValue="day-1"
        className="mt-4 space-y-3"
      >
        {days.map((d) => (
          <AccordionItem
            key={d.day}
            value={`day-${d.day}`}
            className="rounded-xl border border-slate-200 bg-white data-[state=open]:border-sky-600 data-[state=open]:bg-blue-50/40"
          >
            <AccordionTrigger className="flex w-full items-center justify-between gap-4 px-4 py-3 text-left hover:no-underline [&[data-state=open]>svg]:rotate-180">
              <div className="flex items-center gap-3">
                <span className="rounded bg-blue-100 px-2 py-1 font-semibold text-sky-700">
                  Day {d.day}
                </span>
                <span className="font-semibold text-slate-900">
                  {d.title}
                </span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4">
              <div
                dangerouslySetInnerHTML={{ __html: decodeHtmlEntities(d.description) }}
              />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}