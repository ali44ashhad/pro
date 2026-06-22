import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import ProcessSection from "@/components/ProcessSection";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingActions from "@/components/FloatingActions";
import Seo from "@/components/Seo";
import { JsonLd, orgSchema } from "@/lib/schema";

const Index = () => (
  <>
    <Seo />
    <JsonLd data={orgSchema()} />
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <StatsSection />
      <ProcessSection />
      <Testimonials />
      <ContactSection />
    </main>
    <Footer />
    <FloatingActions />
  </>
);

export default Index;
