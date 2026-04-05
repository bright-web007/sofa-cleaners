import type { Metadata } from 'next'
import { SITE_NAME, SITE_URL } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: `Learn how SofaCleaner uses cookies to improve your experience. Manage your cookie preferences on this page.`,
  alternates: { canonical: `${SITE_URL}/cookies` },
  openGraph: {
    title: `Cookie Policy | ${SITE_NAME}`,
    description: 'Learn how SofaCleaner uses cookies and how to manage your preferences.',
    url: `${SITE_URL}/cookies`,
    type: 'website',
  },
}

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-600 mb-8">
            <strong>Effective Date:</strong> 28 March 2024<br />
            <strong>Last Updated:</strong> 28 March 2024
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">1. What Are Cookies</h2>
          <p>
            Cookies are small text files that are placed on your device (computer, smartphone, or tablet) 
            when you visit our website. They help us provide you with a better experience by remembering 
            your preferences, analyzing site usage, and enabling essential website functions.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">2. How We Use Cookies</h2>
          <p>
            SofaCleaner.org uses cookies to enhance your browsing experience, analyze website traffic, 
            and provide personalized content. We comply with the UK Privacy and Electronic Communications 
            Regulations (PECR) and UK GDPR in our cookie usage.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">3. Types of Cookies We Use</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.1 Strictly Necessary Cookies</h3>
          <p>
            These cookies are essential for the website to function properly and cannot be disabled. 
            They include security cookies, load balancing cookies, and cookies that remember your 
            privacy preferences.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
            <ul className="text-sm text-gray-600">
              <li><strong>session_id:</strong> Maintains your session while browsing (expires when browser closes)</li>
              <li><strong>csrf_token:</strong> Prevents cross-site request forgery attacks (expires after 24 hours)</li>
              <li><strong>cookie_consent:</strong> Remembers your cookie preferences (expires after 1 year)</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.2 Analytics Cookies</h3>
          <p>
            We use analytics cookies to understand how visitors interact with our website. This helps us 
            improve our services and user experience. These cookies collect anonymized information about 
            your visit.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <h4 className="font-medium text-gray-900 mb-2">Google Analytics Cookies:</h4>
            <ul className="text-sm text-gray-600">
              <li><strong>_ga:</strong> Distinguishes unique users (expires after 2 years)</li>
              <li><strong>_ga_[container-id]:</strong> Stores session information (expires after 2 years)</li>
              <li><strong>_gid:</strong> Distinguishes unique users (expires after 24 hours)</li>
              <li><strong>_gat:</strong> Throttles request rate (expires after 1 minute)</li>
            </ul>
          </div>

          <p>
            <strong>Legal Basis:</strong> Legitimate interest in improving our services and understanding user behavior.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">3.3 Preference Cookies</h3>
          <p>
            These cookies remember your choices and preferences to provide a more personalized experience 
            on repeat visits.
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <h4 className="font-medium text-gray-900 mb-2">Examples:</h4>
            <ul className="text-sm text-gray-600">
              <li><strong>location_preference:</strong> Remembers your preferred location for cleaner searches (expires after 30 days)</li>
              <li><strong>service_preference:</strong> Remembers your preferred cleaning services (expires after 30 days)</li>
              <li><strong>theme_preference:</strong> Remembers display preferences (expires after 1 year)</li>
            </ul>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">4. Third-Party Cookies</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.1 Google Analytics</h3>
          <p>
            We use Google Analytics to analyze website traffic and user behavior. Google Analytics may 
            set cookies to track your interactions across different websites. For more information about 
            Google's privacy practices, visit 
            <a href="https://policies.google.com/privacy" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              Google's Privacy Policy
            </a>.
          </p>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">4.2 Communication Platforms</h3>
          <p>
            When you interact with our WhatsApp or Telegram integration features, these platforms may 
            set their own cookies according to their privacy policies.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">5. Cookie Duration</h2>
          <p>We use both session and persistent cookies:</p>
          
          <div className="grid gap-4 md:grid-cols-2 my-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-medium text-blue-800 mb-2">Session Cookies</h4>
              <p className="text-sm text-blue-700">
                Temporary cookies that are deleted when you close your browser. 
                Used for essential website functions and security.
              </p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <h4 className="font-medium text-green-800 mb-2">Persistent Cookies</h4>
              <p className="text-sm text-green-700">
                Remain on your device for a specified period (days to years). 
                Used for analytics and remembering your preferences.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">6. Managing Your Cookie Preferences</h2>
          
          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.1 Cookie Consent Banner</h3>
          <p>
            When you first visit our website, you'll see a cookie consent banner allowing you to:
          </p>
          <ul>
            <li>Accept all cookies</li>
            <li>Accept only necessary cookies</li>
            <li>Customize your cookie preferences</li>
            <li>View detailed cookie information</li>
          </ul>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.2 Browser Settings</h3>
          <p>
            You can control cookies through your browser settings. Here's how to manage cookies in popular browsers:
          </p>
          
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <h4 className="font-medium text-gray-900 mb-2">Browser Cookie Controls:</h4>
            <ul className="text-sm text-gray-600 space-y-1">
              <li><strong>Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
              <li><strong>Firefox:</strong> Settings → Privacy & Security → Cookies and Site Data</li>
              <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
              <li><strong>Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
            </ul>
          </div>

          <h3 className="text-xl font-medium text-gray-900 mt-6 mb-3">6.3 Analytics Opt-Out</h3>
          <p>
            You can opt out of Google Analytics tracking by:
          </p>
          <ul>
            <li>Installing the <a href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out Browser Add-on</a></li>
            <li>Adjusting your cookie preferences in our banner</li>
            <li>Disabling analytics cookies in your browser settings</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">7. Impact of Disabling Cookies</h2>
          
          <div className="grid gap-4 md:grid-cols-2 my-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <h4 className="font-medium text-red-800 mb-2">Necessary Cookies Disabled</h4>
              <p className="text-sm text-red-700">
                Essential website functions may not work properly, including 
                security features, form submissions, and session management.
              </p>
            </div>
            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-medium text-yellow-800 mb-2">Analytics Cookies Disabled</h4>
              <p className="text-sm text-yellow-700">
                Website functionality remains intact, but we cannot analyze 
                traffic patterns or improve user experience based on usage data.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">8. Cookie Policy Updates</h2>
          <p>
            We may update this Cookie Policy periodically to reflect changes in our practices or for legal compliance. 
            When we make significant changes, we will notify you through:
          </p>
          <ul>
            <li>Updated notice on our website</li>
            <li>Email notification to registered users</li>
            <li>New cookie consent request if required</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">9. Legal Basis for Cookie Processing</h2>
          <p>We process cookies based on:</p>
          
          <div className="space-y-4 my-6">
            <div className="border-l-4 border-green-400 pl-4">
              <h4 className="font-medium text-gray-900">Necessary Cookies</h4>
              <p className="text-sm text-gray-600">
                <strong>Legal Basis:</strong> Vital interests and contract performance - essential for website security and functionality
              </p>
            </div>
            <div className="border-l-4 border-blue-400 pl-4">
              <h4 className="font-medium text-gray-900">Analytics Cookies</h4>
              <p className="text-sm text-gray-600">
                <strong>Legal Basis:</strong> Legitimate interests in improving services and understanding user behavior
              </p>
            </div>
            <div className="border-l-4 border-purple-400 pl-4">
              <h4 className="font-medium text-gray-900">Preference Cookies</h4>
              <p className="text-sm text-gray-600">
                <strong>Legal Basis:</strong> Consent - you can withdraw consent at any time through browser settings or cookie preferences
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">10. Children's Privacy</h2>
          <p>
            Our services are not intended for children under 16. We do not knowingly collect information 
            from children under 16 through cookies or any other means. If you believe we have collected 
            such information, please contact us immediately.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">11. International Transfers</h2>
          <p>
            Some analytics data may be transferred to countries outside the UK (such as the United States 
            for Google Analytics). We ensure appropriate safeguards are in place for such transfers in 
            accordance with UK data protection law.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">12. Contact Information</h2>
          <p>If you have questions about our use of cookies, contact us:</p>
          <ul>
            <li><strong>Email:</strong> privacy@sofacleaner.org</li>
            <li><strong>Phone:</strong> +44 7123 456789</li>
            <li><strong>Address:</strong> [Business Address], UK</li>
            <li><strong>Data Protection Officer:</strong> Available upon request</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">13. Regulatory Information</h2>
          <p>
            This Cookie Policy complies with:
          </p>
          <ul>
            <li>UK General Data Protection Regulation (UK GDPR)</li>
            <li>Data Protection Act 2018</li>
            <li>Privacy and Electronic Communications Regulations (PECR)</li>
            <li>Information Commissioner's Office (ICO) guidance</li>
          </ul>

          <p>
            For more information about your rights regarding cookies and data protection, visit the 
            <a href="https://ico.org.uk" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
              ICO website
            </a>.
          </p>

          <div className="bg-primary-light p-6 rounded-lg mt-8">
            <h3 className="font-semibold text-gray-900 mb-2">Quick Summary</h3>
            <p className="text-sm text-gray-700">
              We use cookies to make our website work properly (necessary), understand how people use our site (analytics), 
              and remember your preferences (functional). You can control which cookies you accept through our cookie banner 
              or your browser settings. Essential cookies cannot be disabled as they're required for security and basic functionality.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}