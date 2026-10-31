import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Kakejiku from '../components/decoracion/Kakejiku'
import FondoEscena from '../components/layout/FondoEscena'
import Divisor from '../components/ui/Divisor'
import EnlacesRedes from '../components/ui/EnlacesRedes'
import FilaMenu from '../components/ui/FilaMenu'
import { useIdioma } from '../context/IdiomaContext'
import { escenaInicio } from '../data/escenas'
import { secciones } from '../data/navegacion'
import { perfil, redes } from '../data/perfil'
import './Inicio.css'

export default function Inicio() {
  const { key } = useLocation()
  const { textos } = useIdioma()
  const primeraCarga = key === 'default'
  const [abierto, setAbierto] = useState(!primeraCarga)

  useEffect(() => {
    if (!primeraCarga) return
    const despliegue = setTimeout(() => setAbierto(true), 250)
    return () => clearTimeout(despliegue)
  }, [primeraCarga])

  return (
    <FondoEscena imagen={escenaInicio.imagen} encuadre={escenaInicio.encuadre} centrado>
      <Kakejiku
        abierto={abierto}
        etiqueta={abierto ? textos.inicio.cerrar : textos.inicio.abrir}
        onAlternar={() => setAbierto(!abierto)}
      >
        <div className="inicio">
          <h1 className="inicio-marca">{perfil.marca}</h1>
          <p className="inicio-nombre">{perfil.nombre}</p>
          <p className="inicio-rol">{textos.rol}</p>
          <Divisor />
          <nav className="inicio-menu" aria-label={textos.inicio.menu}>
            {secciones.map(({ id, ruta, icono }) => (
              <FilaMenu key={ruta} as={Link} to={ruta} texto={textos.navegacion[id]} icono={icono} />
            ))}
          </nav>
          <EnlacesRedes etiqueta={textos.inicio.redes} redes={redes} />
        </div>
      </Kakejiku>
    </FondoEscena>
  )
}
