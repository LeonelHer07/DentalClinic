import { NavLink } from 'react-router-dom'

import { routePaths } from '../../app/router/routePaths'
import { BRAND_ASSETS, UI_ASSETS } from '../constants/assets'

const navigation = [
  { label: 'Dashboard', path: routePaths.dashboard, icon: UI_ASSETS.dashboardIcon },
  { label: 'Pacientes', path: routePaths.patients, icon: UI_ASSETS.userIcon },
  { label: 'Citas', path: routePaths.appointments, icon: UI_ASSETS.calendarIcon },
  { label: 'Tratamientos', path: routePaths.treatments, icon: UI_ASSETS.treatmentsIcon },
  { label: 'Presupuestos', path: routePaths.estimates, icon: UI_ASSETS.estimatesIcon },
  { label: 'Pagos', path: routePaths.payments, icon: UI_ASSETS.paymentsIcon },
  { label: 'Reportes', path: routePaths.reports, icon: UI_ASSETS.reportsIcon },
  { label: 'Configuracion', path: routePaths.settings, icon: UI_ASSETS.settingsIcon },
]

export function AppSidebar() {
  return (
    <aside className="flex min-h-screen flex-col bg-[var(--color-sidebar-bg)] px-3 py-4 text-[var(--color-sidebar-text)] lg:px-4">
      <div className="flex items-center gap-2 rounded-[1.2rem] px-2 py-2">
        <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-xl">
          <img
            alt="Logo DentalClinic"
            className="h-full w-full object-contain"
            onError={(event) => {
              event.currentTarget.style.display = 'none'
              event.currentTarget.nextElementSibling?.classList.remove('hidden')
            }}
            src={BRAND_ASSETS.mark}
          />
          <span className="hidden text-[10px] font-semibold tracking-[0.3em]">
            DC
          </span>
        </div>
        <div>
          <p className="text-base font-semibold tracking-[-0.03em]">DentalCare</p>
        </div>
      </div>

      <nav className="mt-6 flex-1 space-y-1.5">
        {navigation.map((item) => (
          <NavLink
            key={item.path}
            className={({ isActive }) =>
              [
                'flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition',
                isActive
                  ? 'bg-[var(--color-sidebar-active-bg)] text-[var(--color-sidebar-active-text)] shadow-sm'
                  : 'text-[var(--color-sidebar-text-muted)] hover:bg-[var(--color-sidebar-hover-bg)] hover:text-[var(--color-sidebar-text)]',
              ].join(' ')
            }
            to={item.path}
          >
            <span className="inline-flex h-5 w-5 items-center justify-center rounded-md">
              <img
                alt=""
                className="h-4 w-4 object-contain opacity-90"
                src={item.icon}
              />
            </span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      <div className="mt-4 rounded-2xl border border-[var(--color-sidebar-border)] bg-[var(--color-sidebar-footer-bg)] p-3">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--color-danger-soft)] text-xs font-semibold text-[var(--color-danger)]">
            A
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold">Administrador</p>
            <p className="truncate text-[11px] text-[var(--color-sidebar-text-muted)]">
              admin
            </p>
          </div>
        </div>
      </div>
    </aside>
  )
}
