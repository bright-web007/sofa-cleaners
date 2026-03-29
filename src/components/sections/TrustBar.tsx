export function TrustBar() {
  const trustPoints = [
    { icon: "✓", text: "DBS Checked" },
    { icon: "✓", text: "Fully Insured" },
    { icon: "✓", text: "500+ Cleans" },
    { icon: "★", text: "4.9 Rating" }
  ]

  return (
    <section className="bg-primary-light py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-center gap-8">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center gap-2 text-primary font-medium">
              <span className="text-lg">{point.icon}</span>
              <span>{point.text}</span>
            </div>
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="grid grid-cols-2 gap-4 md:hidden">
          {trustPoints.map((point, index) => (
            <div key={index} className="flex items-center justify-center gap-2 text-primary font-medium py-2">
              <span className="text-lg">{point.icon}</span>
              <span className="text-sm">{point.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}