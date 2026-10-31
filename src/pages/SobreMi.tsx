import { useId, useState } from 'react'
import MapaRecorrido from '../components/ui/MapaRecorrido'
import Panel from '../components/ui/Panel'
import Pestanas from '../components/ui/Pestanas'
import { useIdioma } from '../context/IdiomaContext'
import { perfil } from '../data/perfil'
import {
  iconosParada,
  iconosParadaApagada,
  mapaRecorrido,
  paradaInicial,
  paradasRecorrido,
  pestanasSobreMi,
  retrato,
} from '../data/sobreMi'
import './SobreMi.css'

export default function SobreMi() {
  const { textos } = useIdioma()
  const { sobreMi } = textos
  const { recorrido } = sobreMi
  const idBase = useId()
  const [actual, setActual] = useState<string>(pestanasSobreMi[0])
  const [paradaActual, setParadaActual] = useState<string>(paradaInicial)
  const [encendidas, setEncendidas] = useState<string[]>([paradaInicial])
  const enRecorrido = actual === 'recorrido'

  const elegirParada = (id: string) => {
    setParadaActual(id)
    setEncendidas((previas) => (previas.includes(id) ? previas : [...previas, id]))
  }

  const pestanas = pestanasSobreMi.map((id) => ({ id, texto: sobreMi.pestanas[id] }))
  const leyenda = (['experiencia', 'formacion'] as const).map((tipo) => ({
    texto: recorrido.tipos[tipo],
    icono: iconosParada[tipo],
  }))
  const paradas = paradasRecorrido.map(({ id, tipo, x, y }) => ({
    ...recorrido.paradas[id],
    id,
    x,
    y,
    tipo: recorrido.tipos[tipo],
    icono: encendidas.includes(id) ? iconosParada[tipo] : iconosParadaApagada[tipo],
  }))

  return (
    <div className={enRecorrido ? 'sobre-mi sobre-mi-ancho' : 'sobre-mi'}>
      <Panel className="sobre-mi-contenido">
        <div className="sobre-mi-cabecera">
          <h1 className="titulo">{sobreMi.titulo}</h1>
          <Pestanas
            etiqueta={sobreMi.secciones}
            idBase={idBase}
            pestanas={pestanas}
            actual={actual}
            onCambiar={setActual}
          />
        </div>
        <div
          className={enRecorrido ? 'sobre-mi-panel' : 'sobre-mi-panel sobre-mi-presentacion'}
          id={`${idBase}-panel`}
          role="tabpanel"
          aria-labelledby={`${idBase}-pestana-${actual}`}
          tabIndex={0}
        >
          {enRecorrido ? (
            <MapaRecorrido
              etiqueta={recorrido.etiqueta}
              imagen={mapaRecorrido}
              leyenda={leyenda}
              paradas={paradas}
              actual={paradaActual}
              textoAnterior={recorrido.anterior}
              textoSiguiente={recorrido.siguiente}
              onCambiar={elegirParada}
            />
          ) : (
            sobreMi.perfil.map((parrafo) => <p key={parrafo}>{parrafo}</p>)
          )}
        </div>
      </Panel>
      {!enRecorrido && (
        <Panel className="sobre-mi-retrato">
          <div className="sobre-mi-marco">
            <img className="sobre-mi-imagen" src={retrato.imagen} alt={`${sobreMi.retrato} ${perfil.nombre}`} />
          </div>
          <div className="sobre-mi-datos">
            <p className="sobre-mi-nombre">{perfil.nombre}</p>
            <p>{textos.rol}</p>
            <p>{retrato.ciudad}</p>
          </div>
        </Panel>
      )}
    </div>
  )
}
