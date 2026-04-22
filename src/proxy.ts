import { NextRequest, NextResponse } from 'next/server'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl
  const response = NextResponse.next()

  // Security headers (X-Content-Type-Options, X-Frame-Options, X-XSS-Protection also set in next.config.js)
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  
  // CSP header — 'unsafe-eval' and 'unsafe-inline' only permitted in local dev
  const isDev = process.env.NODE_ENV === 'development'
  const scriptSrc = isDev
    ? "'self' 'unsafe-eval' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com"
    : "'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com"
  response.headers.set(
    'Content-Security-Policy',
    `default-src 'self'; script-src ${scriptSrc}; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:; connect-src 'self' https://www.google-analytics.com https://*.ingest.sentry.io; frame-src 'self' https://www.youtube.com;`
  )

  // Redirect common typos and old paths
  if (pathname === '/sofacleaner' || pathname === '/sofa-cleaner') {
    return NextResponse.redirect(new URL('/find-a-cleaner', request.url), 301)
  }

  // Cleaner dashboard authentication check
  if (pathname.startsWith('/cleaner-dashboard')) {
    const cleanerSession = request.cookies.get('cleaner_session')
    const sessionSecret = process.env.CLEANER_SESSION_SECRET ?? 'mock'
    if (!cleanerSession || cleanerSession.value !== sessionSecret) {
      return NextResponse.redirect(new URL('/cleaner/login', request.url), 302)
    }
  }

  // Block access to admin areas
  if (pathname.startsWith('/admin')) {
    return NextResponse.redirect(new URL('/', request.url), 302)
  }

  // Handle trailing slashes
  if (pathname !== '/' && pathname.endsWith('/')) {
    const newUrl = new URL(request.url)
    newUrl.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(newUrl, 301)
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - robots.txt
     * - sitemap.xml
     */
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
