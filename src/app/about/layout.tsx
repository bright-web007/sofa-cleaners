import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About Us',
  description: 'SofaCleaner connects UK homeowners with vetted local sofa cleaning professionals via WhatsApp and Telegram. Learn about our mission and team.',
  alternates: { canonical: `${SITE_URL}/about` },
  openGraph: {
    title: `About Us | ${SITE_NAME}`,
    description: 'SofaCleaner connects UK homeowners with vetted local sofa cleaning professionals via WhatsApp and Telegram.',
    url: `${SITE_URL}/about`,
    type: 'website',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
