'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  Check,
  ChevronRight,
  Clock3,
  MapPin,
  MessageSquareText,
  ShieldCheck,
  Sparkles,
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TELEGRAM_BOT, WHATSAPP_NUMBER } from '@/lib/constants'

const metrics = [
  { value: '12 min', label: 'average cleaner match time' },
  { value: '4.9/5', label: 'customer satisfaction score' },
  { value: '500+', label: 'verified upholstery specialists' },
]

const highlights = [
  'AI-led intake that adapts to the cleaning job',
  'Photo and stain review handled in chat',
  'Human admin escalation only when needed',
]

const processSteps = [
  {
    title: 'Tell us what needs cleaning',
    copy: 'Share your postcode, fabric type, urgency and photos if needed. The AI asks follow-up questions based on the job.',
    icon: MessageSquareText,
  },
  {
    title: 'We coordinate the right cleaner',
    copy: 'We manage the back-and-forth with cleaners, compare availability and keep the conversation moving.',
    icon: ShieldCheck,
  },
  {
    title: 'Escalate when needed',
    copy: 'If the job needs human review, an admin steps in. Otherwise the AI keeps the booking moving in chat.',
    icon: Clock3,
  },
]

const serviceCards = [
  {
    title: 'Fabric revival',
    copy: 'Deep extraction cleaning for everyday sofas with visible dirt, spills and odour build-up.',
  },
  {
    title: 'Leather care',
    copy: 'Cleaner matching for leather-safe treatment, conditioning and surface restoration.',
  },
  {
    title: 'Stain rescue',
    copy: 'Targeted help for wine, food, pet and heavy-traffic marks that need specialist handling.',
  },
  {
    title: 'Tenancy refresh',
    copy: 'Fast turnaround upholstery cleaning for move-out standards and property handovers.',
  },
]

const coverage = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Liverpool', 'Edinburgh', 'Glasgow']

const reviews = [
  {
    quote:
      'We booked over WhatsApp on a Sunday morning and had the sofa cleaned that afternoon. The whole thing felt effortless.',
    name: 'Maya T.',
    detail: 'Camden',
  },
  {
    quote:
      'The cleaner knew exactly how to handle a pale velvet sectional. It felt more premium and much less generic.',
    name: 'Jordan R.',
    detail: 'Leeds',
  },
  {
    quote:
      'Fast response, clear price, no back-and-forth forms. It felt more like a concierge than a listing website.',
    name: 'Sophie L.',
    detail: 'Bristol',
  },
]

const faqs = [
  {
    question: 'How quickly can I book a cleaner?',
    answer:
      'Most customers get matched with available cleaners within minutes, then agree a slot directly in chat.',
  },
  {
    question: 'Do you handle delicate materials?',
    answer:
      'Yes. Enquiries can be routed to cleaners who work with velvet, linen blends, leather and other specialist fabrics.',
  },
  {
    question: 'Can I request stain removal only?',
    answer:
      'Yes. Mention the stain type and age in your message so the request can be routed properly.',
  },
]

function SofaIllustration() {
  return (
    <div className="relative mx-auto aspect-[4/3] w-full max-w-[34rem]">
      <div className="absolute inset-0 rounded-[2rem] bg-[radial-gradient(circle_at_top,#f6d365_0%,rgba(246,211,101,0.08)_28%,transparent_60%)]" />
      <div className="absolute inset-8 rounded-[2rem] border border-white/15 bg-white/5 backdrop-blur-xl" />
      <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f6d365]/20 blur-3xl" />

      <svg
        viewBox="0 0 460 340"
        className="absolute inset-0 h-full w-full drop-shadow-[0_30px_80px_rgba(15,23,42,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <ellipse cx="228" cy="286" rx="126" ry="24" fill="#0f172a" fillOpacity="0.18" />
        <path d="M121 122C121 98.804 139.804 80 163 80H297C320.196 80 339 98.804 339 122V189H121V122Z" fill="#F7F7F3" />
        <path d="M97 179C97 160.222 112.222 145 131 145H329C347.778 145 363 160.222 363 179V234C363 252.778 347.778 268 329 268H131C112.222 268 97 252.778 97 234V179Z" fill="#FFFCF5" />
        <rect x="142" y="154" width="86" height="65" rx="18" fill="#FFF8E7" />
        <rect x="233" y="154" width="86" height="65" rx="18" fill="#FFF8E7" />
        <path d="M108 126C108 104.461 125.461 87 147 87H169V189H108V126Z" fill="#F4F1E8" />
        <path d="M352 126C352 104.461 334.539 87 313 87H291V189H352V126Z" fill="#F4F1E8" />
        <rect x="128" y="268" width="12" height="28" rx="6" fill="#D6C6A5" />
        <rect x="202" y="268" width="12" height="28" rx="6" fill="#D6C6A5" />
        <rect x="246" y="268" width="12" height="28" rx="6" fill="#D6C6A5" />
        <rect x="320" y="268" width="12" height="28" rx="6" fill="#D6C6A5" />
        <path
          d="M179 120C206.333 126.667 249.6 126.667 286.2 120"
          stroke="#E9DFC7"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <circle cx="136" cy="63" r="5" fill="#F6D365" />
        <circle cx="334" cy="67" r="4" fill="#F6D365" fillOpacity="0.7" />
        <circle cx="374" cy="113" r="3" fill="white" fillOpacity="0.75" />
      </svg>

      <div className="reveal-float absolute left-4 top-10 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md">
        Same-day slots
      </div>
      <div className="reveal-float absolute bottom-8 right-3 rounded-2xl border border-white/20 bg-[#f8fafc] px-4 py-3 text-sm text-slate-900 shadow-2xl [animation-delay:220ms]">
        <div className="flex items-center gap-2 font-semibold">
          <Sparkles className="h-4 w-4 text-amber-500" />
          Cleaner matched
        </div>
        <p className="mt-1 text-xs text-slate-500">Average response in 12 minutes</p>
      </div>
    </div>
  )
}

