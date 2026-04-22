import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Sofa Cleaning Services',
  description: 'Discover professional sofa cleaning services for fabric sofas, leather sofas, stain removal, deodorising, and deep upholstery cleaning from trusted local experts.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Professional Sofa Cleaning Services | ${SITE_NAME}`,
    description: 'Discover professional sofa cleaning services for fabric sofas, leather sofas, stain removal, deodorising, and deep upholstery cleaning from trusted local experts.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
