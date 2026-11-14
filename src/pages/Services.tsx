import ActionLink from '../components/ui/ActionLink'
import ContactCta from '../components/ui/ContactCta'
import FeaturedService from '../components/ui/FeaturedService'
import ModeColumn from '../components/ui/ModeColumn'
import Panel from '../components/ui/Panel'
import ServiceLink from '../components/ui/ServiceLink'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { menuCursor, writeIcon } from '../data/navigation'
import { mainServiceContact, mainServiceIcon, modes, services } from '../data/services'
import './Services.css'

export default function Services() {
  const { texts } = useLanguage()
  usePageTitle(texts.services.title)
  const { services: copy } = texts

  return (
    <div className="services">
      <header className="services-header">
        <div className="services-heading">
          <h1 className="section-title">{copy.title}</h1>
          <p className="services-intro">{copy.intro}</p>
        </div>
      </header>
      <div className="services-layout">
        <FeaturedService icon={mainServiceIcon} title={copy.main.title} description={copy.main.description}>
          <div className="services-modes">
            {modes.map((id) => (
              <ModeColumn key={id} {...copy.main.modes[id]} />
            ))}
          </div>
          <p className="services-common">{copy.main.common}</p>
        </FeaturedService>
        <nav className="services-list" aria-label={copy.listLabel}>
          <ul>
            {services.map(({ id, icon, contact }) => (
              <li key={id}>
                <ServiceLink to={contact} icon={icon} cursor={menuCursor} {...copy.items[id]} />
              </li>
            ))}
          </ul>
        </nav>
        <Panel className="services-cta">
          <ContactCta title={copy.cta.title}>
            <ActionLink text={texts.home.write} icon={writeIcon} target={mainServiceContact} variant="primary" />
          </ContactCta>
        </Panel>
      </div>
    </div>
  )
}
