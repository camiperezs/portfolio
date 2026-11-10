import type { CSSProperties } from 'react'
import './IconoPixel.css'

type Props = {
  imagen: string
  tamano?: number
}

export default function IconoPixel({ imagen, tamano = 24 }: Props) {
  const estilo = { '--icono': `url(${imagen})`, '--tamano': `${tamano}px` } as CSSProperties
  return <span className="icono-pixel" style={estilo} aria-hidden="true" />
}
