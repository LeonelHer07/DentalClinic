import { cn } from '../lib/cn'

const variants = {
  primary:
    'bg-[var(--color-brand-600)] text-white shadow-[0_12px_25px_rgba(14,84,166,0.22)] hover:bg-[var(--color-brand-700)]',
  secondary:
    'border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-subtle)]',
  ghost:
    'border border-transparent bg-transparent text-[var(--color-text-secondary)] hover:bg-[var(--color-surface-subtle)] hover:text-[var(--color-text-primary)]',
}

export function Button({
  children,
  className,
  type = 'button',
  variant = 'primary',
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex min-h-12 items-center justify-center rounded-[var(--radius-control)] px-5 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-brand-400)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--color-panel)] disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  )
}
