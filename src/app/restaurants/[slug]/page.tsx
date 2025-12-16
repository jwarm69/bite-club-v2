import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Clock, Phone, Star, ArrowLeft, ExternalLink, Tag } from 'lucide-react'
import Navigation from '@/components/Navigation'
import { getRestaurantBySlug, restaurants } from '@/data/restaurants'
import { restaurantService, menuService } from '@/lib/supabase'
import { OrderNowCTA } from '@/components/SmartCTA'

// Enable ISR - pages will regenerate every hour
export const revalidate = 3600

interface RestaurantPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  // Always start with static restaurants as base
  const staticParams = restaurants.map((restaurant) => ({
    slug: restaurant.slug,
  }))

  // Try to enhance with Supabase data, but don't fail build if it doesn't work
  try {
    // Only attempt Supabase call if we have valid environment variables
    if (process.env.NEXT_PUBLIC_SUPABASE_URL &&
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
        process.env.NEXT_PUBLIC_SUPABASE_URL !== 'https://placeholder.supabase.co') {

      const supabaseRestaurants = await restaurantService.getRestaurants()

      if (supabaseRestaurants && supabaseRestaurants.length > 0) {
        // Combine static and Supabase restaurants, avoiding duplicates
        const supabaseParams = supabaseRestaurants.map((restaurant) => ({
          slug: String(restaurant.name || '').toLowerCase().replace(/\s+/g, '-'),
        })).filter(param => param.slug) // Filter out empty slugs

        const existingSlugs = new Set(staticParams.map(p => p.slug))
        const newParams = supabaseParams.filter(p => !existingSlugs.has(p.slug))

        return [...staticParams, ...newParams]
      }
    }
  } catch (error) {
    // Silently fall back to static data during build time
    if (process.env.NODE_ENV === 'development') {
      console.warn('Failed to generate static params from Supabase, using static data only:', error instanceof Error ? error.message : String(error))
    }
  }

  // Always return static restaurants as minimum viable set
  return staticParams
}

