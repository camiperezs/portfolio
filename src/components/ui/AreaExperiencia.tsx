import IconoPixel from './IconoPixel'
import './AreaExperiencia.css'

type Props = {
  idPanel: string
  idPestana: string
  activa: boolean
  titulo: string
  icono: string
  descripcion: string
  logros: string[]
  tecnologias: string[]
  etiquetas: { queHice: string; tecnologias: string }
}

export default function AreaExperiencia({
  idPanel,
  idPestana,
  activa,
  titulo,
  icono,
  descripcion,
  logros,
  tecnologias,
  etiquetas,
}: Props) {
  return (
    <section
      className="area"
      id={idPanel}
      role="tabpanel"
      aria-labelledby={idPestana}
      tabIndex={activa ? 0 : -1}
      data-activa={activa}
    >
      <header className="area-cabecera">
        <span className="area-baldosa" aria-hidden="true">
          <IconoPixel imagen={icono} />
        </span>
        <h2 className="area-titulo">{titulo}</h2>
      </header>
      <p className="area-descripcion">{descripcion}</p>
      <div className="area-bloque">
        <h3>{etiquetas.queHice}</h3>
        <ul className="area-logros">
          {logros.map((logro) => (
            <li key={logro}>{logro}</li>
          ))}
        </ul>
      </div>
      <div className="area-bloque area-pie">
        <h3>{etiquetas.tecnologias}</h3>
        <ul className="area-tecnologias">
          {tecnologias.map((tecnologia) => (
            <li key={tecnologia} translate="no">
              {tecnologia}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
