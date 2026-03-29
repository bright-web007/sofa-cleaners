import { Button } from '@/components/ui/Button'

export function ForCleanersCTA() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary to-purple-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Are you a professional sofa cleaner?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Join our platform and get instant job notifications through our messaging system — no cold calling, no admin hassle.
          </p>
          
          <div className="flex justify-center">
            <Button
              href="/for-cleaners/join"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
            >
              Apply to join
            </Button>
          </div>

          {/* Benefits List */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 text-center">
            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16,6L18.29,8.29L13.41,13.17L9.41,9.17L2,16.59L3.41,18L9.41,12L13.41,16L20.29,9.12L22,10.83V6H16Z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Steady Work</h3>
              <p className="text-white/80">Regular bookings from verified customers in your area</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H11V7H12.5V11.5H17V13Z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Save Time</h3>
              <p className="text-white/80">We handle marketing, instant bookings, and customer acquisition for you</p>
            </div>

            <div className="space-y-2">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7,14C5.89,14 5,13.1 5,12C5,10.89 5.89,10 7,10C8.1,10 9,10.89 9,12C9,13.1 8.1,14 7,14M12.6,10C11.8,7.7 9.6,6 7,6A6,6 0 0,0 1,12A6,6 0 0,0 7,18C9.6,18 11.8,16.3 12.6,14H16V18H20V14H23V10H12.6Z"/>
                </svg>
              </div>
              <h3 className="font-semibold text-lg">Grow Business</h3>
              <p className="text-white/80">Build your reputation and expand your customer base</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}