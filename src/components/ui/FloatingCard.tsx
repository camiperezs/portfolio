import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from 'react'
import { useMotionValue, useSpring, useTransform, useVelocity } from 'motion/react'
import * as m from 'motion/react-m'
import PixelIcon from './PixelIcon'
import './FloatingCard.css'

type Point = { x: number; y: number }

type Props = {
  id: string
  title?: string
  icon?: string
  tone?: 'accent' | 'plum'
  tilt?: number
  delay?: number
  draggable: boolean
  reduced: boolean
  highlighted?: boolean
  offset?: Point | null
  reshuffle?: number
  bounds: RefObject<HTMLElement | null>
  onCardDrag?: (id: string, point: Point) => void
  onCardDrop?: (id: string, point: Point) => void
  className?: string
  children: ReactNode
}

const MAX_ROTATION = 3
const VELOCITY_PER_DEGREE = 400

export default function FloatingCard({
  id,
  title,
  icon,
  tone = 'accent',
  tilt = 1,
  delay = 0,
  draggable,
  reduced,
  highlighted = false,
  offset = null,
  reshuffle = 0,
  bounds,
  onCardDrag,
  onCardDrop,
  className = '',
  children,
}: Props) {
  const [active, setActive] = useState(false)
  const [dragBounds, setDragBounds] = useState<Record<'left' | 'right' | 'top' | 'bottom', number>>()
  const node = useRef<HTMLElement>(null)
  const previousPlace = useRef<Point | null>(null)
  const previousReshuffle = useRef(reshuffle)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const velocity = useVelocity(x)
  const hoverRotation = useMotionValue(0)
  const targetRotation = useTransform(() => {
    const rotation = hoverRotation.get() + velocity.get() / VELOCITY_PER_DEGREE
    return Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, rotation))
  })
  const rotation = useSpring(targetRotation, { stiffness: 260, damping: 18 })

  const moveTo = (targetX: number, targetY: number) => {
    const transition = reduced ? { duration: 0.2 } : { type: 'spring' as const, stiffness: 260, damping: 20 }
    return import('../../lib/motion').then(({ animate }) =>
      Promise.all([animate(x, targetX, transition), animate(y, targetY, transition)]),
    )
  }

  const returnToPlace = () => moveTo(0, 0).then(() => setActive(false))

  const shiftX = offset?.x ?? 0
  const shiftY = offset?.y ?? 0

  useEffect(() => {
    if (active) return
    moveTo(shiftX, shiftY)
  }, [shiftX, shiftY])

  useLayoutEffect(() => {
    const element = node.current
    if (!element) return
    const place = {
      x: element.offsetLeft + element.offsetWidth / 2,
      y: element.offsetTop + element.offsetHeight / 2,
    }
    const previous = previousPlace.current
    previousPlace.current = place
    if (!previous || previousReshuffle.current === reshuffle) return
    previousReshuffle.current = reshuffle
    x.jump(x.get() + previous.x - place.x)
    y.jump(y.get() + previous.y - place.y)
    if (!active) returnToPlace()
  })

  const measureBounds = () => {
    const area = bounds.current?.getBoundingClientRect()
    const box = node.current?.getBoundingClientRect()
    if (!area || !box) return
    setDragBounds({
      left: area.left - box.left + x.get(),
      right: area.right - box.right + x.get(),
      top: area.top - box.top + y.get(),
      bottom: area.bottom - box.bottom + y.get(),
    })
  }

  const drop = (point: Point) => {
    onCardDrop?.(id, point)
    requestAnimationFrame(returnToPlace)
  }

  const classes = [
    'floating-card',
    `card-${tone}`,
    draggable && 'draggable',
    active && 'active',
    highlighted && 'highlighted',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <m.section
      ref={node}
      data-card={id}
      className={classes}
      style={{ x, y, rotate: reduced ? 0 : rotation }}
      drag={draggable}
      dragConstraints={dragBounds}
      onPointerDown={measureBounds}
      dragElastic={0.18}
      dragMomentum={false}
      whileDrag={{ scale: reduced ? 1 : 1.03 }}
      onHoverStart={() => draggable && hoverRotation.set(tilt)}
      onHoverEnd={() => hoverRotation.set(0)}
      onDragStart={() => setActive(true)}
      onDrag={(_, info) => onCardDrag?.(id, info.point)}
      onDragEnd={(_, info) => drop(info.point)}
    >
      <span className="floating-card-shadow" style={{ '--delay': `${delay}s` } as CSSProperties} aria-hidden="true" />
      <div className="floating-card-body" style={{ '--delay': `${delay}s` } as CSSProperties}>
        {title && (
          <header className="floating-card-header">
            {icon && (
              <span className="floating-card-icon">
                <PixelIcon image={icon} />
              </span>
            )}
            <h2 className="floating-card-title">{title}</h2>
          </header>
        )}
        {children}
        {draggable && <span className="floating-card-grip" aria-hidden="true" />}
      </div>
    </m.section>
  )
}
