import { useId, useState } from 'react'
import CierreContacto from '../components/ui/CierreContacto'
import EnlaceAccion from '../components/ui/EnlaceAccion'
import GrillaTecnologias from '../components/ui/GrillaTecnologias'
import ListaCategorias from '../components/ui/ListaCategorias'
import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { cursorMenu, iconoEscribir } from '../data/navegacion'
import { categoriasTecnologias } from '../data/tecnologias'
import './Tecnologias.css'

export default function Tecnologias() {
  const { textos } = useIdioma()
  useTituloPagina(textos.tecnologias.titulo)
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
        <h1 className="titulo-seccion">{titulos.titulo}</h1>
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
        <CierreContacto titulo={titulos.cierre.titulo} texto={titulos.cierre.texto}>
          <EnlaceAccion texto={textos.inicio.escribir} icono={iconoEscribir} destino="/contacto" variante="principal" />
          <EnlaceAccion texto={titulos.cierre.experiencia} destino="/experiencia" />
        </CierreContacto>
      </Panel>
    </div>
  )
}
