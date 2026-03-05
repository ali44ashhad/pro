import AnimatedSection from "./AnimatedSection";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "What types of disputes can be resolved through arbitration?", a: "Arbitration can resolve a wide range of commercial, contractual, construction, infrastructure, shareholder, partnership, and service-related disputes where parties have agreed to submit their differences to arbitration." },
  { q: "Is an arbitration clause mandatory for initiating arbitration?", a: "Yes. Arbitration typically requires a written arbitration clause or agreement between the parties. However, even in the absence of such a clause, parties can mutually agree to arbitrate after a dispute arises." },
  { q: "How long does the arbitration process usually take?", a: "Timelines vary, but institutional and statutory frameworks often prescribe completion within 12–18 months, depending on complexity, the tribunal's schedule, and procedural conduct of parties." },
  { q: "Can you review or draft contracts for individuals and businesses?", a: "Yes. We provide comprehensive contract drafting, vetting, negotiation, and advisory services for individuals, corporates, start-ups, and commercial entities." },
  { q: "Do you assist with regulatory and compliance requirements?", a: "Yes. We advise on statutory compliance, corporate governance, commercial transactions, licensing, and regulatory approvals across various sectors." },
  { q: "How do I know which legal remedy is appropriate for my case?", a: "We begin with a detailed consultation to understand your facts, review your documents, assess risk, and advise the most effective legal strategy tailored to your objectives." },
  { q: "What documents should I bring for my first consultation?", a: "All relevant agreements, correspondence, notices, invoices, payment records, and any prior legal documents relating to your matter." },
  { q: "How do you handle recovery matters?", a: "We assist in recovery of outstanding dues through legal notices, arbitration, commercial suits, summary suits, insolvency proceedings under the IBC, and negotiation of settlements." },
  { q: "Can I schedule a consultation before engaging your services?", a: "Yes. You may request an initial consultation to discuss your matter, after which we guide you on the next steps and litigation strategy." },
  { q: "Do you offer online consultations or virtual hearings support?", a: "Yes, we conduct online meetings and assist clients in preparing for virtual arbitration hearings, document filings, and digital case management." },
];

const FAQSection = () => (
  <section className="section-padding relative overflow-hidden">
    <div className="container mx-auto max-w-3xl relative z-10">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">FAQ</p>
        <h2 className="heading-section">
          Frequently Asked <span className="text-gradient-gold">Questions</span>
        </h2>
      </AnimatedSection>

      <AnimatedSection>
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-lg px-5 data-[state=open]:border-primary/30 transition-colors"
            >
              <AccordionTrigger className="text-left font-body text-sm sm:text-base font-medium text-foreground hover:text-primary py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-sm leading-relaxed pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </AnimatedSection>
    </div>
  </section>
);

export default FAQSection;
