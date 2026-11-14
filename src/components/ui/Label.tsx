import './Label.css'

type Props = {
  text: string
  variant: string
}

export default function Label({ text, variant }: Props) {
  return (
    <span className={`label label-${variant}`}>
      <span className="label-point" aria-hidden="true"></span>
      {text}
    </span>
  )
}
