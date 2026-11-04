import CartaTrabajo from '../components/ui/CartaTrabajo'
import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'
import { iconosTecnologia } from '../data/tecnologias'
import { farolSinImagen, trabajos } from '../data/trabajo'
import './Trabajo.css'

export default function Trabajo() {
  const { textos } = useIdioma()
  const { trabajo } = textos

  return (
    <Panel className="trabajo">
      <h1 className="titulo">{trabajo.titulo}</h1>
      <ul className="trabajo-cartas" aria-label={trabajo.etiqueta}>
        {trabajos.map(({ id, slug, tipo, estado, tecnologias, imagen }) => {
          const { titulo } = trabajo.items[id]
          const iconos = tecnologias
            .filter((nombre) => iconosTecnologia[nombre])
            .slice(0, 4)
            .map((nombre) => ({ nombre, icono: iconosTecnologia[nombre] }))

          return (
            <li key={id}>
              <CartaTrabajo
                ruta={`/trabajo/${slug}`}
                titulo={titulo}
                tipo={{ texto: trabajo.tipos[tipo], variante: tipo }}
                estado={trabajo.estados[estado]}
                imagen={imagen}
                imagenAlt={`${trabajo.imagenDe} ${titulo}`}
                respaldo={farolSinImagen}
                iconos={iconos}
              />
            </li>
          )
        })}
      </ul>
    </Panel>
  )
}
