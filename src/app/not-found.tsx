import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page not found</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. The cleaner or location you're looking for might have moved or doesn't exist.
        </p>
        <div className="space-x-4">
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-[#7B3FA0] text-white font-medium rounded-lg hover:bg-[#7B3FA0]/90 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/find-a-cleaner"
            className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Browse Cleaners
          </Link>
        </div>
      </div>
    </div>
  )
}