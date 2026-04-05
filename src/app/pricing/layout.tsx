import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Sofa Cleaning Prices & Quotes',
  description: 'Transparent sofa cleaning prices by fabric type. Get an instant WhatsApp quote from local UK cleaners — most bookings confirmed within 4 hours.',
  alternates: { canonical: `${SITE_URL}/pricing` },
  openGraph: {
    title: `Sofa Cleaning Prices & Quotes | ${SITE_NAME}`,
    description: 'Transparent sofa cleaning prices by fabric type. Get an instant WhatsApp quote — most bookings confirmed within 4 hours.',
    url: `${SITE_URL}/pricing`,
    type: 'website',
  },
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
