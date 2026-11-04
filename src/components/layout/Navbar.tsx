import { useId, useState } from 'react'
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
  faroles: { encendido: string; apagado: string }
}

export default function Navbar({ marca, etiqueta, textoMenu, secciones, faroles }: Props) {
  const idOpciones = useId()
  const [abierto, setAbierto] = useState(false)

  return (
    <header className="menu-juego">
      <div
        className={abierto ? 'menu-juego-ventana abierto' : 'menu-juego-ventana'}
        onKeyDown={(evento) => {
          if (evento.key === 'Escape') setAbierto(false)
        }}
      >
        <Link className="menu-juego-marca" to="/">{marca}</Link>
        <button
          type="button"
          className="menu-juego-abrir"
          aria-expanded={abierto}
          aria-controls={idOpciones}
          onClick={() => setAbierto(!abierto)}
        >
          {textoMenu}
        </button>
        <nav className="menu-juego-opciones" id={idOpciones} aria-label={etiqueta}>
          {secciones.map(({ ruta, texto }) => (
            <NavLink key={ruta} to={ruta} className="menu-opcion" onClick={() => setAbierto(false)}>
              <span className="menu-farol" aria-hidden="true">
                <img className="menu-farol-apagado" src={faroles.apagado} alt="" width={24} height={24} />
                <img className="menu-farol-encendido" src={faroles.encendido} alt="" width={24} height={24} />
              </span>
              {texto}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  )
}
