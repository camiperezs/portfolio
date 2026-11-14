import RadialBackground from '../components/layout/RadialBackground'
import ActionLink from '../components/ui/ActionLink'
import GameMenu from '../components/ui/GameMenu'
import { useLanguage } from '../context/LanguageContext'
import { usePageTitle } from '../hooks/usePageTitle'
import { menuCursor, writeIcon, sections } from '../data/navigation'
import { profile, socials } from '../data/profile'
import './Home.css'

export default function Home() {
  const { texts } = useLanguage()
  usePageTitle()
  const { home } = texts
  const options = sections.map(({ id, path, icon }) => ({
    path,
    icon,
    name: texts.navigation[id],
    description: home.descriptions[id],
  }))

  return (
    <RadialBackground>
      <main className="home">
        <p className="home-badge">{profile.brand}</p>
        <h1 className="home-name">{profile.name}</h1>
        <p className="home-role">
          <span className="home-point" aria-hidden="true"></span>
          {texts.role}
        </p>
        <p className="home-value">{home.value}</p>
        <div className="home-menu">
          <GameMenu label={home.menu} cursor={menuCursor} options={options} />
        </div>
        <div className="home-actions">
          <ActionLink text={home.write} icon={writeIcon} target="/contacto" variant="primary" />
          {socials.map(({ text, url, icon }) => (
            <ActionLink key={url} text={text} icon={icon} target={url} external />
          ))}
        </div>
      </main>
    </RadialBackground>
  )
}
