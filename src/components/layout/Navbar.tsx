import { useEffect, useId, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

type Section = {
  path: string
  text: string
}

type Props = {
  brand: string
  label: string
  menuText: string
  sections: Section[]
  controls: ReactNode
}

export default function Navbar({ brand, label, menuText, sections, controls }: Props) {
  const panelId = useId()
  const box = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const closeOnOutside = (event: PointerEvent) => {
      if (!box.current?.contains(event.target as Node)) setIsOpen(false)
    }
    document.addEventListener('pointerdown', closeOnOutside)
    return () => document.removeEventListener('pointerdown', closeOnOutside)
  }, [isOpen])

  return (
    <header className="navbar">
      <div
        ref={box}
        className={isOpen ? 'navbar-box open' : 'navbar-box'}
        onKeyDown={(event) => {
          if (event.key !== 'Escape' || !isOpen) return
          setIsOpen(false)
          button.current?.focus()
        }}
      >
        <Link className="navbar-brand" to="/">
          {brand}
        </Link>
        <button
          ref={button}
          type="button"
          className="navbar-toggle"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggle-icon" aria-hidden="true"></span>
          {menuText}
        </button>
        <div className="navbar-panel" id={panelId}>
          <nav aria-label={label}>
            <ul className="navbar-sections">
              {sections.map(({ path, text }) => (
                <li key={path}>
                  <NavLink to={path} className="navbar-section" onClick={() => setIsOpen(false)}>
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className="navbar-controls">{controls}</div>
        </div>
      </div>
    </header>
  )
}
