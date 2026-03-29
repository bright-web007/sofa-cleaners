import ServicePageClient from './ServicePageClient'
import { notFound } from 'next/navigation'
import servicesData from '@/lib/data/services.json'
import type { Metadata } from 'next'

interface Props {
  params: {
    service: string
  }
}

// Generate static paths at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    service: service.slug,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = servicesData.find((s) => s.slug === params.service)
  
  if (!service) {
    return {
      title: 'Service Not Found - SofaCleaner.org',
      description: 'The requested service page could not be found.'
    }
  }

  return {
    title: `${service.name} | Professional Sofa Cleaning - SofaCleaner.org`,
    description: service.description,
    openGraph: {
      title: `${service.name} | SofaCleaner.org`,
      description: service.description,
      url: `https://sofacleaner.org/services/${service.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `https://sofacleaner.org/services/${service.slug}`,
    },
  }
}

export default function ServicePage({ params }: Props) {
  const service = servicesData.find((s) => s.slug === params.service)

  if (!service) {
    notFound()
  }

  return <ServicePageClient service={service} />
}