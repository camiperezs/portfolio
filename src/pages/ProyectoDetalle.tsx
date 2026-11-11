import { Link, Navigate, useParams } from 'react-router-dom'
import EnlaceAccion from '../components/ui/EnlaceAccion'
import Etiqueta from '../components/ui/Etiqueta'
import ListaTecnologias from '../components/ui/ListaTecnologias'
import MarcoImagen from '../components/ui/MarcoImagen'
import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'
import { iconoSinImagen, proyectos } from '../data/proyectos'
import { iconosTecnologia } from '../data/tecnologias'
import './Proyectos.css'

export default function ProyectoDetalle() {
  const { slug } = useParams()
  const { textos } = useIdioma()
  const { proyectos: textosProyectos } = textos
  const actual = proyectos.find((proyecto) => proyecto.slug === slug)

  if (!actual) return <Navigate to="/proyectos" replace />

  const texto = textosProyectos.items[actual.id]
  const tecnologias = actual.tecnologias.map((nombre) => ({ nombre, icono: iconosTecnologia[nombre] }))

  return (
    <Panel className="ficha">
      <Link className="ficha-volver" to="/proyectos">
        {textosProyectos.volver}
      </Link>
      <header className="ficha-cabecera">
        <div className="ficha-meta">
          <Etiqueta texto={textosProyectos.tipos[actual.tipo]} variante={actual.tipo} />
          <span>{textosProyectos.estados[actual.estado]}</span>
        </div>
        <h1 className="titulo-seccion">{texto.titulo}</h1>
        {texto.rol && <p className="ficha-rol">{texto.rol}</p>}
      </header>
      <div className="ficha-cuerpo">
        <div className="ficha-lateral">
          <MarcoImagen imagen={actual.imagen} alt={`${textosProyectos.imagenDe} ${texto.titulo}`} respaldo={iconoSinImagen} />
          {tecnologias.length > 0 && (
            <section className="ficha-bloque">
              <h2>{textosProyectos.tecnologias}</h2>
              <ListaTecnologias etiqueta={textosProyectos.tecnologias} tecnologias={tecnologias} />
            </section>
          )}
          {actual.sitio && (
            <div className="ficha-accion">
              <EnlaceAccion texto={textosProyectos.verSitio} destino={actual.sitio} externo variante="principal" />
            </div>
          )}
        </div>
        <div className="ficha-texto">
          <p>{texto.resumen}</p>
          {texto.desafio && (
            <section className="ficha-bloque">
              <h2>{textosProyectos.desafio}</h2>
              <p>{texto.desafio}</p>
            </section>
          )}
          {texto.lista && (
            <section className="ficha-bloque">
              <h2>{texto.lista.titulo}</h2>
              <ul className="ficha-lista">
                {texto.lista.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          {texto.contexto && (
            <section className="ficha-bloque">
              <h2>{textosProyectos.contexto}</h2>
              <p>{texto.contexto}</p>
            </section>
          )}
        </div>
      </div>
    </Panel>
  )
}
