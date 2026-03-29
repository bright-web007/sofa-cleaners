'use client'

import * as React from "react"
import { cn } from "@/lib/utils"

interface AccordionItemProps {
  question: string
  answer: string
  isOpen?: boolean
  onToggle?: () => void
}

export function AccordionItem({ question, answer, isOpen = false, onToggle }: AccordionItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className={cn(
          "w-full text-left p-4 flex justify-between items-center hover:bg-gray-50 transition-colors",
          isOpen && "bg-gray-50"
        )}
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <h3 className="font-medium text-gray-900 pr-4">{question}</h3>
        <svg
          className={cn(
            "w-5 h-5 text-gray-500 transition-transform",
            isOpen && "rotate-180"
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-gray-700 border-t border-gray-100">
          <div className="pt-4">{answer}</div>
        </div>
      )}
    </div>
  )
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>
  className?: string
  allowMultiple?: boolean
}

export function Accordion({ items, className, allowMultiple = false }: AccordionProps) {
  const [openItems, setOpenItems] = React.useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    setOpenItems(prev => {
      const newSet = new Set(prev)
      
      if (newSet.has(index)) {
        newSet.delete(index)
      } else {
        if (!allowMultiple) {
          newSet.clear()
        }
        newSet.add(index)
      }
      
      return newSet
    })
  }

  return (
    <div className={cn("space-y-4", className)}>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openItems.has(index)}
          onToggle={() => toggleItem(index)}
        />
      ))}
    </div>
  )
}