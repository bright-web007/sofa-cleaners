import type { Metadata } from 'next'
import { JsonLd } from '@/components/JsonLd'
import { HomePageDesign } from '@/components/home/HomePageDesign'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: SITE_NAME,
  description:
    'Message SofaCleaner on WhatsApp or Telegram and let our AI guide the enquiry, collect photos, coordinate cleaners and escalate when needed.',
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: SITE_NAME,
    description:
      'Message SofaCleaner on WhatsApp or Telegram and let our AI guide the enquiry, collect photos, coordinate cleaners and escalate when needed.',
    url: SITE_URL,
    type: 'website',
  },
}

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    description:
      'Start a WhatsApp or Telegram chat and let SofaCleaner AI guide the enquiry, collect photos, coordinate cleaners and escalate when needed.',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${SITE_URL}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <>
      <JsonLd data={websiteSchema} />
      <HomePageDesign />
    </>
  )
}
