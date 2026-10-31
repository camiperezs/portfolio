import type { ReactNode } from 'react'
import './FondoEscena.css'

type Props = {
  imagen: string
  encuadre: string
  centrado?: boolean
  children: ReactNode
}

export default function FondoEscena({ imagen, encuadre, centrado = false, children }: Props) {
  return (
    <div className={centrado ? 'fondo-escena centrado' : 'fondo-escena'}>
      <img className="fondo-escena-imagen" src={imagen} alt="" fetchPriority="high" style={{ objectPosition: encuadre }} />
      {children}
    </div>
  )
}
