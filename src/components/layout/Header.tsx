import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface HeaderProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'gradient'
}

export function Header({ children, className, variant = 'default' }: HeaderProps) {
  const variants = {
    default: 'bg-white border-b border-gray-200',
    gradient: 'bg-gradient-primary'
  }

  return (
    <header className={cn('py-8', variants[variant], className)}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </header>
  )
}

interface HeaderTitleProps {
  children: ReactNode
  className?: string
}

export function HeaderTitle({ children, className }: HeaderTitleProps) {
  return (
    <h1 className={cn('text-4xl font-bold text-dark-blue text-center', className)}>
      {children}
    </h1>
  )
}

interface HeaderSubtitleProps {
  children: ReactNode
  className?: string
}

export function HeaderSubtitle({ children, className }: HeaderSubtitleProps) {
  return (
    <p className={cn('text-dark-blue/80 text-center mt-2', className)}>
      {children}
    </p>
  )
}
