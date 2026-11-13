export type Technology = {
  name: string
  icon: string
}

export type CategoryId = 'backend' | 'frontend' | 'databases' | 'e-commerce' | 'tools' | 'ai'

export type TechnologyCategory = {
  id: CategoryId
  icon: string
  technologies: Technology[]
}

export const technologyCategories: TechnologyCategory[] = [
  {
    id: 'backend',
    icon: '/sprites/d-terminal.png',
    technologies: [
      { name: 'Java', icon: '/sprites/d-java.png' },
      { name: 'Spring Boot', icon: '/sprites/d-spring.png' },
      { name: 'Node.js', icon: '/sprites/d-node.png' },
      { name: 'PHP', icon: '/sprites/d-php.png' },
    ],
  },
  {
    id: 'frontend',
    icon: '/sprites/d-window.png',
    technologies: [
      { name: 'React', icon: '/sprites/d-react.png' },
      { name: 'JavaScript', icon: '/sprites/d-js.png' },
      { name: 'TypeScript', icon: '/sprites/d-ts.png' },
      { name: 'HTML', icon: '/sprites/d-html.png' },
      { name: 'CSS', icon: '/sprites/d-css.png' },
      { name: 'Bootstrap', icon: '/sprites/d-bootstrap.png' },
      { name: 'Tailwind CSS', icon: '/sprites/d-tailwind.png' },
    ],
  },
  {
    id: 'databases',
    icon: '/sprites/d-databases.png',
    technologies: [
      { name: 'MySQL', icon: '/sprites/d-mysql.png' },
      { name: 'PostgreSQL', icon: '/sprites/d-postgresql.png' },
    ],
  },
  {
    id: 'e-commerce',
    icon: '/sprites/d-cart.png',
    technologies: [{ name: 'OpenCart', icon: '/sprites/d-opencart.png' }],
  },
  {
    id: 'tools',
    icon: '/sprites/d-tool.png',
    technologies: [
      { name: 'Docker', icon: '/sprites/d-docker.png' },
      { name: 'GitHub', icon: '/sprites/d-github.png' },
      { name: 'Linux', icon: '/sprites/d-linux.png' },
    ],
  },
  {
    id: 'ai',
    icon: '/sprites/d-ai.png',
    technologies: [
      { name: 'Claude', icon: '/sprites/d-claude.png' },
      { name: 'Antigravity', icon: '/sprites/d-ag.png' },
      { name: 'ChatGPT', icon: '/sprites/d-gpt.png' },
    ],
  },
]

export const technologyIcons: Record<string, string> = Object.fromEntries(
  technologyCategories.flatMap(({ technologies }) => technologies.map(({ name, icon }) => [name, icon])),
)
