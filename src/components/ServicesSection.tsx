import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  BookOpen, DollarSign, PieChart, ShieldCheck, FileText, Cpu, TrendingUp,
} from "lucide-react";

const services = [
  { icon: BookOpen, title: "Bookkeeping", desc: "Accurate, organized bookkeeping that keeps your financial records clear, consistent, and always up to date." },
  { icon: DollarSign, title: "Payroll Services", desc: "Reliable payroll management that ensures timely, accurate, and compliant employee payments with complete peace of mind." },
  { icon: PieChart, title: "Tax Planning", desc: "Proactive tax strategies designed to reduce liabilities while maintaining full compliance and financial clarity." },
  { icon: ShieldCheck, title: "Audit & Assurance", desc: "Dependable audit services that strengthen transparency and build trust in your financial records." },
  { icon: FileText, title: "Financial Reporting", desc: "Clear, detailed financial reports that give you full visibility and support confident business decisions." },
  { icon: Cpu, title: "Technology-Driven Solutions", desc: "Modern, tech-enabled accounting systems designed to enhance efficiency, accuracy, and overall productivity." },
  { icon: TrendingUp, title: "Business Advisory", desc: "Expert insights and strategic guidance to protect your business and support long-term, sustainable growth." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding bg-muted" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
          <h2 className="heading-section text-foreground mb-4">Smart, Real-World Accounting Solutions</h2>
          <p className="text-muted-foreground text-body-lg">We simplify your financial processes with a reliable, hassle-free approach backed by a skilled team and modern tools.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-300">
                <s.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
