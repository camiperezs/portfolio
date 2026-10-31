import { Link } from 'react-router-dom'
import Pergamino from '../components/decoracion/Pergamino'
import FondoEscena from '../components/layout/FondoEscena'
import Divisor from '../components/ui/Divisor'
import FilaMenu from '../components/ui/FilaMenu'
import SelectorOpciones from '../components/ui/SelectorOpciones'
import { idiomas, useIdioma } from '../context/IdiomaContext'
import { escenaInicio } from '../data/escenas'
import { secciones } from '../data/navegacion'
import { perfil } from '../data/perfil'
import './Inicio.css'

export default function Inicio() {
  const { idioma, cambiarIdioma } = useIdioma()

  return (
    <FondoEscena imagen={escenaInicio.imagen} encuadre={escenaInicio.encuadre} centrado>
      <Pergamino>
        <div className="inicio">
          <img className="inicio-hoja" src="/sprites/hoja-sello.png" alt="" />
          <h1 className="inicio-marca">{perfil.marca}</h1>
          <p className="inicio-nombre">{perfil.nombre}</p>
          <p className="inicio-rol">{perfil.rol}</p>
          <Divisor />
          <nav className="inicio-menu" aria-label="Principal">
            {secciones.map(({ ruta, texto, icono }) => (
              <FilaMenu key={ruta} as={Link} to={ruta} texto={texto} icono={icono} />
            ))}
          </nav>
          <SelectorOpciones etiqueta="Idioma" opciones={idiomas} actual={idioma} onCambiar={cambiarIdioma} />
        </div>
      </Pergamino>
    </FondoEscena>
  )
}
