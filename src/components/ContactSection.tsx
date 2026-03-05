import { useState } from "react";
import AnimatedSection from "./AnimatedSection";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { toast } from "sonner";

const ContactSection = () => {
  const [form, setForm] = useState({
    firstName: "", lastName: "", phone: "", email: "",
    indianResident: "", projectLocation: "", newClient: "",
    preferredLanguage: "", practiceArea: "", heardFrom: "",
    countyOfDispute: "", message: "", agreeTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.firstName || !form.email || !form.phone) {
      toast.error("Please fill in required fields");
      return;
    }
    if (!form.agreeTerms) {
      toast.error("Please agree to Terms & Conditions");
      return;
    }
    toast.success("Thank you! We will get back to you shortly.");
  };

  const update = (field: string, value: string | boolean) => setForm(prev => ({ ...prev, [field]: value }));

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(var(--gold)/0.04),transparent_60%)]" />
      <div className="container mx-auto relative z-10">
        <AnimatedSection className="text-center mb-16">
          <p className="text-primary font-body text-sm tracking-[0.3em] uppercase mb-4">Get in Touch</p>
          <h2 className="heading-section mb-3">
            Request a <span className="text-gradient-gold">Free Consultation</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-2xl mx-auto">
            We are available to assist you. Your consultation is free and you will speak to an experienced lawyer, guaranteed.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Contact Info */}
          <AnimatedSection className="space-y-6" delay={0.1}>
            <div className="bg-card border border-border rounded-lg p-6 space-y-6">
              <h3 className="font-display text-xl font-semibold text-foreground">Need help right away?</h3>
              <div className="space-y-4">
                <a href="mailto:casematters.info@gmail.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">casematters.info@gmail.com</span>
                </a>
                <a href="tel:+919810238083" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-sm">+91 9810238083</span>
                </a>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm">DLF Almeda, Sector 73, SPR Road, Gurgaon – 122101</span>
                </div>
                <div className="flex items-start gap-3 text-muted-foreground">
                  <Clock className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div className="text-sm">
                    <p>Mon - Sat | 10am - 8pm</p>
                    <p>Sunday | 10am - 5pm</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-card border border-primary/20 rounded-lg p-6">
              <blockquote className="font-display text-lg italic text-primary/80 leading-relaxed">
                "High-Quality Legal Advice Can Fit a Small Business Budget. Small Firm Attention, Big Firm Results."
              </blockquote>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection className="lg:col-span-2" delay={0.2}>
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-lg p-6 sm:p-8 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">First Name*</label>
                  <Input value={form.firstName} onChange={e => update("firstName", e.target.value)} required />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Last Name*</label>
                  <Input value={form.lastName} onChange={e => update("lastName", e.target.value)} required />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Phone*</label>
                  <Input type="tel" value={form.phone} onChange={e => update("phone", e.target.value)} required />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Email*</label>
                  <Input type="email" value={form.email} onChange={e => update("email", e.target.value)} required />
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Indian Resident?*</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground" value={form.indianResident} onChange={e => update("indianResident", e.target.value)}>
                    <option value="">Choose...</option>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Project Location*</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground" value={form.projectLocation} onChange={e => update("projectLocation", e.target.value)}>
                    <option value="">Choose location...</option>
                    <option>New Delhi</option>
                    <option>Haryana</option>
                    <option>Punjab</option>
                    <option>Gujarat</option>
                    <option>Other (outside India)</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Are you a new client?*</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground" value={form.newClient} onChange={e => update("newClient", e.target.value)}>
                    <option value="">Choose...</option>
                    <option>Yes, I am a potential new client</option>
                    <option>No, I'm a current existing client</option>
                    <option>I'm neither</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Preferred Language*</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground" value={form.preferredLanguage} onChange={e => update("preferredLanguage", e.target.value)}>
                    <option value="">Choose...</option>
                    <option>English</option>
                    <option>Hindi</option>
                    <option>Spanish</option>
                    <option>French</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Practice Area*</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground" value={form.practiceArea} onChange={e => update("practiceArea", e.target.value)}>
                    <option value="">Choose...</option>
                    <option>Arbitration</option>
                    <option>Contract Drafting</option>
                    <option>Contract and Claim Management</option>
                    <option>Construction and Infrastructure Disputes</option>
                    <option>Employment, Labour and Benefits</option>
                    <option>Contract Advisory & Risk Management</option>
                    <option>Startup Law & Compliance</option>
                    <option>Civil, Commercial or Business Litigation</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm text-muted-foreground mb-1 block">Where did you hear about us?</label>
                  <select className="w-full h-10 rounded-md border border-input bg-background px-3 text-sm text-foreground" value={form.heardFrom} onChange={e => update("heardFrom", e.target.value)}>
                    <option value="">Choose...</option>
                    <option>Google</option>
                    <option>Social Media</option>
                    <option>Word of Mouth</option>
                    <option>TV / Radio / Newspaper</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">County of Dispute*</label>
                <Input value={form.countyOfDispute} onChange={e => update("countyOfDispute", e.target.value)} />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Message</label>
                <Textarea rows={4} value={form.message} onChange={e => update("message", e.target.value)} />
              </div>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" checked={form.agreeTerms} onChange={e => update("agreeTerms", e.target.checked)} className="mt-1 accent-primary" />
                <span className="text-xs text-muted-foreground">
                  I agree to the Terms & Conditions and Privacy Policy provided by Case Matters Legal Services. By providing my phone number, I consent to receive text messages and calls from Case Matters Legal Services.
                </span>
              </label>
              <Button type="submit" variant="gold" size="lg" className="w-full gap-2">
                <Send className="w-4 h-4" />
                Request Free Consultation
              </Button>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
