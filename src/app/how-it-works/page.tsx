'use client'

import { useState } from 'react'
import { ArrowRight, Clock3, MessageSquareText, ShieldCheck, Sparkles, WalletCards } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'

const steps = [
  {
    number: '01',
    title: 'Send the enquiry',
    description: 'Message with your postcode, sofa type, fabric and any stain notes. The first step stays intentionally short.',
    icon: MessageSquareText,
  },
  {
    number: '02',
    title: 'We route the request',
    description: 'Your enquiry is matched with verified cleaners who cover the area and service type you need.',
    icon: ShieldCheck,
  },
  {
    number: '03',
    title: 'Review availability',
    description: 'You confirm timing, pricing and practical details in chat rather than waiting on a generic callback.',
    icon: Clock3,
  },
  {
    number: '04',
    title: 'Book the clean',
    description: 'Once the slot works for you, the cleaner is confirmed and arrives with the right equipment for the job.',
    icon: Sparkles,
  },
]

const faqs = [
  {
    question: 'Do I need an account?',
    answer: 'No. The booking flow is designed around quick messaging rather than account creation.',
  },
  {
    question: 'How fast do replies usually come through?',
    answer: 'Fast enquiries are often matched within minutes, depending on the location, job type and cleaner availability.',
  },
  {
    question: 'Who do I pay?',
    answer: 'Pricing and payment are agreed in the booking conversation. The goal is to keep the process transparent and direct.',
  },
]

export default function HowItWorksPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <div className="homepage-mesh bg-[#f4f1ea] text-slate-900">
        <section className="border-b border-slate-200/70 bg-white">
          <div className="container py-16 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">How It Works</p>
              <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl">
                A shorter path from enquiry to clean.
              </h1>
              <p className="mt-6 text-lg text-slate-600 sm:text-xl">
                The service is built to remove the usual booking drag: fewer form fields, faster routing, clearer trust
                signals and a more direct handoff to cleaners.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Button
                  onClick={() => setIsModalOpen(true)}
                  size="xl"
                  className="rounded-2xl bg-slate-950 text-white hover:bg-slate-800"
                >
                  Start booking
                </Button>
                <Button href="/services" variant="secondary" size="xl" className="rounded-2xl">
                  View service types
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="grid gap-5 lg:grid-cols-2">
            {steps.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
                >
                  <div className="flex items-center justify-between">
                    <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-semibold text-slate-400">{step.number}</span>
                  </div>
                  <h2 className="mt-6 text-3xl font-semibold text-slate-950">{step.title}</h2>
                  <p className="mt-4 text-base text-slate-600">{step.description}</p>
                </div>
              )
            })}
          </div>
        </section>

        <section className="border-y border-slate-200/70 bg-slate-950 text-white">
          <div className="container section">
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                {
                  title: 'Verified professionals',
                  body: 'Cleaner quality matters more than quantity. Vetting and trust are part of the product.',
                  icon: ShieldCheck,
                },
                {
                  title: 'Faster responses',
                  body: 'A shorter enquiry flow improves routing speed and reduces booking drop-off.',
                  icon: Clock3,
                },
                {
                  title: 'Clearer pricing conversations',
                  body: 'Customers can clarify scope, stains and timing in chat before the cleaner arrives.',
                  icon: WalletCards,
                },
              ].map((item) => {
                const Icon = item.icon
                return (
                  <div key={item.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.06] p-6">
                    <div className="inline-flex rounded-2xl bg-white/10 p-3 text-amber-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-5 text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-slate-300">{item.body}</p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        <section className="container section">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">FAQ</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Questions people ask first.</h2>
            </div>
            <div className="mt-12 grid gap-4">
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
          <div className="rounded-[2.5rem] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_100px_rgba(15,23,42,0.18)] sm:px-10 lg:px-14 lg:py-14">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-300">Ready</p>
                <h2 className="mt-3 font-serif text-4xl text-white sm:text-5xl">If the flow feels clearer, use it.</h2>
                <p className="mt-4 text-lg text-slate-300">
                  The point of the redesign is not just appearance. It is to make the next action obvious and credible.
                </p>
              </div>
              <Button
                onClick={() => setIsModalOpen(true)}
                size="xl"
                className="rounded-2xl bg-amber-300 text-slate-950 hover:bg-amber-200"
              >
                Get quotes now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </div>

      <ChannelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Hi, I'd like to get quotes for sofa cleaning."
      />
    </>
  )
}
