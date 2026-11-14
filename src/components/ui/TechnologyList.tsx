import './TechnologyList.css'

type Technology = {
  name: string
  icon?: string
}

type Props = {
  label: string
  technologies: Technology[]
}

export default function TechnologyList({ label, technologies }: Props) {
  return (
    <ul className="technology-list" aria-label={label}>
      {technologies.map(({ name, icon }) => (
        <li key={name}>
          {icon && <img src={icon} alt="" width={24} height={24} />}
          {name}
        </li>
      ))}
    </ul>
  )
}
