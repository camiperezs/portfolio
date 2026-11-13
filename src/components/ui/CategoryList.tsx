import type { KeyboardEvent } from 'react'
import MenuRow from './MenuRow'
import './CategoryList.css'

type Category = {
  id: string
  text: string
  icon: string
}

type Props = {
  label: string
  baseId: string
  categories: Category[]
  cursor: string
  current: string
  onChange: (id: string) => void
}

export default function CategoryList({ label, baseId, categories, cursor, current, onChange }: Props) {
  const handleKey = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = categories.length - 1
    const next = index === last ? 0 : index + 1
    const previous = index === 0 ? last : index - 1
    const targets: Record<string, number> = {
      ArrowDown: next,
      ArrowRight: next,
      ArrowUp: previous,
      ArrowLeft: previous,
      Home: 0,
      End: last,
    }
    const target = targets[event.key]
    if (target === undefined) return

    event.preventDefault()
    onChange(categories[target].id)
    const siblings = event.currentTarget.parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    siblings?.[target].focus()
  }

  return (
    <div className="categories" role="tablist" aria-label={label} aria-orientation="vertical">
      {categories.map(({ id, text, icon }, index) => (
        <MenuRow
          key={id}
          type="button"
          role="tab"
          id={`${baseId}-tab-${id}`}
          icon={icon}
          cursor={cursor}
          text={text}
          active={id === current}
          aria-selected={id === current}
          aria-controls={`${baseId}-panel`}
          tabIndex={id === current ? 0 : -1}
          onClick={() => onChange(id)}
          onKeyDown={(event: KeyboardEvent<HTMLButtonElement>) => handleKey(event, index)}
        />
      ))}
    </div>
  )
}
