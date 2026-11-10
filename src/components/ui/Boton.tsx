import type { ButtonHTMLAttributes } from 'react'
import IconoPixel from './IconoPixel'
import './Accion.css'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variante?: 'principal' | 'secundaria'
  icono?: string
}

export default function Boton({ variante = 'secundaria', icono, type = 'button', children, ...props }: Props) {
  return (
    <button type={type} className={`accion ${variante}`} {...props}>
      {icono && <IconoPixel imagen={icono} />}
      {children}
    </button>
  )
}
