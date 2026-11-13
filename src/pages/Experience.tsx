import { useId } from 'react'
import { useSearchParams } from 'react-router-dom'
import ExperienceArea from '../components/ui/ExperienceArea'
import ContactCta from '../components/ui/ContactCta'
import ActionLink from '../components/ui/ActionLink'
import Panel from '../components/ui/Panel'
import Tabs from '../components/ui/Tabs'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { experienceAreas } from '../data/experience'
import { writeIcon } from '../data/navigation'
import './Experience.css'

const areaParam = 'area'

export default function Experience() {
  const { texts } = useLanguage()
  usePageTitle(texts.experience.title)
  const { experience } = texts
  const baseId = useId()
  const [params, setParams] = useSearchParams()
  const requested = params.get(areaParam)
  const current = experienceAreas.find(({ id }) => id === requested)?.id ?? experienceAreas[0].id

  const change = (id: string) => {
    setParams(id === experienceAreas[0].id ? {} : { [areaParam]: id }, { replace: true })
  }

  const tabs = experienceAreas.map(({ id }) => ({ id, text: experience.areas[id].tab }))
  const labels = { whatIDid: experience.whatIDid, technologies: experience.technologies }

  return (
    <Panel className="experience">
      <header className="experience-header">
        <h1 className="section-title">{experience.title}</h1>
        <p className="experience-intro">{experience.intro}</p>
      </header>
      <div className="experience-explorer">
        <Tabs
          label={experience.label}
          baseId={baseId}
          tabs={tabs}
          current={current}
          onChange={change}
        />
        <div className="experience-panels">
          {experienceAreas.map(({ id, icon, technologies }) => (
            <ExperienceArea
              key={id}
              {...experience.areas[id]}
              panelId={`${baseId}-panel-${id}`}
              tabId={`${baseId}-tab-${id}`}
              active={id === current}
              icon={icon}
              technologies={technologies}
              labels={labels}
            />
          ))}
        </div>
      </div>
      <ContactCta title={experience.cta.title} text={experience.cta.text}>
        <ActionLink text={texts.home.write} icon={writeIcon} target="/contacto" variant="primary" />
        <ActionLink text={experience.cta.journey} target="/sobre-mi" />
      </ContactCta>
    </Panel>
  )
}
