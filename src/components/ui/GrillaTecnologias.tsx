import './GrillaTecnologias.css'

type Tecnologia = {
  nombre: string
  icono: string
}

export default function GrillaTecnologias({ tecnologias }: { tecnologias: Tecnologia[] }) {
  return (
    <ul className="grilla-tecnologias">
      {tecnologias.map(({ nombre, icono }) => (
        <li className="tecnologia" key={nombre}>
          <div className="tecnologia-tarjeta">
            <img src={icono} alt="" />
            {nombre}
          </div>
        </li>
      ))}
    </ul>
  )
}
