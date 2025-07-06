'use client'

import { useState } from 'react'
import { Eye, EyeOff, DollarSign, TrendingUp, AlertTriangle, CheckCircle2 } from 'lucide-react'

interface FeeBreakdown {
  category: string
  doordashFee: number
  biteClubFee: number
  description: string
  icon: string
}

const feeBreakdown: FeeBreakdown[] = [
  {
    category: "Service Fee", 
    doordashFee: 1.99,
    biteClubFee: 0,
    description: "Platform processing charge",
    icon: "💳"
  },
  {
    category: "Regulatory Response Fee",
    doordashFee: 0.50,
    biteClubFee: 0,
    description: "Additional municipal charge",
    icon: "📋"
  },
  {
    category: "Menu Markup",
    doordashFee: 2.40,
    biteClubFee: 0,
    description: "20% higher prices than in-store",
    icon: "📈"
  },
  {
    category: "Small Order Fee",
    doordashFee: 2.00,
    biteClubFee: 0,
    description: "Fee for orders under $12",
    icon: "📦"
  },
  {
    category: "Busy Area Fee",
    doordashFee: 1.50,
    biteClubFee: 0,
    description: "Extra charge during busy times",
    icon: "⏰"
  },
  {
    category: "Processing Fee",
    doordashFee: 0.30,
    biteClubFee: 0,
    description: "Credit card processing charge",
    icon: "💰"
  }
]

export default function HiddenCostsSection() {
  const [isRevealed, setIsRevealed] = useState(false)
  
  const totalDoorDashFees = feeBreakdown.reduce((sum, fee) => sum + fee.doordashFee, 0)
  const totalBiteClubFees = feeBreakdown.reduce((sum, fee) => sum + fee.biteClubFee, 0)
  
  const exampleOrder = 12.00
  const orderWithFees = exampleOrder + totalDoorDashFees
  const percentageIncrease = ((orderWithFees - exampleOrder) / exampleOrder * 100).toFixed(0)

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" 
             style={{
               backgroundImage: 'radial-gradient(circle at 25% 25%, #ffffff 1px, transparent 1px)',
               backgroundSize: '50px 50px'
             }}
        />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-red-500/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-4 border border-red-500/30">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Hidden Cost Investigation
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
            The <span className="text-red-400">True Cost</span> of DoorDash
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            What looks like a $12 order becomes a $20 order. Here's where your money really goes.
          </p>
          
          {/* Reveal Button */}
          <button
            onClick={() => setIsRevealed(!isRevealed)}
            className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-red-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            {isRevealed ? (
              <>
                <EyeOff className="w-5 h-5 mr-2" />
                Hide the Truth
              </>
            ) : (
              <>
                <Eye className="w-5 h-5 mr-2" />
                Reveal Hidden Costs
              </>
            )}
          </button>
        </div>

        {/* Example Order Breakdown */}
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - The Receipt */}
            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8 transform transition-all duration-500">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Your "Simple" Order</h3>
                <p className="text-gray-600">Chicken sandwich from campus restaurant</p>
              </div>
              
              <div className="space-y-4">
                {/* Base order */}
                <div className="flex justify-between items-center py-3 border-b border-gray-200">
                  <span className="font-medium">Chicken Deluxe Sandwich</span>
                  <span className="font-semibold">${exampleOrder.toFixed(2)}</span>
                </div>
                
                {/* Hidden fees - revealed on click */}
                <div className={`space-y-3 transition-all duration-700 overflow-hidden ${
                  isRevealed ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
                }`}>
                  {feeBreakdown.map((fee, index) => (
                    <div 
                      key={fee.category}
                      className="flex justify-between items-center py-2 text-red-600 transform transition-all duration-300"
                      style={{
                        transitionDelay: isRevealed ? `${index * 100}ms` : '0ms'
                      }}
                    >
                      <div className="flex items-center">
                        <span className="mr-2">{fee.icon}</span>
                        <div>
                          <div className="font-medium">{fee.category}</div>
                          <div className="text-xs text-gray-500">{fee.description}</div>
                        </div>
                      </div>
                      <span className="font-semibold">+${fee.doordashFee.toFixed(2)}</span>
                    </div>
                  ))}
                </div>
                
                {/* Total */}
                <div className="border-t-2 border-gray-800 pt-4 mt-6">
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">Total Paid</span>
                    <span className="text-2xl font-bold text-red-600">
                      ${orderWithFees.toFixed(2)}
                    </span>
                  </div>
                  <div className="text-center mt-2">
                    <span className="inline-block bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {percentageIncrease}% more than menu price
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Comparison */}
            <div className="space-y-8">
              
              {/* Impact Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-red-500/20 border border-red-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-red-400 mb-2">
                    ${totalDoorDashFees.toFixed(2)}
                  </div>
                  <div className="text-sm text-red-300">Fees per order</div>
                </div>
                <div className="bg-green-500/20 border border-green-500/30 rounded-xl p-6 text-center backdrop-blur-sm">
                  <div className="text-3xl font-bold text-green-400 mb-2">
                    ${totalBiteClubFees.toFixed(2)}
                  </div>
                  <div className="text-sm text-green-300">Bite Club fees</div>
                </div>
              </div>

              {/* Annual Impact */}
              <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-xl font-bold text-white mb-4">Annual Impact</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-orange-200">2 orders/week × 32 weeks</span>
                    <span className="font-semibold text-white">64 orders</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-orange-200">Fees per order</span>
                    <span className="font-semibold text-red-400">${totalDoorDashFees.toFixed(2)}</span>
                  </div>
                  <div className="border-t border-orange-500/30 pt-3 flex justify-between">
                    <span className="text-lg font-semibold text-white">Total Annual Fees</span>
                    <span className="text-2xl font-bold text-red-400">
                      ${(totalDoorDashFees * 64).toFixed(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bite Club Advantage */}
              <div className="bg-green-600/20 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                <div className="flex items-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3" />
                  <h4 className="text-xl font-bold text-white">With Bite Club</h4>
                </div>
                <div className="space-y-2 text-green-200">
                  <div className="flex items-center">
                    <span className="mr-2">✅</span>
                    <span>Same restaurants, menu prices</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✅</span>
                    <span>Zero service charges</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✅</span>
                    <span>No processing fees</span>
                  </div>
                  <div className="flex items-center">
                    <span className="mr-2">✅</span>
                    <span>No hidden markups</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="text-2xl font-bold text-green-400">
                    Save ${(totalDoorDashFees * 64).toFixed(0)}/year
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">
              Stop paying the "convenience tax"
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              Get the same restaurants at actual menu prices. No charges, no markup, no surprises.
            </p>
            <button className="bg-green-600 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors shadow-lg">
              Start Saving Today
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}