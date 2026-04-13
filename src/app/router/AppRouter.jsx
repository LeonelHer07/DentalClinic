import { Navigate, Route, Routes } from 'react-router-dom'

import { AuthLayout } from '../layouts/AuthLayout'
import { DashboardLayout } from '../layouts/DashboardLayout'
import { AppointmentsPage } from '../../features/appointments/pages/AppointmentsPage'
import { LoginPage } from '../../features/auth/pages/LoginPage'
import { DashboardPage } from '../../features/dashboard/pages/DashboardPage'
import { EstimatesPage } from '../../features/estimates/pages/EstimatesPage'
import { PaymentsPage } from '../../features/payments/pages/PaymentsPage'
import { PatientsPage } from '../../features/patients/pages/PatientsPage'
import { ReportsPage } from '../../features/reports/pages/ReportsPage'
import { SettingsPage } from '../../features/settings/pages/SettingsPage'
import { TreatmentsPage } from '../../features/treatments/pages/TreatmentsPage'
import { ProtectedRoute } from './guards/ProtectedRoute'
import { PublicRoute } from './guards/PublicRoute'
import { routePaths } from './routePaths'

export function AppRouter() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route element={<AuthLayout />}>
          <Route path={routePaths.login} element={<LoginPage />} />
        </Route>
      </Route>

      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>
          <Route path={routePaths.dashboard} element={<DashboardPage />} />
          <Route path={routePaths.patients} element={<PatientsPage />} />
          <Route
            path={routePaths.appointments}
            element={<AppointmentsPage />}
          />
          <Route path={routePaths.treatments} element={<TreatmentsPage />} />
          <Route path={routePaths.estimates} element={<EstimatesPage />} />
          <Route path={routePaths.payments} element={<PaymentsPage />} />
          <Route path={routePaths.reports} element={<ReportsPage />} />
          <Route path={routePaths.settings} element={<SettingsPage />} />
        </Route>
      </Route>

      <Route path="/" element={<Navigate replace to={routePaths.login} />} />
      <Route path="*" element={<Navigate replace to={routePaths.login} />} />
    </Routes>
  )
}
