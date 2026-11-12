import { useId } from 'react'
import { useSearchParams } from 'react-router-dom'
import AreaExperiencia from '../components/ui/AreaExperiencia'
import CierreContacto from '../components/ui/CierreContacto'
import EnlaceAccion from '../components/ui/EnlaceAccion'
import Panel from '../components/ui/Panel'
import Pestanas from '../components/ui/Pestanas'
import { useIdioma } from '../context/IdiomaContext'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { areasExperiencia } from '../data/experiencia'
import { iconoEscribir } from '../data/navegacion'
import './Experiencia.css'

const parametroArea = 'area'

export default function Experiencia() {
  const { textos } = useIdioma()
  useTituloPagina(textos.experiencia.titulo)
  const { experiencia } = textos
  const idBase = useId()
  const [parametros, setParametros] = useSearchParams()
  const pedida = parametros.get(parametroArea)
  const actual = areasExperiencia.find(({ id }) => id === pedida)?.id ?? areasExperiencia[0].id

  const cambiar = (id: string) => {
    setParametros(id === areasExperiencia[0].id ? {} : { [parametroArea]: id }, { replace: true })
  }

  const pestanas = areasExperiencia.map(({ id }) => ({ id, texto: experiencia.areas[id].pestana }))
  const etiquetas = { queHice: experiencia.queHice, tecnologias: experiencia.tecnologias }

  return (
    <Panel className="experiencia">
      <header className="experiencia-cabecera">
        <h1 className="titulo-seccion">{experiencia.titulo}</h1>
        <p className="experiencia-intro">{experiencia.intro}</p>
      </header>
      <div className="experiencia-explorador">
        <Pestanas
          etiqueta={experiencia.etiqueta}
          idBase={idBase}
          pestanas={pestanas}
          actual={actual}
          onCambiar={cambiar}
        />
        <div className="experiencia-paneles">
          {areasExperiencia.map(({ id, icono, tecnologias }) => (
            <AreaExperiencia
              key={id}
              {...experiencia.areas[id]}
              idPanel={`${idBase}-panel-${id}`}
              idPestana={`${idBase}-pestana-${id}`}
              activa={id === actual}
              icono={icono}
              tecnologias={tecnologias}
              etiquetas={etiquetas}
            />
          ))}
        </div>
      </div>
      <CierreContacto titulo={experiencia.cierre.titulo} texto={experiencia.cierre.texto}>
        <EnlaceAccion texto={textos.inicio.escribir} icono={iconoEscribir} destino="/contacto" variante="principal" />
        <EnlaceAccion texto={experiencia.cierre.recorrido} destino="/sobre-mi" />
      </CierreContacto>
    </Panel>
  )
}
