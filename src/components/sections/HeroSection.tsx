'use client'

import { motion } from 'framer-motion'
import { SendMoneyForm } from './SendMoneyForm'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image - Fixed for parallax effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2126&q=80)',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-dark-blue/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 pt-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="mb-6">
              <p className="text-gold-light text-lg mb-2 font-light">
                A better way to
              </p>
              <h1 className="text-5xl lg:text-6xl font-bold text-white mb-4">
                Send Money
              </h1>
            </div>
            
            <p className="text-xl text-white/90 mb-8 max-w-lg">
              You've got the money. We've got the speed.
            </p>
          </motion.div>

          {/* Right Column - Send Money Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-md mx-auto lg:mx-0 px-4 lg:px-0"
          >
            <SendMoneyForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
