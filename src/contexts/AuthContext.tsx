'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User as SupabaseUser } from '@supabase/supabase-js'
import { supabase, User, userService } from '@/lib/supabase'

interface AuthContextType {
  user: SupabaseUser | null
  userData: User | null
  loading: boolean
  signUp: (email: string, password: string, userData: {
    first_name: string
    last_name: string
    phone?: string
    student_id?: string
    university?: string
  }) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  updateProfile: (updates: Partial<User>) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<SupabaseUser | null>(null)
  const [userData, setUserData] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        loadUserData(session.user.email!)
      }
      setLoading(false)
    })

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (event, session) => {
      setUser(session?.user ?? null)
      if (session?.user) {
        await loadUserData(session.user.email!)
      } else {
        setUserData(null)
      }
      setLoading(false)
    })

    return () => subscription.unsubscribe()
  }, [])

  const loadUserData = async (email: string) => {
    try {
      const data = await userService.getUserByEmail(email)
      setUserData(data)
    } catch (error) {
      console.error('Error loading user data:', error)
    }
  }

  const signUp = async (
    email: string, 
    password: string, 
    userData: {
      first_name: string
      last_name: string
      phone?: string
      student_id?: string
      university?: string
    }
  ) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) throw error

    // Create user profile in our database
    if (data.user) {
      await userService.createUser({
        email,
        passwordHash: '', // This will be handled by Supabase auth
        role: 'STUDENT',
        creditBalance: 0,
        firstName: userData.first_name,
        lastName: userData.last_name,
        phone: userData.phone,
        active: true
      })
    }
  }

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) throw error
  }

  const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  }

  const updateProfile = async (updates: Partial<User>) => {
    if (!userData) throw new Error('No user data available')

    const updatedData = await userService.updateUser(userData.id, updates)
    setUserData(updatedData)
  }

  const value = {
    user,
    userData,
    loading,
    signUp,
    signIn,
    signOut,
    updateProfile,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}