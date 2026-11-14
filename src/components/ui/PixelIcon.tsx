import type { CSSProperties } from 'react'
import './PixelIcon.css'

type Props = {
  image: string
  size?: number
}

export default function PixelIcon({ image, size = 24 }: Props) {
  const style = { '--icon': `url(${image})`, '--size': `${size}px` } as CSSProperties
  return <span className="pixel-icon" style={style} aria-hidden="true" />
}
