'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/AuthContext'
import Navigation from '@/components/Navigation'
import Link from 'next/link'
import { User, CreditCard, ShoppingBag, Settings, LogOut, DollarSign } from 'lucide-react'

export default function DashboardPage() {
  const router = useRouter()
  const { user, userData, loading, signOut } = useAuth()

  useEffect(() => {
    if (!loading && !user) {
      router.push('/signin')
    }
  }, [user, loading, router])

  const handleSignOut = async () => {
    try {
      await signOut()
      router.push('/')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <div className="flex items-center justify-center h-[calc(100vh-80px)]">
          <div className="text-center">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-bite-club-green"></div>
            <p className="mt-4 text-gray-600">Loading your dashboard...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!user || !userData) {
    return null
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                Welcome back, {userData.firstName || 'Student'}!
              </h1>
              <p className="text-gray-600 mt-1">{user.email}</p>
            </div>
            <button
              onClick={handleSignOut}
              className="flex items-center text-gray-600 hover:text-gray-900"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Sign Out
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Credit Balance Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Credit Balance</h2>
              <DollarSign className="w-6 h-6 text-bite-club-green" />
            </div>
            <p className="text-3xl font-bold text-gray-900">
              ${userData.creditBalance.toFixed(2)}
            </p>
            <p className="text-sm text-gray-600 mt-2">Available credits</p>
            <Link
              href="/buy-credits"
              className="mt-4 inline-block w-full text-center bg-bite-club-green text-white py-2 px-4 rounded-lg hover:bg-bite-club-green-dark transition-colors"
            >
              Buy More Credits
            </Link>
          </div>

          {/* Quick Actions Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                href="/restaurant-partners"
                className="flex items-center text-gray-700 hover:text-bite-club-green transition-colors"
              >
                <ShoppingBag className="w-5 h-5 mr-3" />
                Browse Restaurants
              </Link>
              <Link
                href="/buy-credits"
                className="flex items-center text-gray-700 hover:text-bite-club-green transition-colors"
              >
                <CreditCard className="w-5 h-5 mr-3" />
                Purchase Credits
              </Link>
              <Link
                href="/profile"
                className="flex items-center text-gray-700 hover:text-bite-club-green transition-colors"
              >
                <Settings className="w-5 h-5 mr-3" />
                Account Settings
              </Link>
            </div>
          </div>

          {/* Profile Info Card */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Profile</h2>
              <User className="w-6 h-6 text-bite-club-green" />
            </div>
            <div className="space-y-2">
              <div>
                <p className="text-sm text-gray-600">Name</p>
                <p className="font-medium text-gray-900">
                  {userData.firstName} {userData.lastName}
                </p>
              </div>
              {userData.phone && (
                <div>
                  <p className="text-sm text-gray-600">Phone</p>
                  <p className="font-medium text-gray-900">{userData.phone}</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">Account Type</p>
                <p className="font-medium text-gray-900 capitalize">{userData.role.toLowerCase()}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Recent Orders Section (placeholder) */}
        <div className="mt-8 bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Recent Orders</h2>
          <div className="text-center py-8">
            <ShoppingBag className="w-12 h-12 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-600">No orders yet</p>
            <p className="text-sm text-gray-500 mt-1">
              Start ordering from our partner restaurants!
            </p>
            <Link
              href="/restaurant-partners"
              className="mt-4 inline-block bg-bite-club-green text-white py-2 px-6 rounded-lg hover:bg-bite-club-green-dark transition-colors"
            >
              Browse Restaurants
            </Link>
          </div>
        </div>

        {/* Student Benefits Section */}
        <div className="mt-8 bg-gradient-to-r from-bite-club-green to-bite-club-green-dark rounded-lg p-6 text-white">
          <h2 className="text-xl font-semibold mb-3">Your Student Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <p className="text-3xl font-bold">10%+</p>
              <p className="text-green-100">Average savings per order</p>
            </div>
            <div>
              <p className="text-3xl font-bold">20+</p>
              <p className="text-green-100">Partner restaurants</p>
            </div>
            <div>
              <p className="text-3xl font-bold">$0</p>
              <p className="text-green-100">Delivery fees</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}