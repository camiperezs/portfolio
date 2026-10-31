import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { en } from '../data/idiomas/en'
import { es } from '../data/idiomas/es'
import type { Textos } from '../data/idiomas/es'

export const idiomas = ['es', 'en'] as const
export type Idioma = (typeof idiomas)[number]

type ValorIdioma = {
  idioma: Idioma
  textos: Textos
  cambiarIdioma: (idioma: Idioma) => void
}

const claveIdioma = 'idioma'
const textosPorIdioma: Record<Idioma, Textos> = { es, en }

function leerIdiomaGuardado() {
  try {
    return localStorage.getItem(claveIdioma)
  } catch {
    return null
  }
}

function guardarIdioma(idioma: Idioma) {
  try {
    localStorage.setItem(claveIdioma, idioma)
  } catch {
    return
  }
}

function idiomaInicial(): Idioma {
  const guardado = idiomas.find((idioma) => idioma === leerIdiomaGuardado())
  if (guardado) return guardado
  return navigator.language.toLowerCase().startsWith('es') ? 'es' : 'en'
}

const IdiomaContext = createContext<ValorIdioma | null>(null)

export function IdiomaProvider({ children }: { children: ReactNode }) {
  const [idioma, setIdioma] = useState<Idioma>(idiomaInicial)

  useEffect(() => {
    document.documentElement.lang = idioma
  }, [idioma])

  const valor = useMemo(
    () => ({
      idioma,
      textos: textosPorIdioma[idioma],
      cambiarIdioma: (nuevo: Idioma) => {
        guardarIdioma(nuevo)
        setIdioma(nuevo)
      },
    }),
    [idioma],
  )

  return <IdiomaContext.Provider value={valor}>{children}</IdiomaContext.Provider>
}

export function useIdioma() {
  const valor = useContext(IdiomaContext)
  if (!valor) throw new Error('useIdioma debe usarse dentro de IdiomaProvider')
  return valor
}
