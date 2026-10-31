import { Fragment } from 'react'
import './EnlacesRedes.css'

type Red = {
  texto: string
  url: string
  icono: string
}

type Props = {
  etiqueta: string
  redes: Red[]
}

export default function EnlacesRedes({ etiqueta, redes }: Props) {
  return (
    <nav className="redes" aria-label={etiqueta}>
      {redes.map(({ texto, url, icono }, indice) => (
        <Fragment key={url}>
          {indice > 0 && <span className="redes-separador" aria-hidden="true"></span>}
          <a className="redes-enlace" href={url} target="_blank" rel="noopener noreferrer">
            <img src={icono} alt="" />
            {texto}
          </a>
        </Fragment>
      ))}
    </nav>
  )
}
