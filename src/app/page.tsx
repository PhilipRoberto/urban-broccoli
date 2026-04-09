import { Hero } from "@/components/hero";
import { FeaturesSection } from "@/components/features-section";
import { SharingSection } from "@/components/sharing-section";
import { HowItWorks } from "@/components/how-it-works";
import { CTASection, Footer } from "@/components/cta-footer";

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <Hero />
      <hr className="border-none border-t border-border mx-10" />
      <FeaturesSection />
      <SharingSection />
      <HowItWorks />
      <CTASection />
      <Footer />
    </main>
  );
}
