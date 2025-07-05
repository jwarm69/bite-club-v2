import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

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
    // Since we don't have slug in the schema, we'll search by name
    const { data, error } = await supabase
      .from('restaurants')
      .select('*')
      .eq('active', true)
      .ilike('name', `%${slug.replace('-', ' ')}%`)
      .single()
    
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