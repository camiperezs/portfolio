import { Link } from 'react-router-dom'
import Label from './Label'
import ImageFrame from './ImageFrame'
import './ProjectCard.css'

type Props = {
  path: string
  title: string
  type: { text: string; variant: string }
  status: string
  image?: string
  fallback: string
  icons: { name: string; icon: string }[]
}

export default function ProjectCard({ path, title, type, status, image, fallback, icons }: Props) {
  return (
    <Link className="card" to={path}>
      <ImageFrame image={image} alt="" fallback={fallback} />
      <span className="card-meta">
        <Label text={type.text} variant={type.variant} />
        <span className="card-status">{status}</span>
      </span>
      <span className="card-title">{title}</span>
      {icons.length > 0 && (
        <span className="card-icons">
          {icons.map(({ name, icon }) => (
            <img key={name} src={icon} alt={name} title={name} width={24} height={24} />
          ))}
        </span>
      )}
    </Link>
  )
}
