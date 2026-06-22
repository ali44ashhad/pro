import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
                alt="Certified advisor working through QuickBooks"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg hidden sm:block">
              <p className="text-3xl font-display font-bold">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">About ProBookeepers</p>
            <h2 className="heading-section text-foreground mb-6">Certified QuickBooks Help, Without the Runaround</h2>
            <p className="text-muted-foreground text-body-lg mb-6">
              We're an independent firm of certified QuickBooks ProAdvisors and bookkeepers. We fix the software when
              it breaks, set it up when it's new, and keep the books behind it accurate every month — all remotely,
              all explained in plain English.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Certified &amp; independent</h4>
                  <p className="text-sm text-muted-foreground">
                    Real ProAdvisor certification and accounting credentials — never a faceless call centre.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Fast, documented fixes</h4>
                  <p className="text-sm text-muted-foreground">
                    Same-day response on most calls, with a written summary of everything we change.
                  </p>
                </div>
              </div>
            </div>

            <Link to="/about">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                More about us
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
