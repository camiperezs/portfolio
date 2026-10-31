import { Outlet, useLocation } from 'react-router-dom'
import FondoEscena from '../components/layout/FondoEscena'
import Navbar from '../components/layout/Navbar'
import { useIdioma } from '../context/IdiomaContext'
import { escenaInicio, escenasPorRuta } from '../data/escenas'
import { secciones } from '../data/navegacion'
import { perfil } from '../data/perfil'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const { textos } = useIdioma()
  const { imagen, encuadre } = escenasPorRuta[pathname] ?? escenaInicio
  const seccionesNavbar = secciones.map(({ id, ruta }) => ({ ruta, texto: textos.navegacion[id] }))

  return (
    <FondoEscena imagen={imagen} encuadre={encuadre}>
      <Navbar marca={perfil.marca} etiqueta={textos.navegacion.etiqueta} secciones={seccionesNavbar} />
      <main className="contenido">
        <Outlet />
      </main>
    </FondoEscena>
  )
}
