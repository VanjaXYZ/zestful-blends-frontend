import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AccordionProps } from "../page";

const AccordionElements = ({ elements }: { elements: AccordionProps[] }) => {
  return (
    <Accordion type="multiple" className="w-full">
      {elements?.map((data: AccordionProps, index: number) => (
        <AccordionItem value={data.id} key={data.id}>
          <AccordionTrigger className="font-bold text-sm lg:text-base text-start px-1">
            {data.header}
          </AccordionTrigger>
          <AccordionContent className="px-1">{data.text}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default AccordionElements;
