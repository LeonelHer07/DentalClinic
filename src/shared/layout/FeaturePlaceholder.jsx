import { Card } from '../ui/Card'

export function FeaturePlaceholder({ description, route, title }) {
  return (
    <section className="space-y-4">
      <header className="rounded-[var(--radius-card)] border border-[var(--color-border-soft)] bg-[var(--color-panel)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--color-brand-600)]">
          Feature scaffold
        </p>
        <h1 className="mt-3 text-3xl font-semibold tracking-[-0.03em] text-[var(--color-text-primary)]">
          {title}
        </h1>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-[var(--color-text-secondary)] sm:text-base">
          {description}
        </p>
      </header>

      <Card className="border border-dashed border-[var(--color-border-strong)] bg-[var(--color-panel)] p-6 shadow-[var(--shadow-soft)] sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--color-text-muted)]">
          Reserved route
        </p>
        <p className="mt-3 text-lg font-semibold text-[var(--color-text-primary)]">{route}</p>
        <p className="mt-4 max-w-2xl text-sm leading-6 text-[var(--color-text-secondary)]">
          Este modulo ya tiene su punto de entrada dentro de `features/` y
          puede recibir componentes, servicios, hooks y modelos propios sin
          afectar los demas dominios del sistema.
        </p>
      </Card>
    </section>
  )
}
