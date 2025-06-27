import { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, Clock, Star } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Restaurant Partners - 25+ Local Restaurants | Bite Club Meal Plan',
  description: 'Discover our partner restaurants offering student discounts. Order ahead from local favorites including Chicken Salad Chick, Primo Hoagies, and more.',
  keywords: 'bite club restaurants, student discounts restaurants, campus dining partners, local restaurants'
}

export default function RestaurantPartnersPage() {
  const restaurants = [
    {
      name: "Chicken Salad Chick",
      cuisine: "American, Salads",
      distance: "0.3 miles",
      rating: 4.8,
      image: "/restaurant-logos/chicken-salad-chick.png",
      description: "Fresh chicken salad varieties and southern-inspired sides",
      specialties: ["Chicken Salad", "Sandwiches", "Soups"]
    },
    {
      name: "Primo Hoagies", 
      cuisine: "Sandwiches, Deli",
      distance: "0.5 miles",
      rating: 4.7,
      image: "/restaurant-logos/primo-hoagies.png", 
      description: "Authentic Italian hoagies made with premium ingredients",
      specialties: ["Italian Hoagies", "Cheesesteaks", "Fresh Salads"]
    },
    {
      name: "Gumby&apos;s Pizza",
      cuisine: "Pizza, Wings", 
      distance: "0.2 miles",
      rating: 4.5,
      image: "/restaurant-logos/gumbys.png",
      description: "Late-night pizza and wings perfect for studying",
      specialties: ["Pizza", "Wings", "Garlic Knots"]
    },
    {
      name: "Sushi 2 Go",
      cuisine: "Japanese, Sushi",
      distance: "0.7 miles", 
      rating: 4.6,
      image: "/restaurant-logos/sushi2go.png",
      description: "Fresh sushi and Japanese favorites made to order",
      specialties: ["Sushi Rolls", "Bento Boxes", "Ramen"]
    },
    {
      name: "Hash House Kitchen",
      cuisine: "American, Brunch",
      distance: "0.4 miles",
      rating: 4.4,
      image: "/restaurant-logos/hash.png", 
      description: "All-day breakfast and comfort food favorites",
      specialties: ["Breakfast", "Burgers", "Hash Browns"]
    },
    {
      name: "Pamela&apos;s Diner",
      cuisine: "Diner, Breakfast",
      distance: "0.6 miles",
      rating: 4.3,
      image: "/restaurant-logos/pampy.png",
      description: "Classic diner fare with generous portions",
      specialties: ["Pancakes", "Omelettes", "Milkshakes"]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">BC</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Bite Club Meal Plan</span>
          </Link>
          
          <div className="hidden md:flex space-x-6">
            <Link href="/buy-credits" className="text-gray-700 hover:text-green-600 transition-colors">
              Buy Credits
            </Link>
            <Link href="/how-it-works" className="text-gray-700 hover:text-green-600 transition-colors">
              How it works
            </Link>
            <Link href="/restaurant-partners" className="text-green-600 font-semibold">
              Restaurant Partners
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-green-600 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-green-600 transition-colors">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Restaurant Partners
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Discover 25+ local restaurants offering exclusive student discounts. From pizza to sushi, we&apos;ve got your cravings covered.
          </p>
          <div className="flex justify-center space-x-8 text-center">
            <div>
              <div className="text-3xl font-bold">25+</div>
              <div className="text-green-200">Partner Restaurants</div>
            </div>
            <div>
              <div className="text-3xl font-bold">1500+</div>
              <div className="text-green-200">Menu Items</div>
            </div>
            <div>
              <div className="text-3xl font-bold">10%+</div>
              <div className="text-green-200">Average Savings</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-gray-50 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-4 py-2 bg-green-600 text-white rounded-full text-sm font-medium">
              All Restaurants
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
              Pizza & Wings
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
              Sandwiches & Deli
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
              Asian Cuisine
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
              Breakfast & Brunch
            </button>
            <button className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium hover:bg-gray-100">
              Healthy Options
            </button>
          </div>
        </div>
      </section>

      {/* Restaurant Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {restaurants.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <div className="text-gray-400 text-center">
                    <div className="text-4xl mb-2">🍽️</div>
                    <div className="text-sm">{restaurant.name}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-gray-900">{restaurant.name}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{restaurant.rating}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 text-sm mb-4">{restaurant.description}</p>
                  
                  <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{restaurant.distance}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>Open now</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-sm text-gray-700 mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <button className="w-full bg-green-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    View Menu & Order
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Load More Restaurants
            </button>
            <p className="text-sm text-gray-500 mt-2">Showing 6 of 25+ restaurants</p>
          </div>
        </div>
      </section>

      {/* Become a Partner */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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