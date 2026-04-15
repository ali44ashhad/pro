import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const HeroSection = () => (
  <section
    id="home"
    className="relative min-h-screen flex items-center overflow-hidden bg-foreground"
  >
    {/* Background image overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1920&q=80')",
      }}
    />
    <div className="absolute inset-0 bg-foreground/70" />

    <div className="container mx-auto px-4 relative z-10 pt-24">
      <div className="max-w-2xl">
        <motion.span
          className="inline-block bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest px-4 py-2 rounded mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Accounting Mastery
        </motion.span>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-background leading-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Precision-Driven Financial Management for Your Business
        </motion.h1>

        <motion.p
          className="text-lg text-background/70 mb-8 max-w-lg leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          We approach bookkeeping with structure and discipline—building
          reliable financial foundations that empower your business to scale
          efficiently and sustainably.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <a href="tel:+18888710037">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full text-base gap-2 px-8"
            >
              <Phone className="w-4 h-4" />
              +1 (888) 871 0037
            </Button>
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
