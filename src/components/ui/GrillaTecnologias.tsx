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
          <img src={icono} alt="" width={48} height={48} />
          <span>{nombre}</span>
        </li>
      ))}
    </ul>
  )
}
