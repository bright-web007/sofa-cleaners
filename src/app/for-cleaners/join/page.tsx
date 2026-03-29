'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { ArrowLeft, ArrowRight, Upload, Check, MessageCircle } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Checkbox } from '@/components/ui/Checkbox'
import { Textarea } from '@/components/ui/Textarea'
import { ProgressBar } from '@/components/ui/ProgressBar'
import { WHATSAPP_NUMBER } from '@/lib/constants'

// Form schemas for each step
const step1Schema = z.object({
  fullName: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  mobile: z.string().regex(/^(\+44|0)7\d{9}$/, 'Please enter a valid UK mobile number'),
  tradingName: z.string().optional(),
  postcode: z.string().regex(/^[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2}$/i, 'Please enter a valid UK postcode'),
})

const step2Schema = z.object({
  services: z.array(z.string()).min(1, 'Please select at least one service'),
  hourlyRate: z.number().min(10, 'Minimum rate is £10').max(200, 'Maximum rate is £200'),
  coverageRadius: z.number().min(5).max(50),
})

const step3Schema = z.object({
  dbsCertificate: z.any().optional(),
  insuranceCertificate: z.any().optional(),
  dbsExpiry: z.string().min(1, 'DBS expiry date is required'),
  insuranceExpiry: z.string().min(1, 'Insurance expiry date is required'),
  declaration: z.boolean().refine(val => val === true, 'You must confirm the declaration'),
})

const step4Schema = z.object({
  profilePhoto: z.any().optional(),
  bio: z.string().min(50, 'Bio must be at least 50 characters').max(300, 'Bio must be less than 300 characters'),
  coverageAreas: z.string().min(1, 'Please specify your coverage areas'),
})

const fullSchema = step1Schema.merge(step2Schema).merge(step3Schema).merge(step4Schema)

type SignupFormData = z.infer<typeof fullSchema>

const steps = ['Personal', 'Services', 'Verification', 'Profile']

const serviceOptions = [
  'Fabric sofa cleaning',
  'Leather sofa cleaning', 
  'Velvet sofa cleaning',
  'Stain removal',
  'End of tenancy cleaning'
]

