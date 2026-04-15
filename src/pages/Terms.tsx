import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const Terms = () => (
  <>
    <Navbar />
    <main className="min-h-screen bg-background pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-3">Legal</p>
          <h1 className="heading-section text-foreground mb-2">Terms and Conditions</h1>
          <p className="text-sm text-muted-foreground mb-10">Effective Date: 14 April 2026</p>

          <p className="text-muted-foreground leading-relaxed mb-8">
              Welcome to ProBookeepers. By accessing our website or using our services, you agree to these Terms &amp; Conditions.
            Please read them carefully.
          </p>

          <div className="space-y-8 text-muted-foreground leading-relaxed">
            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">1. Services</h2>
              <p>
                ProBookeepers offers independent bookkeeping, accounting support, data conversion, and related financial services. We are a third-party
                provider and do not represent, partner with, or act on behalf of any software company or brand.
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
                All website content, branding, and materials are owned by ProBookeepers and may not be reproduced or reused without written permission.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">6. Third-Party Services Disclaimer</h2>
              <p>
                ProBookeepers is not affiliated with, endorsed by, or associated with any software company or brand. Trademarks belong to their respective
                owners.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">7. Limitation of Liability</h2>
              <p>To the fullest extent permitted by law, ProBookeepers will not be liable for:</p>
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
                We may update these Terms from time to time. Continued use of our services after changes are posted means you accept the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-foreground font-display text-lg font-semibold mb-2">10. Contact Information</h2>
              <p className="text-muted-foreground">
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

export default Terms;

