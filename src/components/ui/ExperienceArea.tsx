import PixelIcon from './PixelIcon'
import './ExperienceArea.css'

type Props = {
  panelId: string
  tabId: string
  active: boolean
  title: string
  icon: string
  description: string
  achievements: string[]
  technologies: string[]
  labels: { whatIDid: string; technologies: string }
}

export default function ExperienceArea({
  panelId,
  tabId,
  active,
  title,
  icon,
  description,
  achievements,
  technologies,
  labels,
}: Props) {
  return (
    <section
      className="area"
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      tabIndex={active ? 0 : -1}
      data-active={active}
    >
      <header className="area-header">
        <span className="area-tile" aria-hidden="true">
          <PixelIcon image={icon} />
        </span>
        <h2 className="area-title">{title}</h2>
      </header>
      <p className="area-description">{description}</p>
      <div className="area-block">
        <h3>{labels.whatIDid}</h3>
        <ul className="area-achievements">
          {achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      </div>
      <div className="area-block area-footer">
        <h3>{labels.technologies}</h3>
        <ul className="area-technologies">
          {technologies.map((technology) => (
            <li key={technology} translate="no">
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