export async function generateMetadata({ params }: RestaurantPageProps): Promise<Metadata> {
  const { slug } = await params
  const restaurant = getRestaurantBySlug(slug)
  
  if (!restaurant) {
    return {
      title: 'Restaurant Not Found | Bite Club Meal Plan'
    }
  }

  return {
    title: `${restaurant.name} - Order Ahead | Bite Club Meal Plan`,
    description: `${restaurant.description} Located ${restaurant.distanceFromCampus} from UF campus. Order ahead and skip the wait!`,
    keywords: `${restaurant.name}, ${restaurant.cuisine.join(', ')}, UF dining, student discounts`
  }
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { slug } = await params

  // Start with static restaurant data (for details like description, hours, etc.)
  let restaurant = getRestaurantBySlug(slug)

  // Always try to enhance with Supabase menu data
  try {
    const supabaseRestaurant = await restaurantService.getRestaurantBySlug(slug)
    if (supabaseRestaurant && supabaseRestaurant.id && typeof supabaseRestaurant.id === 'string') {
      // Get rich menu data from Supabase
      const menuItems = await menuService.getMenuItemsByRestaurant(supabaseRestaurant.id)

      if (restaurant) {
        // Enhance existing static restaurant with Supabase menu data
        restaurant = {
          ...restaurant,
          menu: menuItems?.map(item => ({
            id: String(item.id || ''),
            name: String(item.name || ''),
            description: String(item.description || ''),
            price: Number(item.price || 0),
            category: String(item.category || 'Main')
          })) || restaurant.menu, // Fall back to static menu if no Supabase data
          // Optionally enhance other fields from Supabase
          phone: String(supabaseRestaurant.phone || restaurant.phone),
          description: String(supabaseRestaurant.description || restaurant.description),
          hours: (typeof supabaseRestaurant.operatingHours === 'object' && supabaseRestaurant.operatingHours)
            ? supabaseRestaurant.operatingHours as Record<string, string>
            : restaurant.hours
        }
      } else {
        // No static data, create restaurant from Supabase data
        restaurant = {
          id: String(supabaseRestaurant.id),
          name: String(supabaseRestaurant.name || ''),
          slug: String(supabaseRestaurant.name || '').toLowerCase().replace(/\s+/g, '-'),
          cuisine: ['American'], // Default
          rating: 4.5,
          reviewCount: 0,
          description: String(supabaseRestaurant.description || ''),
          longDescription: String(supabaseRestaurant.description || ''),
          address: '',
          phone: String(supabaseRestaurant.phone || ''),
          website: '',
          hours: (typeof supabaseRestaurant.operatingHours === 'object' && supabaseRestaurant.operatingHours) ? supabaseRestaurant.operatingHours as Record<string, string> : {},
          coordinates: { lat: 0, lng: 0 },
          distanceFromCampus: '0.5 miles',
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
      }
    }
  } catch (error) {
    console.error('Error fetching restaurant from Supabase:', error)
    // Continue with static data if Supabase fails
  }

  if (!restaurant) {
    notFound()
  }

  const menuCategories = [...new Set(restaurant.menu.map(item => item.category))]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Back Navigation */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <Link 
            href="/restaurant-partners"
            className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to All Restaurants
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="flex items-center bg-white/20 px-3 py-1 rounded-full mr-4">
                    <Star className="w-4 h-4 text-yellow-300 fill-current mr-1" />
                    <span className="font-semibold">{restaurant.rating}</span>
                    <span className="text-green-100 ml-1">({restaurant.reviewCount} reviews)</span>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {restaurant.distanceFromCampus} from campus
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
                  {restaurant.name}
                </h1>
                
                <p className="text-xl text-green-100 mb-6">
                  {restaurant.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {restaurant.cuisine.map((type, index) => (
                    <span key={index} className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                      {type}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 items-start">
                  <OrderNowCTA restaurantSlug={restaurant.slug} />
                  <div className="flex items-center text-green-100">
                    <Tag className="w-4 h-4 mr-2" />
                    <span className="font-semibold">{restaurant.studentDiscount}</span>
                  </div>
                </div>
              </div>
              
              <div className="hidden md:block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="aspect-square bg-white/20 rounded-lg flex items-center justify-center mb-4">
                    <span className="text-6xl">🍽️</span>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-1">{restaurant.priceRange}</div>
                    <div className="text-green-200 text-sm">Price Range</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info Bar */}
      <section className="bg-white shadow-sm py-6">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">{restaurant.address}</span>
              </div>
              <div className="flex items-center justify-center">
                <Phone className="w-5 h-5 text-green-600 mr-2" />
                <a href={`tel:${restaurant.phone}`} className="text-gray-700 hover:text-green-600">
                  {restaurant.phone}
                </a>
              </div>
              <div className="flex items-center justify-center">
                <Clock className="w-5 h-5 text-green-600 mr-2" />
                <span className="text-gray-700">Open until 9:00 PM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
                  About {restaurant.name}
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {restaurant.longDescription}
                </p>
                
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {restaurant.specialties.map((specialty, index) => (
                      <span key={index} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                {restaurant.website && (
                  <a 
                    href={restaurant.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                )}
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6">
                <h3 className="font-bold text-gray-900 mb-4">Hours</h3>
                <div className="space-y-2">
                  {Object.entries(restaurant.hours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between">
                      <span className="text-gray-600">{day}</span>
                      <span className="text-gray-900 font-medium">{hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
                Menu
              </h2>
              <p className="text-xl text-gray-600">
                Fresh ingredients, made to order
              </p>
            </div>
            
            {menuCategories.map((category) => (
              <div key={category} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {category}
                </h3>
                <div className="grid gap-6">
                  {restaurant.menu
                    .filter(item => item.category === category)
                    .map((item) => (
                      <div key={item.id} className="flex justify-between items-start bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h4 className="text-lg font-semibold text-gray-900">{item.name}</h4>
                            {item.isPopular && (
                              <span className="ml-2 bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                                Popular
                              </span>
                            )}
                            {item.isStudentSpecial && (
                              <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                                Student Special
                              </span>
                            )}
                          </div>
                          <p className="text-gray-600 mb-2">{item.description}</p>
                          {item.dietaryInfo && (
                            <div className="flex gap-2">
                              {item.dietaryInfo.map((info, index) => (
                                <span key={index} className="text-xs text-green-600 bg-green-50 px-2 py-1 rounded">
                                  {info}
                                </span>
                              ))}
                            </div>
                          )}
                        </div>
                        <div className="ml-6">
                          <span className="text-xl font-bold text-green-600">
                            ${item.price.toFixed(2)}
                          </span>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order CTA */}
      <section className="py-16 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to order from {restaurant.name}?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Skip the wait and get your food faster with Bite Club
          </p>
          <OrderNowCTA restaurantSlug={restaurant.slug} />
        </div>
      </section>
    </div>
  )
}