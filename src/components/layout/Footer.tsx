'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Logo } from '@/components/ui/Logo'

const footerLinks = {
  information: [
    { label: 'How It works', href: '/#how-it-works' },
    { label: 'Sending Countries', href: '/sending-countries' },
    { label: 'Receiving Countries', href: '/receiving-countries' },
    { label: 'FAQ', href: '/faq' },
  ],
  support: [
    { label: 'Contact Us', href: '/contact' },
    { label: 'User Agreement', href: '/user-agreement' },
    { label: 'Terms and Conditions', href: '/privacy-policy' },
    { label: 'Cookie Policy', href: '/cookie-policy' },
  ]
}

export function Footer() {
  return (
    <footer className="bg-gold-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Information Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
              Information
            </h4>
            <nav className="space-y-3">
              {footerLinks.information.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Help and Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-4 uppercase tracking-wide">
              Help and Support
            </h4>
            <nav className="space-y-3">
              {footerLinks.support.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="block text-white/90 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Logo textColor="text-white" />
            <p className="text-white/90 leading-relaxed">
              Finasddee sends and receives in 150+ countries.
            </p>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-white/20 pt-8"
        >
          <div className="text-center md:text-left">
            <p className="text-white/90">
              Copyright © 2025{' '}
              <Link 
                href="/" 
                className="text-white hover:text-gold-light transition-colors"
              >
                Finasddee
              </Link>
              . All Rights Reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
