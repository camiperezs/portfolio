export type AreaId = 'ecommerce' | 'authentication' | 'automation'

export type AreaText = {
  tab: string
  title: string
  description: string
  achievements: string[]
}

export const experienceAreas: { id: AreaId; icon: string; technologies: string[] }[] = [
  {
    id: 'ecommerce',
    icon: '/sprites/mask-cart.png',
    technologies: ['PHP', 'MySQL', 'OpenCart', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'authentication',
    icon: '/sprites/mask-lock.png',
    technologies: ['Node.js', 'Fastify', 'JWT'],
  },
  {
    id: 'automation',
    icon: '/sprites/mask-ai.png',
    technologies: ['Node.js', 'Fastify', 'PostgreSQL', 'Redis', 'AWS Lambda', 'API Gateway'],
  },
]
