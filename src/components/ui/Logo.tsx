'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface LogoProps {
  className?: string
  textColor?: string
}

export function Logo({ className = '', textColor = 'text-gold-light' }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center ${className}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
        className="flex items-center space-x-2"
      >
        {/* Logo Icon */}
        <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-lg">
          <span className="text-dark-blue font-bold text-xl">F</span>
        </div>
        
        {/* Logo Text */}
        <div className={`text-2xl font-bold ${textColor}`}>
          Finasddee
        </div>
      </motion.div>
    </Link>
  )
}
