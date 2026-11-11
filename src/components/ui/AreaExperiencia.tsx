import IconoPixel from './IconoPixel'
import './AreaExperiencia.css'

type Props = {
  titulo: string
  icono: string
  problema: string
  logros: string[]
  tecnologias: string[]
  etiquetas: { problema: string; queHice: string; tecnologias: string }
}

export default function AreaExperiencia({ titulo, icono, problema, logros, tecnologias, etiquetas }: Props) {
  return (
    <article className="area">
      <header className="area-cabecera">
        <span className="area-baldosa" aria-hidden="true">
          <IconoPixel imagen={icono} />
        </span>
        <h2 className="area-titulo">{titulo}</h2>
      </header>
      <div className="area-cuerpo">
        <section className="area-bloque">
          <h3>{etiquetas.problema}</h3>
          <p>{problema}</p>
        </section>
        <section className="area-bloque">
          <h3>{etiquetas.queHice}</h3>
          <ul className="area-logros">
            {logros.map((logro) => (
              <li key={logro}>{logro}</li>
            ))}
          </ul>
        </section>
        <section className="area-bloque">
          <h3>{etiquetas.tecnologias}</h3>
          <ul className="area-tecnologias">
            {tecnologias.map((tecnologia) => (
              <li key={tecnologia}>{tecnologia}</li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  )
}
