import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Benefits } from "@/components/landing/Benefits";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Treatments } from "@/components/landing/Treatments";
import { Testimonials } from "@/components/landing/Testimonials";
import { WhyChooseUs } from "@/components/landing/WhyChooseUs";
import { Credibility } from "@/components/landing/Credibility";
import { CTASection } from "@/components/landing/CTASection";
import { Footer } from "@/components/landing/Footer";
import { WhatsAppFloat } from "@/components/landing/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Benefits />
        <BeforeAfter />
        <Treatments />
        <Testimonials />
        <WhyChooseUs />
        <Credibility />
        <CTASection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
