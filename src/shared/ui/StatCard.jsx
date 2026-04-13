import { Card } from './Card'

export function StatCard({ accent, icon, label, value }) {
  return (
    <Card className="rounded-[1.2rem] px-4 py-3 shadow-[var(--shadow-soft)]">
      <div className="flex items-start justify-between gap-3">
        <div className="pt-1">
          <p className="text-[0.95rem] font-medium text-[var(--color-text-secondary)]">
            {label}
          </p>
          <p className="mt-3 text-[2.6rem] font-semibold leading-none tracking-[-0.04em] text-[var(--color-text-primary)]">
            {value}
          </p>
        </div>
        <span
          className="inline-flex h-9 w-9 items-center justify-center rounded-xl"
          style={{
            backgroundColor: `${accent}18`,
            color: accent,
          }}
        >
          {icon ? (
            <img
              alt=""
              className="h-4 w-4 object-contain"
              src={icon}
            />
          ) : (
            <span className="text-[10px] font-semibold">{label[0]}</span>
          )}
        </span>
      </div>
    </Card>
  )
}
