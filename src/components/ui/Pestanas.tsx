import type { KeyboardEvent } from 'react'
import './Pestanas.css'

type Pestana = {
  id: string
  texto: string
}

type Props = {
  etiqueta: string
  idBase: string
  pestanas: Pestana[]
  actual: string
  onCambiar: (id: string) => void
}

export default function Pestanas({ etiqueta, idBase, pestanas, actual, onCambiar }: Props) {
  const moverCon = (evento: KeyboardEvent<HTMLButtonElement>, indice: number) => {
    const ultimo = pestanas.length - 1
    const destinos: Record<string, number> = {
      ArrowRight: indice === ultimo ? 0 : indice + 1,
      ArrowLeft: indice === 0 ? ultimo : indice - 1,
      Home: 0,
      End: ultimo,
    }
    const destino = destinos[evento.key]
    if (destino === undefined) return

    evento.preventDefault()
    onCambiar(pestanas[destino].id)
    const hermanas = evento.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    hermanas?.[destino].focus()
  }

  return (
    <div className="pestanas-seccion" role="tablist" aria-label={etiqueta}>
      {pestanas.map(({ id, texto }, indice) => (
        <button
          key={id}
          type="button"
          role="tab"
          id={`${idBase}-pestana-${id}`}
          className="pestana-seccion"
          aria-selected={id === actual}
          aria-controls={`${idBase}-panel`}
          tabIndex={id === actual ? 0 : -1}
          onClick={() => onCambiar(id)}
          onKeyDown={(evento) => moverCon(evento, indice)}
        >
          {texto}
        </button>
      ))}
    </div>
  )
}
