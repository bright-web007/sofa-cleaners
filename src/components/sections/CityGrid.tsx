import Link from 'next/link'
import citiesData from '@/lib/data/cities.json'

export function CityGrid() {
  // Get top 12 cities by cleaner count
  const topCities = citiesData
    .sort((a, b) => b.cleanerCount - a.cleanerCount)
    .slice(0, 12)

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Find a cleaner in your city
          </h2>
          <p className="text-xl text-gray-600">
            Professional sofa cleaning across the UK
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {topCities.map((city) => (
            <Link
              key={city.id}
              href={`/sofa-cleaners/${city.slug}`}
              className="bg-white rounded-lg p-4 lg:p-6 shadow-sm hover:shadow-md transition-all hover:-translate-y-1 group"
            >
              <div className="text-center">
                <h3 className="font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                  {city.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {city.cleanerCount} {city.cleanerCount === 1 ? 'cleaner' : 'cleaners'}
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  from £{city.avgPrice}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/find-a-cleaner"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary bg-primary-light hover:bg-primary hover:text-white transition-colors"
          >
            View all cities
          </Link>
        </div>
      </div>
    </section>
  )
}