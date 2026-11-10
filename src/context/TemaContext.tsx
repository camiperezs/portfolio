import { createContext, useContext, useEffect, useMemo, useState, useSyncExternalStore } from 'react'
import type { ReactNode } from 'react'

export const preferenciasTema = ['sistema', 'dia', 'noche'] as const
export type PreferenciaTema = (typeof preferenciasTema)[number]
export type Tema = Exclude<PreferenciaTema, 'sistema'>

type ValorTema = {
  tema: Tema
  preferencia: PreferenciaTema
  cambiarPreferencia: (preferencia: PreferenciaTema) => void
}

const claveTema = 'tema'
const consultaOscuro = '(prefers-color-scheme: dark)'

function leerPreferencia(): PreferenciaTema {
  try {
    const guardada = localStorage.getItem(claveTema)
    return preferenciasTema.find((preferencia) => preferencia === guardada) ?? 'sistema'
  } catch {
    return 'sistema'
  }
}

function guardarPreferencia(preferencia: PreferenciaTema) {
  try {
    localStorage.setItem(claveTema, preferencia)
  } catch {
    return
  }
}

function suscribirSistema(avisar: () => void) {
  const consulta = window.matchMedia(consultaOscuro)
  consulta.addEventListener('change', avisar)
  return () => consulta.removeEventListener('change', avisar)
}

function sistemaOscuro() {
  return window.matchMedia(consultaOscuro).matches
}

const TemaContext = createContext<ValorTema | null>(null)

export function TemaProvider({ children }: { children: ReactNode }) {
  const [preferencia, setPreferencia] = useState<PreferenciaTema>(leerPreferencia)
  const oscuro = useSyncExternalStore(suscribirSistema, sistemaOscuro)
  const tema: Tema = preferencia === 'sistema' ? (oscuro ? 'noche' : 'dia') : preferencia

  useEffect(() => {
    document.documentElement.dataset.tema = tema
  }, [tema])

  useEffect(() => {
    const sincronizar = (evento: StorageEvent) => {
      if (evento.key === claveTema || evento.key === null) setPreferencia(leerPreferencia())
    }
    window.addEventListener('storage', sincronizar)
    return () => window.removeEventListener('storage', sincronizar)
  }, [])

  const valor = useMemo(
    () => ({
      tema,
      preferencia,
      cambiarPreferencia: (nueva: PreferenciaTema) => {
        guardarPreferencia(nueva)
        setPreferencia(nueva)
      },
    }),
    [tema, preferencia],
  )

  return <TemaContext.Provider value={valor}>{children}</TemaContext.Provider>
}

export function useTema() {
  const valor = useContext(TemaContext)
  if (!valor) throw new Error('useTema debe usarse dentro de TemaProvider')
  return valor
}
