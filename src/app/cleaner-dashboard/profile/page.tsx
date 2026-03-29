'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Upload, Check, Star } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'

const profileSchema = z.object({
  displayName: z.string().min(2, 'Display name must be at least 2 characters'),
  bio: z.string().min(50, 'Bio must be at least 50 characters').max(300, 'Bio must be less than 300 characters'),
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  hourlyRate: z.number().min(10, 'Minimum rate is £10').max(200, 'Maximum rate is £200'),
  coverageAreas: z.string().min(1, 'Please specify your coverage areas'),
})

type ProfileFormData = z.infer<typeof profileSchema>

const serviceOptions = [
  'Fabric sofa cleaning',
  'Leather sofa cleaning',
  'Velvet sofa cleaning',
  'Stain removal',
  'End of tenancy cleaning'
]

// Mock cleaner data (first from cleaners.json)
const mockCleanerData = {
  name: 'John Smith',
  photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
  bio: 'Professional cleaner with over 8 years of experience in fabric and leather sofa cleaning. I pride myself on delivering exceptional results and excellent customer service.',
  services: ['Fabric sofa cleaning', 'Leather sofa cleaning', 'Stain removal'],
  hourlyRate: 35,
  coverageAreas: 'Manchester City Centre, Trafford, Sale, Altrincham, Stretford',
  rating: 4.9,
  reviewCount: 127,
}

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false)
  const [savedMessage, setSavedMessage] = useState(false)
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [profileImageUrl, setProfileImageUrl] = useState(mockCleanerData.photo)

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
  } = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      displayName: mockCleanerData.name,
      bio: mockCleanerData.bio,
      services: mockCleanerData.services,
      hourlyRate: mockCleanerData.hourlyRate,
      coverageAreas: mockCleanerData.coverageAreas,
    }
  })

  const watchedServices = watch('services', mockCleanerData.services)
  const watchedBio = watch('bio', mockCleanerData.bio)

  const handleFileUpload = (file: File | null) => {
    setSelectedFile(file)
    if (file) {
      setProfileImageUrl(URL.createObjectURL(file))
    }
  }

  const onSubmit = async (_data: ProfileFormData) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setSavedMessage(true)
    
    // Hide success message after 3 seconds
    setTimeout(() => setSavedMessage(false), 3000)
  }

  return (
    <DashboardLayout title="My Profile">
      <div className="space-y-6">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">My Profile</h1>
          <p className="text-sm text-gray-600 mt-1">
            Update your profile information and preferences
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
                  Profile updated successfully!
                </p>
              </div>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Form */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Profile Information</h2>
              </div>
              
              <form onSubmit={handleSubmit(onSubmit)} className="p-6 space-y-6">
                {/* Profile Photo */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profile Photo
                  </label>
                  <div className="flex items-center space-x-4">
                    <Image
                      src={profileImageUrl}
                      alt="Profile"
                      width={80}
                      height={80}
                      className="h-20 w-20 rounded-full object-cover border-2 border-gray-200"
                      unoptimized={profileImageUrl.startsWith('blob:')}
                    />
                    <div className="flex-1">
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
                        {selectedFile ? (
                          <div className="text-sm text-gray-600">
                            <Check className="h-5 w-5 text-green-500 mx-auto mb-2" />
                            {selectedFile.name}
                          </div>
                        ) : (
                          <label className="cursor-pointer">
                            <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                            <span className="text-primary font-medium">Upload new photo</span>
                            <span className="text-gray-500 block text-xs">PNG, JPG up to 5MB</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <Input
                  label="Display Name *"
                  error={errors.displayName?.message}
                  {...register('displayName')}
                />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Bio * ({watchedBio.length}/300 characters)
                  </label>
                  <textarea
                    rows={4}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Tell customers about your experience, specialties, and what makes you stand out..."
                    {...register('bio')}
                  />
                  {errors.bio && (
                    <p className="text-sm text-red-600 mt-1">{errors.bio.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Services *
                  </label>
                  <div className="space-y-3">
                    {serviceOptions.map((service) => (
                      <Checkbox
                        key={service}
                        label={service}
                        checked={watchedServices.includes(service)}
                        onChange={(e) => {
                          const currentServices = getValues('services')
                          if (e.target.checked) {
                            setValue('services', [...currentServices, service])
                          } else {
                            setValue('services', currentServices.filter(s => s !== service))
                          }
                        }}
                      />
                    ))}
                  </div>
                  {errors.services && (
                    <p className="text-sm text-red-600 mt-1">{errors.services.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Hourly Rate *
                  </label>
                  <div className="relative">
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">£</span>
                    <input
                      type="number"
                      min="10"
                      max="200"
                      className="block w-full pl-8 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                      {...register('hourlyRate', { valueAsNumber: true })}
                    />
                  </div>
                  {errors.hourlyRate && (
                    <p className="text-sm text-red-600 mt-1">{errors.hourlyRate.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Coverage Areas *
                  </label>
                  <textarea
                    rows={3}
                    className="block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                    placeholder="Manchester City Centre, Trafford, Sale..."
                    {...register('coverageAreas')}
                  />
                  {errors.coverageAreas && (
                    <p className="text-sm text-red-600 mt-1">{errors.coverageAreas.message}</p>
                  )}
                  <p className="text-sm text-gray-500 mt-1">
                    Comma-separated list of areas you serve
                  </p>
                </div>

                <div className="flex justify-end space-x-3 pt-6 border-t border-gray-200">
                  <Button type="button" variant="ghost">
                    Cancel
                  </Button>
                  <Button type="submit" loading={isLoading}>
                    Save Changes
                  </Button>
                </div>
              </form>
            </div>
          </div>

          {/* Profile Preview */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg sticky top-6">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Profile Preview</h2>
                <p className="text-sm text-gray-600">How customers see your profile</p>
              </div>
              
              <div className="p-6">
                <div className="text-center mb-4">
                  <Image
                    src={profileImageUrl}
                    alt="Profile preview"
                    width={96}
                    height={96}
                    className="h-24 w-24 rounded-full object-cover mx-auto border-2 border-gray-200"
                    unoptimized={profileImageUrl.startsWith('blob:')}
                  />
                  <h3 className="mt-3 text-lg font-semibold text-gray-900">
                    {watch('displayName') || mockCleanerData.name}
                  </h3>
                  <div className="flex items-center justify-center mt-2">
                    <Star className="h-4 w-4 text-yellow-400 fill-current" />
                    <span className="ml-1 text-sm font-medium text-gray-900">{mockCleanerData.rating}</span>
                    <span className="ml-1 text-sm text-gray-500">({mockCleanerData.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-700">About</h4>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-4">
                      {watch('bio') || mockCleanerData.bio}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Services</h4>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {(watch('services') || mockCleanerData.services).map((service, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Hourly Rate</h4>
                    <p className="text-lg font-semibold text-gray-900 mt-1">
                      £{watch('hourlyRate') || mockCleanerData.hourlyRate}/hour
                    </p>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium text-gray-700">Coverage Areas</h4>
                    <p className="text-sm text-gray-600 mt-1">
                      {watch('coverageAreas') || mockCleanerData.coverageAreas}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
