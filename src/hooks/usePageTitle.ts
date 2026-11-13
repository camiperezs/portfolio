import { useEffect } from 'react'
import { profile } from '../data/profile'

export function usePageTitle(section?: string) {
  useEffect(() => {
    document.title = section ? `${section} · ${profile.brand}` : `${profile.brand} · ${profile.name}`
  }, [section])
}
