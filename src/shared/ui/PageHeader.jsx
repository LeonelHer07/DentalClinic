import { Button } from './Button'

export function PageHeader({ actionLabel, children, onAction, title }) {
  return (
    <header className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
      <div>
        <h1 className="text-xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
          {title}
        </h1>
        {children ? (
          <p className="mt-1 text-sm text-[var(--color-text-secondary)]">
            {children}
          </p>
        ) : null}
      </div>
      {actionLabel ? (
        <Button
          className="min-h-9 self-start px-4 py-2 text-xs"
          onClick={onAction}
          variant="primary"
        >
          {actionLabel}
        </Button>
      ) : null}
    </header>
  )
}
