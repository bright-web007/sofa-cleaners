'use client'

import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string
  error?: string | undefined
  helperText?: string
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, error, helperText, id, ...props }, ref) => {
    const textareaId = id || label?.toLowerCase().replace(/\s+/g, '-') || 'textarea'

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={textareaId} 
            className="block text-sm font-medium text-[#1A1A1A]"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <textarea
            ref={ref}
            id={textareaId}
            className={cn(
              "block w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400 resize-vertical",
              "focus:outline-none focus:ring-2 focus:ring-[#7B3FA0] focus:border-[#7B3FA0]",
              "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
              "text-[#1A1A1A] min-h-[80px]",
              error 
                ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500" 
                : "border-[#E5E0ED]",
              className
            )}
            aria-describedby={
              error ? `${textareaId}-error` : helperText ? `${textareaId}-description` : undefined
            }
            aria-invalid={error ? 'true' : 'false'}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-red-600" id={`${textareaId}-error`} role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-[#555555]" id={`${textareaId}-description`}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Textarea.displayName = 'Textarea'

export { Textarea }