import { datosPersonales, skills } from '../data/contenido'

export default function SobreMi() {
  return (
    <section id="sobremi" className="sobremi">
      <div className="contenido-seccion">
        <h2>Hola, soy Camila Pérez!</h2>
        <p>
          Tengo 25 años y nací en Baradero, Buenos Aires. A mis 18 años me mudé a la ciudad de Rosario, donde me encuentro actualmente.<br />
          Mi amor por la programación comenzó a finales del año 2022 con un curso introductorio llamado "Programación desde 0"
          {' '}con <a href="https://egg.live/es-ar/" target="_blank" rel="noopener noreferrer"><span>Egg Corporation</span></a>,
          {' '}donde la herramienta PSEINT asistió mis primeros pasos. Continué bajo la enseñanza de Egg hasta obtener
          {' '}en el mes de Diciembre del año 2023 el certificado de Full Stack Developer. Allí vimos Java con el framework Spring como lenguaje de Backend,
          {' '}MySQL como base de datos y REACT como librería de Frontend. También, se nos enseñó a utilizar la herramienta de GitHub con Git para subir nuestros proyectos a la nube
          {' '}y poder trabajar en equipo. <br />
          <a href="/certificados/certificadoFullStack.pdf" target="_blank" rel="noopener noreferrer"><span>¡Click aqui para ver el certificado!</span></a><br />
          Actualmente amplío mis conocimientos desde la plataforma Udemy con el profesor Juan Pablo De la Torre Valdez, en su curso de
          {' '}<a href="https://www.udemy.com/course/desarrollo-web-completo-con-html5-css3-js-php-y-mysql/" target="_blank" rel="noopener noreferrer"><span>Desarrollo Web</span>.</a>
          {' '}y estoy buscando mi primer empleo como programadora, entusiasmada por proyectar lo aprendido y generar nuevas experiencias.
        </p>
        <div className="fila">
          <div className="col">
            <h3>Algunos datos Sobre Mi!</h3>
            <ul>
              {datosPersonales.map(({ etiqueta, valor }) => (
                <li key={etiqueta}>
                  <strong>{etiqueta}</strong>
                  {' '}{valor}
                </li>
              ))}
            </ul>
          </div>
          <div className="col">
            <h3>Skills</h3>
            <div className="contenedor-skills">
              {skills.map(({ nombre, icono }) => (
                <div className="skill" key={nombre}>
                  <i className={icono}></i>
                  <span>{nombre}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
