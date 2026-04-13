import { cn } from '../lib/cn'

export function Card({ children, className, ...props }) {
  return (
    <section
      className={cn(
        'rounded-[var(--radius-card)] border border-[var(--color-border-soft)] bg-[var(--color-panel)]',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  )
}
