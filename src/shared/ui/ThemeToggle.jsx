import { useTheme } from '../theme/useTheme'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      aria-label="Cambiar tema"
      className="inline-flex h-10 items-center gap-2 rounded-full border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] px-2 text-[var(--color-text-secondary)] transition hover:border-[var(--color-brand-400)] hover:text-[var(--color-text-primary)]"
      onClick={toggleTheme}
      type="button"
    >
      <span
        className={[
          'inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition',
          theme === 'light'
            ? 'bg-[var(--color-brand-50)] text-[var(--color-brand-700)]'
            : 'text-[var(--color-text-muted)]',
        ].join(' ')}
      >
        L
      </span>
      <span
        className={[
          'inline-flex h-7 w-7 items-center justify-center rounded-full text-xs font-semibold transition',
          theme === 'dark'
            ? 'bg-[var(--color-brand-50)] text-[var(--color-brand-700)]'
            : 'text-[var(--color-text-muted)]',
        ].join(' ')}
      >
        D
      </span>
    </button>
  )
}
