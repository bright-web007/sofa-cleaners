import { notFound } from 'next/navigation'
import { Metadata } from 'next'
import { AreaPageClient } from './AreaPageClient'

// Import data - these would normally come from API/database
import { Cleaner, City } from '@/types'
import cleanersData from '@/lib/data/cleaners.json'
import citiesData from '@/lib/data/cities.json'

interface AreaPageProps {
  params: {
    city: string
    area: string
  }
}

async function getAreaData(citySlug: string, areaSlug: string) {
  const city = citiesData.find((c: City) => c.slug === citySlug) || null
  const area = city?.areas.find(a => a.slug === areaSlug) || null
  
  const areaCleaners = cleanersData.filter((cleaner: Cleaner) => {
    const matchesCity = cleaner.city.toLowerCase() === city?.name.toLowerCase()
    const matchesArea = cleaner.areas.some(cleanerArea => 
      cleanerArea.toLowerCase().replace(' ', '-') === area?.name.toLowerCase().replace(' ', '-')
    )
    return matchesCity && matchesArea
  })
  
  return { city, area, cleaners: areaCleaners }
}

export async function generateStaticParams() {
  const params: { city: string; area: string }[] = []
  
  citiesData.forEach((city: City) => {
    city.areas.forEach(area => {
      params.push({
        city: city.slug,
        area: area.slug
      })
    })
  })
  
  return params
}

export async function generateMetadata({ params }: AreaPageProps): Promise<Metadata> {
  const { city, area } = await getAreaData(params.city, params.area)
  
  if (!city || !area) {
    return {
      title: 'Area Not Found | SofaCleaner.org'
    }
  }

  return {
    title: `Sofa Cleaners in ${area.name}, ${city.name} | SofaCleaner.org`,
    description: `Professional sofa cleaners in ${area.name}, ${city.name}. Vetted, insured specialists. Get instant quotes from local sofa cleaning experts.`,
    openGraph: {
      title: `Sofa Cleaners in ${area.name}, ${city.name} | SofaCleaner.org`,
      description: `Professional sofa cleaning in ${area.name}, ${city.name}. Vetted cleaners with instant quotes.`,
      type: 'website',
    }
  }
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { city, area, cleaners } = await getAreaData(params.city, params.area)

  if (!city || !area) {
    notFound()
  }
  return <AreaPageClient city={city} area={area} cleaners={cleaners} />
}