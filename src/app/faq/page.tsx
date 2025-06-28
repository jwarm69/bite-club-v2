import { Metadata } from 'next'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Frequently Asked Questions - FAQ | Bite Club Meal Plan',
  description: 'Get answers to common questions about Bite Club meal plans, credits, ordering, and more. Find everything you need to know about campus dining.',
  keywords: 'bite club faq, meal plan questions, student dining help, how to use bite club'
}

export default function FAQPage() {
  const faqSections = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "What is Bite Club?",
          answer: "Bite Club is a student meal plan alternative that lets you order ahead at 25+ local restaurants near campus. You buy credits that never expire and use them to skip lines and save money on food."
        },
        {
          question: "How do I sign up?",
          answer: "Simply create an account on our website or app, verify your student email, and purchase your first credits. You'll be ready to order in under 5 minutes!"
        },
        {
          question: "Is this only for students?",
          answer: "Yes, Bite Club is exclusively for college students. You'll need a valid .edu email address to sign up and access student-only discounts."
        },
        {
          question: "Which schools can use Bite Club?",
          answer: "We're currently available at Florida Atlantic University (FAU), University of South Florida (USF), and University of Florida (UF). We're expanding to more schools soon!"
        }
      ]
    },
    {
      title: "Credits & Payment",
      faqs: [
        {
          question: "Do credits expire?",
          answer: "No! Bite Club credits never expire and roll over every semester. You can use them whenever you want, even years later."
        },
        {
          question: "How much do credits cost?",
          answer: "Credits are sold at a discount - the more you buy, the more you save! Packages start at $47.50 for $50 in credits (5% savings) up to $180 for $200 in credits (10% savings)."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit and debit cards (Visa, Mastercard, American Express, Discover). We can also work with financial aid offices for larger purchases."
        },
        {
          question: "Can I get a refund?",
          answer: "Yes, unused credits can be refunded within 30 days of purchase. After 30 days, credits are non-refundable but never expire so you can use them anytime."
        },
        {
          question: "Can I share credits with friends?",
          answer: "Credits are tied to your individual account and can't be transferred. However, you can order food for friends and pay with your credits!"
        }
      ]
    },
    {
      title: "Ordering & Pickup",
      faqs: [
        {
          question: "How do I place an order?",
          answer: "Browse restaurants in our app or website, select your items, customize as needed, and pay with credits. You'll get notifications when your order is ready for pickup."
        },
        {
          question: "How long does pickup take?",
          answer: "Most orders are ready in 5-15 minutes. You'll receive SMS and app notifications when your order is ready, so no waiting in line!"
        },
        {
          question: "What if my order is wrong?",
          answer: "Contact our support team immediately through the app or call/text (561) 396-9232. We'll work with the restaurant to fix the issue and may provide credit for the inconvenience."
        },
        {
          question: "Can I modify my order after placing it?",
          answer: "You can modify orders within 2 minutes of placing them if the restaurant hasn't started preparation. After that, contact the restaurant directly or our support team."
        },
        {
          question: "What if a restaurant is closed?",
          answer: "Restaurant hours are updated in real-time in our app. If you try to order from a closed restaurant, you'll be notified and can choose a different option."
        }
      ]
    },
    {
      title: "Restaurants & Menu",
      faqs: [
        {
          question: "How many restaurants are available?",
          answer: "We partner with 25+ local restaurants near campus, with new partners joining regularly. We focus on quality local spots that students love."
        },
        {
          question: "Do you have healthy options?",
          answer: "Absolutely! Many of our partners offer healthy choices including salads, grain bowls, fresh juices, and options for various dietary restrictions."
        },
        {
          question: "Can you accommodate dietary restrictions?",
          answer: "Yes! Our menu system includes filters for vegetarian, vegan, gluten-free, and other dietary needs. You can also add special instructions to orders."
        },
        {
          question: "How often are menus updated?",
          answer: "Menus and prices are updated in real-time by our restaurant partners. You'll always see current availability and pricing."
        },
        {
          question: "Do you deliver?",
          answer: "Currently, Bite Club is pickup-only. This keeps costs low and ensures your food is fresh. All partner restaurants are within walking distance of campus."
        }
      ]
    },
    {
      title: "Account & Technical",
      faqs: [
        {
          question: "How do I reset my password?",
          answer: "Click 'Forgot Password' on the login page and enter your email. You'll receive a reset link within a few minutes."
        },
        {
          question: "Can I change my email address?",
          answer: "Yes, you can update your email in account settings. Note that you'll need to verify the new email address if it's a different school."
        },
        {
          question: "Is there a mobile app?",
          answer: "Yes! Download the Bite Club app from the App Store or Google Play for the best ordering experience with push notifications."
        },
        {
          question: "What if the app isn't working?",
          answer: "Try closing and reopening the app, or use our website at biteclubmealplan.com. Contact support at (561) 396-9232 if problems persist."
        },
        {
          question: "How do I delete my account?",
          answer: "Contact our support team to delete your account. Note that any remaining credits will be forfeited unless you request a refund within 30 days."
        }
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 to-green-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Find answers to common questions about Bite Club. Can&apos;t find what you&apos;re looking for? Contact our support team!
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <input 
              type="text"
              placeholder="Search for answers..."
              className="w-full px-6 py-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 text-lg"
            />
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {faqSections.map((section, sectionIndex) => (
              <div key={sectionIndex} className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 pb-2 border-b border-gray-200">
                  {section.title}
                </h2>
                
                <div className="space-y-4">
                  {section.faqs.map((faq, faqIndex) => (
                    <div key={faqIndex} className="bg-white border border-gray-200 rounded-lg">
                      <button className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors">
                        <h3 className="font-semibold text-gray-900 pr-4">
                          {faq.question}
                        </h3>
                        <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                      </button>
                      
                      <div className="px-6 pb-4">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Still Need Help?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our support team is here to help with any questions not covered above.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-4">📧</div>
                <h3 className="font-bold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Get detailed help via email</p>
                <a href="mailto:support@biteclubmealplan.com" className="text-green-600 font-semibold">
                  support@biteclubmealplan.com
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-4">💬</div>
                <h3 className="font-bold text-gray-900 mb-2">Text Support</h3>
                <p className="text-gray-600 text-sm mb-4">Quick questions via SMS</p>
                <a href="tel:5613969232" className="text-green-600 font-semibold">
                  (561) 396-9232
                </a>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-2xl mb-4">🕐</div>
                <h3 className="font-bold text-gray-900 mb-2">Response Time</h3>
                <p className="text-gray-600 text-sm mb-4">We typically respond within</p>
                <div className="text-green-600 font-semibold">2-4 hours</div>
              </div>
            </div>
            
            <Link 
              href="/contact"
              className="inline-block bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}