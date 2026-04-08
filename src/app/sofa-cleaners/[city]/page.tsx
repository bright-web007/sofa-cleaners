import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { CityPageClient } from './CityPageClient'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

// Import data - these would normally come from API/database
import { Cleaner, City } from '@/types'
import cleanersData from '@/lib/data/cleaners.json'
import citiesData from '@/lib/data/cities.json'

interface CityPageProps {
  params: Promise<{
    city: string
  }>
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
  const { city: citySlug } = await params
  const { city } = await getCityData(citySlug)
  
  if (!city) {
    return {
      title: `City Not Found | ${SITE_NAME}`
    }
  }

  return {
    title: `Sofa Cleaners in ${city.name} | ${SITE_NAME}`,
    description: `Find professional sofa cleaners in ${city.name}. ${city.cleanerCount}+ vetted cleaners, ${city.completedJobs}+ jobs completed. From £${city.avgPrice}/hr. Get instant quotes.`,
    alternates: {
      canonical: `${SITE_URL}/sofa-cleaners/${city.slug}`,
    },
    openGraph: {
      title: `Sofa Cleaners in ${city.name} | ${SITE_NAME}`,
      description: `Professional sofa cleaning in ${city.name}. Vetted cleaners from £${city.avgPrice}/hr.`,
      url: `${SITE_URL}/sofa-cleaners/${city.slug}`,
      type: 'website',
    }
  }
}

export default async function CityPage({ params }: CityPageProps) {
  const { city: citySlug } = await params
  const { city, cleaners } = await getCityData(citySlug)

  if (!city) {
    notFound()
  }

  return <CityPageClient city={city} cleaners={cleaners} />
}