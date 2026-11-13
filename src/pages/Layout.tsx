import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import FondoRadial from '../components/layout/FondoRadial'
import Navbar from '../components/layout/Navbar'
import { useIdioma } from '../context/IdiomaContext'
import { secciones } from '../data/navegacion'
import { perfil } from '../data/perfil'
import ControlesSitio from './ControlesSitio'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const { textos } = useIdioma()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const seccionesNavbar = secciones.map(({ id, ruta }) => ({ ruta, texto: textos.navegacion[id] }))

  return (
    <FondoRadial>
      <Navbar
        marca={perfil.marca}
        etiqueta={textos.navegacion.etiqueta}
        textoMenu={textos.navegacion.menu}
        secciones={seccionesNavbar}
        controles={<ControlesSitio />}
      />
      <main className="contenido">
        <Outlet />
      </main>
    </FondoRadial>
  )
}
