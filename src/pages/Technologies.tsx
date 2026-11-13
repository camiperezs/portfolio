import { useId, useState } from 'react'
import ContactCta from '../components/ui/ContactCta'
import ActionLink from '../components/ui/ActionLink'
import TechnologyGrid from '../components/ui/TechnologyGrid'
import CategoryList from '../components/ui/CategoryList'
import Panel from '../components/ui/Panel'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { menuCursor, writeIcon } from '../data/navigation'
import { technologyCategories } from '../data/technologies'
import './Technologies.css'

export default function Technologies() {
  const { texts } = useLanguage()
  usePageTitle(texts.technologies.title)
  const { technologies: titles } = texts
  const baseId = useId()
  const [current, setCurrent] = useState<string>(technologyCategories[0].id)
  const categories = technologyCategories.map((category) => ({
    ...category,
    text: titles.categories[category.id],
  }))
  const { id, text, technologies } = categories.find((category) => category.id === current) ?? categories[0]

  return (
    <div className="technologies">
      <Panel className="technologies-menu">
        <h1 className="section-title">{titles.title}</h1>
        <CategoryList
          label={titles.label}
          baseId={baseId}
          categories={categories}
          cursor={menuCursor}
          current={current}
          onChange={setCurrent}
        />
      </Panel>
      <Panel className="technologies-detail">
        <div
          className="technologies-panel"
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${id}`}
          tabIndex={0}
        >
          <h2 className="technologies-category">{text}</h2>
          <TechnologyGrid technologies={technologies} />
        </div>
        <ContactCta title={titles.cta.title} text={titles.cta.text}>
          <ActionLink text={texts.home.write} icon={writeIcon} target="/contacto" variant="primary" />
          <ActionLink text={titles.cta.experience} target="/experiencia" />
        </ContactCta>
      </Panel>
    </div>
  )
}
