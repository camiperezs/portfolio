import { useEffect, useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

type Seccion = {
  ruta: string
  texto: string
}

type Props = {
  marca: string
  etiqueta: string
  textoMenu: string
  secciones: Seccion[]
  controles: ReactNode
}

export default function Navbar({ marca, etiqueta, textoMenu, secciones, controles }: Props) {
  const idPanel = useId()
  const caja = useRef<HTMLDivElement>(null)
  const boton = useRef<HTMLButtonElement>(null)
  const [abierto, setAbierto] = useState(false)

  useEffect(() => {
    if (!abierto) return
    const cerrarAfuera = (evento: PointerEvent) => {
      if (!caja.current?.contains(evento.target as Node)) setAbierto(false)
    }
    document.addEventListener('pointerdown', cerrarAfuera)
    return () => document.removeEventListener('pointerdown', cerrarAfuera)
  }, [abierto])

  return (
    <header className="barra">
      <div
        ref={caja}
        className={abierto ? 'barra-caja abierta' : 'barra-caja'}
        onKeyDown={(evento) => {
          if (evento.key !== 'Escape' || !abierto) return
          setAbierto(false)
          boton.current?.focus()
        }}
      >
        <Link className="barra-marca" to="/">
          {marca}
        </Link>
        <button
          ref={boton}
          type="button"
          className="barra-abrir"
          aria-expanded={abierto}
          aria-controls={idPanel}
          onClick={() => setAbierto(!abierto)}
        >
          <span className="barra-abrir-icono" aria-hidden="true"></span>
          {textoMenu}
        </button>
        <div className="barra-panel" id={idPanel}>
          <nav aria-label={etiqueta}>
            <ul className="barra-secciones">
              {secciones.map(({ ruta, texto }) => (
                <li key={ruta}>
                  <NavLink to={ruta} className="barra-seccion" onClick={() => setAbierto(false)}>
                    {texto}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="barra-controles">{controles}</div>
        </div>
      </div>
    </header>
  )
}
