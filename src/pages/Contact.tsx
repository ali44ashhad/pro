import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, Clock, MapPin, Send, CheckCircle2, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import { JsonLd, orgSchema, breadcrumbSchema } from "@/lib/schema";
import { site, hasAddress } from "@/config/site";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const contactItems: { icon: LucideIcon; label: string; href?: string }[] = [
    { icon: Phone, label: site.phoneDisplay, href: site.phoneHref },
    { icon: Mail, label: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: site.hours },
    ...(hasAddress
      ? [{ icon: MapPin, label: `${site.address.city}, ${site.address.state}` }]
      : [{ icon: MapPin, label: site.address.country }]),
  ];

  return (
    <PageShell>
      <Seo
        title="Contact Us"
        description={`Get in touch with ${site.name}. Call ${site.phoneDisplay} or send a message for a free consultation about your bookkeeping.`}
      />
      <JsonLd data={[orgSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])]} />

      <PageHero
        eyebrow="Contact Us"
        title="Let's Get Your Books in Order"
        subtitle="Reach out for a free, no-pressure consultation. We'll review where you stand and show you exactly how we can help."
        crumbs={[{ label: "Home", to: "/" }, { label: "Contact" }]}
      />

      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-card rounded-2xl p-8 border border-border">
                <h2 className="font-display text-xl font-semibold text-foreground mb-6">Contact Information</h2>
                <div className="space-y-5">
                  {contactItems.map((item, i) =>
                    item.href ? (
                      <a key={i} href={item.href} className="flex items-center gap-4 group">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                          {item.label}
                        </span>
                      </a>
                    ) : (
                      <div key={i} className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center shrink-0">
                          <item.icon className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-muted-foreground text-sm">{item.label}</span>
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-center">
                <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Prefer to talk it through?</h3>
                <p className="text-primary-foreground/80 text-sm mb-4">We answer Monday to Friday and the first call is free.</p>
                <a href={site.phoneHref}>
                  <Button
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call us now
                  </Button>
                </a>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              className="bg-card rounded-2xl p-8 border border-border"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {sent ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-12">
                  <CheckCircle2 className="w-14 h-14 text-primary mb-4" />
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">Thank you!</h3>
                  <p className="text-muted-foreground text-sm max-w-sm">
                    We've received your message and will get back to you within one business day. For anything
                    urgent, call us at {site.phoneDisplay}.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className="font-display text-xl font-semibold text-foreground mb-2">Request a Free Consultation</h2>
                  <p className="text-sm text-muted-foreground mb-6">
                    Tell us a little about your business and we'll be in touch.
                  </p>
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSent(true);
                    }}
                  >
                    <Input
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="rounded-lg bg-muted border-border"
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email address"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="rounded-lg bg-muted border-border"
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="rounded-lg bg-muted border-border"
                    />
                    <textarea
                      placeholder="How can we help?"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="flex w-full rounded-lg border border-border bg-muted px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[140px] resize-none"
                      required
                    />
                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-full gap-2">
                      <Send className="w-4 h-4" />
                      Send message
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our{" "}
                      <a href="/privacy" className="text-primary underline">Privacy Policy</a>.
                    </p>
                  </form>
                </>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageShell>
  );
};

export default Contact;
