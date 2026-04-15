import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Privacy = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="heading-section text-foreground mb-2">Privacy Policy</h1>
          <p className="text-sm text-muted-foreground mb-10">Effective Date: 14 April 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-8">
            At ProBookeepers, we respect your privacy and work to safeguard your personal and financial information. This Privacy Policy explains what we
            collect, how we use it, and how we protect it when you use our website or services.
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
              <p>We use information to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Provide and manage bookkeeping and accounting services</li>
                <li>Perform data conversion, setup, reporting, and related deliverables</li>
                <li>Improve service quality and website experience</li>
                <li>Respond to requests, send updates, and provide customer support</li>
                <li>Comply with applicable legal and regulatory obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">3. Data Security</h2>
              <p>We use reasonable technical and organizational measures, including:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Secure infrastructure and appropriate encryption practices</li>
                <li>Access controls and authentication safeguards</li>
                <li>Ongoing monitoring and routine updates</li>
              </ul>
              <p className="mt-3">
                No online transmission or storage system is 100% secure, but we take protection seriously and continuously improve our safeguards.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">4. Data Sharing</h2>
              <p>We do not sell or rent your personal information. We may share data only:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>With trusted service providers who help us operate and deliver services</li>
                <li>When required by law, regulation, or legal process</li>
                <li>To protect our rights, users, and business operations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">5. Data Retention</h2>
              <p>We keep data only as long as necessary to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Deliver services and meet contractual obligations</li>
                <li>Follow legal, tax, and regulatory requirements</li>
                <li>Resolve disputes and enforce agreements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">6. Your Rights</h2>
              <p>Depending on your location, you may be able to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Request access to your personal data</li>
                <li>Ask for corrections or updates</li>
                <li>Request deletion (subject to legal requirements)</li>
                <li>Opt out of non-essential communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">7. Cookies &amp; Tracking</h2>
              <p>Our website may use cookies or similar technologies to:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Improve user experience</li>
                <li>Measure site performance</li>
                <li>Remember preferences</li>
              </ul>
              <p className="mt-3">You can control cookies through your browser settings.</p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party sites. We are not responsible for their content or privacy practices—please review their
                policies directly.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">9. Policy Updates</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will post the updated version here with a revised effective date.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">10. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, contact:
                <br />
                ProBookeepers
                <br />
                Phone: <a className="text-primary underline hover:text-primary/90" href="tel:+18888221011">+1 (888) 822 1011</a>
              </p>
            </section>
          </div>

          <div className="mt-10">
            <Link to="/" className="text-primary underline hover:text-primary/90">
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Privacy;

