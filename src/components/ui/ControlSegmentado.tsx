import { useLayoutEffect, useRef, useState } from 'react'
import IconoPixel from './IconoPixel'
import './ControlSegmentado.css'

type Opcion<T extends string> = {
  id: T
  texto?: string
  icono?: string
  etiqueta?: string
}

type Props<T extends string> = {
  etiqueta: string
  opciones: Opcion<T>[]
  actual: T
  onCambiar: (id: T) => void
}

export default function ControlSegmentado<T extends string>({ etiqueta, opciones, actual, onCambiar }: Props<T>) {
  const botones = useRef<Partial<Record<string, HTMLButtonElement | null>>>({})
  const [pastilla, setPastilla] = useState({ x: 0, ancho: 0 })

  useLayoutEffect(() => {
    const boton = botones.current[actual]
    if (!boton) return
    const medir = () => setPastilla({ x: boton.offsetLeft, ancho: boton.offsetWidth })
    medir()
    const observador = new ResizeObserver(medir)
    observador.observe(boton)
    return () => observador.disconnect()
  }, [actual, opciones])

  return (
    <div className="control-segmentado" role="group" aria-label={etiqueta}>
      <span
        className="control-segmentado-pastilla"
        style={{ width: pastilla.ancho, transform: `translateX(${pastilla.x}px)` }}
        aria-hidden="true"
      ></span>
      {opciones.map(({ id, texto, icono, etiqueta: nombre }) => (
        <button
          key={id}
          type="button"
          ref={(boton) => {
            botones.current[id] = boton
          }}
          aria-pressed={id === actual}
          aria-label={nombre}
          onClick={() => onCambiar(id)}
        >
          {icono ? <IconoPixel imagen={icono} /> : texto}
        </button>
      ))}
    </div>
  )
}
