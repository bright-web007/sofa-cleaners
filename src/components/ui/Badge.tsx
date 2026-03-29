'use client'

import { cn } from '@/lib/utils'

interface BadgeProps {
  variant: 'verified' | 'insured' | 'accredited' | 'available' | 'busy'
  children: React.ReactNode
  className?: string
}

export function Badge({ variant, children, className }: BadgeProps) {
  const variants = {
    verified: 'bg-green-100 text-green-800 border border-green-200',
    insured: 'bg-blue-100 text-blue-800 border border-blue-200', 
    accredited: 'bg-amber-100 text-amber-800 border border-amber-200',
    available: 'bg-green-100 text-green-800 border border-green-200',
    busy: 'bg-gray-100 text-gray-600 border border-gray-200'
  }

  return (
    <span className={cn(
      'inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-full',
      variants[variant],
      className
    )}>
      {children}
    </span>
  )
}