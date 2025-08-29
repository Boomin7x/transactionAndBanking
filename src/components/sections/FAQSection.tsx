'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { useFAQs } from '@/lib/queries'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion'

export function FAQSection() {
  const { data: faqs = [] } = useFAQs()

  return (
    <section id="faq-section" className="py-20 bg-gold-dark text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Can't find it here? Check out our{' '}
            <Link 
              href="/help" 
              className="text-white underline hover:text-gold-light transition-colors"
            >
              Help center
            </Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="border-t border-white/20">
            <Accordion type="single" collapsible defaultValue="1" className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.id} value={faq.id}>
                  <AccordionTrigger className="text-lg">
                    {index + 1}. {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <div className="border-b border-white/20 mt-0"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-8"
        >
          <Link 
            href="/faq" 
            className="inline-flex items-center text-lg text-white hover:text-gold-light transition-colors group"
          >
            See more FAQ
            <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
