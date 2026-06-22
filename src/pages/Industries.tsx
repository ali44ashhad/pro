import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import AnimatedSection from "@/components/AnimatedSection";
import Icon from "@/components/Icon";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { industries } from "@/data/industries";
import { site } from "@/config/site";

const Industries = () => (
  <PageShell>
    <Seo
      title="Industries We Serve"
      description={`${site.name} provides industry-specific bookkeeping for construction, real estate, healthcare, retail, e-commerce, manufacturing, professional services, and nonprofits.`}
    />
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Industries", path: "/industries" }])} />

    <PageHero
      eyebrow="Industries"
      title="Bookkeeping Built Around Your Industry"
      subtitle="Every industry has its own quirks — job costing, inventory, fund tracking. We set your books up the way your business actually works."
      crumbs={[{ label: "Home", to: "/" }, { label: "Industries" }]}
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((ind, i) => (
            <AnimatedSection key={ind.slug} delay={i * 0.06}>
              <Link
                to={`/industries/${ind.slug}`}
                className="group block h-full bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon name={ind.icon} className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{ind.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{ind.short}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  View details
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    <CtaBand />
  </PageShell>
);

export default Industries;
