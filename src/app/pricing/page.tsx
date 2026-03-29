'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'

export default function PricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const sofaTypes = [
    {
      type: "2-Seater Sofa",
      priceRange: "£45–£75",
      description: "Perfect for small living rooms and apartments"
    },
    {
      type: "3-Seater Sofa", 
      priceRange: "£60–£95",
      description: "The most popular choice for family homes"
    },
    {
      type: "Corner Sofa",
      priceRange: "£80–£130", 
      description: "L-shaped and modular corner configurations"
    },
    {
      type: "Full Suite",
      priceRange: "£120–£180",
      description: "Multiple pieces cleaned as a package"
    },
    {
      type: "Armchair",
      priceRange: "£25–£45",
      description: "Single seat chairs and recliners"
    }
  ]

  const priceFactors = [
    {
      title: "Fabric Type",
      description: "Delicate fabrics like silk or velvet may require specialized cleaning techniques",
      icon: "🧵"
    },
    {
      title: "Stain Severity", 
      description: "Heavy staining or pet odors may need additional treatment and time",
      icon: "🔍"
    },
    {
      title: "Location",
      description: "Prices may vary slightly between different cities and regions",
      icon: "📍"
    },
    {
      title: "Accessibility",
      description: "Difficult access (upstairs, narrow doorways) may affect pricing",
      icon: "🏠"
    }
  ]

  const faqs = [
    {
      question: "Are there any hidden charges?",
      answer: "No. The quote you receive is the final price you pay. There are no booking fees, service charges, or hidden costs."
    },
    {
      question: "Do prices include materials and equipment?",
      answer: "Yes. All cleaning materials, professional equipment, and consumables are included in the quoted price."
    },
    {
      question: "Can I get a discount for multiple items?",
      answer: "Many cleaners offer package discounts when cleaning multiple pieces of furniture. This will be reflected in your quotes."
    },
    {
      question: "When do I pay?",
      answer: "You pay the cleaner directly after the job is completed to your satisfaction. No upfront payment required."
    },
    {
      question: "What if the job takes longer than expected?",
      answer: "The price is fixed based on the initial assessment. You won't pay extra if the job takes longer than anticipated."
    },
    {
      question: "Do weekend appointments cost more?",
      answer: "Some cleaners may charge a small premium for weekend or evening appointments. This will be clearly stated in their quote."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Sofa Cleaning Prices
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transparent pricing from verified professional cleaners
          </p>
          <div className="bg-white px-6 py-4 rounded-lg inline-block shadow-sm">
            <p className="text-lg font-medium text-primary">
              💷 No booking fee. No hidden charges. You only pay the cleaner's quote.
            </p>
          </div>
        </div>
      </div>

      {/* Pricing Table */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Typical Pricing by Sofa Type
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {sofaTypes.map((sofa, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {sofa.type}
                </h3>
                <div className="text-2xl font-bold text-primary mb-3">
                  {sofa.priceRange}
                </div>
                <p className="text-gray-600 text-sm">
                  {sofa.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              Prices shown are typical ranges. Your actual quote may vary based on specific requirements.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="lg"
            >
              Get Your Exact Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Price Factors */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Affects the Price?
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {priceFactors.map((factor, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{factor.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {factor.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {factor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Value Proposition */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Choose Professional Cleaning?
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Save Time</h3>
              <p className="text-gray-600 text-sm">
                Professional job done in 1-2 hours vs. a full day of DIY attempts
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Better Results</h3>
              <p className="text-gray-600 text-sm">
                Professional equipment and expertise for deeper, longer-lasting clean
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Safe & Insured</h3>
              <p className="text-gray-600 text-sm">
                No risk of damage with fully insured professional cleaners
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pricing Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Message us once on WhatsApp and we will route you to an available cleaner quickly
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            variant="secondary"
            size="lg"
          >
            Start on WhatsApp
          </Button>
        </div>
      </div>

      <ChannelSelectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="I'd like to get pricing quotes for sofa cleaning"
      />
    </div>
  )
}
