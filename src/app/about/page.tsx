'use client'

import { useState } from 'react'
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  ShieldCheck,
  Sofa,
  Sparkles,
  Star,
  Users,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'

const principles = [
  {
    title: 'Trust before traffic',
    description: 'We prioritise vetted cleaners, clean communication and strong service standards over noisy lead generation.',
    icon: ShieldCheck,
  },
  {
    title: 'Fast enough for real life',
    description: 'Urgent spills and move-out cleans need quick routing, clear expectations and same-day availability where possible.',
    icon: Clock3,
  },
  {
    title: 'A calmer booking experience',
    description: 'Messaging-first flow keeps the process short, direct and easier for homeowners who just want the job handled.',
    icon: Sparkles,
  },
]

const stats = [
  { value: '500+', label: 'verified upholstery specialists' },
  { value: '25+', label: 'UK cities actively covered' },
  { value: '4.9/5', label: 'average customer rating' },
  { value: '12 min', label: 'average match time on fast enquiries' },
]

const team = [
  {
    name: 'Sarah Mitchell',
    role: 'Founder',
    description: 'Built the service around a simple frustration: finding trustworthy sofa cleaning quickly should not feel harder than the clean itself.',
  },
  {
    name: 'James Thompson',
    role: 'Operations',
    description: 'Focuses on cleaner quality, service routing and the standards required to keep the marketplace reliable.',
  },
  {
    name: 'Emma Williams',
    role: 'Customer Success',
    description: 'Keeps booking conversations moving, resolves edge cases and makes sure the experience still feels human.',
  },
]

export default function AboutPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="homepage-mesh bg-[#f4f1ea] text-slate-900">
        <section className="border-b border-slate-200/70 bg-slate-950 text-white">
          <div className="container py-16 sm:py-20 lg:py-24">
            <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.08] px-4 py-2 text-sm text-white/80">
                  <Users className="h-4 w-4 text-amber-300" />
                  About SofaCleaner
                </div>
                <h1 className="font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-white sm:text-6xl">
                  Built to make sofa cleaning feel less uncertain.
                </h1>
                <p className="max-w-2xl text-lg text-slate-300 sm:text-xl">
                  SofaCleaner exists to make professional upholstery cleaning easier to trust, easier to book and
                  easier to understand. We connect homeowners with vetted specialists through a cleaner, faster flow.
                </p>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    size="xl"
                    className="rounded-2xl bg-amber-300 text-slate-950 hover:bg-amber-200"
                  >
                    Start a booking
                  </Button>
                  <Button
                    href="/services"
                    variant="ghost"
                    size="xl"
                    className="rounded-2xl border border-white/15 bg-white/[0.06] text-white hover:bg-white/[0.12] hover:text-white"
                  >
                    Explore services
                  </Button>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div key={stat.label} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
                    <div className="text-4xl font-semibold tracking-tight text-white">{stat.value}</div>
                    <p className="mt-3 text-sm text-slate-300">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-5">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Our approach</p>
              <h2 className="font-serif text-4xl text-slate-950 sm:text-5xl">
                The company was shaped by bad alternatives.
              </h2>
              <p className="text-lg text-slate-600">
                Too many booking experiences are slow, vague or hard to trust. We wanted something more direct:
                tighter cleaner vetting, fewer form fields, better messaging flow and a brand that feels credible from
                the first screen.
              </p>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-slate-950 p-3 text-white">
                  <Sofa className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Why customers use us</p>
                  <p className="text-2xl font-semibold text-slate-950">Reliable matching, less friction.</p>
                </div>
              </div>
              <div className="mt-8 grid gap-4">
                {[
                  'Verified professionals with cleaner quality controls',
                  'Messaging-first enquiry flow instead of long lead forms',
                  'Support for routine cleans, stain rescue and tenancy turnaround',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-2xl bg-[#faf8f2] p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 text-amber-700" />
                    <p className="text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-white/70">
          <div className="container section">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Principles</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">What drives the product.</h2>
            </div>
            <div className="mt-12 grid gap-5 lg:grid-cols-3">
              {principles.map((item) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className="rounded-[2rem] border border-slate-200 bg-white p-7 shadow-[0_16px_40px_rgba(15,23,42,0.05)]"
                  >
                    <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-6 text-2xl font-semibold text-slate-950">{item.title}</h3>
                    <p className="mt-3 text-base text-slate-600">{item.description}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Team</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Small team, clear ownership.</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
              <Star className="h-4 w-4 fill-current" />
              Built for UK homeowners
            </div>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {team.map((member) => (
              <div
                key={member.name}
                className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_20px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-slate-950 text-lg font-semibold text-white">
                  {member.name
                    .split(' ')
                    .map((part) => part[0])
                    .join('')}
                </div>
                <h3 className="text-2xl font-semibold text-slate-950">{member.name}</h3>
                <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-amber-700">{member.role}</p>
                <p className="mt-4 text-base text-slate-600">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="container py-16 sm:py-20">
          <div className="rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:px-10 lg:px-14 lg:py-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Next step</p>
                <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">See the service in action.</h2>
                <p className="mt-4 text-lg text-slate-300">
                  If the brand now feels sharper, the next job is converting that trust into bookings quickly.
                </p>
              </div>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="xl"
                className="rounded-2xl bg-amber-300 text-slate-950 hover:bg-amber-200"
              >
                Talk to a cleaner
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ChannelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Hi, I'd like to learn more about SofaCleaner and book a service."
      />
    </>
  )
}
