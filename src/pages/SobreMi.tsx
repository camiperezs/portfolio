import { useId } from 'react'
import { useSearchParams } from 'react-router-dom'
import EnlaceAccion from '../components/ui/EnlaceAccion'
import LineaTiempo from '../components/ui/LineaTiempo'
import Panel from '../components/ui/Panel'
import Pestanas from '../components/ui/Pestanas'
import { useIdioma } from '../context/IdiomaContext'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { iconoEscribir } from '../data/navegacion'
import { perfil, redes } from '../data/perfil'
import { paradasRecorrido, pestanasSobreMi, retrato } from '../data/sobreMi'
import type { PestanaSobreMi } from '../data/sobreMi'
import './SobreMi.css'

const parametroSeccion = 'seccion'

export default function SobreMi() {
  const { textos } = useIdioma()
  useTituloPagina(textos.sobreMi.titulo)
  const { sobreMi } = textos
  const { recorrido } = sobreMi
  const idBase = useId()
  const [parametros, setParametros] = useSearchParams()
  const pedida = parametros.get(parametroSeccion)
  const actual: PestanaSobreMi = pestanasSobreMi.find((id) => id === pedida) ?? pestanasSobreMi[0]

  const cambiar = (id: string) => {
    setParametros(id === pestanasSobreMi[0] ? {} : { [parametroSeccion]: id }, { replace: true })
  }

  const pestanas = pestanasSobreMi.map((id) => ({ id, texto: sobreMi.pestanas[id] }))
  const pasos = paradasRecorrido.map(({ id, tipo }) => ({
    ...recorrido.paradas[id],
    id,
    tipo: { texto: recorrido.tipos[tipo], variante: tipo },
  }))

  return (
    <Panel className="sobre-mi">
      <div className="sobre-mi-cabecera">
        <div className="sobre-mi-marco">
          <img
            className="sobre-mi-imagen"
            src={retrato.imagen}
            alt={`${sobreMi.retrato} ${perfil.nombre}`}
            width={128}
            height={160}
            fetchPriority="high"
          />
        </div>
        <div className="sobre-mi-identidad">
          <h1 className="titulo-seccion">{sobreMi.titulo}</h1>
          <p className="sobre-mi-nombre">{perfil.nombre}</p>
          <p className="sobre-mi-rol">
            {textos.rol} · {retrato.ciudad}
          </p>
        </div>
      </div>
      <Pestanas etiqueta={sobreMi.secciones} idBase={idBase} pestanas={pestanas} actual={actual} onCambiar={cambiar} />
      <div
        className="sobre-mi-panel"
        id={`${idBase}-panel`}
        role="tabpanel"
        aria-labelledby={`${idBase}-pestana-${actual}`}
        tabIndex={0}
      >
        {actual === 'recorrido' ? (
          <LineaTiempo etiqueta={recorrido.etiqueta} pasos={pasos} />
        ) : (
          sobreMi.perfil.map((parrafo) => <p key={parrafo}>{parrafo}</p>)
        )}
        <div className="sobre-mi-acciones" role="group" aria-label={sobreMi.contacto}>
          <EnlaceAccion texto={textos.inicio.escribir} icono={iconoEscribir} destino="/contacto" variante="principal" />
          {redes.map(({ texto, url, icono }) => (
            <EnlaceAccion key={url} texto={texto} icono={icono} destino={url} externo />
          ))}
        </div>
      </div>
    </Panel>
  )
}
