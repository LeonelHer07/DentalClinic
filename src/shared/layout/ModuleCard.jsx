import { Card } from '../ui/Card'

export function ModuleCard({ description, path, title }) {
  return (
    <Card className="border border-white/70 bg-white/90 p-5 shadow-[var(--shadow-soft)]">
      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-400">
        Planned route
      </p>
      <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-slate-900">
        {title}
      </h3>
      <p className="mt-3 text-sm leading-6 text-slate-500">{description}</p>
      <p className="mt-6 rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-600">
        {path}
      </p>
    </Card>
  )
}
