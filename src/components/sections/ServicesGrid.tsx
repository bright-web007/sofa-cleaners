import Link from 'next/link'
import servicesData from '@/lib/data/services.json'

export function ServicesGrid() {
  // Get the first 5 services for the homepage
  const displayServices = servicesData.slice(0, 5)

  const getServiceIcon = (slug: string) => {
    switch (slug) {
      case 'fabric-sofa-cleaning':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21,14V12H19V9A1,1 0 0,0 18,8H17V7A1,1 0 0,0 16,6H8A1,1 0 0,0 7,7V8H6A1,1 0 0,0 5,9V12H3V14A1,1 0 0,0 2,15V19A1,1 0 0,0 3,20H21A1,1 0 0,0 22,19V15A1,1 0 0,0 21,14M9,8H15V12H9V8M7,10H8V12H7V10M17,10H18V12H17V10Z"/>
          </svg>
        )
      case 'leather-sofa-cleaning':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M21,12V6H19V4A1,1 0 0,0 18,3H6A1,1 0 0,0 5,4V6H3V12A1,1 0 0,0 2,13V17A1,1 0 0,0 3,18H21A1,1 0 0,0 22,17V13A1,1 0 0,0 21,12M7,5H17V10H7V5Z"/>
          </svg>
        )
      case 'stain-removal':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6,14A1,1 0 0,1 7,15A1,1 0 0,1 6,16A5,5 0 0,1 1,11A1,1 0 0,1 2,10A1,1 0 0,1 3,11A3,3 0 0,0 6,14M6.5,10L8.5,8L16.84,16.34C17.75,17.25 17.75,18.75 16.84,19.66C15.93,20.57 14.43,20.57 13.53,19.66L5.19,11.31L7.19,9.31L6.5,10M10.88,3.53C12.75,1.66 15.84,1.66 17.71,3.53L20.47,6.29C22.34,8.16 22.34,11.25 20.47,13.12L18.47,15.12L8.88,5.53L10.88,3.53Z"/>
          </svg>
        )
      case 'velvet-sofa-cleaning':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12,7.77L18.39,18H5.61L12,7.77M12,4L2,20H22L12,4Z"/>
          </svg>
        )
      case 'end-of-tenancy':
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M10,20V14H14V20H19V12H22L12,3L2,12H5V20H10Z"/>
          </svg>
        )
      default:
        return (
          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3Z"/>
          </svg>
        )
    }
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our cleaning services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Professional cleaning for all sofa types and fabrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* First 3 services in top row */}
          {displayServices.slice(0, 3).map((service) => (
            <div key={service.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                <div className="text-primary">
                  {getServiceIcon(service.slug)}
                </div>
                <h3 className="ml-3 text-lg font-semibold text-gray-900">
                  {service.name}
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Learn more →
              </Link>
            </div>
          ))}

          {/* Last 2 services in bottom row, centered */}
          <div className="md:col-span-2 lg:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
              {displayServices.slice(3, 5).map((service) => (
                <div key={service.id} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="text-primary">
                      {getServiceIcon(service.slug)}
                    </div>
                    <h3 className="ml-3 text-lg font-semibold text-gray-900">
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-primary font-medium hover:text-primary/80 transition-colors"
                  >
                    Learn more →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}