export default function CleanerSignupPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [selectedFiles, setSelectedFiles] = useState<{[key: string]: File | null}>({
    dbsCertificate: null,
    insuranceCertificate: null,
    profilePhoto: null,
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger,
    getValues,
  } = useForm<SignupFormData>({
    resolver: zodResolver(fullSchema),
    mode: 'onBlur',
    defaultValues: {
      services: [],
      hourlyRate: 30,
      coverageRadius: 10,
      declaration: false,
    }
  })

  const watchedServices = watch('services', [])
  const watchedCoverageRadius = watch('coverageRadius', 10)
  const watchedBio = watch('bio', '')

  const handleFileUpload = (fieldName: string, file: File | null) => {
    setSelectedFiles(prev => ({ ...prev, [fieldName]: file }))
    setValue(fieldName as any, file)
  }

  const validateCurrentStep = async () => {
    let fields: string[] = []

    switch (currentStep) {
      case 1:
        fields = ['fullName', 'email', 'mobile', 'postcode']
        break
      case 2:
        fields = ['services', 'hourlyRate', 'coverageRadius']
        break
      case 3:
        fields = ['dbsExpiry', 'insuranceExpiry', 'declaration']
        break
      case 4:
        fields = ['bio', 'coverageAreas']
        break
      default:
        return false
    }

    return await trigger(fields as (keyof SignupFormData)[])
  }

  const handleNext = async () => {
    const isValid = await validateCurrentStep()
    if (isValid && currentStep < 4) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = async (_data: SignupFormData) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsLoading(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-lg">
          <div className="bg-white py-12 px-6 shadow sm:rounded-lg sm:px-10">
            <div className="text-center">
              <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                <Check className="h-8 w-8 text-green-600" />
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                Application submitted!
              </h1>
              <p className="text-lg text-gray-600 mb-6">
                We'll review your details and get back to you within 2 business days.
              </p>
              <div className="space-y-4">
                <p className="text-sm text-gray-500">
                  In the meantime, you can reach us on WhatsApp:
                </p>
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-whatsapp text-white rounded-lg hover:bg-whatsapp/90 transition-colors"
                >
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Contact on WhatsApp
                </a>
                <div className="mt-6">
                  <Link href="/">
                    <Button variant="ghost" className="w-full">
                      Back to homepage
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Join SofaCleaner
          </h1>
          <p className="text-center text-gray-600">
            Start earning with the UK's leading sofa cleaning platform
          </p>
        </div>

        <div className="mb-8">
          <ProgressBar steps={steps} currentStep={currentStep} />
        </div>

        <div className="bg-white shadow sm:rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="px-6 py-8">
              {/* Step 1: Personal Details */}
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Personal Details
                    </h2>
                  </div>
                  
                  <Input
                    label="Full name *"
                    error={errors.fullName?.message}
                    {...register('fullName')}
                  />

                  <Input
                    label="Email address *"
                    type="email"
                    error={errors.email?.message}
                    {...register('email')}
                  />

                  <Input
                    label="Mobile number *"
                    placeholder="07xxx xxx xxx or +447xxx xxx xxx"
                    error={errors.mobile?.message}
                    {...register('mobile')}
                  />

                  <Input
                    label="Trading name (optional)"
                    helperText="If you operate under a business name"
                    {...register('tradingName')}
                  />

                  <Input
                    label="Postcode *"
                    placeholder="SW1A 1AA"
                    error={errors.postcode?.message}
                    {...register('postcode')}
                  />
                </div>
              )}

              {/* Step 2: Services */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Your Services
                    </h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Services offered *
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
                      Hourly rate *
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
                      Coverage radius: {watchedCoverageRadius} miles
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      {...register('coverageRadius', { valueAsNumber: true })}
                    />
                    <div className="flex justify-between text-sm text-gray-500 mt-1">
                      <span>5 miles</span>
                      <span>50 miles</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Verification */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Verification Documents
                    </h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      DBS Certificate
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      {selectedFiles.dbsCertificate ? (
                        <div className="text-sm text-gray-600">
                          <Check className="h-5 w-5 text-green-500 mx-auto mb-2" />
                          {selectedFiles.dbsCertificate.name}
                        </div>
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <label className="cursor-pointer">
                            <span className="text-primary font-medium">Upload file</span>
                            <span className="text-gray-500"> or drag and drop</span>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="hidden"
                              onChange={(e) => handleFileUpload('dbsCertificate', e.target.files?.[0] || null)}
                            />
                          </label>
                          <p className="text-xs text-gray-500 mt-2">PDF, JPG, PNG up to 10MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  <Input
                    label="DBS expiry date *"
                    type="date"
                    error={errors.dbsExpiry?.message}
                    {...register('dbsExpiry')}
                  />

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Insurance Certificate
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors">
                      {selectedFiles.insuranceCertificate ? (
                        <div className="text-sm text-gray-600">
                          <Check className="h-5 w-5 text-green-500 mx-auto mb-2" />
                          {selectedFiles.insuranceCertificate.name}
                        </div>
                      ) : (
                        <>
                          <Upload className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                          <label className="cursor-pointer">
                            <span className="text-primary font-medium">Upload file</span>
                            <span className="text-gray-500"> or drag and drop</span>
                            <input
                              type="file"
                              accept=".pdf,.jpg,.jpeg,.png"
                              className="hidden"
                              onChange={(e) => handleFileUpload('insuranceCertificate', e.target.files?.[0] || null)}
                            />
                          </label>
                          <p className="text-xs text-gray-500 mt-2">PDF, JPG, PNG up to 10MB</p>
                        </>
                      )}
                    </div>
                  </div>

                  <Input
                    label="Insurance expiry date *"
                    type="date"
                    error={errors.insuranceExpiry?.message}
                    {...register('insuranceExpiry')}
                  />

                  <div className="border-t pt-6">
                    <Checkbox
                      label="I confirm all information provided is accurate and I meet the requirements to work as a self-employed cleaner in the UK *"
                      error={errors.declaration?.message}
                      {...register('declaration')}
                    />
                  </div>
                </div>
              )}

              {/* Step 4: Profile */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-6">
                      Your Profile
                    </h2>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Profile Photo
                    </label>
                    <div className="flex items-center space-x-4">
                      {selectedFiles.profilePhoto && (
                        <Image
                          src={URL.createObjectURL(selectedFiles.profilePhoto)}
                          alt="Profile preview"
                          width={80}
                          height={80}
                          className="h-20 w-20 rounded-full object-cover"
                          unoptimized
                        />
                      )}
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 flex-1 text-center hover:border-gray-400 transition-colors">
                        {selectedFiles.profilePhoto ? (
                          <div className="text-sm text-gray-600">
                            <Check className="h-5 w-5 text-green-500 mx-auto mb-2" />
                            {selectedFiles.profilePhoto.name}
                          </div>
                        ) : (
                          <label className="cursor-pointer">
                            <Upload className="h-6 w-6 text-gray-400 mx-auto mb-2" />
                            <span className="text-primary font-medium">Upload photo</span>
                            <input
                              type="file"
                              accept="image/*"
                              className="hidden"
                              onChange={(e) => handleFileUpload('profilePhoto', e.target.files?.[0] || null)}
                            />
                          </label>
                        )}
                      </div>
                    </div>
                  </div>

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
                    <Textarea
                      label="Coverage Areas *"
                      rows={3}
                      placeholder="Camden, Islington, King's Cross, Bloomsbury..."
                      helperText="Comma-separated list of areas you cover"
                      error={errors.coverageAreas?.message}
                      {...register('coverageAreas')}
                    />
                  </div>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="px-6 py-4 bg-gray-50 border-t rounded-b-lg">
              <div className="flex justify-between">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleBack}
                  disabled={currentStep === 1}
                  className={currentStep === 1 ? 'invisible' : ''}
                >
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>

                {currentStep < 4 ? (
                  <Button type="button" onClick={handleNext}>
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button type="submit" loading={isLoading}>
                    Submit Application
                  </Button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
