// Configuration for MVP integration
// Centralized place to manage all integration settings

export const config = {
  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_MVP_API_URL || 'https://api.biteclubmealplan.com',
    apiKey: process.env.NEXT_PUBLIC_MVP_API_KEY,
    version: 'v1',
    timeout: 10000
  },

  // MVP App URLs
  mvp: {
    login: process.env.NEXT_PUBLIC_MVP_LOGIN_URL || 'https://app.biteclubmealplan.com/login',
    signup: process.env.NEXT_PUBLIC_MVP_SIGNUP_URL || 'https://app.biteclubmealplan.com/signup',
    dashboard: process.env.NEXT_PUBLIC_MVP_DASHBOARD_URL || 'https://app.biteclubmealplan.com/dashboard',
    order: process.env.NEXT_PUBLIC_MVP_ORDER_URL || 'https://app.biteclubmealplan.com/order',
    restaurant: (slug: string) => `${process.env.NEXT_PUBLIC_MVP_ORDER_URL || 'https://app.biteclubmealplan.com/order'}/restaurants/${slug}`
  },

  // Feature Flags
  features: {
    enableLiveData: process.env.NEXT_PUBLIC_ENABLE_LIVE_DATA === 'true' || process.env.NODE_ENV === 'production',
    enableAnalytics: !!process.env.NEXT_PUBLIC_GA_ID,
    enableMixpanel: !!process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  },

  // Analytics
  analytics: {
    googleAnalyticsId: process.env.NEXT_PUBLIC_GA_ID,
    mixpanelToken: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN
  },

  // Development Settings
  dev: {
    isDevelopment: process.env.NODE_ENV === 'development',
    isProduction: process.env.NODE_ENV === 'production',
    debugApi: process.env.NEXT_PUBLIC_DEBUG_API === 'true'
  }
} as const

// Helper functions for common config checks
export const isLiveDataEnabled = () => config.features.enableLiveData
export const isAnalyticsEnabled = () => config.features.enableAnalytics
export const isDevelopment = () => config.dev.isDevelopment
export const isProduction = () => config.dev.isProduction

// Validation function to check if required config is present
export function validateConfig() {
  const warnings: string[] = []
  const errors: string[] = []

  // Check for required production config
  if (isProduction()) {
    if (!config.api.baseUrl.includes('biteclubmealplan.com')) {
      warnings.push('MVP API URL should be updated for production')
    }
    
    if (!config.api.apiKey) {
      warnings.push('MVP API key not configured')
    }

    if (!config.analytics.googleAnalyticsId) {
      warnings.push('Google Analytics not configured')
    }
  }

  // Log warnings and errors
  if (warnings.length > 0) {
    console.warn('Configuration warnings:', warnings)
  }
  
  if (errors.length > 0) {
    console.error('Configuration errors:', errors)
    throw new Error(`Configuration errors: ${errors.join(', ')}`)
  }

  return { warnings, errors }
}

// Initialize config validation in non-server environments
if (typeof window !== 'undefined') {
  validateConfig()
}