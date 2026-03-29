import { Cleaner } from '@/types'
import { CleanerCard } from '@/components/cleaner/CleanerCard'

interface CleanerGridProps {
  cleaners: Cleaner[]
  className?: string
}

export function CleanerGrid({ cleaners, className = '' }: CleanerGridProps) {
  if (cleaners.length === 0) {
    return (
      <div className={`text-center py-12 ${className}`}>
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No cleaners found
          </h3>
          <p className="text-gray-500 mb-6">
            Try adjusting your filters or check nearby areas for available cleaners.
          </p>
          <div className="space-y-3 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>New cleaners join our platform regularly</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>All cleaners are vetted and insured</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 ${className}`}>
      {cleaners.map((cleaner) => (
        <CleanerCard key={cleaner.id} cleaner={cleaner} />
      ))}
    </div>
  )
}