import { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLink, Download, Mail, Phone, Calendar, Award, Newspaper } from 'lucide-react'
import Navigation from '@/components/Navigation'

export const metadata: Metadata = {
  title: 'Press & Media Coverage - Bite Club Meal Plan in the News',
  description: 'Read about Bite Club Meal Plan in The Independent Florida Alligator and other press coverage. Download our media kit and contact press team.',
  keywords: 'bite club press coverage, alligator newspaper, student meal plan news, UF entrepreneurship, media kit'
}

export default function PressPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Bite Club Meal Plan",
    "url": "https://bite-club-v2-s7su.vercel.app",
    "logo": "https://bite-club-v2-s7su.vercel.app/bite-club-logo.png",
    "foundingDate": "2024",
    "founder": {
      "@type": "Person",
      "name": "Jack Warman"
    },
    "description": "Student meal plan alternative offering prepaid credits for 25+ local restaurants near campus",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Gainesville",
      "addressRegion": "Florida",
      "addressCountry": "US"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-561-396-9232",
      "email": "press@biteclubmealplan.com",
      "contactType": "Press Relations"
    },
    "mentions": [
      {
        "@type": "NewsArticle",
        "headline": "What to know about a new student meal plan alternative",
        "author": {
          "@type": "Organization",
          "name": "The Independent Florida Alligator"
        },
        "datePublished": "2024-09",
        "url": "https://www.alligator.org/article/2024/09/what-to-know-about-a-new-student-meal-plan-alternative",
        "about": {
          "@type": "Organization",
          "name": "Bite Club Meal Plan"
        }
      }
    ]
  }
  const pressArticles = [
    {
      title: "What to know about a new student meal plan alternative",
      publication: "The Independent Florida Alligator",
      date: "September 2024",
      author: "Staff Writer",
      description: "UF's student newspaper covers Bite Club as an innovative meal plan alternative that emerged from the university's entrepreneurship program.",
      url: "https://www.alligator.org/article/2024/09/what-to-know-about-a-new-student-meal-plan-alternative",
      featured: true,
      quote: "We looked to create an alternative meal plan for UF and Santa Fe students that they can use instead of going to the dining halls",
      category: "Campus News"
    }
  ]

  const mediaAssets = [
    {
      name: "Bite Club Logo - High Resolution",
      format: "PNG",
      size: "2MB",
      description: "Primary logo for print and digital use"
    },
    {
      name: "Bite Club Brand Colors",
      format: "PDF",
      size: "500KB", 
      description: "Brand guidelines and color palette"
    },
    {
      name: "Founder Headshot - Jack Warman",
      format: "JPG",
      size: "1.5MB",
      description: "Professional headshot for media use"
    },
    {
      name: "Company Fact Sheet",
      format: "PDF",
      size: "300KB",
      description: "Key statistics and company information"
    }
  ]

  const keyFacts = [
    { label: "Founded", value: "2024" },
    { label: "Founder", value: "Jack Warman, UF Graduate Student" },
    { label: "Partner Restaurants", value: "25+" },
    { label: "Universities Served", value: "UF, FAU, USF" },
    { label: "Student Users", value: "1,500+" },
    { label: "Menu Items Available", value: "1,500+" },
    { label: "Business Model", value: "Prepaid credits, never expire" },
    { label: "Headquarters", value: "Gainesville, Florida" }
  ]

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navigation />

      {/* Hero Section */}
      <section className="bg-hero-gradient text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Newspaper className="w-4 h-4 mr-2" />
              Press & Media Coverage
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Bite Club in the News
            </h1>
            <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
              Discover how Bite Club is revolutionizing campus dining and creating a new category of student meal plan alternatives. 
              Media inquiries welcome.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Press Coverage */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-4">
              Featured Coverage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
              As Featured In
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leading campus publications covering our innovative approach to student dining
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            {pressArticles.map((article, index) => (
              <div key={index} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${article.featured ? 'border-2 border-green-200' : 'border border-gray-200'}`}>
                <div className="p-8 md:p-12">
                  <div className="flex flex-col lg:flex-row gap-8">
                    <div className="flex-1">
                      {article.featured && (
                        <div className="inline-flex items-center bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-4">
                          <Award className="w-4 h-4 mr-1" />
                          Featured Article
                        </div>
                      )}
                      <div className="flex items-center text-gray-500 text-sm mb-3">
                        <span className="font-medium text-green-600">{article.publication}</span>
                        <span className="mx-2">•</span>
                        <span>{article.date}</span>
                        <span className="mx-2">•</span>
                        <span className="bg-gray-100 px-2 py-1 rounded text-xs">{article.category}</span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        {article.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {article.description}
                      </p>
                      {article.quote && (
                        <blockquote className="border-l-4 border-green-600 pl-6 italic text-gray-700 mb-6">
                          &ldquo;{article.quote}&rdquo;
                          <cite className="block text-sm text-gray-500 mt-2 not-italic">
                            - Jack Warman, Founder
                          </cite>
                        </blockquote>
                      )}
                      <Link 
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                      >
                        Read Full Article
                        <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                    <div className="lg:w-80 flex items-center justify-center">
                      <div className="bg-gray-100 rounded-xl p-8 text-center">
                        <div className="text-6xl mb-4">📰</div>
                        <div className="text-lg font-semibold text-gray-900 mb-2">
                          {article.publication}
                        </div>
                        <div className="text-sm text-gray-600">
                          University of Florida&apos;s<br />Student Newspaper
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Facts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
                Company Fast Facts
              </h2>
              <p className="text-xl text-gray-600">
                Key information for journalists and media professionals
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {keyFacts.map((fact, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6 text-center">
                  <div className="text-2xl font-bold text-green-600 mb-2">
                    {fact.value}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {fact.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Media Kit */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
                Media Kit & Assets
              </h2>
              <p className="text-xl text-gray-600">
                Download high-quality assets for your articles and coverage
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {mediaAssets.map((asset, index) => (
                <div key={index} className="bg-white rounded-lg p-6 border border-gray-200 hover:border-green-200 transition-colors">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{asset.name}</h3>
                      <p className="text-gray-600 text-sm mb-3">{asset.description}</p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="bg-gray-100 px-2 py-1 rounded">{asset.format}</span>
                        <span>{asset.size}</span>
                      </div>
                    </div>
                    <button className="ml-4 bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <div className="bg-white rounded-lg p-8 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Need Additional Assets?</h3>
                <p className="text-gray-600 mb-6">
                  Contact our press team for custom assets, interview opportunities, or additional information.
                </p>
                <a 
                  href="mailto:press@biteclubmealplan.com"
                  className="inline-flex items-center bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Press Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Press Contact */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
                Press Contact Information
              </h2>
              <p className="text-xl text-gray-600">
                For media inquiries, interviews, and press requests
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Media Relations</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-medium">Email</div>
                      <a href="mailto:press@biteclubmealplan.com" className="text-green-600 hover:text-green-700">
                        press@biteclubmealplan.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-medium">Phone</div>
                      <a href="tel:5613969232" className="text-green-600 hover:text-green-700">
                        (561) 396-9232
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-gray-600">Within 4 hours during business hours</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Interview Opportunities</h3>
                <div className="space-y-4 text-gray-700">
                  <div>• Founder interviews available</div>
                  <div>• Student user testimonials</div>
                  <div>• Restaurant partner perspectives</div>
                  <div>• Campus dining industry insights</div>
                  <div>• Entrepreneurship program success stories</div>
                </div>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <div className="text-sm text-gray-600">
                    <strong>Best times for interviews:</strong><br />
                    Monday-Friday, 9 AM - 5 PM EST<br />
                    Video calls available via Zoom or Teams
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Ideas */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6" style={{fontFamily: "'Playfair Display', serif"}}>
              Story Ideas & Angles
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Compelling narratives for your next article about campus dining innovation
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">🎓 Student Entrepreneurship</h3>
                <p className="text-gray-600">
                  How a UF graduate student turned a class project into a real business solving campus dining problems.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">💰 Rising Food Costs</h3>
                <p className="text-gray-600">
                  Students finding alternatives to expensive meal plans, saving money while supporting local restaurants.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">🏪 Local Business Impact</h3>
                <p className="text-gray-600">
                  How tech platforms are connecting students with local restaurants and boosting small business revenue.
                </p>
              </div>
              <div className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="font-bold text-gray-900 mb-4">📱 Campus Tech Innovation</h3>
                <p className="text-gray-600">
                  The digitization of campus life and how apps are replacing traditional university services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}