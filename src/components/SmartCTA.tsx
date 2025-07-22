// Smart Call-to-Action component that handles MVP integration

'use client'

import { integration } from '@/lib/integration'
import { ArrowRight } from 'lucide-react'
import { useAuth } from '@/contexts/AuthContext'
import { useRouter } from 'next/navigation'

interface SmartCTAProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  action: 'signup' | 'login' | 'order' | 'dashboard'
  restaurantSlug?: string
  source?: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export default function SmartCTA({
  variant = 'primary',
  size = 'md',
  action,
  restaurantSlug,
  className = '',
  children,
  onClick
}: SmartCTAProps) {
  const { user } = useAuth()
  const router = useRouter()
  
  const handleClick = () => {
    // Call custom onClick if provided
    if (onClick) {
      onClick()
    }

    // Handle the action based on type
    switch (action) {
      case 'signup':
        // Use internal signup if we have native auth
        router.push('/signup')
        break
      case 'login':
        // Use internal login if we have native auth
        router.push('/signin')
        break
      case 'order':
        if (restaurantSlug) {
          // If user is logged in, could use internal ordering in future
          // For now, still redirect to MVP
          integration.redirectToOrder(restaurantSlug)
        } else {
          console.warn('Restaurant slug required for order action')
        }
        break
      case 'dashboard':
        // Use internal dashboard if user is logged in
        if (user) {
          router.push('/dashboard')
        } else {
          router.push('/signin')
        }
        break
      default:
        console.warn('Unknown action:', action)
    }
  }

  // Base styles
  const baseStyles = 'inline-flex items-center justify-center font-semibold rounded-full transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl'
  
  // Variant styles
  const variantStyles = {
    primary: 'bg-white text-bite-club-green hover:bg-accent-orange hover:text-white',
    secondary: 'bg-bite-club-green text-white hover:bg-bite-club-green-dark',
    outline: 'border-2 border-white text-white hover:bg-white hover:text-bite-club-green'
  }

  // Size styles  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-4 text-lg',
    lg: 'px-10 py-5 text-xl'
  }

  const combinedStyles = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`

  return (
    <button
      onClick={handleClick}
      className={combinedStyles}
      style={{
        // CSS variables for hover effects
        '--bite-club-green': '#22c55e',
        '--bite-club-green-dark': '#16a34a',
        '--accent-orange': '#f97316'
      } as React.CSSProperties}
    >
      {children}
      <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </button>
  )
}

// Specific CTA components for common use cases
export function GetStartedCTA({ source }: { source?: string }) {
  return (
    <SmartCTA action="signup" source={source} variant="primary" size="lg">
      Get Started Now
    </SmartCTA>
  )
}

export function OrderNowCTA({ restaurantSlug }: { restaurantSlug: string }) {
  return (
    <SmartCTA action="order" restaurantSlug={restaurantSlug} variant="secondary" size="md">
      Order Now
    </SmartCTA>
  )
}

export function SignupCTA({ source, variant = 'primary' }: { source?: string, variant?: 'primary' | 'secondary' | 'outline' }) {
  return (
    <SmartCTA action="signup" source={source} variant={variant} size="md">
      Signup for Bite Club
    </SmartCTA>
  )
}

export function ViewMenuCTA({ restaurantSlug }: { restaurantSlug: string }) {
  return (
    <SmartCTA action="order" restaurantSlug={restaurantSlug} variant="outline" size="sm">
      View Menu & Order
    </SmartCTA>
  )
}