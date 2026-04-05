import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with SofaCleaner via WhatsApp, Telegram, or our contact form. We typically respond within 4 hours.',
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: `Contact Us | ${SITE_NAME}`,
    description: 'Get in touch with SofaCleaner via WhatsApp, Telegram, or our contact form. We typically respond within 4 hours.',
    url: `${SITE_URL}/contact`,
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
