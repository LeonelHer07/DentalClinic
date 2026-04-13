import { Card } from './Card'

export function SectionPanel({ actionLabel, children, title }) {
  return (
    <Card className="p-4 shadow-[var(--shadow-soft)]">
      {title || actionLabel ? (
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            {title ? (
              <h2 className="text-sm font-semibold text-[var(--color-text-primary)]">
                {title}
              </h2>
            ) : null}
          </div>
          {actionLabel ? (
            <button
              className="text-xs font-medium text-[var(--color-text-muted)] transition hover:text-[var(--color-brand-600)]"
              type="button"
            >
              {actionLabel}
            </button>
          ) : null}
        </div>
      ) : null}
      {children}
    </Card>
  )
}
