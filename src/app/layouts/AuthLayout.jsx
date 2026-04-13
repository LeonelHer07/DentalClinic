import { Outlet } from 'react-router-dom'

export function AuthLayout() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_var(--color-brand-50),_var(--color-surface-muted)_52%,_#dce7f5)] px-4 py-6 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center justify-center rounded-[var(--radius-shell)] border border-white/50 bg-white/70 p-4 shadow-[var(--shadow-shell)] backdrop-blur sm:p-8 lg:p-12">
        <Outlet />
      </div>
    </main>
  )
}
