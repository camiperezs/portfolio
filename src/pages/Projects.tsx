import ProjectCard from '../components/ui/ProjectCard'
import ContactCta from '../components/ui/ContactCta'
import ActionLink from '../components/ui/ActionLink'
import Panel from '../components/ui/Panel'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { writeIcon } from '../data/navigation'
import { noImageIcon, projects } from '../data/projects'
import { technologyIcons } from '../data/technologies'
import './Projects.css'

export default function Projects() {
  const { texts } = useLanguage()
  usePageTitle(texts.projects.title)
  const { projects: projectTexts } = texts

  return (
    <Panel className="projects">
      <header className="projects-header">
        <h1 className="section-title">{projectTexts.title}</h1>
        <p className="projects-intro">{projectTexts.intro}</p>
      </header>
      <ul className="projects-cards" aria-label={projectTexts.label}>
        {projects.map(({ id, slug, type, status, technologies, image }) => {
          const { title } = projectTexts.items[id]
          const icons = technologies
            .filter((name) => technologyIcons[name])
            .slice(0, 4)
            .map((name) => ({ name, icon: technologyIcons[name] }))

          return (
            <li key={id}>
              <ProjectCard
                path={`/proyectos/${slug}`}
                title={title}
                type={{ text: projectTexts.types[type], variant: type }}
                status={projectTexts.statuses[status]}
                image={image}
                fallback={noImageIcon}
                icons={icons}
              />
            </li>
          )
        })}
      </ul>
      <ContactCta title={projectTexts.cta.title} text={projectTexts.cta.text}>
        <ActionLink text={texts.home.write} icon={writeIcon} target="/contacto" variant="primary" />
        <ActionLink text={projectTexts.cta.experience} target="/experiencia" />
      </ContactCta>
    </Panel>
  )
}
