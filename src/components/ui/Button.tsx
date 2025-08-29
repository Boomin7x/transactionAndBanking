import { ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  asChild?: boolean
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  className,
  asChild = false,
  ...props
}, ref) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50'

  const variants = {
    primary: 'bg-gold-dark text-white hover:bg-gold-dark/90',
    secondary: 'bg-dark-blue text-light-gray hover:bg-dark-blue/90',
    outline: 'border border-green text-dark-blue hover:bg-green hover:text-white',
    ghost: 'text-dark-blue hover:bg-light-gray/50'
  }

  const sizes = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4',
    lg: 'h-12 px-6 text-lg'
  }

  const classes = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  )

  if (asChild) {
    return (
      <span className={classes}>
        {children}
      </span>
    )
  }

  return (
    <button
      ref={ref}
      className={classes}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
