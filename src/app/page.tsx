import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail } from 'lucide-react'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Bite Club Meal Plan - Save Money on Campus Dining | 25+ Partner Restaurants',
  description: 'Skip dining hall lines! Order ahead at 25+ local restaurants near campus. Save money with student-exclusive deals and never lose unused meal credits.',
  keywords: 'campus meal plan, student dining, restaurant delivery, college meal plan alternative, student discounts',
  openGraph: {
    title: 'Bite Club Meal Plan - The Smarter Meal Plan for Campus Life',
    description: 'Order ahead at 25+ restaurants, skip the wait, and save money on every meal.',
    images: ['/bite-club-logo.png'],
    type: 'website',
    url: 'https://bite-club-v2-s7su.vercel.app',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bite Club Meal Plan - Save Money on Campus Dining',
    description: 'Order ahead at 25+ restaurants, skip the wait, and save money on every meal.',
  }
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-600 to-green-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The Smarter Meal Plan for Campus Life
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Order ahead at 25+ restaurants, skip the wait, and save money on every meal.
            </p>
            <Link 
              href="/how-it-works"
              className="inline-block bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              Start Saving Now
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How we&apos;re different from the dining halls
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-600 text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Ordering</h3>
              <p className="text-gray-600 mb-4">
                Skip the line and save time! With BiteClub&apos;s Club Credits, you can pre-order your favorite meals from partner restaurants and pick them up at your convenience.
              </p>
              <p className="text-gray-600">
                No stress, no wait—just delicious food when you need it.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-600 text-2xl">🍕</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Ever-expanding Options</h3>
              <p className="text-gray-600 mb-4">
                Explore an ever-growing selection of local restaurants and cuisines to satisfy every craving.
              </p>
              <p className="text-gray-600">
                With over <strong>1500 unique menu options</strong>, you&apos;ll always have something new to try!
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <span className="text-green-600 text-2xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Student-only Deals</h3>
              <p className="text-gray-600 mb-4">
                Save big with BiteClub&apos;s exclusive student-only deals!
              </p>
              <p className="text-gray-600 mb-4">
                Enjoy platform-exclusive rewards, discounts, and our unbeatable &apos;endless-rollover&apos; policy—use every swipe, your way.
              </p>
              <p className="text-gray-600">
                Plus, say goodbye to hidden fees and unnecessary &apos;service&apos; charges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-green-50 p-8 md:p-12 rounded-2xl">
              <div className="text-4xl text-green-600 mb-6">&quot;</div>
              <blockquote className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed">
                As a dietetics student, Bite Club offers a variety of food options that a regular meal plan just doesn&apos;t have. 
                I love being able to order on the go without having to wait in line and pick up food that is nutritious and delicious. 
                It was really easy to get started, knowing that I get use out of every dollar I put in. 
                I found it to be very useful and convenient, so I would encourage others to give it a try.
              </blockquote>
              <cite className="text-green-700 font-semibold">— Fabian, Class of 2028</cite>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Partner Restaurants
            </h2>
            <p className="text-xl text-gray-600">
              Order from 25+ local favorites, all with exclusive student discounts
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-6xl mx-auto">
            {/* Restaurant logos placeholder - these would be replaced with actual logos */}
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">🍗</div>
                <div className="text-xs text-gray-600">Chicken Salad Chick</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">🥪</div>
                <div className="text-xs text-gray-600">Primo Hoagies</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">🍕</div>
                <div className="text-xs text-gray-600">Gumby&apos;s Pizza</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">🍣</div>
                <div className="text-xs text-gray-600">Sushi 2 Go</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">🥞</div>
                <div className="text-xs text-gray-600">Hash House</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow flex items-center justify-center">
              <div className="text-center">
                <div className="text-2xl mb-2">🥗</div>
                <div className="text-xs text-gray-600">& 20+ More</div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/restaurant-partners"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              View All Restaurants
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to start saving?
          </h2>
          <Link 
            href="/buy-credits"
            className="inline-block bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
          >
            Signup for Bite Club
          </Link>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Join Bite Club Today!</h2>
            <p className="text-gray-300 mb-8">
              We&apos;ll only send you free food, deals, or important info.
            </p>
            
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
                />
              </div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:border-green-500"
              />
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                Sign Up
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Bite Club Meal Plan</h3>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Hours</strong></p>
                <p>Monday-Sunday</p>
                <p>24/7 Online Ordering</p>
              </div>
            </div>
            
            <div>
              <div className="space-y-2 text-gray-300">
                <p><strong className="text-white">Questions?</strong></p>
                <div className="flex items-center space-x-2">
                  <Mail size={16} />
                  <span>Support@biteclubmealplan.com</span>
                </div>
                <p>Feel free to text us too!</p>
                <div className="flex items-center space-x-2">
                  <Phone size={16} />
                  <span>(561) 396-9232</span>
                </div>
              </div>
            </div>
            
            <div>
              <p className="text-green-400 font-semibold text-lg">
                The first rule of Bite Club is….. Eat Well!
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Bite Club Meal Plan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}