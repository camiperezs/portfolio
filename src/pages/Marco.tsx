import { Outlet } from 'react-router-dom'
import ControlSegmentado from '../components/ui/ControlSegmentado'
import { idiomas, useIdioma } from '../context/IdiomaContext'
import { useTema } from '../context/TemaContext'
import { iconosTema } from '../data/navegacion'
import './Marco.css'

export default function Marco() {
  const { idioma, textos, cambiarIdioma } = useIdioma()
  const { tema, cambiarTema } = useTema()

  return (
    <div className="marco">
      <div className="marco-controles">
        <ControlSegmentado
          etiqueta={textos.idioma}
          opciones={idiomas.map((id) => ({ id, texto: id.toUpperCase() }))}
          actual={idioma}
          onCambiar={cambiarIdioma}
        />
        <ControlSegmentado
          etiqueta={textos.tema.etiqueta}
          opciones={[
            { id: 'dia' as const, icono: iconosTema.dia, etiqueta: textos.tema.dia },
            { id: 'noche' as const, icono: iconosTema.noche, etiqueta: textos.tema.noche },
          ]}
          actual={tema}
          onCambiar={cambiarTema}
        />
      </div>
      <Outlet />
    </div>
  )
}
