import Boton from './Boton'
import IconoPixel from './IconoPixel'
import './SobreEnviado.css'

type Props = {
  icono: string
  titulo: string
  texto: string
  accion: string
  onAccion: () => void
}

export default function SobreEnviado({ icono, titulo, texto, accion, onAccion }: Props) {
  return (
    <div className="sobre-enviado" role="status">
      <span className="sobre-enviado-baldosa" aria-hidden="true">
        <IconoPixel imagen={icono} tamano={48} />
      </span>
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <Boton onClick={onAccion}>{accion}</Boton>
    </div>
  )
}
