// Custom hook for fetching restaurants from Supabase with fallback to static data

import { useState, useEffect } from 'react'
import { restaurantService, menuService } from '@/lib/supabase'
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
      // Try to fetch from Supabase
      const supabaseRestaurants = await restaurantService.getRestaurants()
      
      if (supabaseRestaurants && supabaseRestaurants.length > 0) {
        // Transform Supabase data to match our Restaurant interface
        const transformedData: Restaurant[] = await Promise.all(
          supabaseRestaurants.map(async (restaurant) => {
            // Get menu items for this restaurant
            const menuItems = await menuService.getMenuItemsByRestaurant(String(restaurant.id))

            // Transform to match our interface
            return {
              id: String(restaurant.id || ''),
              name: String(restaurant.name || ''),
              slug: String(restaurant.name || '').toLowerCase().replace(/\s+/g, '-'),
              cuisine: ['American'], // Default - could be enhanced
              rating: 4.5, // Default - could be enhanced
              reviewCount: 0, // Default - could be enhanced
              description: String(restaurant.description || ''),
              longDescription: String(restaurant.description || ''),
              address: '', // Not in current schema
              phone: String(restaurant.phone || ''),
              website: '', // Not in current schema
              hours: (typeof restaurant.operatingHours === 'object' && restaurant.operatingHours) ? restaurant.operatingHours as Record<string, string> : {},
              coordinates: { lat: 0, lng: 0 }, // Default coordinates
              distanceFromCampus: '0.5 miles', // Default
              priceRange: '$$' as const,
              image: String(restaurant.logoUrl || '/images/restaurants/default.jpg'),
              gallery: [],
              specialties: [],
              studentDiscount: '10%',
              menu: menuItems?.map(item => ({
                id: String(item.id || ''),
                name: String(item.name || ''),
                description: String(item.description || ''),
                price: Number(item.price || 0),
                category: String(item.category || 'Main')
              })) || [],
              popularItems: []
            }
          })
        )
        
        setRestaurants(transformedData)
        setIsLiveData(true)
        console.log(`Loaded ${transformedData.length} restaurants from Supabase`)
      } else {
        // Fallback to static data if no live data
        setRestaurants(staticRestaurants)
        setIsLiveData(false)
      }
    } catch (err) {
      console.warn('Failed to fetch restaurant data from Supabase, using static data:', err)
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
        // Try Supabase first
        if (config.features.enableLiveData) {
          const supabaseRestaurant = await restaurantService.getRestaurantBySlug(slug)
          if (supabaseRestaurant && supabaseRestaurant.id) {
            // Get menu items for this restaurant
            const menuItems = await menuService.getMenuItemsByRestaurant(String(supabaseRestaurant.id))

            // Transform to match our interface
            const transformedRestaurant: Restaurant = {
              id: String(supabaseRestaurant.id),
              name: String(supabaseRestaurant.name || ''),
              slug: String(supabaseRestaurant.name || '').toLowerCase().replace(/\s+/g, '-'),
              cuisine: ['American'], // Default - could be enhanced
              rating: 4.5, // Default - could be enhanced
              reviewCount: 0, // Default - could be enhanced
              description: String(supabaseRestaurant.description || ''),
              longDescription: String(supabaseRestaurant.description || ''),
              address: '', // Not in current schema
              phone: String(supabaseRestaurant.phone || ''),
              website: '', // Not in current schema
              hours: (typeof supabaseRestaurant.operatingHours === 'object' && supabaseRestaurant.operatingHours) ? supabaseRestaurant.operatingHours as Record<string, string> : {},
              coordinates: { lat: 0, lng: 0 }, // Default coordinates
              distanceFromCampus: '0.5 miles', // Default
              priceRange: '$$' as const,
              image: String(supabaseRestaurant.logoUrl || '/images/restaurants/default.jpg'),
              gallery: [],
              specialties: [],
              studentDiscount: '10%',
              menu: menuItems?.map(item => ({
                id: String(item.id || ''),
                name: String(item.name || ''),
                description: String(item.description || ''),
                price: Number(item.price || 0),
                category: String(item.category || 'Main')
              })) || [],
              popularItems: []
            }
            
            setRestaurant(transformedRestaurant)
            setIsLiveData(true)
            console.log(`Loaded restaurant ${transformedRestaurant.name} with ${transformedRestaurant.menu.length} menu items from Supabase`)
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