'use client'

import Link from 'next/link'
import { Phone, Mail, ArrowRight, Star, Clock, DollarSign, Users } from 'lucide-react'
import Navigation from '@/components/Navigation'
import { GetStartedCTA, SignupCTA } from '@/components/SmartCTA'
import { useStats, formatNumber } from '@/hooks/useStats'
import WasteCalculator from '@/components/WasteCalculator'
import HiddenCostsSection from '@/components/HiddenCostsSection'

export default function HomePage() {
  const { stats, isLiveData } = useStats()
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white overflow-hidden min-h-screen flex items-center">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient orbs with better animation */}
          <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] animate-pulse-slow"></div>
          <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-white/8 rounded-full blur-[140px] animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] animate-pulse-slow" style={{animationDelay: '3s'}}></div>
          
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03]" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-16 md:py-24 z-10">
          <div className="max-w-6xl mx-auto">
            {/* Trust Badge - Enhanced */}
            <div className="mb-8 flex justify-center animate-fade-in-up" style={{animationDelay: '0.1s'}}>
              <div className="inline-flex items-center gap-3 bg-white/15 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                  ))}
                </div>
                <span className="text-sm font-semibold">
                  Trusted by <span className="text-green-200 font-bold">{formatNumber(stats.totalUsers)}+</span> UF students
                </span>
                {isLiveData && (
                  <span className="flex items-center gap-1 text-xs bg-green-500/30 px-2 py-1 rounded-full">
                    <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                    Live
                  </span>
                )}
              </div>
            </div>

            {/* Main Headline - Enhanced Typography */}
            <div className="text-center mb-10 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[1.1] tracking-tight" style={{fontFamily: "'Playfair Display', serif"}}>
                <span className="block">Skip overpriced</span>
                <span className="block">
                  <span className="relative inline-block">
                    apps
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></span>
                  </span>
                  {' '}
                  <span className="text-yellow-200">AND</span>
                  {' '}
                  <span className="relative inline-block">
                    dining halls
                    <span className="absolute -bottom-2 left-0 right-0 h-1 bg-white/30 rounded-full"></span>
                  </span>
                </span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto leading-relaxed text-white/95 font-light mt-8">
                Stop paying <span className="font-semibold text-red-200">$8+ in DoorDash fees</span> per order.{' '}
                Stop losing <span className="font-semibold text-red-200">$450+ in expired dining hall credits</span>.{' '}
                Get the same Gainesville restaurants at{' '}
                <span className="font-semibold text-green-200">actual menu prices</span>.
              </p>
            </div>
            
            {/* Enhanced Comparison Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12 max-w-6xl mx-auto animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="group bg-red-500/15 backdrop-blur-md border border-red-300/20 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:bg-red-500/20 hover:scale-105 hover:shadow-xl">
                <div className="text-base md:text-lg font-semibold mb-3 text-red-100">UF Dining</div>
                <div className="text-3xl md:text-4xl font-bold text-red-200 mb-2">$450+</div>
                <div className="text-xs md:text-sm text-red-200/80 font-medium">Lost in expired credits per year</div>
              </div>
              
              <div className="group bg-orange-500/15 backdrop-blur-md border border-orange-300/20 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:bg-orange-500/20 hover:scale-105 hover:shadow-xl">
                <div className="text-base md:text-lg font-semibold mb-3 text-orange-100">DoorDash</div>
                <div className="text-3xl md:text-4xl font-bold text-orange-200 mb-2">$720+</div>
                <div className="text-xs md:text-sm text-orange-200/80 font-medium">Service charges + markup per year</div>
              </div>
              
              <div className="group relative bg-white/20 backdrop-blur-md border-2 border-green-300/40 rounded-2xl p-6 md:p-8 text-center transition-all duration-300 hover:bg-white/25 hover:scale-105 hover:shadow-2xl hover:border-green-300/60">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-green-400 to-green-600 text-white px-4 py-1.5 rounded-full text-xs font-bold shadow-lg">
                    BEST VALUE
                  </span>
                </div>
                <div className="text-base md:text-lg font-semibold mb-3 text-white">Bite Club</div>
                <div className="text-3xl md:text-4xl font-bold text-green-200 mb-2">$0</div>
                <div className="text-xs md:text-sm text-white/90 font-medium">No fees + credits never expire</div>
              </div>
            </div>
            
            {/* Enhanced Key Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 max-w-5xl mx-auto animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              <div className="group flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">🚫</span>
                </div>
                <div className="font-bold text-white mb-2 text-lg">Zero Service Charges</div>
                <div className="text-white/80 text-sm text-center">Same restaurants, actual prices</div>
              </div>
              
              <div className="group flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">♾️</span>
                </div>
                <div className="font-bold text-white mb-2 text-lg">Credits Never Expire</div>
                <div className="text-white/80 text-sm text-center">Roll over until graduation</div>
              </div>
              
              <div className="group flex flex-col items-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl">⚡</span>
                </div>
                <div className="font-bold text-white mb-2 text-lg">Skip All Lines</div>
                <div className="text-white/80 text-sm text-center">Order ahead, pick up in 2 min</div>
              </div>
            </div>
            
            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <GetStartedCTA source="homepage-hero" />
              <Link 
                href="/how-it-works"
                className="group inline-flex items-center justify-center border-2 border-white/80 text-white px-8 py-4 rounded-full text-base md:text-lg font-semibold transition-all duration-300 backdrop-blur-sm bg-white/5 hover:bg-white hover:text-green-600 hover:border-white hover:shadow-xl hover:scale-105"
              >
                See How It Works
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
              <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-white/50 rounded-full mt-2"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spring Semester Countdown */}
      <section className="py-12 bg-gradient-to-r from-orange-500 to-red-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              🎓 Spring Semester Starts In:
            </h2>
            <div className="flex justify-center gap-4 md:gap-8">
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl md:text-3xl font-bold">14</div>
                <div className="text-sm opacity-90">Days</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl md:text-3xl font-bold">23</div>
                <div className="text-sm opacity-90">Hours</div>
              </div>
              <div className="bg-white/20 rounded-lg p-4 min-w-[80px]">
                <div className="text-2xl md:text-3xl font-bold">45</div>
                <div className="text-sm opacity-90">Minutes</div>
              </div>
            </div>
            <p className="mt-6 text-lg opacity-90">
              ✨ Get ready to fuel your semester! Early signup bonus: <strong>Extra $25 credits</strong>
            </p>
            <div className="mt-4">
              <GetStartedCTA source="semester-countdown" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <span className="inline-block px-4 py-2 rounded-full text-sm font-medium mb-4" style={{
              backgroundColor: 'var(--bite-club-green-pale)',
              color: 'var(--bite-club-green-darker)'
            }}>
              Why Choose Bite Club
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              How we&apos;re different from <span style={{color: 'var(--bite-club-green)'}}>dining halls</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of campus dining with our innovative meal plan solution
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
                 style={{'--hover-border': 'var(--bite-club-green-pale)'} as React.CSSProperties}
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--bite-club-green-pale)'}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--gray-100)'}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{
                background: 'linear-gradient(135deg, var(--bite-club-green-light) 0%, var(--bite-club-green) 100%)'
              }}>
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Skip the Wait</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Skip the line and save time! Pre-order your favorite meals from partner restaurants and pick them up at your convenience.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No stress, no wait—just delicious food when you need it.
              </p>
              <div className="mt-6 flex items-center font-semibold" style={{color: 'var(--bite-club-green)'}}>
                <ArrowRight className="w-4 h-4 mr-2" />
                Average pickup: 5 minutes
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--bite-club-green-pale)'}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--gray-100)'}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{
                background: 'linear-gradient(135deg, var(--accent-orange-light) 0%, var(--accent-orange-dark) 100%)'
              }}>
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Endless Options</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Explore an ever-growing selection of local restaurants and cuisines to satisfy every craving.
              </p>
              <p className="text-gray-600 leading-relaxed">
                With over <strong style={{color: 'var(--accent-orange)'}}>1500 unique menu options</strong>, you&apos;ll always have something new to try!
              </p>
              <div className="mt-6 flex items-center font-semibold" style={{color: 'var(--accent-orange)'}}>
                <ArrowRight className="w-4 h-4 mr-2" />
                25+ partner restaurants
              </div>
            </div>
            
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 transform hover:-translate-y-2"
                 onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--bite-club-green-pale)'}
                 onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--gray-100)'}>
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" style={{
                background: 'linear-gradient(135deg, var(--accent-orange) 0%, var(--accent-orange-dark) 100%)'
              }}>
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Savings</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Save big with exclusive student-only deals and our unbeatable &apos;endless-rollover&apos; policy.
              </p>
              <p className="text-gray-600 leading-relaxed">
                No hidden fees, no expiring credits—use every dollar, your way.
              </p>
              <div className="mt-6 flex items-center font-semibold" style={{color: 'var(--accent-orange-dark)'}}>
                <ArrowRight className="w-4 h-4 mr-2" />
                Save up to 10% on credits
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Student Success Stories
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              What students are saying
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl border border-green-100 relative">
              {/* Quote decoration */}
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-white fill-current" />
                </div>
              </div>
              
              <div className="text-center">
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed italic">
                  &quot;As a dietetics student, Bite Club offers a variety of food options that a regular meal plan just doesn&apos;t have. 
                  I love being able to order on the go without having to wait in line and pick up food that is nutritious and delicious. 
                  It was really easy to get started, knowing that I get use out of every dollar I put in. 
                  I found it to be very useful and convenient, so I would encourage others to give it a try.&quot;
                </blockquote>
                
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-xl">F</span>
                  </div>
                  <div className="text-left">
                    <cite className="text-green-700 font-bold text-lg block">Fabian</cite>
                    <div className="text-gray-500">Dietetics Student, Class of 2028</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waste Calculator Section */}
      <WasteCalculator />

      {/* Hidden Costs Section */}
      <HiddenCostsSection />

      {/* Press Coverage Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              As Featured In
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
              Press Coverage
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading campus publications are covering our innovative approach to student dining
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-8 border border-green-200">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="md:w-24 w-16 h-16 md:h-24 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-2xl md:text-3xl font-bold">📰</span>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="text-green-700 font-semibold text-sm mb-2">THE INDEPENDENT FLORIDA ALLIGATOR</div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">
                    &ldquo;What to know about a new student meal plan alternative&rdquo;
                  </h3>
                  <p className="text-gray-700 mb-4">
                    UF&apos;s student newspaper covers how Bite Club emerged from the university&apos;s entrepreneurship program to solve campus dining challenges.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                    <a 
                      href="https://www.alligator.org/article/2024/09/what-to-know-about-a-new-student-meal-plan-alternative" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-700 transition-colors"
                    >
                      Read Article
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <Link 
                      href="/press"
                      className="inline-flex items-center border border-green-600 text-green-700 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-50 transition-colors"
                    >
                      View All Coverage
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Comparison Section - Fee-Focused */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              💸 Fee Comparison
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stop paying unnecessary <span className="text-red-600">fees</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every other option charges you extra. We don&rsquo;t. It&rsquo;s that simple.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white rounded-lg shadow-lg">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="p-6 text-left font-semibold text-gray-700"></th>
                    <th className="p-6 text-center font-bold text-bite-club-green text-lg relative">
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">NO FEES</span>
                      </div>
                      Bite Club
                    </th>
                    <th className="p-6 text-center font-bold text-gray-600 text-lg">UF Dining</th>
                    <th className="p-6 text-center font-bold text-gray-600 text-lg">DoorDash</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">💰 Fees & Markups</td>
                    <td className="p-6 text-center text-bite-club-green font-semibold">
                      <div className="text-2xl font-bold">$0</div>
                      <div className="text-sm">Zero fees, menu prices</div>
                    </td>
                    <td className="p-6 text-center text-red-600">
                      <div className="text-xl font-bold">$450+ lost</div>
                      <div className="text-sm">26% credits expire unused</div>
                    </td>
                    <td className="p-6 text-center text-red-600">
                      <div className="text-xl font-bold">$8+ per order</div>
                      <div className="text-sm">Service charges + markup</div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">📱 Convenience</td>
                    <td className="p-6 text-center text-bite-club-green font-semibold">
                      Order ahead • Skip lines<br/>
                      <span className="text-sm font-normal">2-minute pickup</span>
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      Wait in line<br/>
                      <span className="text-sm">Limited hours</span>
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      Pickup or delivery<br/>
                      <span className="text-sm">+ $8 in charges per order</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">🍽️ Food Options</td>
                    <td className="p-6 text-center text-bite-club-green font-semibold">
                      <div className="font-bold">1300+ menu items</div>
                      <div className="text-sm">25+ restaurants</div>
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      Limited campus dining<br/>
                      <span className="text-sm">Same weekly rotation</span>
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      Full restaurant menus<br/>
                      <span className="text-sm text-red-600">But 20% markup + charges</span>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">💳 Credit System</td>
                    <td className="p-6 text-center text-bite-club-green font-semibold">
                      Credits never expire<br/>
                      <span className="text-sm">Roll over until graduation</span>
                    </td>
                    <td className="p-6 text-center text-red-600">
                      Credits expire each semester<br/>
                      <span className="text-sm font-semibold">Lose $450+ per year</span>
                    </td>
                    <td className="p-6 text-center text-gray-600">
                      Pay per order<br/>
                      <span className="text-sm">No prepaid system</span>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="p-6 font-semibold text-gray-700">📊 Annual Cost Impact</td>
                    <td className="p-6 text-center text-bite-club-green font-semibold">
                      <div className="text-xl font-bold text-green-600">Save $1000+</div>
                      <div className="text-sm">No waste, no fees</div>
                    </td>
                    <td className="p-6 text-center text-red-600">
                      <div className="text-xl font-bold">-$450</div>
                      <div className="text-sm">Expired credits</div>
                    </td>
                    <td className="p-6 text-center text-red-600">
                      <div className="text-xl font-bold">-$720</div>
                      <div className="text-sm">Charges + markup (3 orders/week)</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          
          {/* Summary Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            <div className="bg-red-50 border border-red-200 rounded-xl p-6 text-center">
              <div className="text-red-600 text-2xl font-bold mb-2">$450+ Lost</div>
              <div className="text-gray-700 text-sm">Average annual dining hall waste</div>
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <div className="text-orange-600 text-2xl font-bold mb-2">$720+ Charges</div>
              <div className="text-gray-700 text-sm">Annual DoorDash charges (3 orders/week)</div>
            </div>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">BEST VALUE</span>
              </div>
              <div className="text-green-600 text-2xl font-bold mb-2">$0 Wasted</div>
              <div className="text-gray-700 text-sm">Bite Club = menu prices only</div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <GetStartedCTA source="comparison-table" />
            <p className="text-gray-600 mt-4 text-lg">
              <strong>Join 1300+ UF students</strong> who stopped overpaying for food
            </p>
          </div>
        </div>
      </section>

      {/* Restaurant Showcase - Same Restaurants, No Fees */}
      <section className="py-20 bg-gradient-to-br from-green-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              🍽️ Same Great Food
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your favorite restaurants, <span className="text-green-600">without the fees</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The exact same menus you love on DoorDash, but at actual restaurant prices. No markup, no service charges, no surprises.
            </p>
          </div>

          {/* Before/After Comparison */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className="inline-block bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                    DoorDash Price
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Chicken Deluxe Sandwich</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Menu Price</span>
                    <span>$12.00</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>DoorDash Markup (20%)</span>
                    <span>+$2.40</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Service Fee</span>
                    <span>+$1.99</span>
                  </div>
                  <div className="flex justify-between text-red-600">
                    <span>Processing Fee</span>
                    <span>+$0.50</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>You Pay</span>
                    <span className="text-red-600">$16.89</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">BEST VALUE</span>
                </div>
                <div className="text-center mb-4">
                  <div className="inline-block bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold mb-2">
                    Bite Club Price
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">Same Sandwich</h3>
                </div>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Menu Price</span>
                    <span>$12.00</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Service Fee</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Processing Fee</span>
                    <span>$0.00</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Markup</span>
                    <span>$0.00</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-bold text-lg">
                    <span>You Pay</span>
                    <span className="text-green-600">$12.00</span>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-bold">
                    Save $4.89 per order
                  </span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Restaurant Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-6xl mx-auto mb-12">
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <div className="text-3xl mb-2">🍗</div>
                <div className="text-xs font-medium text-gray-700">Chicken Salad Chick</div>
                <div className="text-xs text-green-600 font-semibold mt-1">Menu Prices</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <div className="text-3xl mb-2">🥪</div>
                <div className="text-xs font-medium text-gray-700">Primo Hoagies</div>
                <div className="text-xs text-green-600 font-semibold mt-1">Menu Prices</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <div className="text-3xl mb-2">🍕</div>
                <div className="text-xs font-medium text-gray-700">Gumby&rsquo;s Pizza</div>
                <div className="text-xs text-green-600 font-semibold mt-1">Menu Prices</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <div className="text-3xl mb-2">🍣</div>
                <div className="text-xs font-medium text-gray-700">Sushi 2 Go</div>
                <div className="text-xs text-green-600 font-semibold mt-1">Menu Prices</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <div className="text-3xl mb-2">🥞</div>
                <div className="text-xs font-medium text-gray-700">Hash House</div>
                <div className="text-xs text-green-600 font-semibold mt-1">Menu Prices</div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center border border-gray-100">
              <div className="text-center">
                <div className="text-3xl mb-2">🥗</div>
                <div className="text-xs font-medium text-gray-700">& 20+ More</div>
                <div className="text-xs text-green-600 font-semibold mt-1">No Markup</div>
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-green-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why pay 40% more for the same food?
              </h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <div className="font-semibold text-gray-700">Same Restaurants</div>
                    <div className="text-sm text-gray-600">Your local favorites</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">✅</div>
                    <div className="font-semibold text-gray-700">Same Menus</div>
                    <div className="text-sm text-gray-600">Every item available</div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-2">💰</div>
                    <div className="font-semibold text-green-600">Actual Prices</div>
                    <div className="text-sm text-gray-600">No hidden fees</div>
                  </div>
                </div>
              </div>
              <GetStartedCTA source="restaurant-showcase" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to start saving?
          </h2>
          <SignupCTA source="homepage-cta" variant="primary" />
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