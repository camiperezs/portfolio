import './MarcoImagen.css'

type Props = {
  imagen?: string
  alt: string
  respaldo: string
  grande?: boolean
}

export default function MarcoImagen({ imagen, alt, respaldo, grande = false }: Props) {
  return (
    <div className={grande ? 'marco-imagen grande' : 'marco-imagen'}>
      {imagen ? (
        <img className="marco-imagen-foto" src={imagen} alt={alt} loading="lazy" />
      ) : (
        <img className="marco-imagen-respaldo" src={respaldo} alt="" width={48} height={48} />
      )}
    </div>
  )
}
