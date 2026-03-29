'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'

export default function CleanersHowItWorksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const detailedProcess = [
    {
      number: 1,
      title: "Customer requests quote via our platform",
      description: "Homeowners contact us through WhatsApp, Telegram, or our website. They provide details about their sofa type, fabric, location, and any specific cleaning needs.",
      timeline: "Immediate",
      icon: "📱"
    },
    {
      number: 2,
      title: "We send you job details in your area",
      description: "You receive a notification with customer location, job details, photos (if provided), and any special requirements. Only cleaners in the appropriate service area are contacted.",
      timeline: "Within 30 minutes",
      icon: "📮"
    },
    {
      number: 3,
      title: "You provide your quote and availability",
      description: "Review the job details and send us your quote, preferred time slots, and any questions. Be competitive but fair - customers typically compare 3-4 quotes.",
      timeline: "Within 2 hours",
      icon: "💷"
    },
    {
      number: 4,
      title: "Customer books directly with you",
      description: "We present quotes to the customer with cleaner profiles and ratings. When chosen, we facilitate the introduction and handover direct communication for scheduling.",
      timeline: "Same day",
      icon: "🤝"
    },
    {
      number: 5,
      title: "You complete the job and get paid",
      description: "Arrive on time, provide excellent service, collect payment directly. Share before/after photos if appropriate. Customer reviews help build your reputation.",
      timeline: "As scheduled",
      icon: "✨"
    }
  ]

  const weHandle = [
    {
      title: "Lead Generation",
      description: "SEO, advertising, social media marketing to drive customer inquiries",
      icon: "📊"
    },
    {
      title: "Customer Communication",
      description: "Initial inquiry handling, quote collection, booking coordination",
      icon: "💬"
    },
    {
      title: "Booking Coordination", 
      description: "Scheduling support, reminder systems, follow-up communications",
      icon: "📅"
    },
    {
      title: "Payment Protection",
      description: "Dispute resolution, quality standards enforcement, customer mediation",
      icon: "🛡️"
    },
    {
      title: "Reviews Management",
      description: "Review collection, rating systems, reputation building support",
      icon: "⭐"
    }
  ]

  const youHandle = [
    {
      title: "Competitive Quotes",
      description: "Research local rates, provide fair pricing, respond quickly to requests",
      icon: "💰"
    },
    {
      title: "Cleaning Service",
      description: "Professional cleaning, quality work, customer satisfaction focus",
      icon: "🧽"
    },
    {
      title: "Direct Customer Relationship",
      description: "After introduction, manage scheduling and service communication",
      icon: "👥"
    },
    {
      title: "Professional Equipment",
      description: "Maintain quality equipment, bring necessary supplies and materials",
      icon: "🔧"
    },
    {
      title: "Reputation Building",
      description: "Excellent service delivery, professional presentation, reliability",
      icon: "🎯"
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            How It Works for Cleaners
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A step-by-step guide to earning more with SofaCleaner
          </p>
          <div className="bg-white px-6 py-4 rounded-lg inline-block shadow-sm">
            <p className="text-lg font-medium text-primary">
              ⚡ From inquiry to booking in under 2 hours
            </p>
          </div>
        </div>
      </div>

      {/* Detailed Process */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Complete Process
          </h2>
          
          <div className="space-y-12">
            {detailedProcess.map((step, index) => (
              <div key={step.number} className="flex flex-col lg:flex-row items-center gap-8">
                <div className="flex-shrink-0 lg:order-1">
                  <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                    {step.number}
                  </div>
                </div>
                
                <div className="flex-1 lg:order-2">
                  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-start gap-4">
                      <div className="text-3xl">{step.icon}</div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 mb-3">
                          {step.description}
                        </p>
                        <div className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-amber/10 text-amber border border-amber/20">
                          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {step.timeline}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {index < detailedProcess.length - 1 && (
                  <div className="flex-shrink-0 lg:order-3">
                    <svg className="w-8 h-8 text-gray-400 transform rotate-90 lg:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Summary */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Typical Timeline
          </h2>
          
          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">0-30 min</div>
                <p className="text-sm text-gray-600">Customer inquiry received, job details sent to relevant cleaners</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">30-120 min</div>
                <p className="text-sm text-gray-600">Cleaners submit quotes, customer reviews options</p>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary mb-2">2-24 hours</div>
                <p className="text-sm text-gray-600">Customer makes selection, direct scheduling begins</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What We Handle vs What You Handle */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Division of Responsibilities
          </h2>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {/* What We Handle */}
            <div className="bg-green-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-green-800 mb-6 text-center">
                What SofaCleaner Handles
              </h3>
              <div className="space-y-4">
                {weHandle.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-green-800 mb-1">{item.title}</h4>
                      <p className="text-green-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What You Handle */}
            <div className="bg-blue-50 rounded-lg p-8">
              <h3 className="text-2xl font-semibold text-blue-800 mb-6 text-center">
                What You Handle
              </h3>
              <div className="space-y-4">
                {youHandle.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="text-2xl">{item.icon}</div>
                    <div>
                      <h4 className="font-medium text-blue-800 mb-1">{item.title}</h4>
                      <p className="text-blue-700 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Tips */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tips for Success
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Quick Response Times</h3>
              <p className="text-gray-600 text-sm">Respond to job requests within 2 hours. Fast responders get more bookings as customers often choose the first few quotes they receive.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Competitive Pricing</h3>
              <p className="text-gray-600 text-sm">Research local market rates. Price fairly but competitively. Remember, you're competing against 3-4 other quotes typically.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Professional Profile</h3>
              <p className="text-gray-600 text-sm">Maintain high-quality profile photos, detailed service descriptions, and prompt response to customer questions.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Excellent Service</h3>
              <p className="text-gray-600 text-sm">Exceed expectations to earn 5-star reviews. Great reviews lead to more bookings and higher conversion rates.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3">Clear Communication</h3>
              <p className="text-gray-600 text-sm">Ask clarifying questions in your quotes. Set clear expectations about timing, preparation, and results.</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="font-semibent text-gray-900 mb-3">Availability Management</h3>
              <p className="text-gray-600 text-sm">Keep your calendar updated. Offer flexible scheduling options to increase your booking rate.</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Earning More?
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Join our network of successful cleaners and grow your business with less admin work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-cleaners/join">
              <Button size="lg" variant="secondary">
                Apply to Join
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost"
              onClick={() => setIsModalOpen(true)}
            >
              Have Questions?
            </Button>
          </div>
        </div>
      </div>

      <ChannelSelectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="I have questions about how the cleaner process works"
      />
    </div>
  )
}