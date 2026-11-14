import { useId } from 'react'
import type { ReactNode } from 'react'
import PixelIcon from './PixelIcon'
import './FeaturedService.css'

type Props = {
  icon: string
  title: string
  description: string
  children: ReactNode
}

export default function FeaturedService({ icon, title, description, children }: Props) {
  const titleId = useId()

  return (
    <section className="featured-service" aria-labelledby={titleId}>
      <header className="featured-service-header">
        <span className="featured-service-tile" aria-hidden="true">
          <PixelIcon image={icon} size={32} />
        </span>
        <h2 id={titleId}>{title}</h2>
      </header>
      <p className="featured-service-description">{description}</p>
      {children}
    </section>
  )
}
