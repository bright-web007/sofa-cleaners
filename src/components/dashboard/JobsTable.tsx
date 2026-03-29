'use client'

import { useState } from 'react'
import { Job } from '@/types'
import { Eye, ChevronUp, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface JobsTableProps {
  jobs: Job[]
  maxRows?: number
  showFilters?: boolean
}

interface JobModalProps {
  job: Job
  isOpen: boolean
  onClose: () => void
}

const JobModal: React.FC<JobModalProps> = ({ job, isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Job Details</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-3">
          <div>
            <span className="font-medium text-gray-700">Customer:</span>
            <span className="ml-2 text-gray-900">{job.customerName}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Service:</span>
            <span className="ml-2 text-gray-900">{job.service}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Address:</span>
            <span className="ml-2 text-gray-900">{job.address}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Date:</span>
            <span className="ml-2 text-gray-900">{new Date(job.date).toLocaleDateString('en-GB')}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Price:</span>
            <span className="ml-2 text-gray-900">£{job.price}</span>
          </div>
          <div>
            <span className="font-medium text-gray-700">Status:</span>
            <span className="ml-2">
              <StatusBadge status={job.status} />
            </span>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Button onClick={onClose} variant="outline">
            Close
          </Button>
        </div>
      </div>
    </div>
  )
}

const StatusBadge: React.FC<{ status: Job['status'] }> = ({ status }) => {
  const styles = {
    pending: 'bg-amber-100 text-amber-800 border-amber-200',
    confirmed: 'bg-blue-100 text-blue-800 border-blue-200',
    completed: 'bg-green-100 text-green-800 border-green-200',
    cancelled: 'bg-gray-100 text-gray-800 border-gray-200',
  }

  const labels = {
    pending: 'Pending',
    confirmed: 'Confirmed',
    completed: 'Completed',
    cancelled: 'Cancelled',
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${styles[status]}`}>
      {labels[status]}
    </span>
  )
}

const JobsTable: React.FC<JobsTableProps> = ({ jobs, maxRows, showFilters = false }) => {
  const [sortField, setSortField] = useState<keyof Job>('date')
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc')
  const [statusFilter, setStatusFilter] = useState<Job['status'] | 'all'>('all')
  const [selectedJob, setSelectedJob] = useState<Job | null>(null)

  const handleSort = (field: keyof Job) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc')
    } else {
      setSortField(field)
      setSortDirection('asc')
    }
  }

  const filteredJobs = jobs.filter(job => 
    statusFilter === 'all' || job.status === statusFilter
  )

  const sortedJobs = [...filteredJobs].sort((a, b) => {
    let aValue = a[sortField]
    let bValue = b[sortField]
    
    // Handle date sorting
    if (sortField === 'date') {
      aValue = new Date(aValue as string).getTime()
      bValue = new Date(bValue as string).getTime()
    }
    
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1
    return 0
  })

  const displayedJobs = maxRows ? sortedJobs.slice(0, maxRows) : sortedJobs

  const SortIcon = ({ field }: { field: keyof Job }) => {
    if (sortField !== field) return null
    return sortDirection === 'asc' ? 
      <ChevronUp className="h-4 w-4 ml-1" /> : 
      <ChevronDown className="h-4 w-4 ml-1" />
  }

  const SortableHeader = ({ field, children }: { field: keyof Job; children: React.ReactNode }) => (
    <th 
      onClick={() => handleSort(field)}
      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer hover:bg-gray-50 select-none"
    >
      <div className="flex items-center">
        {children}
        <SortIcon field={field} />
      </div>
    </th>
  )

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      {showFilters && (
        <div className="p-4 border-b border-gray-200">
          <div className="flex space-x-4">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as Job['status'] | 'all')}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="confirmed">Confirmed</option>
              <option value="completed">Completed</option>
              <option value="cancelled">Cancelled</option>
            </select>
          </div>
        </div>
      )}
      
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <SortableHeader field="date">Date</SortableHeader>
              <SortableHeader field="customerName">Customer</SortableHeader>
              <SortableHeader field="service">Service</SortableHeader>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Area
              </th>
              <SortableHeader field="price">Price</SortableHeader>
              <SortableHeader field="status">Status</SortableHeader>
              <th className="relative px-6 py-3">
                <span className="sr-only">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {displayedJobs.length === 0 ? (
              <tr>
                <td colSpan={7} className="px-6 py-12 text-center text-gray-500">
                  No jobs found
                </td>
              </tr>
            ) : (
              displayedJobs.map((job) => (
                <tr 
                  key={job.id} 
                  className="hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => setSelectedJob(job)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(job.date).toLocaleDateString('en-GB')}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {job.customerName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {job.service}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {job.address.split(',')[0]}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    £{job.price}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <StatusBadge status={job.status} />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={(e) => {
                        e.stopPropagation()
                        setSelectedJob(job)
                      }}
                      className="text-primary hover:text-primary/80"
                    >
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      <JobModal 
        job={selectedJob!}
        isOpen={!!selectedJob}
        onClose={() => setSelectedJob(null)}
      />
    </div>
  )
}

export { JobsTable }