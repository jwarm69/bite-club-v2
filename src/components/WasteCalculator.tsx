'use client'

import { useState, useEffect } from 'react'
import { DollarSign, TrendingUp, AlertTriangle } from 'lucide-react'

interface CalculatorState {
  diningPlanType: 'unlimited' | 'block' | 'declining'
  diningPlanCost: number
  ordersPerWeek: number
  averageOrderValue: number
  semester: 'fall' | 'spring' | 'both'
}

interface WasteResults {
  diningHallWaste: number
  deliveryFees: number
  totalAnnualWaste: number
  biteClubSavings: number
  semesterWaste: number
}

const DINING_PLAN_COSTS = {
  unlimited: 2376, // UF unlimited plan per semester
  block: 1850, // UF 150 block plan
  declining: 1200 // UF declining balance
}

const DOORDASH_FEES = {
  serviceFee: 1.99,
  processingFee: 0.50,
  smallOrderFee: 2.00, // For orders under $12
  markup: 0.20 // 20% menu markup
}

export default function WasteCalculator() {
  const [state, setState] = useState<CalculatorState>({
    diningPlanType: 'unlimited',
    diningPlanCost: DINING_PLAN_COSTS.unlimited,
    ordersPerWeek: 3,
    averageOrderValue: 12,
    semester: 'both'
  })

  const [results, setResults] = useState<WasteResults>({
    diningHallWaste: 0,
    deliveryFees: 0,
    totalAnnualWaste: 0,
    biteClubSavings: 0,
    semesterWaste: 0
  })

  const calculateWaste = () => {
    const weeksPerSemester = 16
    const semesterMultiplier = state.semester === 'both' ? 2 : 1
    
    // Dining hall waste calculation (26% average expiration rate based on industry data)
    const diningWasteRate = 0.26
    const annualDiningCost = state.diningPlanCost * semesterMultiplier
    const diningHallWaste = annualDiningCost * diningWasteRate

    // DoorDash fee calculation
    const ordersPerSemester = state.ordersPerWeek * weeksPerSemester
    const annualOrders = ordersPerSemester * semesterMultiplier
    
    const feesPerOrder = DOORDASH_FEES.serviceFee + DOORDASH_FEES.processingFee + 
                        (state.averageOrderValue < 12 ? DOORDASH_FEES.smallOrderFee : 0)
    const markupPerOrder = state.averageOrderValue * DOORDASH_FEES.markup
    const totalFeesPerOrder = feesPerOrder + markupPerOrder
    
    const deliveryFees = annualOrders * totalFeesPerOrder

    // Total waste and savings
    const totalAnnualWaste = diningHallWaste + deliveryFees
    const biteClubSavings = totalAnnualWaste * 0.95 // 95% of waste eliminated
    
    const semesterWaste = totalAnnualWaste / (state.semester === 'both' ? 2 : 1)

    setResults({
      diningHallWaste,
      deliveryFees,
      totalAnnualWaste,
      biteClubSavings,
      semesterWaste
    })
  }

  useEffect(() => {
    calculateWaste()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  const updateState = (field: keyof CalculatorState, value: string | number) => {
    setState(prev => {
      const newState = { ...prev, [field]: value }
      if (field === 'diningPlanType') {
        newState.diningPlanCost = DINING_PLAN_COSTS[value as keyof typeof DINING_PLAN_COSTS]
      }
      return newState
    })
  }

  return (
    <section className="py-20 bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Money Waste Calculator
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
            How much are you <span className="text-red-600">wasting</span> on food?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Calculate your annual food waste from expired dining hall credits and DoorDash fees. 
            The results might shock you.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Calculator Inputs */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Your Current Food Spending</h3>
              
              <div className="space-y-6">
                {/* Dining Plan Type */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    UF Dining Plan Type
                  </label>
                  <div className="grid grid-cols-1 gap-3">
                    {Object.entries(DINING_PLAN_COSTS).map(([type, cost]) => (
                      <label key={type} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="radio"
                          name="diningPlan"
                          value={type}
                          checked={state.diningPlanType === type}
                          onChange={(e) => updateState('diningPlanType', e.target.value)}
                          className="mr-3 text-red-600"
                        />
                        <div className="flex-1">
                          <div className="font-medium capitalize">{type} Plan</div>
                          <div className="text-sm text-gray-500">${cost}/semester</div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Orders per week */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    DoorDash Orders Per Week
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    value={state.ordersPerWeek}
                    onChange={(e) => updateState('ordersPerWeek', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>0</span>
                    <span className="font-semibold text-red-600">{state.ordersPerWeek} orders/week</span>
                    <span>10+</span>
                  </div>
                </div>

                {/* Average order value */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Average DoorDash Order Value
                  </label>
                  <input
                    type="range"
                    min="8"
                    max="25"
                    value={state.averageOrderValue}
                    onChange={(e) => updateState('averageOrderValue', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                  />
                  <div className="flex justify-between text-sm text-gray-500 mt-1">
                    <span>$8</span>
                    <span className="font-semibold text-red-600">${state.averageOrderValue}</span>
                    <span>$25+</span>
                  </div>
                </div>

                {/* Time period */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Calculate for
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="semester"
                        value="both"
                        checked={state.semester === 'both'}
                        onChange={(e) => updateState('semester', e.target.value)}
                        className="mr-3 text-red-600"
                      />
                      <span className="font-medium">Full Year</span>
                    </label>
                    <label className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="semester"
                        value="fall"
                        checked={state.semester === 'fall'}
                        onChange={(e) => updateState('semester', e.target.value)}
                        className="mr-3 text-red-600"
                      />
                      <span className="font-medium">One Semester</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="space-y-6">
              {/* Total Waste - Big Impact Number */}
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-2xl shadow-xl p-8 text-white text-center">
                <div className="text-sm font-medium opacity-90 mb-2">Your Annual Food Waste</div>
                <div className="text-6xl font-bold mb-2">
                  ${Math.round(results.totalAnnualWaste).toLocaleString()}
                </div>
                <div className="text-lg opacity-90">
                  That&rsquo;s ${Math.round(results.totalAnnualWaste / 12)}/month down the drain
                </div>
              </div>

              {/* Breakdown Cards */}
              <div className="grid grid-cols-1 gap-4">
                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-red-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-600">Expired Dining Credits</div>
                      <div className="text-2xl font-bold text-red-600">
                        ${Math.round(results.diningHallWaste).toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">26% average expiration rate</div>
                    </div>
                    <DollarSign className="w-8 h-8 text-red-500" />
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-orange-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium text-gray-600">DoorDash Charges & Markup</div>
                      <div className="text-2xl font-bold text-orange-600">
                        ${Math.round(results.deliveryFees).toLocaleString()}
                      </div>
                      <div className="text-xs text-gray-500">${(results.deliveryFees / (state.ordersPerWeek * 32)).toFixed(2)} per order in charges</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-orange-500" />
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-500 to-green-600 rounded-xl shadow-lg p-6 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium opacity-90">Bite Club Savings</div>
                      <div className="text-2xl font-bold">
                        ${Math.round(results.biteClubSavings).toLocaleString()}
                      </div>
                      <div className="text-xs opacity-75">95% waste elimination</div>
                    </div>
                    <div className="text-3xl">💰</div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-900 rounded-xl p-6 text-center">
                <div className="text-white text-lg font-semibold mb-2">
                  Stop wasting ${Math.round(results.totalAnnualWaste / 12)}/month
                </div>
                <div className="text-gray-300 text-sm mb-4">
                  Join Bite Club and keep every dollar of your food budget
                </div>
                <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
                  Start Saving Today
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Explanation */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              How We Calculated Your Waste
            </h3>
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h4 className="font-semibold text-red-600 mb-2">Dining Hall Waste</h4>
                <p className="text-gray-600 text-sm">
                  Based on industry data showing 26% of prepaid dining credits expire unused each semester. 
                  Students often overestimate their dining hall usage and lose hundreds in prepaid credits.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-orange-600 mb-2">DoorDash Charges</h4>
                <p className="text-gray-600 text-sm">
                  Includes service fees ($1.99), processing fees ($0.50), small order fees ($2), and hidden menu markup (20%). 
                  These &ldquo;small&rdquo; charges add up to $6-8 per order and $720+ annually.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
        }
        
        .slider::-moz-range-thumb {
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: #dc2626;
          cursor: pointer;
          border: none;
        }
      `}</style>
    </section>
  )
}