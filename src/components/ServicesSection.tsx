import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Scale, Building2, FileText, FolderOpen, Users, Rocket, Gavel, ChevronDown, X, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Scale,
    title: "Arbitration",
    short: "Private dispute resolution through structured proceedings, offering confidentiality, procedural efficiency, and enforceable outcomes.",
    detail: "Arbitration is a private and efficient dispute resolution mechanism that allows parties to resolve disputes outside the traditional court system. It offers confidentiality, procedural flexibility, and faster resolution compared to conventional litigation. We advise and represent clients at every stage of the arbitration process, from drafting and invoking arbitration clauses to conducting proceedings and enforcing arbitral awards. Our approach is strategic and evidence-driven, ensuring disputes are resolved fairly while safeguarding commercial interests."
  },
  {
    icon: Building2,
    title: "Construction & Infrastructure Disputes",
    short: "Advisory and representation in project-related disputes, protecting contractual entitlements with precision.",
    detail: "Construction and infrastructure projects involve complex contractual frameworks, multiple stakeholders, and significant financial exposure. We advise contractors, concessionaires, developers, and project stakeholders in resolving disputes at every stage. Our services cover change of scope claims, employer-caused delays, right of way issues, and unjustified withholding of payments. Our approach is documentation-driven and evidence-focused."
  },
  {
    icon: FileText,
    title: "Contract Advisory & Risk Management",
    short: "Drafting, review, and interpretation of contracts with strategic advice on rights, obligations, and risk allocation.",
    detail: "Contracts form the backbone of commercial and professional relationships. We provide comprehensive advisory services on the drafting, review, and interpretation of contracts to ensure clarity, enforceability, and risk mitigation. We assist clients in understanding contractual exposure and making informed decisions that protect their legal and commercial interests."
  },
  {
    icon: FolderOpen,
    title: "Contract & Claims Management",
    short: "End-to-end claims support including claim preparation, evidence collation, and systematic record management.",
    detail: "Effective claims management requires meticulous preparation, documentation, and strategy. We provide end-to-end support including identifying entitlement, structuring claims, collating and analysing evidence, managing correspondence, and maintaining comprehensive records to support claims or defences."
  },
  {
    icon: Users,
    title: "Employment Advisory & Compliance",
    short: "Advisory on employment contracts, HR policies, workplace regulations, and statutory compliance.",
    detail: "Employment and labour laws require careful compliance and sensitive handling. We advise on employment contracts, HR policies, workplace regulations, and statutory obligations. We help employers maintain compliance while managing workforce-related issues lawfully and effectively."
  },
  {
    icon: Rocket,
    title: "Startup Law & Compliance",
    short: "Smart legal support for startups covering business structuring, documentation, and regulatory compliance.",
    detail: "Early-stage businesses face unique legal challenges. We assist startups and founders with legal structuring, contractual documentation, compliance, and regulatory requirements. Our services support business growth while ensuring legal compliance."
  },
  {
    icon: Gavel,
    title: "Civil, Commercial & Business Litigation",
    short: "Representation before courts in civil and commercial disputes involving shareholders, partners, vendors and stakeholders.",
    detail: "We represent clients before courts and tribunals in a wide range of civil, commercial, and personal disputes. From pre-litigation advisory and drafting to trial and appellate representation, we handle matters with diligence and precision. We focus on protecting business interests while aiming for commercially viable outcomes."
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--gold)/0.03),transparent_60%)]" />
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Our Services</p>
          <h2 className="heading-section mb-3">
            From Contracts to Courtrooms —{" "}
            <span className="text-gradient-gold">We Cover It All</span>
          </h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((s, i) => (
            <AnimatedSection key={i} delay={i * 0.08}>
              <motion.div
                className="card-3d group cursor-pointer h-full"
                whileHover={{ scale: 1.02 }}
                onClick={() => setExpanded(expanded === i ? null : i)}
              >
                <div className="card-3d-inner bg-card border border-border rounded-lg p-6 h-full flex flex-col hover:border-primary/40 transition-all duration-300 hover:glow-gold">
                  <s.icon className="w-8 h-8 text-primary mb-4" />
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">{s.short}</p>
                  <div className="flex items-center gap-1 text-primary text-sm font-medium mt-4">
                    Learn More
                    <ChevronDown className={`w-4 h-4 transition-transform ${expanded === i ? "rotate-180" : ""}`} />
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* Expanded Detail Modal */}
        <AnimatePresence>
          {expanded !== null && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" onClick={() => setExpanded(null)} />
              <motion.div
                className="relative max-w-2xl w-full bg-card border border-border rounded-lg p-6 sm:p-8 shadow-2xl max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
              >
                <button onClick={() => setExpanded(null)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground">
                  <X className="w-5 h-5" />
                </button>
                {(() => {
                  const s = services[expanded];
                  return (
                    <>
                      <s.icon className="w-10 h-10 text-primary mb-4" />
                      <h3 className="font-display text-2xl font-bold text-foreground mb-4">{s.title}</h3>
                      <p className="text-muted-foreground text-body-lg mb-6">{s.detail}</p>
                      <a href="#contact">
                        <Button variant="gold" className="gap-2 group" onClick={() => setExpanded(null)}>
                          Get in Touch
                          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </a>
                    </>
                  );
                })()}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ServicesSection;
