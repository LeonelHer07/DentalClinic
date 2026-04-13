import { Navigate, Outlet } from 'react-router-dom'

import { routePaths } from '../routePaths'
import { useAuth } from '../../../features/auth/hooks/useAuth'

export function PublicRoute() {
  const { isAuthenticated } = useAuth()

  if (isAuthenticated) {
    return <Navigate replace to={routePaths.dashboard} />
  }

  return <Outlet />
}
