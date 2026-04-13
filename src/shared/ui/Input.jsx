import { cn } from '../lib/cn'

export function Input({ className, ...props }) {
  return (
    <input
      className={cn(
        'min-h-12 w-full rounded-[var(--radius-control)] border border-[var(--color-border-soft)] bg-[var(--color-input-bg)] px-4 text-sm text-[var(--color-text-primary)] shadow-[0_8px_20px_rgba(15,23,42,0.06)] outline-none transition placeholder:text-[var(--color-text-muted)] focus:border-[var(--color-brand-400)] focus:ring-4 focus:ring-[rgba(71,132,255,0.14)]',
        className,
      )}
      {...props}
    />
  )
}
