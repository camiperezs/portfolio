import { useRef } from 'react'
import './MapaRecorrido.css'

type Parada = {
  id: string
  x: number
  y: number
  icono: string
  tipo: string
  etiqueta: string
  nombre: string
  titulo: string
  lugar: string
  parrafos: string[]
  logros?: string[]
  enlaces?: { texto: string; url: string }[]
}

type Props = {
  etiqueta: string
  imagen: string
  leyenda: { texto: string; icono: string }[]
  paradas: Parada[]
  actual: string
  textoAnterior: string
  textoSiguiente: string
  onCambiar: (id: string) => void
}

function DetalleParada({ tipo, titulo, lugar, parrafos, logros, enlaces }: Parada) {
  return (
    <div className="mapa-texto">
      <h2 className="mapa-titulo">{titulo}</h2>
      <p className="mapa-lugar">
        <span className="mapa-tipo">{tipo}</span> · {lugar}
      </p>
      {parrafos.map((parrafo) => <p key={parrafo}>{parrafo}</p>)}
      {logros && (
        <ul className="mapa-logros">
          {logros.map((logro) => <li key={logro}>{logro}</li>)}
        </ul>
      )}
      {enlaces?.map(({ texto, url }) => (
        <a key={url} className="mapa-enlace" href={url} target="_blank" rel="noopener noreferrer">
          {texto}
        </a>
      ))}
    </div>
  )
}

export default function MapaRecorrido({
  etiqueta,
  imagen,
  leyenda,
  paradas,
  actual,
  textoAnterior,
  textoSiguiente,
  onCambiar,
}: Props) {
  const indice = paradas.findIndex(({ id }) => id === actual)
  const parada = paradas[indice]
  const anterior = paradas[indice - 1]
  const siguiente = paradas[indice + 1]
  const flechaAnterior = useRef<HTMLButtonElement>(null)
  const flechaSiguiente = useRef<HTMLButtonElement>(null)

  const irAnterior = () => {
    if (!anterior) return
    onCambiar(anterior.id)
    if (indice === 1) flechaSiguiente.current?.focus()
  }

  const irSiguiente = () => {
    if (!siguiente) return
    onCambiar(siguiente.id)
    if (indice === paradas.length - 2) flechaAnterior.current?.focus()
  }

  return (
    <div className="mapa">
      <div className="mapa-lienzo">
        <img className="mapa-imagen" src={imagen} alt="" />
        <ol className="mapa-paradas" aria-label={etiqueta}>
          {paradas.map((item) => (
            <li className="mapa-parada" key={item.id} style={{ left: `${item.x}%`, top: `${item.y}%` }}>
              <button
                type="button"
                className="mapa-boton"
                aria-current={item.id === actual ? 'step' : undefined}
                onClick={() => onCambiar(item.id)}
              >
                <img src={item.icono} alt="" />
                <span className="mapa-etiqueta">
                  <span className="mapa-anio">{item.etiqueta}</span>
                  <span className="mapa-nombre">{item.nombre}</span>
                </span>
              </button>
              {item.id === actual && (
                <div className="mapa-detalle-movil">
                  <DetalleParada {...item} />
                </div>
              )}
            </li>
          ))}
        </ol>
      </div>
      <ul className="mapa-leyenda">
        {leyenda.map(({ texto, icono }) => (
          <li key={texto}>
            <img src={icono} alt="" />
            {texto}
          </li>
        ))}
      </ul>
      <div className="mapa-detalle">
        <button
          type="button"
          ref={flechaAnterior}
          className={`mapa-flecha mapa-flecha-anterior ${anterior ? '' : 'mapa-flecha-oculta'}`.trim()}
          aria-label={textoAnterior}
          onClick={irAnterior}
        >
          <span aria-hidden="true"></span>
        </button>
        <div aria-live="polite">
          <DetalleParada {...parada} />
        </div>
        <button
          type="button"
          ref={flechaSiguiente}
          className={siguiente ? 'mapa-flecha' : 'mapa-flecha mapa-flecha-oculta'}
          aria-label={textoSiguiente}
          onClick={irSiguiente}
        >
          <span aria-hidden="true"></span>
        </button>
      </div>
    </div>
  )
}
