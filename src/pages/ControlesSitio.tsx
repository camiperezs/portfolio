import ControlSegmentado from '../components/ui/ControlSegmentado'
import SelectorTema from '../components/ui/SelectorTema'
import { idiomas, useIdioma } from '../context/IdiomaContext'
import { preferenciasTema, useTema } from '../context/TemaContext'
import { cursorMenu, iconosTema } from '../data/navegacion'

export default function ControlesSitio() {
  const { idioma, textos, cambiarIdioma } = useIdioma()
  const { preferencia, cambiarPreferencia } = useTema()

  return (
    <>
      <ControlSegmentado
        etiqueta={textos.idioma}
        opciones={idiomas.map((id) => ({ id, texto: id.toUpperCase() }))}
        actual={idioma}
        onCambiar={cambiarIdioma}
      />
      <SelectorTema
        etiqueta={textos.tema.etiqueta}
        cursor={cursorMenu}
        opciones={preferenciasTema.map((id) => ({ id, texto: textos.tema[id], icono: iconosTema[id] }))}
        actual={preferencia}
        onCambiar={cambiarPreferencia}
      />
    </>
  )
}
