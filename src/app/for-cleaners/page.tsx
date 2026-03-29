'use client'

import { useState } from 'react'  
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'

export default function ForCleanersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const benefits = [
    {
      title: "No Cold Calling",
      description: "Customers come to you pre-qualified and ready to book. No more door knocking or cold outreach.",
      icon: "📞"
    },
    {
      title: "Admin Handled for You", 
      description: "We handle customer inquiries, quote collection, booking coordination, and follow-up communications.",
      icon: "📋"
    },
    {
      title: "Regular Work",
      description: "Consistent flow of cleaning jobs matched to your location, availability, and services.",
      icon: "🔄"
    },
    {
      title: "Great Earnings",
      description: "Keep 82% of every job. Average cleaners earn £50,000+ annually with consistent bookings.",
      icon: "💷"
    }
  ]

  const process = [
    {
      number: 1,
      title: "Apply",
      description: "Submit your application with DBS check, insurance details, and service areas"
    },
    {
      number: 2,
      title: "Get Verified", 
      description: "We verify your credentials, insurance, and conduct a quality standards review"
    },
    {
      number: 3,
      title: "Receive Jobs",
      description: "Start receiving customer requests matched to your location and services"
    }
  ]

  const requirements = [
    "Enhanced DBS check (within last 3 years)",
    "£1M+ public liability insurance",
    "UK-based with own transport",
    "Professional cleaning equipment",
    "Minimum 2 years cleaning experience",
    "Smartphone for communication"
  ]

  const faqs = [
    {
      question: "How much commission do you charge?",
      answer: "We take 18% commission only when you earn money from completed jobs. No monthly fees, no setup costs, no minimum commitments."
    },
    {
      question: "How many jobs will I get?",
      answer: "Job volume depends on your location and availability. Most active cleaners receive 15-25 job requests per month in major cities."
    },
    {
      question: "Do I need special equipment?",
      answer: "Yes, you'll need professional carpet/upholstery cleaning equipment. We can recommend suppliers if you need to upgrade your kit."
    },
    {
      question: "What areas do you cover?",
      answer: "We operate across England, Scotland, and Wales. We're particularly strong in major cities and surrounding areas."
    },
    {
      question: "How do payments work?",
      answer: "Customers pay you directly after job completion. We invoice you weekly for commission on completed jobs via direct debit."
    },
    {
      question: "Can I set my own prices?",
      answer: "Yes! You quote your own prices and keep full control over your rates. We provide market guidance but pricing is entirely your decision."
    },
    {
      question: "What if a customer isn't happy?",
      answer: "We work with you to resolve any issues. Our quality standards help prevent problems, and we provide support for difficult situations."
    },
    {
      question: "How quickly can I start?",
      answer: "Once approved, you can start receiving job requests immediately. The verification process typically takes 3-5 business days."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative bg-gray-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fdda9d8c6c0a?w=1200&h=800&fit=crop"
            alt="Professional cleaner at work"
            fill
            className="object-cover opacity-30"
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Get More Sofa Cleaning Jobs —<br />
            <span className="text-amber">Without the Admin</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Join 200+ cleaners earning £50,000+ annually through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-cleaners/join">
              <Button size="lg" variant="primary">
                Apply to Join
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost"
              onClick={() => setIsModalOpen(true)}
            >
              Learn More
            </Button>
          </div>
          
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-amber">200+</div>
              <div className="text-sm text-gray-400">Active Cleaners</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber">£50k+</div>
              <div className="text-sm text-gray-400">Avg. Annual Earnings</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber">18%</div>
              <div className="text-sm text-gray-400">Commission Only</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-amber">25+</div>
              <div className="text-sm text-gray-400">Cities Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* 3-Step Process */}
      <div className="py-16 bg-primary-light">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Getting Started Is Simple
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {process.map((step) => (
              <div key={step.number} className="text-center">
                <div className="bg-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose SofaCleaner?
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commission Structure */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Simple, Fair Commission
            </h2>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 mb-8">
              <div className="text-5xl font-bold text-primary mb-4">
                18%
              </div>
              <p className="text-xl text-gray-900 font-medium mb-2">
                Commission only when you earn
              </p>
              <p className="text-gray-600">
                No monthly fees • No setup costs • No minimum commitments
              </p>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 text-left">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-3">What's Included:</h3>
                <ul className="space-y-2 text-green-700 text-sm">
                  <li>• Customer acquisition & lead generation</li>
                  <li>• Booking coordination and scheduling</li>
                  <li>• Customer service and support</li>
                  <li>• Profile management and reviews</li>
                  <li>• Payment protection and dispute resolution</li>
                  <li>• Marketing and platform promotion</li>
                </ul>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-3">You Handle:</h3>
                <ul className="space-y-2 text-blue-700 text-sm">
                  <li>• Setting your own prices and quotes</li>
                  <li>• Providing excellent cleaning service</li>
                  <li>• Direct relationship with customers</li>
                  <li>• Professional equipment and supplies</li>
                  <li>• Scheduling and job completion</li>
                  <li>• Building your reputation</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Requirements to Join
          </h2>
          
          <div className="grid gap-4 md:grid-cols-2">
            {requirements.map((requirement, index) => (
              <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-lg">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-gray-700">
                  {requirement}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-6">
              Don't meet all requirements yet? We can help you get qualified.
            </p>
            <Button 
              onClick={() => setIsModalOpen(true)}
              variant="ghost"
            >
              Get Help with Requirements
            </Button>
          </div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="text-6xl mb-6">💬</div>
          <blockquote className="text-2xl font-medium mb-6">
            "I've doubled my monthly earnings since joining SofaCleaner. The steady flow of customers means I can plan my schedule and income months ahead."
          </blockquote>
          <div className="text-primary-light">
            <p className="font-medium">James Thompson</p>
            <p>Professional Cleaner, Manchester • Member since 2023</p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6">
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
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Grow Your Cleaning Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of successful cleaners earning more with less admin work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-cleaners/join">
              <Button size="lg" variant="primary">
                Apply Now
              </Button>
            </Link>
            <Button 
              size="lg" 
              variant="ghost"
              onClick={() => setIsModalOpen(true)}
            >
              Ask Questions
            </Button>
          </div>
        </div>
      </div>

      <ChannelSelectModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="I'm interested in joining as a cleaner and would like more information"
      />
    </div>
  )
}