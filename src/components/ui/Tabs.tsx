import type { KeyboardEvent } from 'react'
import './Tabs.css'

type Tab = {
  id: string
  text: string
}

type Props = {
  label: string
  baseId: string
  tabs: Tab[]
  current: string
  onChange: (id: string) => void
}

export default function Tabs({ label, baseId, tabs, current, onChange }: Props) {
  const handleKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = tabs.length - 1
    const targets: Record<string, number> = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }
    const target = targets[event.key]
    if (target === undefined) return

    event.preventDefault()
    onChange(tabs[target].id)
    const siblings = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    siblings?.[target].focus()
  }

  return (
    <div className="section-tabs" role="tablist" aria-label={label}>
      {tabs.map(({ id, text }, index) => (
        <button
          key={id}
          type="button"
          role="tab"
          id={`${baseId}-tab-${id}`}
          className="section-tab"
          aria-selected={id === current}
          aria-controls={`${baseId}-panel-${id}`}
          tabIndex={id === current ? 0 : -1}
          onClick={() => onChange(id)}
          onKeyDown={(event) => handleKey(event, index)}
        >
          {text}
        </button>
      ))}
    </div>
  )
}
