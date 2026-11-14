import { useEffect, useId, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import PixelIcon from './PixelIcon'
import './ThemeSelector.css'

type Option<T extends string> = {
  id: T
  text: string
  icon: string
}

type Props<T extends string> = {
  label: string
  cursor: string
  options: Option<T>[]
  current: T
  onChange: (id: T) => void
}

export default function ThemeSelector<T extends string>({ label, cursor, options, current, onChange }: Props<T>) {
  const menuId = useId()
  const box = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const items = useRef<(HTMLButtonElement | null)[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const currentIndex = Math.max(
    0,
    options.findIndex((option) => option.id === current),
  )
  const selected = options[currentIndex]

  useEffect(() => {
    if (!isOpen) return
    items.current[currentIndex]?.focus()
    const closeOnOutside = (event: PointerEvent) => {
      if (!box.current?.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutside)
    return () => document.removeEventListener('pointerdown', closeOnOutside)
  }, [isOpen, currentIndex])

  const close = () => {
    setIsOpen(false)
    button.current?.focus()
  }

  const choose = (id: T) => {
    onChange(id)
    close()
  }

  const handleKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = options.length - 1
    const targets: Record<string, number> = {
      ArrowDown: index === last ? 0 : index + 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }
    if (event.key === 'Escape') {
      event.preventDefault()
      close()
      return
    }
    if (event.key === 'Tab') {
      setIsOpen(false)
      return
    }
    const target = targets[event.key]
    if (target === undefined) return
    event.preventDefault()
    items.current[target]?.focus()
  }

  return (
    <div ref={box} className="theme-selector">
      <button
        ref={button}
        type="button"
        className="theme-selector-button"
        aria-haspopup="menu"
        aria-expanded={isOpen}
        aria-controls={isOpen ? menuId : undefined}
        aria-label={`${label}: ${selected.text}`}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={(event) => {
          if (event.key !== 'ArrowDown' || isOpen) return
          event.preventDefault()
          setIsOpen(true)
        }}
      >
        <PixelIcon image={selected.icon} size={18} />
        <span className="theme-selector-arrow" aria-hidden="true"></span>
      </button>
      {isOpen && (
        <div className="theme-selector-menu" id={menuId} role="menu" aria-label={label}>
          {options.map(({ id, text, icon }, index) => (
            <button
              key={id}
              ref={(item) => {
                items.current[index] = item
              }}
              type="button"
              role="menuitemradio"
              aria-checked={id === current}
              tabIndex={id === current ? 0 : -1}
              className="theme-selector-option"
              onClick={() => choose(id)}
              onKeyDown={(event) => handleKey(event, index)}
              onMouseEnter={(event) => event.currentTarget.focus()}
            >
              <span className="theme-selector-cursor" aria-hidden="true">
                <PixelIcon image={cursor} size={10} />
              </span>
              <span className="theme-selector-tile" aria-hidden="true">
                <PixelIcon image={icon} size={16} />
              </span>
              {text}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
