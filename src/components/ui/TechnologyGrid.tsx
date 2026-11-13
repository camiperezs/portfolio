import './TechnologyGrid.css'

type Technology = {
  name: string
  icon: string
}

export default function TechnologyGrid({ technologies }: { technologies: Technology[] }) {
  return (
    <ul className="technology-grid">
      {technologies.map(({ name, icon }) => (
        <li className="technology" key={name}>
          <img src={icon} alt="" width={48} height={48} />
          <span>{name}</span>
        </li>
      ))}
    </ul>
  )
}
