'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/Button'
import { Logo } from '@/components/ui/Logo'

export function MainHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="absolute top-0 left-0 right-0 bg-transparent text-white z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="#how-it-works"
              className="text-white hover:text-gold-light transition-colors"
            >
              How it works
            </Link>
            <Link
              href="/faq"
              className="text-white hover:text-gold-light transition-colors"
            >
              Help
            </Link>
            <Link
              href="#network-section"
              className="text-white hover:text-gold-light transition-colors"
            >
              Our Network
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <Link href="/login">Login</Link>
            </Button>
            <Button variant="primary" size="sm" asChild>
              <Link href="/signup">Register</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-white hover:text-gold-light transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-dark-blue/95 backdrop-blur-sm rounded-lg mt-2 p-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="#how-it-works"
                className="text-white hover:text-gold-light transition-colors py-2"
                onClick={toggleMenu}
              >
                How it works
              </Link>
              <Link
                href="/faq"
                className="text-white hover:text-gold-light transition-colors py-2"
                onClick={toggleMenu}
              >
                Help
              </Link>
              <Link
                href="#network-section"
                className="text-white hover:text-gold-light transition-colors py-2"
                onClick={toggleMenu}
              >
                Our Network
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-white/20">
                <Button variant="outline" size="sm" asChild>
                  <Link href="/login" onClick={toggleMenu}>Login</Link>
                </Button>
                <Button variant="primary" size="sm" asChild>
                  <Link href="/signup" onClick={toggleMenu}>Register</Link>
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
