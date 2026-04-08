import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Professional Sofa Cleaning Services',
  description: 'Browse all SofaCleaner services — fabric, leather, velvet, stain removal, and end of tenancy sofa cleaning across the UK.',
  alternates: { canonical: `${SITE_URL}/services` },
  openGraph: {
    title: `Professional Sofa Cleaning Services | ${SITE_NAME}`,
    description: 'Fabric, leather, velvet, stain removal, and end of tenancy sofa cleaning across the UK.',
    url: `${SITE_URL}/services`,
    type: 'website',
  },
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
