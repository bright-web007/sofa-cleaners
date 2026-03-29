'use client'

import { useState } from 'react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { Button } from '@/components/ui/Button'

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
const timeSlots = ['Morning', 'Afternoon', 'Evening']

type AvailabilityData = {
  [key: string]: {
    [key: string]: boolean
  }
}

export default function AvailabilityPage() {
  const [availability, setAvailability] = useState<AvailabilityData>(() => {
    // Initialize with some default availability
    const initial: AvailabilityData = {}
    days.forEach(day => {
      initial[day] = {}
      timeSlots.forEach(slot => {
        // Default to some availability (weekdays morning/afternoon, weekends afternoon)
        if (day === 'Saturday' || day === 'Sunday') {
          initial[day][slot] = slot === 'Afternoon'
        } else {
          initial[day][slot] = slot !== 'Evening'
        }
      })
    })
    return initial
  })

  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState(false)

  const toggleAvailability = (day: string, slot: string) => {
    setAvailability(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        [slot]: !prev[day][slot]
      }
    }))
  }

  const handleSave = async () => {
    setIsSaving(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSaving(false)
    setSavedMessage(true)
    
    // Hide success message after 3 seconds
    setTimeout(() => setSavedMessage(false), 3000)
  }

  const getAvailableSlots = () => {
    let count = 0
    days.forEach(day => {
      timeSlots.forEach(slot => {
        if (availability[day]?.[slot]) count++
      })
    })
    return count
  }

  return (
    <DashboardLayout title="Availability">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">My Availability</h1>
          <p className="text-sm text-gray-600 mt-1">
            Set when you're available to take on new cleaning jobs
          </p>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-semibold text-primary">{getAvailableSlots()}</div>
              <div className="text-sm text-gray-600">Available slots</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-gray-900">21</div>
              <div className="text-sm text-gray-600">Total slots</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-semibold text-green-600">
                {Math.round((getAvailableSlots() / 21) * 100)}%
              </div>
              <div className="text-sm text-gray-600">Availability</div>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {savedMessage && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Availability saved successfully!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Availability Grid */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Weekly Schedule</h2>
            <p className="text-sm text-gray-600 mt-1">
              Click on time slots to toggle your availability
            </p>
          </div>

          {/* Desktop Grid */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Time
                  </th>
                  {days.map(day => (
                    <th key={day} className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {timeSlots.map(slot => (
                  <tr key={slot}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {slot}
                    </td>
                    {days.map(day => (
                      <td key={`${day}-${slot}`} className="px-6 py-4 text-center">
                        <button
                          onClick={() => toggleAvailability(day, slot)}
                          className={`
                            w-12 h-12 rounded-lg border-2 transition-all duration-200 hover:scale-105
                            ${availability[day]?.[slot]
                              ? 'bg-primary border-primary text-white shadow-md'
                              : 'bg-gray-100 border-gray-200 text-gray-400 hover:bg-gray-200'
                            }
                          `}
                          aria-label={`Toggle ${day} ${slot}`}
                        >
                          {availability[day]?.[slot] ? (
                            <svg className="h-5 w-5 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          ) : (
                            <div className="w-2 h-2 bg-current rounded-full mx-auto opacity-50" />
                          )}
                        </button>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile Grid */}
          <div className="md:hidden">
            {days.map(day => (
              <div key={day} className="border-b border-gray-200 last:border-b-0">
                <div className="px-6 py-3 bg-gray-50">
                  <h3 className="text-sm font-medium text-gray-900">{day}</h3>
                </div>
                <div className="p-4">
                  <div className="grid grid-cols-3 gap-3">
                    {timeSlots.map(slot => (
                      <button
                        key={`${day}-${slot}`}
                        onClick={() => toggleAvailability(day, slot)}
                        className={`
                          px-4 py-3 rounded-lg border-2 text-sm font-medium transition-all duration-200
                          ${availability[day]?.[slot]
                            ? 'bg-primary border-primary text-white shadow-md'
                            : 'bg-gray-100 border-gray-200 text-gray-600 hover:bg-gray-200'
                          }
                        `}
                      >
                        <div className="flex items-center justify-center space-x-2">
                          <span>{slot.slice(0, 3)}</span>
                          {availability[day]?.[slot] && (
                            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
            <div className="flex items-center justify-center space-x-6 text-sm">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-primary rounded mr-2"></div>
                <span className="text-gray-600">Available</span>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-gray-200 rounded mr-2"></div>
                <span className="text-gray-600">Not available</span>
              </div>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-end space-x-3">
          <Button 
            variant="ghost"
            onClick={() => window.location.reload()}
            disabled={isSaving}
          >
            Reset Changes
          </Button>
          <Button 
            onClick={handleSave}
            loading={isSaving}
          >
            Save Availability
          </Button>
        </div>

        {/* Help Text */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-4">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-blue-800">
                Tips for managing availability
              </h3>
              <div className="mt-2 text-sm text-blue-700">
                <ul className="list-disc list-inside space-y-1">
                  <li>Update your availability regularly to receive more job requests</li>
                  <li>Morning (8am-12pm), Afternoon (12pm-5pm), Evening (5pm-8pm)</li>
                  <li>Available slots will be shown to customers when they book</li>
                  <li>You can always decline a job request if you're no longer available</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}