import { useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import IconoPixel from './IconoPixel'
import './SelectorTema.css'

type Opcion<T extends string> = {
  id: T
  texto: string
  icono: string
}

type Props<T extends string> = {
  etiqueta: string
  cursor: string
  opciones: Opcion<T>[]
  actual: T
  onCambiar: (id: T) => void
}

export default function SelectorTema<T extends string>({ etiqueta, cursor, opciones, actual, onCambiar }: Props<T>) {
  const idMenu = useId()
  const caja = useRef<HTMLDivElement>(null)
  const boton = useRef<HTMLButtonElement>(null)
  const items = useRef<(HTMLButtonElement | null)[]>([])
  const [abierto, setAbierto] = useState(false)
  const indiceActual = Math.max(
    0,
    opciones.findIndex((opcion) => opcion.id === actual),
  )
  const elegida = opciones[indiceActual]

  useEffect(() => {
    if (!abierto) return
    items.current[indiceActual]?.focus()
    const cerrarAfuera = (evento: PointerEvent) => {
      if (!caja.current?.contains(evento.target as Node)) setAbierto(false)
    }
    document.addEventListener('pointerdown', cerrarAfuera)
    return () => document.removeEventListener('pointerdown', cerrarAfuera)
  }, [abierto, indiceActual])

  const cerrar = () => {
    setAbierto(false)
    boton.current?.focus()
  }

  const elegir = (id: T) => {
    onCambiar(id)
    cerrar()
  }

  const moverCon = (evento: KeyboardEvent<HTMLButtonElement>, indice: number) => {
    const ultimo = opciones.length - 1
    const destinos: Record<string, number> = {
      ArrowDown: indice === ultimo ? 0 : indice + 1,
      ArrowUp: indice === 0 ? ultimo : indice - 1,
      Home: 0,
      End: ultimo,
    }
    if (evento.key === 'Escape') {
      evento.preventDefault()
      cerrar()
      return
    }
    if (evento.key === 'Tab') {
      setAbierto(false)
      return
    }
    const destino = destinos[evento.key]
    if (destino === undefined) return
    evento.preventDefault()
    items.current[destino]?.focus()
  }

  return (
    <div ref={caja} className="selector-tema">
      <button
        ref={boton}
        type="button"
        className="selector-tema-boton"
        aria-haspopup="menu"
        aria-expanded={abierto}
        aria-controls={abierto ? idMenu : undefined}
        aria-label={`${etiqueta}: ${elegida.texto}`}
        onClick={() => setAbierto(!abierto)}
        onKeyDown={(evento) => {
          if (evento.key !== 'ArrowDown' || abierto) return
          evento.preventDefault()
          setAbierto(true)
        }}
      >
        <IconoPixel imagen={elegida.icono} />
        <span className="selector-tema-flecha" aria-hidden="true"></span>
      </button>
      {abierto && (
        <div className="selector-tema-menu" id={idMenu} role="menu" aria-label={etiqueta}>
          {opciones.map(({ id, texto, icono }, indice) => (
            <button
              key={id}
              ref={(item) => {
                items.current[indice] = item
              }}
              type="button"
              role="menuitemradio"
              aria-checked={id === actual}
              tabIndex={id === actual ? 0 : -1}
              className="selector-tema-opcion"
              onClick={() => elegir(id)}
              onKeyDown={(evento) => moverCon(evento, indice)}
              onMouseEnter={(evento) => evento.currentTarget.focus()}
            >
              <span className="selector-tema-cursor" aria-hidden="true">
                <IconoPixel imagen={cursor} tamano={10} />
              </span>
              <span className="selector-tema-baldosa" aria-hidden="true">
                <IconoPixel imagen={icono} />
              </span>
              {texto}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
