import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone, Check, ShieldCheck, Clock, MapPin } from "lucide-react";
import { site } from "@/config/site";

const checklist = [
  "Company-file & error diagnosis",
  "Bank feeds & reconciliation",
  "Setup, upgrades & migrations",
  "Payroll & sales-tax fixes",
];

const HeroSection = () => (
  <section id="home" className="relative overflow-hidden bg-foreground">
    {/* soft brand glow */}
    <div className="absolute -top-24 -right-24 w-[28rem] h-[28rem] rounded-full bg-primary/20 blur-3xl" />
    <div className="absolute bottom-0 -left-24 w-[24rem] h-[24rem] rounded-full bg-primary/10 blur-3xl" />

    <div className="container mx-auto px-4 relative z-10">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-10 items-center pt-24 sm:pt-32 lg:pt-28 pb-14 lg:pb-20">
        {/* Left: copy + CTA */}
        <div>
          <motion.span
            className="inline-flex items-center gap-2 bg-primary/15 text-primary border border-primary/30 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <ShieldCheck className="w-4 h-4" />
            QuickBooks Help &amp; Support · Certified ProAdvisors
          </motion.span>

          <motion.h1
            className="text-[1.7rem] sm:text-5xl lg:text-[3.25rem] font-display font-bold text-background leading-[1.15] sm:leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Need QuickBooks Help? Talk to a Certified Expert.
          </motion.h1>

          {/* phone CTA block */}
          <motion.div
            className="inline-flex flex-wrap items-center gap-3 rounded-2xl border border-background/15 bg-background/5 px-4 py-3 mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
          >
            <span className="grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground">
              <Phone className="h-5 w-5" />
            </span>
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-background/60">
                Speak to a QuickBooks expert now
              </p>
              <a
                href={site.phoneHref}
                className="font-display text-2xl font-bold text-background hover:text-primary transition-colors"
              >
                {site.phoneDisplay}
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
          >
            <a href={site.phoneHref}>
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2 px-7">
                <Phone className="w-4 h-4" />
                Call now
              </Button>
            </a>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-background/30 text-background hover:bg-background hover:text-foreground rounded-full px-7"
              >
                Get free QuickBooks help
              </Button>
            </Link>
          </motion.div>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-background/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> {site.hours}</span>
            <span className="flex items-center gap-1.5"><MapPin className="w-4 h-4 text-primary" /> Serving all 50 states</span>
          </motion.div>
        </div>

        {/* Right: image + signature help card */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-background/10">
            <img
              src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
              alt="Certified expert providing QuickBooks help and support"
              className="w-full h-[300px] sm:h-[380px] lg:h-[440px] object-cover"
              loading="eager"
            />
          </div>

          {/* signature card */}
          <div className="lg:absolute lg:-bottom-8 lg:-left-6 mt-5 lg:mt-0 w-full lg:w-72 bg-card rounded-2xl border border-border shadow-2xl p-5">
            <p className="font-display font-bold text-foreground text-sm mb-1">What we help with</p>
            <p className="text-xs text-muted-foreground mb-3">Certified QuickBooks support for:</p>
            <ul className="space-y-2">
              {checklist.map((c) => (
                <li key={c} className="flex items-start gap-2 text-xs text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
