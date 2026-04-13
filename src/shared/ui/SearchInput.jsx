import { Input } from './Input'

export function SearchInput(props) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-xs text-[var(--color-text-muted)]">
        Q
      </span>
      <Input className="min-h-10 pl-8 pr-3 text-sm" {...props} />
    </div>
  )
}
