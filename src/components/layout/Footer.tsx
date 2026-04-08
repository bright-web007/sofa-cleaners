import Link from 'next/link'
import { ArrowUpRight, Instagram, Linkedin, Sofa, Twitter } from 'lucide-react'
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
                { Icon: Instagram, label: 'Instagram' },
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
