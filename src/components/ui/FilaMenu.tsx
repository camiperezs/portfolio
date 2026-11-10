import type { ComponentPropsWithoutRef, ElementType } from 'react'
import IconoPixel from './IconoPixel'
import './FilaMenu.css'

type Props<E extends ElementType> = {
  as?: E
  icono: string
  cursor: string
  texto: string
  detalle?: string
  activa?: boolean
} & Omit<ComponentPropsWithoutRef<E>, 'as' | 'children' | 'className'>

export default function FilaMenu<E extends ElementType = 'button'>({
  as,
  icono,
  cursor,
  texto,
  detalle,
  activa = false,
  ...props
}: Props<E>) {
  const Elemento: ElementType = as ?? 'button'

  return (
    <Elemento className={activa ? 'fila activa' : 'fila'} {...props}>
      <span className="fila-cursor" aria-hidden="true">
        <IconoPixel imagen={cursor} tamano={10} />
      </span>
      <span className="fila-baldosa" aria-hidden="true">
        <img src={icono} alt="" width={24} height={24} />
      </span>
      <span className="fila-texto">
        {texto}
        {detalle && <small>{detalle}</small>}
      </span>
    </Elemento>
  )
}
