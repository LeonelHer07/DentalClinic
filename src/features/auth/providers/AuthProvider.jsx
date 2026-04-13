import { useState } from 'react'

import { AuthContext } from '../context/AuthContext'
import { authStorage } from '../services/authStorage'

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    authStorage.getSession(),
  )

  const signIn = () => {
    authStorage.setSession(true)
    setIsAuthenticated(true)
  }

  const signOut = () => {
    authStorage.clearSession()
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
