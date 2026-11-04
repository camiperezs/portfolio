import './Etiqueta.css'

type Props = {
  texto: string
  variante: string
}

export default function Etiqueta({ texto, variante }: Props) {
  return <span className={`etiqueta etiqueta-${variante}`}>{texto}</span>
}
