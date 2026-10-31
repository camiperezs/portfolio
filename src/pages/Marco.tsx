import { Outlet } from 'react-router-dom'
import SelectorOpciones from '../components/ui/SelectorOpciones'
import { idiomas, useIdioma } from '../context/IdiomaContext'
import './Marco.css'

export default function Marco() {
  const { idioma, textos, cambiarIdioma } = useIdioma()

  return (
    <div className="marco">
      <div className="marco-idioma">
        <SelectorOpciones etiqueta={textos.idioma} opciones={idiomas} actual={idioma} onCambiar={cambiarIdioma} />
      </div>
      <Outlet />
    </div>
  )
}
