'use client'

import React from 'react'
import { cn } from '@/lib/utils'

interface ProgressBarProps {
  steps: string[]
  currentStep: number
  className?: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ steps, currentStep, className }) => {
  return (
    <div className={cn("w-full", className)}>
      <div className="flex items-center justify-between mb-4">
        {steps.map((step, index) => {
          const stepNumber = index + 1
          const isActive = stepNumber === currentStep
          const isCompleted = stepNumber < currentStep
          const isUpcoming = stepNumber > currentStep
          
          return (
            <React.Fragment key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={cn(
                    "w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-medium transition-all duration-200",
                    isCompleted && "bg-primary border-primary text-white",
                    isActive && "border-primary text-primary bg-white",
                    isUpcoming && "border-gray-300 text-gray-400 bg-white"
                  )}
                >
                  {isCompleted ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    stepNumber
                  )}
                </div>
                <span className={cn(
                  "text-xs font-medium mt-2 text-center max-w-20",
                  isActive && "text-primary",
                  isCompleted && "text-gray-600",
                  isUpcoming && "text-gray-400"
                )}>
                  {step}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className="flex-1 h-0.5 mx-2 bg-gray-200 relative top-[-16px]">
                  <div
                    className={cn(
                      "h-full bg-primary transition-all duration-300",
                      stepNumber < currentStep ? "w-full" : "w-0"
                    )}
                  />
                </div>
              )}
            </React.Fragment>
          )
        })}
      </div>
    </div>
  )
}

export { ProgressBar }