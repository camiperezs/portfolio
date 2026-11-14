import type { KeyboardEvent } from 'react'
import PixelIcon from './PixelIcon'
import './ReasonMenu.css'

type Option = {
  id: string
  title: string
  detail: string
  icon: string
}

type Props = {
  baseId: string
  label: string
  cursor: string
  options: Option[]
  current: string
  onChoose: (id: string) => void
}

export default function ReasonMenu({ baseId, label, cursor, options, current, onChoose }: Props) {
  const handleKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = options.length - 1
    const targets: Record<string, number> = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }
    const target = targets[event.key]
    if (target === undefined) return
    event.preventDefault()
    document.getElementById(`${baseId}-reason-${options[target].id}`)?.focus()
  }

  return (
    <ul className="reason-menu" aria-label={label}>
      {options.map(({ id, title, detail, icon }, index) => (
        <li key={id}>
          <button
            type="button"
            id={`${baseId}-reason-${id}`}
            className={id === current ? 'reason current' : 'reason'}
            aria-pressed={id === current}
            onClick={() => onChoose(id)}
            onKeyDown={(event) => handleKey(event, index)}
          >
            <span className="reason-cursor" aria-hidden="true">
              <PixelIcon image={cursor} size={10} />
            </span>
            <span className="reason-tile" aria-hidden="true">
              <PixelIcon image={icon} />
            </span>
            <span className="reason-text">
              <span className="reason-title">{title}</span>
              <span className="reason-detail">{detail}</span>
            </span>
          </button>
        </li>
      ))}
    </ul>
  )
}
