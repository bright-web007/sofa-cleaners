'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { User, Calendar, Settings, LogOut, Menu, X, Home, Briefcase, Bell } from 'lucide-react'

interface DashboardLayoutProps {
  children: React.ReactNode
  title?: string
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children, title }) => {
  const router = useRouter()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [cleanerName] = useState('John Smith')

  useEffect(() => {
    // Check for session cookie only on client side
    if (typeof window !== 'undefined') {
      const hasSession = document.cookie
        .split(';')
        .some(cookie => cookie.trim().startsWith('cleaner_session='))

      if (!hasSession) {
        router.push('/cleaner/login')
      }
    }
  }, [router])

  const handleLogout = () => {
    // Remove session cookie only on client side
    if (typeof window !== 'undefined') {
      document.cookie = 'cleaner_session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    }
    router.push('/cleaner/login')
  }

  const navItems = [
    { href: '/cleaner-dashboard', icon: Home, label: 'Overview' },
    { href: '/cleaner-dashboard/jobs', icon: Briefcase, label: 'My Jobs' },
    { href: '/cleaner-dashboard/availability', icon: Calendar, label: 'Availability' },
    { href: '/cleaner-dashboard/profile', icon: User, label: 'My Profile' },
    { href: '/cleaner-dashboard/settings', icon: Settings, label: 'Settings' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Desktop Sidebar */}
      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-col flex-grow bg-white shadow-sm border-r border-gray-200">
          {/* Logo */}
          <div className="flex items-center h-16 px-6 border-b border-gray-200">
            <Link href="/" className="text-xl font-bold text-primary">
              SofaCleaner
            </Link>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-primary-light hover:text-primary transition-colors"
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            ))}
          </nav>

          {/* User actions */}
          <div className="px-4 py-4 border-t border-gray-200">
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="lg:hidden bg-white shadow-sm border-b border-gray-200">
        <div className="flex items-center justify-between h-16 px-4">
          <Link href="/" className="text-xl font-bold text-primary">
            SofaCleaner
          </Link>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-md text-gray-600 hover:bg-gray-100"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-gray-200">
          <nav className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-primary-light hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="h-5 w-5 mr-3" />
                {item.label}
              </Link>
            ))}
            <button
              onClick={handleLogout}
              className="flex items-center w-full px-4 py-2 text-sm font-medium text-gray-600 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Logout
            </button>
          </nav>
        </div>
      )}

      {/* Main Content */}
      <div className="lg:pl-64">
        {/* Header */}
        <div className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {title || `Welcome back, ${cleanerName}`}
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg transition-colors relative">
                  <Bell className="h-5 w-5" />
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                    1
                  </span>
                </button>
                <div className="hidden sm:flex items-center">
                  <span className="text-sm text-gray-500">Welcome back, </span>
                  <span className="text-sm font-medium text-gray-900 ml-1">{cleanerName}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <main className="flex-1">
          <div className="px-4 py-8 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="lg:hidden fixed bottom-0 inset-x-0 bg-white border-t border-gray-200">
        <div className="flex">
          {navItems.slice(0, 4).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-xs text-gray-600 hover:text-primary transition-colors"
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="truncate">{item.label}</span>
            </Link>
          ))}
          <Link
            href="/cleaner-dashboard/settings"
            className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-xs text-gray-600 hover:text-primary transition-colors"
          >
            <Settings className="h-5 w-5 mb-1" />
            <span>Settings</span>
          </Link>
        </div>
      </div>

      {/* Bottom padding for mobile navigation */}
      <div className="lg:hidden h-16" />
    </div>
  )
}

export default DashboardLayout
