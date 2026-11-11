import CartaProyecto from '../components/ui/CartaProyecto'
import CierreContacto from '../components/ui/CierreContacto'
import EnlaceAccion from '../components/ui/EnlaceAccion'
import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'
import { useTituloPagina } from '../hooks/useTituloPagina'
import { iconoEscribir } from '../data/navegacion'
import { iconoSinImagen, proyectos } from '../data/proyectos'
import { iconosTecnologia } from '../data/tecnologias'
import './Proyectos.css'

export default function Proyectos() {
  const { textos } = useIdioma()
  useTituloPagina(textos.proyectos.titulo)
  const { proyectos: textosProyectos } = textos

  return (
    <Panel className="proyectos">
      <header className="proyectos-cabecera">
        <h1 className="titulo-seccion">{textosProyectos.titulo}</h1>
        <p className="proyectos-intro">{textosProyectos.intro}</p>
      </header>
      <ul className="proyectos-cartas" aria-label={textosProyectos.etiqueta}>
        {proyectos.map(({ id, slug, tipo, estado, tecnologias, imagen }) => {
          const { titulo } = textosProyectos.items[id]
          const iconos = tecnologias
            .filter((nombre) => iconosTecnologia[nombre])
            .slice(0, 4)
            .map((nombre) => ({ nombre, icono: iconosTecnologia[nombre] }))

          return (
            <li key={id}>
              <CartaProyecto
                ruta={`/proyectos/${slug}`}
                titulo={titulo}
                tipo={{ texto: textosProyectos.tipos[tipo], variante: tipo }}
                estado={textosProyectos.estados[estado]}
                imagen={imagen}
                respaldo={iconoSinImagen}
                iconos={iconos}
              />
            </li>
          )
        })}
      </ul>
      <CierreContacto titulo={textosProyectos.cierre.titulo} texto={textosProyectos.cierre.texto}>
        <EnlaceAccion texto={textos.inicio.escribir} icono={iconoEscribir} destino="/contacto" variante="principal" />
        <EnlaceAccion texto={textosProyectos.cierre.experiencia} destino="/experiencia" />
      </CierreContacto>
    </Panel>
  )
}
