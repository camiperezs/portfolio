import IconoPixel from './IconoPixel'
import './ResumenTrayectoria.css'

type Entrada = {
  id: string
  fecha: string
  titulo: string
  lugar: string
}

type Columna = {
  id: string
  titulo: string
  icono: string
  entradas: Entrada[]
}

type Props = {
  etiqueta: string
  columnas: Columna[]
}

export default function ResumenTrayectoria({ etiqueta, columnas }: Props) {
  return (
    <section className="trayectoria" aria-label={etiqueta}>
      {columnas.map(({ id, titulo, icono, entradas }) => (
        <div key={id} className={`trayectoria-columna trayectoria-${id}`}>
          <h2 className="trayectoria-titulo">
            <span className="trayectoria-icono">
              <IconoPixel imagen={icono} />
            </span>
            {titulo}
          </h2>
          <ol className="trayectoria-lista">
            {entradas.map((entrada) => (
              <li key={entrada.id} className="trayectoria-entrada">
                <p className="trayectoria-fecha">{entrada.fecha}</p>
                <h3 className="trayectoria-cargo">{entrada.titulo}</h3>
                <p className="trayectoria-lugar">{entrada.lugar}</p>
              </li>
            ))}
          </ol>
        </div>
      ))}
    </section>
  )
}
