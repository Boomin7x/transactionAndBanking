'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

export function SpecialOfferSection() {
  return (
    <section className="relative py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1559526324-4b87b5e36e44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-blue/80" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center md:flex md:items-center md:justify-center md:text-left md:space-x-8"
        >
          <div className="mb-6 md:mb-0">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white leading-tight">
              Sign up today and get your first transaction fee free!
            </h2>
          </div>
          
          <div className="flex-shrink-0">
            <Button 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white hover:text-dark-blue"
              asChild
            >
              <Link href="/signup">
                Sign up Now
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
