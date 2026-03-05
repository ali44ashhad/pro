import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { ArrowUpRight } from "lucide-react";

const blogs = [
  { title: "Key Legal Considerations for Startups in India", excerpt: "Startups must address critical legal issues early, including selecting the right business structure, defining founder and shareholder rights, protecting intellectual property, and ensuring compliance." },
  { title: "Recent Changes in Corporate Compliance", excerpt: "Recent regulatory developments have heightened the focus on corporate governance, transparency, and timely statutory compliance with non-compliance attracting penalties." },
  { title: "Delay Claims in Construction & Infrastructure Projects", excerpt: "Contractors are now expected to provide detailed proof such as hindrance registers, site diaries, correspondence, and contemporary delay notices." },
  { title: "Importance of Precise Drafting in Commercial Contracts", excerpt: "Ambiguity in scope-of-work, payment milestones, indemnity clauses remains the leading cause of disputes. Precision in drafting reduces litigation." },
];

const BlogSection = () => (
  <section className="section-padding bg-secondary/30 relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Insights</p>
        <h2 className="heading-section">
          Check Our Latest <span className="text-gradient-gold">Blog</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {blogs.map((b, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <motion.div
              className="card-3d group cursor-pointer h-full"
              whileHover={{ scale: 1.02 }}
            >
              <div className="card-3d-inner bg-card border border-border rounded-lg p-6 h-full hover:border-primary/40 transition-all duration-300 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-primary transition-colors pr-4">{b.title}</h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{b.excerpt}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default BlogSection;
