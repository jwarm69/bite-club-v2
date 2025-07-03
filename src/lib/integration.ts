// Integration utilities for connecting marketing site to MVP
import { config } from './config'

interface MVPUrls {
  login: string
  signup: string
  dashboard: string
  order: string
  restaurant: (slug: string) => string
}

// Use centralized configuration
const defaultMVPUrls: MVPUrls = {
  login: config.mvp.login,
  signup: config.mvp.signup,
  dashboard: config.mvp.dashboard,
  order: config.mvp.order,
  restaurant: config.mvp.restaurant
}

class IntegrationHelper {
  private urls: MVPUrls

  constructor(urls: MVPUrls = defaultMVPUrls) {
    this.urls = urls
  }

  // Generate URLs for handoff to MVP
  getLoginUrl(redirectTo?: string): string {
    const url = new URL(this.urls.login)
    if (redirectTo) {
      url.searchParams.set('redirect', redirectTo)
    }
    return url.toString()
  }

  getSignupUrl(source?: string): string {
    const url = new URL(this.urls.signup)
    if (source) {
      url.searchParams.set('source', source)
    }
    // Add UTM parameters for tracking
    url.searchParams.set('utm_source', 'marketing_site')
    url.searchParams.set('utm_medium', 'website')
    return url.toString()
  }

  getRestaurantOrderUrl(slug: string): string {
    return this.urls.restaurant(slug)
  }

  getDashboardUrl(): string {
    return this.urls.dashboard
  }

  // Handle user authentication state
  isUserLoggedIn(): boolean {
    // This will be implemented once we know the MVP's auth system
    // Could check for JWT token, session cookie, etc.
    if (typeof window === 'undefined') return false
    
    // Placeholder logic - update based on actual MVP auth
    return !!localStorage.getItem('bite_club_token')
  }

  // Redirect helpers
  redirectToLogin(redirectTo?: string): void {
    if (typeof window !== 'undefined') {
      window.location.href = this.getLoginUrl(redirectTo)
    }
  }

  redirectToSignup(source?: string): void {
    if (typeof window !== 'undefined') {
      window.location.href = this.getSignupUrl(source)
    }
  }

  redirectToOrder(slug: string): void {
    if (typeof window !== 'undefined') {
      window.location.href = this.getRestaurantOrderUrl(slug)
    }
  }

  // Open in new tab instead of redirect
  openMVP(url: string): void {
    if (typeof window !== 'undefined') {
      window.open(url, '_blank', 'noopener,noreferrer')
    }
  }
}

// Export singleton instance
export const integration = new IntegrationHelper()

// Export types
export type { MVPUrls }
export { IntegrationHelper }