'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Cleaner } from '@/types'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/ChannelSelectModal'

interface CleanerCardProps {
  cleaner: Cleaner
}

export function CleanerCard({ cleaner }: CleanerCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <svg
        key={index}
        className={`w-4 h-4 ${
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

  return (
    <>
      <div className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">
        <div className="flex items-start space-x-4 mb-4">
          <div className="flex-shrink-0">
            <Image
              src={cleaner.photo || '/images/placeholder-avatar.png'}
              alt={`${cleaner.name} profile photo`}
              width={80}
              height={80}
              className="rounded-full object-cover"
            />
          </div>
          
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 truncate">
                  {cleaner.name}
                </h3>
                <p className="text-sm text-gray-600">{cleaner.city}</p>
              </div>
              
              <div className="flex items-center space-x-1 ml-2">
                {renderStars(cleaner.rating)}
                <span className="text-sm text-gray-600 ml-1">
                  ({cleaner.reviewCount})
                </span>
              </div>
            </div>
            
            {/* Badges */}
            <div className="flex flex-wrap gap-1 mt-2">
              {cleaner.dbsVerified && (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded-full">
                  DBS Checked
                </span>
              )}
              {cleaner.insured && (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  Insured
                </span>
              )}
              {cleaner.accredited && (
                <span className="inline-flex items-center px-2 py-1 text-xs font-medium bg-purple-100 text-purple-800 rounded-full">
                  Accredited
                </span>
              )}
            </div>
          </div>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="text-lg font-bold text-gray-900">
            From £{cleaner.hourlyRate}/hr
          </div>
          
          <div className="flex items-center">
            <div className={`w-2 h-2 rounded-full mr-2 ${
              cleaner.available ? 'bg-green-500' : 'bg-gray-400'
            }`} />
            <span className={`text-sm ${
              cleaner.available ? 'text-green-700' : 'text-gray-500'
            }`}>
              {cleaner.available ? 'Available' : 'Busy'}
            </span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Link
            href={`/cleaner/${cleaner.slug}`}
            className="flex-1"
          >
            <Button
              variant="outline" 
              className="w-full justify-center"
              size="sm"
            >
              View Profile
            </Button>
          </Link>
          
          <Button
            onClick={handleQuoteClick}
            className="flex-1 justify-center bg-[#7B3FA0] hover:bg-[#7B3FA0]/90"
            size="sm"
          >
            Get Quote
          </Button>
        </div>
      </div>

      <ChannelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cleanerName={cleaner.name}
        prefillMessage={`I'd like to request a quote for sofa cleaning services.`}
      />
    </>
  )
}