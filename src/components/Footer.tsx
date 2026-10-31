import Redes from './Redes'

export default function Footer() {
  return (
    <footer>
      <a href="#inicio" className="arriba" aria-label="Volver arriba">
        <i className="fa-solid fa-angles-up"></i>
      </a>
      <Redes />
    </footer>
  )
}
