'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { ChannelSelectModal } from '@/components/layout/ChannelSelectModal'
import { COMMISSION_RATE } from '@/lib/constants'

export default function CleanersPricingPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Calculator state
  const [hourlyRate, setHourlyRate] = useState(40)
  const [hoursPerWeek, setHoursPerWeek] = useState(25)

  // Calculate earnings
  const weeklyGross = hourlyRate * hoursPerWeek
  const commission = weeklyGross * COMMISSION_RATE
  const commissionPct = `${COMMISSION_RATE * 100}%`
  const weeklyTakeHome = weeklyGross - commission
  const monthlyTakeHome = weeklyTakeHome * 4.33
  const annualTakeHome = weeklyTakeHome * 52

  const comparisonData = [
    {
      platform: "SofaCleaner",
      commission: commissionPct,
      monthlyFee: "£0",
      setupFee: "£0",
      leadQuality: "4.8/5",
      paymentTerms: "Weekly",
      support: "Full Support"
    },
    {
      platform: "TaskRabbit",
      commission: "15%",
      monthlyFee: "£0",
      setupFee: "£25",
      leadQuality: "3.9/5",
      paymentTerms: "Weekly",
      support: "Limited"
    },
    {
      platform: "Checkatrade",
      commission: "0%",
      monthlyFee: "£35-100",
      setupFee: "£150",
      leadQuality: "4.1/5",
      paymentTerms: "Direct",
      support: "Basic"
    },
    {
      platform: "Going Alone",
      commission: "0%",
      monthlyFee: "£0",
      setupFee: "£0",
      leadQuality: "Variable",
      paymentTerms: "Direct",
      support: "None"
    }
  ]

  const earningsExamples = [
    {
      type: "Part-time Cleaner",
      hoursPerWeek: 15,
      rate: 35,
      monthlyEarnings: 1899,
      description: "Perfect for supplementing income or starting out"
    },
    {
      type: "Active Cleaner",
      hoursPerWeek: 25,
      rate: 45,
      monthlyEarnings: 4058,
      description: "Most common setup for established cleaners"
    },
    {
      type: "Full-time Business",
      hoursPerWeek: 35,
      rate: 50,
      monthlyEarnings: 6318,
      description: "Maximum earning potential with dedicated focus"
    }
  ]

  const faqs = [
    {
      question: "When do I get paid?",
      answer: "Customers pay you directly after job completion. We invoice you weekly for commission via direct debit, giving you excellent cash flow."
    },
    {
      question: "Are there really no monthly fees?",
      answer: `Correct! Zero monthly fees, setup costs, or subscription charges. You only pay ${commissionPct} commission on completed jobs.`
    },
    {
      question: "What if a customer doesn't pay?",
      answer: "We provide payment protection support and will help recover payments. Our vetting process reduces payment issues significantly."
    },
    {
      question: "How is commission calculated?",
      answer: `Simple: ${commissionPct} of the total amount you invoice the customer. If you earn £100 from a job, you pay £${COMMISSION_RATE * 100} commission.`
    },
    {
      question: "Can I increase my rates over time?",
      answer: "Absolutely! As you build reviews and reputation, you can command higher rates. Top cleaners earn £60+ per hour."
    },
    {
      question: "What happens if I work more than expected?",
      answer: "You set your quote, so any extra time required is covered. We recommend building buffer time into your quotes."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary-light py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Cleaner Commission and Earnings
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Transparent pricing with no hidden fees or monthly commitments
          </p>
          <div className="bg-white px-6 py-4 rounded-lg inline-block shadow-sm">
            <p className="text-lg font-medium text-primary">
              💷 {commissionPct} commission on completed jobs only
            </p>
          </div>
        </div>
      </div>

      {/* Commission Structure */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Simple Commission Structure
          </h2>

          <div className="grid gap-8 md:grid-cols-3 mb-12">
            <div className="text-center bg-green-50 p-8 rounded-lg border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-2">{commissionPct}</div>
              <h3 className="font-semibold text-green-800 mb-2">Commission Rate</h3>
              <p className="text-green-700 text-sm">Only on completed, paid jobs. No upfront costs.</p>
            </div>

            <div className="text-center bg-blue-50 p-8 rounded-lg border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-2">£0</div>
              <h3 className="font-semibold text-blue-800 mb-2">Monthly Fees</h3>
              <p className="text-blue-700 text-sm">No subscription or platform fees. Ever.</p>
            </div>

            <div className="text-center bg-purple-50 p-8 rounded-lg border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-2">£0</div>
              <h3 className="font-semibold text-purple-800 mb-2">Setup Fees</h3>
              <p className="text-purple-700 text-sm">Free to join. Start earning immediately.</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-center text-gray-900 mb-6">
              Example: £100 Job
            </h3>
            <div className="grid gap-4 md:grid-cols-3 text-center">
              <div>
                <div className="text-2xl font-bold text-gray-900">£100</div>
                <p className="text-gray-600">You invoice customer</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-red-600">-£18</div>
                <p className="text-gray-600">Commission to us</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-green-600">£82</div>
                <p className="text-gray-600">You keep</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Earnings Calculator */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Earnings Calculator
          </h2>

          <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Inputs */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate: £{hourlyRate}
                  </label>
                  <input
                    type="range"
                    min="25"
                    max="75"
                    step="5"
                    value={hourlyRate}
                    onChange={(e) => setHourlyRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>£25</span>
                    <span>£75</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hours per Week: {hoursPerWeek}
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="40"
                    step="5"
                    value={hoursPerWeek}
                    onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="flex justify-between text-xs text-gray-500 mt-1">
                    <span>5 hours</span>
                    <span>40 hours</span>
                  </div>
                </div>
              </div>

              {/* Calculations */}
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Weekly Gross:</span>
                  <span className="font-semibold">£{weeklyGross}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">{commissionPct} Commission:</span>
                  <span className="font-semibold text-red-600">-£{commission.toFixed(0)}</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b">
                  <span className="text-gray-600">Weekly Take-home:</span>
                  <span className="font-semibold text-green-600">£{weeklyTakeHome.toFixed(0)}</span>
                </div>
                <div className="flex justify-between items-center py-3 bg-primary-light rounded px-4">
                  <span className="font-medium">Monthly Take-home:</span>
                  <span className="text-xl font-bold text-primary">£{monthlyTakeHome.toFixed(0)}</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-lg font-medium">Annual Projection:</span>
                  <span className="text-2xl font-bold text-primary">£{annualTakeHome.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Real Examples */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Real Cleaner Examples
          </h2>

          <div className="grid gap-8 md:grid-cols-3">
            {earningsExamples.map((example, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {example.type}
                </h3>
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Rate:</span>
                    <span>£{example.rate}/hour</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Hours/week:</span>
                    <span>{example.hoursPerWeek}</span>
                  </div>
                </div>
                <div className="border-t pt-4">
                  <div className="text-2xl font-bold text-primary mb-2">
                    £{example.monthlyEarnings.toLocaleString()}/month
                  </div>
                  <p className="text-gray-600 text-sm">
                    {example.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Comparison Table */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Platform Comparison
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-sm border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Platform</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Commission</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Monthly Fee</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Setup Fee</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Lead Quality</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Payment</th>
                  <th className="px-6 py-4 text-left font-semibold text-gray-900">Support</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr key={index} className={`border-t ${index === 0 ? 'bg-green-50' : ''}`}>
                    <td className="px-6 py-4 font-medium">
                      {row.platform}
                      {index === 0 && <span className="ml-2 text-green-600 text-sm">✓ Best Choice</span>}
                    </td>
                    <td className="px-6 py-4">{row.commission}</td>
                    <td className="px-6 py-4">{row.monthlyFee}</td>
                    <td className="px-6 py-4">{row.setupFee}</td>
                    <td className="px-6 py-4">{row.leadQuality}</td>
                    <td className="px-6 py-4">{row.paymentTerms}</td>
                    <td className="px-6 py-4">{row.support}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Payment Terms */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Payment Terms
          </h2>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">How You Get Paid</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Customer pays you directly after job completion
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Accept cash, card, or bank transfer
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Immediate access to your earnings
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Commission Payment</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Weekly commission invoices via email
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Automatic direct debit collection
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Full payment transparency and records
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Earnings FAQ
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-primary text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Earning More Today
          </h2>
          <p className="text-xl text-primary-light mb-8">
            Join our platform with no upfront costs and start earning from your first job
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/for-cleaners/join"
              className="inline-flex items-center justify-center rounded-xl px-8 py-4 whitespace-nowrap bg-amber-300 text-base font-semibold text-slate-950 hover:!text-slate-950 hover:!bg-amber-400 hover:no-underline">
              Apply to Join
            </Link>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => setIsModalOpen(true)}
              className="bg-[#FFFFFF40] text-white"
            >
              Ask About Earnings
            </Button>
          </div>
        </div>
      </div>

      <ChannelSelectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="I have questions about earnings and commission structure"
      />
    </div>
  )
}