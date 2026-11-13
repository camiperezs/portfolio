import { useRef, useState, type ReactNode } from 'react'
import { LazyMotion } from 'motion/react'
import CartaFlotante from '../components/ui/CartaFlotante'
import EnlaceAccion from '../components/ui/EnlaceAccion'
import IconoPixel from '../components/ui/IconoPixel'
import LineaTiempo from '../components/ui/LineaTiempo'
import { useIdioma } from '../context/IdiomaContext'
import { useConsultaMedia } from '../hooks/useConsultaMedia'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { iconoEscribir, secciones } from '../data/navegacion'
import { perfil, redes } from '../data/perfil'
import { columnasTrayectoria, retrato } from '../data/sobreMi'
import './SobreMi.css'

type IdCarta = 'identidad' | 'texto' | 'experiencia' | 'formacion'
type Punto = { x: number; y: number }
type VistaPrevia = { destino: IdCarta; desplazamiento: Punto }

const cargarMovimiento = () => import('../lib/movimiento').then((modulo) => modulo.default)
const iconoSobreMi = secciones.find(({ id }) => id === 'sobreMi')?.icono
const iconoRol = '/sprites/mascara-codigo.png'
const ordenInicial: IdCarta[] = ['identidad', 'texto', 'experiencia', 'formacion']
const cartaFija: IdCarta = 'texto'
const ANTICIPO = 0.5

const estilos = {
  identidad: { tono: 'acento', inclinacion: -1, retraso: 0 },
  texto: { tono: 'acento', inclinacion: 1, retraso: 1.6 },
  experiencia: { tono: 'ciruela', inclinacion: 1, retraso: 3.2 },
  formacion: { tono: 'ciruela', inclinacion: -1, retraso: 4.8 },
} as const

function claseHueco(orden: IdCarta[], indice: number) {
  const filaAncha = Math.floor(orden.indexOf(cartaFija) / 2)
  if (Math.floor(indice / 2) === filaAncha) {
    return orden[indice] === cartaFija ? 'hueco-ancho' : 'hueco-angosto'
  }
  return indice % 2 === 0 ? 'hueco-medio-izquierdo' : 'hueco-medio-derecho'
}

function intercambiar(orden: IdCarta[], origen: IdCarta, destino: IdCarta) {
  return orden.map((id) => (id === origen ? destino : id === destino ? origen : id))
}

function cartaBajo(area: HTMLElement | null, origen: string, punto: Punto) {
  if (!area) return null
  const borde = area.getBoundingClientRect()
  const x = punto.x - window.scrollX - borde.left
  const y = punto.y - window.scrollY - borde.top
  for (const elemento of area.querySelectorAll<HTMLElement>('[data-carta]')) {
    const id = elemento.dataset.carta
    if (id === origen) continue
    const dentroX = x >= elemento.offsetLeft && x <= elemento.offsetLeft + elemento.offsetWidth
    const dentroY = y >= elemento.offsetTop && y <= elemento.offsetTop + elemento.offsetHeight
    if (dentroX && dentroY) return id as IdCarta
  }
  return null
}

