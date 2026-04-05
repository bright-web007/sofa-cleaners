import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How It Works',
  description: 'See how SofaCleaner works in 3 simple steps — message on WhatsApp, confirm your booking, and a vetted cleaner arrives. No apps, no faff.',
  alternates: { canonical: `${SITE_URL}/how-it-works` },
  openGraph: {
    title: `How It Works | ${SITE_NAME}`,
    description: 'Message on WhatsApp, confirm your booking, and a vetted cleaner arrives. No apps, no faff.',
    url: `${SITE_URL}/how-it-works`,
    type: 'website',
  },
}

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
