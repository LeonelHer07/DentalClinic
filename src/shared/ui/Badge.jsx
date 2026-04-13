import { cn } from '../lib/cn'

const toneClasses = {
  blue: 'bg-sky-100 text-sky-700',
  green: 'bg-emerald-100 text-emerald-700',
  red: 'bg-rose-100 text-rose-700',
  yellow: 'bg-amber-100 text-amber-700',
  purple: 'bg-violet-100 text-violet-700',
  gray: 'bg-slate-100 text-slate-600',
}

export function Badge({ children, className, tone = 'blue' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2 py-1 text-[10px] font-semibold leading-none',
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
