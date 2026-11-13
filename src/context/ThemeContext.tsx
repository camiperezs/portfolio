import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'

export const themePreferences = ['system', 'light', 'dark'] as const
export type ThemePreference = (typeof themePreferences)[number]
export type Theme = Exclude<ThemePreference, 'system'>

type ThemeValue = {
  theme: Theme
  preference: ThemePreference
  changePreference: (preference: ThemePreference) => void
}

const themeKey = 'theme'
const darkQuery = '(prefers-color-scheme: dark)'

function readPreference(): ThemePreference {
  try {
    const stored = localStorage.getItem(themeKey)
    return themePreferences.find((preference) => preference === stored) ?? 'system'
  } catch {
    return 'system'
  }
}

function storePreference(preference: ThemePreference) {
  try {
    localStorage.setItem(themeKey, preference)
  } catch {
    return
  }
}

function subscribeToSystem(notify: () => void) {
  const query = window.matchMedia(darkQuery)
  query.addEventListener('change', notify)
  return () => query.removeEventListener('change', notify)
}

function systemIsDark() {
  return window.matchMedia(darkQuery).matches
}

const ThemeContext = createContext<ThemeValue | null>(null)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreference] = useState<ThemePreference>(readPreference)
  const dark = useSyncExternalStore(subscribeToSystem, systemIsDark)
  const theme: Theme = preference === 'system' ? (dark ? 'dark' : 'light') : preference

  useEffect(() => {
    document.documentElement.dataset.theme = theme
  }, [theme])

  useEffect(() => {
    const sync = (event: StorageEvent) => {
      if (event.key === themeKey || event.key === null) setPreference(readPreference())
    }
    window.addEventListener('storage', sync)
    return () => window.removeEventListener('storage', sync)
  }, [])

  const value = useMemo(
    () => ({
      theme,
      preference,
      changePreference: (next: ThemePreference) => {
        storePreference(next)
        setPreference(next)
      },
    }),
    [theme, preference],
  )

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const value = useContext(ThemeContext)
  if (!value) throw new Error('useTheme must be used within ThemeProvider')
  return value
}
