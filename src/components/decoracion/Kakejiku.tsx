import { useId } from 'react'
import type { ReactNode } from 'react'
import './Kakejiku.css'

type Props = {
  abierto: boolean
  etiqueta: string
  onAlternar: () => void
  children: ReactNode
}

export default function Kakejiku({ abierto, etiqueta, onAlternar, children }: Props) {
  const idCuerpo = useId()

  const varilla = (posicion: 'superior' | 'inferior') => (
    <button
      type="button"
      className={`kakejiku-extremo ${posicion}`}
      aria-label={etiqueta}
      aria-expanded={abierto}
      aria-controls={idCuerpo}
      onClick={onAlternar}
    >
      <span className="kakejiku-varilla"></span>
    </button>
  )

  return (
    <main className={abierto ? 'kakejiku abierto' : 'kakejiku'}>
      {varilla('superior')}
      <div className="kakejiku-cuerpo" id={idCuerpo} inert={!abierto}>
        <div className="kakejiku-recorte">
          <div className="kakejiku-tela">
            <div className="kakejiku-papel">
              <div className="kakejiku-contenido">{children}</div>
            </div>
          </div>
        </div>
      </div>
      {varilla('inferior')}
    </main>
  )
}
