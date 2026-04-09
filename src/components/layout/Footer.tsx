import Link from 'next/link'
import { ArrowUpRight, Sofa } from 'lucide-react'

const Twitter = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
)
const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
)
const Linkedin = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
)
import { PHONE_DISPLAY, SITE_NAME, WHATSAPP_NUMBER } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with sofa cleaning.")}`

  const footerColumns = [
    {
      title: 'For Customers',
      links: [
        { href: '/find-a-cleaner', label: 'Book Fast' },
        { href: '/services', label: 'Services' },
        { href: '/how-it-works', label: 'How It Works' },
        { href: '/pricing', label: 'Pricing' },
      ],
    },
    {
      title: 'For Cleaners',
      links: [
        { href: '/for-cleaners', label: 'Join as Cleaner' },
        { href: '/for-cleaners/how-it-works', label: 'How It Works' },
        { href: '/for-cleaners/pricing', label: 'Pricing' },
        { href: '/for-cleaners/join', label: 'Apply' },
      ],
    },
    {
      title: 'Company',
      links: [
        { href: '/about', label: 'About' },
        { href: '/contact', label: 'Contact' },
        { href: '/blog', label: 'Blog' },
        { href: '/privacy', label: 'Privacy' },
      ],
    },
  ]

  return (
    <footer className="border-t border-slate-200 bg-[#f7f4ee]">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr_0.85fr_0.85fr]">
          <div className="space-y-5">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="rounded-2xl bg-slate-950 p-2.5 text-white">
                <Sofa className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-semibold tracking-tight text-slate-950">{SITE_NAME}</span>
                <span className="block text-xs uppercase tracking-[0.22em] text-slate-500">Upholstery booking</span>
              </div>
            </Link>
            <p className="max-w-sm text-base text-slate-600">
              Message-first sofa cleaning for UK homeowners who want a trusted cleaner routed quickly, without extra onboarding.
            </p>
            <Link
              href={whatsappHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 no-underline hover:text-amber-700"
            >
              Start on WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </Link>
            <div className="flex gap-3 pt-2">
              {[
                { Icon: Twitter, label: 'Twitter' },
                { Icon: InstagramIcon, label: 'Instagram' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  className="rounded-full border border-slate-200 bg-white p-2.5 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950"
                  aria-label={`Follow us on ${label}`}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-700 no-underline transition-colors hover:text-slate-950"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-sm text-slate-500">© {currentYear} {SITE_NAME}. All rights reserved.</div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <Link href="/privacy" className="text-slate-500 no-underline transition-colors hover:text-slate-950">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-slate-500 no-underline transition-colors hover:text-slate-950">
                Terms of Service
              </Link>
              <Link href="/cookies" className="text-slate-500 no-underline transition-colors hover:text-slate-950">
                Cookie Policy
              </Link>
              <span>Call: {PHONE_DISPLAY}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
