import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import QuickLinks from "@/components/home/QuickLinks";
import AboutPreview from "@/components/home/AboutPreview";
import ProgramsSection from "@/components/home/ProgramsSection";
import NewsPreview from "@/components/home/NewsPreview";
import CTASection from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <QuickLinks />
      <AboutPreview />
      <ProgramsSection />
      <NewsPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
