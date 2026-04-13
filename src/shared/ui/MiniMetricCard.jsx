import { Card } from './Card'

export function MiniMetricCard({ accent, icon, label, value }) {
  return (
    <Card className="p-4 shadow-[var(--shadow-soft)]">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] text-[var(--color-text-muted)]">{label}</p>
          <p className="mt-2 text-lg font-semibold text-[var(--color-text-primary)]">
            {value}
          </p>
        </div>
        <span
          className="inline-flex h-8 w-8 items-center justify-center rounded-xl"
          style={{ backgroundColor: `${accent}20`, color: accent }}
        >
          {icon || label[0]}
        </span>
      </div>
    </Card>
  )
}
