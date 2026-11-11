import AreaExperiencia from '../components/ui/AreaExperiencia'
import EnlaceAccion from '../components/ui/EnlaceAccion'
import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'
import { areasExperiencia } from '../data/experiencia'
import { iconoEscribir } from '../data/navegacion'
import './Experiencia.css'

export default function Experiencia() {
  const { textos } = useIdioma()
  const { experiencia } = textos
  const etiquetas = {
    problema: experiencia.problema,
    queHice: experiencia.queHice,
    tecnologias: experiencia.tecnologias,
  }

  return (
    <Panel className="experiencia">
      <header className="experiencia-cabecera">
        <h1 className="titulo-seccion">{experiencia.titulo}</h1>
        <p className="experiencia-intro">{experiencia.intro}</p>
      </header>
      <ul className="experiencia-areas" aria-label={experiencia.etiqueta}>
        {areasExperiencia.map(({ id, icono, tecnologias }) => (
          <li key={id}>
            <AreaExperiencia {...experiencia.areas[id]} icono={icono} tecnologias={tecnologias} etiquetas={etiquetas} />
          </li>
        ))}
      </ul>
      <section className="experiencia-cierre" aria-labelledby="experiencia-cierre-titulo">
        <div>
          <h2 id="experiencia-cierre-titulo">{experiencia.cierre.titulo}</h2>
          <p>{experiencia.cierre.texto}</p>
        </div>
        <div className="experiencia-acciones">
          <EnlaceAccion texto={textos.inicio.escribir} icono={iconoEscribir} destino="/contacto" variante="principal" />
          <EnlaceAccion texto={experiencia.cierre.recorrido} destino="/sobre-mi?seccion=recorrido" />
        </div>
      </section>
    </Panel>
  )
}
