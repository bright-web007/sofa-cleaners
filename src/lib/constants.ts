// Site Configuration
export const SITE_NAME = "SofaCleaner"
export const SITE_URL = "https://sofacleaner.org"
export const SITE_DESCRIPTION = "Message SofaCleaner on WhatsApp or Telegram and our AI will guide the enquiry, collect photos and details, coordinate with cleaners, and escalate to admin when needed."

// Contact Information
export const WHATSAPP_NUMBER = "447700000000"
export const TELEGRAM_BOT = "sofacleaner_bot"
export const PHONE_DISPLAY = "+44 7700 000 000"

// Business Constants
export const RESPONSE_TIME = "within 4 hours"
export const COMMISSION_RATE = 0.15 // 15% commission
export const MIN_HOURLY_RATE = 25
export const MAX_HOURLY_RATE = 70

// Service Slugs (for type safety)
export const SERVICE_SLUGS = [
  "fabric-sofa-cleaning",
  "leather-sofa-cleaning", 
  "stain-removal",
  "velvet-sofa-cleaning",
  "end-of-tenancy"
] as const

// City Slugs (for type safety)
export const CITY_SLUGS = [
  "london",
  "manchester",
  "birmingham",
  "leeds",
  "bristol", 
  "edinburgh",
  "glasgow",
  "liverpool",
  "sheffield",
  "nottingham",
  "cardiff",
  "leicester",
  "coventry",
  "brighton",
  "oxford",
  "cambridge",
  "bath",
  "york",
  "newcastle",
  "southampton",
  "portsmouth",
  "norwich",
  "exeter",
  "plymouth",
  "reading"
] as const

// Type exports
export type ServiceSlug = typeof SERVICE_SLUGS[number]
export type CitySlug = typeof CITY_SLUGS[number]
