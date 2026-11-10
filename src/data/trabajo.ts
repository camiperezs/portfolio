export type IdTrabajo = 'sistemaSalon' | 'integracionesPago' | 'rbac' | 'festival' | 'frontendStore'
export type TipoTrabajo = 'proyecto' | 'experiencia' | 'implementacion' | 'formacion'
export type EstadoTrabajo = 'desarrollo' | 'produccion' | 'publicado'

export type TextoTrabajo = {
  titulo: string
  rol?: string
  resumen: string
  desafio?: string
  lista?: { titulo: string; items: string[] }
  contexto?: string
}

type Trabajo = {
  id: IdTrabajo
  slug: string
  tipo: TipoTrabajo
  estado: EstadoTrabajo
  tecnologias: string[]
  imagen?: string
  sitio?: string
  parteDe?: IdTrabajo
}

export const trabajos: Trabajo[] = [
  {
    id: 'sistemaSalon',
    slug: 'sistema-salon',
    tipo: 'proyecto',
    estado: 'desarrollo',
    tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'integracionesPago',
    slug: 'integraciones-pago',
    tipo: 'experiencia',
    estado: 'produccion',
    tecnologias: ['PHP', 'MySQL', 'OpenCart', 'JavaScript', 'REST APIs'],
  },
  {
    id: 'rbac',
    slug: 'control-acceso-roles',
    tipo: 'implementacion',
    estado: 'desarrollo',
    tecnologias: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL', 'REST APIs'],
    parteDe: 'sistemaSalon',
  },
  {
    id: 'festival',
    slug: 'rock-edm-festival',
    tipo: 'formacion',
    estado: 'publicado',
    tecnologias: [],
    imagen: '/img/rockyedmfest.png',
    sitio: 'https://camiperezs-festival-musica.netlify.app/',
  },
  {
    id: 'frontendStore',
    slug: 'frontend-store',
    tipo: 'formacion',
    estado: 'publicado',
    tecnologias: [],
    imagen: '/img/frontendstore.jpg',
    sitio: 'https://cemiperezs-frontend-store.netlify.app/',
  },
]

export const iconoSinImagen = '/sprites/mascara-maletin.png'
