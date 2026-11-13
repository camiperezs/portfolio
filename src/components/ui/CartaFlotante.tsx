import { useEffect, useLayoutEffect, useRef, useState, type CSSProperties, type ReactNode, type RefObject } from 'react'
import { useMotionValue, useSpring, useTransform, useVelocity } from 'motion/react'
import * as m from 'motion/react-m'
import IconoPixel from './IconoPixel'
import './CartaFlotante.css'

type Punto = { x: number; y: number }

type Props = {
  id: string
  titulo?: string
  icono?: string
  tono?: 'acento' | 'ciruela'
  inclinacion?: number
  retraso?: number
  arrastrable: boolean
  reducido: boolean
  destacada?: boolean
  desplazamiento?: Punto | null
  reorganizacion?: number
  limites: RefObject<HTMLElement | null>
  onArrastrar?: (id: string, punto: Punto) => void
  onSoltar?: (id: string, punto: Punto) => void
  className?: string
  children: ReactNode
}

const GIRO_MAXIMO = 3
const VELOCIDAD_POR_GRADO = 400

export default function CartaFlotante({
  id,
  titulo,
  icono,
  tono = 'acento',
  inclinacion = 1,
  retraso = 0,
  arrastrable,
  reducido,
  destacada = false,
  desplazamiento = null,
  reorganizacion = 0,
  limites,
  onArrastrar,
  onSoltar,
  className = '',
  children,
}: Props) {
  const [activa, setActiva] = useState(false)
  const [limitesArrastre, setLimitesArrastre] = useState<Record<'left' | 'right' | 'top' | 'bottom', number>>()
  const nodo = useRef<HTMLElement>(null)
  const lugarPrevio = useRef<Punto | null>(null)
  const reorganizacionPrevia = useRef(reorganizacion)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const velocidad = useVelocity(x)
  const giroSobre = useMotionValue(0)
  const giroDeseado = useTransform(() => {
    const giro = giroSobre.get() + velocidad.get() / VELOCIDAD_POR_GRADO
    return Math.max(-GIRO_MAXIMO, Math.min(GIRO_MAXIMO, giro))
  })
  const giro = useSpring(giroDeseado, { stiffness: 260, damping: 18 })

  const moverA = (destinoX: number, destinoY: number) => {
    const transicion = reducido ? { duration: 0.2 } : { type: 'spring' as const, stiffness: 260, damping: 20 }
    return import('../../lib/movimiento').then(({ animate }) =>
      Promise.all([animate(x, destinoX, transicion), animate(y, destinoY, transicion)]),
    )
  }

  const volverAlLugar = () => moverA(0, 0).then(() => setActiva(false))

  const corrimientoX = desplazamiento?.x ?? 0
  const corrimientoY = desplazamiento?.y ?? 0

  useEffect(() => {
    if (activa) return
    moverA(corrimientoX, corrimientoY)
  }, [corrimientoX, corrimientoY])

  useLayoutEffect(() => {
    const elemento = nodo.current
    if (!elemento) return
    const lugar = {
      x: elemento.offsetLeft + elemento.offsetWidth / 2,
      y: elemento.offsetTop + elemento.offsetHeight / 2,
    }
    const previo = lugarPrevio.current
    lugarPrevio.current = lugar
    if (!previo || reorganizacionPrevia.current === reorganizacion) return
    reorganizacionPrevia.current = reorganizacion
    x.jump(x.get() + previo.x - lugar.x)
    y.jump(y.get() + previo.y - lugar.y)
    if (!activa) volverAlLugar()
  })

  const medirLimites = () => {
    const area = limites.current?.getBoundingClientRect()
    const caja = nodo.current?.getBoundingClientRect()
    if (!area || !caja) return
    setLimitesArrastre({
      left: area.left - caja.left + x.get(),
      right: area.right - caja.right + x.get(),
      top: area.top - caja.top + y.get(),
      bottom: area.bottom - caja.bottom + y.get(),
    })
  }

  const soltar = (punto: Punto) => {
    onSoltar?.(id, punto)
    requestAnimationFrame(volverAlLugar)
  }

  const clases = [
    'carta-flotante',
    `carta-${tono}`,
    arrastrable && 'arrastrable',
    activa && 'activa',
    destacada && 'destacada',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <m.section
      ref={nodo}
      data-carta={id}
      className={clases}
      style={{ x, y, rotate: reducido ? 0 : giro }}
      drag={arrastrable}
      dragConstraints={limitesArrastre}
      onPointerDown={medirLimites}
      dragElastic={0.18}
      dragMomentum={false}
      whileDrag={{ scale: reducido ? 1 : 1.03 }}
      onHoverStart={() => arrastrable && giroSobre.set(inclinacion)}
      onHoverEnd={() => giroSobre.set(0)}
      onDragStart={() => setActiva(true)}
      onDrag={(_, info) => onArrastrar?.(id, info.point)}
      onDragEnd={(_, info) => soltar(info.point)}
    >
      <span className="carta-flotante-sombra" style={{ '--retraso': `${retraso}s` } as CSSProperties} aria-hidden="true" />
      <div className="carta-flotante-cuerpo" style={{ '--retraso': `${retraso}s` } as CSSProperties}>
        {titulo && (
          <header className="carta-flotante-cabecera">
            {icono && (
              <span className="carta-flotante-icono">
                <IconoPixel imagen={icono} />
              </span>
            )}
            <h2 className="carta-flotante-titulo">{titulo}</h2>
          </header>
        )}
        {children}
        {arrastrable && <span className="carta-flotante-agarre" aria-hidden="true" />}
      </div>
    </m.section>
  )
}
