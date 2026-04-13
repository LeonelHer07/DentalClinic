import { BrowserRouter } from 'react-router-dom'

import { AuthProvider } from '../../features/auth/providers/AuthProvider'
import { ThemeProvider } from '../../shared/theme/ThemeProvider'

export function AppProviders({ children }) {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <AuthProvider>{children}</AuthProvider>
      </ThemeProvider>
    </BrowserRouter>
  )
}
