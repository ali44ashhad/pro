import { useParams, Navigate, Link } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import AnimatedSection from "@/components/AnimatedSection";
import Icon from "@/components/Icon";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { getIndustry, industries } from "@/data/industries";

const IndustryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const industry = slug ? getIndustry(slug) : undefined;

  if (!industry) return <Navigate to="/industries" replace />;

  const others = industries.filter((i) => i.slug !== industry.slug).slice(0, 4);

  return (
    <PageShell>
      <Seo
        title={industry.title}
        description={industry.metaDescription}
        path={`/industries/${industry.slug}`}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Industries", path: "/industries" },
          { name: industry.title, path: `/industries/${industry.slug}` },
        ])}
      />

      <PageHero
        eyebrow="Industry"
        title={industry.h1}
        subtitle={industry.intro}
        crumbs={[
          { label: "Home", to: "/" },
          { label: "Industries", to: "/industries" },
          { label: industry.title },
        ]}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">How We Help</p>
              <h2 className="heading-section text-foreground mb-8">Set up the way {industry.title.toLowerCase()} actually works</h2>
              <div className="space-y-6">
                {industry.points.map((p, i) => (
                  <AnimatedSection key={p.heading} delay={i * 0.08}>
                    <div className="flex gap-4">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0">
                        <Check className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground mb-1">{p.heading}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{p.text}</p>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <aside>
              <div className="bg-secondary rounded-2xl p-7 sticky top-28">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-5">
                  <Icon name={industry.icon} className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{industry.title}</h3>
                <p className="text-sm text-muted-foreground mb-5">{industry.short}</p>
                <Link to="/contact" className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                  Talk to us about your books
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section-padding bg-muted">
        <div className="container mx-auto">
          <h2 className="heading-section text-foreground mb-8 text-center">Other industries we serve</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {others.map((ind) => (
              <Link
                key={ind.slug}
                to={`/industries/${ind.slug}`}
                className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-3 mx-auto group-hover:bg-primary transition-colors">
                  <Icon name={ind.icon} className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-display font-semibold text-foreground text-sm">{ind.title}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
};

export default IndustryDetail;
