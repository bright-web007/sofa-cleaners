'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Cleaner } from '@/types'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/ChannelSelectModal'

interface CleanerProfileProps {
  cleaner: Cleaner
}

export function CleanerProfile({ cleaner }: CleanerProfileProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating)
            ? 'text-amber-400 fill-current'
            : index < rating
            ? 'text-amber-400 fill-current opacity-50'
            : 'text-gray-300'
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
        />
      </svg>
    ))
  }

  const handleQuoteClick = () => {
    setIsModalOpen(true)
  }

  const memberSinceYear = new Date(cleaner.memberSince).getFullYear()

  return (
    <>
      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#7B3FA0] to-[#9F4FC7] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <Image
                  src={cleaner.photo || '/images/placeholder-avatar.png'}
                  alt={`${cleaner.name} profile photo`}
                  width={120}
                  height={120}
                  className="rounded-full object-cover border-4 border-white/20"
                />
              </div>
              
              <div className="flex-1">
                <h1 className="text-3xl font-bold mb-2">{cleaner.name}</h1>
                <p className="text-xl text-white/90 mb-4">Sofa Cleaner in {cleaner.city}</p>
                
                {/* Badge row */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {cleaner.dbsVerified && (
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-green-100 text-green-800 rounded-full">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      DBS Checked
                    </span>
                  )}
                  {cleaner.insured && (
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                      Insured
                    </span>
                  )}
                  {cleaner.accredited && (
                    <span className="inline-flex items-center px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 rounded-full">
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Accredited
                    </span>
                  )}
                </div>
                
                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex items-center">
                    {renderStars(cleaner.rating)}
                  </div>
                  <span className="text-lg font-medium">{cleaner.rating}</span>
                  <span className="text-white/80">({cleaner.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{cleaner.reviewCount}</div>
                  <div className="text-sm text-gray-600">Reviews</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{memberSinceYear}</div>
                  <div className="text-sm text-gray-600">Member Since</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-gray-900">{cleaner.responseRate}%</div>
                  <div className="text-sm text-gray-600">Response Rate</div>
                </div>
                <div className="text-center p-4 bg-gray-50 rounded-lg">
                  <div className="text-2xl font-bold text-[#7B3FA0]">£{cleaner.hourlyRate}/hr</div>
                  <div className="text-sm text-gray-600">Starting From</div>
                </div>
              </div>

              {/* About Section */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">About {cleaner.name.split(' ')[0]}</h2>
                <p className="text-gray-700 leading-relaxed text-lg">{cleaner.bio}</p>
              </div>

              {/* Services */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Services Offered</h2>
                <div className="flex flex-wrap gap-2">
                  {cleaner.services.map((service, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 bg-[#F5F0FA] text-[#7B3FA0] rounded-full text-sm font-medium"
                    >
                      {service.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    </span>
                  ))}
                </div>
              </div>

              {/* Coverage Areas */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Coverage Areas</h2>
                <div className="flex flex-wrap gap-2">
                  {cleaner.areas.map((area, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar - Desktop sticky, Mobile bottom */}
            <div className="lg:col-span-1">
              {/* Desktop Sidebar */}
              <div className="hidden lg:block sticky top-8">
                <div className="bg-[#F5F0FA] border border-[#7B3FA0]/20 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    Request a quote from {cleaner.name.split(' ')[0]}
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Usually responds within 30 minutes</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Free, no-obligation quote</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                      <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Flexible scheduling available</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleQuoteClick}
                    className="w-full justify-center bg-[#7B3FA0] hover:bg-[#7B3FA0]/90"
                    size="lg"
                  >
                    Get Your Free Quote
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Bottom Bar */}
          <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 z-40">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-lg font-bold text-gray-900">From £{cleaner.hourlyRate}/hr</div>
                <div className="text-sm text-gray-600">Free quote • Quick response</div>
              </div>
              <Button
                onClick={handleQuoteClick}
                className="bg-[#7B3FA0] hover:bg-[#7B3FA0]/90"
                size="lg"
              >
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>

      <ChannelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cleanerName={cleaner.name}
        prefillMessage={`I'd like to request a quote for sofa cleaning services from you.`}
      />
    </>
  )
}