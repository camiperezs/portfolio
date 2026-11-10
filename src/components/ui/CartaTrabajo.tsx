import { Link } from 'react-router-dom'
import Etiqueta from './Etiqueta'
import MarcoImagen from './MarcoImagen'
import './CartaTrabajo.css'

type Props = {
  ruta: string
  titulo: string
  tipo: { texto: string; variante: string }
  estado: string
  imagen?: string
  imagenAlt: string
  respaldo: string
  iconos: { nombre: string; icono: string }[]
}

export default function CartaTrabajo({ ruta, titulo, tipo, estado, imagen, imagenAlt, respaldo, iconos }: Props) {
  return (
    <Link className="carta" to={ruta}>
      <MarcoImagen imagen={imagen} alt={imagenAlt} respaldo={respaldo} />
      <span className="carta-meta">
        <Etiqueta texto={tipo.texto} variante={tipo.variante} />
        <span className="carta-estado">{estado}</span>
      </span>
      <span className="carta-titulo">{titulo}</span>
      {iconos.length > 0 && (
        <span className="carta-iconos">
          {iconos.map(({ nombre, icono }) => (
            <img key={nombre} src={icono} alt={nombre} title={nombre} width={24} height={24} />
          ))}
        </span>
      )}
    </Link>
  )
}
