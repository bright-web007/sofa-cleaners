'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'
import { TableOfContents } from '@/components/sections/TableOfContents'
import { JsonLd } from '@/components/JsonLd'
import { BlogPost } from '@/types'
import Link from 'next/link'

interface Props {
  post: BlogPost
}

interface Heading {
  id: string
  text: string
  level: number
}

// Manual markdown parser for specific formatting
function parseMarkdown(markdown: string): { html: string; headings: Heading[] } {
  const headings: Heading[] = []
  let html = markdown

  // Process headings (## and ###)
  html = html.replace(/^(#{2,3})\s+(.+)$/gm, (_match, hashes, text) => {
    const level = hashes.length
    const id = text.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .trim()
    
    headings.push({ id, text, level })
    
    return `<h${level} id="${id}" class="${level === 2 ? 'text-2xl lg:text-3xl font-bold text-gray-900 mb-6 mt-12 first:mt-0' : 'text-xl lg:text-2xl font-semibold text-gray-900 mb-4 mt-8'}">${text}</h${level}>`
  })

  // Process bold text **text**
  html = html.replace(/\*\*(.*?)\*\*/g, '<strong class="font-semibold text-gray-900">$1</strong>')

  // Process italic text *text*
  html = html.replace(/\*(.*?)\*/g, '<em class="italic">$1</em>')

  // Process bullet points
  html = html.replace(/^- (.+)$/gm, (_match, text) => `<li class="mb-2">${text}</li>`)
  html = html.replace(/(<li.*?>.*?<\/li>[\s\S]*?)+/g, (match) => 
    `<ul class="list-disc list-inside space-y-2 mb-6 text-gray-700">${match}</ul>`
  )

  // Process paragraphs (lines that aren't headings, lists, or already processed)
  const lines = html.split('\n')
  const processedLines = lines.map(line => {
    const trimmed = line.trim()
    if (!trimmed || 
        trimmed.startsWith('<h') || 
        trimmed.startsWith('<ul') || 
        trimmed.startsWith('<li') ||
        trimmed.startsWith('</ul>')) {
      return line
    }
    return `<p class="mb-6 text-gray-700 leading-relaxed">${trimmed}</p>`
  })
  
  html = processedLines.join('\n')

  return { html, headings }
}

export function BlogPostClient({ post }: Props) {
  const [showModal, setShowModal] = useState(false)
  const [parsedContent, setParsedContent] = useState<{ html: string; headings: Heading[] }>({ html: '', headings: [] })

  useEffect(() => {
    const parsed = parseMarkdown(post.body)
    setParsedContent(parsed)
  }, [post.body])

  // Calculate reading time
  const readingTime = Math.ceil(post.body.split(' ').length / 200)

  // Article JSON-LD Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: `https://sofacleaner.org/images/blog/${post.slug}.jpg`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      "name": post.author,
      "url": "https://sofacleaner.org"
    },
    publisher: {
      "@type": "Organization",
      "name": "SofaCleaner.org",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sofacleaner.org/logo.png"
      }
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sofacleaner.org/blog/${post.slug}`
    },
    articleSection: "Cleaning Guides",
    wordCount: post.body.split(' ').length,
    keywords: post.keyword
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <nav className="bg-gray-50 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{post.title}</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Table of Contents - Desktop Sidebar */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-8">
              <TableOfContents content={post.body} />
            </div>
          </aside>

          {/* Main Content */}
          <article className="lg:col-span-9">
            {/* Article Header */}
            <header className="mb-8 lg:mb-12">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  <span 
                    className="text-xs font-medium bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {post.keyword}
                  </span>
                </div>
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                  {post.title}
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-gray-500 border-t border-b border-gray-200 py-4">
                <div className="flex items-center space-x-6 mb-2 sm:mb-0">
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    {post.author}
                  </span>
                  <span className="flex items-center">
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {readingTime} min read
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <span>
                    Published: {new Date(post.publishedAt).toLocaleDateString('en-GB')}
                  </span>
                  {post.updatedAt !== post.publishedAt && (
                    <span>
                      Updated: {new Date(post.updatedAt).toLocaleDateString('en-GB')}
                    </span>
                  )}
                </div>
              </div>
            </header>

            {/* Table of Contents - Mobile */}
            <div className="lg:hidden mb-8">
              <TableOfContents content={post.body} />
            </div>

            {/* Article Content */}
            <div 
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-strong:text-gray-900 prose-ul:text-gray-700 prose-li:text-gray-700"
              dangerouslySetInnerHTML={{ __html: parsedContent.html }}
            />

            {/* CTA Section */}
            <div className="mt-12 p-6 bg-gradient-to-r from-primary/5 to-purple/5 rounded-2xl border border-primary/20">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Need Professional Help?
                </h3>
                <p className="text-gray-600 mb-6">
                  Get instant quotes from verified sofa cleaning professionals in your area. No commitment required.
                </p>
                <Button 
                  onClick={() => setShowModal(true)}
                  size="lg"
                  className="bg-primary text-primary/80 hover:text-[white] hover:bg-primary/90"
                >
                  Get Free Quotes
                </Button>
              </div>
            </div>

            {/* Article Navigation */}
            <nav className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row justify-between">
                <Link 
                  href="/blog" 
                  className="inline-flex items-center text-primary hover:text-primary/80 transition-colors mb-4 sm:mb-0"
                >
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to all guides
                </Link>
                <Button 
                  onClick={() => setShowModal(true)}
                  variant="ghost"
                  className="border-primary text-primary hover:bg-[purple] hover:text-white"
                >
                  Get Professional Quote
                </Button>
              </div>
            </nav>
          </article>
        </div>
      </div>

      {/* Channel Select Modal */}
      <ChannelSelectModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      {/* JSON-LD Schema */}
      <JsonLd data={articleSchema} />
    </div>
  )
}