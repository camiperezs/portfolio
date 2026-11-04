import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

export const temas = ['dia', 'noche'] as const
export type Tema = (typeof temas)[number]

type ValorTema = {
  tema: Tema
  cambiarTema: (tema: Tema) => void
}

const claveTema = 'tema'

function leerTemaGuardado() {
  try {
    return localStorage.getItem(claveTema)
  } catch {
    return null
  }
}

function guardarTema(tema: Tema) {
  try {
    localStorage.setItem(claveTema, tema)
  } catch {
    return
  }
}

function temaInicial(): Tema {
  const guardado = temas.find((tema) => tema === leerTemaGuardado())
  if (guardado) return guardado
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'noche' : 'dia'
}

const TemaContext = createContext<ValorTema | null>(null)

export function TemaProvider({ children }: { children: ReactNode }) {
  const [tema, setTema] = useState<Tema>(temaInicial)

  useEffect(() => {
    document.documentElement.dataset.tema = tema
  }, [tema])

  const valor = useMemo(
    () => ({
      tema,
      cambiarTema: (nuevo: Tema) => {
        guardarTema(nuevo)
        setTema(nuevo)
      },
    }),
    [tema],
  )

  return <TemaContext.Provider value={valor}>{children}</TemaContext.Provider>
}

export function useTema() {
  const valor = useContext(TemaContext)
  if (!valor) throw new Error('useTema debe usarse dentro de TemaProvider')
  return valor
}
