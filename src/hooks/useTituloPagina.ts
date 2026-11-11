import { useEffect } from 'react'
import { perfil } from '../data/perfil'

export function useTituloPagina(seccion?: string) {
  useEffect(() => {
    document.title = seccion ? `${seccion} · ${perfil.marca}` : `${perfil.marca} · ${perfil.nombre}`
  }, [seccion])
}
