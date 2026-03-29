import type { Metadata } from 'next'
import { Fraunces, Manrope } from 'next/font/google'
import Script from 'next/script'
import { GoogleAnalytics } from '@next/third-parties/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import { JsonLd } from '@/components/JsonLd'
import { SITE_NAME, SITE_URL } from '@/lib/constants'
import { CookieConsent } from '@/components/CookieConsent'
import './globals.css'

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
})

const fraunces = Fraunces({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Message SofaCleaner on WhatsApp or Telegram and our AI will collect details, request photos, coordinate the cleaner, and escalate to admin when needed.',
  metadataBase: new URL(SITE_URL),
  keywords: ['sofa cleaning', 'upholstery cleaning', 'furniture cleaning', 'UK', 'professional cleaning'],
  authors: [{ name: SITE_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
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
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_URL,
    siteName: SITE_NAME,
    title: SITE_NAME,
    description: 'Message SofaCleaner on WhatsApp or Telegram and let our AI guide the booking conversation from first message to cleaner coordination.',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Message SofaCleaner on WhatsApp or Telegram and let our AI guide the booking conversation from first message to cleaner coordination.',
    creator: `@${SITE_NAME.toLowerCase()}`
  },
  verification: {
    google: 'your-google-site-verification-code',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'UK AI-assisted sofa cleaning service handling customer intake, media collection, cleaner coordination, and admin escalation when needed',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'GB'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+44-7700-000-000',
      contactType: 'customer service',
      availableLanguage: 'English'
    }
  }

  return (
    <html lang="en-GB" className={`${manrope.variable} ${fraunces.variable}`}>
      <head>
        <JsonLd data={organizationSchema} />
        {gaId ? (
          <Script id="ga-consent-default" strategy="beforeInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                analytics_storage: 'denied',
                ad_storage: 'denied',
                ad_user_data: 'denied',
                ad_personalization: 'denied'
              });
            `}
          </Script>
        ) : null}
      </head>
      <body className="font-sans antialiased bg-white text-[#1A1A1A] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  )
}
