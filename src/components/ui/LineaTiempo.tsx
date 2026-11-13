import './LineaTiempo.css'

type Entrada = {
  id: string
  fecha: string
  titulo: string
  lugar: string
}

type Props = {
  entradas: Entrada[]
}

export default function LineaTiempo({ entradas }: Props) {
  return (
    <ol className="linea-tiempo">
      {entradas.map((entrada) => (
        <li key={entrada.id} className="linea-tiempo-entrada">
          <p className="linea-tiempo-fecha">{entrada.fecha}</p>
          <h3 className="linea-tiempo-cargo">{entrada.titulo}</h3>
          <p className="linea-tiempo-lugar">{entrada.lugar}</p>
        </li>
      ))}
    </ol>
  )
}
