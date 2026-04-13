import { Outlet } from 'react-router-dom'

import { AppSidebar } from '../../shared/layout/AppSidebar'
import { AppTopbar } from '../../shared/layout/AppTopbar'

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[var(--color-app-bg)] text-[var(--color-text-primary)] transition-colors">
      <div className="mx-auto grid min-h-screen max-w-[1600px] grid-cols-1 lg:grid-cols-[228px_minmax(0,1fr)]">
        <AppSidebar />
        <div className="flex min-h-screen flex-col overflow-hidden rounded-l-[var(--radius-shell)] border border-[var(--color-border-soft)] bg-[var(--color-shell)] shadow-[var(--shadow-shell)] lg:my-4 lg:mr-4">
          <AppTopbar />
          <main className="flex-1 overflow-auto p-3 sm:p-4 lg:p-5">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
