export type ProjectId = 'salonSystem' | 'festival' | 'frontendStore'
export type ProjectType = 'project' | 'training'
export type ProjectStatus = 'development' | 'published'

export type ProjectText = {
  title: string
  role?: string
  summary: string
  challenge?: string
  list?: { title: string; items: string[] }
  context?: string
}

type Project = {
  id: ProjectId
  slug: string
  type: ProjectType
  status: ProjectStatus
  technologies: string[]
  image?: string
  site?: string
}

export const projects: Project[] = [
  {
    id: 'salonSystem',
    slug: 'sistema-salon',
    type: 'project',
    status: 'development',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'festival',
    slug: 'rock-edm-festival',
    type: 'training',
    status: 'published',
    technologies: [],
    image: '/img/rockyedmfest.webp',
    site: 'https://camiperezs-festival-musica.netlify.app/',
  },
  {
    id: 'frontendStore',
    slug: 'frontend-store',
    type: 'training',
    status: 'published',
    technologies: [],
    image: '/img/frontendstore.webp',
    site: 'https://cemiperezs-frontend-store.netlify.app/',
  },
]

export const noImageIcon = '/sprites/mask-window.png'

export const workRedirects: Record<string, string> = {
  'integraciones-pago': '/experiencia?empresa=waia',
  'control-acceso-roles': '/proyectos/sistema-salon',
}
