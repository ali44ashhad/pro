import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import FaqAccordion from "@/components/FaqAccordion";
import { JsonLd, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { faqs } from "@/data/faqs";
import { site } from "@/config/site";

const FAQ = () => (
  <PageShell>
    <Seo
      title="Frequently Asked Questions"
      description={`Answers to common questions about ${site.name} — services, pricing, security, software, and how remote bookkeeping support works.`}
    />
    <JsonLd
      data={[
        faqSchema(faqs),
        breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }]),
      ]}
    />

    <PageHero
      eyebrow="FAQ"
      title="Frequently Asked Questions"
      subtitle="Everything you might want to know about working with us. Don't see your question? Reach out — we're happy to help."
      crumbs={[{ label: "Home", to: "/" }, { label: "FAQ" }]}
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto">
          <FaqAccordion items={faqs} />

          <div className="mt-12 bg-secondary rounded-2xl p-8 text-center">
            <h2 className="font-display text-xl font-bold text-foreground mb-2">Still have a question?</h2>
            <p className="text-muted-foreground text-sm mb-5">
              Give us a call or send a message — the first consultation is free.
            </p>
            <a href={site.phoneHref}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                <Phone className="w-4 h-4" />
                {site.phoneDisplay}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>

    <CtaBand />
  </PageShell>
);

export default FAQ;
