// API Configuration and Client for MVP Integration
import { config } from './config'

interface ApiConfig {
  baseUrl: string
  apiKey?: string
  version?: string
  timeout: number
}

// Use centralized configuration
const defaultConfig: ApiConfig = {
  baseUrl: config.api.baseUrl,
  apiKey: config.api.apiKey,
  version: config.api.version,
  timeout: config.api.timeout
}

class ApiClient {
  private config: ApiConfig

  constructor(config: ApiConfig = defaultConfig) {
    this.config = config
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.config.baseUrl}/${this.config.version}/${endpoint}`
    
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...(options.headers as Record<string, string> || {}),
    }

    // Add API key if available
    if (this.config.apiKey) {
      headers['Authorization'] = `Bearer ${this.config.apiKey}`
    }

    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), this.config.timeout)
      
      const response = await fetch(url, {
        ...options,
        headers,
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API Request failed:', error)
      throw error
    }
  }

  // Restaurant endpoints
  async getRestaurants() {
    return this.request('restaurants')
  }

  async getRestaurant(id: string) {
    return this.request(`restaurants/${id}`)
  }

  async getRestaurantBySlug(slug: string) {
    return this.request(`restaurants/slug/${slug}`)
  }

  // Stats endpoints for homepage
  async getStats() {
    return this.request('stats')
  }

  // User endpoints
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  async createUser(userData: any) {
    return this.request('users', {
      method: 'POST',
      body: JSON.stringify(userData)
    })
  }

  // Credit endpoints
  async getCreditOptions() {
    return this.request('credits/options')
  }
}

// Export singleton instance
export const apiClient = new ApiClient()

// Export types for use in components
export type { ApiConfig }
export { ApiClient }