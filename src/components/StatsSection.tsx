import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const stats = [
  { value: "200+", label: "Legal matters handled, managed and advised by our legal experts." },
  { value: "70+", label: "Years of combined legal and advisory experience." },
  { value: "₹350Cr+", label: "Matters involving high-value claim amounts exceeding ₹350 crores." },
  { value: "₹2,000Cr+", label: "High-value projects reaching up to ₹2,000 crores." },
];

const StatsSection = () => (
  <section className="section-padding bg-secondary/30 relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--gold)/0.04),transparent_60%)]" />
    <div className="container mx-auto relative z-10">
      <AnimatedSection className="text-center mb-16">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Trusted Results</p>
        <h2 className="heading-section mb-3">
          Trusted Legal Solutions, Built on{" "}
          <span className="text-gradient-gold">Experience</span>
        </h2>
        <p className="text-body-lg text-muted-foreground">
          Loyalty and results are very important to our clients.
        </p>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {stats.map((s, i) => (
          <AnimatedSection key={i} delay={i * 0.12}>
            <motion.div
              className="card-3d group"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="card-3d-inner bg-card border border-border rounded-lg p-8 text-center h-full hover:border-primary/40 transition-all duration-300 hover:glow-gold">
                <p className="font-display text-4xl sm:text-5xl font-bold text-gradient-gold mb-4">{s.value}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.label}</p>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default StatsSection;
