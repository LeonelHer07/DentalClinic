export function Checkbox({ checked, id, label, onChange }) {
  return (
    <label
      className="inline-flex cursor-pointer items-center gap-3 text-sm text-slate-500"
      htmlFor={id}
    >
      <input
        checked={checked}
        className="h-4 w-4 rounded border-[var(--color-border-strong)] text-[var(--color-brand-600)] focus:ring-[var(--color-brand-400)]"
        id={id}
        onChange={onChange}
        type="checkbox"
      />
      <span>{label}</span>
    </label>
  )
}
