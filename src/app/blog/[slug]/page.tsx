import { BlogPostClient } from './BlogPostClient'
import blogPosts from '@/lib/data/blog-posts.json'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

interface Props {
  params: Promise<{
    slug: string
  }>
}

// Generate static paths at build time
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)
  
  if (!post) {
    return {
      title: `Blog Post Not Found | ${SITE_NAME}`,
      description: 'The requested blog post could not be found.'
    }
  }

  const publishedTime = new Date(post.publishedAt).toISOString()
  const modifiedTime = new Date(post.updatedAt).toISOString()

  return {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    keywords: post.keyword,
    authors: [{ name: post.author }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
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
      creator: `@${SITE_NAME.toLowerCase()}`,
    },
    alternates: {
      canonical: `${SITE_URL}/blog/${post.slug}`,
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return <BlogPostClient post={post} />
}