export function HomePageDesign() {
  const [postcode, setPostcode] = useState('')

  const whatsappMessage = encodeURIComponent(
    postcode
      ? `Hi, I need a sofa cleaner in ${postcode}. What is the fastest available appointment?`
      : 'Hi, I need a sofa cleaner. What is the fastest available appointment?'
  )

  return (
    <div className="homepage-mesh relative overflow-hidden bg-[#f4f1ea] text-slate-900">
        <section className="relative isolate overflow-hidden border-b border-slate-200/70 bg-[#0f172a] text-white">
          <div className="homepage-grid absolute inset-0 opacity-30" />
          <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,rgba(246,211,101,0.28),transparent_55%)]" />
          <div className="container relative z-10 py-16 sm:py-20 lg:py-24">
            <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
              <div className="space-y-10">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm text-white/80 backdrop-blur">
                  <Sparkles className="h-4 w-4 text-amber-300" />
                  Modern sofa care, matched in minutes
                </div>

                <div className="max-w-3xl space-y-6">
                  <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl">
                    A cleaner, faster way to book sofa cleaning.
                  </h1>
                  <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                    SofaCleaner runs the whole booking conversation in chat. Our AI collects the right details,
                    requests pictures when useful, coordinates with cleaners, and escalates to admin when the case
                    needs a human hand.
                  </p>
                </div>

                <div className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/[0.08] p-4 shadow-2xl backdrop-blur-xl sm:grid-cols-[1fr_auto]">
                  <label className="flex flex-col gap-2">
                    <span className="text-sm font-medium text-white/70">Enter your postcode</span>
                    <input
                      type="text"
                      value={postcode}
                      onChange={(event) => setPostcode(event.target.value)}
                      placeholder="SW1A 1AA"
                      className="w-full rounded-2xl border border-white/10 bg-white px-5 py-4 text-base text-slate-900 outline-none transition focus:border-amber-300 focus:ring-4 focus:ring-amber-200/40"
                    />
                  </label>
                  <div className="flex flex-col gap-3 sm:justify-end">
                    <Button
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                      size="xl"
                      className="rounded-2xl bg-amber-300 px-8 py-4 text-slate-950 hover:bg-amber-200"
                    >
                      Open WhatsApp
                    </Button>
                  </div>
                </div>

                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex flex-wrap gap-3">
                    <Link
                      href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white no-underline transition hover:bg-white/[0.14] hover:text-white"
                    >
                      WhatsApp
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                    <Link
                      href={`https://t.me/${TELEGRAM_BOT}`}
                      target="_blank"
                      className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm font-medium text-white no-underline transition hover:bg-white/[0.14] hover:text-white"
                    >
                      Telegram
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-white/70">
                    <Star className="h-4 w-4 fill-amber-300 text-amber-300" />
                    Rated 4.9 by homeowners across the UK
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-3">
                  {metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] px-5 py-5 backdrop-blur-sm"
                    >
                      <div className="text-3xl font-semibold tracking-tight text-white">{metric.value}</div>
                      <p className="mt-2 text-sm text-slate-300">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <SofaIllustration />
            </div>
          </div>
        </section>

        <section className="border-b border-slate-200/70 bg-[#f4f1ea]">
          <div className="container py-6">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm font-medium uppercase tracking-[0.18em] text-slate-500">
              <span>DBS-checked partners</span>
              <span>Specialist fabric care</span>
              <span>Real-time chat booking</span>
              <span>Nationwide coverage</span>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Why it feels better</p>
              <h2 className="max-w-xl font-serif text-4xl text-slate-950 sm:text-5xl">
                Built for conversational booking, not directories or forms.
              </h2>
              <p className="max-w-xl text-lg text-slate-600">
                One chat thread handles intake, follow-up questions, pictures, cleaner coordination and exceptions.
                The customer does not need to navigate a marketplace or wait for a callback.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
                >
                  <div className="mb-4 inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="text-base font-medium text-slate-900">{item}</p>
                </div>
              ))}
              <div className="rounded-[1.75rem] bg-slate-950 p-6 text-white shadow-[0_20px_60px_rgba(15,23,42,0.18)]">
                <p className="text-sm uppercase tracking-[0.2em] text-white/60">Customer promise</p>
                <p className="mt-3 text-2xl font-semibold">AI-managed messaging from first enquiry to booked cleaner.</p>
                <p className="mt-3 text-sm text-slate-300">
                  Designed for urgent spills, regular maintenance and end-of-tenancy turnaround.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/70">
          <div className="container section">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Booking flow</p>
                <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Three steps, zero clutter.</h2>
              </div>
              <p className="max-w-xl text-slate-600">
                From your first message to a confirmed cleaner, the entire booking flow takes minutes — not hours.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {processSteps.map((step, index) => {
                const Icon = step.icon

                return (
                  <div
                    key={step.title}
                    className="rounded-[2rem] border border-slate-200 bg-[#fcfbf8] p-7 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                  >
                    <div className="flex items-center justify-between">
                      <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                        <Icon className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-slate-400">0{index + 1}</span>
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-slate-950">{step.title}</h3>
                    <p className="mt-3 text-base text-slate-600">{step.copy}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Services</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">
                Cleaner matching for the jobs people actually need.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 no-underline hover:text-amber-700"
            >
              Explore all services
              <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {serviceCards.map((service) => (
              <Link
                key={service.title}
                href="/services"
                className="group cursor-pointer rounded-[1.75rem] border border-slate-200 bg-white p-6 no-underline transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
              >
                <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                  Upholstery
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-3 text-base text-slate-600">{service.copy}</p>
                <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-900">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-slate-950 text-white">
          <div className="container section">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="space-y-5">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Coverage</p>
                <h2 className="font-serif text-4xl text-white sm:text-5xl">Available across the UK’s busiest cities.</h2>
                <p className="max-w-xl text-lg text-slate-300">
                  Our verified cleaner network covers the UK's major cities, ready to respond when you need them most.
                  Same-day availability in most areas.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {coverage.map((city) => (
                  <Link
                    key={city}
                    href={`/find-a-cleaner?city=${city.toLowerCase()}`}
                    className="rounded-[1.5rem] border border-white/10 bg-white/5 px-5 py-4 no-underline backdrop-blur transition duration-200 hover:border-white/20 hover:bg-white/10"
                  >
                    <div className="flex items-center gap-3">
                      <div className="rounded-full bg-white/10 p-2">
                        <MapPin className="h-4 w-4 text-amber-300" />
                      </div>
                      <span className="text-lg font-medium text-white">{city}</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Testimonials</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">What customers notice now.</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
              <Star className="h-4 w-4 fill-current" />
              4.9 average rating
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {reviews.map((review) => (
              <blockquote
                key={review.name}
                className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_20px_60px_rgba(15,23,42,0.06)]"
              >
                <div className="flex gap-1 text-amber-500">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-5 text-lg text-slate-700">{review.quote}</p>
                <footer className="mt-6 border-t border-slate-100 pt-5">
                  <div className="font-semibold text-slate-950">{review.name}</div>
                  <div className="text-sm text-slate-500">{review.detail}</div>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/70">
          <div className="container section">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">FAQ</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Clear answers, kept short.</h2>
            </div>

            <div className="mx-auto mt-12 grid max-w-4xl gap-4">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-[1.5rem] border border-slate-200 bg-white px-6 py-5 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
                >
                  <h3 className="text-xl font-semibold text-slate-950">{faq.question}</h3>
                  <p className="mt-2 text-base text-slate-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:px-10 lg:px-14 lg:py-14">
            <div className="absolute right-0 top-0 h-60 w-60 rounded-full bg-amber-300/20 blur-3xl" />
            <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-white/10 blur-3xl" />
            <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Ready to book</p>
                <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">
                  Your freshest sofa is one conversation away.
                </h2>
                <p className="mt-4 max-w-xl text-lg text-slate-300">
                  Start the chat, answer the prompts, send photos if needed, and let us handle the cleaner side of the
                  conversation for you.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  size="xl"
                  className="rounded-2xl bg-amber-300 text-slate-950 hover:bg-amber-200"
                >
                  Open WhatsApp
                </Button>
                <Button
                  href={`https://t.me/${TELEGRAM_BOT}`}
                  variant="ghost"
                  size="xl"
                  className="rounded-2xl border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:text-white"
                >
                  Open Telegram
                </Button>
              </div>
            </div>
          </div>
        </section>
    </div>
  )
}
