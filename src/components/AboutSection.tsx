import AnimatedSection from "./AnimatedSection";
import { CheckCircle } from "lucide-react";

const points = [
  "Decades of legal and advisory experience across arbitration, contract management, employment law, and litigation.",
  "Strategies tailored to your specific facts, contractual framework, and commercial objectives.",
  "Robust contract advisory, risk assessment, and compliance guidance to prevent disputes.",
  "Extensive experience guiding clients through private dispute resolution mechanisms.",
  "Structured, detail-driven approach to claims management and documentation.",
  "Focused and disciplined representation before courts and tribunals.",
  "Clear communication, realistic assessments, and transparency at every stage.",
];

const AboutSection = () => (
  <section id="about" className="section-padding relative overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--gold)/0.03),transparent_60%)]" />
    <div className="container mx-auto relative z-10">
      <AnimatedSection className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">About Us</p>
        <h2 className="heading-section mb-4">
          Why Choose <span className="text-gradient-gold">Case Matters?</span>
        </h2>
        <p className="text-body-lg text-muted-foreground">
          At Case Matters, transparency and consistency are at the core of everything we do — backed by results that truly make a difference.
        </p>
      </AnimatedSection>

      <div className="max-w-4xl mx-auto space-y-5">
        {points.map((point, i) => (
          <AnimatedSection key={i} delay={i * 0.08}>
            <div className="flex gap-4 items-start bg-card border border-border rounded-lg p-5 hover:border-primary/30 transition-colors duration-300">
              <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
              <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">{point}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
