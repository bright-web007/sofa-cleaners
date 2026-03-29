'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'
import { JsonLd } from '@/components/JsonLd'
import { Accordion } from '@/components/ui/Accordion'
import services from '@/lib/data/services.json'

export default function ServicePageClient({ service }: { service: typeof services[0] }) {
  const [showModal, setShowModal] = useState(false)

  // Get related services (exclude current service)
  const relatedServices = services
    .filter((s) => s.slug !== service.slug)
    .slice(0, 2)

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": service.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "provider": {
      "@type": "Organization",
      "name": "SofaCleaner.org",
      "url": "https://sofacleaner.org"
    },
    "areaServed": {
      "@type": "Country",
      "name": "United Kingdom"
    },
    "offers": {
      "@type": "Offer",
      "description": service.name,
      "priceRange": service.priceRange
    }
  }

  const prefillMessage = "Hi, I am interested in " + service.name + " service. Could you please provide me with a quote and availability?"

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          {/* Breadcrumbs */}
          <nav className="mb-8" aria-label="Breadcrumb">
            <ol className="flex items-center space-x-2 text-sm text-gray-500">
              <li>
                <Link href="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/services" className="hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>/</li>
              <li className="text-gray-900 font-medium">{service.name}</li>
            </ol>
          </nav>

          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {service.headline}
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              {service.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={() => setShowModal(true)}
                size="lg"
                className="bg-primary hover:bg-primary/90"
              >
                Get Free Quote
              </Button>
              <div className="flex items-center justify-center text-gray-600">
                <span className="font-semibold text-primary text-lg">{service.priceRange}</span>
                <span className="ml-2">per sofa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="space-y-16">
          {/* What It Involves */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What It Involves</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="whitespace-pre-line">{service.whyPro}</p>
            </div>
          </section>

          {/* Why Professional Cleaning */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Choose Professional Cleaning?</h2>
            <div className="bg-white rounded-lg p-8 border border-gray-200">
              <div className="prose prose-lg text-gray-600">
                <p className="whitespace-pre-line">{service.whyPro}</p>
              </div>
            </div>
          </section>

          {/* What to Expect */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What to Expect on the Day</h2>
            <div className="bg-primary/5 rounded-lg p-8 border border-primary/20">
              <div className="prose prose-lg text-gray-700">
                <p className="whitespace-pre-line">{service.whatToExpect}</p>
              </div>
            </div>
          </section>

          {/* Mid-page CTA */}
          <section className="bg-white rounded-lg p-8 border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Book Your {service.name}?
            </h3>
            <p className="text-gray-600 mb-6">
              Get your free quote in under 2 minutes. Professional service guaranteed.
            </p>
            <Button
              onClick={() => setShowModal(true)}
              size="lg"
              className="bg-primary hover:bg-primary/90"
            >
              Get Free Quote - {service.priceRange}
            </Button>
          </section>

          {/* Pricing Section */}
          <section>
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Pricing Information</h2>
            <div className="bg-amber/10 rounded-lg p-8 border border-amber/30">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 bg-amber/20 rounded-full p-3">
                  <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Price Range</h3>
                  <p className="text-gray-600 whitespace-pre-line">{service.priceRange}</p>
                </div>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          {service.faqs.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h2>
              <div className="space-y-4">
                <Accordion items={service.faqs} />
              </div>
            </section>
          )}

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Related Services</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {relatedServices.map((relatedService) => (
                  <div key={relatedService.id} className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      <Link 
                        href={`/services/${relatedService.slug}`}
                        className="hover:text-primary transition-colors"
                      >
                        {relatedService.name}
                      </Link>
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {relatedService.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-primary">{relatedService.priceRange.split(' ')[0]}</span>
                      <Link 
                        href={`/services/${relatedService.slug}`}
                        className="text-primary font-medium hover:text-primary/80 transition-colors"
                      >
                        Learn more →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Final CTA */}
          <section className="bg-primary rounded-lg p-8 text-center text-white">
            <h2 className="text-3xl font-bold mb-4">
              Book Your {service.name} Today
            </h2>
            <p className="text-primary-light mb-6 text-lg">
              Professional service, guaranteed results, transparent pricing
            </p>
            <Button
              onClick={() => setShowModal(true)}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Get Free Quote
            </Button>
          </section>
        </div>
      </div>

      {/* Channel Select Modal */}
      <ChannelSelectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        message={prefillMessage}
      />

      {/* JSON-LD Schemas */}
      <JsonLd data={faqSchema} />
      <JsonLd data={serviceSchema} />
    </div>
  )
}