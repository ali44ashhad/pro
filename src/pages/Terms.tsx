import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/config/site";

const Terms = () => (
  <PageShell>
    <Seo
      title="Terms & Conditions"
      description={`The terms and conditions for using ${site.name}'s website and bookkeeping services.`}
    />
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Terms", path: "/terms" }])} />

    <PageHero
      eyebrow="Legal"
      title="Terms &amp; Conditions"
      subtitle="Effective Date: 14 April 2026"
      crumbs={[{ label: "Home", to: "/" }, { label: "Terms" }]}
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-8">
            Welcome to {site.name}. By accessing our website or using our services, you agree to these Terms
            &amp; Conditions. Please read them carefully.
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">1. Services</h2>
              <p>
                {site.name} offers independent bookkeeping, accounting support, data conversion, and related
                financial services. We are a third-party provider and do not represent, partner with, or act on
                behalf of any software company or brand.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">2. User Responsibilities</h2>
              <p>By using our services, you agree to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Provide accurate and complete information</li>
                <li>Keep your financial data and access credentials confidential</li>
                <li>Use our services only for lawful purposes</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">3. Service Limitations</h2>
              <p>We work hard to deliver accurate and timely service, but we cannot guarantee:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Uninterrupted or error-free service</li>
                <li>Any particular financial outcome or result</li>
                <li>Compatibility with every third-party platform or system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">4. Payments</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>Payment is due according to the agreed terms before or during delivery of services.</li>
                <li>Pricing may change depending on scope, complexity, and timelines.</li>
                <li>Non-payment may result in pausing or stopping services.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">5. Intellectual Property</h2>
              <p>
                All website content, branding, and materials are owned by {site.name} and may not be reproduced
                or reused without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">6. Third-Party Services Disclaimer</h2>
              <p>
                {site.name} is not affiliated with, endorsed by, or associated with any software company or
                brand. Trademarks belong to their respective owners.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, {site.name} will not be liable for:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Indirect, incidental, or consequential losses</li>
                <li>Data loss caused by third-party systems or services</li>
                <li>Business interruptions outside our reasonable control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">8. Termination of Services</h2>
              <p>We may suspend or terminate services if:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>These Terms are violated</li>
                <li>False or misleading information is provided</li>
                <li>Payment obligations are not met</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">9. Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of our services after changes are
                posted means you accept the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">10. Contact Information</h2>
              <p>
                {site.name} —{" "}
                <a className="text-primary underline hover:text-primary/90" href={site.phoneHref}>
                  {site.phoneDisplay}
                </a>{" "}
                ·{" "}
                <a className="text-primary underline hover:text-primary/90" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>

    <CtaBand />
  </PageShell>
);

export default Terms;
