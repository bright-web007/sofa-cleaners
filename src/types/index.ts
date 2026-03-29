export interface Cleaner {
  id: string
  name: string
  slug: string
  photo: string
  city: string
  areas: string[]
  rating: number
  reviewCount: number
  hourlyRate: number
  services: string[]
  bio: string
  dbsVerified: boolean
  insured: boolean
  accredited: boolean
  available: boolean
  memberSince: string
  responseRate: number
}

export interface Review {
  id: string
  cleanerId: string
  customerName: string
  customerCity: string
  rating: number
  body: string
  date: string
}

export interface City {
  id: string
  name: string
  slug: string
  areas: Area[]
  cleanerCount: number
  completedJobs: number
  avgPrice: number
}

export interface Area {
  name: string
  slug: string
}

export interface Service {
  id: string
  name: string
  slug: string
  headline: string
  description: string
  whyPro: string
  whatToExpect: string
  priceRange: string
  faqs: { question: string; answer: string }[]
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  body: string
  keyword: string
  publishedAt: string
  updatedAt: string
  author: string
  readingTime: number
}

export interface Job {
  id: string
  customerName: string
  address: string
  service: string
  date: string
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled'
  price: number
}

export interface SignupFormData {
  // Step 1: Personal Details
  fullName: string
  email: string
  mobile: string
  tradingName?: string
  postcode: string
  
  // Step 2: Services
  services: string[]
  hourlyRate: number
  coverageRadius: number
  
  // Step 3: Verification
  dbsCertificate?: File
  insuranceCertificate?: File
  dbsExpiry: string
  insuranceExpiry: string
  declaration: boolean
  
  // Step 4: Profile
  profilePhoto?: File
  bio: string
  coverageAreas: string
}
