export type IdParada = 'inicios' | 'fullStack' | 'desarrolloWeb' | 'waia' | 'ciberseguridad' | 'actual'
export type TipoParada = 'experiencia' | 'formacion'

export type TextoParada = {
  etiqueta: string
  nombre: string
  titulo: string
  lugar: string
  parrafos: string[]
  logros?: string[]
  enlaces?: { texto: string; url: string }[]
}

type UbicacionParada = {
  id: IdParada
  tipo: TipoParada
  x: number
  y: number
}

export const retrato = {
  imagen: '/sprites/me.png',
  ciudad: 'Rosario, Argentina',
}

export const pestanasSobreMi = ['perfil', 'recorrido'] as const

export const mapaRecorrido = '/sprites/mapa-recorrido.png'

export const iconosParada: Record<TipoParada, string> = {
  experiencia: '/sprites/parada-experiencia.png',
  formacion: '/sprites/parada-formacion.png',
}

export const iconosParadaApagada: Record<TipoParada, string> = {
  experiencia: '/sprites/parada-experiencia.png',
  formacion: '/sprites/parada-formacion-apagada.png',
}

export const certificados = {
  fullStack: '/certificados/egg-full-stack-2023.pdf',
  introduccionCiberseguridad: '/certificados/educacionit-introduccion-ciberseguridad-2025.pdf',
}

export const paradasRecorrido: UbicacionParada[] = [
  { id: 'inicios', tipo: 'formacion', x: 11.29, y: 66 },
  { id: 'fullStack', tipo: 'formacion', x: 26.61, y: 30 },
  { id: 'desarrolloWeb', tipo: 'formacion', x: 43.15, y: 66 },
  { id: 'waia', tipo: 'experiencia', x: 58.87, y: 28 },
  { id: 'ciberseguridad', tipo: 'formacion', x: 75, y: 66 },
  { id: 'actual', tipo: 'experiencia', x: 90.73, y: 30 },
]

export const paradaInicial: IdParada = 'actual'
