import type { Metadata } from 'next'
import Link from 'next/link'

import { PageHeader } from '@/components/layout/PageHeader'
import { Footer } from '@/components/layout/Footer'
import { Preloader } from '@/components/ui/Preloader'
import { BackToTop } from '@/components/ui/BackToTop'
import ClientResetPasswordForm from '@/components/forms/ClientResetPasswordForm'

export const metadata: Metadata = {
  title: 'Reset Password | Finasddee',
  description: 'Reset your Finasddee account password.',
}

export default function ResetPasswordPage() {
  return (
    <>
      <Preloader />

      <div className="min-h-screen">
        <PageHeader />

        {/* Breadcrumb / Hero */}
        <section className="py-12 bg-gold-dark text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <nav className="mb-2 text-white/80">
                <ol className="inline-flex items-center space-x-2">
                  <li>
                    <Link href="/" className="hover:underline">Home</Link>
                  </li>
                  <li><span className="opacity-70">/</span></li>
                  <li className="opacity-100">Reset Password</li>
                </ol>
              </nav>
              <h1 className="text-4xl md:text-5xl font-bold">Reset Password</h1>
            </div>
          </div>
        </section>

        <main>
          <section className="py-10 bg-white">
            <div className="container mx-auto px-4 text-black">
              <div className="max-w-xl mx-auto">
                <div className="bg-white shadow-md p-6">
                  <h3 className="text-2xl font-bold text-center mb-4">Reset Password</h3>
                  <hr className="border-gray-200" />

                  <ClientResetPasswordForm />

                  <p className="text-center mt-4">
                    Remember your password?{' '}
                    <Link href="/login" className="text-gold-dark hover:underline">Sign In</Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <BackToTop />
      </div>
    </>
  )
}
