import { Link } from 'react-router-dom'
import IconoPixel from './IconoPixel'
import './EnlaceAccion.css'

type Props = {
  texto: string
  icono: string
  destino: string
  externo?: boolean
  variante?: 'principal' | 'secundaria'
}

export default function EnlaceAccion({ texto, icono, destino, externo = false, variante = 'secundaria' }: Props) {
  const clase = `enlace-accion ${variante}`
  const contenido = (
    <>
      <IconoPixel imagen={icono} />
      {texto}
    </>
  )

  if (externo) {
    return (
      <a className={clase} href={destino} target="_blank" rel="noopener noreferrer">
        {contenido}
      </a>
    )
  }

  return (
    <Link className={clase} to={destino}>
      {contenido}
    </Link>
  )
}
