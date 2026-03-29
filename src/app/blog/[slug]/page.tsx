import { BlogPostClient } from './BlogPostClient'
import blogPosts from '@/lib/data/blog-posts.json'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'

interface Props {
  params: {
    slug: string
  }
}

// Generate static paths at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug)
  
  if (!post) {
    return {
      title: 'Blog Post Not Found - SofaCleaner.org',
      description: 'The requested blog post could not be found.'
    }
  }

  const publishedTime = new Date(post.publishedAt).toISOString()
  const modifiedTime = new Date(post.updatedAt).toISOString()

  return {
    title: `${post.title} - SofaCleaner.org`,
    description: post.excerpt,
    keywords: post.keyword,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://sofacleaner.org/blog/${post.slug}`,
      type: 'article',
      publishedTime,
      modifiedTime,
      authors: [post.author],
      tags: [post.keyword],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@sofacleaner',
    },
    alternates: {
      canonical: `https://sofacleaner.org/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}