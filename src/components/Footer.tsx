import { Calculator, Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";
import { site, navLinks } from "@/config/site";
import { services } from "@/data/services";

const year = new Date().getFullYear();

const Footer = () => (
  <footer className="bg-foreground text-background/70 pt-14 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid gap-10 mb-12 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Calculator className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold text-background">{site.name}</span>
          </div>
          <p className="text-sm leading-relaxed">
            Reliable bookkeeping, accounting support, and financial reporting tailored for growing
            businesses across the United States.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display font-semibold text-background mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.slug}>
                <Link to={`/services/${s.slug}`} className="hover:text-primary transition-colors">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="font-display font-semibold text-background mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            {navLinks
              .filter((l) => l.href !== "/")
              .map((l) => (
                <li key={l.label}>
                  <Link to={l.href} className="hover:text-primary transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            <li>
              <Link to="/disclaimer" className="hover:text-primary transition-colors">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display font-semibold text-background mb-4">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a className="flex items-center gap-2 hover:text-primary transition-colors" href={site.phoneHref}>
                <Phone className="w-4 h-4 shrink-0" />
                {site.phoneDisplay}
              </a>
            </li>
            <li>
              <a className="flex items-center gap-2 hover:text-primary transition-colors" href={`mailto:${site.email}`}>
                <Mail className="w-4 h-4 shrink-0" />
                {site.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-4 h-4 shrink-0" />
              {site.hours}
            </li>
          </ul>
          <div className="mt-5 flex flex-wrap gap-4 text-sm">
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-primary transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-background/10 pt-6 text-center space-y-3">
        <p className="max-w-5xl mx-auto text-xs leading-relaxed text-background/60">
          Disclaimer: {site.disclaimer}
        </p>
        <div className="text-sm">© {year} {site.name}. All rights reserved.</div>
      </div>
    </div>
  </footer>
);

export default Footer;
