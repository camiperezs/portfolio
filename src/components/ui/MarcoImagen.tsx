import IconoPixel from './IconoPixel'
import './MarcoImagen.css'

type Props = {
  imagen?: string
  alt: string
  respaldo: string
}

export default function MarcoImagen({ imagen, alt, respaldo }: Props) {
  return (
    <div className="marco-imagen">
      {imagen ? (
        <img className="marco-imagen-foto" src={imagen} alt={alt} loading="lazy" />
      ) : (
        <span className="marco-imagen-respaldo">
          <IconoPixel imagen={respaldo} tamano={48} />
        </span>
      )}
    </div>
  )
}
