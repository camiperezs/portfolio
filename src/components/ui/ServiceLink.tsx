import { Link } from 'react-router-dom'
import PixelIcon from './PixelIcon'
import './ServiceLink.css'

type Props = {
  to: string
  icon: string
  title: string
  description: string
  examples: string[]
}

export default function ServiceLink({ to, icon, title, description, examples }: Props) {
  return (
    <Link className="service-link" to={to}>
      <span className="service-link-tile" aria-hidden="true">
        <PixelIcon image={icon} />
      </span>
      <span className="service-link-body">
        <span className="service-link-title">{title}</span>
        <span className="service-link-description">{description}</span>
        <span className="service-link-examples">{examples.join(' · ')}</span>
      </span>
    </Link>
  )
}
