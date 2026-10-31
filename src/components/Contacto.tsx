import { datosContacto } from '../data/contenido'

export default function Contacto() {
  return (
    <section id="contacto" className="contacto">
      <div className="contenido-seccion">
        <h2>CONTACTO</h2>
        <div className="col">
          <div className="fondo-imagen"></div>
          <div className="info">
            <ul>
              {datosContacto.map(({ icono, texto }) => (
                <li key={icono}>
                  <i className={icono}></i>
                  {texto}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
