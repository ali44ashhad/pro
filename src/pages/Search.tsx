import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search as SearchIcon, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { posts } from "@/data/posts";
import { faqs } from "@/data/faqs";

type Result = { type: string; title: string; text: string; to: string };

const index: Result[] = [
  ...services.map((s) => ({ type: "Service", title: s.title, text: s.short, to: `/services/${s.slug}` })),
  ...industries.map((i) => ({ type: "Industry", title: i.title, text: i.short, to: `/industries/${i.slug}` })),
  ...posts.map((p) => ({ type: "Article", title: p.title, text: p.excerpt, to: `/blog/${p.slug}` })),
  ...faqs.map((f) => ({ type: "FAQ", title: f.q, text: f.a, to: "/faq" })),
];

const Search = () => {
  const [q, setQ] = useState("");

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return [];
    return index.filter(
      (r) => r.title.toLowerCase().includes(term) || r.text.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <PageShell>
      <Seo title="Search" description="Search across our services, industries, articles, and FAQs." noindex />

      <PageHero
        eyebrow="Search"
        title="Search the site"
        subtitle="Find services, industries, articles, and answers."
        crumbs={[{ label: "Home", to: "/" }, { label: "Search" }]}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto">
            <div className="relative mb-8">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                autoFocus
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search bookkeeping, payroll, e-commerce…"
                className="pl-12 h-12 rounded-full bg-muted border-border"
              />
            </div>

            {q.trim() && (
              <p className="text-sm text-muted-foreground mb-5">
                {results.length} result{results.length === 1 ? "" : "s"} for "{q.trim()}"
              </p>
            )}

            <div className="space-y-3">
              {results.map((r, i) => (
                <Link
                  key={i}
                  to={r.to}
                  className="group flex items-start gap-4 bg-card rounded-xl p-5 border border-border hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <span className="text-xs font-medium text-primary bg-secondary px-2.5 py-1 rounded-full shrink-0 mt-0.5">
                    {r.type}
                  </span>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                      {r.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{r.text}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-primary shrink-0 mt-1 group-hover:translate-x-1 transition-transform" />
                </Link>
              ))}
            </div>

            {q.trim() && results.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">
                  No matches. Try a different term, or{" "}
                  <Link to="/contact" className="text-primary underline">
                    contact us
                  </Link>{" "}
                  directly.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Search;
