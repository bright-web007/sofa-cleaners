'use client'

import { useState } from 'react'
import { Download } from 'lucide-react'
import DashboardLayout from '@/components/dashboard/DashboardLayout'
import { JobsTable } from '@/components/dashboard/JobsTable'
import { Button } from '@/components/ui/Button'
import { Job } from '@/types'

// Extended mock jobs data
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
  {
    id: '4',
    customerName: 'Michael Johnson',
    address: 'Bloomsbury, London WC1A 2RA',
    service: 'Velvet sofa cleaning',
    date: '2026-03-20',
    status: 'completed',
    price: 95,
  },
  {
    id: '5',
    customerName: 'Lisa Wong',
    address: 'Paddington, London W2 1NY',
    service: 'End of tenancy cleaning',
    date: '2026-03-30',
    status: 'confirmed',
    price: 180,
  },
  {
    id: '6',
    customerName: 'James Smith',
    address: 'Marylebone, London W1G 9RY',
    service: 'Fabric sofa cleaning',
    date: '2026-03-15',
    status: 'completed',
    price: 75,
  },
  {
    id: '7',
    customerName: 'Anna Rodriguez',
    address: 'Fitzrovia, London W1T 4JE',
    service: 'Stain removal',
    date: '2026-03-18',
    status: 'cancelled',
    price: 60,
  },
  {
    id: '8',
    customerName: 'Robert Taylor',
    address: 'Euston, London NW1 2BU',
    service: 'Leather sofa cleaning',
    date: '2026-04-02',
    status: 'pending',
    price: 110,
  },
]

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState<Job['status'] | 'all'>('all')
  const [currentPage, setCurrentPage] = useState(1)
  const [isExporting, setIsExporting] = useState(false)
  
  const itemsPerPage = 10
  
  const filteredJobs = activeTab === 'all' 
    ? mockJobs 
    : mockJobs.filter(job => job.status === activeTab)

  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage)

  const handleTabChange = (tab: Job['status'] | 'all') => {
    setActiveTab(tab)
    setCurrentPage(1)
  }

  const handleExport = async () => {
    setIsExporting(true)
    
    // Simulate export process
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    // Create CSV content
    const headers = ['Date', 'Customer', 'Service', 'Address', 'Status', 'Price']
    const csvContent = [
      headers.join(','),
      ...filteredJobs.map(job => [
        new Date(job.date).toLocaleDateString('en-GB'),
        `"${job.customerName}"`,
        `"${job.service}"`,
        `"${job.address}"`,
        job.status,
        job.price
      ].join(','))
    ].join('\n')

    // Create download
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' })
    const link = document.createElement('a')
    link.href = URL.createObjectURL(blob)
    link.download = `jobs_${activeTab}_${new Date().toISOString().split('T')[0]}.csv`
    link.click()
    
    setIsExporting(false)
  }

  const tabs = [
    { key: 'all', label: 'All', count: mockJobs.length },
    { key: 'pending', label: 'Pending', count: mockJobs.filter(j => j.status === 'pending').length },
    { key: 'confirmed', label: 'Confirmed', count: mockJobs.filter(j => j.status === 'confirmed').length },
    { key: 'completed', label: 'Completed', count: mockJobs.filter(j => j.status === 'completed').length },
    { key: 'cancelled', label: 'Cancelled', count: mockJobs.filter(j => j.status === 'cancelled').length },
  ] as const

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending': return 'bg-amber-100 text-amber-800 border-amber-200'
      case 'confirmed': return 'bg-blue-100 text-blue-800 border-blue-200'
      case 'completed': return 'bg-green-100 text-green-800 border-green-200'
      case 'cancelled': return 'bg-gray-100 text-gray-800 border-gray-200'
      default: return 'bg-gray-100 text-gray-800 border-gray-200'
    }
  }

  return (
    <DashboardLayout title="My Jobs">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-semibold text-gray-900">My Jobs</h1>
            <p className="text-sm text-gray-600 mt-1">
              Manage and track all your cleaning jobs
            </p>
          </div>
          <Button 
            onClick={handleExport}
            loading={isExporting}
            variant="ghost"
            className="hidden sm:flex"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Jobs
          </Button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8 overflow-x-auto">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => handleTabChange(tab.key)}
                className={`
                  flex-shrink-0 py-2 px-1 border-b-2 font-medium text-sm whitespace-nowrap
                  ${activeTab === tab.key
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-200'
                  }
                `}
              >
                {tab.label}
                <span className={`
                  ml-2 inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium
                  ${activeTab === tab.key ? getStatusColor(tab.key) : 'bg-gray-100 text-gray-600'}
                `}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Mobile Export Button */}
        <div className="sm:hidden">
          <Button 
            onClick={handleExport}
            loading={isExporting}
            variant="ghost"
            className="w-full"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Jobs
          </Button>
        </div>

        {/* Jobs Table */}
        <div className="bg-white rounded-lg shadow">
          <JobsTable jobs={currentJobs} showFilters={false} />
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 rounded-b-lg">
            <div className="flex flex-1 justify-between sm:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
              >
                Previous
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
              >
                Next
              </Button>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div>
                <p className="text-sm text-gray-700">
                  Showing{' '}
                  <span className="font-medium">{startIndex + 1}</span>
                  {' '}to{' '}
                  <span className="font-medium">
                    {Math.min(startIndex + itemsPerPage, filteredJobs.length)}
                  </span>
                  {' '}of{' '}
                  <span className="font-medium">{filteredJobs.length}</span>
                  {' '}results
                </p>
              </div>
              <div>
                <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`
                        relative inline-flex items-center px-4 py-2 text-sm font-semibold
                        ${page === currentPage
                          ? 'z-10 bg-primary text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary'
                          : 'text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0'
                        }
                      `}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 disabled:opacity-50"
                  >
                    Next
                  </button>
                </nav>
              </div>
            </div>
          </div>
        )}
      </div>
    </DashboardLayout>
  )
}