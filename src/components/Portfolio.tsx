import { proyectos } from '../data/contenido'

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="contenido-seccion">
        <h2>PORTFOLIO</h2>
        <div className="galeria">
          {proyectos.map(({ titulo, descripcion, href, imagen }) => (
            <div className="proyecto" key={titulo}>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <img src={imagen} alt={titulo} />
                <div className="overlay">
                  <h3>{titulo}</h3>
                  <p>{descripcion}</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
