import Link from 'next/link'
import blogPostsData from '@/lib/data/blog-posts.json'

export function BlogPreview() {
  // Get the latest 3 blog posts
  const latestPosts = blogPostsData.slice(0, 3)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Sofa cleaning guides
          </h2>
          <p className="text-xl text-gray-600">
            Expert tips and advice from professional cleaners
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
            >
              {/* Article Image Placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary-light to-primary/20 flex items-center justify-center">
                <svg className="w-16 h-16 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19,19H5V5H19M19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5A2,2 0 0,0 19,3M13.96,12.29L11.21,15.83L9.25,13.47L6.5,17H17.5L13.96,12.29Z"/>
                </svg>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.readingTime} min read</span>
                  <time dateTime={post.publishedAt}>
                    {new Date(post.publishedAt).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </time>
                </div>
                
                <Link
                  href={`/guides/${post.slug}`}
                  className="inline-block mt-4 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/guides"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-primary bg-primary-light hover:bg-primary hover:text-white transition-colors"
          >
            View all guides
          </Link>
        </div>
      </div>
    </section>
  )
}