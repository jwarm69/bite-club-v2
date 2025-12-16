import { createClient } from '@supabase/supabase-js'
import { getSupabaseRestaurantName, areRestaurantNamesSimilar } from './restaurant-mapping'

// Environment variable validation and sanitization
function validateAndSanitizeEnvVar(value: string | undefined, name: string): string {
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`)
  }

  // Sanitize the value by trimming whitespace and removing newlines
  const sanitized = value.trim().replace(/\r?\n|\r/g, '')

  if (!sanitized) {
    throw new Error(`Invalid empty environment variable after sanitization: ${name}`)
  }

  return sanitized
}

// Validate and sanitize environment variables
const supabaseUrl = validateAndSanitizeEnvVar(process.env.NEXT_PUBLIC_SUPABASE_URL, 'NEXT_PUBLIC_SUPABASE_URL')
const supabaseAnonKey = validateAndSanitizeEnvVar(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY, 'NEXT_PUBLIC_SUPABASE_ANON_KEY')

// Create Supabase client with error handling
let supabase: ReturnType<typeof createClient>
try {
  supabase = createClient(supabaseUrl, supabaseAnonKey)
} catch (error) {
  console.error('Failed to initialize Supabase client:', error)
  // Create a mock client that will fail gracefully for build-time usage
  supabase = createClient('https://placeholder.supabase.co', 'placeholder-key')
}

export { supabase }

// Database types based on our schema
export interface User {
  id: string
  email: string
  passwordHash: string
  role: 'STUDENT' | 'RESTAURANT' | 'ADMIN'
  schoolId?: string
  creditBalance: number
  firstName?: string
  lastName?: string
  phone?: string
  active: boolean
  createdAt: string
  updatedAt: string
}

export interface School {
  id: string
  name: string
  domain: string
  location?: string
  active: boolean
  createdAt: string
  updatedAt: string
}

export interface Restaurant {
  id: string
  name: string
  phone?: string
  email?: string
  schoolId: string
  description?: string
  logoUrl?: string
  menuSchema?: Record<string, unknown>
  callEnabled: boolean
  active: boolean
  createdAt: string
  updatedAt: string
  operatingHours?: Record<string, string>
  userId?: string
  callPhone?: string
  callRetries: number
  callTimeoutSeconds: number
  externalIntegrations?: Record<string, unknown>
  integrationEnabled: boolean
  toastLocationGuid?: string
}

export interface MenuItem {
  id: string
  restaurantId: string
  name: string
  description?: string
  price: number
  category?: string
  imageUrl?: string
  available: boolean
  modifiers?: Record<string, unknown>
  createdAt: string
  updatedAt: string
  externalIds?: Record<string, unknown>
  toastItemGuid?: string
}

export interface Order {
  id: string
  userId: string
  restaurantId: string
  totalAmount: number
  discountAmount: number
  finalAmount: number
  status: 'PENDING' | 'CONFIRMED' | 'PREPARING' | 'READY' | 'COMPLETED' | 'CANCELLED' | 'REFUNDED'
  specialInstructions?: string
  promotionApplied?: string
  createdAt: string
  updatedAt: string
  refundReason?: string
  refundedAt?: string
  refundedBy?: string
  total: number
  externalOrderData?: Record<string, unknown>
  integrationStatus?: string
  toastOrderGuid?: string
}

export interface CreditPackage {
  id: string
  name: string
  amount: number
  price: number
  bonus_credits: number
  description: string
  is_popular: boolean
  created_at: string
}

export interface Purchase {
  id: string
  user_id: string
  credit_package_id: string
  stripe_payment_intent_id: string
  amount_paid: number
  credits_received: number
  status: 'pending' | 'completed' | 'failed'
  created_at: string
  updated_at: string
}

export interface UserCredits {
  id: string
  user_id: string
  balance: number
  total_purchased: number
  total_spent: number
  last_updated: string
}

// Helper functions for database operations
export const userService = {
  async createUser(userData: Omit<User, 'id' | 'createdAt' | 'updatedAt'>) {
    const { data, error } = await supabase
      .from('users')
      .insert([userData])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async getUserByEmail(email: string) {
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  async updateUser(id: string, updates: Partial<User>) {
    const { data, error } = await supabase
      .from('users')
      .update(updates)
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  }
}

export const restaurantService = {
  async getRestaurants(schoolId?: string) {
    let query = supabase
      .from('restaurants')
      .select('*')
      .eq('active', true)
      .order('name', { ascending: true })
    
    if (schoolId) {
      query = query.eq('schoolId', schoolId)
    }
    
    const { data, error } = await query
    if (error) throw error
    return data
  },

  async getRestaurantBySlug(slug: string) {
    // Use mapping to get the expected Supabase restaurant name
    const expectedName = getSupabaseRestaurantName(slug)

    // Try exact match with mapped name first
    let { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('active', true)
      .ilike('name', expectedName)
      .single()

    // If exact match fails, try partial match with mapped name
    if (error && error.code === 'PGRST116') {
      const result = await supabase
        .from('restaurants')
        .select('*')
        .eq('active', true)
        .ilike('name', `%${expectedName}%`)
        .single()

      data = result.data
      error = result.error
    }

    // If still no match, get all restaurants and do fuzzy matching
    if (error && error.code === 'PGRST116') {
      const { data: allRestaurants, error: allError } = await supabase
        .from('restaurants')
        .select('*')
        .eq('active', true)

      if (!allError && allRestaurants) {
        // Find the best match using name similarity
        const bestMatch = allRestaurants.find(restaurant =>
          areRestaurantNamesSimilar(String(restaurant.name || ''), expectedName)
        )

        if (bestMatch) {
          data = bestMatch
          error = null
        }
      }
    }

    if (error && error.code !== 'PGRST116') throw error
    return data
  },

  async getRestaurantById(id: string) {
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('id', id)
      .eq('active', true)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  }
}

export const menuService = {
  async getMenuItems(restaurantId?: string, category?: string) {
    let query = supabase
      .from('menu_items')
      .select('*')
      .eq('available', true)
      .order('category', { ascending: true })
      .order('name', { ascending: true })
    
    if (restaurantId) {
      query = query.eq('restaurantId', restaurantId)
    }
    
    if (category) {
      query = query.eq('category', category)
    }
    
    const { data, error } = await query
    if (error) throw error
    return data
  },

  async getMenuItemsByRestaurant(restaurantId: string) {
    const { data, error } = await supabase
      .from('menu_items')
      .select('*')
      .eq('restaurantId', restaurantId)
      .eq('available', true)
      .order('category', { ascending: true })
      .order('name', { ascending: true })
    
    if (error) throw error
    return data
  },

  async searchMenuItems(searchTerm: string, restaurantId?: string) {
    let query = supabase
      .from('menu_items')
      .select('*')
      .eq('available', true)
      .or(`name.ilike.%${searchTerm}%,description.ilike.%${searchTerm}%`)
    
    if (restaurantId) {
      query = query.eq('restaurantId', restaurantId)
    }
    
    const { data, error } = await query
    if (error) throw error
    return data
  }
}

export const creditService = {
  async getCreditPackages() {
    const { data, error } = await supabase
      .from('credit_packages')
      .select('*')
      .order('price', { ascending: true })
    
    if (error) throw error
    return data
  },

  async getUserCredits(userId: string) {
    const { data, error } = await supabase
      .from('user_credits')
      .select('*')
      .eq('user_id', userId)
      .single()
    
    if (error && error.code !== 'PGRST116') throw error
    return data
  }
}