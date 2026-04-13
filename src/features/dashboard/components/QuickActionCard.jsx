import { Card } from '../../../shared/ui/Card'

export function QuickActionCard({ accent, icon, label, onClick }) {
  return (
    <Card
      className="group cursor-pointer rounded-[1rem] px-4 py-6 shadow-[var(--shadow-soft)] transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-[var(--color-brand-400)] hover:shadow-[0_18px_34px_rgba(15,23,42,0.12)]"
      onClick={onClick}
      role="button"
      tabIndex={0}
    >
      <div className="flex flex-col items-center justify-center gap-3 text-center">
      <span
        className="inline-flex h-10 w-10 items-center justify-center rounded-full transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: `${accent}12`, color: accent }}
      >
        {icon ? (
          <img
            alt=""
            className="h-5 w-5 object-contain"
            src={icon}
          />
        ) : (
          label[0]
        )}
      </span>
      <p className="text-[1.05rem] font-medium text-[var(--color-text-primary)] transition-colors duration-200 group-hover:text-[var(--color-brand-700)]">
        {label}
      </p>
      </div>
    </Card>
  )
}
