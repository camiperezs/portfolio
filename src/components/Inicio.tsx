import Redes from './Redes'

export default function Inicio() {
  return (
    <section id="inicio" className="inicio">
      <div className="contenido-banner">
        <div className="contenedor-img">
          <img src="/img/hero.jpeg" alt="" />
        </div>
        <div className="contenedor-texto">
          <h1>Camila Perez</h1>
          <h2>Full Stack Developer</h2>
        </div>
        <Redes />
      </div>
    </section>
  )
}
