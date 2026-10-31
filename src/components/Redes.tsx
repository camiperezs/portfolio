import { redes } from '../data/contenido'

export default function Redes() {
  return (
    <div className="redes">
      {redes.map(({ href, icono, nombre }) => (
        <a key={href} href={href} target="_blank" rel="noopener noreferrer" aria-label={nombre}>
          <i className={icono}></i>
        </a>
      ))}
    </div>
  )
}
