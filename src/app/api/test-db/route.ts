import { NextResponse } from 'next/server'
import { restaurantService, menuService, type Restaurant } from '@/lib/supabase'

export async function GET() {
  try {
    console.log('Testing Supabase connection...')
    
    // Test restaurant query
    const restaurants = await restaurantService.getRestaurants()
    console.log(`Found ${restaurants?.length || 0} restaurants`)
    
    // Test menu items query if we have restaurants
    let totalMenuItems = 0
    if (restaurants && restaurants.length > 0) {
      const firstRestaurant = restaurants[0] as unknown as Restaurant
      if (firstRestaurant?.id && typeof firstRestaurant.id === 'string') {
        const menuItems = await menuService.getMenuItemsByRestaurant(firstRestaurant.id)
        totalMenuItems = menuItems?.length || 0
        console.log(`First restaurant "${firstRestaurant.name}" has ${totalMenuItems} menu items`)
      }
    }
    
    return NextResponse.json({
      success: true,
      restaurantCount: restaurants?.length || 0,
      sampleRestaurant: restaurants?.[0]?.name || 'None',
      menuItemsSample: totalMenuItems,
      message: 'Supabase connection successful!'
    })
  } catch (error) {
    console.error('Supabase connection error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Failed to connect to Supabase'
    }, { status: 500 })
  }
}