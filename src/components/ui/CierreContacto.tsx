import { useId } from 'react'
import type { ReactNode } from 'react'
import './CierreContacto.css'

type Props = {
  titulo: string
  texto: string
  children: ReactNode
}

export default function CierreContacto({ titulo, texto, children }: Props) {
  const idTitulo = useId()

  return (
    <section className="cierre" aria-labelledby={idTitulo}>
      <div className="cierre-texto">
        <h2 id={idTitulo}>{titulo}</h2>
        <p>{texto}</p>
      </div>
      <div className="cierre-acciones">{children}</div>
    </section>
  )
}
