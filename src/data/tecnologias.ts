export type Tecnologia = {
  nombre: string
  icono: string
}

export type IdCategoria = 'backend' | 'frontend' | 'bases-de-datos' | 'e-commerce' | 'herramientas' | 'ia'

export type CategoriaTecnologias = {
  id: IdCategoria
  icono: string
  tecnologias: Tecnologia[]
}

export const categoriasTecnologias: CategoriaTecnologias[] = [
  {
    id: 'backend',
    icono: '/sprites/d-terminal.png',
    tecnologias: [
      { nombre: 'Java', icono: '/sprites/d-java.png' },
      { nombre: 'Spring Boot', icono: '/sprites/d-spring.png' },
      { nombre: 'Node.js', icono: '/sprites/d-node.png' },
      { nombre: 'PHP', icono: '/sprites/d-php.png' },
    ],
  },
  {
    id: 'frontend',
    icono: '/sprites/d-ventana.png',
    tecnologias: [
      { nombre: 'React', icono: '/sprites/d-react.png' },
      { nombre: 'JavaScript', icono: '/sprites/d-js.png' },
      { nombre: 'TypeScript', icono: '/sprites/d-ts.png' },
      { nombre: 'HTML', icono: '/sprites/d-html.png' },
      { nombre: 'CSS', icono: '/sprites/d-css.png' },
      { nombre: 'Bootstrap', icono: '/sprites/d-bootstrap.png' },
      { nombre: 'Tailwind CSS', icono: '/sprites/d-tailwind.png' },
    ],
  },
  {
    id: 'bases-de-datos',
    icono: '/sprites/d-bases.png',
    tecnologias: [
      { nombre: 'MySQL', icono: '/sprites/d-mysql.png' },
      { nombre: 'PostgreSQL', icono: '/sprites/d-postgresql.png' },
    ],
  },
  {
    id: 'e-commerce',
    icono: '/sprites/d-carrito.png',
    tecnologias: [{ nombre: 'OpenCart', icono: '/sprites/d-opencart.png' }],
  },
  {
    id: 'herramientas',
    icono: '/sprites/d-herramienta.png',
    tecnologias: [
      { nombre: 'Docker', icono: '/sprites/d-docker.png' },
      { nombre: 'GitHub', icono: '/sprites/d-github.png' },
      { nombre: 'Linux', icono: '/sprites/d-linux.png' },
    ],
  },
  {
    id: 'ia',
    icono: '/sprites/d-ia.png',
    tecnologias: [
      { nombre: 'Claude', icono: '/sprites/d-claude.png' },
      { nombre: 'Antigravity', icono: '/sprites/d-ag.png' },
      { nombre: 'ChatGPT', icono: '/sprites/d-gpt.png' },
    ],
  },
]

export const iconosTecnologia: Record<string, string> = Object.fromEntries(
  categoriasTecnologias.flatMap(({ tecnologias }) => tecnologias.map(({ nombre, icono }) => [nombre, icono])),
)
