import Link from 'next/link'
import { ArrowRight, BookOpenText, Clock3, Sparkles, Tag } from 'lucide-react'
import { JsonLd } from '@/components/JsonLd'
import { BlogCard } from '@/components/sections/BlogCard'
import blogPosts from '@/lib/data/blog-posts.json'
import { SITE_NAME, SITE_URL, WHATSAPP_NUMBER } from '@/lib/constants'

export const metadata = {
  title: 'Sofa Cleaning Guides, Pricing & Care Tips',
  description:
    'Explore sofa cleaning guides, UK sofa cleaning prices, stain removal tips, and upholstery care advice to keep your fabric and leather sofas fresh and clean.',
  keywords:
    'sofa cleaning guide, fabric care, leather cleaning, stain removal, upholstery cleaning tips, sofa maintenance, sofa cleaning prices',
  alternates: {
    canonical: `${SITE_URL}/blog`,
  },
  openGraph: {
    title: `Sofa Cleaning Guides, Pricing & Care Tips | ${SITE_NAME}`,
    description:
      'Explore sofa cleaning guides, UK sofa cleaning prices, stain removal tips, and upholstery care advice to keep your fabric and leather sofas fresh and clean.',
    url: `${SITE_URL}/blog`,
    type: 'website',
  },
}

export default function BlogPage() {
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hi, I need help with sofa cleaning.")}`

  const featuredPosts = sortedPosts.slice(0, 3)

  const blogSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: `${SITE_NAME} Blog`,
    description: 'Expert sofa cleaning guides and tips',
    url: `${SITE_URL}/blog`,
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    blogPost: sortedPosts.slice(0, 6).map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.excerpt,
      url: `${SITE_URL}/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      author: {
        '@type': 'Person',
        name: post.author,
      },
      publisher: {
        '@type': 'Organization',
        name: SITE_NAME,
        url: SITE_URL,
      },
    })),
  }

  const popularTopics = [
    'Pricing guides',
    'Fabric care',
    'Stain removal',
    'Leather maintenance',
  ]

  return (
    <div className="homepage-mesh bg-[#f4f1ea] text-slate-900">
      <section className="border-b border-slate-200/70 bg-white">
        <div className="container py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Editorial</p>
            <h1 className="mt-4 font-serif text-5xl leading-[0.98] tracking-[-0.04em] text-slate-950 sm:text-6xl">
              Sofa cleaning guides that feel useful, not padded.
            </h1>
            <p className="mt-6 text-lg text-slate-600 sm:text-xl">
              Pricing, stain rescue, fabric care and maintenance advice written to help homeowners make better
              decisions before they book.
            </p>
          </div>

          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <BookOpenText className="h-5 w-5 text-amber-700" />
              <div className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{sortedPosts.length}</div>
              <p className="mt-2 text-sm text-slate-600">published guides and explainers</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <Tag className="h-5 w-5 text-amber-700" />
              <div className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{popularTopics.length}</div>
              <p className="mt-2 text-sm text-slate-600">core topics readers search first</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_16px_40px_rgba(15,23,42,0.04)]">
              <Clock3 className="h-5 w-5 text-amber-700" />
              <div className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">
                {Math.round(sortedPosts.reduce((sum, post) => sum + post.readingTime, 0) / sortedPosts.length)}
              </div>
              <p className="mt-2 text-sm text-slate-600">minute average reading time</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container section">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">Featured</p>
            <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Start with the highest-intent reads.</h2>
          </div>
          <Link href={whatsappHref} className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 no-underline hover:text-amber-700">
            Book a cleaner
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="group rounded-[2rem] border border-slate-200 bg-white p-7 no-underline shadow-[0_20px_60px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-slate-300"
            >
              <div className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
                {post.keyword}
              </div>
              <h3 className="mt-5 text-3xl font-semibold text-slate-950">{post.title}</h3>
              <p className="mt-4 text-base text-slate-600">{post.excerpt}</p>
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5 text-sm text-slate-500">
                <span>{post.author}</span>
                <span>{post.readingTime} min read</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-slate-200/70 bg-white/70">
        <div className="container section">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-amber-700">All Articles</p>
              <h2 className="mt-3 font-serif text-4xl text-slate-950 sm:text-5xl">Browse the full library.</h2>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-900">
              <Sparkles className="h-4 w-4" />
              Practical content, not filler
            </div>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="container py-16 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-4">
          {popularTopics.map((topic) => (
            <div
              key={topic}
              className="rounded-[1.75rem] border border-slate-200 bg-white p-6 text-center shadow-[0_12px_30px_rgba(15,23,42,0.04)]"
            >
              <p className="text-lg font-semibold text-slate-950">{topic}</p>
            </div>
          ))}
        </div>
      </section>

      <JsonLd data={blogSchema} />
    </div>
  )
}
