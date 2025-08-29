import { MainHeader } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { HeroSection } from '@/components/sections/HeroSection'
import { HowItWorksSection } from '@/components/sections/HowItWorksSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { NetworkSection } from '@/components/sections/NetworkSection'
import { TestimonialsSection } from '@/components/sections/TestimonialsSection'
import { SpecialOfferSection } from '@/components/sections/SpecialOfferSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { Preloader } from '@/components/ui/Preloader'
import { BackToTop } from '@/components/ui/BackToTop'

export default function Home() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      <div className="min-h-screen">
        {/* Header */}
        <MainHeader />

        {/* Main Content */}
        <main>
          {/* Hero Section with Send Money Form */}
          <HeroSection />

          {/* How It Works Section */}
          <HowItWorksSection />

          {/* Why Choose Us Section */}
          <WhyChooseUsSection />

          {/* Network Section */}
          <NetworkSection />

          {/* Testimonials Section */}
          <TestimonialsSection />

          {/* Special Offer Section */}
          <SpecialOfferSection />

          {/* FAQ Section */}
          <FAQSection />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top Button */}
        <BackToTop />
      </div>
    </>
  );
}
