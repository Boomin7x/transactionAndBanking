'use client'

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'
import Image from 'next/image'
import Link from 'next/link'

export function PageHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="bg-white text-black z-50 shadow-md font-bold mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            {/* The provided image path is used here. If a Logo component exists, it could be used instead. */}
            <Image src="/images/logo.png" alt="Finasddee" height={400} width={400} className="w-[180px]" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            <a href="/login" className="text-black hover:text-gold-dark transition-colors">
              Login
            </a>
            <a 
              href="/signup" 
              className="bg-gold-dark text-white px-4 py-2 transition-colors hover:bg-gold-darker"
            >
              Register
            </a>
          </nav>

          {/* Mobile Toggler */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-black transition-colors z-50"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        fixed inset-0 bg-white transition-transform transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:hidden z-40 p-4 pt-20
      `}>
        <nav className="flex flex-col items-center space-y-4">
          <a 
            href="/login" 
            onClick={toggleMenu}
            className="text-black block w-full text-center py-2 border-b border-gray-200"
          >
            Login
          </a>
          <a 
            href="/signup" 
            onClick={toggleMenu}
            className="bg-gold-dark text-white px-4 py-2 w-full text-center transition-colors hover:bg-gold-darker"
          >
            Register
          </a>
        </nav>
      </div>
    </header>
  )
}
