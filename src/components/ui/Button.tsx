'use client'

import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { forwardRef } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'whatsapp' | 'telegram'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  loading?: boolean
  className?: string
  children: ReactNode
}

interface ButtonAsButtonProps extends BaseButtonProps, Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  href?: never
}

interface ButtonAsLinkProps extends BaseButtonProps {
  href: string
  onClick?: never
  disabled?: never
  type?: never
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', loading, children, href, ...props }, ref) => {
    // Use our new design system classes
    const baseClasses = 'btn'
    
    const variants = {
      primary: 'btn-primary',
      secondary: 'btn-secondary', 
      outline: 'btn-outline',
      ghost: 'btn-ghost',
      whatsapp: 'btn-whatsapp',
      telegram: 'btn-telegram',
    }

    const sizes = {
      sm: 'btn-sm',
      md: '', // default size is built into .btn
      lg: 'btn-lg',
      xl: 'btn-xl',
    }

    const classes = cn(
      baseClasses, 
      variants[variant], 
      sizes[size],
      loading && 'opacity-75 cursor-wait',
      className
    )

    const LoadingIcon = loading ? (
      <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24" aria-hidden="true">
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path 
          className="opacity-75" 
          fill="currentColor" 
          d="m4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" 
        />
      </svg>
    ) : null

    if (href) {
      return (
        <Link 
          href={href} 
          className={classes}
          ref={ref as never}
        >
          {LoadingIcon}
          {children}
        </Link>
      )
    }

    return (
      <button
        ref={ref as never}
        className={classes}
        disabled={(props as ButtonAsButtonProps).disabled || loading}
        {...(props as ButtonAsButtonProps)}
      >
        {LoadingIcon}
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
