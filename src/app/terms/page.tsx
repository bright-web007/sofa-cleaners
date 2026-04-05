import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `SofaCleaner terms of service. Read the full terms governing use of our platform by customers and cleaning professionals.`,
  alternates: { canonical: `${SITE_URL}/terms` },
  openGraph: {
    title: `Terms of Service | ${SITE_NAME}`,
    description: 'Read the SofaCleaner terms of service covering platform use by customers and cleaning professionals.',
    url: `${SITE_URL}/terms`,
    type: 'website',
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> 28 March 2024<br />
            <strong>Last Updated:</strong> 28 March 2024
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. Agreement to Terms</h2>
          <p>
            By accessing or using SofaCleaner.org ("the Service," "we," "us," or "our"), you ("Customer," "you," or "your") 
            agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree to these terms, 
            you may not use our services.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. Description of Services</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.1 Service Model</h3>
          <p>SofaCleaner.org is a WhatsApp-first matching service that:</p>
          <ul>
            <li>Receives customer enquiries directly by message</li>
            <li>Routes those enquiries to available independent cleaning professionals</li>
            <li>Helps move booking conversations forward quickly</li>
            <li>May provide cleaner details, availability and pricing guidance where relevant</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">2.2 Important Disclaimer</h3>
          <p>
            <strong>SofaCleaner.org is not a traditional marketplace directory.</strong> We do not require customer onboarding, account creation,
            or profile browsing before a booking conversation begins. We do not provide cleaning services directly. 
            All cleaning services are performed by independent contractors who are not employees of SofaCleaner.org. 
            We act as a messaging-led intermediary to route customers to service providers quickly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. User Eligibility</h2>
          <p>You must:</p>
          <ul>
            <li>Be at least 18 years old</li>
            <li>Be located in the United Kingdom</li>
            <li>Provide accurate and current information</li>
            <li>Have authority to enter into binding agreements</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Booking Process and Conditions</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Quote Request Process</h3>
          <ol>
            <li>Customer messages SofaCleaner with service details, postcode and timing</li>
            <li>We route the enquiry to a suitable cleaner or shortlist of cleaners</li>
            <li>Pricing, availability and scope are clarified in chat</li>
            <li>Customer confirms the preferred option and timing</li>
            <li>Customer and cleaner complete the booking arrangement</li>
          </ol>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Booking Confirmation</h3>
          <p>
            A booking is confirmed when you and the cleaner mutually agree on service details, timing, and pricing. 
            SofaCleaner.org is not party to this agreement but may assist with communication and dispute resolution.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.3 Service Requirements</h3>
          <p>You agree to:</p>
          <ul>
            <li>Provide accurate information about your cleaning requirements</li>
            <li>Ensure safe access to your property</li>
            <li>Be present or available during the cleaning appointment</li>
            <li>Provide reasonable working conditions</li>
            <li>Clear valuable or fragile items from the cleaning area</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Pricing and Payment</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.1 Platform Fees</h3>
          <p>
            <strong>No Customer Fees:</strong> SofaCleaner.org does not charge customers any booking fees, service charges, 
            or commissions. Our revenue comes from commissions paid by cleaning professionals.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.2 Service Payment</h3>
          <p>
            Payment for cleaning services is made directly to the cleaner. Payment terms, methods, and timing 
            are arranged between you and the cleaner. Common payment methods include:
          </p>
          <ul>
            <li>Cash payment upon completion</li>
            <li>Bank transfer before or after service</li>
            <li>Card payment (if cleaner accepts)</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">5.3 Pricing Disputes</h3>
          <p>
            Price quotes provided through our platform are estimates. Final pricing may vary based on actual 
            conditions found on-site. Any pricing disputes should be resolved directly with the cleaner, 
            though we may provide mediation assistance.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Cancellation Policy</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.1 Customer Cancellation</h3>
          <p>You may cancel your booking according to these guidelines:</p>
          <ul>
            <li><strong>24+ hours notice:</strong> No cancellation fee</li>
            <li><strong>4-24 hours notice:</strong> May incur reasonable cancellation fee</li>
            <li><strong>Less than 4 hours:</strong> May be charged for cleaner's travel time and preparation</li>
            <li><strong>Same-day cancellation:</strong> May be charged up to 50% of quoted service fee</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.2 Cleaner Cancellation</h3>
          <p>
            If a cleaner cancels, we will attempt to arrange an alternative cleaner or provide a full refund 
            of any advance payments. We are not liable for consequential damages from cleaner cancellations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Quality Assurance and Complaints</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">7.1 Service Standards</h3>
          <p>All cleaners on our platform must:</p>
          <ul>
            <li>Hold valid enhanced DBS checks</li>
            <li>Maintain public liability insurance (minimum £1M)</li>
            <li>Use professional-grade equipment</li>
            <li>Maintain satisfactory customer ratings</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">7.2 Service Guarantee</h3>
          <p>
            While we cannot guarantee service outcomes (as services are provided by independent contractors), 
            we will investigate complaints and work with both parties to resolve issues. Remedies may include:
          </p>
          <ul>
            <li>Return visit by the same cleaner at no charge</li>
            <li>Partial or full refund (subject to investigation)</li>
            <li>Service by alternative cleaner</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">7.3 Complaint Process</h3>
          <p>To raise a complaint:</p>
          <ol>
            <li>Contact us within 48 hours of service completion</li>
            <li>Provide detailed description and photographic evidence if applicable</li>
            <li>Allow us 7 business days to investigate and respond</li>
            <li>Cooperate with any resolution efforts</li>
          </ol>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Liability Limitations</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">8.1 Platform Liability</h3>
          <p>
            SofaCleaner.org's liability is limited to our role as an intermediary platform. We are not liable for:
          </p>
          <ul>
            <li>Quality or timeliness of cleaning services</li>
            <li>Actions or omissions of cleaning professionals</li>
            <li>Damage to property during cleaning</li>
            <li>Theft or loss occurring during service appointments</li>
            <li>Personal injury related to cleaning services</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">8.2 Maximum Liability</h3>
          <p>
            Our total liability for any claims arising from use of our platform shall not exceed the greater of 
            £100 or the amount of fees (if any) paid to us in the 12 months preceding the claim.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">8.3 Insurance Coverage</h3>
          <p>
            All cleaners are required to carry public liability insurance. For damage or loss claims, 
            you should first contact the cleaner's insurance provider. We can assist with providing 
            insurance details and supporting your claim.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Intellectual Property</h2>
          <p>
            All content on SofaCleaner.org, including text, graphics, logos, and software, is owned by us or 
            licensed to us and protected by UK and international copyright laws. You may not reproduce, 
            distribute, or create derivative works without written permission.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Use our platform for illegal purposes</li>
            <li>Harass, threaten, or discriminate against cleaners</li>
            <li>Provide false information or impersonate others</li>
            <li>Interfere with platform security or functionality</li>
            <li>Attempt to bypass our booking system</li>
            <li>Post inappropriate content or reviews</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. Dispute Resolution</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">11.1 Internal Resolution</h3>
          <p>
            We encourage customers and cleaners to resolve disputes amicably. We provide mediation services 
            to help reach mutually acceptable solutions.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">11.2 Formal Proceedings</h3>
          <p>
            If internal resolution fails, disputes shall be resolved through the English courts. Small claims 
            court procedures may be appropriate for service-related disputes under £10,000.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Termination</h2>
          <p>
            We may terminate or suspend your access to our services immediately for breach of these terms. 
            You may stop using our services at any time. Termination does not affect existing bookings or obligations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Changes to Terms</h2>
          <p>
            We may modify these terms at any time by posting updated terms on our website. Material changes 
            will be communicated via email or platform notifications. Continued use after changes constitutes 
            acceptance of new terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">14. Governing Law</h2>
          <p>
            These terms are governed by English law. Any legal proceedings must be brought in the courts of England and Wales. 
            If any provision is found unenforceable, the remainder of the terms shall remain in full force and effect.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">15. Contact Information</h2>
          <p>For questions about these terms, contact us:</p>
          <ul>
            <li>Email: legal@sofacleaner.org</li>
            <li>Phone: +44 7123 456789</li>
            <li>Address: [Business Address], UK</li>
            <li>Business hours: Monday-Saturday, 8:00 AM - 8:00 PM</li>
          </ul>

          <div className="bg-gray-50 p-6 rounded-lg mt-8">
            <p className="text-sm text-gray-600">
              These terms constitute the entire agreement between you and SofaCleaner.org regarding use of our services, 
              superseding any prior agreements or understandings.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
