import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Cleaner Earnings & Pricing',
  description: 'Understand SofaCleaner pricing for professionals. Keep 82% of every job — no monthly fees, no subscriptions. Calculate your potential earnings.',
  alternates: { canonical: `${SITE_URL}/for-cleaners/pricing` },
  openGraph: {
    title: `Cleaner Earnings & Pricing | ${SITE_NAME}`,
    description: 'Keep 82% of every job — no monthly fees, no subscriptions. Calculate your potential earnings.',
    url: `${SITE_URL}/for-cleaners/pricing`,
    type: 'website',
  },
}

export default function ForCleanersPricingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
