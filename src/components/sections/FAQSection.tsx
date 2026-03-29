import { Accordion } from '@/components/ui/Accordion'
import { JsonLd } from '@/components/JsonLd'

interface FAQItem {
  question: string
  answer: string
}

interface FAQSectionProps {
  faqs?: FAQItem[]
}

export function FAQSection({ faqs: providedFaqs }: FAQSectionProps) {
  const faqs = providedFaqs ?? [
    {
      question: "How does SofaCleaner work?",
      answer: "Simply message us on WhatsApp or Telegram with your location and cleaning needs. We instantly connect you with available verified local cleaners who can start your booking process through chat - no forms or delays!"
    },
    {
      question: "How much does sofa cleaning cost?",
      answer: "Prices typically range from £45-150 depending on your sofa size, material, and condition. 2-seater sofas start from £45, 3-seaters from £65, and larger corner sofas from £80. Leather and specialist fabrics may cost more."
    },
    {
      question: "Are your cleaners DBS checked?",
      answer: "Yes, all cleaners on our platform are DBS checked, fully insured, and verified professionals. We only work with established cleaning businesses who meet our strict quality and safety standards."
    },
    {
      question: "How quickly can I get a cleaner?",
      answer: "Most customers get connected with available cleaners within minutes through our messaging system. Many can schedule same-day or next-day service, with some offering emergency cleaning within hours."
    },
    {
      question: "What if I'm not happy with the clean?",
      answer: "All our cleaners guarantee their work. If you're not satisfied, contact us within 24 hours and we'll work with the cleaner to resolve any issues, including re-cleaning if necessary."
    },
    {
      question: "Do I need to be home?",
      answer: "Yes, you'll need to be present during the cleaning service. The cleaner will need access to your sofa and may need to discuss any stains or concerns with you before starting the work."
    }
  ]

  // Generate FAQ JSON-LD schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage", 
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  }

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-xl text-gray-600">
            Everything you need to know about professional sofa cleaning
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion items={faqs} />
        </div>
      </div>

      {/* FAQ JSON-LD Schema */}
      <JsonLd data={faqSchema} />
    </section>
  )
}
