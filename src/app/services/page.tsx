'use client'

import Link from 'next/link'
import { ArrowRight, Clock3, ShieldCheck, Sparkles, Star } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { JsonLd } from '@/components/JsonLd'
import { SITE_NAME, SITE_URL, TELEGRAM_BOT, WHATSAPP_NUMBER } from '@/lib/constants'
import services from '@/lib/data/services.json'

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  return (
    <div className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-slate-300">
      <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
        Upholstery
      </div>
      <h2 className="mt-5 text-3xl font-semibold text-slate-950">
        <Link href={`/services/${service.slug}`} className="no-underline text-inherit hover:text-inherit">
          {service.name}
        </Link>
      </h2>
      <p className="mt-3 text-base text-slate-600">{service.description}</p>
      <div className="mt-5 rounded-2xl bg-[#faf8f2] px-4 py-3 text-sm font-medium text-slate-700">
        {service.priceRange}
      </div>
      <div className="mt-6 border-t border-slate-100 pt-5">
        <Link
          href={`/services/${service.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 no-underline hover:text-amber-700"
        >
          View service details
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}

export default function ServicesPage() {
  const servicesSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: `${SITE_URL}/services`,
    makesOffer: services.map((service) => ({
      '@type': 'Offer',
      name: service.name,
      description: service.description,
      url: `${SITE_URL}/services/${service.slug}`,
      priceRange: service.priceRange,
      areaServed: {
        '@type': 'Country',
        name: 'United Kingdom',
      },
    })),
  }

  return (
    <>
      <div className="homepage-mesh bg-[#f4f1ea] text-slate-900">
        <section className="border-b border-slate-200/70 bg-white">
          <div className="container py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Services</p>
              <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl">
                Sofa cleaning services designed for real booking intent.
              </h1>
              <p className="mt-6 text-lg text-slate-600 sm:text-xl">
                From fabric refresh to stain rescue and tenancy turnaround, the service pages now support a
                conversational intake flow rather than a directory-style buying flow.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with sofa cleaning.")}`} size="xl" className="rounded-2xl bg-slate-950 text-white hover:bg-slate-800">Open WhatsApp</Button>
                <Button href={`https://t.me/${TELEGRAM_BOT}`} variant="secondary" size="xl" className="rounded-2xl">Open Telegram</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-slate-950 text-white">
          <div className="container section">
            <div className="grid gap-5 lg:grid-cols-3">
              {[
                {
                  title: 'Specialist routing',
                  body: 'Different fabrics and stain types trigger different questions, media requests and cleaner routing logic.',
                  icon: ShieldCheck,
                },
                {
                  title: 'Faster turnaround',
                  body: 'The AI can gather the basics immediately and keep both sides moving while admins step in only when required.',
                  icon: Clock3,
                },
                {
                  title: 'Higher clarity',
                  body: 'Scope, stains, access notes and pictures can all be handled inside the chat before the visit happens.',
                  icon: Sparkles,
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
                    <div className="inline-flex rounded-2xl bg-white/10 p-3 text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-2xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-slate-300">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div className="rounded-[2.5rem] bg-white px-6 py-10 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:px-10 lg:px-14 lg:py-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
                  <Star className="h-4 w-4 fill-current" />
                  4.9 average customer rating
                </div>
                <h2 className="mt-5 font-serif text-4xl text-slate-950 sm:text-5xl">Pick a service or start the chat.</h2>
                <p className="mt-4 text-lg text-slate-600">
                  If you already know the job type, use the service page. If not, just open the chat and we will guide the intake.
                </p>
              </div>
              <Button href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with sofa cleaning.")}`} size="xl" className="rounded-2xl bg-amber-300 text-slate-950 hover:bg-amber-200">
                Open WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <JsonLd data={servicesSchema} />
    </>
  )
}
