import type { ReactNode } from 'react'
import './Pergamino.css'

export default function Pergamino({ children }: { children: ReactNode }) {
  return (
    <main className="pergamino">
      <div className="pergamino-papel">{children}</div>
      <img className="pergamino-hojas" src="/sprites/hoja-esquina.png" alt="" />
    </main>
  )
}
