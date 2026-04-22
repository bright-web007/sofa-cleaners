import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'How Sofa Cleaning Works | Book Trusted Sofa Cleaners',
  description: 'Learn how sofa cleaning works with SofaCleaner. Compare trusted sofa cleaners, get fast quotes, and book professional upholstery cleaning in just a few simple steps.',
  alternates: { canonical: `${SITE_URL}/how-it-works` },
  openGraph: {
    title: `How Sofa Cleaning Works | Book Trusted Sofa Cleaners | ${SITE_NAME}`,
    description: 'Learn how sofa cleaning works with SofaCleaner. Compare trusted sofa cleaners, get fast quotes, and book professional upholstery cleaning in just a few simple steps.',
    url: `${SITE_URL}/how-it-works`,
    type: 'website',
  },
}

export default function HowItWorksLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
