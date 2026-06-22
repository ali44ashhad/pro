import { Link } from "react-router-dom";
import { ArrowRight, Clock } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import AnimatedSection from "@/components/AnimatedSection";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { posts, formatDate } from "@/data/posts";
import { site } from "@/config/site";

const Blog = () => {
  const sorted = [...posts].sort((a, b) => +new Date(b.date) - +new Date(a.date));

  return (
    <PageShell>
      <Seo
        title="Blog"
        description={`Bookkeeping and small-business finance tips from ${site.name} — practical guides on clean books, tax-readiness, and smarter accounting.`}
      />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])} />

      <PageHero
        eyebrow="Insights"
        title="The ProBookeepers Blog"
        subtitle="Plain-language guides on keeping clean books, getting tax-ready, and making smarter financial decisions."
        crumbs={[{ label: "Home", to: "/" }, { label: "Blog" }]}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            {sorted.map((p, i) => (
              <AnimatedSection key={p.slug} delay={i * 0.08}>
                <Link
                  to={`/blog/${p.slug}`}
                  className="group flex h-full flex-col bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs font-medium text-primary bg-secondary px-2.5 py-1 rounded-full">
                          {t}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-display text-lg font-semibold text-foreground mb-3 leading-snug group-hover:text-primary transition-colors">
                      {p.title}
                    </h2>
                    <p className="text-sm text-muted-foreground leading-relaxed flex-1">{p.excerpt}</p>
                    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between text-xs text-muted-foreground">
                      <span>{formatDate(p.date)}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {p.readMinutes} min read
                      </span>
                    </div>
                    <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary">
                      Read article
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </PageShell>
  );
};

export default Blog;
