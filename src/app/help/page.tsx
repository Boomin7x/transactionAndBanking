import type { Metadata } from 'next'

import { PageHeader } from '@/components/layout/PageHeader'
import { Footer } from '@/components/layout/Footer'
import { Preloader } from '@/components/ui/Preloader'
import { BackToTop } from '@/components/ui/BackToTop'
import { HelpPageContent } from '@/components/sections/HelpPageContent'

export const metadata: Metadata = {
  title: 'Help Center | Finasddee',
  description: 'Get help with Finasddee services. Find answers to common questions or contact support.',
}

export default function HelpPage() {
  return (
    <>
      {/* Preloader */}
      <Preloader />

      <div className="min-h-screen">
        {/* Header */}
        <PageHeader />

        {/* Content */}
        <main>
          <HelpPageContent />
        </main>

        {/* Footer */}
        <Footer />

        {/* Back to Top */}
        <BackToTop />
      </div>
    </>
  )
}
