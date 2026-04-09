'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, Sofa, X } from 'lucide-react'
import { WHATSAPP_NUMBER } from '@/lib/constants'
import { cn } from '@/lib/utils'

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with sofa cleaning.")}`

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/find-a-cleaner', label: 'Book Fast' },
    { href: '/services', label: 'Services' },
    { href: '/how-it-works', label: 'How It Works' },
    { href: '/for-cleaners', label: 'For Cleaners' },
  ]

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 z-50 w-full border-b border-slate-200/80 bg-[#f4f1ea]/90 backdrop-blur-xl transition-all duration-300',
          isScrolled && 'border-slate-300/80 bg-[#f4f1ea]/96 shadow-[0_12px_40px_rgba(15,23,42,0.08)]'
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <Link href="/" className="flex items-center gap-3 no-underline">
              <div className="rounded-2xl bg-slate-950 p-2.5 shadow-lg">
                <Sofa className="h-[20px] w-[20px] text-[#FCD34D]" />
              </div>
              <div>
                <span className="block text-lg xl:text-[18px] font-semibold tracking-tight text-slate-950">SofaCleaner</span>
                <span className="block text-xs xl:text-[12px] uppercase tracking-[0.22em] text-slate-500">Upholstery booking</span>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm xl:text-[14px] font-semibold tracking-wide text-slate-600 no-underline transition-colors hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/contact"
                className="text-sm xl:text-[14px] font-semibold text-slate-600 no-underline transition-colors hover:text-slate-950"
              >
                Talk to us
              </Link>
              <a href={whatsappHref} className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-white text-sm xl:text-[14px] hover:bg-slate-800">
                Open WhatsApp
                <ArrowRight className="h-4 w-4 ml-2" />
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-xl border border-slate-200 bg-white p-2 text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-950 md:hidden"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-slate-950/30 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="relative h-full w-full bg-[#f4f1ea]">
            <div className="px-4 py-6">
              <div className="flex flex-col gap-6">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="py-2 text-lg font-semibold text-slate-950 no-underline transition-colors hover:text-amber-700"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="border-t border-slate-200 pt-4">
                  <a
                    href={whatsappHref}
                    className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-white text-sm xl:text-[14px] hover:bg-slate-800"
                  >
                    Open WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
