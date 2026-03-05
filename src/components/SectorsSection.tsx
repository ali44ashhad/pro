import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Building, Zap, Briefcase, Factory, Building2, Rocket, Landmark, Truck, Heart, Home } from "lucide-react";

const sectors = [
  { icon: Building, title: "Infrastructure & Construction", desc: "Advisory and dispute resolution across roads, highways, railways, ports, airports, power, and urban infrastructure." },
  { icon: Zap, title: "Energy, Power & Renewable", desc: "Legal services for power producers, renewable energy developers involving project contracts and arbitration." },
  { icon: Briefcase, title: "Professional Services & Consultancy", desc: "Advisory on contracts and dispute resolution for consultancy and service-based organizations." },
  { icon: Factory, title: "Manufacturing & Industrial", desc: "Contractual advisory, employment compliance, and dispute resolution for manufacturing entities." },
  { icon: Building2, title: "Corporate & Commercial", desc: "Legal support on contract management, commercial disputes, employment advisory, and arbitration." },
  { icon: Rocket, title: "Startups & Emerging Businesses", desc: "End-to-end legal advisory covering structuring, contracts, employment compliance, and regulatory obligations." },
  { icon: Landmark, title: "Financial Services & FinTech", desc: "Contract drafting, regulatory compliance, employment structuring, and dispute resolution support." },
  { icon: Truck, title: "Logistics & Transportation", desc: "Legal advisory on logistics contracts, service agreements, and arbitration from operational disputes." },
  { icon: Heart, title: "Healthcare & Life Sciences", desc: "Contractual and employment advisory for hospitals, clinics, and healthcare service providers." },
  { icon: Home, title: "Real Estate & Property", desc: "Legal support for developers, investors involving construction contracts, joint development agreements." },
];

const SectorsSection = () => (
  <section id="sectors" className="section-padding bg-secondary/30 relative overflow-hidden">
    <div className="container mx-auto relative z-10">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Sectors</p>
        <h2 className="heading-section mb-3">
          Industries <span className="text-gradient-gold">We Serve</span>
        </h2>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-7xl mx-auto">
        {sectors.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.06}>
            <motion.div
              className="card-3d group h-full"
              whileHover={{ scale: 1.04, rotateY: 3 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-3d-inner bg-card border border-border rounded-lg p-5 h-full hover:border-primary/40 transition-all duration-300">
                <s.icon className="w-7 h-7 text-primary mb-3" />
                <h3 className="font-display text-sm font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default SectorsSection;
