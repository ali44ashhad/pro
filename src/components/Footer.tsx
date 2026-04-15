import { Calculator } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-foreground text-background/70 py-12">
    <div className="container mx-auto px-4">
      <div className="grid gap-8 mb-10 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Calculator className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-background">ProBookeepers  </span>
          </div>
          <p className="text-sm leading-relaxed">
            Reliable bookkeeping setup, data organization, and system support tailored for growing businesses.
          </p>
        </div>

        <div className="order-2">
          <h4 className="font-display font-semibold text-background mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {[
              "Bookkeeping",
              "Payroll Services",
              "Tax Planning",
              "Audit & Assurance",
              "Financial Reporting",
              "Business Advisory",
            ].map((s) => (
              <li key={s}>
                <Link to="/#services" className="hover:text-primary transition-colors">
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-3">
          <h4 className="font-display font-semibold text-background mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Home", href: "#home" },
              { label: "About Us", href: "#about" },
              { label: "Services", href: "#services" },
              { label: "Contact Us", href: "#contact" },
            ].map((l) => (
              <li key={l.label}>
                <Link to={`/${l.href}`} className="hover:text-primary transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-4 lg:order-4">
          <h4 className="font-display font-semibold text-background mb-4">Contact</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <a className="hover:text-primary transition-colors" href="tel:+18888221011">
                +1 (888) 822 1011
              </a>
            </li>
            <li>
              <a className="hover:text-primary transition-colors" href="mailto:info@probookeeper.com">
                info@probookeepers.com
              </a>
            </li>
            <li>Mon - Fri | 9am - 6pm</li>
          </ul>
        </div>

        <div className="order-5 lg:order-5">
          <h4 className="font-display font-semibold text-background mb-4">Legal</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/terms" className="hover:text-primary transition-colors">
                Terms &amp; Conditions
              </Link>
            </li>
            <li>
              <Link to="/privacy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 text-center text-sm space-y-3">
        <p className="max-w-5xl mx-auto text-xs leading-relaxed text-background/60">
          Disclaimer: ProBookeepers is an independent third-party service provider offering bookkeeping and accounting support services. We are not
          affiliated with, endorsed by, or associated with any software company or brand. All product names, trademarks, and registered trademarks are
          the property of their respective owners and are used strictly for identification purposes only.
        </p>
        <div>© {new Date().getFullYear()} ProBookeepers. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer;