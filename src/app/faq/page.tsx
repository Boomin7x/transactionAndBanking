import type { Metadata } from 'next'

import { PageHeader } from '@/components/layout/PageHeader'
import { Footer } from '@/components/layout/Footer'
import { Preloader } from '@/components/ui/Preloader'
import { BackToTop } from '@/components/ui/BackToTop'
import { FAQPageContent } from '@/components/sections/FAQPageContent'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Finasddee',
  description:
    'Find answers to common questions about sending money with Finasddee. Learn about registration, limits, fees, security, and more.',
}

export default function FAQPage() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      <div className="min-h-screen">
        {/* Header */}
        <PageHeader />

        {/* Content */}
        <main>
          <FAQPageContent />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top */}
        <BackToTop />
      </div>
    </>
  )
}
