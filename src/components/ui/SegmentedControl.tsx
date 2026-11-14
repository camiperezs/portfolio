import { useLayoutEffect, useRef, useState } from 'react'
import PixelIcon from './PixelIcon'
import './SegmentedControl.css'

type Option<T extends string> = {
  id: T
  text?: string
  icon?: string
  label?: string
}

type Props<T extends string> = {
  label: string
  options: Option<T>[]
  current: T
  onChange: (id: T) => void
}

export default function SegmentedControl<T extends string>({ label, options, current, onChange }: Props<T>) {
  const buttons = useRef<Partial<Record<string, HTMLButtonElement | null>>>({})
  const [pill, setPill] = useState({ x: 0, width: 0 })

  useLayoutEffect(() => {
    const button = buttons.current[current]
    if (!button) return
    const measure = () => setPill({ x: button.offsetLeft, width: button.offsetWidth })
    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(button)
    return () => observer.disconnect()
  }, [current, options])

  return (
    <div className="segmented-control" role="group" aria-label={label}>
      <span
        className="segmented-control-pill"
        style={{ width: pill.width, transform: `translateX(${pill.x}px)` }}
        aria-hidden="true"
      ></span>
      {options.map(({ id, text, icon, label: name }) => (
        <button
          key={id}
          type="button"
          ref={(button) => {
            buttons.current[id] = button
          }}
          aria-pressed={id === current}
          aria-label={name}
          onClick={() => onChange(id)}
        >
          {icon ? <PixelIcon image={icon} /> : text}
        </button>
      ))}
    </div>
  )
}
