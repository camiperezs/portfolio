import { useId, useState } from 'react'
import GrillaTecnologias from '../components/ui/GrillaTecnologias'
import ListaCategorias from '../components/ui/ListaCategorias'
import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'
import { cursorMenu } from '../data/navegacion'
import { categoriasTecnologias } from '../data/tecnologias'
import './Tecnologias.css'

export default function Tecnologias() {
  const { textos } = useIdioma()
  const { tecnologias: titulos } = textos
  const idBase = useId()
  const [actual, setActual] = useState<string>(categoriasTecnologias[0].id)
  const categorias = categoriasTecnologias.map((categoria) => ({
    ...categoria,
    texto: titulos.categorias[categoria.id],
  }))
  const { id, texto, tecnologias } = categorias.find((categoria) => categoria.id === actual) ?? categorias[0]

  return (
    <div className="tecnologias">
      <Panel className="tecnologias-menu">
        <h1 className="titulo">{titulos.titulo}</h1>
        <ListaCategorias
          etiqueta={titulos.etiqueta}
          idBase={idBase}
          categorias={categorias}
          cursor={cursorMenu}
          actual={actual}
          onCambiar={setActual}
        />
      </Panel>
      <Panel className="tecnologias-detalle">
        <div
          className="tecnologias-panel"
          id={`${idBase}-panel`}
          role="tabpanel"
          aria-labelledby={`${idBase}-pestana-${id}`}
          tabIndex={0}
        >
          <h2 className="tecnologias-categoria">{texto}</h2>
          <GrillaTecnologias tecnologias={tecnologias} />
        </div>
      </Panel>
    </div>
  )
}
