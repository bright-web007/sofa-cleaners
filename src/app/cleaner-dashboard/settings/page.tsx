'use client'

import { useState } from 'react'
import { Trash2, AlertTriangle, Check } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { Button } from '@/components/ui/Button'

interface Toggle {
  id: string
  label: string
  description: string
  enabled: boolean
}

export default function SettingsPage() {
  const [notifications, setNotifications] = useState<Toggle[]>([
    {
      id: 'whatsapp',
      label: 'WhatsApp notifications',
      description: 'Receive job notifications via WhatsApp',
      enabled: true,
    },
    {
      id: 'email',
      label: 'Email notifications',
      description: 'Receive job updates and important information via email',
      enabled: true,
    },
    {
      id: 'newJobs',
      label: 'New job alerts',
      description: 'Get notified immediately when new jobs match your criteria',
      enabled: true,
    },
    {
      id: 'reminders',
      label: 'Reminder messages',
      description: 'Receive reminders before scheduled appointments',
      enabled: false,
    },
  ])

  const [isSaving, setIsSaving] = useState(false)
  const [savedMessage, setSavedMessage] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)

  const toggleNotification = (id: string) => {
    setNotifications(prev => 
      prev.map(notif => 
        notif.id === id ? { ...notif, enabled: !notif.enabled } : notif
      )
    )
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

  const handleDeleteAccount = async () => {
    setIsDeleting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsDeleting(false)
    setShowDeleteModal(false)
    
    // In real app, would redirect to goodbye page
    alert('Account deletion requested. This would normally redirect to a confirmation page.')
  }

  return (
    <DashboardLayout title="Settings">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
          <p className="text-sm text-gray-600 mt-1">
            Manage your account preferences and settings
          </p>
        </div>

        {/* Success Message */}
        {savedMessage && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <Check className="h-5 w-5 text-green-400" />
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Settings saved successfully!
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Notification Preferences */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Notification Preferences</h2>
            <p className="text-sm text-gray-600 mt-1">
              Choose how you'd like to receive notifications
            </p>
          </div>
          
          <div className="p-6 space-y-6">
            {notifications.map((notification) => (
              <div key={notification.id} className="flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-sm font-medium text-gray-900">
                    {notification.label}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {notification.description}
                  </p>
                </div>
                <button
                  onClick={() => toggleNotification(notification.id)}
                  className={`
                    relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent 
                    transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
                    ${notification.enabled ? 'bg-primary' : 'bg-gray-200'}
                  `}
                  role="switch"
                  aria-checked={notification.enabled}
                  aria-labelledby={`${notification.id}-label`}
                >
                  <span className="sr-only">Toggle {notification.label}</span>
                  <span
                    className={`
                      pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform Ring-0 transition duration-200 ease-in-out
                      ${notification.enabled ? 'translate-x-5' : 'translate-x-0'}
                    `}
                  />
                </button>
              </div>
            ))}

            <div className="pt-6 border-t border-gray-200">
              <Button 
                onClick={handleSave}
                loading={isSaving}
              >
                Save Preferences
              </Button>
            </div>
          </div>
        </div>

        {/* Account Details */}
        <div className="bg-white shadow rounded-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-lg font-semibold text-gray-900">Account Details</h2>
            <p className="text-sm text-gray-600 mt-1">
              Your account information
            </p>
          </div>
          
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Email Address</label>
                <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                  john.smith@example.com
                </div>
                <p className="text-xs text-gray-500 mt-1">Read only</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <div className="mt-1 text-sm text-gray-900 bg-gray-50 p-3 rounded-md">
                  +44 7700 900123
                </div>
                <p className="text-xs text-gray-500 mt-1">Read only</p>
              </div>
            </div>
            <div className="pt-2">
              <p className="text-sm text-gray-600">
                Contact support to change your email address or phone number.
              </p>
            </div>
          </div>
        </div>

        {/* Danger Zone */}
        <div className="bg-white shadow rounded-lg border-2 border-red-200">
          <div className="p-6 border-b border-red-200">
            <h2 className="text-lg font-semibold text-red-800">Danger Zone</h2>
            <p className="text-sm text-red-600 mt-1">
              Irreversible and destructive actions
            </p>
          </div>
          
          <div className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h3 className="text-sm font-medium text-gray-900">Delete Account</h3>
                <p className="text-sm text-gray-600 mt-1">
                  Once you delete your account, there is no going back. Please be certain.
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => setShowDeleteModal(true)}
                className="border-red-300 text-red-700 hover:bg-red-50 hover:border-red-400"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete Account
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-center mb-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                <AlertTriangle className="h-6 w-6 text-red-600" />
              </div>
            </div>
            
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Delete Your Account
              </h3>
              <p className="text-sm text-gray-600">
                Are you sure you want to delete your account? This action cannot be undone and you will lose all your data, including job history and customer reviews.
              </p>
            </div>

            <div className="space-y-3">
              <div className="bg-red-50 border border-red-200 rounded-md p-3">
                <div className="flex">
                  <AlertTriangle className="h-5 w-5 text-red-400 flex-shrink-0" />
                  <div className="ml-3">
                    <h4 className="text-sm font-medium text-red-800">
                      This will permanently:
                    </h4>
                    <ul className="text-sm text-red-700 mt-2 list-disc list-inside space-y-1">
                      <li>Delete your cleaner profile</li>
                      <li>Remove all job history</li>
                      <li>Cancel any pending bookings</li>
                      <li>Delete customer reviews and ratings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3">
                <Button
                  variant="ghost"
                  onClick={() => setShowDeleteModal(false)}
                  disabled={isDeleting}
                >
                  Cancel
                </Button>
                <Button
                  onClick={handleDeleteAccount}
                  loading={isDeleting}
                  className="bg-red-600 hover:bg-red-700 focus:ring-red-500"
                >
                  Delete Account
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}