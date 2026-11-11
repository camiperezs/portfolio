import IconoPixel from './IconoPixel'
import './MarcoImagen.css'

type Props = {
  imagen?: string
  alt: string
  respaldo: string
  carga?: 'diferida' | 'inmediata'
}

export default function MarcoImagen({ imagen, alt, respaldo, carga = 'diferida' }: Props) {
  return (
    <div className="marco-imagen">
      {imagen ? (
        <img
          className="marco-imagen-foto"
          src={imagen}
          alt={alt}
          width={800}
          height={500}
          loading={carga === 'inmediata' ? 'eager' : 'lazy'}
          fetchPriority={carga === 'inmediata' ? 'high' : 'auto'}
          decoding="async"
        />
      ) : (
        <span className="marco-imagen-respaldo">
          <IconoPixel imagen={respaldo} tamano={48} />
        </span>
      )}
    </div>
  )
}
