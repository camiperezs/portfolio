import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { en } from '../data/languages/en'
import { es } from '../data/languages/es'
import type { Texts } from '../data/languages/es'

export const languages = ['es', 'en'] as const
export type Language = (typeof languages)[number]

type LanguageValue = {
  language: Language
  texts: Texts
  changeLanguage: (language: Language) => void
}

const languageKey = 'language'
const textsByLanguage: Record<Language, Texts> = { es, en }

function readStoredLanguage() {
  try {
    return localStorage.getItem(languageKey)
  } catch {
    return null
  }
}

function storeLanguage(language: Language) {
  try {
    localStorage.setItem(languageKey, language)
  } catch {
    return
  }
}

function initialLanguage(): Language {
  const stored = languages.find((language) => language === readStoredLanguage())
  if (stored) return stored
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const LanguageContext = createContext<LanguageValue | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(initialLanguage)

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const value = useMemo(
    () => ({
      language,
      texts: textsByLanguage[language],
      changeLanguage: (next: Language) => {
        storeLanguage(next)
        setLanguage(next)
      },
    }),
    [language],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const value = useContext(LanguageContext)
  if (!value) throw new Error('useLanguage must be used within LanguageProvider')
  return value
}
