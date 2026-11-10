import Boton from './Boton'
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
      <img src={icono} alt="" width={96} height={96} />
      <h2>{titulo}</h2>
      <p>{texto}</p>
      <Boton onClick={onAccion}>
        {accion}
      </Boton>
    </div>
  )
}
