import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export const idiomas = ['es', 'en'] as const
export type Idioma = (typeof idiomas)[number]

type ValorIdioma = {
  idioma: Idioma
  cambiarIdioma: (idioma: Idioma) => void
}

const IdiomaContext = createContext<ValorIdioma | null>(null)

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, cambiarIdioma] = useState<Idioma>('es')

  useEffect(() => {
    document.documentElement.lang = idioma
  }, [idioma])

  const valor = useMemo(() => ({ idioma, cambiarIdioma }), [idioma])

  return <IdiomaContext.Provider value={valor}>{children}</IdiomaContext.Provider>
}

export function useIdioma() {
  const valor = useContext(IdiomaContext)
  if (!valor) throw new Error('useIdioma debe usarse dentro de IdiomaProvider')
  return valor
}
