import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { routePaths } from '../routePaths'
import { useAuth } from '../../../features/auth/hooks/useAuth'

export function ProtectedRoute() {
  const { isAuthenticated } = useAuth()
  const location = useLocation()

  if (!isAuthenticated) {
    return (
      <Navigate
        replace
        to={routePaths.login}
        state={{ from: location.pathname }}
      />
    )
  }

  return <Outlet />
}
