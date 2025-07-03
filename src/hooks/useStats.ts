// Custom hook for fetching live statistics from MVP

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'
import { config } from '@/lib/config'

interface SiteStats {
  totalUsers: number
  totalOrders: number
  totalSavings: number
  activeRestaurants: number
  averageSavingsPerMeal: number
  averagePickupTime: number
}

// Static fallback data matching current homepage
const staticStats: SiteStats = {
  totalUsers: 10000,
  totalOrders: 50000,
  totalSavings: 125000, // $125k total savings
  activeRestaurants: 25,
  averageSavingsPerMeal: 2.50,
  averagePickupTime: 5 // minutes
}

interface UseStatsResult {
  stats: SiteStats
  loading: boolean
  error: string | null
  refetch: () => void
  isLiveData: boolean
}

export function useStats(): UseStatsResult {
  const [stats, setStats] = useState<SiteStats>(staticStats)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLiveData, setIsLiveData] = useState(false)

  const fetchStats = async () => {
    setLoading(true)
    setError(null)

    try {
      // Try to fetch from MVP API
      const liveStats = await apiClient.getStats()
      
      // Transform MVP stats to match our interface if needed
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const statsData = liveStats as any
      const transformedStats: SiteStats = {
        totalUsers: statsData.total_users || statsData.totalUsers || staticStats.totalUsers,
        totalOrders: statsData.total_orders || statsData.totalOrders || staticStats.totalOrders,
        totalSavings: statsData.total_savings || statsData.totalSavings || staticStats.totalSavings,
        activeRestaurants: statsData.active_restaurants || statsData.activeRestaurants || staticStats.activeRestaurants,
        averageSavingsPerMeal: statsData.avg_savings_per_meal || statsData.averageSavingsPerMeal || staticStats.averageSavingsPerMeal,
        averagePickupTime: statsData.avg_pickup_time || statsData.averagePickupTime || staticStats.averagePickupTime
      }
      
      setStats(transformedStats)
      setIsLiveData(true)
    } catch (err) {
      console.warn('Failed to fetch live stats, using static data:', err)
      // Fallback to static data on error
      setStats(staticStats)
      setIsLiveData(false)
      setError('Using cached statistics')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Only try to fetch live data when enabled
    if (config.features.enableLiveData) {
      fetchStats()
    } else {
      // Use static data when live data is disabled
      setStats(staticStats)
      setIsLiveData(false)
      setLoading(false)
    }
  }, [])

  return {
    stats,
    loading,
    error,
    refetch: fetchStats,
    isLiveData
  }
}

// Formatted display helpers
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount)
}

export function formatNumber(num: number): string {
  if (num >= 1000000) {
    return (num / 1000000).toFixed(1) + 'M'
  }
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + 'K'
  }
  return num.toString()
}

export function formatSavings(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2
  }).format(amount)
}