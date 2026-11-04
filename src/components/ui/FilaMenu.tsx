import type { ComponentPropsWithoutRef, ElementType } from 'react'
import './FilaMenu.css'

type Props<E extends ElementType> = {
  as?: E
  icono: string
  iconoActivo?: string
  tamanoIcono?: number
  texto: string
  detalle?: string
  activa?: boolean
} & Omit<ComponentPropsWithoutRef<E>, 'as' | 'children' | 'className'>

export default function FilaMenu<E extends ElementType = 'button'>({
  as,
  icono,
  iconoActivo,
  tamanoIcono = 48,
  texto,
  detalle,
  activa = false,
  ...props
}: Props<E>) {
  const Elemento: ElementType = as ?? 'button'
  const clases = ['fila', activa && 'activa', iconoActivo && 'con-farol'].filter(Boolean).join(' ')

  return (
    <Elemento className={clases} {...props}>
      {iconoActivo ? (
        <span className="fila-icono" aria-hidden="true">
          <img src={icono} alt="" width={tamanoIcono} height={tamanoIcono} />
          <img className="fila-icono-activo" src={iconoActivo} alt="" width={tamanoIcono} height={tamanoIcono} />
        </span>
      ) : (
        <>
          <span className="fila-cursor" aria-hidden="true"></span>
          <img src={icono} alt="" width={tamanoIcono} height={tamanoIcono} />
        </>
      )}
      <span className="fila-texto">
        {texto}
        {detalle && <small>{detalle}</small>}
      </span>
    </Elemento>
  )
}
