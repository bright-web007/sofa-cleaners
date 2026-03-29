import reviewsData from '@/lib/data/reviews.json'

export function ReviewCarousel() {
  // Create multiple copies of reviews for seamless scrolling
  const extendedReviews = [...reviewsData, ...reviewsData, ...reviewsData]

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))
  }

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            What our customers say
          </h2>
          <p className="text-xl text-gray-600">
            Real reviews from real customers
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Carousel Track */}
          <div className="flex animate-scroll gap-6">
            {extendedReviews.map((review, index) => (
              <div
                key={`${review.id}-${index}`}
                className="bg-gray-50 rounded-lg p-6 min-w-[300px] md:min-w-[360px] flex-shrink-0"
              >
                {/* Stars */}
                <div className="flex mb-3">
                  {renderStars(review.rating)}
                </div>
                
                {/* Review Text */}
                <p className="text-gray-700 mb-4 leading-relaxed">
                  "{review.body}"
                </p>
                
                {/* Customer Info */}
                <div className="flex items-center justify-between text-sm text-gray-600">
                  <span className="font-medium">{review.customerName}</span>
                  <span>{review.customerCity}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Gradient Overlays */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  )
}