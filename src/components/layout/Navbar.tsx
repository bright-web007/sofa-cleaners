'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Menu, Sofa, X } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

interface NavbarProps {
  onGetQuoteClick?: () => void
}

export function Navbar({ onGetQuoteClick }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '/find-a-cleaner', label: 'Find a Cleaner' },
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
              <div className="rounded-2xl bg-slate-950 p-2.5 text-white shadow-lg">
                <Sofa className="h-5 w-5" />
              </div>
              <div>
                <span className="block text-lg font-semibold tracking-tight text-slate-950">SofaCleaner</span>
                <span className="block text-xs uppercase tracking-[0.22em] text-slate-500">Upholstery booking</span>
              </div>
            </Link>

            <div className="hidden items-center gap-8 md:flex">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm font-semibold tracking-wide text-slate-600 no-underline transition-colors hover:text-slate-950"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div className="hidden items-center gap-3 md:flex">
              <Link
                href="/contact"
                className="text-sm font-semibold text-slate-600 no-underline transition-colors hover:text-slate-950"
              >
                Talk to us
              </Link>
              {onGetQuoteClick ? (
                <Button onClick={onGetQuoteClick} className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800">
                  Get matched
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button href="/find-a-cleaner" className="rounded-full bg-slate-950 px-5 text-white hover:bg-slate-800">
                  Get matched
                  <ArrowRight className="h-4 w-4" />
                </Button>
              )}
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
                  {onGetQuoteClick ? (
                    <Button
                      className="w-full rounded-full bg-slate-950 text-white hover:bg-slate-800"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        onGetQuoteClick?.()
                      }}
                    >
                      Get matched
                    </Button>
                  ) : (
                    <Button href="/find-a-cleaner" className="w-full rounded-full bg-slate-950 text-white hover:bg-slate-800">
                      Get matched
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
