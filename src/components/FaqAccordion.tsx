import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/data/faqs";

interface FaqAccordionProps {
  items: Faq[];
}

const FaqAccordion = ({ items }: FaqAccordionProps) => (
  <Accordion type="single" collapsible className="w-full space-y-3">
    {items.map((f, i) => (
      <AccordionItem
        key={i}
        value={`faq-${i}`}
        className="rounded-xl border border-border bg-card px-5"
      >
        <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline">
          {f.q}
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground leading-relaxed">
          {f.a}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);

export default FaqAccordion;
