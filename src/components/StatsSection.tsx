import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Bookkeeping Completed" },
  { value: "50+", label: "Companies Served" },
  { value: "200+", label: "Happy Clients" },
];

const whyUs = [
  { title: "10+ Years", desc: "Bookkeeping Experience" },
  { title: "Data Migration", desc: "100% Success Score" },
  { title: "Dedicated Support", desc: "Dedicated Support Team" },
  { title: "Free Consulting", desc: "Expert Guidance" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref}>
      <div className="section-padding bg-background">
        <div className="container mx-auto">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-14"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="heading-section text-foreground mb-4">Effortless Accounting Starts with ProBookeeper</h2>
            <p className="text-muted-foreground text-body-lg">Our experts handle the transition with speed and precision—so you can focus on growing your business.</p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/30 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <h3 className="font-display text-xl font-bold text-primary mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-primary py-14">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
              >
                <p className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-primary-foreground/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
