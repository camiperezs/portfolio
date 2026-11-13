import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import RadialBackground from '../components/layout/RadialBackground'
import Navbar from '../components/layout/Navbar'
import { useLanguage } from '../context/LanguageContext'
import { sections } from '../data/navigation'
import { profile } from '../data/profile'
import SiteControls from './SiteControls'
import './Layout.css'

export default function Layout() {
  const { pathname } = useLocation()
  const { texts } = useLanguage()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  const navbarSections = sections.map(({ id, path }) => ({ path, text: texts.navigation[id] }))

  return (
    <RadialBackground>
      <Navbar
        brand={profile.brand}
        label={texts.navigation.label}
        menuText={texts.navigation.menu}
        sections={navbarSections}
        controls={<SiteControls />}
      />
      <main className="content">
        <Outlet />
      </main>
    </RadialBackground>
  )
}
