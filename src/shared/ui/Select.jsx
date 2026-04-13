import { cn } from '../lib/cn'

export function Select({ children, className, ...props }) {
  return (
    <select
      className={cn(
        'min-h-10 w-full rounded-[var(--radius-control)] border border-[var(--color-border-soft)] bg-[var(--color-input-bg)] px-3 text-sm text-[var(--color-text-primary)] outline-none transition focus:border-[var(--color-brand-400)] focus:ring-4 focus:ring-[rgba(71,132,255,0.14)]',
        className,
      )}
      {...props}
    >
      {children}
    </select>
  )
}
