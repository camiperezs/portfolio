import { useState } from 'react'
import { secciones } from '../data/contenido'

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false)

  return (
    <div className="contenedor-header">
      <header>
        <div className="logo">
          <a href="#">Camila</a>
        </div>
        <nav id="nav" className={menuVisible ? 'responsive' : ''}>
          <ul>
            {secciones.map(({ href, texto }) => (
              <li key={href}>
                <a href={href} onClick={() => setMenuVisible(false)}>{texto}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="nav-responsive" onClick={() => setMenuVisible(!menuVisible)}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </header>
    </div>
  )
}
