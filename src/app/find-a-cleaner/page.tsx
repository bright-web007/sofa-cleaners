'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { ArrowRight, Check, Clock3, MapPin, MessageSquareText, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TELEGRAM_BOT, WHATSAPP_NUMBER } from '@/lib/constants'

const routingSteps = [
  {
    title: 'Message us on WhatsApp',
    body: 'Send your postcode, sofa type and anything urgent. We may ask follow-up questions or request photos in the chat.',
    icon: MessageSquareText,
  },
  {
    title: 'We route it fast',
    body: 'Our AI manages the back-and-forth with suitable cleaners and keeps the customer conversation moving.',
    icon: ShieldCheck,
  },
  {
    title: 'Escalate when needed',
    body: 'If the enquiry needs human judgement, an admin steps in. Otherwise the booking continues in chat.',
    icon: Clock3,
  },
]

const reasons = [
  'No customer onboarding or account setup',
  'Faster than browsing cleaner profiles yourself',
  'Built for urgent spills, same-day slots and simple booking',
  'One chat thread handles questions, pictures and coordination',
]

const cityHighlights = ['London', 'Manchester', 'Birmingham', 'Leeds', 'Bristol', 'Liverpool', 'Edinburgh', 'Glasgow']

export default function FindACleanerPage() {
  const searchParams = useSearchParams()
  const city = searchParams.get('city')

  const cityName = useMemo(() => {
    if (!city) return ''

    return city
      .split('-')
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join(' ')
  }, [city])

  const whatsappMessage = encodeURIComponent(
    cityName
      ? `Hi, I need a sofa cleaner in ${cityName}. Can you route me to the fastest available option?`
      : 'Hi, I need a sofa cleaner. Can you route me to the fastest available option?'
  )

  return (
    <>
      <div className="homepage-mesh bg-[#f4f1ea] text-slate-900">
        <section className="border-b border-slate-200/70 bg-slate-950 text-white">
          <div className="container py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur">
                <Sparkles className="h-4 w-4 text-amber-300" />
                Conversational booking
              </div>
              <h1 className="mt-6 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl">
                {cityName ? `Need a sofa cleaner in ${cityName}?` : 'Need a sofa cleaner quickly?'}
              </h1>
              <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-300 sm:text-xl">
                Message SofaCleaner and the conversation adapts to the job. We ask the right questions, request
                pictures when useful, coordinate cleaners in the background and escalate to admin when needed.
              </p>

              <div className="mx-auto mt-10 flex max-w-3xl flex-col gap-4 rounded-[2rem] border border-white/10 bg-white/[0.08] p-5 text-left shadow-[0_24px_80px_rgba(15,23,42,0.28)] backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-amber-300">Fastest route</p>
                  <p className="mt-2 text-base text-slate-200">
                    Start on WhatsApp with your postcode, fabric type and urgency. From there we handle questions,
                    media collection and cleaner coordination.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:min-w-[14rem]">
                  <Button
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                    size="xl"
                    className="rounded-2xl bg-amber-300 text-slate-950 hover:bg-amber-200"
                  >
                    Open WhatsApp
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button href={`https://t.me/${TELEGRAM_BOT}`} variant="ghost" size="xl" className="rounded-2xl border border-white/15 bg-white/[0.05] text-white hover:bg-white/[0.12] hover:text-white">Open Telegram</Button>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">No account needed</span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">Fast cleaner routing</span>
                <span className="rounded-full border border-white/10 bg-white/[0.06] px-4 py-2">Same-day slots in many areas</span>
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Why this changed</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">
                This is not a profile directory anymore.
              </h2>
              <p className="mt-5 max-w-xl text-lg text-slate-600">
                The old browse-and-filter flow created friction for a service people usually want quickly. The better
                experience is a chat flow that adapts to the job, handles evidence like pictures, and keeps humans out
                of the loop unless they are genuinely needed.
              </p>
              <div className="mt-8 rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.05)]">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">Best first message</p>
                <p className="mt-3 text-base text-slate-700">
                  {cityName
                    ? `“Hi, I need a sofa cleaner in ${cityName}. It is a fabric sofa and I can send pictures if helpful.”`
                    : '“Hi, I need a sofa cleaner. It is a fabric sofa and I can send pictures if helpful.”'}
                </p>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason}
                  className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="inline-flex rounded-full bg-amber-100 p-2 text-amber-700">
                    <Check className="h-4 w-4" />
                  </div>
                  <p className="mt-4 text-base font-medium text-slate-900">{reason}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/70">
          <div className="container section">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">How booking works</p>
                <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Three steps, chat-first.</h2>
              </div>
              <p className="max-w-xl text-slate-600">
                The goal is speed and clarity. The site should move people into a real chat, then let the AI handle
                the intake and coordination work.
              </p>
            </div>

            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {routingSteps.map((step, index) => {
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
                    <p className="mt-3 text-base text-slate-600">{step.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Coverage</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">
                Fast routing in the UK cities that matter most.
              </h2>
              <p className="mt-5 max-w-2xl text-lg text-slate-600">
                We can still cover nationwide demand, but the customer does not need to browse city by city. One
                message is enough and we route from there.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {cityHighlights.map((item) => (
                <Link
                  key={item}
                  href={`/find-a-cleaner?city=${item.toLowerCase()}`}
                  className="rounded-[1.5rem] border border-slate-200 bg-white px-5 py-4 no-underline shadow-[0_12px_30px_rgba(15,23,42,0.04)] transition duration-200 hover:-translate-y-0.5 hover:border-slate-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="rounded-full bg-amber-100 p-2 text-amber-700">
                      <MapPin className="h-4 w-4" />
                    </div>
                    <span className="text-lg font-medium text-slate-950">{item}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div className="rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:px-10 lg:px-14 lg:py-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Ready to book</p>
                <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">Open WhatsApp and start there.</h2>
                <p className="mt-4 text-lg text-slate-300">
                  That is now the primary use case: start the chat, answer the prompts, send media if needed, and let
                  us manage the cleaner side of the process.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  size="xl"
                  className="rounded-2xl bg-amber-300 text-slate-950 hover:bg-amber-200"
                >
                  WhatsApp us now
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

    </>
  )
}
