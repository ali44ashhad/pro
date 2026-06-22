import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  return (
    <section id="contact" className="section-padding bg-muted" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
          <h2 className="heading-section text-foreground mb-4">Get In Touch</h2>
          <p className="text-muted-foreground text-body-lg">Let ProBookeepers simplify your finances. Reach out for a free consultation today.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div className="space-y-6" initial={{ opacity: 0, x: -30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "+1 (888) 803-0205", href: "tel:+18888030205" },
                  { icon: Mail, label: "info@probookeepers.com", href: "mailto:info@probookeepers.com" },
                  { icon: MapPin, label: "United States", href: "#" },  
                  { icon: Clock, label: "Mon - Fri | 9am - 6pm", href: "#" },
                ].map((item) => (
                  <a key={item.label} href={item.href} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">{item.label}</span>
                  </a>
                ))}
              </div>
            </div>
            <div className="bg-primary rounded-2xl p-8 text-center">
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Overwhelmed by Financial Management?</h3>
              <p className="text-primary-foreground/80 text-sm mb-4">Let ProBookeepers simplify it for you.</p>
              <a href="tel:+18888030205">
                <Button variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full">
                  <Phone className="w-4 h-4 mr-2" />Call Us Now
                </Button>
              </a>
            </div>
          </motion.div>

          <motion.div className="bg-card rounded-2xl p-8 border border-border" initial={{ opacity: 0, x: 30 }} animate={inView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }}>
            <h3 className="font-display text-xl font-semibold text-foreground mb-6">Request a Free Consultation</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Thank you! We will contact you soon."); }}>
              <Input placeholder="Full Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="rounded-lg bg-muted border-border" required />
              <Input type="email" placeholder="Email Address" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="rounded-lg bg-muted border-border" required />
              <Input type="tel" placeholder="Phone Number" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="rounded-lg bg-muted border-border" />
              <textarea placeholder="Tell us about your needs..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="flex w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[120px] resize-none" required />
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                <Send className="w-4 h-4" />Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
