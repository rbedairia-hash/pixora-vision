import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import ExpertisesSection from "@/components/ExpertisesSection";
import MethodSection from "@/components/MethodSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import LocalSection from "@/components/LocalSection";
import CTASection from "@/components/CTASection";
import SEO from "@/components/SEO";
import { useEffect } from "react";
import { initScrollReveal } from "@/lib/reveal";


const Index = () => {
  useEffect(() => {
    initScrollReveal();
  }, []);

  return (
    <div className="min-h-screen">
      <SEO
        title="Graphiste & Création de Site Internet en Haute-Loire (43)"
        description="PIXORA : Studio d'image et digital basé au Puy-en-Velay. Expertise en branding, création de site internet et photographie produit pour les PME de Haute-Loire."
      />
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
