'use client'

import React, { forwardRef } from 'react'
import { cn } from '@/lib/utils'
import { Check } from 'lucide-react'

interface CheckboxProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string
  error?: string | undefined
  description?: string
}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, error, description, id, ...props }, ref) => {
    const checkboxId = id || label?.toLowerCase().replace(/\s+/g, '-') || 'checkbox'

    return (
      <div className="space-y-2">
        <div className="flex items-start space-x-3">
          <div className="relative flex items-center">
            <input
              ref={ref}
              type="checkbox"
              id={checkboxId}
              className={cn(
                "peer sr-only",
                className
              )}
              aria-describedby={
                error ? `${checkboxId}-error` : description ? `${checkboxId}-description` : undefined
              }
              aria-invalid={error ? 'true' : 'false'}
              {...props}
            />
            <div className={cn(
              "h-5 w-5 rounded border-2 bg-white transition-all duration-200",
              "peer-focus:ring-2 peer-focus:ring-primary peer-focus:ring-offset-2",
              "peer-checked:bg-primary peer-checked:border-primary",
              "peer-disabled:bg-gray-100 peer-disabled:border-gray-300 peer-disabled:cursor-not-allowed",
              error
                ? "border-red-300 peer-focus:ring-red-500"
                : "border-gray-300",
              "flex items-center justify-center"
            )}>
              <Check 
                className={cn(
                  "h-3 w-3 text-white transition-opacity duration-200",
                  "peer-checked:opacity-100 opacity-0"
                )}
              />
            </div>
          </div>
          {label && (
            <label 
              htmlFor={checkboxId} 
              className="text-sm font-medium text-gray-700 cursor-pointer leading-5"
            >
              {label}
            </label>
          )}
        </div>
        {error && (
          <p className="text-sm text-red-600" id={`${checkboxId}-error`} role="alert">
            {error}
          </p>
        )}
        {description && !error && (
          <p className="text-sm text-gray-500" id={`${checkboxId}-description`}>
            {description}
          </p>
        )}
      </div>
    )
  }
)

Checkbox.displayName = 'Checkbox'

export { Checkbox }