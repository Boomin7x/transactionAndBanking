import type { Metadata } from 'next'
import Link from 'next/link'

import { PageHeader } from '@/components/layout/PageHeader'
import { Footer } from '@/components/layout/Footer'
import { Preloader } from '@/components/ui/Preloader'
import { BackToTop } from '@/components/ui/BackToTop'
import { MultiStepSendMoneyForm } from '@/components/forms/MultiStepSendMoneyForm'

export const metadata: Metadata = {
  title: 'Send Money | Finasddee',
  description: 'Send money to family, friends and businesses home and abroad with Finasddee. Fast, secure, and affordable international money transfers.',
}

export default function SendMoneyPage() {
  return (
    <>
      <Preloader />

      <div className="min-h-screen">
        <PageHeader />

        {/* Breadcrumb / Hero */}
        <div className="bg-primary">
          <div className="container mx-auto px-4">
            <ul className="nav nav-pills alternate nav-lg border-bottom-0">
              <li className="nav-item"> <a className="nav-link active" href="/send-money">Sending Money</a></li>
            </ul>
          </div>
        </div>

        <main>
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4 text-black">
                <MultiStepSendMoneyForm />
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
