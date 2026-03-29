'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Calendar, User, Star, PoundSterling, TrendingUp, Clock, Lightbulb } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { JobsTable } from '@/components/dashboard/JobsTable'
import { Button } from '@/components/ui/Button'
import { Job } from '@/types'

// Mock jobs data
const mockJobs: Job[] = [
  {
    id: '1',
    customerName: 'Sarah Mitchell',
    address: 'Camden, London NW1 8NH',
    service: 'Fabric sofa cleaning',
    date: '2026-03-25',
    status: 'confirmed',
    price: 85,
  },
  {
    id: '2',
    customerName: 'David Chen',
    address: 'Islington, London N1 2LX',
    service: 'Leather sofa cleaning',
    date: '2026-03-28',
    status: 'pending',
    price: 120,
  },
  {
    id: '3',
    customerName: 'Emma Thompson',
    address: 'King\'s Cross, London N1C 4QP',
    service: 'Stain removal',
    date: '2026-03-22',
    status: 'completed',
    price: 65,
  },
]

const tips = [
  "Arrive 10 minutes early to make a great first impression with customers.",
  "Take before and after photos to showcase your work quality.",
  "Always test cleaning solutions on a small, hidden area first.",
  "Keep customers informed about your arrival time via WhatsApp.",
  "Bring business cards to leave with satisfied customers.",
  "Use furniture protectors to prevent water damage during cleaning.",
]

interface StatCardProps {
  title: string
  value: string | number
  icon: React.ComponentType<any>
  trend?: string
  trendIcon?: React.ComponentType<any>
  colorClass?: string
}

const StatCard: React.FC<StatCardProps> = ({ 
  title, 
  value, 
  icon: Icon, 
  trend, 
  trendIcon: TrendIcon,
  colorClass = 'text-primary'
}) => {
  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1">{value}</p>
          {trend && TrendIcon && (
            <div className="flex items-center mt-2">
              <TrendIcon className="h-4 w-4 text-green-500 mr-1" />
              <span className="text-sm text-green-600 font-medium">{trend}</span>
            </div>
          )}
        </div>
        <div className={`p-3 rounded-full bg-gray-100 ${colorClass}`}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  )
}

export default function DashboardOverview() {
  const [currentTip, setCurrentTip] = useState(0)

  const stats = [
    {
      title: 'Jobs this week',
      value: 3,
      icon: Calendar,
      trend: '+2 from last week',
      trendIcon: TrendingUp,
    },
    {
      title: 'Pending requests',
      value: 1,
      icon: Clock,
      colorClass: 'text-amber',
    },
    {
      title: 'Your rating',
      value: '4.8★',
      icon: Star,
      trend: '+0.2 this month',
      trendIcon: TrendingUp,
      colorClass: 'text-yellow-500',
    },
    {
      title: 'Earnings this month',
      value: '£340',
      icon: PoundSterling,
      trend: '+£85 from last month',
      trendIcon: TrendingUp,
      colorClass: 'text-green-600',
    },
  ]

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % tips.length)
  }

  return (
    <DashboardLayout title="Dashboard Overview">
      <div className="space-y-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/cleaner-dashboard/availability">
              <Button variant="ghost" className="w-full justify-start">
                <Calendar className="h-5 w-5 mr-3" />
                Update Availability
              </Button>
            </Link>
            <Link href="/cleaner-dashboard/profile">
              <Button variant="ghost" className="w-full justify-start">
                <User className="h-5 w-5 mr-3" />
                Edit Profile
              </Button>
            </Link>
          </div>
        </div>

        {/* Recent Jobs */}
        <div className="bg-white rounded-lg shadow">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Jobs</h2>
              <Link href="/cleaner-dashboard/jobs">
                <Button variant="ghost" size="sm">
                  View All Jobs
                </Button>
              </Link>
            </div>
          </div>
          <div className="p-0">
            <JobsTable jobs={mockJobs} maxRows={3} />
          </div>
        </div>

        {/* Tip of the Day */}
        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-lg shadow p-6 text-white">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              <div className="flex items-center mb-3">
                <Lightbulb className="h-6 w-6 mr-2" />
                <h2 className="text-lg font-semibold">Tip of the Day</h2>
              </div>
              <p className="text-primary-light leading-relaxed">
                {tips[currentTip]}
              </p>
            </div>
            <button
              onClick={nextTip}
              className="ml-4 px-3 py-1 bg-white bg-opacity-20 rounded-md text-sm font-medium hover:bg-opacity-30 transition-colors flex-shrink-0"
            >
              Next tip
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}