'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
})

type LoginFormData = z.infer<typeof loginSchema>

export default function CleanerLoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  })

  const onSubmit = async (_data: LoginFormData) => {
    setIsLoading(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // Set mock session cookie and redirect
    if (typeof window !== 'undefined') {
      document.cookie = 'cleaner_session=mock; path=/; max-age=86400'
    }
    router.push('/cleaner-dashboard')
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">
            Cleaner Login
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your cleaner account
          </p>
        </div>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email address"
              type="email"
              autoComplete="email"
              error={errors.email?.message}
              {...register('email')}
            />

            <Input
              label="Password"
              type="password"
              autoComplete="current-password"
              error={errors.password?.message}
              {...register('password')}
            />

            <Button
              type="submit"
              className="w-full"
              loading={isLoading}
              disabled={isLoading}
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6">
            <div className="text-center">
              <Link
                href="/cleaner/forgot-password"
                className="text-sm text-primary hover:text-primary/90"
              >
                Forgot your password?
              </Link>
            </div>
            
            <div className="mt-4 text-center">
              <span className="text-sm text-gray-600">
                New cleaner?{' '}
                <Link
                  href="/for-cleaners/join"
                  className="font-medium text-primary hover:text-primary/90"
                >
                  Join SofaCleaner
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}