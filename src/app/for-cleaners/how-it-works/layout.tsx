import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How It Works for Cleaners',
  description: 'See how SofaCleaner works for cleaning professionals — receive local job leads, confirm bookings via WhatsApp, get paid promptly.',
  alternates: { canonical: `${SITE_URL}/for-cleaners/how-it-works` },
  openGraph: {
    title: `How It Works for Cleaners | ${SITE_NAME}`,
    description: 'Receive local job leads, confirm bookings via WhatsApp, get paid promptly.',
    url: `${SITE_URL}/for-cleaners/how-it-works`,
    type: 'website',
  },
}

export default function ForCleanersHowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
