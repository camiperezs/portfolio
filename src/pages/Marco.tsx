import { Outlet } from 'react-router-dom'
import Boton from '../components/ui/Boton'
import SelectorOpciones from '../components/ui/SelectorOpciones'
import { idiomas, useIdioma } from '../context/IdiomaContext'
import { useTema } from '../context/TemaContext'
import { iconosTema } from '../data/navegacion'
import './Marco.css'

export default function Marco() {
  const { idioma, textos, cambiarIdioma } = useIdioma()
  const { tema, cambiarTema } = useTema()
  const esNoche = tema === 'noche'

  return (
    <div className="marco">
      <div className="marco-idioma">
        <SelectorOpciones etiqueta={textos.idioma} opciones={idiomas} actual={idioma} onCambiar={cambiarIdioma} />
        <Boton
          variante={esNoche ? 'oro' : 'papel'}
          className="marco-tema"
          aria-label={textos.modoNoche}
          aria-pressed={esNoche}
          onClick={() => cambiarTema(esNoche ? 'dia' : 'noche')}
        >
          <img src={esNoche ? iconosTema.noche : iconosTema.dia} alt="" width={24} height={24} />
        </Boton>
      </div>
      <Outlet />
    </div>
  )
}
