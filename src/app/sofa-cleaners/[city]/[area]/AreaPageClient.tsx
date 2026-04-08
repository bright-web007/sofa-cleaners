'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'
import { CleanerGrid } from '@/components/sections/CleanerGrid'
import { WaitlistForm } from '@/components/cleaner/WaitlistForm'
import { Cleaner, City, Area } from '@/types'
import cleanersData from '@/lib/data/cleaners.json'

interface Props {
  city: City
  area: Area
  cleaners: Cleaner[]
}

export function AreaPageClient({ city, area, cleaners }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Get nearby areas (3 random areas from same city, excluding current area)
  const nearbyAreas = city.areas
    .filter(a => a.slug !== area.slug)
    .slice(0, 3)

  return (
    <>
      <div className="bg-white min-h-screen">
        {/* Breadcrumb */}
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex" aria-label="Breadcrumb">
              <ol className="flex items-center space-x-2 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-gray-700">
                    Home
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li>
                  <Link 
                    href={`/sofa-cleaners/${city.slug}`} 
                    className="text-gray-500 hover:text-gray-700"
                  >
                    {city.name}
                  </Link>
                </li>
                <li>
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                </li>
                <li>
                  <span className="text-gray-900 font-medium">{area.name}</span>
                </li>
              </ol>
            </nav>
          </div>
        </div>

        {/* Back to City Link */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href={`/sofa-cleaners/${city.slug}`}
            className="inline-flex items-center text-[#7B3FA0] hover:text-[#7B3FA0]/80 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to all {city.name} cleaners
          </Link>
        </div>

        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Sofa Cleaners in {area.name}, {city.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find professional sofa cleaning specialists in {area.name}. 
              All our cleaners are vetted, insured, and ready to restore your sofa to like-new condition.
            </p>
          </div>

          {/* Content based on cleaner availability */}
          {cleaners.length > 0 ? (
            <>
              {/* Results Count */}
              <div className="mb-8">
                <p className="text-gray-600 text-center">
                  <span className="font-semibold">{cleaners.length}</span> professional {cleaners.length === 1 ? 'cleaner' : 'cleaners'} available in {area.name}
                </p>
              </div>

              {/* Cleaners Grid */}
              <CleanerGrid cleaners={cleaners} className="mb-12" />

              {/* CTA Section */}
              <div className="text-center mb-12">
                <div className="bg-[#F5F0FA] rounded-lg p-8 max-w-2xl mx-auto">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    Need a quote for {area.name}?
                  </h2>
                  <p className="text-gray-700 mb-6">
                    Get instant quotes from verified sofa cleaners in your area. Most respond within 30 minutes.
                  </p>
                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="inline-flex items-center px-6 py-3 bg-[#7B3FA0] text-white font-medium rounded-lg hover:bg-[#7B3FA0]/90 transition-colors"
                  >
                    Get Free Quotes
                  </button>
                </div>
              </div>
            </>
          ) : (
            <>
              {/* No cleaners available */}
              <div className="mb-12">
                <WaitlistForm areaName={`${area.name}, ${city.name}`} />
              </div>

              <div className="text-center mb-12">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  In the meantime, explore nearby areas
                </h2>
                <p className="text-gray-600 mb-6">
                  Professional cleaners in these areas may also serve {area.name}.
                </p>
              </div>
            </>
          )}

          {/* Nearby Areas */}
          {nearbyAreas.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                {cleaners.length > 0 ? 'Other areas in ' + city.name : 'Nearby areas with available cleaners'}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {nearbyAreas.map((nearbyArea) => {
                  // Count cleaners in this nearby area
                  const areaCleanersCount = cleanersData.filter((cleaner: Cleaner) => {
                    const matchesCity = cleaner.city.toLowerCase() === city.name.toLowerCase()
                    const matchesArea = cleaner.areas.some(cleanerArea => 
                      cleanerArea.toLowerCase().replace(/ /g, '-') === nearbyArea.name.toLowerCase().replace(/ /g, '-')
                    )
                    return matchesCity && matchesArea
                  }).length

                  return (
                    <Link
                      key={nearbyArea.slug}
                      href={`/sofa-cleaners/${city.slug}/${nearbyArea.slug}`}
                      className="block p-6 bg-white border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#7B3FA0] transition-all duration-200"
                    >
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {nearbyArea.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {areaCleanersCount > 0 
                          ? `${areaCleanersCount} cleaner${areaCleanersCount === 1 ? '' : 's'} available`
                          : 'Join waitlist'
                        }
                      </p>
                      <div className="mt-3 text-[#7B3FA0] text-sm font-medium">
                        View cleaners →
                      </div>
                    </Link>
                  )
                })}
              </div>
            </div>
          )}

          {/* Local Info Section */}
          <div className="bg-gray-50 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Professional Sofa Cleaning in {area.name}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="w-12 h-12 bg-[#7B3FA0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Vetted Professionals</h3>
                <p className="text-gray-600 text-sm">All cleaners are background checked and fully insured</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#7B3FA0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600 text-sm">Most cleaners respond within 30 minutes</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-[#7B3FA0] rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Competitive Rates</h3>
                <p className="text-gray-600 text-sm">Fair, transparent pricing from £{city.avgPrice}/hr</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ChannelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityName={`${area.name}, ${city.name}`}
        prefillMessage={`I'm looking for sofa cleaning in ${area.name}, ${city.name}. Please provide a quote.`}
      />
    </>
  )
}
