import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Target, Users, Briefcase } from "lucide-react";

const pillars = [
  { icon: Shield, title: "Multi-Domain Legal Expertise", desc: "From Contract Management to Courtrooms — Civil, Commercial, Corporate, Arbitration and Employment disputes." },
  { icon: Target, title: "Tailored Legal Solutions", desc: "Every case is unique. We craft strategies that align with your specific legal needs and goals." },
  { icon: Users, title: "Client-Focused & Practical", desc: "We prioritize what matters to you, offering clear and practical legal support." },
  { icon: Briefcase, title: "Strategic & Goal-Oriented", desc: "We take purposeful, strategic action to deliver real results, not just advice." },
];

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
    {/* Background Effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-32 w-80 h-80 rounded-full bg-primary/3 blur-3xl animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(var(--gold)/0.05),transparent_70%)]" />
    </div>

    <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.p
          className="text-primary font-body text-sm sm:text-base tracking-[0.3em] uppercase mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Case Matters | Legal Services
        </motion.p>
        <motion.h1
          className="heading-display mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Professional Legal Services Built on{" "}
          <span className="text-gradient-gold">Trust, Strategy & Results</span>
        </motion.h1>
        <motion.p
          className="text-body-lg text-muted-foreground max-w-2xl mx-auto mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          From arbitration and contracts to employment advisory, startup compliance, and business litigation — Case Matters offers integrated legal services, allowing clients to rely on a single, trusted legal partner across multiple domains.
        </motion.p>
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="#contact">
            <Button variant="gold" size="lg" className="text-base gap-2 group">
              Schedule a Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>
          <a href="#about">
            <Button variant="gold-outline" size="lg" className="text-base">
              Discuss Your Matter
            </Button>
          </a>
        </motion.div>
      </div>

      {/* 4 Pillar Cards with 3D effect */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            className="card-3d group"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.6 }}
          >
            <div className="card-3d-inner bg-card border border-border rounded-lg p-6 h-full hover:border-primary/40 transition-colors duration-500 hover:glow-gold">
              <p.icon className="w-8 h-8 text-primary mb-4" />
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Promo Banner */}
      <motion.div
        className="mt-16 max-w-4xl mx-auto bg-card border border-primary/30 rounded-lg p-6 sm:p-8 text-center glow-gold"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.6 }}
      >
        <h3 className="font-display text-xl sm:text-2xl font-bold text-gradient-gold mb-3">
          One Month Free Advisory & Consulting Retainership
        </h3>
        <p className="text-muted-foreground text-body-lg mb-4">
          For Start-Ups, Small and Medium Construction Companies, and Small and Medium Manufacturers
        </p>
        <p className="text-sm text-muted-foreground">
          Email us your problems at{" "}
          <a href="mailto:casematters.info@gmail.com" className="text-primary hover:underline">
            casematters.info@gmail.com
          </a>
          , we will get back to you.
        </p>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
