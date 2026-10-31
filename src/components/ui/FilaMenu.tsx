import type { ComponentPropsWithoutRef, ElementType } from 'react'
import './FilaMenu.css'

type Props<E extends ElementType> = {
  as?: E
  icono: string
  texto: string
  detalle?: string
  activa?: boolean
} & Omit<ComponentPropsWithoutRef<E>, 'as' | 'children' | 'className'>

export default function FilaMenu<E extends ElementType = 'button'>({
  as,
  icono,
  texto,
  detalle,
  activa = false,
  ...props
}: Props<E>) {
  const Elemento: ElementType = as ?? 'button'

  return (
    <Elemento className={activa ? 'fila activa' : 'fila'} {...props}>
      <img src={icono} alt="" />
      <span className="fila-texto">
        {texto}
        {detalle && <small>{detalle}</small>}
      </span>
      <span className="fila-flecha" aria-hidden="true"></span>
    </Elemento>
  )
}
