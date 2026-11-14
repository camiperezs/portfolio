import PixelIcon from './PixelIcon'
import './ExperienceArea.css'

type Props = {
  panelId: string
  tabId: string
  active: boolean
  title: string
  meta: string
  icon: string
  description: string[]
  achievements: string[]
  technologies: string[]
  labels: { achievements: string; technologies: string }
}

export default function ExperienceArea({
  panelId,
  tabId,
  active,
  title,
  meta,
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
        <div className="area-heading">
          <h2 className="area-title">{title}</h2>
          <p className="area-meta">{meta}</p>
        </div>
      </header>
      <div className="area-description">
        {description.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="area-block">
        <h3>{labels.achievements}</h3>
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
