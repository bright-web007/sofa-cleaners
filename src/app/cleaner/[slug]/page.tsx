import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { CleanerProfile } from '@/components/cleaner/CleanerProfile'
import { ReviewCard } from '@/components/cleaner/ReviewCard'

// Import data - these would normally come from API/database
import { Cleaner, Review } from '@/types'
import cleanersData from '@/lib/data/cleaners.json'
import reviewsData from '@/lib/data/reviews.json'

interface CleanerPageProps {
  params: {
    slug: string
  }
}

async function getCleanerData(slug: string): Promise<{ cleaner: Cleaner | null; reviews: Review[] }> {
  const cleaner = cleanersData.find((c: Cleaner) => c.slug === slug) || null
  const cleanerReviews = reviewsData.filter((r: Review) => r.cleanerId === cleaner?.id) || []
  
  return { cleaner, reviews: cleanerReviews }
}

export async function generateStaticParams() {
  return cleanersData.map((cleaner: Cleaner) => ({
    slug: cleaner.slug,
  }))
}

export async function generateMetadata({ params }: CleanerPageProps): Promise<Metadata> {
  const { cleaner } = await getCleanerData(params.slug)
  
  if (!cleaner) {
    return {
      title: 'Cleaner Not Found | SofaCleaner.org'
    }
  }

  return {
    title: `${cleaner.name} — Sofa Cleaner in ${cleaner.city} | SofaCleaner.org`,
    description: `${cleaner.name} - Professional sofa cleaner in ${cleaner.city}. ${cleaner.rating}/5 stars (${cleaner.reviewCount} reviews). From £${cleaner.hourlyRate}/hr. ${cleaner.dbsVerified ? 'DBS checked, ' : ''}${cleaner.insured ? 'Insured, ' : ''}Available ${cleaner.available ? 'now' : 'soon'}.`,
    openGraph: {
      title: `${cleaner.name} — Sofa Cleaner in ${cleaner.city}`,
      description: `Professional sofa cleaning from £${cleaner.hourlyRate}/hr. ${cleaner.rating}/5 stars with ${cleaner.reviewCount} reviews.`,
      type: 'profile',
      ...(cleaner.photo && { images: [{ url: cleaner.photo }] }),
    }
  }
}

export default async function CleanerPage({ params }: CleanerPageProps) {
  const { cleaner, reviews } = await getCleanerData(params.slug)

  if (!cleaner) {
    notFound()
  }

  // Calculate aggregate rating for structured data
  const avgRating = reviews.length > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : cleaner.rating

  return (
    <>
      <CleanerProfile cleaner={cleaner} />
      
      {/* Reviews Section */}
      <div className="bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Reviews for {cleaner.name.split(' ')[0]}
            </h2>
            <div className="flex items-center justify-center space-x-4">
              <div className="flex items-center">
                {Array.from({ length: 5 }, (_, index) => (
                  <svg
                    key={index}
                    className={`w-6 h-6 ${
                      index < Math.floor(avgRating)
                        ? 'text-amber-400 fill-current'
                        : index < avgRating
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
                ))}
              </div>
              <span className="text-xl font-semibold text-gray-900">
                {avgRating.toFixed(1)} out of 5
              </span>
              <span className="text-gray-600">
                ({reviews.length} review{reviews.length !== 1 ? 's' : ''})
              </span>
            </div>
          </div>

          {reviews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {reviews.map((review) => (
                <ReviewCard key={review.id} review={review} />
              ))}
            </div>
          ) : (
            <div className="text-center max-w-2xl mx-auto">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10m0 0V6a2 2 0 00-2-2H9a2 2 0 00-2 2v2m0 0v10a2 2 0 002 2h10a2 2 0 002-2V8M9 12h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                No reviews yet
              </h3>
              <p className="text-gray-600">
                {cleaner.name.split(' ')[0]} is new to our platform. Be the first to book and leave a review!
              </p>
            </div>
          )}

          {/* Additional Info Section */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Why choose {cleaner.name.split(' ')[0]}?
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Professional Credentials</h4>
                  <div className="space-y-2">
                    {cleaner.dbsVerified && (
                      <div className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        DBS background check completed
                      </div>
                    )}
                    {cleaner.insured && (
                      <div className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Fully insured for your peace of mind
                      </div>
                    )}
                    {cleaner.accredited && (
                      <div className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Industry accreditation verified
                      </div>
                    )}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Service Statistics</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Response Rate:</span>
                      <span className="font-medium">{cleaner.responseRate}%</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Member Since:</span>
                      <span className="font-medium">{new Date(cleaner.memberSince).getFullYear()}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Starting Rate:</span>
                      <span className="font-medium">£{cleaner.hourlyRate}/hour</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Availability:</span>
                      <span className={`font-medium ${cleaner.available ? 'text-green-600' : 'text-orange-600'}`}>
                        {cleaner.available ? 'Available now' : 'Booking ahead'}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Add some padding at bottom for mobile sticky bar */}
      <div className="lg:hidden h-20" />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            "name": cleaner.name,
            "jobTitle": "Professional Sofa Cleaner",
            "url": `https://sofacleaner.org/cleaner/${cleaner.slug}`,
            "image": cleaner.photo,
            "address": {
              "@type": "PostalAddress",
              "addressLocality": cleaner.city,
              "addressCountry": "UK"
            },
            "knowsAbout": cleaner.services,
            "serviceArea": cleaner.areas.map(area => ({
              "@type": "Place",
              "name": area
            }))
          })
        }}
      />

      {/* Aggregate Rating Structured Data */}
      {reviews.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AggregateRating",
              "itemReviewed": {
                "@type": "Person",
                "name": cleaner.name
              },
              "ratingValue": avgRating.toFixed(1),
              "reviewCount": reviews.length,
              "bestRating": "5",
              "worstRating": "1"
            })
          }}
        />
      )}
    </>
  )
}