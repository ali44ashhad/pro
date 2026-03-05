import { Scale } from "lucide-react";

const practiceAreas = [
  "Arbitration", "Contract and Claim Management", "Employment, Labour and Benefits",
  "Corporate and Commercial", "Corporate Governance", "Dispute Resolution",
  "Startup Law & Compliance", "Civil, Commercial and Business Litigation",
];

const usefulLinks = ["About Us", "Contact", "Services", "Our Blog"];

const Footer = () => (
  <footer className="bg-card border-t border-border">
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Scale className="w-5 h-5 text-primary" />
            <span className="font-display text-xl font-bold text-gradient-gold">Case Matters</span>
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Professional legal services built on trust, strategy, and results.
          </p>
          <p className="text-xs text-muted-foreground">
            DLF Almeda, Sector 73, SPR Road, Gurgaon – 122101
          </p>
        </div>

        {/* Practice Areas */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Practice Areas</h4>
          <ul className="space-y-2">
            {practiceAreas.map(a => (
              <li key={a}>
                <a href="#services" className="text-xs text-muted-foreground hover:text-primary transition-colors">{a}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Useful Links</h4>
          <ul className="space-y-2">
            {usefulLinks.map(l => (
              <li key={l}>
                <a href={`#${l.toLowerCase().replace(/ /g, "-")}`} className="text-xs text-muted-foreground hover:text-primary transition-colors">{l}</a>
              </li>
            ))}
            <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Terms & Conditions</a></li>
            <li><a href="#" className="text-xs text-muted-foreground hover:text-primary transition-colors">Disclaimer</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">Contact</h4>
          <div className="space-y-2 text-xs text-muted-foreground">
            <p>casematters.info@gmail.com</p>
            <p>+91 9810238083</p>
            <p>Mon - Sat | 10am - 8pm</p>
            <p>Sunday | 10am - 5pm</p>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-border text-center">
        <p className="text-xs text-muted-foreground">
          © Case Matters Legal Services. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
