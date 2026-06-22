import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  crumbs?: Crumb[];
}

/** Inner-page header band. Sits below the fixed navbar (note the pt). */
const PageHero = ({ eyebrow, title, subtitle, crumbs }: PageHeroProps) => (
  <section className="bg-foreground pt-28 sm:pt-32 pb-14 sm:pb-16">
    <div className="container mx-auto px-4">
      {crumbs && crumbs.length > 0 && (
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-background/50">
            {crumbs.map((c, i) => (
              <li key={c.label} className="flex items-center gap-1">
                {c.to ? (
                  <Link to={c.to} className="hover:text-background transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-background/70">{c.label}</span>
                )}
                {i < crumbs.length - 1 && <ChevronRight className="w-3 h-3" />}
              </li>
            ))}
          </ol>
        </nav>
      )}

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-3xl"
      >
        {eyebrow && (
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            {eyebrow}
          </p>
        )}
        <h1 className="heading-display text-background">{title}</h1>
        {subtitle && (
          <p className="text-background/70 text-body-lg mt-5 max-w-2xl">{subtitle}</p>
        )}
      </motion.div>
    </div>
  </section>
);

export default PageHero;
