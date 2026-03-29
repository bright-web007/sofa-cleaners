'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'

interface WaitlistFormProps {
  areaName: string
}

export function WaitlistForm({ areaName }: WaitlistFormProps) {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!email || isSubmitting) return
    
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitted(true)
    setIsSubmitting(false)
  }

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg p-8 text-center shadow-sm">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          You're on the list!
        </h3>
        <p className="text-gray-600 mb-4">
          We'll notify you as soon as professional sofa cleaners become available in {areaName}.
        </p>
        <p className="text-sm text-gray-500">
          In the meantime, you can explore cleaners in nearby areas.
        </p>
      </div>
    )
  }

  return (
    <div className="max-w-md mx-auto bg-white border border-gray-200 rounded-lg p-8 shadow-sm">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-[#F5F0FA] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-[#7B3FA0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5-5-5h5v-5a7.5 7.5 0 1115 0z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">
          No cleaners available yet
        </h3>
        <p className="text-gray-600">
          Be the first to know when professional sofa cleaners become available in {areaName}.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-3 py-2 border border-gray-300 rounded-lg shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#7B3FA0] focus:border-[#7B3FA0] sm:text-sm"
            placeholder="your.email@example.com"
            required
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          className="w-full justify-center bg-[#7B3FA0] hover:bg-[#7B3FA0]/90"
          size="lg"
          loading={isSubmitting}
          disabled={!email || isSubmitting}
        >
          {isSubmitting ? 'Joining waitlist...' : 'Join Waitlist'}
        </Button>
      </form>

      <div className="mt-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex items-start space-x-2">
          <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div className="text-sm text-blue-800">
            <p className="font-medium">What happens next?</p>
            <p>We'll email you immediately when vetted cleaners join our platform in your area.</p>
          </div>
        </div>
      </div>
    </div>
  )
}