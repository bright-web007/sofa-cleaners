import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL, COMMISSION_RATE } from '@/lib/constants'

const commissionPct = Math.round(COMMISSION_RATE * 100)

export const metadata: Metadata = {
  title: 'Join as a Sofa Cleaner',
  description: `Earn more as an independent sofa cleaning professional. Join SofaCleaner to get local job leads via WhatsApp with just ${commissionPct}% commission.`,
  alternates: { canonical: `${SITE_URL}/for-cleaners` },
  openGraph: {
    title: `Join as a Sofa Cleaner | ${SITE_NAME}`,
    description: `Get local sofa cleaning job leads via WhatsApp. Just ${commissionPct}% commission — no subscription fees.`,
    url: `${SITE_URL}/for-cleaners`,
    type: 'website',
  },
}

export default function ForCleanersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
