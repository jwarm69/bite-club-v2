import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CreditCard, MapPin, Clock, Check } from 'lucide-react'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'How Bite Club Works - Simple 3-Step Process | Bite Club Meal Plan',
  description: 'Learn how to save money and skip the lines with Bite Club. Buy credits, order ahead, and pick up your food at 25+ partner restaurants.',
  keywords: 'how bite club works, student meal plan process, order ahead system, campus dining'
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            How Bite Club Works
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            It&apos;s simple! Buy credits, order ahead, and skip the wait. Here&apos;s how to get started with the smarter way to eat on campus.
          </p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CreditCard className="w-10 h-10 text-white" />
                </div>
                <div className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  STEP 1
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Buy Credits</h3>
                <p className="text-gray-600 mb-6">
                  Purchase Bite Club credits online using your credit card, debit card, or financial aid. 
                  Credits never expire and roll over every semester!
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500 mb-2">Popular amounts:</div>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>$50 Credits</span>
                      <span className="font-semibold">$47.50</span>
                    </div>
                    <div className="flex justify-between">
                      <span>$100 Credits</span>
                      <span className="font-semibold">$92.50</span>
                    </div>
                    <div className="flex justify-between text-green-600 font-semibold">
                      <span>$200 Credits</span>
                      <span>$180.00</span>
                    </div>
                  </div>
                  <div className="text-xs text-green-600 mt-2">Save up to 10% with larger purchases!</div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-10 h-10 text-white" />
                </div>
                <div className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  STEP 2
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Order Ahead</h3>
                <p className="text-gray-600 mb-6">
                  Browse menus from 25+ partner restaurants near campus. Place your order using credits 
                  and customize exactly how you want it.
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm space-y-3">
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Real-time menu updates</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Dietary restrictions filtering</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Special instructions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-600" />
                    <span className="text-sm">Student-only discounts</span>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="text-center">
                <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-10 h-10 text-white" />
                </div>
                <div className="bg-green-600 text-white text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                  STEP 3
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Skip the Wait</h3>
                <p className="text-gray-600 mb-6">
                  Get notified when your order is ready, then walk in and pick it up. 
                  No waiting in line, no cash needed, just grab and go!
                </p>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <div className="text-2xl font-bold text-green-600 mb-2">5-15 min</div>
                  <div className="text-sm text-gray-600 mb-3">Average pickup time</div>
                  <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
                    <span>📱 SMS alerts</span>
                    <span>🔔 App notifications</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Why Students Love Bite Club
            </h2>
            <p className="text-xl text-gray-600">
              More than just convenience - it&apos;s a smarter way to eat on campus
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="font-bold text-gray-900 mb-2">Save Money</h3>
              <p className="text-gray-600 text-sm">Student discounts and bulk credit savings</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⏰</div>
              <h3 className="font-bold text-gray-900 mb-2">Save Time</h3>
              <p className="text-gray-600 text-sm">No more waiting in long lunch lines</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🍕</div>
              <h3 className="font-bold text-gray-900 mb-2">More Options</h3>
              <p className="text-gray-600 text-sm">1500+ menu items from local restaurants</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="font-bold text-gray-900 mb-2">Student-First</h3>
              <p className="text-gray-600 text-sm">Built by students, for students</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Saving?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of students who are already eating smarter on campus
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/buy-credits"
              className="inline-flex items-center bg-white text-green-700 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-colors shadow-lg"
            >
              Buy Credits Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link 
              href="/restaurant-partners"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-700 transition-colors"
            >
              View Restaurants
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}