'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import Image from 'next/image'

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
        <Link href="/" className="flex items-center">
          {/* The provided image path is used here. If a Logo component exists, it could be used instead. */}
          <Image src="/images/logo.png" alt="Finasddee" height={400} width={400} className="w-[180px]" />
        </Link>

      </motion.div>
    </Link>
  )
}
