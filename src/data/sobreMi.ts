export type IdParada = 'inicios' | 'fullStack' | 'desarrolloWeb' | 'waia' | 'ciberseguridad' | 'actual'
export type TipoParada = 'experiencia' | 'formacion'

export type TextoParada = {
  fecha: string
  titulo: string
  lugar: string
  parrafos: string[]
  logros?: string[]
  enlaces?: { texto: string; url: string }[]
}

export const retrato = {
  imagen: '/sprites/me.png',
  ciudad: 'Rosario, Argentina',
}

export const pestanasSobreMi = ['perfil', 'recorrido'] as const
export type PestanaSobreMi = (typeof pestanasSobreMi)[number]

export const certificados = {
  fullStack: '/certificados/egg-full-stack-2023.pdf',
  introduccionCiberseguridad: '/certificados/educacionit-introduccion-ciberseguridad-2025.pdf',
}

export const paradasRecorrido: { id: IdParada; tipo: TipoParada }[] = [
  { id: 'actual', tipo: 'experiencia' },
  { id: 'ciberseguridad', tipo: 'formacion' },
  { id: 'waia', tipo: 'experiencia' },
  { id: 'desarrolloWeb', tipo: 'formacion' },
  { id: 'fullStack', tipo: 'formacion' },
  { id: 'inicios', tipo: 'formacion' },
]
