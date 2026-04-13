import { useNavigate } from 'react-router-dom'

import { routePaths } from '../../app/router/routePaths'
import { useAuth } from '../../features/auth/hooks/useAuth'
import { SearchInput } from '../ui/SearchInput'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../ui/ThemeToggle'

export function AppTopbar() {
  const navigate = useNavigate()
  const { signOut } = useAuth()

  const handleSignOut = () => {
    signOut()
    navigate(routePaths.login, { replace: true })
  }

  return (
    <header className="border-b border-[var(--color-border-soft)] bg-[var(--color-panel)] px-3 py-3 sm:px-4 lg:px-5">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <div className="w-full max-w-sm">
          <SearchInput placeholder="Buscar..." />
        </div>

        <div className="flex items-center gap-2 self-end lg:self-auto">
          <ThemeToggle />
          <button
            aria-label="Notificaciones"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[var(--color-border-soft)] bg-[var(--color-surface-elevated)] text-[var(--color-text-secondary)] transition hover:border-[var(--color-brand-400)] hover:text-[var(--color-text-primary)]"
            type="button"
          >
            !
          </button>
          <div className="inline-flex h-10 min-w-10 items-center justify-center rounded-full bg-[var(--color-danger-soft)] px-3 text-xs font-semibold text-[var(--color-danger)]">
            A
          </div>
          <Button className="min-h-10 px-4 py-2" variant="primary">
            + Nueva Cita
          </Button>
          <Button
            className="min-h-10 px-4 py-2"
            onClick={handleSignOut}
            variant="ghost"
          >
            Salir
          </Button>
        </div>
      </div>
    </header>
  )
}
