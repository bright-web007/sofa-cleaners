'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters')
})

type ContactFormData = z.infer<typeof contactSchema>

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema)
  })

  const onSubmit = async (data: ContactFormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const contactMethods = [
    {
      title: 'WhatsApp',
      description: 'Book your cleaner instantly - Available 8AM-8PM',
      icon: '💬',
      action: 'Get Cleaner Now',
      href: 'https://wa.me/447123456789?text=Hi%21%20I%20need%20a%20sofa%20cleaner%20today.%20When%20can%20someone%20come%3F',
      primary: true
    },
    {
      title: 'Telegram',
      description: 'Alternative instant booking channel',
      icon: '📱',
      action: 'Get Cleaner Now',
      href: 'https://t.me/sofacleaner?start=book_now',
      primary: true
    },
    {
      title: 'General Inquiries',
      description: 'For questions not related to booking',
      icon: '📧',
      action: 'Contact Form Below',
      href: '#contact-form',
      primary: false
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Get a Cleaner Today - In Minutes!
          </h1>
          <p className="text-xl text-gray-600">
            Chat with us instantly to book your sofa cleaning service. No forms, no waiting - just results.
          </p>
        </div>
      </div>

      {/* Contact Methods */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Start Your Booking Now
          </h2>
          
          <div className="grid gap-8 md:grid-cols-3">
            {contactMethods.map((method, index) => (
              <div 
                key={index} 
                className={`text-center p-8 rounded-lg border-2 transition-all hover:shadow-md ${
                  method.primary 
                    ? 'border-primary bg-primary-light' 
                    : 'border-gray-200 bg-white hover:border-primary/50'
                }`}
              >
                <div className="text-4xl mb-4">{method.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {method.description}
                </p>
                <a
                  href={method.href}
                  className={`inline-flex items-center justify-center px-6 py-3 rounded font-medium transition-colors ${
                    method.primary
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  {method.action}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Info Bar */}
      <div className="bg-gray-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 text-center">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Booking Hours</h3>
              <p className="text-gray-600">
                Monday – Saturday<br />
                8:00 AM – 8:00 PM
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Response Time</h3>
              <p className="text-gray-600">
                Instant responses during booking hours<br />
                Get matched with cleaners in minutes
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div id="contact-form" className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Send Us a Message
          </h2>
          
          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-green-800">
                    Thank you for your message! We'll get back to you within 2 hours during office hours.
                  </p>
                </div>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                {...register('name')}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.name ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Your full name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                {...register('email')}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.email ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="your.email@example.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                Subject *
              </label>
              <input
                type="text"
                id="subject"
                {...register('subject')}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.subject ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="What is your message about?"
              />
              {errors.subject && (
                <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                rows={6}
                {...register('message')}
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
                  errors.message ? 'border-red-300' : 'border-gray-300'
                }`}
                placeholder="Please provide details about your inquiry..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex justify-center">
              <Button
                type="submit"
                loading={isSubmitting}
                size="lg"
                className="w-full sm:w-auto"
              >
                {isSubmitting ? 'Sending Message...' : 'Send Message'}
              </Button>
            </div>
          </form>

          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              For immediate assistance, we recommend using WhatsApp or Telegram above.
            </p>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Common Questions
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What's the fastest way to get a response?
              </h3>
              <p className="text-gray-600">
                WhatsApp is our fastest communication method. We typically respond within 30 minutes during office hours.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Do you offer phone support?
              </h3>
              <p className="text-gray-600">
                We primarily use messaging to ensure we can provide accurate quotes and maintain records. This also allows us to send photos and documentation easily.
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can cleaners contact me directly?
              </h3>
              <p className="text-gray-600">
                We facilitate all initial communication to ensure quality and security. Once you've chosen a cleaner, you can communicate with them directly for scheduling and service details.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}