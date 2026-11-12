export type IdArea = 'ecommerce' | 'autenticacion' | 'automatizacion'

export type TextoArea = {
  pestana: string
  titulo: string
  descripcion: string
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
    tecnologias: ['Node.js', 'Fastify', 'JWT'],
  },
  {
    id: 'automatizacion',
    icono: '/sprites/mascara-ia.png',
    tecnologias: ['Node.js', 'Fastify', 'PostgreSQL', 'Redis', 'AWS Lambda', 'API Gateway'],
  },
]
