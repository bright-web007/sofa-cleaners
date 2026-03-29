'use client'

import { Cleaner } from '@/types'
import { CleanerCard } from './CleanerCard'

interface CleanerGridProps {
  cleaners: Cleaner[]
}

export function CleanerGrid({ cleaners }: CleanerGridProps) {
  if (cleaners.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-gray-500 text-lg font-medium">No cleaners found</div>
        <p className="text-gray-400 mt-2">Try adjusting your search criteria</p>
      </div>
    )
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {cleaners.map((cleaner) => (
        <CleanerCard key={cleaner.id} cleaner={cleaner} />
      ))}
    </div>
  )
}