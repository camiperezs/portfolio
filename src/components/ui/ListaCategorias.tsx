import type { KeyboardEvent } from 'react'
import FilaMenu from './FilaMenu'
import './ListaCategorias.css'

type Categoria = {
  id: string
  texto: string
  icono: string
}

type Props = {
  etiqueta: string
  idBase: string
  categorias: Categoria[]
  actual: string
  onCambiar: (id: string) => void
}

export default function ListaCategorias({ etiqueta, idBase, categorias, actual, onCambiar }: Props) {
  const moverCon = (evento: KeyboardEvent<HTMLButtonElement>, indice: number) => {
    const ultimo = categorias.length - 1
    const siguiente = indice === ultimo ? 0 : indice + 1
    const anterior = indice === 0 ? ultimo : indice - 1
    const destinos: Record<string, number> = {
      ArrowDown: siguiente,
      ArrowRight: siguiente,
      ArrowUp: anterior,
      ArrowLeft: anterior,
      Home: 0,
      End: ultimo,
    }
    const destino = destinos[evento.key]
    if (destino === undefined) return

    evento.preventDefault()
    onCambiar(categorias[destino].id)
    const hermanas = evento.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    hermanas?.[destino].focus()
  }

  return (
    <div className="categorias" role="tablist" aria-label={etiqueta} aria-orientation="vertical">
      {categorias.map(({ id, texto, icono }, indice) => (
        <FilaMenu
          key={id}
          type="button"
          role="tab"
          id={`${idBase}-pestana-${id}`}
          icono={icono}
          texto={texto}
          activa={id === actual}
          aria-selected={id === actual}
          aria-controls={`${idBase}-panel`}
          tabIndex={id === actual ? 0 : -1}
          onClick={() => onCambiar(id)}
          onKeyDown={(evento: KeyboardEvent<HTMLButtonElement>) => moverCon(evento, indice)}
        />
      ))}
    </div>
  )
}
