'use client'

import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  error?: string
  helperText?: string
  options: { value: string; label: string }[]
  placeholder?: string
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, helperText, options, placeholder, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, '-') || 'select'

    return (
      <div className="space-y-2">
        {label && (
          <label 
            htmlFor={selectId} 
            className="block text-sm font-medium text-gray-700"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "block w-full px-3 py-2 pr-8 border rounded-md shadow-sm bg-white",
              "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
              "disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed",
              error 
                ? "border-red-300 text-red-900 focus:border-red-500 focus:ring-red-500" 
                : "border-gray-300",
              className
            )}
            aria-describedby={
              error ? `${selectId}-error` : helperText ? `${selectId}-description` : undefined
            }
            aria-invalid={error ? 'true' : 'false'}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
        {error && (
          <p className="text-sm text-red-600" id={`${selectId}-error`} role="alert">
            {error}
          </p>
        )}
        {helperText && !error && (
          <p className="text-sm text-gray-500" id={`${selectId}-description`}>
            {helperText}
          </p>
        )}
      </div>
    )
  }
)

Select.displayName = 'Select'

export { Select }