import { MetadataRoute } from 'next'
import cities from '@/lib/data/cities.json'
import cleaners from '@/lib/data/cleaners.json'
import services from '@/lib/data/services.json'
import blogPosts from '@/lib/data/blog-posts.json'
import { createSlug } from '@/lib/utils'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://sofacleaner.org'
  
  const urls: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/find-a-cleaner`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5,
    },
  ]

  // Add city pages
  cities.forEach((city) => {
    urls.push({
      url: `${baseUrl}/${createSlug(city.name)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  // Add service pages
  services.forEach((service) => {
    urls.push({
      url: `${baseUrl}/services/${createSlug(service.name)}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    })
  })

  // Add cleaner profile pages
  cleaners.forEach((cleaner) => {
    urls.push({
      url: `${baseUrl}/cleaner/${cleaner.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  })

  // Add blog post pages
  blogPosts.forEach((post) => {
    urls.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.publishedAt),
      changeFrequency: 'yearly',
      priority: 0.5,
    })
  })

  return urls
}
