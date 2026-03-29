'use client'

import { useEffect } from 'react'
import * as Sentry from '@sentry/nextjs'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    Sentry.captureException(error)
  }, [error])

  return (
    <html lang="en">
      <body className="bg-[#f4f1ea] text-slate-900">
        <div className="flex min-h-screen items-center justify-center px-6">
          <div className="max-w-lg rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Something broke</p>
            <h2 className="mt-4 font-serif text-4xl text-slate-950">We’ve logged the error.</h2>
            <p className="mt-4 text-base text-slate-600">
              Please try again. If the problem continues, the error has been captured for investigation.
            </p>
            <button
              onClick={() => reset()}
              className="mt-8 inline-flex items-center justify-center rounded-2xl bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Try again
            </button>
          </div>
        </div>
      </body>
    </html>
  )
}
