'use client'

import Link from 'next/link'
import { Phone, Mail, ArrowRight, Star, Clock, DollarSign, Users } from 'lucide-react'
import Navigation from '@/components/Navigation'
import { GetStartedCTA, SignupCTA } from '@/components/SmartCTA'
import { useStats, formatNumber, formatSavings } from '@/hooks/useStats'

export default function HomePage() {
  const { stats, loading, isLiveData } = useStats()
  
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-hero-gradient text-white overflow-hidden min-h-[90vh] flex items-center">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-20">
          <div className="max-w-5xl mx-auto text-center animate-fade-in-up">
            <div className="mb-6">
              <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
                ⭐ Trusted by {formatNumber(stats.totalUsers)}+ students
                {isLiveData && <span className="ml-2 text-xs opacity-75">Live</span>}
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
              The <span style={{color: 'var(--accent-orange-light)'}}>Smarter</span> Meal Plan for Campus Life
            </h1>
            <p className="text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed" style={{color: 'rgba(255, 255, 255, 0.9)'}}>
              Skip dining hall lines forever. Order ahead at 25+ restaurants, save money on every meal, and never lose unused credits.
            </p>
            
            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--accent-orange-light)'}}>
                  {loading ? '...' : `${stats.activeRestaurants}+`}
                </div>
                <div className="text-white/80 text-sm">Partner Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--accent-orange-light)'}}>
                  {loading ? '...' : formatSavings(stats.averageSavingsPerMeal)}
                </div>
                <div className="text-white/80 text-sm">Avg. Savings/Meal</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold" style={{color: 'var(--accent-orange-light)'}}>
                  {loading ? '...' : `${stats.averagePickupTime} min`}
                </div>
                <div className="text-white/80 text-sm">Pickup Time</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <GetStartedCTA source="homepage-hero" />
              <Link 
                href="/how-it-works"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'white'
                  e.currentTarget.style.color = 'var(--bite-club-green)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.color = 'white'
                }}
              >
                See How It Works
                <ArrowRight className="ml-2 w-5 h-5 transition-transform" />
              </Link>
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
                    "What to know about a new student meal plan alternative"
                  </h3>
                  <p className="text-gray-700 mb-4">
                    UF's student newspaper covers how Bite Club emerged from the university's entrepreneurship program to solve campus dining challenges.
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