'use client'

import { motion } from 'framer-motion'
import { networkCountries } from '@/lib/data'

export function NetworkSection() {
  return (
    <section id="network-section" className="py-20 bg-light-gray">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-dark-blue mb-4">
            Our Network
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {networkCountries.map((country, index) => (
            <motion.div
              key={country.code}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center space-x-3">
                <div className="text-2xl">
                  {country.flag}
                </div>
                <div>
                  <h4 className="font-semibold text-dark-blue text-sm">
                    {country.name}
                  </h4>
                  <p className="text-xs text-gray-500">
                    {country.currency}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600">
            And many more countries coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}
