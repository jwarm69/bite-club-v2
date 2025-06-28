'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X, Instagram, Facebook } from 'lucide-react'

interface NavigationProps {
  className?: string
}

export default function Navigation({ className = '' }: NavigationProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navigationItems = [
    { href: '/buy-credits', label: 'Buy Credits' },
    { href: '/how-it-works', label: 'How it works' },
    { href: '/restaurant-partners', label: 'Restaurant Partners' },
    { href: '/faq', label: 'FAQ' },
    { href: '/contact', label: 'Contact' },
  ]

  const isActive = (href: string) => pathname === href

  return (
    <header className={`sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm ${className}`}>
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-br from-bite-club-green to-bite-club-green-dark rounded-full flex items-center justify-center shadow-lg" style={{
            background: 'linear-gradient(135deg, var(--bite-club-green-light) 0%, var(--bite-club-green) 100%)'
          }}>
            <span className="text-white font-bold text-lg">BC</span>
          </div>
          <span className="text-xl font-bold text-bite-club-green" style={{
            background: `linear-gradient(135deg, var(--bite-club-green) 0%, var(--bite-club-green-dark) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Bite Club Meal Plan
          </span>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {navigationItems.map((item) => (
            <Link 
              key={item.href}
              href={item.href} 
              className={`transition-colors ${
                isActive(item.href) 
                  ? 'font-semibold' 
                  : 'text-gray-700'
              }`}
              style={{
                color: isActive(item.href) ? 'var(--bite-club-green)' : undefined
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.href)) {
                  e.currentTarget.style.color = 'var(--bite-club-green)'
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive(item.href)) {
                  e.currentTarget.style.color = 'var(--gray-700)'
                }
              }}
            >
              {item.label}
            </Link>
          ))}
        </div>
        
        {/* Desktop Social Links */}
        <div className="hidden md:flex items-center space-x-4">
          <Link 
            href="https://www.instagram.com/biteclubmealplan/" 
            target="_blank"
            className="text-gray-600 transition-colors hover:text-bite-club-green"
            style={{'--hover-color': 'var(--bite-club-green)' } as React.CSSProperties}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bite-club-green)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
          >
            <Instagram size={20} />
          </Link>
          <Link 
            href="https://www.facebook.com/profile.php?id=100091958843706" 
            target="_blank"
            className="text-gray-600 transition-colors hover:text-bite-club-green"
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--bite-club-green)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--gray-600)'}
          >
            <Facebook size={20} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-gray-700" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="container mx-auto px-4 py-4 space-y-4">
            {navigationItems.map((item) => (
              <Link 
                key={item.href}
                href={item.href}
                className={`block py-2 transition-colors ${
                  isActive(item.href) 
                    ? 'text-green-600 font-semibold' 
                    : 'text-gray-700 hover:text-green-600'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* Mobile Social Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-gray-200">
              <Link 
                href="https://www.instagram.com/biteclubmealplan/" 
                target="_blank"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <Instagram size={20} />
                <span>Instagram</span>
              </Link>
              <Link 
                href="https://www.facebook.com/profile.php?id=100091958843706" 
                target="_blank"
                className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
              >
                <Facebook size={20} />
                <span>Facebook</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}