'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '@/lib/supabase'

export default function AuthCallbackPage() {
  const router = useRouter()

  useEffect(() => {
    const handleCallback = async () => {
      try {
        // Exchange the auth code for a session
        const { data: { session }, error } = await supabase.auth.getSession()
        
        if (error) {
          console.error('Error during auth callback:', error)
          router.push('/signin?error=auth_failed')
          return
        }

        if (session) {
          // Successful authentication, redirect to dashboard
          router.push('/dashboard')
        } else {
          // No session, redirect to sign in
          router.push('/signin')
        }
      } catch (error) {
        console.error('Unexpected error during auth callback:', error)
        router.push('/signin?error=unexpected')
      }
    }

    handleCallback()
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-bite-club-green"></div>
        <p className="mt-4 text-gray-600">Completing sign in...</p>
      </div>
    </div>
  )
}