import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";
import Seo from "@/components/Seo";
import CtaBand from "@/components/CtaBand";
import { JsonLd, breadcrumbSchema } from "@/lib/schema";
import { site } from "@/config/site";

const Privacy = () => (
  <PageShell>
    <Seo
      title="Privacy Policy"
      description={`How ${site.name} collects, uses, and protects your information, including cookies and third-party advertising partners.`}
    />
    <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Privacy Policy", path: "/privacy" }])} />

    <PageHero
      eyebrow="Legal"
      title="Privacy Policy"
      subtitle="Effective Date: 14 April 2026"
      crumbs={[{ label: "Home", to: "/" }, { label: "Privacy Policy" }]}
    />

    <section className="section-padding bg-background">
      <div className="container mx-auto">
        <div className="max-w-3xl">
          <p className="text-muted-foreground leading-relaxed mb-8">
            At {site.name}, we respect your privacy and work to safeguard your personal and financial information.
            This Privacy Policy explains what we collect, how we use it, and how we protect it when you use our
            website or services.
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">1. Information We Collect</h2>
              <p>We may collect:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Personal details (such as name, email, phone number, and business information)</li>
                <li>Financial information (such as accounting records, transaction data, and related details)</li>
                <li>Technical data (such as IP address, browser type, device information, and usage analytics)</li>
                <li>Communication history (messages, inquiries, and support interactions)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">2. How We Use Your Information</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Provide and manage bookkeeping and accounting services</li>
                <li>Perform data conversion, setup, reporting, and related deliverables</li>
                <li>Improve service quality and website experience</li>
                <li>Respond to requests, send updates, and provide customer support</li>
                <li>Comply with applicable legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">3. Cookies &amp; Tracking Technologies</h2>
              <p>
                Our website uses cookies and similar technologies to improve your experience, remember
                preferences, and measure how visitors use the site. You can control or disable cookies through
                your browser settings; some features may not function correctly if cookies are disabled.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">
                4. Advertising &amp; Third-Party Cookies (Google AdSense)
              </h2>
              <p>
                We may display advertising served by third-party vendors, including Google. These partners use
                cookies and similar technologies to serve ads based on your prior visits to this and other
                websites.
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>
                  Third-party vendors, including Google, use cookies to serve ads based on your prior visits to
                  this website or other websites.
                </li>
                <li>
                  Google's use of advertising cookies enables it and its partners to serve ads to you based on
                  your visit to our site and/or other sites on the Internet.
                </li>
                <li>
                  You may opt out of personalized advertising by visiting Google's Ads Settings at{" "}
                  <a
                    className="text-primary underline hover:text-primary/90"
                    href="https://www.google.com/settings/ads"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    google.com/settings/ads
                  </a>
                  .
                </li>
                <li>
                  You can also opt out of third-party vendors' use of cookies for personalized advertising by
                  visiting{" "}
                  <a
                    className="text-primary underline hover:text-primary/90"
                    href="https://www.aboutads.info/choices/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    aboutads.info/choices
                  </a>
                  .
                </li>
              </ul>
              <p className="mt-3">
                For more information on how Google uses data when you use our partners' sites or apps, see{" "}
                <a
                  className="text-primary underline hover:text-primary/90"
                  href="https://policies.google.com/technologies/partner-sites"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Google's Privacy &amp; Terms
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">5. Data Security</h2>
              <p>We use reasonable technical and organizational measures, including:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Secure infrastructure and appropriate encryption practices</li>
                <li>Access controls and authentication safeguards</li>
                <li>Ongoing monitoring and routine updates</li>
              </ul>
              <p className="mt-3">
                No online transmission or storage system is 100% secure, but we take protection seriously and
                continuously improve our safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">6. Data Sharing</h2>
              <p>We do not sell or rent your personal information. We may share data only:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>With trusted service providers who help us operate and deliver services</li>
                <li>When required by law, regulation, or legal process</li>
                <li>To protect our rights, users, and business operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">7. Data Retention</h2>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Deliver services and meet contractual obligations</li>
                <li>Follow legal, tax, and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">8. Your Rights</h2>
              <p>Depending on your location, you may be able to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Request access to your personal data</li>
                <li>Ask for corrections or updates</li>
                <li>Request deletion (subject to legal requirements)</li>
                <li>Opt out of non-essential communications and personalized ads</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">9. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for their content or
                privacy practices—please review their policies directly.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">10. Children's Privacy</h2>
              <p>
                Our services are intended for businesses and individuals aged 18 and over. We do not knowingly
                collect personal information from children.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">11. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will post the updated version
                here with a revised effective date.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">12. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact {site.name} at{" "}
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
      </div>
    </section>

    <CtaBand />
  </PageShell>
);

export default Privacy;
