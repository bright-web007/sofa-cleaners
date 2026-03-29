'use client'

import { useState, useMemo } from 'react'
import { CleanerGrid } from '@/components/CleanerGrid'
import { Cleaner, Service } from '@/types'
import cleanersData from '@/lib/data/cleaners.json'
import servicesData from '@/lib/data/services.json'

export default function FindACleanerPage() {
  const [cleaners] = useState<Cleaner[]>(cleanersData)
  const [services] = useState<Service[]>(servicesData)
  
  // Filter states
  const [searchPostcode, setSearchPostcode] = useState('')
  const [selectedService, setSelectedService] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [availableNow, setAvailableNow] = useState(false)

  // Get unique cities from cleaners
  const cities = useMemo(() => {
    const uniqueCities = Array.from(new Set(cleaners.map(c => c.city)))
    return uniqueCities.sort()
  }, [cleaners])

  // Filter cleaners based on current filters
  const filteredCleaners = useMemo(() => {
    return cleaners.filter(cleaner => {
      // Postcode search (basic implementation - could be enhanced)
      if (searchPostcode && !cleaner.areas.some(area => 
        area.toLowerCase().includes(searchPostcode.toLowerCase()) ||
        cleaner.city.toLowerCase().includes(searchPostcode.toLowerCase())
      )) {
        return false
      }

      // Service filter
      if (selectedService && !cleaner.services.includes(selectedService)) {
        return false
      }

      // City filter
      if (selectedCity && cleaner.city !== selectedCity) {
        return false
      }

      // Available now filter
      if (availableNow && !cleaner.available) {
        return false
      }

      return true
    })
  }, [cleaners, searchPostcode, selectedService, selectedCity, availableNow])

  const handleClearFilters = () => {
    setSearchPostcode('')
    setSelectedService('')
    setSelectedCity('')
    setAvailableNow(false)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Find a Sofa Cleaner Near You
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Browse verified professional cleaners in your area
          </p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="py-8 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-end">
            {/* Postcode Search */}
            <div className="flex-1">
              <label htmlFor="postcode" className="block text-sm font-medium text-gray-700 mb-2">
                Postcode or Area
              </label>
              <input
                type="text"
                id="postcode"
                value={searchPostcode}
                onChange={(e) => setSearchPostcode(e.target.value)}
                placeholder="e.g. M1, Manchester, City Centre"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Service Filter */}
            <div className="flex-1">
              <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                Service Needed
              </label>
              <select
                id="service"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Services</option>
                {services.map(service => (
                  <option key={service.id} value={service.id}>
                    {service.name}
                  </option>
                ))}
              </select>
            </div>

            {/* City Filter */}
            <div className="flex-1">
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <select
                id="city"
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              >
                <option value="">All Cities</option>
                {cities.map(city => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>

            {/* Available Now Checkbox */}
            <div className="flex items-center h-[42px]">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={availableNow}
                  onChange={(e) => setAvailableNow(e.target.checked)}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 whitespace-nowrap">
                  Available now
                </span>
              </label>
            </div>
          </div>

          {/* Results info and clear filters */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="text-sm text-gray-600">
              Showing <span className="font-medium">{filteredCleaners.length}</span> cleaner{filteredCleaners.length !== 1 ? 's' : ''}
              {(searchPostcode || selectedService || selectedCity || availableNow) && (
                <span> matching your criteria</span>
              )}
            </div>
            
            {(searchPostcode || selectedService || selectedCity || availableNow) && (
              <button
                onClick={handleClearFilters}
                className="text-sm text-primary hover:text-primary/80 font-medium"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Cleaners Grid */}
      <div className="py-12">
        <div className="max-w-6xl mx-auto px-4">
          <CleanerGrid cleaners={filteredCleaners} />
        </div>
      </div>

      {/* No Results State */}
      {filteredCleaners.length === 0 && (
        <div className="py-16">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <div className="text-gray-400 text-6xl mb-4">🔍</div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              No cleaners found
            </h2>
            <p className="text-gray-600 mb-8">
              Try adjusting your search criteria or browse all cleaners
            </p>
            <button
              onClick={handleClearFilters}
              className="bg-primary text-white px-6 py-3 rounded hover:bg-primary/90 transition-colors"
            >
              View All Cleaners
            </button>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="bg-primary-light py-12">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can't Find the Right Cleaner?
          </h2>
          <p className="text-gray-600 mb-6">
            Message us and we'll find verified cleaners in your specific area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/447123456789?text=Hi%21%20I%27m%20looking%20for%20sofa%20cleaners%20in%20my%20area."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-whatsapp text-white px-6 py-3 rounded font-medium hover:bg-whatsapp/90 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.097"/>
              </svg>
              WhatsApp Us
            </a>
            <a
              href="https://t.me/sofacleaner"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 text-white px-6 py-3 rounded font-medium hover:bg-blue-600 transition-colors inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="m9.417 15.181-.397-.221c-.478-.26-.945-.564-1.384-.85l-.735-.487-.862-.578-.646-.436c-.238-.164-.45-.312-.625-.448-.302-.234-.564-.403-.746-.552a2.95 2.95 0 01-.26-.196l.11-.296c.097-.261.225-.535.366-.822.071-.145.146-.295.223-.448.118-.235.248-.484.394-.748.235-.427.506-.899.822-1.408l.024-.038c.15-.243.307-.494.472-.748.165-.254.338-.507.518-.757.36-.5.747-.977 1.153-1.421a10.91 10.91 0 011.319-1.251c.473-.377.974-.708 1.496-.996.26-.144.53-.274.81-.39a7.15 7.15 0 01.85-.33c.282-.095.574-.174.876-.238.604-.128 1.232-.178 1.873-.15.32.014.642.05.965.106a7.74 7.74 0 011.004.224c.334.1.666.227.996.382.33.155.656.34.977.554.321.214.636.458.943.731.307.273.602.576.882.909.14.167.276.342.407.525.263.366.497.758.7 1.174.203.416.37.856.499 1.317.129.461.22.94.272 1.435.052.495.066 1.005.041 1.529-.025.524-.108 1.062-.248 1.613a11.53 11.53 0 01-.495 1.655c-.194.54-.438 1.067-.73 1.577-.146.255-.304.503-.472.744-.336.482-.718.927-1.144 1.33-.426.403-.895.765-1.404 1.082-.254.158-.517.305-.788.441-.271.136-.551.26-.838.372-.287.112-.582.212-.883.299-.301.087-.609.161-.923.221-.628.12-1.276.178-1.943.172a12.17 12.17 0 01-2.044-.176c-.683-.118-1.368-.302-2.048-.55-.34-.124-.677-.264-1.008-.42-.331-.156-.656-.328-.973-.516-.634-.376-1.239-.817-1.808-1.318-.284-.251-.558-.517-.82-.8-.131-.141-.259-.287-.383-.438-.248-.302-.476-.623-.683-.962a8.9 8.9 0 01-.514-1.076c-.131-.374-.233-.762-.306-1.164-.073-.402-.117-.818-.132-1.247-.015-.429.001-.87.048-1.322.047-.452.125-.916.234-1.392.109-.476.25-.964.422-1.463.172-.499.376-.048.611-1.538.117-.305.248-.61.393-.916.145-.306.304-.612.477-.918.173-.306.36-.612.561-.917.201-.305.416-.609.644-.912l.115-.152c.366-.48.766-.94 1.198-1.378.432-.438.897-.854 1.393-1.247.248-.196.505-.385.77-.567.265-.182.538-.357.819-.525.281-.168.571-.329.869-.483.298-.154.604-.301.918-.441.314-.14.636-.273.965-.399.329-.126.665-.245 1.008-.357.343-.112.693-.217 1.05-.315.357-.098.721-.189 1.091-.273.37-.084.746-.161 1.128-.231.382-.07.769-.133 1.161-.189.392-.056.788-.105 1.188-.147.4-.042.804-.077 1.211-.105.407-.028.817-.049 1.229-.063.412-.014.826-.021 1.242-.021s.83.007 1.242.021c.412.014.822.035 1.229.063.407.028.811.063 1.211.105.4.042.796.091 1.188.147.392.056.779.119 1.161.189.382.07.758.147 1.128.231.37.084.734.175 1.091.273.357.098.707.203 1.05.315.343.112.679.231 1.008.357.329.126.651.259.965.399.314.14.62.287.918.441.298.154.588.315.869.483.281.168.554.343.819.525.265.182.522.371.77.567.496.393.961.809 1.393 1.247.432.438.832.898 1.198 1.378l.115.152c.228.303.443.607.644.912.201.305.388.611.561.917.173.306.332.612.477.918.145.306.276.611.393.916.234.61.438 1.039.611 1.538.086.25.161.5.225.75.128.5.226.999.294 1.499.068.5.106.999.114 1.497.008.498-.014.995-.066 1.49-.052.495-.143.974-.272 1.435-.129.461-.296.901-.499 1.317-.203.416-.437.808-.7 1.174-.131.183-.267.358-.407.525-.28.333-.575.636-.882.909-.307.273-.622.517-.943.731-.321.214-.647.399-.977.554-.33.155-.662.282-.996.382a7.74 7.74 0 01-1.004.224c-.323.056-.645.092-.965.106-.641.028-1.269-.022-1.873-.15-.302-.064-.594-.143-.876-.238a7.15 7.15 0 01-.85-.33c-.28-.116-.55-.246-.81-.39-.522-.288-1.023-.619-1.496-.996a10.91 10.91 0 01-1.319-1.251c-.406-.444-.793-.921-1.153-1.421-.18-.25-.353-.503-.518-.757-.165-.254-.322-.505-.472-.748l-.024-.038c-.316-.509-.587-.981-.822-1.408-.146-.264-.276-.513-.394-.748-.077-.153-.152-.303-.223-.448-.141-.287-.269-.561-.366-.822l-.11-.296c-.041-.11-.074-.22-.099-.33-.05-.22-.075-.44-.075-.66 0-.44.08-.88.24-1.32.16-.44.400-.86.720-1.26.32-.4.720-.780 1.2-1.14.48-.36 1.04-.7 1.68-1.02l.24-.12c.8-.4 1.68-.72 2.64-.96.48-.12.98-.2 1.5-.24.52-.04 1.06-.04 1.6 0 .54.04 1.08.12 1.6.24.52.08 1.02.2 1.5.36.48.16.94.36 1.38.6.44.24.86.52 1.26.84.4.32.78.68 1.14 1.08.36.4.7.84 1.02 1.32.32.48.62 1 .9 1.56.28.56.54 1.16.78 1.8.24.64.46 1.32.66 2.04.2.72.38 1.48.54 2.28.16.8.3 1.64.42 2.52.12.88.22 1.8.3 2.76.08.96.14 1.96.18 3s.06 2.12.06 3.24c0 1.12-.02 2.28-.06 3.48s-.1 2.44-.18 3.72c-.08.96-.18 1.88-.3 2.76-.12.88-.26 1.72-.42 2.52-.16.8-.34 1.56-.54 2.28-.2.72-.42 1.4-.66 2.04-.24.64-.5 1.24-.78 1.8-.28.56-.58 1.08-.9 1.56-.32.48-.66.92-1.02 1.32-.36.4-.74.76-1.14 1.08-.4.32-.82.6-1.26.84-.44.24-.9.44-1.38.6-.48.16-.98.28-1.5.36-.52.12-1.06.2-1.6.24s-1.08.04-1.6 0c-.52-.04-1.02-.12-1.5-.24-.96-.24-1.84-.56-2.64-.96l-.24-.12c-.64-.32-1.2-.66-1.68-1.02-.48-.36-.88-.74-1.2-1.14-.32-.4-.56-.82-.72-1.26-.16-.44-.24-.88-.24-1.32z"/>
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}