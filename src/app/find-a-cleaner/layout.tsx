import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Find a Sofa Cleaner Near You',
  description: 'Find vetted sofa cleaners near you across the UK. Message on WhatsApp for an instant quote — most bookings confirmed same day.',
  alternates: { canonical: `${SITE_URL}/find-a-cleaner` },
  openGraph: {
    title: `Find a Sofa Cleaner Near You | ${SITE_NAME}`,
    description: 'Find vetted sofa cleaners near you across the UK. Message on WhatsApp for an instant quote — most bookings confirmed same day.',
    url: `${SITE_URL}/find-a-cleaner`,
    type: 'website',
  },
}

export default function FindACleanerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
