export type IdProyecto = 'sistemaSalon' | 'festival' | 'frontendStore'
export type TipoProyecto = 'proyecto' | 'formacion'
export type EstadoProyecto = 'desarrollo' | 'publicado'

export type TextoProyecto = {
  titulo: string
  rol?: string
  resumen: string
  desafio?: string
  lista?: { titulo: string; items: string[] }
  contexto?: string
}

type Proyecto = {
  id: IdProyecto
  slug: string
  tipo: TipoProyecto
  estado: EstadoProyecto
  tecnologias: string[]
  imagen?: string
  sitio?: string
}

export const proyectos: Proyecto[] = [
  {
    id: 'sistemaSalon',
    slug: 'sistema-salon',
    tipo: 'proyecto',
    estado: 'desarrollo',
    tecnologias: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'festival',
    slug: 'rock-edm-festival',
    tipo: 'formacion',
    estado: 'publicado',
    tecnologias: [],
    imagen: '/img/rockyedmfest.webp',
    sitio: 'https://camiperezs-festival-musica.netlify.app/',
  },
  {
    id: 'frontendStore',
    slug: 'frontend-store',
    tipo: 'formacion',
    estado: 'publicado',
    tecnologias: [],
    imagen: '/img/frontendstore.webp',
    sitio: 'https://cemiperezs-frontend-store.netlify.app/',
  },
]

export const iconoSinImagen = '/sprites/mascara-ventana.png'

export const redireccionesTrabajo: Record<string, string> = {
  'integraciones-pago': '/experiencia',
  'control-acceso-roles': '/proyectos/sistema-salon',
}
