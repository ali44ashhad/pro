import { useParams, Navigate, Link } from "react-router-dom";
import { Check, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import AnimatedSection from "@/components/AnimatedSection";
import FaqAccordion from "@/components/FaqAccordion";
import Icon from "@/components/Icon";
import { JsonLd, serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { getService, services } from "@/data/services";
import { site } from "@/config/site";

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getService(slug) : undefined;

  if (!service) return <Navigate to="/services" replace />;

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <PageShell>
      <Seo
        title={service.title}
        description={service.metaDescription}
        path={`/services/${service.slug}`}
      />
      <JsonLd
        data={[
          serviceSchema(service.title, service.metaDescription, `/services/${service.slug}`),
          ...(service.faqs.length ? [faqSchema(service.faqs)] : []),
          breadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.title, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <PageHero
        eyebrow="Service"
        title={service.h1}
        subtitle={service.intro}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Services", to: "/services" },
          { label: service.title },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Body */}
            <div className="lg:col-span-2 space-y-10">
              {service.body.map((b, i) => (
                <AnimatedSection key={b.heading} delay={i * 0.06}>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-3">{b.heading}</h2>
                  <p className="text-muted-foreground leading-relaxed text-body-lg">{b.text}</p>
                </AnimatedSection>
              ))}
            </div>

            {/* Sidebar: what's included + CTA */}
            <aside className="space-y-6">
              <div className="bg-secondary rounded-2xl p-7 lg:sticky lg:top-28">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5">
                  <Icon name={service.icon} className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-4">What's included</h3>
                <ul className="space-y-3">
                  {service.bullets.map((o) => (
                    <li key={o} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span>{o}</span>
                    </li>
                  ))}
                </ul>
                <a href={site.phoneHref} className="block mt-6">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                    <Phone className="w-4 h-4" />
                    {site.phoneDisplay}
                  </Button>
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Service FAQs */}
      {service.faqs.length > 0 && (
        <section className="section-padding bg-muted">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <h2 className="heading-section text-foreground mb-8 text-center">Questions about {service.title}</h2>
              <FaqAccordion items={service.faqs} />
            </div>
          </div>
        </section>
      )}

      {/* Related services */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <h2 className="heading-section text-foreground mb-8 text-center">Explore more services</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <Icon name={s.icon} className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-1">{s.title}</h3>
                <span className="inline-flex items-center gap-1 text-sm text-primary mt-1">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand title={`Need help with ${service.title}?`} />
    </PageShell>
  );
};

export default ServiceDetail;
