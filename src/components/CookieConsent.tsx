'use client'

import { useState, useEffect } from 'react'
import { Cookie } from 'lucide-react'
import { Button } from '@/components/ui/Button'

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Check if user has already made a choice
    const consentGiven = localStorage.getItem('cookie-consent')
    if (!consentGiven) {
      setShowConsent(true)
    }
    setIsLoaded(true)
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShowConsent(false)
    
    // Enable analytics and other cookies here
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'granted'
      })
    }
  }

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined')
    setShowConsent(false)
    
    // Keep analytics disabled
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: 'denied'
      })
    }
  }

  if (!isLoaded || !showConsent) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-white border-t border-[#E5E0ED] shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <Cookie className="w-5 h-5 text-[#7B3FA0] mt-0.5 flex-shrink-0" />
          <div className="text-sm">
            <p className="text-[#1A1A1A] font-medium mb-1">
              We use cookies to improve your experience
            </p>
            <p className="text-[#555555]">
              We use analytics cookies to understand how you interact with our website. 
              You can{' '}
              <a 
                href="/cookies" 
                className="text-[#7B3FA0] hover:underline"
              >
                learn more about our cookie policy
              </a>{' '}
              or manage your preferences.
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            variant="secondary"
            size="sm"
            onClick={handleDecline}
            className="flex-1 sm:flex-none"
          >
            Decline
          </Button>
          <Button
            size="sm"
            onClick={handleAccept}
            className="flex-1 sm:flex-none"
          >
            Accept All
          </Button>
        </div>
      </div>
    </div>
  )
}
