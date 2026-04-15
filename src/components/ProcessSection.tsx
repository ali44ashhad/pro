import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Assessment & Organization",
    desc: "We assess your existing system and organize your financial data to ensure a smooth, accurate, and hassle-free transition.",
  },
  {
    num: "02",
    title: "Solution Selection & Mapping",
    desc: "We guide you in selecting the right bookkeeping solution and meticulously map your data for a smooth migration.",
  },
  {
    num: "03",
    title: "Migration & Validation",
    desc: "Your data is securely migrated, carefully validated, and thoroughly tested to ensure complete accuracy and integrity.",
  },
  {
    num: "04",
    title: "Training & Support",
    desc: "We deliver hands-on training and ongoing support, ensuring you can confidently manage your new system.",
  },
];

const ProcessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-background" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">
            Accounting Process
          </p>
          <h2 className="heading-section text-foreground mb-4">
            Streamlined & Reliable Bookkeeping Process
          </h2>
          <p className="text-muted-foreground text-body-lg">
            A structured, proven approach to ensure smooth and efficient
            transitions from start to finish.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
            >
              <div className="text-6xl font-display font-bold text-primary/10 mb-2">
                {step.num}
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 w-12 h-0.5 bg-primary/20 translate-x-6" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
