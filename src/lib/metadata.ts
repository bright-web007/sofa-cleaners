import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from './constants'

interface PageMetadataParams {
  title: string
  description: string
  path: string
  image?: string
}

export function generatePageMetadata({
  title,
  description, 
  path,
  image = '/og-image.jpg'
}: PageMetadataParams): Metadata {
  const fullTitle = title === SITE_NAME ? title : `${title} | ${SITE_NAME}`
  const canonical = `${SITE_URL}${path}`
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_GB',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}
