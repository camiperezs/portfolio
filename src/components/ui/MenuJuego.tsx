import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import IconoPixel from './IconoPixel'
import './MenuJuego.css'

type Opcion = {
  ruta: string
  nombre: string
  descripcion: string
  icono: string
}

type Props = {
  etiqueta: string
  cursor: string
  opciones: Opcion[]
}

export default function MenuJuego({ etiqueta, cursor, opciones }: Props) {
  const menu = useRef<HTMLElement>(null)
  const enlaces = useRef<(HTMLAnchorElement | null)[]>([])
  const porTeclado = useRef(false)
  const [activa, setActiva] = useState(0)
  const [cursorY, setCursorY] = useState(0)
  const [suave, setSuave] = useState(false)

  const ubicar = useCallback(() => {
    const enlace = enlaces.current[activa]
    const contenedor = menu.current
    if (!enlace || !contenedor) return
    const caja = enlace.getBoundingClientRect()
    const base = contenedor.getBoundingClientRect()
    setCursorY(caja.top - base.top + caja.height / 2)
  }, [activa])

  useLayoutEffect(() => {
    ubicar()
    const observador = new ResizeObserver(ubicar)
    if (menu.current) observador.observe(menu.current)
    return () => observador.disconnect()
  }, [ubicar])

  const elegir = (indice: number) => {
    setSuave(!porTeclado.current)
    porTeclado.current = false
    setActiva(indice)
  }

  const moverCon = (evento: KeyboardEvent<HTMLAnchorElement>, indice: number) => {
    const ultimo = opciones.length - 1
    const destinos: Record<string, number> = {
      ArrowDown: indice === ultimo ? 0 : indice + 1,
      ArrowUp: indice === 0 ? ultimo : indice - 1,
      Home: 0,
      End: ultimo,
    }
    const destino = destinos[evento.key]
    if (destino === undefined) return
    evento.preventDefault()
    porTeclado.current = true
    enlaces.current[destino]?.focus()
  }

  return (
    <nav className="menu-seleccion" aria-label={etiqueta} ref={menu}>
      <span
        className={suave ? 'menu-seleccion-cursor suave' : 'menu-seleccion-cursor'}
        style={{ transform: `translateY(${cursorY}px)` }}
        aria-hidden="true"
      >
        <IconoPixel imagen={cursor} tamano={10} />
      </span>
      <ul>
        {opciones.map(({ ruta, nombre, descripcion, icono }, indice) => (
          <li key={ruta}>
            <Link
              ref={(enlace) => {
                enlaces.current[indice] = enlace
              }}
              to={ruta}
              className={indice === activa ? 'menu-seleccion-opcion activa' : 'menu-seleccion-opcion'}
              onMouseEnter={() => elegir(indice)}
              onFocus={() => elegir(indice)}
              onKeyDown={(evento) => moverCon(evento, indice)}
            >
              <span className="menu-seleccion-baldosa">
                <IconoPixel imagen={icono} />
              </span>
              <span className="menu-seleccion-texto">
                <span className="menu-seleccion-nombre">{nombre}</span>
                <span className="menu-seleccion-descripcion">{descripcion}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
