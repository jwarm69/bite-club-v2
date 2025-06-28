'use client'

import { useState } from 'react'
import { MapPin, Star, Clock, Navigation as NavIcon } from 'lucide-react'
import { Restaurant } from '@/data/restaurants'

interface CampusMapProps {
  restaurants: Restaurant[]
  selectedRestaurant?: Restaurant | null
  onRestaurantSelect?: (restaurant: Restaurant) => void
}

export default function CampusMap({ restaurants, selectedRestaurant, onRestaurantSelect }: CampusMapProps) {
  const [hoveredRestaurant, setHoveredRestaurant] = useState<Restaurant | null>(null)
  
  // Calculate map bounds to include all restaurants
  const bounds = restaurants.reduce(
    (acc, restaurant) => ({
      north: Math.max(acc.north, restaurant.coordinates.lat),
      south: Math.min(acc.south, restaurant.coordinates.lat),
      east: Math.max(acc.east, restaurant.coordinates.lng),
      west: Math.min(acc.west, restaurant.coordinates.lng)
    }),
    { north: -90, south: 90, east: -180, west: 180 }
  )

  const getRestaurantPosition = (restaurant: Restaurant) => {
    // Convert lat/lng to relative positions on the map container
    const latRange = bounds.north - bounds.south
    const lngRange = bounds.east - bounds.west
    
    const x = ((restaurant.coordinates.lng - bounds.west) / lngRange) * 100
    const y = ((bounds.north - restaurant.coordinates.lat) / latRange) * 100
    
    return { x: Math.max(5, Math.min(95, x)), y: Math.max(5, Math.min(95, y)) }
  }

  return (
    <div className="relative bg-green-50 rounded-2xl overflow-hidden">
      {/* Map Container */}
      <div className="relative h-96 md:h-[500px] bg-gradient-to-br from-green-100 to-green-200">
        {/* Campus Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-4 bg-green-600 rounded-xl opacity-30"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-green-800 font-bold text-lg">
            UF Campus
          </div>
        </div>
        
        {/* Restaurant Markers */}
        {restaurants.map((restaurant) => {
          const position = getRestaurantPosition(restaurant)
          const isSelected = selectedRestaurant?.id === restaurant.id
          const isHovered = hoveredRestaurant?.id === restaurant.id
          
          return (
            <div
              key={restaurant.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ 
                left: `${position.x}%`, 
                top: `${position.y}%`,
                zIndex: isSelected || isHovered ? 20 : 10
              }}
              onMouseEnter={() => setHoveredRestaurant(restaurant)}
              onMouseLeave={() => setHoveredRestaurant(null)}
              onClick={() => onRestaurantSelect?.(restaurant)}
            >
              {/* Marker */}
              <div className={`
                relative w-8 h-8 rounded-full border-3 border-white shadow-lg transition-all duration-200
                ${isSelected ? 'bg-orange-500 scale-125' : 
                  isHovered ? 'bg-green-500 scale-110' : 'bg-green-600'}
                group-hover:scale-110
              `}>
                <MapPin className="w-4 h-4 text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
              
              {/* Tooltip */}
              {(isHovered || isSelected) && (
                <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 animate-fade-in-up">
                  <div className="bg-white rounded-lg shadow-xl p-4 min-w-64 border border-gray-200">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-gray-900 text-sm">{restaurant.name}</h3>
                      <div className="flex items-center ml-2">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span className="text-xs text-gray-600 ml-1">{restaurant.rating}</span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-gray-600 mb-2">{restaurant.description}</p>
                    
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center text-green-600">
                        <NavIcon className="w-3 h-3 mr-1" />
                        {restaurant.distanceFromCampus}
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Clock className="w-3 h-3 mr-1" />
                        Open now
                      </div>
                    </div>
                    
                    <div className="mt-2 pt-2 border-t border-gray-100">
                      <button 
                        className="w-full bg-green-600 text-white py-1 px-3 rounded text-xs font-medium hover:bg-green-700 transition-colors"
                        onClick={(e) => {
                          e.stopPropagation()
                          window.open(`/restaurants/${restaurant.slug}`, '_blank')
                        }}
                      >
                        View Menu
                      </button>
                    </div>
                  </div>
                  
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2">
                    <div className="w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                  </div>
                </div>
              )}
            </div>
          )
        })}
        
        {/* Campus Landmarks */}
        <div className="absolute top-1/4 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md"></div>
          <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 text-xs text-blue-800 font-medium whitespace-nowrap">
            Library West
          </span>
        </div>
        
        <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-orange-500 rounded-full border-2 border-white shadow-md"></div>
          <span className="absolute top-full mt-1 left-1/2 transform -translate-x-1/2 text-xs text-orange-800 font-medium whitespace-nowrap">
            Student Union
          </span>
        </div>
      </div>
      
      {/* Map Legend */}
      <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
        <div className="text-xs font-bold text-gray-900 mb-2">Map Legend</div>
        <div className="space-y-1 text-xs">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
            <span className="text-gray-700">Bite Club Partner</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Campus Landmark</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
            <span className="text-gray-700">Selected/Campus Spot</span>
          </div>
        </div>
      </div>
      
      {/* Map Stats */}
      <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-3">
        <div className="text-xs font-bold text-gray-900 mb-1">Coverage Area</div>
        <div className="text-xs text-gray-600">
          {restaurants.length} restaurants within 1 mile
        </div>
      </div>
    </div>
  )
}