const SESSION_KEY = 'dental-clinic.session'

export const authStorage = {
  getSession() {
    return window.localStorage.getItem(SESSION_KEY) === 'true'
  },
  setSession(value) {
    window.localStorage.setItem(SESSION_KEY, String(value))
  },
  clearSession() {
    window.localStorage.removeItem(SESSION_KEY)
  },
}
