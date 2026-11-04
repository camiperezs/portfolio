import { Link, Navigate, useParams } from 'react-router-dom'
import Etiqueta from '../components/ui/Etiqueta'
import ListaTecnologias from '../components/ui/ListaTecnologias'
import MarcoImagen from '../components/ui/MarcoImagen'
import Panel from '../components/ui/Panel'
import { useIdioma } from '../context/IdiomaContext'
import { iconosTecnologia } from '../data/tecnologias'
import { farolSinImagen, trabajos } from '../data/trabajo'
import './Trabajo.css'

export default function TrabajoDetalle() {
  const { slug } = useParams()
  const { textos } = useIdioma()
  const { trabajo } = textos
  const actual = trabajos.find((item) => item.slug === slug)

  if (!actual) return <Navigate to="/trabajo" replace />

  const texto = trabajo.items[actual.id]
  const padre = trabajos.find((item) => item.id === actual.parteDe)
  const hijos = trabajos.filter((item) => item.parteDe === actual.id)
  const tecnologias = actual.tecnologias.map((nombre) => ({ nombre, icono: iconosTecnologia[nombre] }))
  const vinculos = [
    ...(padre ? [{ etiqueta: trabajo.parteDe, item: padre }] : []),
    ...hijos.map((item) => ({ etiqueta: trabajo.incluye, item })),
  ]

  return (
    <Panel className="ficha">
      <Link className="ficha-volver" to="/trabajo">
        {trabajo.volver}
      </Link>
      <header className="ficha-cabecera">
        <div className="ficha-meta">
          <Etiqueta texto={trabajo.tipos[actual.tipo]} variante={actual.tipo} />
          <span>{trabajo.estados[actual.estado]}</span>
        </div>
        <h1 className="titulo">{texto.titulo}</h1>
        {texto.rol && <p className="ficha-rol">{texto.rol}</p>}
      </header>
      <div className="ficha-cuerpo">
        <div className="ficha-lateral">
          <MarcoImagen
            imagen={actual.imagen}
            alt={`${trabajo.imagenDe} ${texto.titulo}`}
            respaldo={farolSinImagen}
            grande
          />
          {tecnologias.length > 0 && (
            <section className="ficha-bloque">
              <h2>{trabajo.tecnologias}</h2>
              <ListaTecnologias etiqueta={trabajo.tecnologias} tecnologias={tecnologias} />
            </section>
          )}
          {actual.sitio && (
            <a className="ficha-enlace" href={actual.sitio} target="_blank" rel="noopener noreferrer">
              {trabajo.verSitio}
            </a>
          )}
        </div>
        <div className="ficha-texto">
          <p>{texto.resumen}</p>
          {texto.desafio && (
            <section className="ficha-bloque">
              <h2>{trabajo.desafio}</h2>
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
              <h2>{trabajo.contexto}</h2>
              <p>{texto.contexto}</p>
            </section>
          )}
          {vinculos.map(({ etiqueta, item }) => (
            <p key={item.id}>
              {etiqueta}:{' '}
              <Link className="ficha-enlace" to={`/trabajo/${item.slug}`}>
                {trabajo.items[item.id].titulo}
              </Link>
            </p>
          ))}
        </div>
      </div>
    </Panel>
  )
}
