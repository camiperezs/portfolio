import { Link } from 'react-router-dom'
import PixelIcon from './PixelIcon'
import './Action.css'

type Props = {
  text: string
  icon?: string
  target: string
  external?: boolean
  variant?: 'primary' | 'secondary'
}

export default function ActionLink({ text, icon, target, external = false, variant = 'secondary' }: Props) {
  const classes = `action ${variant}`
  const content = (
    <>
      {icon && <PixelIcon image={icon} />}
      {text}
    </>
  )

  if (external) {
    return (
      <a className={classes} href={target} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    )
  }

  return (
    <Link className={classes} to={target}>
      {content}
    </Link>
  )
}
