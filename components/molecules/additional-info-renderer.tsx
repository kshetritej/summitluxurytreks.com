import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { decodeHtmlEntities } from "@/lib/htmlDecoder";

export type AdditionalInfoItem = {
  title: string;
  description: string;
};

export const AdditionalInfoRenderer = ({
  item,
}: {
  item: AdditionalInfoItem;
}) => {
  return (
    <>
      <Accordion type="single" collapsible className="w-full">
        <div className="flex gap-1 relative border-b">
          <AccordionItem
            value="item-1"
            className=" w-full  data-[state=open]:border-sky-600  transition-colors"
          >
            <AccordionTrigger className="rounded-none hover:no-underline cursor-pointer">
              <div className="font-semibold text-slate-900">{item.title}</div>
            </AccordionTrigger>
            <AccordionContent>
              <div
                dangerouslySetInnerHTML={{
                  __html: decodeHtmlEntities(item.description),
                }}
              />
            </AccordionContent>
          </AccordionItem>
        </div>
      </Accordion>
    </>
  );
};
