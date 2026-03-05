import DisclaimerModal from "@/components/DisclaimerModal";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import SectorsSection from "@/components/SectorsSection";
import FAQSection from "@/components/FAQSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <DisclaimerModal />
    <Navbar />
    <main>
      <HeroSection />
      <AboutSection />
      <StatsSection />
      <ServicesSection />
      <SectorsSection />
      <FAQSection />
      <BlogSection />
      <ContactSection />
    </main>
    <Footer />
  </>
);

export default Index;
