import Etiqueta from './Etiqueta'
import './LineaTiempo.css'

type Paso = {
  id: string
  fecha: string
  tipo: { texto: string; variante: string }
  titulo: string
  lugar: string
  parrafos: string[]
  logros?: string[]
  enlaces?: { texto: string; url: string }[]
}

type Props = {
  etiqueta: string
  pasos: Paso[]
}

export default function LineaTiempo({ etiqueta, pasos }: Props) {
  return (
    <ol className="linea" aria-label={etiqueta}>
      {pasos.map(({ id, fecha, tipo, titulo, lugar, parrafos, logros, enlaces }) => (
        <li key={id} className={`linea-paso linea-${tipo.variante}`}>
          <span className="linea-punto" aria-hidden="true"></span>
          <article className="linea-tarjeta">
            <header className="linea-cabecera">
              <p className="linea-meta">
                <span className="linea-fecha">{fecha}</span>
                <Etiqueta texto={tipo.texto} variante={tipo.variante} />
              </p>
              <h2 className="linea-titulo">{titulo}</h2>
              <p className="linea-lugar">{lugar}</p>
            </header>
            {parrafos.map((parrafo) => (
              <p key={parrafo}>{parrafo}</p>
            ))}
            {logros && (
              <ul className="linea-logros">
                {logros.map((logro) => (
                  <li key={logro}>{logro}</li>
                ))}
              </ul>
            )}
            {enlaces?.map(({ texto, url }) => (
              <a key={url} className="linea-enlace" href={url} target="_blank" rel="noopener noreferrer">
                {texto}
              </a>
            ))}
          </article>
        </li>
      ))}
    </ol>
  )
}
