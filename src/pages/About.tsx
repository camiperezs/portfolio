import { useRef, useState, type ReactNode } from 'react'
import { LazyMotion } from 'motion/react'
import FloatingCard from '../components/ui/FloatingCard'
import ActionLink from '../components/ui/ActionLink'
import PixelIcon from '../components/ui/PixelIcon'
import Timeline from '../components/ui/Timeline'
import { useLanguage } from '../context/LanguageContext'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { usePageTitle } from '../hooks/usePageTitle'
import { writeIcon, sections } from '../data/navigation'
import { profile, socials } from '../data/profile'
import { careerColumns, portrait } from '../data/about'
import './About.css'

type CardId = 'identity' | 'text' | 'experience' | 'training'
type Point = { x: number; y: number }
type Preview = { target: CardId; offset: Point }

const loadMotion = () => import('../lib/motion').then((loaded) => loaded.default)
const aboutIcon = sections.find(({ id }) => id === 'about')?.icon
const roleIcon = '/sprites/mask-code.png'
const initialOrder: CardId[] = ['identity', 'text', 'experience', 'training']
const fixedCard: CardId = 'text'
const LOOKAHEAD = 0.5

const styles = {
  identity: { tone: 'accent', tilt: -1, delay: 0 },
  text: { tone: 'accent', tilt: 1, delay: 1.6 },
  experience: { tone: 'plum', tilt: 1, delay: 3.2 },
  training: { tone: 'plum', tilt: -1, delay: 4.8 },
} as const

function slotClass(order: CardId[], index: number) {
  const row = Math.floor(index / 2)
  const rowClass = row === 0 ? 'row-top' : 'row-bottom'
  if (row === Math.floor(order.indexOf(fixedCard) / 2)) {
    return `${rowClass} ${order[index] === fixedCard ? 'slot-wide' : 'slot-narrow'}`
  }
  return `${rowClass} ${index % 2 === 0 ? 'slot-middle-left' : 'slot-middle-right'}`
}

function swap(order: CardId[], source: CardId, target: CardId) {
  return order.map((id) => (id === source ? target : id === target ? source : id))
}

function cardAt(area: HTMLElement | null, source: string, point: Point) {
  if (!area) return null
  const border = area.getBoundingClientRect()
  const x = point.x - window.scrollX - border.left
  const y = point.y - window.scrollY - border.top
  for (const element of area.querySelectorAll<HTMLElement>('[data-card]')) {
    const id = element.dataset.card
    if (id === source) continue
    const insideX = x >= element.offsetLeft && x <= element.offsetLeft + element.offsetWidth
    const insideY = y >= element.offsetTop && y <= element.offsetTop + element.offsetHeight
    if (insideX && insideY) return id as CardId
  }
  return null
}

export default function About() {
  const { texts } = useLanguage()
  usePageTitle(texts.about.title)
  const { about } = texts
  const { career } = about
  const board = useRef<HTMLDivElement>(null)
  const [{ order, changes }, setArrangement] = useState({ order: initialOrder, changes: 0 })
  const [preview, setPreview] = useState<Preview | null>(null)
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)')
  const draggable = useMediaQuery('(hover: hover) and (pointer: fine) and (min-width: 900px)')
  const target = preview?.target

  const measureOffset = (source: string, id: CardId) => {
    const place = board.current?.querySelector<HTMLElement>(`[data-card="${source}"]`)
    const card = board.current?.querySelector<HTMLElement>(`[data-card="${id}"]`)
    if (!place || !card) return null
    const center = (element: HTMLElement) => ({
      x: element.offsetLeft + element.offsetWidth / 2,
      y: element.offsetTop + element.offsetHeight / 2,
    })
    const start = center(card)
    const end = center(place)
    return { x: (end.x - start.x) * LOOKAHEAD, y: (end.y - start.y) * LOOKAHEAD }
  }

  const drag = (source: string, point: Point) => {
    const id = cardAt(board.current, source, point)
    if (id === (target ?? null)) return
    const offset = id && measureOffset(source, id)
    setPreview(id && offset ? { target: id, offset } : null)
  }

  const drop = (source: string, point: Point) => {
    const id = cardAt(board.current, source, point)
    setPreview(null)
    if (!id) return
    setArrangement((current) => ({
      order: swap(current.order, source as CardId, id),
      changes: current.changes + 1,
    }))
  }

  const careers = Object.fromEntries(
    careerColumns.map(({ id, icon, entries }) => [
      id,
      {
        title: career.columns[id],
        icon,
        content: (
          <Timeline entries={entries.map((entry) => ({ id: entry, ...career.entries[entry] }))} />
        ),
      },
    ]),
  )

  const cards: Record<CardId, { title?: string; icon?: string; content: ReactNode }> = {
    identity: {
      content: (
        <div className="about-profile">
          <div className="about-frame">
            <img
              className="about-image"
              src={portrait.image}
              alt={`${about.portrait} ${profile.name}`}
              width={128}
              height={160}
              draggable={false}
              fetchPriority="high"
            />
          </div>
          <div className="about-details">
            <h1 className="about-name">{profile.name}</h1>
            <p className="about-role">
              <PixelIcon image={roleIcon} size={16} />
              {texts.role}
            </p>
            <p className="about-location">{about.location}</p>
          </div>
        </div>
      ),
    },
    text: {
      title: about.title,
      icon: aboutIcon,
      content: (
        <div className="about-introduction">
          {about.introduction.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ),
    },
    experience: careers.experience,
    training: careers.training,
  }

  return (
    <div className="about">
      <LazyMotion features={loadMotion} strict>
        <div ref={board} className="about-board">
          {order.map((id, index) => (
            <FloatingCard
              key={id}
              id={id}
              {...styles[id]}
              title={cards[id].title}
              icon={cards[id].icon}
              className={slotClass(order, index)}
              draggable={draggable}
              reduced={reduced}
              highlighted={target === id}
              offset={target === id ? preview?.offset : null}
              reshuffle={changes}
              bounds={board}
              onCardDrag={drag}
              onCardDrop={drop}
            >
              {cards[id].content}
            </FloatingCard>
          ))}
        </div>
      </LazyMotion>

      <div className="about-actions" role="group" aria-label={about.contact}>
        <ActionLink text={texts.home.write} icon={writeIcon} target="/contacto" variant="primary" />
        {socials.map(({ text, url, icon }) => (
          <ActionLink key={url} text={text} icon={icon} target={url} external />
        ))}
      </div>
    </div>
  )
}
