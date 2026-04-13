import { useEffect, useState } from 'react'

import { ThemeContext } from './ThemeContext'
import { themeStorage } from './themeStorage'

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => themeStorage.getTheme())

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    themeStorage.setTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
