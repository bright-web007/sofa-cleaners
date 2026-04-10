'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import CleanerBg from '@/assests/CleanerBg.png'
import TestimonialImage from '@/assests/Testimonialprofile.png'
import { PhoneCall, ClipboardList, RefreshCw, Banknote } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import ImageComponent from '@/components/ui/ImageComponent'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'

export default function ForCleanersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const benefits = [
    {
      title: "No Cold Calling",
      description: "Customers come to you pre-qualified and ready to book. No more door knocking or cold outreach.",
      icon: PhoneCall
    },
    {
      title: "Admin Handled for You",
      description: "We handle customer inquiries, quote collection, booking coordination, and follow-up communications.",
      icon: ClipboardList
    },
    {
      title: "Regular Work",
      description: "Consistent flow of cleaning jobs matched to your location, availability, and services.",
      icon: RefreshCw
    },
    {
      title: "Great Earnings",
      description: "Keep 82% of every job. Average cleaners earn £50,000+ annually with consistent bookings.",
      icon: Banknote
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
          <ImageComponent
            src={CleanerBg}
            alt="Sofa cleaning background"
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 z-[1] bg-[#111827B2]" />
        <div className="relative max-w-4xl mx-auto px-4 text-center z-10">
          <h1 className="text-5xl text-white font-bold mb-6">
            Get More Sofa Cleaning Jobs —<br />
            <span className="text-amber">Without the Admin</span>
          </h1>
          <p className="text-xl mb-8 text-gray-300">
            Join 200+ cleaners earning £50,000+ annually through our platform
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-cleaners/join"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 whitespace-nowrap bg-amber-300 text-base font-semibold text-slate-950 hover:!text-slate-950 hover:!bg-amber-400 hover:no-underline">
              Apply to Join
            </Link>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFFFFF40] text-white"
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
                <div className="bg-primary text-[#000000] w-16 mb-3 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-[#111827] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#4B5563] text-md">
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
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                  <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-white mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {benefit.description}
                  </p>
                </div>
              )
            })}
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
      <div className="bg-primary text-white py-16 flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center flex flex-col gap-6 items-center justify-center">
          <ImageComponent src={TestimonialImage} alt="Sofa cleaning background" width={100} height={100} className="h-[100px] w-[100px] rounded-full object-cover" />
          <blockquote className="text-2xl text-[#020617] font-medium mb-2">
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
              <div key={index} className="rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
                <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
                <p className="mt-2 text-base text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 text-white py-16 pb-[100px]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl text-white font-bold mb-4">
            Ready to Grow Your Cleaning Business?
          </h2>
          <p className="text-xl text-[#D1D5DB] mb-8">
            Join hundreds of successful cleaners earning more with less admin work
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-cleaners/join"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 whitespace-nowrap bg-amber-300 text-base font-semibold text-slate-950 hover:!text-slate-950 hover:!bg-amber-400 hover:no-underline">
              Apply Now
            </Link>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFFFFF40] text-white"
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