'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowRight, Clock3, MessageSquareText, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { TELEGRAM_BOT, WHATSAPP_NUMBER } from '@/lib/constants'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      title: 'WhatsApp',
      description: 'Fastest route for new bookings and urgent sofa cleaning enquiries.',
      icon: '💬',
      action: 'Open WhatsApp',
      href: `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Hi, I need a sofa cleaner quickly. Can you help?')}`,
      primary: true,
    },
    {
      title: 'Telegram',
      description: 'Alternative messaging option if you prefer Telegram.',
      icon: '📱',
      action: 'Open Telegram',
      href: `https://t.me/${TELEGRAM_BOT}`,
      primary: true,
    },
    {
      title: 'General enquiries',
      description: 'For partnerships, support or anything that is not an urgent booking.',
      icon: '📧',
      action: 'Use the form',
      href: '#contact-form',
      primary: false,
    },
  ]

  return (
    <div className="homepage-mesh min-h-screen bg-[#f4f1ea] text-slate-900">
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Contact</p>
            <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl">
              Message first. Book faster.
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl">
              WhatsApp is the primary route for customers who want a cleaner quickly. The form is still here for
              general enquiries, partnerships and anything that is not an urgent booking.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button href={contactMethods[0].href} size="xl" className="rounded-2xl bg-slate-950 text-white hover:bg-slate-800">
                Message on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contact-form" variant="secondary" size="xl" className="rounded-2xl">
                General enquiry form
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="grid gap-5 lg:grid-cols-3">
          {[
            {
              title: 'Message us',
              body: 'Send your postcode, sofa type and stain details in one short WhatsApp message.',
              icon: MessageSquareText,
            },
            {
              title: 'We route the enquiry',
              body: 'We contact suitable cleaners and narrow it down to real availability instead of making you browse profiles.',
              icon: ShieldCheck,
            },
            {
              title: 'Confirm the booking',
              body: 'Price, timing and access details are agreed in chat so the cleaner can be booked quickly.',
              icon: Clock3,
            },
          ].map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)]"
              >
                <div className="inline-flex rounded-2xl bg-slate-950 p-3 text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="mt-6 text-3xl font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-4 text-base text-slate-600">{item.body}</p>
              </div>
            )
          })}
        </div>
      </section>

      <section className="container section pt-0">
        <div className="rounded-[2.25rem] border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.05)] sm:p-10">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Preferred channels</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Use messaging for bookings.</h2>
            </div>
            <p className="max-w-xl text-slate-600">
              If the goal is speed, start with WhatsApp. Use the form below for non-booking questions.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <div
                key={index}
                className={`rounded-[1.75rem] border-2 p-8 text-center transition-all hover:shadow-md ${
                  method.primary ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-[#fcfbf8] hover:border-slate-300'
                }`}
              >
                <div className="mb-4 text-4xl">{method.icon}</div>
                <h3 className={`mb-2 text-xl font-semibold ${method.primary ? 'text-white' : 'text-slate-950'}`}>
                  {method.title}
                </h3>
                <p className={`mb-6 ${method.primary ? 'text-slate-300' : 'text-slate-600'}`}>{method.description}</p>
                <Link
                  href={method.href}
                  className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-medium no-underline transition-colors ${
                    method.primary ? 'bg-amber-300 text-slate-950 hover:bg-amber-200' : 'bg-slate-950 text-white hover:bg-slate-800'
                  }`}
                >
                  {method.action}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-slate-950 py-8 text-white">
        <div className="container">
          <div className="grid gap-8 text-center md:grid-cols-2">
            <div>
              <h3 className="mb-2 font-semibold text-white">Booking Hours</h3>
              <p className="text-slate-300">
                Monday – Saturday
                <br />
                8:00 AM – 8:00 PM
              </p>
            </div>
            <div>
              <h3 className="mb-2 font-semibold text-white">Response Time</h3>
              <p className="text-slate-300">
                Fast responses during booking hours
                <br />
                Cleaner routing starts in minutes
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-form" className="container section">
        <div className="mx-auto max-w-2xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_18px_50px_rgba(15,23,42,0.05)] sm:p-10">
          <h2 className="text-center font-serif text-4xl text-slate-950 sm:text-5xl">Send a general enquiry</h2>
          <p className="mt-4 text-center text-slate-600">
            Use this for partnerships, support and anything that does not need a same-day cleaner.
          </p>

          {isSubmitted && (
            <div className="mb-8 rounded-lg border border-green-200 bg-green-50 p-4">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Thank you for your message. We will reply as soon as possible during office hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`w-full rounded border px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full rounded border px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm font-medium text-gray-700">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject')}
                className={`w-full rounded border px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.subject ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="What is your message about?"
              />
              {errors.subject && <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message')}
                className={`w-full rounded border px-3 py-2 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Please provide details about your inquiry..."
              />
              {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
            </div>

            <div className="flex justify-center">
              <Button type="submit" loading={isSubmitting} size="lg" className="w-full sm:w-auto">
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>For urgent bookings, use WhatsApp above instead of the form.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200/70 bg-white/70 py-16">
        <div className="container max-w-4xl">
          <h2 className="mb-12 text-center font-serif text-4xl text-slate-950 sm:text-5xl">Common Questions</h2>

          <div className="space-y-6">
            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">What&apos;s the fastest way to get a response?</h3>
              <p className="text-gray-600">WhatsApp is the fastest route. That is the main customer booking flow now.</p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Do you offer phone support?</h3>
              <p className="text-gray-600">
                Messaging works better for routing jobs quickly because customers can share photos, postcodes and stain
                details in one thread.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-lg font-semibold text-gray-900">Can cleaners contact me directly?</h3>
              <p className="text-gray-600">
                Yes, once the booking is being arranged, direct coordination may happen where needed for access, timing
                and service details.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
