import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import FondoEscena from '../components/layout/FondoEscena'
import Navbar from '../components/layout/Navbar'
import { useIdioma } from '../context/IdiomaContext'
import { useTema } from '../context/TemaContext'
import { ambienteInicio, ambientesPorRuta } from '../data/ambientes'
import { faroles, secciones } from '../data/navegacion'
import { perfil } from '../data/perfil'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const { textos } = useIdioma()
  const { tema } = useTema()
  const ruta = Object.keys(ambientesPorRuta).find((clave) => pathname === clave || pathname.startsWith(`${clave}/`))
  const { imagenes, encuadre, lado, velo } = ruta ? ambientesPorRuta[ruta] : ambienteInicio

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  const seccionesNavbar = secciones.map(({ id, ruta }) => ({ ruta, texto: textos.navegacion[id] }))
  const clases = ['contenido', `contenido-${lado}`, velo && 'contenido-velo'].filter(Boolean).join(' ')

  return (
    <FondoEscena imagen={imagenes[tema]} encuadre={encuadre}>
      <Navbar
        marca={perfil.marca}
        etiqueta={textos.navegacion.etiqueta}
        textoMenu={textos.navegacion.menu}
        secciones={seccionesNavbar}
        faroles={faroles}
      />
      <main className={clases}>
        <Outlet />
      </main>
    </FondoEscena>
  )
}
