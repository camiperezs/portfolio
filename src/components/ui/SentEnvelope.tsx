import Button from './Button'
import PixelIcon from './PixelIcon'
import './SentEnvelope.css'

type Props = {
  icon: string
  title: string
  text: string
  action: string
  onAction: () => void
}

export default function SentEnvelope({ icon, title, text, action, onAction }: Props) {
  return (
    <div className="sent-envelope" role="status">
      <span className="sent-envelope-tile" aria-hidden="true">
        <PixelIcon image={icon} size={48} />
      </span>
      <h2>{title}</h2>
      <p>{text}</p>
      <Button onClick={onAction}>{action}</Button>
    </div>
  )
}
