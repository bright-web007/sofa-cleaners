'use client'

import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

interface TocItem {
  id: string
  text: string
  level: number
}

interface TableOfContentsProps {
  content: string
  className?: string
}

export function TableOfContents({ content, className }: TableOfContentsProps) {
  const [tocItems, setTocItems] = useState<TocItem[]>([])
  const [activeId, setActiveId] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)

  // Extract headings from markdown content
  useEffect(() => {
    const headingRegex = /^(#{2,3})\s+(.+)$/gm
    const headings: TocItem[] = []
    let match

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length
      const text = match[2].trim()
      const id = text
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .trim()
      
      headings.push({ id, text, level })
    }

    setTocItems(headings)
  }, [content])

  // Track active section on scroll
  useEffect(() => {
    if (tocItems.length === 0 || typeof window === 'undefined') return

    const handleScroll = () => {
      const headings = tocItems.map(item => document.getElementById(item.id)).filter(Boolean)
      
      if (headings.length === 0) return

      // Find the current section based on scroll position
      let current = headings[0]
      const scrollPos = window.scrollY + 150 // Offset for better UX

      for (const heading of headings) {
        if (heading && heading.offsetTop <= scrollPos) {
          current = heading
        }
      }

      if (current) {
        setActiveId(current.id)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Set initial active section

    return () => window.removeEventListener('scroll', handleScroll)
  }, [tocItems])

  const scrollToSection = (id: string) => {
    if (typeof window !== 'undefined') {
      const element = document.getElementById(id)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
    setIsOpen(false) // Close mobile menu
  }

  if (tocItems.length === 0) {
    return null
  }

  return (
    <>
      {/* Desktop TOC - Sticky Sidebar */}
      <div className={cn(
        "hidden lg:block",
        className
      )}>
        <div className="sticky top-8">
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
              Table of Contents
            </h3>
            <nav aria-label="Table of contents">
              <ul className="space-y-2">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "w-full text-left text-sm transition-colors hover:text-primary",
                        item.level === 2 ? "font-medium pl-0" : "pl-4 text-gray-600",
                        activeId === item.id 
                          ? "text-primary font-medium border-l-2 border-primary pl-3" 
                          : item.level === 2 
                            ? "text-gray-900" 
                            : "text-gray-600"
                      )}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* Mobile TOC - Collapsible Section */}
      <div className="lg:hidden mb-8">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors"
          aria-expanded={isOpen}
        >
          <div className="flex items-center">
            <svg className="w-5 h-5 mr-2 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
            <span className="font-medium text-gray-900">Table of Contents</span>
          </div>
          <svg 
            className={cn(
              "w-4 h-4 text-gray-500 transition-transform",
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
          <div className="mt-3 p-4 bg-white rounded-lg border border-gray-200">
            <nav aria-label="Table of contents">
              <ul className="space-y-3">
                {tocItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={cn(
                        "w-full text-left text-sm transition-colors hover:text-primary",
                        item.level === 2 ? "font-medium pl-0" : "pl-4 text-gray-600",
                        activeId === item.id 
                          ? "text-primary font-medium" 
                          : item.level === 2 
                            ? "text-gray-900" 
                            : "text-gray-600"
                      )}
                    >
                      {item.text}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </>
  )
}