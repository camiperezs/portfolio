import { useId } from 'react'
import { useSearchParams } from 'react-router-dom'
import ExperienceArea from '../components/ui/ExperienceArea'
import Panel from '../components/ui/Panel'
import Tabs from '../components/ui/Tabs'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { jobParam, jobs, legacyAreas } from '../data/experience'
import './Experience.css'

export default function Experience() {
  const { texts } = useLanguage()
  usePageTitle(texts.experience.title)
  const { experience } = texts
  const baseId = useId()
  const [params, setParams] = useSearchParams()
  const requested = params.get(jobParam) ?? legacyAreas[params.get('area') ?? '']
  const current = jobs.find(({ id }) => id === requested)?.id ?? jobs[0].id

  const change = (id: string) => {
    setParams(id === jobs[0].id ? {} : { [jobParam]: id }, { replace: true })
  }

  const tabs = jobs.map(({ id, company }) => ({ id, text: company }))
  const labels = { achievements: experience.achievements, technologies: experience.technologies }

  return (
    <Panel className="experience">
      <header className="experience-header">
        <h1 className="section-title">{experience.title}</h1>
        <p className="experience-intro">{experience.intro}</p>
      </header>
      <div className="experience-explorer">
        <Tabs label={experience.label} baseId={baseId} tabs={tabs} current={current} onChange={change} />
        <div className="experience-panels">
          {jobs.map(({ id, company, icon, technologies }) => {
            const { role, period, description, achievements } = experience.jobs[id]
            return (
              <ExperienceArea
                key={id}
                panelId={`${baseId}-panel-${id}`}
                tabId={`${baseId}-tab-${id}`}
                active={id === current}
                title={role}
                meta={`${company} · ${period}`}
                icon={icon}
                description={description}
                achievements={achievements}
                technologies={technologies}
                labels={labels}
              />
            )
          })}
        </div>
      </div>
    </Panel>
  )
}
