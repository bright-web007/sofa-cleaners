import { JsonLd } from '@/components/JsonLd'
import { HomePageDesign } from '@/components/home/HomePageDesign'

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SofaCleaner.org',
    description:
      'Start a WhatsApp or Telegram chat and let SofaCleaner AI guide the enquiry, collect photos, coordinate cleaners and escalate when needed.',
    url: 'https://sofacleaner.org',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://sofacleaner.org/search?q={search_term_string}',
      'query-input': 'required name=search_term_string',
    },
  }

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SofaCleaner.org',
    description: 'UK AI-assisted sofa cleaning service that manages the conversation between customer and cleaner from enquiry to booking',
    url: 'https://sofacleaner.org',
    logo: 'https://sofacleaner.org/logo.png',
    areaServed: {
      '@type': 'Country',
      name: 'United Kingdom',
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
  }

  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={organizationSchema} />
      <HomePageDesign />
    </>
  )
}
