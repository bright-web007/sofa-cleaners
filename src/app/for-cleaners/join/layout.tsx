import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Apply to Join SofaCleaner',
  description: 'Apply to join the SofaCleaner network. Complete our simple 4-step application and start receiving local sofa cleaning job leads via WhatsApp.',
  alternates: { canonical: `${SITE_URL}/for-cleaners/join` },
  openGraph: {
    title: `Apply to Join SofaCleaner | ${SITE_NAME}`,
    description: 'Complete our simple 4-step application and start receiving local sofa cleaning job leads via WhatsApp.',
    url: `${SITE_URL}/for-cleaners/join`,
    type: 'website',
  },
}

export default function ForCleanersJoinLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
