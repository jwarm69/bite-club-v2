'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { MapPin, Clock, Star, Search, Filter, Grid, List, Tag } from 'lucide-react'
import Navigation from '@/components/Navigation'
import CampusMap from '@/components/CampusMap'
import { restaurants, Restaurant } from '@/data/restaurants'
import { ViewMenuCTA } from '@/components/SmartCTA'

type ViewMode = 'grid' | 'list'
type SortOption = 'distance' | 'rating' | 'name'

export default function RestaurantPartnersPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCuisine, setSelectedCuisine] = useState<string>('all')
  const [viewMode, setViewMode] = useState<ViewMode>('grid')
  const [sortBy, setSortBy] = useState<SortOption>('distance')
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null)
  const [showMap, setShowMap] = useState(true)

  // Get unique cuisines for filter
  const cuisines = useMemo(() => {
    const allCuisines = restaurants.flatMap(r => r.cuisine)
    return ['all', ...Array.from(new Set(allCuisines))]
  }, [])

  // Filter and sort restaurants
  const filteredRestaurants = useMemo(() => {
    const filtered = restaurants.filter(restaurant => {
      const matchesSearch = restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          restaurant.description.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCuisine = selectedCuisine === 'all' || 
                           restaurant.cuisine.some(c => c.toLowerCase() === selectedCuisine.toLowerCase())
      return matchesSearch && matchesCuisine
    })

    // Sort restaurants
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'distance':
          return parseFloat(a.distanceFromCampus) - parseFloat(b.distanceFromCampus)
        case 'rating':
          return b.rating - a.rating
        case 'name':
          return a.name.localeCompare(b.name)
        default:
          return 0
      }
    })

    return filtered
  }, [searchTerm, selectedCuisine, sortBy])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
            Our Restaurant Partners
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Discover {restaurants.length}+ local restaurants offering exclusive student discounts. 
            From pizza to sushi, we&apos;ve got your cravings covered.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold" style={{color: 'var(--accent-orange-light)'}}>{restaurants.length}+</div>
              <div className="text-white/80">Partner Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{color: 'var(--accent-orange-light)'}}>1500+</div>
              <div className="text-white/80">Menu Items</div>
            </div>
            <div>
              <div className="text-3xl font-bold" style={{color: 'var(--accent-orange-light)'}}>10%+</div>
              <div className="text-white/80">Average Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      {showMap && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
                Interactive Campus Map
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
                Find restaurants near <span className="text-green-600">UF campus</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore all our partner locations and find the perfect meal within walking distance
              </p>
            </div>
            
            <div className="max-w-6xl mx-auto">
              <CampusMap 
                restaurants={filteredRestaurants}
                selectedRestaurant={selectedRestaurant}
                onRestaurantSelect={setSelectedRestaurant}
              />
            </div>
            
            <div className="text-center mt-8">
              <button 
                onClick={() => setShowMap(false)}
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Hide map and browse list
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search restaurants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Filter className="w-4 h-4 text-gray-500 mr-2" />
                <select
                  value={selectedCuisine}
                  onChange={(e) => setSelectedCuisine(e.target.value)}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                >
                  {cuisines.map(cuisine => (
                    <option key={cuisine} value={cuisine}>
                      {cuisine === 'all' ? 'All Cuisines' : cuisine}
                    </option>
                  ))}
                </select>
              </div>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="distance">Sort by Distance</option>
                <option value="rating">Sort by Rating</option>
                <option value="name">Sort by Name</option>
              </select>

              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-green-600 text-white' : 'text-gray-600 hover:bg-gray-50'}`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {!showMap && (
            <div className="mt-4">
              <button 
                onClick={() => setShowMap(true)}
                className="text-green-600 hover:text-green-700 font-medium text-sm"
              >
                Show campus map
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Results Summary */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-4">
          <p className="text-gray-600">
            Showing {filteredRestaurants.length} of {restaurants.length} restaurants
            {selectedCuisine !== 'all' && ` in ${selectedCuisine}`}
            {searchTerm && ` matching "${searchTerm}"`}
          </p>
        </div>
      </section>

      {/* Restaurant Grid/List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {viewMode === 'grid' ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          ) : (
            <div className="space-y-6 max-w-4xl mx-auto">
              {filteredRestaurants.map((restaurant) => (
                <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
              ))}
            </div>
          )}
          
          {filteredRestaurants.length === 0 && (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">🍽️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No restaurants found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Want to Become a Partner?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Join our network of restaurants serving hungry students. Increase your revenue and reach new customers with Bite Club.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
                <div className="text-gray-600">Daily Orders</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">$50k+</div>
                <div className="text-gray-600">Monthly Revenue</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">95%</div>
                <div className="text-gray-600">Partner Satisfaction</div>
              </div>
            </div>
            <Link 
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Become a Partner Restaurant
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-green-200 transform hover:-translate-y-2">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        <div className="text-gray-400 text-center">
          <div className="text-4xl mb-2">🍽️</div>
          <div className="text-sm">{restaurant.name}</div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
            {restaurant.name}
          </h3>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm text-gray-600">{restaurant.rating}</span>
          </div>
        </div>
        
        <p className="text-gray-600 text-sm mb-4">{restaurant.description}</p>
        
        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center space-x-1">
            <MapPin className="w-4 h-4" />
            <span>{restaurant.distanceFromCampus}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="w-4 h-4" />
            <span>Open now</span>
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {restaurant.cuisine.slice(0, 2).map((type, idx) => (
              <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                {type}
              </span>
            ))}
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center text-green-600 text-sm">
            <Tag className="w-4 h-4 mr-1" />
            <span className="font-medium">{restaurant.studentDiscount}</span>
          </div>
        </div>
        
        <div className="w-full">
          <ViewMenuCTA restaurantSlug={restaurant.slug} />
        </div>
      </div>
    </div>
  )
}

function RestaurantListItem({ restaurant }: { restaurant: Restaurant }) {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200 overflow-hidden">
      <div className="flex">
        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center flex-shrink-0">
          <span className="text-gray-400 text-2xl">🍽️</span>
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm text-gray-600">{restaurant.rating}</span>
              </div>
              <span className="text-sm text-gray-500">{restaurant.distanceFromCampus}</span>
            </div>
          </div>
          
          <p className="text-gray-600 mb-3">{restaurant.description}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex flex-wrap gap-2">
              {restaurant.cuisine.map((type, idx) => (
                <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                  {type}
                </span>
              ))}
            </div>
            
            <ViewMenuCTA restaurantSlug={restaurant.slug} />
          </div>
        </div>
      </div>
    </div>
  )
}