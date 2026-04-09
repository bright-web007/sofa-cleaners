import type { StaticImageData } from 'next/image'

export function resolveImageSrc(
  img: string | StaticImageData | { src: string } | undefined | null
): string {
  if (!img) return ''
  if (typeof img === 'string') return img
  if (typeof img === 'object' && 'src' in img) return (img as { src: string }).src
  return ''
}

const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  const q = quality ?? 75
  // For local/static images served by Next.js, return the src with width/quality params
  // This works with the default Next.js image optimization pipeline
  if (src.startsWith('/') || src.startsWith('/_next/')) {
    return `${src}?w=${width}&q=${q}`
  }
  // For external URLs, pass through as-is with params
  const url = new URL(src)
  url.searchParams.set('w', String(width))
  url.searchParams.set('q', String(q))
  return url.toString()
}

export default imageLoader
