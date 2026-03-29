import { JsonLd } from '@/components/JsonLd'
import { HomePageDesign } from '@/components/home/HomePageDesign'

export default function HomePage() {
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'SofaCleaner.org',
    description:
      'Book verified sofa cleaning professionals in minutes through a fast WhatsApp or Telegram flow.',
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
    description: 'UK platform connecting customers with professional sofa cleaners',
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
