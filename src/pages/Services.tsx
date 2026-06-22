import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import AnimatedSection from "@/components/AnimatedSection";
import Icon from "@/components/Icon";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { services } from "@/data/services";
import { site } from "@/config/site";

const Services = () => (
  <PageShell>
    <Seo
      title="Bookkeeping & Accounting Services"
      description={`Explore ${site.name}'s services — bookkeeping, payroll, tax planning, financial reporting, audit support, technology setup, and business advisory.`}
    />
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />

    <PageHero
      eyebrow="Our Services"
      title="Smart, Real-World Accounting Solutions"
      subtitle="A complete set of bookkeeping and accounting support services, delivered remotely with the same care whether you're catching up or scaling up."
      crumbs={[{ label: "Home", to: "/" }, { label: "Services" }]}
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <AnimatedSection key={s.slug} delay={i * 0.08}>
              <Link
                to={`/services/${s.slug}`}
                className="group block h-full bg-card rounded-2xl p-7 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                  <Icon name={s.icon} className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">{s.short}</p>
                <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Learn more
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

export default Services;
