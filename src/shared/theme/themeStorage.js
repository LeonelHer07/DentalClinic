const THEME_KEY = 'dental-clinic.theme'

export const themeStorage = {
  getTheme() {
    const savedTheme = window.localStorage.getItem(THEME_KEY)

    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme
    }

    return 'light'
  },
  setTheme(theme) {
    window.localStorage.setItem(THEME_KEY, theme)
  },
}
