import { Metadata } from 'next'
import Link from 'next/link'
import { Check, CreditCard, Shield, Zap } from 'lucide-react'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Buy Credits - Student Meal Plan Credits | Bite Club Meal Plan',
  description: 'Purchase Bite Club credits and start saving on campus dining. Credits never expire and offer student discounts at 25+ partner restaurants.',
  keywords: 'buy meal plan credits, student dining credits, campus food credits, meal plan purchase'
}

export default function BuyCreditsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Buy Bite Club Credits
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Purchase credits that never expire and save money on every meal. The more you buy, the more you save!
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Credit Package
            </h2>
            <p className="text-xl text-gray-600">
              All credits include student discounts and never expire
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Starter Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Starter</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$47.50</div>
                <div className="text-gray-500 mb-1">$50 in credits</div>
                <div className="text-sm text-green-600 font-semibold mb-6">Save 5%</div>
                
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-6">
                  Buy Starter Package
                </button>
                
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Perfect for trying Bite Club</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">8-10 meals depending on choice</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">All partner restaurants</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Student-only discounts</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Popular Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-2 border-green-600 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Popular</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$92.50</div>
                <div className="text-gray-500 mb-1">$100 in credits</div>
                <div className="text-sm text-green-600 font-semibold mb-6">Save 7.5%</div>
                
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-6">
                  Buy Popular Package
                </button>
                
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Great for regular use</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">16-20 meals depending on choice</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">All partner restaurants</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Priority customer support</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Value Package */}
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Value</h3>
                <div className="text-4xl font-bold text-green-600 mb-2">$180.00</div>
                <div className="text-gray-500 mb-1">$200 in credits</div>
                <div className="text-sm text-green-600 font-semibold mb-6">Save 10%</div>
                
                <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors mb-6">
                  Buy Value Package
                </button>
                
                <ul className="text-left space-y-3">
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Best value for heavy users</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">32-40 meals depending on choice</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">All partner restaurants</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="w-5 h-5 text-green-600 mr-3" />
                    <span className="text-gray-700">Exclusive promotions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Custom Amount */}
          <div className="max-w-2xl mx-auto mt-12 bg-white rounded-xl shadow-lg p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Amount?</h3>
              <p className="text-gray-600 mb-6">Purchase any amount between $25-$500</p>
              <div className="flex gap-4 mb-6">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Amount ($)</label>
                  <input 
                    type="number" 
                    placeholder="Enter amount"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    min="25"
                    max="500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-gray-700 mb-2">You Pay</label>
                  <div className="w-full px-4 py-3 bg-gray-100 rounded-lg text-gray-700">
                    $0.00
                  </div>
                </div>
              </div>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Buy Custom Amount
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bite Club Credits?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Never Expire</h3>
              <p className="text-gray-600">
                Your credits roll over every semester and never expire. Use them whenever you want, 
                no pressure to spend before deadlines.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Secure & Safe</h3>
              <p className="text-gray-600">
                All transactions are encrypted and secure. We use industry-standard security 
                measures to protect your personal and payment information.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <CreditCard className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Payment</h3>
              <p className="text-gray-600">
                Pay with credit card, debit card, or financial aid. We accept all major cards 
                and make it easy to fund your account.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-6">
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Do credits expire?</h3>
                <p className="text-gray-600">
                  No! Bite Club credits never expire and roll over every semester. You can use them 
                  whenever you want, even years later.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">Can I get a refund?</h3>
                <p className="text-gray-600">
                  Yes, unused credits can be refunded within 30 days of purchase. After 30 days, 
                  credits are non-refundable but never expire.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6">
                <h3 className="font-bold text-gray-900 mb-2">What payment methods do you accept?</h3>
                <p className="text-gray-600">
                  We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover) 
                  and can work with financial aid offices for larger purchases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}