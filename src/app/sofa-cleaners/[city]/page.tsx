import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { CityPageClient } from './CityPageClient'

// Import data - these would normally come from API/database
import { Cleaner, City } from '@/types'
import cleanersData from '@/lib/data/cleaners.json'
import citiesData from '@/lib/data/cities.json'

interface CityPageProps {
  params: {
    city: string
  }
}

async function getCityData(citySlug: string): Promise<{ city: City | null; cleaners: Cleaner[] }> {
  const city = citiesData.find((c: City) => c.slug === citySlug) || null
  const cityCleaners = cleanersData.filter((cleaner: Cleaner) => 
    cleaner.city.toLowerCase() === city?.name.toLowerCase()
  )
  
  return { city, cleaners: cityCleaners }
}

export async function generateStaticParams() {
  return citiesData.map((city: City) => ({
    city: city.slug,
  }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const { city } = await getCityData(params.city)
  
  if (!city) {
    return {
      title: 'City Not Found | SofaCleaner.org'
    }
  }

  return {
    title: `Sofa Cleaners in ${city.name} | SofaCleaner.org`,
    description: `Find professional sofa cleaners in ${city.name}. ${city.cleanerCount}+ vetted cleaners, ${city.completedJobs}+ jobs completed. From £${city.avgPrice}/hr. Get instant quotes.`,
    openGraph: {
      title: `Sofa Cleaners in ${city.name} | SofaCleaner.org`,
      description: `Professional sofa cleaning in ${city.name}. Vetted cleaners from £${city.avgPrice}/hr.`,
      type: 'website',
    }
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city, cleaners } = await getCityData(params.city)

  if (!city) {
    notFound()
  }

  return <CityPageClient city={city} cleaners={cleaners} />
}