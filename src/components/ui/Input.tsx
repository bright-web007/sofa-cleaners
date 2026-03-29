'use client'

import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string | undefined
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, helperText, id, type = 'text', ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-') || 'input'

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={inputId} 
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            type={type}
            id={inputId}
            className={cn(
              "block w-full px-3 py-2 border rounded-lg shadow-sm placeholder-gray-400",
              "focus:outline-none focus:ring-2 focus:ring-[#7B3FA0] focus:border-[#7B3FA0]",
              "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
              "text-[#1A1A1A]",
              error 
                ? "border-red-300 text-red-900 placeholder-red-300 focus:border-red-500 focus:ring-red-500" 
                : "border-[#E5E0ED]",
              className
            )}
            aria-describedby={
              error ? `${inputId}-error` : helperText ? `${inputId}-description` : undefined
            }
            aria-invalid={error ? 'true' : 'false'}
            {...props}
          />
        </div>
        {error && (
          <p className="text-sm text-red-600" id={`${inputId}-error`} role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-gray-500" id={`${inputId}-description`}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }