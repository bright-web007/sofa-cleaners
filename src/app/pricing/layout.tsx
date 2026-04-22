import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sofa Cleaning Cost UK: 2026 Pricing Guide',
  description: 'See sofa cleaning cost in the UK for 2026. Compare average sofa cleaning prices, key cost factors, and expert tips before booking upholstery cleaning services.',
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: `Sofa Cleaning Cost UK: 2026 Pricing Guide | ${SITE_NAME}`,
    description: 'See sofa cleaning cost in the UK for 2026. Compare average sofa cleaning prices, key cost factors, and expert tips before booking upholstery cleaning services.',
    url: `${SITE_URL}/pricing`,
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
