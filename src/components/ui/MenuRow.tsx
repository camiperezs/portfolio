import type { ComponentPropsWithoutRef, ElementType } from 'react'
import PixelIcon from './PixelIcon'
import './MenuRow.css'

type Props<E extends ElementType> = {
  as?: E
  icon: string
  cursor: string
  text: string
  detail?: string
  active?: boolean
} & Omit<ComponentPropsWithoutRef<E>, 'as' | 'children' | 'className'>

export default function MenuRow<E extends ElementType = 'button'>({
  as,
  icon,
  cursor,
  text,
  detail,
  active = false,
  ...props
}: Props<E>) {
  const Component: ElementType = as ?? 'button'

  return (
    <Component className={active ? 'row active' : 'row'} {...props}>
      <span className="row-cursor" aria-hidden="true">
        <PixelIcon image={cursor} size={10} />
      </span>
      <span className="row-tile" aria-hidden="true">
        <img src={icon} alt="" width={24} height={24} />
      </span>
      <span className="row-text">
        {text}
        {detail && <small>{detail}</small>}
      </span>
    </Component>
  )
}
