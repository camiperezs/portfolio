export type IdEntrada = 'actual' | 'waia' | 'ciberseguridad' | 'fullStack'
export type IdColumna = 'experiencia' | 'formacion'

export type TextoEntrada = {
  fecha: string
  titulo: string
  lugar: string
}

export const retrato = {
  imagen: '/img/retrato.webp',
  ciudad: 'Rosario, Argentina',
}

export const columnasTrayectoria: { id: IdColumna; icono: string; entradas: IdEntrada[] }[] = [
  { id: 'experiencia', icono: '/sprites/mascara-maletin.png', entradas: ['actual', 'waia'] },
  { id: 'formacion', icono: '/sprites/mascara-birrete.png', entradas: ['ciberseguridad', 'fullStack'] },
]
