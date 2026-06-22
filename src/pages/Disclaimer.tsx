import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/config/site";

const Disclaimer = () => (
  <PageShell>
    <Seo
      title="Disclaimer"
      description={`Disclaimer for ${site.name} — an independent bookkeeping and accounting support provider not affiliated with any software brand.`}
    />
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Disclaimer", path: "/disclaimer" }])} />

    <PageHero
      eyebrow="Legal"
      title="Disclaimer"
      crumbs={[{ label: "Home", to: "/" }, { label: "Disclaimer" }]}
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl space-y-8 text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-foreground font-display text-lg font-semibold mb-2">Independent Service Provider</h2>
            <p>{site.disclaimer}</p>
          </section>

          <section>
            <h2 className="text-foreground font-display text-lg font-semibold mb-2">No Professional or Legal Advice</h2>
            <p>
              The information on this website is provided for general informational purposes only and does not
              constitute accounting, tax, legal, or financial advice. Every business situation is different. You
              should consult a qualified professional before making decisions based on the content here.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-display text-lg font-semibold mb-2">No Guaranteed Outcomes</h2>
            <p>
              While we work hard to deliver accurate and timely service, we make no guarantees regarding specific
              financial results, savings, or outcomes. Results depend on factors that include the accuracy and
              completeness of the information you provide.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-display text-lg font-semibold mb-2">Trademarks</h2>
            <p>
              QuickBooks® and the QuickBooks logo are registered trademarks of Intuit Inc. All other product
              names, logos, and trademarks referenced on this site are the property of their respective owners.
              Any reference to a third-party brand, including QuickBooks, is for identification and descriptive
              purposes only and does not imply affiliation, endorsement, or sponsorship.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-display text-lg font-semibold mb-2">External Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content,
              accuracy, or practices of those sites. Following an external link is at your own discretion.
            </p>
          </section>

          <section>
            <h2 className="text-foreground font-display text-lg font-semibold mb-2">Contact</h2>
            <p>
              Questions about this disclaimer? Contact {site.name} at{" "}
              <a className="text-primary underline hover:text-primary/90" href={site.phoneHref}>
                {site.phoneDisplay}
              </a>{" "}
              or{" "}
              <a className="text-primary underline hover:text-primary/90" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </section>

    <CtaBand />
  </PageShell>
);

export default Disclaimer;
