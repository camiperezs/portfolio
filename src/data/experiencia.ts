export type IdArea = 'ecommerce' | 'autenticacion' | 'automatizacion'

export type TextoArea = {
  titulo: string
  problema: string
  logros: string[]
}

export const areasExperiencia: { id: IdArea; icono: string; tecnologias: string[] }[] = [
  {
    id: 'ecommerce',
    icono: '/sprites/mascara-carrito.png',
    tecnologias: ['PHP', 'MySQL', 'OpenCart', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'autenticacion',
    icono: '/sprites/mascara-candado.png',
    tecnologias: ['JWT', 'Node.js', 'Fastify'],
  },
  {
    id: 'automatizacion',
    icono: '/sprites/mascara-ia.png',
    tecnologias: ['Node.js', 'Fastify', 'PostgreSQL', 'Redis', 'AWS Lambda', 'API Gateway'],
  },
]
