import './ListaTecnologias.css'

type Tecnologia = {
  nombre: string
  icono?: string
}

type Props = {
  etiqueta: string
  tecnologias: Tecnologia[]
}

export default function ListaTecnologias({ etiqueta, tecnologias }: Props) {
  return (
    <ul className="lista-tecnologias" aria-label={etiqueta}>
      {tecnologias.map(({ nombre, icono }) => (
        <li key={nombre}>
          {icono && <img src={icono} alt="" width={24} height={24} />}
          {nombre}
        </li>
      ))}
    </ul>
  )
}
