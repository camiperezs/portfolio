export type ProjectId = 'salonSystem'
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
    slug: 'gestor-estetica',
    type: 'project',
    status: 'development',
    technologies: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS'],
  },
]

export const noImageIcon = '/sprites/mask-window.png'

export const projectRedirects: Record<string, string> = {
  'sistema-salon': '/proyectos/gestor-estetica',
  'rock-edm-festival': '/proyectos',
  'frontend-store': '/proyectos',
}

export const workRedirects: Record<string, string> = {
  'integraciones-pago': '/experiencia?empresa=waia',
  'control-acceso-roles': '/proyectos/gestor-estetica',
}
