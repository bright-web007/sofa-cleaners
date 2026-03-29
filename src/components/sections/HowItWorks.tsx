export function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Message us instantly",
      description: "Start a conversation on WhatsApp or Telegram - no forms to fill"
    },
    {
      number: 2,
      title: "Get matched immediately", 
      description: "We connect you with available verified local cleaners in minutes"
    },
    {
      number: 3,
      title: "Book through chat",
      description: "Arrange your cleaning service through our conversational booking process"
    }
  ]

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            How it works
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your sofa professionally cleaned has never been easier
          </p>
        </div>

        <div className="relative">
          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center">
                {/* Number Circle */}
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                  {step.number}
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>

                {/* Connecting Line (Desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-200 transform translate-x-8">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2">
                      <div className="w-0 h-0 border-l-8 border-l-gray-200 border-y-4 border-y-transparent"></div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}