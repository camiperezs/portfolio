import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

type Seccion = {
  ruta: string
  texto: string
}

type Props = {
  marca: string
  etiqueta: string
  secciones: Seccion[]
}

export default function Navbar({ marca, etiqueta, secciones }: Props) {
  return (
    <header className="barra">
      <Link className="barra-marca" to="/">{marca}</Link>
      <nav className="pestanas" aria-label={etiqueta}>
        {secciones.map(({ ruta, texto }) => (
          <NavLink key={ruta} to={ruta} className={({ isActive }) => (isActive ? 'pestana activa' : 'pestana')}>
            {texto}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
