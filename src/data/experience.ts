export type JobId = 'unio' | 'waia'

export type JobText = {
  role: string
  period: string
  description: string[]
  achievements: string[]
}

export const jobs: { id: JobId; company: string; icon: string; technologies: string[] }[] = [
  {
    id: 'unio',
    company: 'Unio',
    icon: '/sprites/mask-code.png',
    technologies: ['Node.js', 'Fastify', 'PostgreSQL', 'Redis', 'AWS Lambda', 'API Gateway', 'n8n'],
  },
  {
    id: 'waia',
    company: 'WAIA',
    icon: '/sprites/mask-cart.png',
    technologies: ['PHP', 'MySQL', 'OpenCart', 'JavaScript', 'REST APIs', 'OAuth', 'Docker'],
  },
]

export const jobParam = 'empresa'

export const legacyAreas: Record<string, JobId> = {
  ecommerce: 'waia',
  autenticacion: 'unio',
  automatizacion: 'unio',
}
