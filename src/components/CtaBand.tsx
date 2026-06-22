import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { site } from "@/config/site";

interface CtaBandProps {
  title?: string;
  subtitle?: string;
}

/** Green call-to-action strip used at the foot of inner pages. */
const CtaBand = ({
  title = "Ready for books you can finally trust?",
  subtitle = "Book a free consultation. We'll review where you stand and show you exactly how we can help.",
}: CtaBandProps) => (
  <section className="bg-primary">
    <div className="container mx-auto px-4 py-14 sm:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-primary-foreground mb-3">
          {title}
        </h2>
        <p className="text-primary-foreground/80 text-body-lg mb-8">{subtitle}</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a href={site.phoneHref}>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary rounded-full gap-2"
            >
              <Phone className="w-4 h-4" />
              {site.phoneDisplay}
            </Button>
          </a>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 rounded-full gap-2"
            >
              Get in touch
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  </section>
);

export default CtaBand;
