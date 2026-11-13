import type { ButtonHTMLAttributes } from 'react'
import PixelIcon from './PixelIcon'
import './Action.css'

type Props = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & {
  variant?: 'primary' | 'secondary'
  icon?: string
}

export default function Button({ variant = 'secondary', icon, type = 'button', children, ...props }: Props) {
  return (
    <button type={type} className={`action ${variant}`} {...props}>
      {icon && <PixelIcon image={icon} />}
      {children}
    </button>
  )
}
