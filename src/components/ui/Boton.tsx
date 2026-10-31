import type { ButtonHTMLAttributes } from 'react'
import './Boton.css'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variante?: 'principal' | 'oro' | 'papel'
}

export default function Boton({ variante = 'principal', className = '', type = 'button', ...props }: Props) {
  return <button type={type} className={`boton ${variante} ${className}`.trim()} {...props} />
}
