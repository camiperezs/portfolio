import type { ReactNode } from 'react'
import './FondoRadial.css'

export default function FondoRadial({ children }: { children: ReactNode }) {
  return (
    <div className="fondo-radial">
      <span className="fondo-radial-trama" aria-hidden="true"></span>
      <span className="fondo-radial-trama segunda" aria-hidden="true"></span>
      {children}
    </div>
  )
}
