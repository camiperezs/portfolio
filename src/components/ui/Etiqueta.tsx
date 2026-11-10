import './Etiqueta.css'

type Props = {
  texto: string
  variante: string
}

export default function Etiqueta({ texto, variante }: Props) {
  return (
    <span className={`etiqueta etiqueta-${variante}`}>
      <span className="etiqueta-punto" aria-hidden="true"></span>
      {texto}
    </span>
  )
}
