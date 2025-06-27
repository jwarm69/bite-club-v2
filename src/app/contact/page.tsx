import { Metadata } from 'next'
import Link from 'next/link'
import { Phone, Mail, MessageSquare, MapPin, Clock, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Us - Get Help & Support | Bite Club Meal Plan',
  description: 'Contact Bite Club support for help with your account, orders, or partnership inquiries. Email, text, or call us for fast assistance.',
  keywords: 'contact bite club, customer support, help, partnership inquiries, student support'
}

export default function ContactPage() {
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
            <Link href="/restaurant-partners" className="text-gray-700 hover:text-green-600 transition-colors">
              Restaurant Partners
            </Link>
            <Link href="/faq" className="text-gray-700 hover:text-green-600 transition-colors">
              FAQ
            </Link>
            <Link href="/contact" className="text-green-600 font-semibold">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Need help with your account, have questions about ordering, or interested in becoming a partner? 
            We&apos;re here to help!
          </p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
            {/* Email */}
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Support</h3>
              <p className="text-gray-600 mb-6">
                Best for detailed questions, account issues, or partnership inquiries
              </p>
              <a 
                href="mailto:support@biteclubmealplan.com"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                support@biteclubmealplan.com
              </a>
              <div className="text-sm text-gray-500 mt-4">
                Response time: 2-4 hours
              </div>
            </div>

            {/* Text/Call */}
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Call or Text</h3>
              <p className="text-gray-600 mb-6">
                Quick questions, urgent order issues, or immediate assistance
              </p>
              <a 
                href="tel:5613969232"
                className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
              >
                (561) 396-9232
              </a>
              <div className="text-sm text-gray-500 mt-4">
                Available: Mon-Fri 9am-7pm
              </div>
            </div>

            {/* Live Chat */}
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageSquare className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Live Chat</h3>
              <p className="text-gray-600 mb-6">
                Chat with our support team through the app for real-time help
              </p>
              <button className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Open Chat
              </button>
              <div className="text-sm text-gray-500 mt-4">
                Available in mobile app
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Send Us a Message
              </h2>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input 
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input 
                      type="text"
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input 
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="your.email@university.edu"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                    <option>Select a topic</option>
                    <option>Account Help</option>
                    <option>Order Issue</option>
                    <option>Technical Problem</option>
                    <option>Partnership Inquiry</option>
                    <option>Billing Question</option>
                    <option>Feature Request</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea 
                    rows={6}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Please describe your question or issue in detail..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number (optional)
                  </label>
                  <input 
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="(555) 123-4567"
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Only needed if you prefer a phone call response
                  </p>
                </div>

                <button 
                  type="submit"
                  className="w-full bg-green-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Office Info */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Our Office
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Contact Information</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Address</div>
                        <div className="text-gray-600">
                          Boca Raton, FL<br />
                          Near FAU Campus
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Phone</div>
                        <div className="text-gray-600">(561) 396-9232</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Email</div>
                        <div className="text-gray-600">support@biteclubmealplan.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 text-green-600 mt-1" />
                      <div>
                        <div className="font-semibold text-gray-900">Support Hours</div>
                        <div className="text-gray-600">
                          Monday - Friday: 9:00 AM - 7:00 PM<br />
                          Saturday - Sunday: 10:00 AM - 6:00 PM
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h3 className="text-xl font-bold text-gray-900 mb-6">Partnership Inquiries</h3>
                  <p className="text-gray-600 mb-6">
                    Interested in becoming a Bite Club restaurant partner? We&apos;d love to hear from you!
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Increase daily revenue</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Reach new student customers</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Streamlined ordering system</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">Marketing support included</span>
                    </div>
                  </div>
                  
                  <a 
                    href="mailto:partnerships@biteclubmealplan.com"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                  >
                    Contact Partnership Team
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}