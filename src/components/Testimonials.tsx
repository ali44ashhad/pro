import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

interface TestimonialsProps {
  /** Background variant to alternate against neighbouring sections. */
  bg?: "background" | "muted";
}

const Testimonials = ({ bg = "muted" }: TestimonialsProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`section-padding ${bg === "muted" ? "bg-muted" : "bg-background"}`} ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            What Clients Say
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Trusted by Owners Who'd Rather Run Their Business
          </h2>
          <p className="text-muted-foreground text-body-lg">
            Real results from businesses that handed off the books and never looked back.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <Quote className="w-8 h-8 text-primary/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.quote}"</p>
              <div className="mt-5 pt-4 border-t border-border">
                <p className="font-display font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
