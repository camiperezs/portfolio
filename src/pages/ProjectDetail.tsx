import { Link, Navigate, useParams } from 'react-router-dom'
import ContactCta from '../components/ui/ContactCta'
import ActionLink from '../components/ui/ActionLink'
import Label from '../components/ui/Label'
import TechnologyList from '../components/ui/TechnologyList'
import ImageFrame from '../components/ui/ImageFrame'
import Panel from '../components/ui/Panel'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { writeIcon } from '../data/navigation'
import { noImageIcon, projectRedirects, projects } from '../data/projects'
import { technologyIcons } from '../data/technologies'
import './Projects.css'

export default function ProjectDetail() {
  const { slug } = useParams()
  const { texts } = useLanguage()
  const { projects: projectTexts } = texts
  const current = projects.find((project) => project.slug === slug)
  usePageTitle(current ? texts.projects.items[current.id].title : undefined)

  if (!current) return <Navigate to={projectRedirects[slug ?? ''] ?? '/proyectos'} replace />

  const text = projectTexts.items[current.id]
  const technologies = current.technologies.map((name) => ({ name, icon: technologyIcons[name] }))

  return (
    <Panel className="detail">
      <Link className="detail-back" to="/proyectos">
        {projectTexts.back}
      </Link>
      <header className="detail-header">
        <div className="detail-meta">
          <Label text={projectTexts.types[current.type]} variant={current.type} />
          <span>{projectTexts.statuses[current.status]}</span>
        </div>
        <h1 className="section-title">{text.title}</h1>
        {text.role && <p className="detail-role">{text.role}</p>}
      </header>
      <div className="detail-body">
        <div className="detail-side">
          <ImageFrame
            image={current.image}
            alt={`${projectTexts.imageOf} ${text.title}`}
            fallback={noImageIcon}
            loading="immediate"
          />
          {technologies.length > 0 && (
            <section className="detail-block">
              <h2>{projectTexts.technologies}</h2>
              <TechnologyList label={projectTexts.technologies} technologies={technologies} />
            </section>
          )}
          {current.site && (
            <div className="detail-action">
              <ActionLink text={projectTexts.viewSite} target={current.site} external />
            </div>
          )}
        </div>
        <div className="detail-text">
          <p>{text.summary}</p>
          {text.challenge && (
            <section className="detail-block">
              <h2>{projectTexts.challenge}</h2>
              <p>{text.challenge}</p>
            </section>
          )}
          {text.list && (
            <section className="detail-block">
              <h2>{text.list.title}</h2>
              <ul className="detail-list">
                {text.list.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}
          {text.context && (
            <section className="detail-block">
              <h2>{projectTexts.context}</h2>
              <p>{text.context}</p>
            </section>
          )}
        </div>
      </div>
      <ContactCta title={projectTexts.cta.title} text={projectTexts.cta.text}>
        <ActionLink text={texts.home.write} icon={writeIcon} target="/contacto" variant="primary" />
        <ActionLink text={projectTexts.cta.experience} target="/experiencia" />
      </ContactCta>
    </Panel>
  )
}
