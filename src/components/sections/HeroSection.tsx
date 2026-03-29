'use client'

import * as React from 'react'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'

export function HeroSection() {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const [postcode, setPostcode] = React.useState('')

  const openQuoteModal = () => {
    setIsModalOpen(true)
  }

  const handleWhatsApp = () => {
    const whatsappNumber = "447712345678" // Replace with actual number
    const message = encodeURIComponent("Hi, I need a sofa cleaner today. When can someone come?")
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank')
  }

  const handleTelegram = () => {
    const telegramBot = "@sofacleanerbot" // Replace with actual bot
    window.open(`https://t.me/${telegramBot}`, '_blank')
  }

  return (
    <section className="relative gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%227%22%20cy%3D%227%22%20r%3D%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>
      
      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-[700px] section">
          
          {/* Left Column - Enhanced Content */}
          <div className="space-y-10 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-shadow-lg">
                Get Your Sofa Cleaned Today{' '}
                <span className="text-primary-200">- In Minutes!</span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-xl font-light">
                Chat with verified cleaners instantly on WhatsApp or Telegram. 
                <strong className="font-semibold text-white"> No forms, no waiting - just results.</strong>
              </p>
            </div>

            {/* Enhanced Postcode Input & CTA */}
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
                <input
                  type="text"
                  placeholder="Enter your postcode"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                  className="input input-lg flex-1 text-gray-900 placeholder:text-gray-400 border-0 shadow-lg focus:ring-4 focus:ring-white/30"
                />
                <Button
                  onClick={openQuoteModal}
                  size="xl"
                  className="bg-white text-primary-700 hover:bg-gray-50 font-bold px-10 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  Get Cleaner Now
                </Button>
              </div>

              {/* Enhanced Alternative Contact Methods */}
              <div className="flex items-center gap-6">
                <span className="text-lg text-white/80 font-medium">Or chat instantly:</span>
                <div className="flex gap-4">
                  <button
                    onClick={handleWhatsApp}
                    className="flex items-center justify-center w-14 h-14 bg-whatsapp hover:bg-green-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-110 group"
                    aria-label="Contact via WhatsApp"
                  >
                    <svg className="w-7 h-7 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.487"/>
                    </svg>
                  </button>
                  <button
                    onClick={handleTelegram}
                    className="flex items-center justify-center w-14 h-14 bg-telegram hover:bg-blue-600 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-110 group"
                    aria-label="Contact via Telegram"
                  >
                    <svg className="w-7 h-7 text-white transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-1">
                    {[1,2,3,4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-white/20 border-2 border-white"></div>
                    ))}
                  </div>
                  <span className="text-sm text-white/90 font-medium">500+ cleaners available</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-yellow-300">★★★★★</span>
                  <span className="text-sm text-white/90 font-medium">4.9/5 rating</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Enhanced Hero Illustration */}
          <div className="hidden lg:block animate-fade-in">
            <div className="relative max-w-lg mx-auto">
              {/* Enhanced Sofa Illustration with Modern Styling */}
              <div className="relative p-8">
                <svg 
                  viewBox="0 0 400 320" 
                  className="w-full h-auto drop-shadow-2xl"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Glow Effect */}
                  <defs>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                      <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Sofa Shadow */}
                  <ellipse cx="200" cy="280" rx="140" ry="20" fill="black" fillOpacity="0.1"/>
                  
                  {/* Sofa Base */}
                  <rect x="50" y="180" width="300" height="80" rx="25" fill="white" fillOpacity="0.95" filter="url(#glow)"/>
                  
                  {/* Sofa Back */}
                  <rect x="65" y="115" width="270" height="85" rx="20" fill="white" fillOpacity="0.9" filter="url(#glow)"/>
                  
                  {/* Left Armrest */}
                  <ellipse cx="85" cy="150" rx="28" ry="50" fill="white" fillOpacity="0.85" filter="url(#glow)"/>
                  
                  {/* Right Armrest */}  
                  <ellipse cx="315" cy="150" rx="28" ry="50" fill="white" fillOpacity="0.85" filter="url(#glow)"/>
                  
                  {/* Premium Cushions */}
                  <rect x="105" y="135" width="65" height="45" rx="12" fill="white" fillOpacity="0.8"/>
                  <rect x="175" y="135" width="65" height="45" rx="12" fill="white" fillOpacity="0.8"/>
                  <rect x="245" y="135" width="65" height="45" rx="12" fill="white" fillOpacity="0.8"/>
                  
                  {/* Modern Legs */}
                  <rect x="75" y="260" width="12" height="18" rx="6" fill="white" fillOpacity="0.7"/>
                  <rect x="135" y="260" width="12" height="18" rx="6" fill="white" fillOpacity="0.7"/>
                  <rect x="255" y="260" width="12" height="18" rx="6" fill="white" fillOpacity="0.7"/>
                  <rect x="315" y="260" width="12" height="18" rx="6" fill="white" fillOpacity="0.7"/>
                  
                  {/* Floating Sparkle Effects */}
                  <circle cx="120" cy="60" r="3" fill="white" fillOpacity="0.8">
                    <animate attributeName="opacity" values="0.3;1;0.3" dur="2s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="280" cy="45" r="2" fill="white" fillOpacity="0.6">
                    <animate attributeName="opacity" values="0.2;0.8;0.2" dur="1.5s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="340" cy="85" r="2.5" fill="white" fillOpacity="0.7">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="1.8s" repeatCount="indefinite"/>
                  </circle>
                  <circle cx="80" cy="90" r="1.5" fill="white" fillOpacity="0.5">
                    <animate attributeName="opacity" values="0.3;0.9;0.3" dur="2.2s" repeatCount="indefinite"/>
                  </circle>
                </svg>
                
                {/* Floating Action Bubbles */}
                <div className="absolute top-4 right-4 animate-bounce">
                  <div className="bg-whatsapp rounded-full p-2 shadow-lg">
                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 2.007C6.495 2.019.999 6.528 1.011 12.047c0 1.77.459 3.503 1.334 5.031L1.005 22l4.986-1.308a9.94 9.94 0 004.979 1.348c5.52-.013 9.997-4.522 9.985-10.041-.006-2.685-1.055-5.212-2.955-7.116-1.901-1.904-4.426-2.958-7.113-2.96h-.91zm5.928 14.39c-.246.691-1.23 1.28-2.015 1.444-.75.158-1.732.141-2.785-.348-1.264-.588-2.82-1.521-4.074-2.99-1.086-1.271-1.816-2.792-1.866-4.418-.051-1.626.632-2.945 1.49-3.648.239-.196.51-.245.679-.245.174 0 .347.001.498.009.16.007.374-.061.586.447.218.523.742 1.808.808 1.939.066.131.11.284.022.458-.089.174-.133.284-.266.436-.133.152-.279.340-.399.458-.133.131-.271.272-.117.533.155.261.688 1.135 1.477 1.837.895.796 1.644 1.043 1.876 1.159.233.117.37.098.506-.059.137-.156.583-.68.738-.914.156-.233.311-.195.523-.117.213.078 1.351.637 1.583.753.233.117.388.175.445.271.058.097.058.564-.188 1.255z"/>
                    </svg>
                  </div>
                </div>
                
                <div className="absolute bottom-8 left-4 animate-pulse">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 shadow-lg">
                    <div className="text-xs text-white font-medium">✨ Available now</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <ChannelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        prefilledMessage={postcode ? `Hi, I'd like to get a quote for sofa cleaning in ${postcode}` : ''}
      />
    </section>
  )
}
