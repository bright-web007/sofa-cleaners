import Link from 'next/link'
import { Clock3, User2 } from 'lucide-react'
import { BlogPost } from '@/types'

interface BlogCardProps {
  post: BlogPost
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.05)] transition hover:-translate-y-1 hover:border-slate-300">
      <div className="inline-flex items-center rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-amber-800">
        {post.keyword}
      </div>

      <h2 className="mt-5 text-2xl font-semibold text-slate-950 transition-colors group-hover:text-amber-700">
        <Link href={`/blog/${post.slug}`} className="no-underline text-inherit hover:text-inherit">
          {post.title}
        </Link>
      </h2>

      <p className="mt-4 text-base text-slate-600 line-clamp-3">{post.excerpt}</p>

      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-slate-500">
        <div className="flex items-center gap-1.5">
          <User2 className="h-4 w-4" />
          <span>{post.author}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Clock3 className="h-4 w-4" />
          <span>{post.readingTime} min read</span>
        </div>
        <time dateTime={post.publishedAt}>
          {new Date(post.publishedAt).toLocaleDateString('en-GB', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          })}
        </time>
      </div>

      <div className="mt-6 border-t border-slate-100 pt-5">
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 no-underline transition-colors hover:text-amber-700"
        >
          Read article
        </Link>
      </div>
    </article>
  )
}
