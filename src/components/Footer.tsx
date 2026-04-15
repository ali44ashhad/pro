import { Calculator } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background/70 py-12">
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Calculator className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-background">ProBookeeper</span>
          </div>
          <p className="text-sm leading-relaxed">Reliable bookkeeping setup, data organization, and system support tailored for growing businesses.</p>
        </div>
        <div>
          <h4 className="font-display font-semibold text-background mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {["Bookkeeping", "Payroll Services", "Tax Planning", "Audit & Assurance", "Financial Reporting", "Business Advisory"].map((s) => (
              <li key={s}><a href="#services" className="hover:text-primary transition-colors">{s}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[{ label: "Home", href: "#home" }, { label: "About Us", href: "#about" }, { label: "Services", href: "#services" }, { label: "Contact Us", href: "#contact" }].map((l) => (
              <li key={l.label}><a href={l.href} className="hover:text-primary transition-colors">{l.label}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold text-background mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>+1 (888) 871 0037</li>
            <li>info@probookeeper.com</li>
            <li>Mon - Fri | 9am - 6pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-sm">
        © {new Date().getFullYear()} ProBookeeper. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
