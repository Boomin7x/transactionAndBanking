'use client'

import { motion } from 'framer-motion'
import { CheckCircle, Globe, DollarSign, Smartphone, Zap } from 'lucide-react'

const benefits = [
  {
    icon: Globe,
    title: 'Over 95+ countries',
    description: 'Send money to over 90+ countries conveniently'
  },
  {
    icon: DollarSign,
    title: 'Lower Fees',
    description: 'Finasddee guarantees the lowest fees'
  },
  {
    icon: Smartphone,
    title: 'Easy to Use',
    description: 'Finasddee maintains an engaging user experience'
  },
  {
    icon: Zap,
    title: 'Faster Payments',
    description: 'Receiver typically receives funds immediately'
  }
]

export function WhyChooseUsSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-8">
                Why choose Finasddee?
              </h2>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-6 h-6 text-green" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-dark-blue mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div
              className="aspect-[4/3] bg-cover bg-center rounded-lg shadow-2xl"
              style={{
                backgroundImage: 'url(https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80)',
              }}
            />

            {/* Overlay gradient for better text readability if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-blue/20 to-transparent rounded-lg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
