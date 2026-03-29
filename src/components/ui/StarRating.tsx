'use client'

import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface StarRatingProps {
  rating: number
  showNumeric?: boolean
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function StarRating({ rating, showNumeric = true, size = 'md', className }: StarRatingProps) {
  const sizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4', 
    lg: 'w-5 h-5'
  }

  const textSizes = {
    sm: 'text-xs',
    md: 'text-sm',
    lg: 'text-base'
  }

  const fullStars = Math.floor(rating)
  const hasHalfStar = rating % 1 >= 0.5
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)

  return (
    <div className={cn('flex items-center gap-1', className)}>
      <div className="flex items-center">
        {/* Full stars */}
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            className={cn(sizes[size], 'fill-[#E8A020] text-[#E8A020]')}
          />
        ))}
        
        {/* Half star */}
        {hasHalfStar && (
          <div className="relative">
            <Star className={cn(sizes[size], 'text-gray-300')} />
            <Star 
              className={cn(
                sizes[size], 
                'absolute inset-0 fill-[#E8A020] text-[#E8A020]',
                'clip-path-half'
              )}
              style={{
                clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)'
              }}
            />
          </div>
        )}
        
        {/* Empty stars */}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            className={cn(sizes[size], 'text-gray-300')}
          />
        ))}
      </div>
      
      {showNumeric && (
        <span className={cn(
          textSizes[size], 
          'font-medium text-[#1A1A1A]'
        )}>
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  )
}