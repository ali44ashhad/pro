import { motion } from "framer-motion";
import { Eye, Rocket, ShieldCheck, Users, Clock, Lock } from "lucide-react";
import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import AnimatedSection from "@/components/AnimatedSection";
import { JsonLd, orgSchema, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/config/site";

const values = [
  { icon: ShieldCheck, title: "Accuracy first", text: "Reconciled, documented, audit-ready records — every account, every month." },
  { icon: Lock, title: "Confidential by default", text: "Encrypted, permission-based access you control, covered by a confidentiality agreement." },
  { icon: Clock, title: "On time, every time", text: "Predictable monthly reporting on a schedule you can plan around." },
  { icon: Users, title: "A real partner", text: "Plain-language guidance from people who actually know your numbers." },
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "1000+", label: "Books Completed" },
  { value: "50+", label: "Companies Served" },
  { value: "200+", label: "Happy Clients" },
];

const About = () => (
  <PageShell>
    <Seo
      title="About Us"
      description={`Learn about ${site.name} — an independent bookkeeping and accounting support firm helping growing businesses keep clean, reliable books.`}
    />
    <JsonLd data={[orgSchema(), breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])]} />

    <PageHero
      eyebrow="About Company"
      title="Smarter Bookkeeping for Better Business Control"
      subtitle="An independent firm of certified QuickBooks ProAdvisors and bookkeepers, helping small businesses set up, fix, and run QuickBooks the right way."
      crumbs={[{ label: "Home", to: "/" }, { label: "About" }]}
    />

    {/* Story */}
    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80"
                alt="Bookkeeping and financial management"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg hidden sm:block">
              <p className="text-3xl font-display font-bold">10+</p>
              <p className="text-sm opacity-90">Years Experience</p>
            </div>
          </motion.div>

          <AnimatedSection>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Who We Are</p>
            <h2 className="heading-section text-foreground mb-6">QuickBooks Help You Don't Have to Chase</h2>
            <div className="space-y-4 text-muted-foreground text-body-lg">
              <p>
                {site.name} was built on a simple idea: business owners deserve QuickBooks that works and books they can
                trust — without spending their evenings on either. Our certified advisors handle the software and
                the numbers behind it, so everything stays current and accurate.
              </p>
              <p>
                We're independent — certified by Intuit as QuickBooks ProAdvisors, but not Intuit and not a call centre.
                Whether you need an error fixed today, a fresh QuickBooks setup, a catch-up on books that fell
                behind, or a clean Desktop-to-Online migration, we bring structure and discipline to your finances.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Eye className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Our Vision</h4>
                  <p className="text-sm text-muted-foreground">
                    Make QuickBooks effortless and the numbers behind it precise — a foundation for lasting partnerships.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                  <Rocket className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-foreground mb-1">Our Mission</h4>
                  <p className="text-sm text-muted-foreground">
                    Deliver fast, secure, certified QuickBooks help and bookkeeping that cuts errors and saves time.
                  </p>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-muted">
      <div className="container mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">What We Stand For</p>
          <h2 className="heading-section text-foreground mb-4">Principles Behind Every Engagement</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={i * 0.1}>
              <div className="bg-card rounded-2xl p-6 border border-border h-full">
                <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.text}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary py-14">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-4xl sm:text-5xl font-bold text-primary-foreground mb-1">{s.value}</p>
              <p className="text-sm text-primary-foreground/80">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <CtaBand />
  </PageShell>
);

export default About;
