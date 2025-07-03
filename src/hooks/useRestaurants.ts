// Custom hook for fetching restaurants from MVP API with fallback to static data

import { useState, useEffect } from 'react'
import { apiClient } from '@/lib/api'
import { restaurants as staticRestaurants, Restaurant } from '@/data/restaurants'
import { config } from '@/lib/config'

interface UseRestaurantsResult {
  restaurants: Restaurant[]
  loading: boolean
  error: string | null
  refetch: () => void
  isLiveData: boolean
}

export function useRestaurants(): UseRestaurantsResult {
  const [restaurants, setRestaurants] = useState<Restaurant[]>(staticRestaurants)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLiveData, setIsLiveData] = useState(false)

  const fetchRestaurants = async () => {
    setLoading(true)
    setError(null)

    try {
      // Try to fetch from MVP API
      const liveData = await apiClient.getRestaurants()
      
      // Transform MVP data to match our Restaurant interface if needed
      // This transformation will depend on the MVP's data structure
      const transformedData = Array.isArray(liveData) ? liveData : (liveData as { restaurants?: Restaurant[] })?.restaurants || []
      
      if (transformedData.length > 0) {
        setRestaurants(transformedData)
        setIsLiveData(true)
      } else {
        // Fallback to static data if no live data
        setRestaurants(staticRestaurants)
        setIsLiveData(false)
      }
    } catch (err) {
      console.warn('Failed to fetch live restaurant data, using static data:', err)
      // Fallback to static data on error
      setRestaurants(staticRestaurants)
      setIsLiveData(false)
      setError('Using cached restaurant data')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Only try to fetch live data when enabled
    if (config.features.enableLiveData) {
      fetchRestaurants()
    } else {
      // Use static data when live data is disabled
      setRestaurants(staticRestaurants)
      setIsLiveData(false)
      setLoading(false)
    }
  }, [])

  return {
    restaurants,
    loading,
    error,
    refetch: fetchRestaurants,
    isLiveData
  }
}

// Hook for fetching individual restaurant
export function useRestaurant(slug: string) {
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isLiveData, setIsLiveData] = useState(false)

  useEffect(() => {
    const fetchRestaurant = async () => {
      setLoading(true)
      setError(null)

      try {
        // Try MVP API first
        if (config.features.enableLiveData) {
          const liveData = await apiClient.getRestaurantBySlug(slug)
          if (liveData) {
            setRestaurant(liveData as Restaurant)
            setIsLiveData(true)
          } else {
            throw new Error('No live data available')
          }
        } else {
          throw new Error('Live data disabled in development')
        }
      } catch {
        // Fallback to static data
        const staticRestaurant = staticRestaurants.find(r => r.slug === slug)
        if (staticRestaurant) {
          setRestaurant(staticRestaurant)
          setIsLiveData(false)
        } else {
          setError('Restaurant not found')
        }
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchRestaurant()
    }
  }, [slug])

  return {
    restaurant,
    loading,
    error,
    isLiveData
  }
}