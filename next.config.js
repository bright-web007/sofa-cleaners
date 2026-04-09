const { withSentryConfig } = require('@sentry/nextjs')

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'via.placeholder.com' },
      { protocol: 'https', hostname: 'i.pravatar.cc' },
    ],
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 60,
  },

  output: 'standalone',

  // Enable compression
  compress: true,

  // Optimize bundles
  experimental: {
    // optimizeCss: true, // Temporarily disabled due to missing critters module
    optimizePackageImports: ['lucide-react'],
  },

  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          }
        ],
      },
      {
        source: '/sw.js',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate'
          }
        ]
      },

    ]
  },

  // Redirects for SEO
  async redirects() {
    return [
      // General navigation
      { source: '/home', destination: '/', permanent: true },
      { source: '/cleaners', destination: '/find-a-cleaner', permanent: true },
      { source: '/book', destination: '/find-a-cleaner', permanent: true },
      { source: '/booking', destination: '/find-a-cleaner', permanent: true },
      { source: '/quote', destination: '/pricing', permanent: true },
      { source: '/get-a-quote', destination: '/pricing', permanent: true },
      { source: '/login', destination: '/cleaner/login', permanent: true },

      // Service slug variations
      { source: '/sofa-cleaning', destination: '/services/fabric-sofa-cleaning', permanent: true },
      { source: '/leather-cleaning', destination: '/services/leather-sofa-cleaning', permanent: true },
      { source: '/leather-sofa', destination: '/services/leather-sofa-cleaning', permanent: true },
      { source: '/stain-removal', destination: '/services/stain-removal', permanent: true },
      { source: '/velvet-cleaning', destination: '/services/velvet-sofa-cleaning', permanent: true },
      { source: '/end-of-tenancy-cleaning', destination: '/services/end-of-tenancy', permanent: true },
      { source: '/end-of-tenancy', destination: '/services/end-of-tenancy', permanent: true },
    ]
  },

}

module.exports = withSentryConfig(nextConfig, {
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,
  widenClientFileUpload: true,
  webpack: {
    treeshake: {
      removeDebugLogging: true,
    },
    automaticVercelMonitors: true,
  },
})
