import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

type Seccion = {
  ruta: string
  texto: string
}

type Props = {
  marca: string
  secciones: Seccion[]
  acciones?: ReactNode
}

export default function Navbar({ marca, secciones, acciones }: Props) {
  return (
    <header className="barra">
      <Link className="barra-marca" to="/">{marca}</Link>
      <nav className="pestanas" aria-label="Secciones">
        {secciones.map(({ ruta, texto }) => (
          <NavLink key={ruta} to={ruta} className={({ isActive }) => (isActive ? 'pestana activa' : 'pestana')}>
            {texto}
          </NavLink>
        ))}
      </nav>
      {acciones}
    </header>
  )
}
