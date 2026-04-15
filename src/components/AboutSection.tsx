import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Rocket, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
                alt="Financial management"
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
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
              About Company
            </p>
            <h2 className="heading-section text-foreground mb-6">
              Smarter Bookkeeping for Better Business Control
            </h2>
            <p className="text-muted-foreground text-body-lg mb-8">
              ProBookeeper provides reliable bookkeeping setup, data
              organization, and system support tailored for growing businesses.
              We streamline your financial processes, reduce errors, and ensure
              smooth operations.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Our Vision</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Making financial management effortless</li>
                    <li>Ensuring precision in every number</li>
                    <li>Creating lasting partnerships</li>
                  </ul>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Our Mission</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>Smooth and secure data transition</li>
                    <li>Streamlined bookkeeping workflows</li>
                    <li>Increased efficiency</li>
                  </ul>
                </div>
              </div>
            </div>

            <a href="#services">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                Know More
                <ArrowRight className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
