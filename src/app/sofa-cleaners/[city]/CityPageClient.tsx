'use client'

import { useState } from 'react'
import { Cleaner, City, Service } from '@/types'
import { CleanerGrid } from '@/components/sections/CleanerGrid'
import { HowItWorks } from '@/components/sections/HowItWorks'
import { FAQSection } from '@/components/sections/FAQSection'
import { Button } from '@/components/ui/Button'
import { Select } from '@/components/ui/Select'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'
import { JsonLd } from '@/components/JsonLd'
import Link from 'next/link'
import servicesData from '@/lib/data/services.json'

interface CityPageClientProps {
  city: City
  cleaners: Cleaner[]
}

export function CityPageClient({ city, cleaners }: CityPageClientProps) {
  const [filteredCleaners, setFilteredCleaners] = useState<Cleaner[]>(cleaners)
  const [selectedArea, setSelectedArea] = useState<string>('all')
  const [selectedService, setSelectedService] = useState<string>('all')
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleAreaFilter = (areaSlug: string) => {
    setSelectedArea(areaSlug)
    applyFilters(areaSlug, selectedService)
  }

  const handleServiceFilter = (serviceSlug: string) => {
    setSelectedService(serviceSlug)
    applyFilters(selectedArea, serviceSlug)
  }

  const applyFilters = (areaSlug: string, serviceSlug: string) => {
    let filtered = [...cleaners]

    if (areaSlug !== 'all') {
      const areaName = city.areas.find(a => a.slug === areaSlug)?.name
      if (areaName) {
        filtered = filtered.filter(cleaner => 
          cleaner.areas.includes(areaName)
        )
      }
    }

    if (serviceSlug !== 'all') {
      const service = servicesData.find((s: Service) => s.slug === serviceSlug)
      if (service) {
        filtered = filtered.filter(cleaner =>
          cleaner.services.some(s => s === service.slug)
        )
      }
    }

    setFilteredCleaners(filtered)
  }

  const citySchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `SofaCleaner - ${city.name}`,
    "description": `Professional sofa cleaning services in ${city.name}. ${city.cleanerCount} verified cleaners available.`,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city.name,
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "addressCountry": "GB"
    },
    "url": `https://sofacleaner.org/sofa-cleaners/${city.slug}`,
    "containsPlace": city.areas.map(area => ({
      "@type": "Place", 
      "name": area.name,
      "url": `https://sofacleaner.org/sofa-cleaners/${city.slug}/${area.slug}`
    }))
  }

  const faqData = [
    {
      question: `How much does sofa cleaning cost in ${city.name}?`,
      answer: `Sofa cleaning in ${city.name} typically costs between £${Math.max(25, city.avgPrice - 10)} and £${city.avgPrice + 15} per sofa, depending on size, fabric type, and cleaning method required.`
    },
    {
      question: `How quickly can I get my sofa cleaned in ${city.name}?`,
      answer: `Most of our cleaners in ${city.name} can provide same-day or next-day service. We'll connect you with available cleaners within 2 hours of your inquiry.`
    },
    {
      question: `Are all cleaners in ${city.name} DBS checked?`,
      answer: `Yes, every cleaner on our platform is DBS checked and carries comprehensive insurance. We verify all credentials before they join our network.`
    },
    {
      question: `What areas of ${city.name} do you cover?`,
      answer: `We cover all areas of ${city.name} including ${city.areas.slice(0, 3).map(a => a.name).join(', ')} and surrounding areas.`
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <JsonLd data={citySchema} />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-600 to-purple-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Sofa Cleaners in {city.name}
          </h1>
          <p className="text-xl mb-8 text-purple-100">
            {city.cleanerCount} verified professionals ready to clean your sofa. 
            From £{city.avgPrice}/sofa with {city.completedJobs}+ satisfied customers across {city.name}.
          </p>
          
          {/* Trust Bar */}
          <div className="flex flex-wrap gap-4 mb-8">
            <div className="bg-purple-700 px-4 py-2 rounded-full">
              ✓ {city.cleanerCount} Local Cleaners
            </div>
            <div className="bg-purple-700 px-4 py-2 rounded-full">
              ✓ {city.completedJobs}+ Cleans Completed
            </div>
            <div className="bg-purple-700 px-4 py-2 rounded-full">
              ✓ From £{city.avgPrice}/sofa
            </div>
            <div className="bg-purple-700 px-4 py-2 rounded-full">
              ⭐ 4.9 Average Rating
            </div>
          </div>

          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-amber-500 hover:bg-amber-600 text-black font-semibold"
          >
            Get Free Quote
          </Button>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 mb-8">
          <div className="flex-1 min-w-48">
            <Select
              label="Filter by Area"
              value={selectedArea}
              onChange={(event) => handleAreaFilter(event.target.value)}
              options={[
                { value: 'all', label: 'All Areas' },
                ...city.areas.map(area => ({
                  value: area.slug,
                  label: area.name
                }))
              ]}
            />
          </div>
          
          <div className="flex-1 min-w-48">
            <Select
              label="Filter by Service"
              value={selectedService}
              onChange={(event) => handleServiceFilter(event.target.value)}
              options={[
                { value: 'all', label: 'All Services' },
                ...servicesData.map((service: Service) => ({
                  value: service.slug,
                  label: service.name
                }))
              ]}
            />
          </div>
        </div>

        {/* Results count */}
        <p className="text-gray-600 mb-8">
          Showing {filteredCleaners.length} of {cleaners.length} cleaners in {city.name}
        </p>

        {/* Cleaners Grid */}
        <CleanerGrid cleaners={filteredCleaners} />
      </section>

      {/* Areas Grid */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold mb-8">Areas we cover in {city.name}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {city.areas.map(area => (
            <Link
              key={area.slug}
              href={`/sofa-cleaners/${city.slug}/${area.slug}`}
              className="bg-gray-50 p-4 rounded-lg hover:bg-purple-50 hover:border-purple-200 border transition-colors"
            >
              <h3 className="font-semibold text-purple-700">{area.name}</h3>
              <p className="text-sm text-gray-600">View cleaners</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Services in {city.name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {servicesData.slice(0, 6).map((service: Service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="bg-white p-4 rounded-lg hover:shadow-md transition-shadow"
              >
                <h3 className="font-semibold text-purple-700 mb-2">
                  {service.name} {city.name}
                </h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <HowItWorks />

      {/* FAQ */}
      <FAQSection faqs={faqData} />

      {/* CTA Section */}
      <section className="bg-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to get your sofa cleaned in {city.name}?
          </h2>
          <p className="text-xl mb-8 text-purple-100">
            Get connected with verified local cleaners in minutes
          </p>
          <Button 
            onClick={() => setIsModalOpen(true)}
            size="lg"
            className="bg-white text-purple-600 hover:bg-gray-100 font-semibold"
          >
            Get Free Quote
          </Button>
        </div>
      </section>

      <ChannelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={`Hi, I'm looking for a sofa cleaner in ${city.name}`}
      />
    </div>
  )
}
