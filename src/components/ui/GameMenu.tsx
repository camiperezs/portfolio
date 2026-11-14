import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { Link } from 'react-router-dom'
import PixelIcon from './PixelIcon'
import './GameMenu.css'

type Option = {
  path: string
  name: string
  description: string
  icon: string
}

type Props = {
  label: string
  cursor: string
  options: Option[]
}

export default function GameMenu({ label, cursor, options }: Props) {
  const menu = useRef<HTMLElement>(null)
  const links = useRef<(HTMLAnchorElement | null)[]>([])
  const byKeyboard = useRef(false)
  const [active, setActive] = useState(0)
  const [cursorY, setCursorY] = useState(0)
  const [soft, setSoft] = useState(false)

  const place = useCallback(() => {
    const link = links.current[active]
    const container = menu.current
    if (!link || !container) return
    const box = link.getBoundingClientRect()
    const base = container.getBoundingClientRect()
    setCursorY(box.top - base.top + box.height / 2)
  }, [active])

  useLayoutEffect(() => {
    place()
    const observer = new ResizeObserver(place)
    if (menu.current) observer.observe(menu.current)
    return () => observer.disconnect()
  }, [place])

  const choose = (index: number) => {
    setSoft(!byKeyboard.current)
    byKeyboard.current = false
    setActive(index)
  }

  const handleKey = (event: KeyboardEvent<HTMLAnchorElement>, index: number) => {
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
    byKeyboard.current = true
    links.current[target]?.focus()
  }

  return (
    <nav className="game-menu" aria-label={label} ref={menu}>
      <span
        className={soft ? 'game-menu-cursor soft' : 'game-menu-cursor'}
        style={{ transform: `translateY(${cursorY}px)` }}
        aria-hidden="true"
      >
        <PixelIcon image={cursor} size={10} />
      </span>
      <ul>
        {options.map(({ path, name, description, icon }, index) => (
          <li key={path}>
            <Link
              ref={(link) => {
                links.current[index] = link
              }}
              to={path}
              className={index === active ? 'game-menu-option active' : 'game-menu-option'}
              onMouseEnter={() => choose(index)}
              onFocus={() => choose(index)}
              onKeyDown={(event) => handleKey(event, index)}
            >
              <span className="game-menu-tile">
                <PixelIcon image={icon} />
              </span>
              <span className="game-menu-text">
                <span className="game-menu-name">{name}</span>
                <span className="game-menu-description">{description}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
