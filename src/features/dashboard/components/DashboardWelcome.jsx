export function DashboardWelcome() {
  return (
    <header className="rounded-[var(--radius-card)] border border-[var(--color-border-soft)] bg-[var(--color-panel)] px-5 py-4 shadow-[var(--shadow-soft)]">
      <h1 className="text-lg font-semibold text-[var(--color-text-primary)]">
        Bienvenido, Administrador
      </h1>
      <p className="mt-1 text-xs text-[var(--color-text-muted)]">
        Jueves, 12 de febrero de 2026
      </p>
    </header>
  )
}
