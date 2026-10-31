import { Outlet, useLocation } from 'react-router-dom'
import FondoEscena from '../components/layout/FondoEscena'
import Navbar from '../components/layout/Navbar'
import SelectorOpciones from '../components/ui/SelectorOpciones'
import { idiomas, useIdioma } from '../context/IdiomaContext'
import { escenaInicio, escenasPorRuta } from '../data/escenas'
import { secciones } from '../data/navegacion'
import { perfil } from '../data/perfil'
import './Layout.css'

export default function Layout() {
  const { idioma, cambiarIdioma } = useIdioma()
  const { pathname } = useLocation()
  const { imagen, encuadre } = escenasPorRuta[pathname] ?? escenaInicio

  return (
    <FondoEscena imagen={imagen} encuadre={encuadre}>
      <Navbar
        marca={perfil.marca}
        secciones={secciones}
        acciones={<SelectorOpciones etiqueta="Idioma" opciones={idiomas} actual={idioma} onCambiar={cambiarIdioma} />}
      />
      <main className="contenido">
        <Outlet />
      </main>
    </FondoEscena>
  )
}
