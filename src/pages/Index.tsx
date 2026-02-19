import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ExpertisesSection from "@/components/ExpertisesSection";
import MethodSection from "@/components/MethodSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import LocalSection from "@/components/LocalSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ProblemSection />
        <ExpertisesSection />
        <MethodSection />
        <CaseStudiesSection />
        <LocalSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
