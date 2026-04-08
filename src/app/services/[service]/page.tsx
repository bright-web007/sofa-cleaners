import ServicePageClient from './ServicePageClient'
import { notFound } from 'next/navigation'
import servicesData from '@/lib/data/services.json'
import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

interface Props {
  params: Promise<{
    service: string
  }>
}

// Generate static paths at build time
export async function generateStaticParams() {
  return servicesData.map((service) => ({
    service: service.slug,
  }))
}

// Generate metadata for each service page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = servicesData.find((s) => s.slug === serviceSlug)
  
  if (!service) {
    return {
      title: `Service Not Found | ${SITE_NAME}`,
      description: 'The requested service page could not be found.'
    }
  }

  return {
    title: `${service.name} | Professional Sofa Cleaning | ${SITE_NAME}`,
    description: service.description,
    openGraph: {
      title: `${service.name} | ${SITE_NAME}`,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      type: 'website',
    },
    alternates: {
      canonical: `${SITE_URL}/services/${service.slug}`,
    },
  }
}

export default async function ServicePage({ params }: Props) {
  const { service: serviceSlug } = await params
  const service = servicesData.find((s) => s.slug === serviceSlug)

  if (!service) {
    notFound()
  }

  return <ServicePageClient service={service} />
}