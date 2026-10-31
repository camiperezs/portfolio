import Boton from './Boton'
import './SelectorOpciones.css'

type Props<T extends string> = {
  etiqueta: string
  opciones: readonly T[]
  actual: T
  onCambiar: (opcion: T) => void
}

export default function SelectorOpciones<T extends string>({ etiqueta, opciones, actual, onCambiar }: Props<T>) {
  return (
    <div className="selector" role="group" aria-label={etiqueta}>
      {opciones.map((opcion) => (
        <Boton
          key={opcion}
          variante={opcion === actual ? 'oro' : 'papel'}
          aria-pressed={opcion === actual}
          onClick={() => onCambiar(opcion)}
        >
          {opcion.toUpperCase()}
        </Boton>
      ))}
    </div>
  )
}