export default function SobreMi() {
  const { textos } = useIdioma()
  useTituloPagina(textos.sobreMi.titulo)
  const { sobreMi } = textos
  const { trayectoria } = sobreMi
  const tablero = useRef<HTMLDivElement>(null)
  const [{ orden, cambios }, setDisposicion] = useState({ orden: ordenInicial, cambios: 0 })
  const [vistaPrevia, setVistaPrevia] = useState<VistaPrevia | null>(null)
  const reducido = useConsultaMedia('(prefers-reduced-motion: reduce)')
  const arrastrable = useConsultaMedia('(hover: hover) and (pointer: fine) and (min-width: 900px)')
  const destino = vistaPrevia?.destino

  const medirDesplazamiento = (origen: string, id: IdCarta) => {
    const lugar = tablero.current?.querySelector<HTMLElement>(`[data-carta="${origen}"]`)
    const carta = tablero.current?.querySelector<HTMLElement>(`[data-carta="${id}"]`)
    if (!lugar || !carta) return null
    const centro = (elemento: HTMLElement) => ({
      x: elemento.offsetLeft + elemento.offsetWidth / 2,
      y: elemento.offsetTop + elemento.offsetHeight / 2,
    })
    const desde = centro(carta)
    const hacia = centro(lugar)
    return { x: (hacia.x - desde.x) * ANTICIPO, y: (hacia.y - desde.y) * ANTICIPO }
  }

  const arrastrar = (origen: string, punto: Punto) => {
    const id = cartaBajo(tablero.current, origen, punto)
    if (id === (destino ?? null)) return
    const desplazamiento = id && medirDesplazamiento(origen, id)
    setVistaPrevia(id && desplazamiento ? { destino: id, desplazamiento } : null)
  }

  const soltar = (origen: string, punto: Punto) => {
    const id = cartaBajo(tablero.current, origen, punto)
    setVistaPrevia(null)
    if (!id) return
    setDisposicion((actual) => ({
      orden: intercambiar(actual.orden, origen as IdCarta, id),
      cambios: actual.cambios + 1,
    }))
  }

  const trayectorias = Object.fromEntries(
    columnasTrayectoria.map(({ id, icono, entradas }) => [
      id,
      {
        titulo: trayectoria.columnas[id],
        icono,
        contenido: (
          <LineaTiempo entradas={entradas.map((entrada) => ({ id: entrada, ...trayectoria.entradas[entrada] }))} />
        ),
      },
    ]),
  )

  const cartas: Record<IdCarta, { titulo?: string; icono?: string; contenido: ReactNode }> = {
    identidad: {
      contenido: (
        <div className="sobre-mi-perfil">
          <div className="sobre-mi-marco">
            <img
              className="sobre-mi-imagen"
              src={retrato.imagen}
              alt={`${sobreMi.retrato} ${perfil.nombre}`}
              width={128}
              height={160}
              draggable={false}
              fetchPriority="high"
            />
          </div>
          <div className="sobre-mi-datos">
            <h1 className="sobre-mi-nombre">{perfil.nombre}</h1>
            <p className="sobre-mi-rol">
              <IconoPixel imagen={iconoRol} tamano={16} />
              {textos.rol}
            </p>
            <p className="sobre-mi-ciudad">{retrato.ciudad}</p>
          </div>
        </div>
      ),
    },
    texto: {
      titulo: sobreMi.titulo,
      icono: iconoSobreMi,
      contenido: <p className="sobre-mi-presentacion">{sobreMi.presentacion}</p>,
    },
    experiencia: trayectorias.experiencia,
    formacion: trayectorias.formacion,
  }

  return (
    <div className="sobre-mi">
      <LazyMotion features={cargarMovimiento} strict>
        <div ref={tablero} className="sobre-mi-tablero">
          {orden.map((id, indice) => (
            <CartaFlotante
              key={id}
              id={id}
              {...estilos[id]}
              titulo={cartas[id].titulo}
              icono={cartas[id].icono}
              className={claseHueco(orden, indice)}
              arrastrable={arrastrable}
              reducido={reducido}
              destacada={destino === id}
              desplazamiento={destino === id ? vistaPrevia?.desplazamiento : null}
              reorganizacion={cambios}
              limites={tablero}
              onArrastrar={arrastrar}
              onSoltar={soltar}
            >
              {cartas[id].contenido}
            </CartaFlotante>
          ))}
        </div>
      </LazyMotion>

      <div className="sobre-mi-acciones" role="group" aria-label={sobreMi.contacto}>
        <EnlaceAccion texto={textos.inicio.escribir} icono={iconoEscribir} destino="/contacto" variante="principal" />
        {redes.map(({ texto, url, icono }) => (
          <EnlaceAccion key={url} texto={texto} icono={icono} destino={url} externo />
        ))}
      </div>
    </div>
  )
}
